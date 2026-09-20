///|
priv enum Statement {
  Leaf(String)
  Block(String, Array[Statement])
}

///|
priv struct Scope {
  vars : Map[String, SassValue]
  mixins : Map[String, Mixin]
  functions : Map[String, Mixin]
  standard_modules : Map[String, String]
  module_scopes : Map[String, Scope]
  star_scopes : Array[Scope]
  forwarded_vars : Map[String, (Scope, String)]
  forwarded_mixins : Map[String, Mixin]
  forwarded_functions : Map[String, Mixin]
  configured : Map[String, Bool]
  configuration : Map[String, SassValue]
  path : String
  evaluation : Evaluation
  returned : Ref[SassValue?]?
  flow : Bool
  parent : Scope?
}

///|
priv struct Mixin {
  name : String
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
  {
    vars: Map([]),
    mixins: Map([]),
    functions: Map([]),
    standard_modules: Map([]),
    module_scopes: Map([]),
    star_scopes: [],
    forwarded_vars: Map([]),
    forwarded_mixins: Map([]),
    forwarded_functions: Map([]),
    configured: Map([]),
    configuration: Map([]),
    path: match parent {
      Some(p) => p.path
      None => ""
    },
    evaluation: match parent {
      Some(p) => p.evaluation
      None => Evaluation::new()
    },
    returned: match parent {
      Some(p) => p.returned
      None => None
    },
    flow: false,
    parent,
  }
}

///|
fn identifier(name : String) -> String {
  name.replace_all(old="_", new="-")
}

///|
/// Module namespaces are case-sensitive and keep underscores distinct.
fn reference_name(name : String) -> String {
  let parts = name.split(".").to_array()
  if parts.length() == 2 {
    parts[0].to_owned() + "." + identifier(parts[1].to_owned())
  } else {
    identifier(name)
  }
}

///|
fn Scope::get(self : Scope, name : String) -> SassValue? raise ParseError {
  if name.contains(".") {
    return self.qualified_variable(name)
  }
  match self.vars.get(identifier(name)) {
    Some(v) => Some(v)
    None =>
      match self.parent {
        Some(p) => p.get(name)
        None =>
          match self.star_variable(identifier(name)) {
            Some((owner, key)) => owner.vars.get(key)
            None => None
          }
      }
  }
}

