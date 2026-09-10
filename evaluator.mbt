///|
priv enum Statement {
  Leaf(String)
  Block(String, Array[Statement])
}

///|
priv struct Scope {
  vars : Map[String, String]
  mixins : Map[String, Mixin]
  parent : Scope?
}

///|
priv struct Mixin {
  params : Array[(String, String?)]
  rest : String?
  body : Array[Statement]
  scope : Scope
}

///|
priv struct Content {
  body : Array[Statement]
  scope : Scope
  outer : Content?
}

///|
fn Scope::new(parent : Scope?) -> Scope {
  { vars: Map([]), mixins: Map([]), parent, }
}

///|
fn identifier(name : String) -> String {
  name.replace_all(old="_", new="-")
}

///|
fn Scope::get(self : Scope, name : String) -> String? {
  match self.vars.get(identifier(name)) {
    Some(v) => Some(v)
    None =>
      match self.parent {
        Some(p) => p.get(name)
        None => None
      }
  }
}

///|
fn Scope::lookup_mixin(self : Scope, name : String) -> Mixin? {
  match self.mixins.get(identifier(name)) {
    Some(v) => Some(v)
    None =>
      match self.parent {
        Some(p) => p.lookup_mixin(name)
        None => None
      }
  }
}

///|
fn Scope::global(self : Scope) -> Scope {
  match self.parent {
    Some(p) => p.global()
    None => self
  }
}

///|
fn Scope::expand(
  self : Scope,
  text : String,
  variables? : Bool = true,
) -> String raise ParseError {
  let cs = text.to_array()
  let out = StringBuilder()
  let mut size = 0
  let mut i = 0
  let mut quote = '\u0000'
  while i < cs.length() {
    let c = cs[i]
    if c == '\\' {
      out.write_char(c)
      i += 1
      size += 1
      if i < cs.length() {
        out.write_char(cs[i])
        i += 1
        size += 2
      }
      continue
    }
    if c == '#' && i + 1 < cs.length() && cs[i + 1] == '{' {
      i += 2
      let start = i
      while i < cs.length() && cs[i] != '}' {
        i += 1
      }
      if i == cs.length() {
        raise Invalid("unterminated interpolation")
      }
      let expression = String::from_array(cs[start:i]).trim().to_owned()
      i += 1
      let value = if expression.has_prefix("$") {
        match self.get(expression[1:].to_owned()) {
          Some(v) => v
          None => raise Invalid("undefined interpolation variable")
        }
      } else if (expression.has_prefix("\"") && expression.has_suffix("\"")) ||
        (expression.has_prefix("'") && expression.has_suffix("'")) {
        expression
      } else {
        raise Invalid("interpolation expression not implemented")
      }
      let value = if value.length() >= 2 &&
        (
          (value.has_prefix("\"") && value.has_suffix("\"")) ||
          (value.has_prefix("'") && value.has_suffix("'"))
        ) {
        value[1:value.length() - 1].to_owned()
      } else {
        value
      }
      let value = if value == "()" { "" } else { value }
      out.write_string(value)
      size += value.length()
    } else if variables && c == '$' && quote == '\u0000' {
      i += 1
      let start = i
      while i < cs.length() && (word(cs[i]) || cs[i] == '-') {
        i += 1
      }
      let key = String::from_array(cs[start:i])
      let value = match self.get(key) {
        Some(v) => v
        None => raise Invalid("undefined variable " + key)
      }
      out.write_string(value)
      size += value.length()
    } else {
      if quote == '\u0000' && (c == '\'' || c == '"') {
        quote = c
      } else if c == quote {
        quote = '\u0000'
      }
      out.write_char(c)
      i += 1
      size += c.utf16_len()
    }
    if size > 1000000 {
      raise Invalid("expanded value limit")
    }
  }
  if size > 1000000 {
    raise Invalid("expanded value limit")
  }
  out.to_string()
}

///|
fn Source::statements(
  self : Source,
  closing : Bool,
  depth : Int,
) -> Array[Statement] raise ParseError {
  if depth > 32 {
    raise Invalid("nesting limit")
  }
  let nodes = []
  while true {
    let (text, end) = self.segment()
    if end == '{' {
      nodes.push(Block(text, self.statements(true, depth + 1)))
    } else if !text.is_empty() {
      nodes.push(Leaf(text))
    }
    if end == '}' {
      if !closing {
        raise Invalid("unexpected closing brace")
      }
      break
    }
    if end == '\u0000' {
      if closing {
        raise Invalid("missing closing brace")
      }
      break
    }
  }
  nodes
}

///|
fn invocation(text : String) -> (String, Array[String]) raise ParseError {
  let cs = text.trim().to_owned().to_array()
  let mut at = 0
  while at < cs.length() && cs[at] != '(' {
    at += 1
  }
  let name = String::from_array(cs[:at]).trim().to_owned()
  if name.is_empty() || !name.to_array().iter().all(c => word(c) || c == '-') {
    raise Invalid("invalid mixin name")
  }
  if at == cs.length() {
    return (identifier(name), [])
  }
  if cs.last() != Some(')') {
    raise Invalid("invalid mixin arguments")
  }
  let inner = String::from_array(cs[at + 1:cs.length() - 1]).trim().to_owned()
  (identifier(name), if inner.is_empty() { [] } else { split_top(inner, ',') })
}

