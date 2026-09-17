///|
/// The compiler reads only this caller-supplied virtual filesystem.
pub(all) struct Compilation {
  css : String
  loaded_files : Array[String]
  diagnostics : Array[String]
}

///|
fn clean_path(path : String) -> String raise ParseError {
  if path.is_empty() ||
    path.has_prefix("/") ||
    path.contains("\\") ||
    path.contains(":") ||
    path.contains("\u0000") {
    raise Invalid("expected relative virtual file path")
  }
  let parts : Array[String] = []
  for item in path.split("/") {
    let part = item.to_owned()
    if part.is_empty() || part == "." {
      continue
    }
    if part == ".." {
      if parts.is_empty() {
        raise Invalid("module escapes virtual root")
      }
      ignore(parts.pop())
    } else {
      parts.push(part)
    }
  }
  if parts.is_empty() {
    raise Invalid("empty file path")
  }
  parts.join("/")
}

///|
fn directory(path : String) -> String {
  let parts = path.split("/").to_array()
  if parts.length() < 2 {
    ""
  } else {
    parts[:parts.length() - 1].to_owned().join("/") + "/"
  }
}

///|
fn Evaluation::resolve(
  self : Evaluation,
  from : String,
  url : String,
) -> String raise ParseError {
  if url.has_prefix("/") || url.contains("\\") || url.contains(":") {
    raise Invalid("unsupported module URL")
  }
  let path = clean_path(directory(from) + url)
  let dir = directory(path)
  let base = path[dir.length():].to_owned()
  let suffix = if base.has_suffix(".scss") { "" } else { ".scss" }
  let candidates = [path + suffix, dir + "_" + base + suffix]
  let found = candidates.filter(p => self.files.contains(p))
  if found.length() > 1 {
    raise Invalid("ambiguous module " + url)
  }
  if found.length() == 1 {
    return found[0]
  }
  if !base.has_suffix(".scss") {
    let found = [path + "/index.scss", path + "/_index.scss"].filter(p => {
      self.files.contains(p)
    })
    if found.length() > 1 {
      raise Invalid("ambiguous index module " + url)
    }
    if found.length() == 1 {
      return found[0]
    }
  }
  raise Invalid("module not found " + url)
}

///|
fn Evaluation::load_file(
  self : Evaluation,
  path : String,
  configuration : Map[String, SassValue],
  strict? : Bool = true,
) -> Scope raise ParseError {
  if self.loading.contains(path) {
    raise Invalid("module load cycle " + path)
  }
  if self.loaded.get(path) is Some(frame) {
    if !configuration.is_empty() {
      raise Invalid("module already loaded; cannot configure " + path)
    }
    return frame
  }
  if self.loading.length() >= 32 {
    raise Invalid("module nesting limit")
  }
  let source = match self.files.get(path) {
    Some(value) => value
    None => raise Invalid("entry file not found")
  }
  let nodes = Source::{ chars: source.to_array(), pos: 0, }.statements(false, 0)
  validate_content(nodes, false)
  validate_semantics(nodes, true, false, false, false)
  let frame = { ..Scope::new(None), evaluation: self, path, }
  for key, value in configuration {
    frame.configuration[key] = value
    frame.configured[key] = true
  }
  self.loading.push(path)
  let emitter = Emitter::{
    output: StringBuilder(),
    size: 0,
    budget: 10000,
    pending: [],
    pending_size: 0,
    parents: [],
  }
  render(nodes, [], frame, emitter, 0, None, false, "")
  emitter.flush()
  if strict && !frame.configured.is_empty() {
    raise Invalid("configured variable was not declared with !default")
  }
  ignore(self.loading.pop())
  self.loaded[path] = frame
  self.order.push(path)
  self.css.push(emitter.output.to_string())
  frame
}

///|
/// Compile an entry and its SCSS modules without accessing the host filesystem.
pub fn compile_files(
  entry : String,
  files : Map[String, String],
) -> Compilation raise ParseError {
  if files.is_empty() || files.length() > 256 {
    raise Invalid("virtual file count limit")
  }
  let evaluation = Evaluation::new()
  let mut size = 0
  for path, source in files {
    let path = clean_path(path)
    if !path.has_suffix(".scss") {
      raise Invalid("virtual sources must use .scss")
    }
    if source.length() > 100000 {
      raise Invalid("source limit")
    }
    size += source.length()
    if size > 2000000 {
      raise Invalid("project source limit")
    }
    if evaluation.files.contains(path) {
      raise Invalid("duplicate canonical file path")
    }
    evaluation.files[path] = source
  }
  ignore(evaluation.load_file(clean_path(entry), Map([])))
  let mut length = 0
  for css in evaluation.css {
    length += css.length()
    if length > 1000000 {
      raise Invalid("CSS output limit")
    }
  }
  {
    css: evaluation.css.join(""),
    loaded_files: evaluation.order,
    diagnostics: evaluation.diagnostics,
  }
}