///|
fn Scope::lookup_mixin(self : Scope, name : String) -> Mixin? raise ParseError {
  if name.contains(".") {
    return self.qualified_callable(name, false)
  }
  match self.mixins.get(identifier(name)) {
    Some(v) => Some(v)
    None =>
      match self.parent {
        Some(p) => p.lookup_mixin(name)
        None => self.star_callable(identifier(name), false)
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
      let parser = ExpressionParser::{ chars: cs, pos: i, depth: 0, }
      let expression = parser.interpolation()
      i = parser.pos
      let computed = self.eval_ast(expression, true, 0)
      let value = if computed is List([], _, _) || computed is Null {
        ""
      } else {
        computed.css(unquote=true)
      }
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
        Some(v) => v.css()
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
  if name.is_empty() ||
    !name.to_array().iter().all(c => name_char(c) || c == '.') {
    raise Invalid("invalid mixin name")
  }
  if at == cs.length() {
    return (reference_name(name), [])
  }
  if cs.last() != Some(')') {
    raise Invalid("invalid mixin arguments")
  }
  let inner = String::from_array(cs[at + 1:cs.length() - 1]).trim().to_owned()
  (
    reference_name(name),
    if inner.is_empty() {
      []
    } else {
      split_top(inner, ',')
    },
  )
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
  let keywords : Map[String, SassValue] = Map([])
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
      keywords[key] = caller.evaluate(parts[1:].to_owned().join(":"))
    } else {
      if named {
        raise Invalid("positional argument after keyword")
      }
      positional.push(caller.evaluate(arg))
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
            Some(v) => scope.evaluate(v)
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
        List(positional[definition.params.length():].to_owned(), ",", false)
      } else {
        List([], ",", false)
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
  let mut conditional : Bool? = None
  for node in nodes {
    if scope.returned is Some(cell) && cell.val is Some(_) {
      return
    }
    scope.charge()
    emitter.budget -= 1
    if emitter.budget < 0 {
      raise Invalid("evaluation budget")
    }
    if node is Block(header, body) {
      if header.has_prefix("@if ") {
        let selected = scope.evaluate(header[4:].to_owned()).truth()
        conditional = Some(selected)
        if selected {
          render(
            body,
            parents,
            scope.flow_scope(),
            emitter,
            depth + 1,
            content,
            raw,
            prefix,
          )
        }
        continue
      }
      if header == "@else" || header.has_prefix("@else if ") {
        guard conditional is Some(previous) else {
          raise Invalid("else without adjacent if")
        }
        let selected = !previous &&
          (header == "@else" || scope.evaluate(header[9:].to_owned()).truth())
        conditional = if header == "@else" {
          None
        } else {
          Some(previous || selected)
        }
        if selected {
          render(
            body,
            parents,
            scope.flow_scope(),
            emitter,
            depth + 1,
            content,
            raw,
            prefix,
          )
        }
        continue
      }
      if render_loop(
          header, body, parents, scope, emitter, depth, content, raw, prefix,
        ) {
        conditional = None
        continue
      }
    }
    conditional = None
    match node {
      Block(header, body) =>
        if header.has_prefix("@mixin ") || header.has_prefix("@function ") {
          let function = header.has_prefix("@function ")
          if function {
            validate_function(body)
          } else {
            validate_mixin_body(body)
          }
          let (name, args) = invocation(
            header[if function { 10 } else { 7 }:].to_owned(),
          )
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
          if function {
            scope.functions[name] = { name, params, rest, body, scope, }
          } else {
            scope.mixins[name] = { name, params, rest, body, scope, }
          }
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
        } else if header == "@at-root" ||
          header.has_prefix("@at-root ") ||
          header.has_prefix("@at-root(") {
          render_at_root(header, body, parents, scope, emitter, depth, content)
        } else if header.has_prefix("@media ") ||
          header.has_prefix("@supports (") ||
          header.has_prefix("@supports(") ||
          header.has_prefix("@layer ") ||
          header == "@font-face" {
          emitter.flush()
          emitter.context.push(scope.expand(header))
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
          ignore(emitter.context.pop())
          emitter.release_hoisted()
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
          let expanded = scope.expand(header)
          let inherited = if parents.is_empty() && has_parent(expanded) {
            emitter.root_parent
          } else {
            parents
          }
          let selected = selectors(inherited, expanded)
          emitter.output.push({
            selectors: selected.copy(),
            declarations: "",
            context: emitter.context.copy(),
            path: emitter.path,
          })
          render(
            body,
            selected,
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
        if part.has_prefix("@return ") {
          guard scope.returned is Some(cell) else {
            raise Invalid("return outside function")
          }
          cell.val = Some(scope.evaluate(part[8:].to_owned()))
          return
        } else if part.has_prefix("@error ") {
          raise Invalid(
            scope.evaluate(part[7:].to_owned()).css(unquote=true, inspect=true),
          )
        } else if part.has_prefix("@extend ") {
          emitter.add_extension(scope.expand(part[8:].to_owned()), parents)
        } else if part.has_prefix("@use ") {
          scope.load_directive(part[5:].to_owned(), false)
        } else if part.has_prefix("@forward ") {
          scope.load_directive(part[9:].to_owned(), true)
        } else if part.has_prefix("@warn ") || part.has_prefix("@debug ") {
          let debug = part.has_prefix("@debug ")
          scope.evaluation.diagnostics.push(
            (if debug { "debug: " } else { "warn: " }) +
            scope
            .evaluate(part[if debug { 7 } else { 6 }:].to_owned())
            .css(unquote=true, inspect=true),
          )
        } else if part.has_prefix("@include ") {
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
          if key.has_prefix("$") || key.contains(".$") {
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
            let name = reference_name(
              if key.has_prefix("$") {
                key[1:].to_owned()
              } else {
                key.replace_all(old=".$", new=".")
              },
            )
            if default &&
              scope.configured.contains(name) &&
              scope.configuration.get(name) is Some(supplied) {
              scope.configured.remove(name)
              if !(supplied is Null) {
                scope.assign(name, supplied)
              }
            }
            if !default ||
              scope.get(name) is None ||
              scope.get(name) is Some(Null) {
              let computed = scope.evaluate(value)
              if global {
                scope.global().assign(name, computed)
              } else {
                scope.assign(name, computed)
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
              let computed = scope.evaluate(value, division=false)
              value = if computed is Null { "" } else { computed.css() }
            }
            if key.has_prefix("@") || key.contains(" ") {
              raise Invalid("unsupported declaration")
            }
            if value == "()" {
              raise Invalid("empty list is not a CSS value")
            }
            if !value.is_empty() {
              emitter.property(parents, key, value)
            }
          }
        }
    }
  }
}

///|
pub fn compile(source : String) -> String raise ParseError {
  compile_files("input.scss", Map([("input.scss", source)])).css
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