///|
priv struct Emitter {
  output : StringBuilder
  mut size : Int
  mut budget : Int
  mut pending_size : Int
  mut pending : Array[String]
  mut parents : Array[String]
}

///|
fn Emitter::write(self : Emitter, text : String) -> Unit raise ParseError {
  self.size += text.length()
  if self.size > 1000000 {
    raise Invalid("CSS output limit")
  }
  self.output.write_string(text)
}

///|
fn Emitter::flush(self : Emitter) -> Unit raise ParseError {
  if self.pending.is_empty() {
    return
  }
  if !self.parents.is_empty() {
    self.write(self.parents.join(", ") + " {\n")
  }
  self.write(self.pending.join(""))
  if !self.parents.is_empty() {
    self.write("}\n")
  }
  self.pending = []
  self.pending_size = 0
}

///|
fn Emitter::property(
  self : Emitter,
  parents : Array[String],
  key : String,
  value : String,
) -> Unit raise ParseError {
  if self.parents != parents {
    self.flush()
    self.parents = parents
  }
  let text = "  " +
    key +
    (if key.has_prefix("--") { ":" } else { ": " }) +
    value +
    ";\n"
  if text.length() > 1000000 {
    raise Invalid("property limit")
  }
  self.pending_size += text.length()
  if self.pending_size > 1000000 - self.size {
    raise Invalid("CSS output limit")
  }
  self.pending.push(text)
}

///|
fn include_mixin(
  header : String,
  body : Content?,
  parents : Array[String],
  caller : Scope,
  emitter : Emitter,
  depth : Int,
  raw : Bool,
  prefix : String,
) -> Unit raise ParseError {
  let (name, args) = invocation(header)
  let definition = match caller.lookup_mixin(name) {
    Some(m) => m
    None => raise Invalid("undefined mixin " + name)
  }
  let scope = Scope::new(Some(definition.scope))
  let keywords : Map[String, String] = Map([])
  let positional = []
  let mut named = false
  for arg in args {
    let parts = split_top(arg, ':')
    if parts.length() > 1 && parts[0].has_prefix("$") {
      named = true
      let key = identifier(parts[0][1:].to_owned())
      if keywords.contains(key) {
        raise Invalid("duplicate keyword argument")
      }
      keywords[key] = caller.expand(parts[1:].to_owned().join(":"))
    } else {
      if named {
        raise Invalid("positional argument after keyword")
      }
      positional.push(caller.expand(arg))
    }
  }
  for i in 0..<definition.params.length() {
    let (key, default) = definition.params[i]
    let value = if i < positional.length() {
      if keywords.contains(key) {
        raise Invalid("argument supplied twice")
      }
      positional[i]
    } else {
      match keywords.get(key) {
        Some(v) => {
          keywords.remove(key)
          v
        }
        None =>
          match default {
            Some(v) => scope.expand(v)
            None => raise Invalid("missing mixin argument " + key)
          }
      }
    }
    scope.vars[key] = value
  }
  if !keywords.is_empty() {
    raise Invalid("unknown keyword argument")
  }
  match definition.rest {
    Some(key) =>
      scope.vars[key] = if positional.length() > definition.params.length() {
        positional[definition.params.length():].to_owned().join(", ")
      } else {
        "()"
      }
    None =>
      if positional.length() > definition.params.length() {
        raise Invalid("too many mixin arguments")
      }
  }
  render(definition.body, parents, scope, emitter, depth + 1, body, raw, prefix)
}