///|
fn public_name(name : String) -> Bool {
  !identifier(name).has_prefix("-")
}

///|
fn Scope::public_variable(self : Scope, name : String) -> (Scope, String)? {
  if !public_name(name) {
    return None
  }
  if self.vars.contains(name) {
    Some((self, name))
  } else {
    self.forwarded_vars.get(name)
  }
}

///|
fn Scope::public_callable(
  self : Scope,
  name : String,
  function : Bool,
) -> Mixin? {
  if !public_name(name) {
    return None
  }
  if function {
    match self.functions.get(name) {
      Some(value) => Some(value)
      None => self.forwarded_functions.get(name)
    }
  } else {
    match self.mixins.get(name) {
      Some(value) => Some(value)
      None => self.forwarded_mixins.get(name)
    }
  }
}

///|
fn Scope::find_module(self : Scope, prefix : String) -> Scope? {
  match self.module_scopes.get(prefix) {
    Some(value) => Some(value)
    None =>
      match self.parent {
        Some(parent) => parent.find_module(prefix)
        None => None
      }
  }
}

///|
fn Scope::qualified_owner(
  self : Scope,
  name : String,
) -> (Scope, String) raise ParseError {
  let parts = name.split(".").to_array()
  if parts.length() != 2 {
    raise Invalid("invalid module member")
  }
  let prefix = parts[0].to_owned()
  if self.standard(prefix) is Some(_) {
    raise Invalid("standard module variables are read-only")
  }
  let library = match self.find_module(prefix) {
    Some(frame) => frame
    None => raise Invalid("undefined module " + prefix)
  }
  match library.public_variable(parts[1].to_owned()) {
    Some(origin) => origin
    None => raise Invalid("undefined or private module variable")
  }
}

///|
fn Scope::qualified_variable(
  self : Scope,
  name : String,
) -> SassValue? raise ParseError {
  let parts = name.split(".").to_array()
  if parts.length() == 2 && self.standard(parts[0].to_owned()) == Some("math") {
    match parts[1].to_owned() {
      "pi" => return Some(numeric(3.141592653589793))
      "e" => return Some(numeric(2.718281828459045))
      "epsilon" => return Some(numeric(0.0000000000000002220446049250313))
      "max-safe-integer" => return Some(numeric(9007199254740991.0))
      "min-safe-integer" => return Some(numeric(-9007199254740991.0))
      _ => raise Invalid("undefined standard module variable")
    }
  }
  let (owner, key) = self.qualified_owner(name)
  owner.vars.get(key)
}

///|
fn Scope::qualified_callable(
  self : Scope,
  name : String,
  function : Bool,
) -> Mixin? raise ParseError {
  let parts = name.split(".").to_array()
  if parts.length() != 2 {
    raise Invalid("invalid module callable")
  }
  let prefix = parts[0].to_owned()
  if self.standard(prefix) is Some(_) {
    return None
  }
  let library = match self.find_module(prefix) {
    Some(frame) => frame
    None => raise Invalid("undefined module " + prefix)
  }
  library.public_callable(parts[1].to_owned(), function)
}

///|
fn same_origin(a : (Scope, String), b : (Scope, String)) -> Bool {
  a.0.path == b.0.path && a.1 == b.1
}

///|
fn Scope::star_variable(
  self : Scope,
  name : String,
) -> (Scope, String)? raise ParseError {
  let mut result = None
  for library in self.star_scopes {
    if library.public_variable(name) is Some(origin) {
      if result is Some(previous) && !same_origin(previous, origin) {
        raise Invalid("ambiguous global module variable")
      }
      result = Some(origin)
    }
  }
  result
}

///|
fn Scope::star_callable(
  self : Scope,
  name : String,
  function : Bool,
) -> Mixin? raise ParseError {
  let mut result : Mixin? = None
  for library in self.star_scopes {
    if library.public_callable(name, function) is Some(value) {
      if result is Some(previous) &&
        (previous.scope.path != value.scope.path || previous.name != value.name) {
        raise Invalid("ambiguous global module callable")
      }
      result = Some(value)
    }
  }
  result
}