///|
fn render(
  nodes : Array[Statement],
  parents : Array[String],
  scope : Scope,
  emitter : Emitter,
  depth : Int,
  content : Content?,
  raw : Bool,
  prefix : String,
) -> Unit raise ParseError {
  if depth > 64 {
    raise Invalid("evaluation nesting limit")
  }
  for node in nodes {
    emitter.budget -= 1
    if emitter.budget < 0 {
      raise Invalid("evaluation budget")
    }
    match node {
      Block(header, body) =>
        if header.has_prefix("@mixin ") {
          validate_mixin_body(body)
          let (name, args) = invocation(header[7:].to_owned())
          let params = []
          let mut rest : String? = None
          let seen : Map[String, Bool] = Map([])
          for i in 0..<args.length() {
            let pieces = split_top(args[i], ':')
            let mut key = pieces[0]
            if key.has_suffix("...") {
              if i != args.length() - 1 || pieces.length() != 1 {
                raise Invalid("variadic parameter must be last")
              }
              key = key[:key.length() - 3].to_owned()
              if !key.has_prefix("$") || key.length() < 2 {
                raise Invalid("invalid variadic parameter")
              }
              rest = Some(identifier(key[1:].to_owned()))
            }
            if !key.has_prefix("$") || key.length() < 2 {
              raise Invalid("invalid mixin parameter")
            }
            key = identifier(key[1:].to_owned())
            if seen.contains(key) {
              raise Invalid("duplicate parameter")
            }
            seen[key] = true
            if rest is None {
              params.push(
                (
                  key,
                  if pieces.length() > 1 {
                    Some(pieces[1:].to_owned().join(":"))
                  } else {
                    None
                  },
                ),
              )
            }
          }
          scope.mixins[name] = { params, rest, body, scope, }
        } else if header.has_prefix("@include ") {
          include_mixin(
            header[9:].to_owned(),
            Some({ body, scope, outer: content, }),
            parents,
            scope,
            emitter,
            depth,
            raw,
            prefix,
          )
        } else if header.has_prefix("@media ") ||
          header.has_prefix("@supports (") ||
          header.has_prefix("@layer ") ||
          header == "@font-face" {
          emitter.flush()
          emitter.write(scope.expand(header) + " {\n")
          render(
            body,
            if header == "@font-face" {
              []
            } else {
              parents
            },
            Scope::new(Some(scope)),
            emitter,
            depth + 1,
            content,
            header == "@font-face",
            prefix,
          )
          emitter.flush()
          emitter.write("}\n")
        } else if header.has_suffix(":") {
          render(
            body,
            parents,
            Scope::new(Some(scope)),
            emitter,
            depth + 1,
            content,
            raw,
            prefix + scope.expand(header[:header.length() - 1].to_owned()) + "-",
          )
        } else {
          emitter.flush()
          render(
            body,
            selectors(parents, scope.expand(header)),
            Scope::new(Some(scope)),
            emitter,
            depth + 1,
            content,
            false,
            "",
          )
          emitter.flush()
        }
      Leaf(part) =>
        if part.has_prefix("@include ") {
          include_mixin(
            part[9:].to_owned(),
            None,
            parents,
            scope,
            emitter,
            depth,
            raw,
            prefix,
          )
        } else if part == "@content" {
          match content {
            Some(c) =>
              render(
                c.body,
                parents,
                c.scope,
                emitter,
                depth + 1,
                c.outer,
                raw,
                prefix,
              )
            None => ()
          }
        } else {
          let pieces = split_top(part, ':')
          if pieces.length() < 2 {
            raise Invalid("declaration requires colon")
          }
          let key = pieces[0]
          let mut value = pieces[1:].to_owned().join(":")
          if key.has_prefix("$") {
            let mut global = false
            let mut default = false
            while true {
              if value.has_suffix("!global") {
                global = true
                value = value[:value.length() - 7].trim().to_owned()
              } else if value.has_suffix("!default") {
                default = true
                value = value[:value.length() - 8].trim().to_owned()
              } else {
                break
              }
            }
            let name = identifier(key[1:].to_owned())
            if !default ||
              scope.get(name) is None ||
              scope.get(name) == Some("null") {
              value = scope.expand(value)
              if global {
                scope.global().vars[name] = value
              } else {
                scope.vars[name] = value
              }
            }
          } else {
            if parents.is_empty() && !raw {
              raise Invalid("property outside rule")
            }
            let key = prefix + scope.expand(key)
            if key.has_prefix("--") {
              let chars = part.to_array()
              let mut at = 0
              while at < chars.length() && chars[at] != ':' {
                at += 1
              }
              value = scope.expand(
                String::from_array(chars[at + 1:]),
                variables=false,
              )
            } else {
              value = scope.expand(value)
            }
            if key.has_prefix("@") || key.contains(" ") {
              raise Invalid("unsupported declaration")
            }
            if value == "()" {
              raise Invalid("empty list is not a CSS value")
            }
            if value != "null" && !value.is_empty() {
              emitter.property(parents, key, value)
            }
          }
        }
    }
  }
}

///|
pub fn compile(source : String) -> String raise ParseError {
  if source.length() > 100000 {
    raise Invalid("source limit")
  }
  let src = Source::{ chars: source.to_array(), pos: 0, }
  let nodes = src.statements(false, 0)
  validate_content(nodes, false)
  let emitter = Emitter::{
    output: StringBuilder(),
    size: 0,
    budget: 10000,
    pending: [],
    pending_size: 0,
    parents: [],
  }
  render(nodes, [], Scope::new(None), emitter, 0, None, false, "")
  emitter.flush()
  emitter.output.to_string()
}

///|
fn validate_mixin_body(nodes : Array[Statement]) -> Unit raise ParseError {
  for node in nodes {
    if node is Block(header, body) {
      if header.has_prefix("@mixin ") {
        raise Invalid("mixin definitions cannot be nested inside mixins")
      }
      validate_mixin_body(body)
    }
  }
}

///|
fn validate_content(
  nodes : Array[Statement],
  inside : Bool,
) -> Unit raise ParseError {
  for node in nodes {
    match node {
      Leaf(text) =>
        if text == "@content" && !inside {
          raise Invalid("content outside mixin")
        }
      Block(header, body) =>
        validate_content(body, inside || header.has_prefix("@mixin "))
    }
  }
}