///|
fn Scope::load_directive(
  self : Scope,
  source : String,
  forward : Bool,
) -> Unit raise ParseError {
  if self.parent is Some(_) {
    raise Invalid("module directives must be at root")
  }
  let parser = ExpressionParser::{ chars: source.to_array(), pos: 0, depth: 0, }
  ignore(parser.space())
  if parser.peek() != '"' && parser.peek() != '\'' {
    raise Invalid("module URL must be quoted")
  }
  let expression = parser.atom()
  let url = require_text(self.eval_ast(expression, true, 0)).0
  let mut tail = String::from_array(parser.chars[parser.pos:]).trim().to_owned()
  if url.has_prefix("sass:") {
    if forward {
      raise Invalid("forwarding standard modules is not implemented")
    }
    self.use_standard(source)
    return
  }
  let configuration : Map[String, SassValue] = Map([])
  let defaults : Map[String, Bool] = Map([])
  let config_parts = tail.split("with ").to_array()
  if config_parts.length() > 2 {
    raise Invalid("invalid module configuration")
  }
  if config_parts.length() == 2 {
    tail = config_parts[0].trim().to_owned()
    let values = config_parts[1].trim().to_owned()
    if !values.has_prefix("(") || !values.has_suffix(")") {
      raise Invalid("configuration requires parentheses")
    }
    for part in split_top(values[1:values.length() - 1].to_owned(), ',') {
      if part.is_empty() {
        continue
      }
      let pieces = split_top(part, ':')
      if pieces.length() < 2 {
        raise Invalid("configuration requires variable")
      }
      let key = control_variable(pieces[0])
      if !public_name(key) {
        raise Invalid("cannot configure private variable")
      }
      if configuration.contains(key) {
        raise Invalid("duplicate configuration variable")
      }
      let mut expression = pieces[1:].to_owned().join(":")
      if expression.has_suffix("!default") {
        if !forward {
          raise Invalid("default flag is only allowed in forward configuration")
        }
        expression = expression[:expression.length() - 8].trim().to_owned()
        defaults[key] = true
      }
      configuration[key] = self.evaluate(expression)
    }
  }
  let path = self.evaluation.resolve(self.path, url)
  if forward {
    let (prefix, show, hide, filters) = forward_policy(tail)
    let incoming : Map[String, String] = Map([])
    let explicit = configuration.copy()
    for key, _ in self.configured {
      if !key.has_prefix(prefix) {
        continue
      }
      let original = key[prefix.length():].to_owned()
      if !forward_visible("$" + key, show, hide, filters) {
        continue
      }
      if configuration.contains(original) && !defaults.contains(original) {
        raise Invalid("forward configuration cannot be overridden")
      }
      if self.configuration.get(key) is Some(value) {
        configuration[original] = value
        incoming[original] = key
      }
    }
    let library = self.evaluation.load_file(path, configuration, strict=false)
    for key, _ in explicit {
      if library.configured.contains(key) {
        raise Invalid(
          "forward configured variable was not declared with !default",
        )
      }
    }
    for original, key in incoming {
      if !library.configured.contains(original) {
        self.configured.remove(key)
      }
    }
    self.forward_members(library, tail)
    return
  }
  let library = self.evaluation.load_file(path, configuration)
  let base = path[directory(path).length():path.length() - 5].to_owned()
  let default_prefix = if base.has_prefix("_") {
    base[1:].to_owned()
  } else {
    base
  }
  // An index module receives the URL's directory name.
  let default_prefix = if default_prefix == "index" {
    let parts = url.split("/").to_array()
    parts.last().unwrap_or("").to_owned()
  } else {
    default_prefix
  }
  let prefix = if tail.is_empty() {
    default_prefix
  } else {
    if !tail.has_prefix("as ") {
      raise Invalid("invalid use clause")
    }
    tail[3:].trim().to_owned()
  }
  if prefix == "*" {
    for name, _ in self.vars {
      if library.public_variable(name) is Some(_) {
        raise Invalid("global module variable conflicts with existing variable")
      }
    }
    self.star_scopes.push(library)
    return
  }
  if prefix.is_empty() || !prefix.to_array().iter().all(name_char) {
    raise Invalid("invalid module namespace")
  }
  if self.module_scopes.contains(prefix) ||
    self.standard_modules.contains(prefix) {
    raise Invalid("module namespace already used")
  }
  self.module_scopes[prefix] = library
}

///|
fn Scope::forward_members(
  self : Scope,
  library : Scope,
  clause : String,
) -> Unit raise ParseError {
  let (prefix, show, hide, filters) = forward_policy(clause)
  let visible = fn(name : String) -> Bool {
    forward_visible(name, show, hide, filters)
  }
  let vars = library.forwarded_vars.copy()
  for name, _ in library.vars {
    if public_name(name) {
      vars[name] = (library, name)
    }
  }
  for name, origin in vars {
    if !public_name(name) || !visible("$" + prefix + name) {
      continue
    }
    let key = prefix + name
    if self.forwarded_vars.get(key) is Some(previous) &&
      !same_origin(previous, origin) {
      raise Invalid("conflicting forwarded variable")
    }
    self.forwarded_vars[key] = origin
  }
  let functions = library.forwarded_functions.copy()
  for name, value in library.functions {
    if public_name(name) {
      functions[name] = value
    }
  }
  for name, value in functions {
    if !public_name(name) || !visible(prefix + name) {
      continue
    }
    let key = prefix + name
    if self.forwarded_functions.get(key) is Some(previous) &&
      (previous.scope.path != value.scope.path || previous.name != value.name) {
      raise Invalid("conflicting forwarded function")
    }
    self.forwarded_functions[key] = value
  }
  let mixins = library.forwarded_mixins.copy()
  for name, value in library.mixins {
    if public_name(name) {
      mixins[name] = value
    }
  }
  for name, value in mixins {
    if !public_name(name) || !visible(prefix + name) {
      continue
    }
    let key = prefix + name
    if self.forwarded_mixins.get(key) is Some(previous) &&
      (previous.scope.path != value.scope.path || previous.name != value.name) {
      raise Invalid("conflicting forwarded mixin")
    }
    self.forwarded_mixins[key] = value
  }
}

///|
fn forward_policy(
  clause : String,
) -> (String, Bool, Bool, Array[String]) raise ParseError {
  let mut tail = clause
  let mut prefix = ""
  if tail.has_prefix("as ") {
    let parts = tail[3:].split(" ").to_array()
    let value = parts[0].to_owned()
    if !value.has_suffix("*") {
      raise Invalid("forward prefix requires star")
    }
    prefix = identifier(value[:value.length() - 1].to_owned())
    tail = parts[1:].to_owned().join(" ").trim().to_owned()
  }
  let show = tail.has_prefix("show ")
  let hide = tail.has_prefix("hide ")
  if !tail.is_empty() && !show && !hide {
    raise Invalid("invalid forward clause")
  }
  let filters = if show || hide {
    split_top(tail[5:].to_owned(), ',').map(identifier)
  } else {
    []
  }
  (prefix, show, hide, filters)
}

///|
fn forward_visible(
  name : String,
  show : Bool,
  hide : Bool,
  filters : Array[String],
) -> Bool {
  (!show || filters.contains(name)) && (!hide || !filters.contains(name))
}

///|
fn validate_semantics(
  nodes : Array[Statement],
  root : Bool,
  function : Bool,
  inside_mixin : Bool,
  flow : Bool,
) -> Unit raise ParseError {
  let mut before_rules = true
  for node in nodes {
    match node {
      Leaf(text) => {
        if text.has_prefix("@return") && !function {
          raise Invalid("return outside function")
        }
        if text.has_prefix("@use ") || text.has_prefix("@forward ") {
          if !root || !before_rules {
            raise Invalid("module directives must precede rules")
          }
        } else if !text.has_prefix("$") {
          before_rules = false
        }
      }
      Block(header, body) => {
        before_rules = false
        let is_function = header.has_prefix("@function ")
        let is_mixin = header.has_prefix("@mixin ")
        let is_flow = header.has_prefix("@if ") ||
          header == "@else" ||
          header.has_prefix("@else if ") ||
          header.has_prefix("@while ") ||
          header.has_prefix("@each ") ||
          header.has_prefix("@for ")
        if (is_function || is_mixin) && (flow || function || inside_mixin) {
          raise Invalid("nested callable definition")
        }
        if is_function {
          validate_function(body)
        }
        validate_semantics(
          body,
          false,
          function || is_function,
          inside_mixin || is_mixin,
          flow || is_flow,
        )
      }
    }
  }
}
