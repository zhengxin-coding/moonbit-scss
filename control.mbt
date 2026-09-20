///|
fn Scope::flow_scope(self : Scope) -> Scope {
  { ..Scope::new(Some(self)), flow: true, }
}

///|
fn Scope::assign(
  self : Scope,
  name : String,
  value : SassValue,
) -> Unit raise ParseError {
  if name.contains(".") {
    let (owner, key) = self.qualified_owner(name)
    owner.vars[key] = value
    return
  }
  if self.flow && !self.vars.contains(name) {
    if self.parent is Some(parent) && parent.get(name) is Some(_) {
      parent.assign(name, value)
      return
    }
  }
  if self.parent is None && !self.vars.contains(name) {
    if self.star_variable(name) is Some((owner, key)) {
      owner.vars[key] = value
      return
    }
  }
  self.vars[name] = value
}

///|
fn control_variable(source : String) -> String raise ParseError {
  let value = source.trim().to_owned()
  if !value.has_prefix("$") ||
    value.length() < 2 ||
    !value[1:].to_owned().to_array().iter().all(name_char) {
    raise Invalid("invalid loop variable")
  }
  identifier(value[1:].to_owned())
}

///|
fn render_loop(
  header : String,
  body : Array[Statement],
  parents : Array[String],
  scope : Scope,
  emitter : Emitter,
  depth : Int,
  content : Content?,
  raw : Bool,
  prefix : String,
) -> Bool raise ParseError {
  if header.has_prefix("@while ") {
    let expression = parse_expression(header[7:].to_owned())
    let frame = scope.flow_scope()
    while frame.eval_ast(expression, true, 0).truth() {
      frame.charge()
      render(body, parents, frame, emitter, depth + 1, content, raw, prefix)
      if frame.returned is Some(cell) && cell.val is Some(_) {
        break
      }
    }
    true
  } else if header.has_prefix("@for ") {
    let parts = header[5:].split(" from ").to_array()
    if parts.length() != 2 {
      raise Invalid("for requires from")
    }
    let name = control_variable(parts[0].to_owned())
    let mut bounds = parts[1].split(" through ").to_array()
    let inclusive = bounds.length() == 2
    if !inclusive {
      bounds = parts[1].split(" to ").to_array()
    }
    if bounds.length() != 2 {
      raise Invalid("for requires through or to")
    }
    let first = require_int(scope.evaluate(bounds[0].to_owned()))
    let last = require_int(scope.evaluate(bounds[1].to_owned()))
    let direction = if first <= last { 1 } else { -1 }
    let frame = scope.flow_scope()
    let mut i = first
    while (if direction > 0 {
            i < last || (inclusive && i == last)
          } else {
            i > last || (inclusive && i == last)
          }) {
      frame.charge()
      frame.vars[name] = numeric(i.to_double())
      render(body, parents, frame, emitter, depth + 1, content, raw, prefix)
      if i == last || (frame.returned is Some(cell) && cell.val is Some(_)) {
        break
      }
      i += direction
    }
    true
  } else if header.has_prefix("@each ") {
    let pieces = header[6:].split(" in ").to_array()
    if pieces.length() < 2 {
      raise Invalid("each requires in")
    }
    let names = split_top(pieces[0].to_owned(), ',').map(control_variable)
    let expression = pieces[1:].to_owned().join(" in ")
    let values = scope.evaluate(expression).items()
    let frame = scope.flow_scope()
    for value in values {
      frame.charge()
      let components = if names.length() == 1 { [value] } else { value.items() }
      for i in 0..<names.length() {
        frame.vars[names[i]] = components.get(i).unwrap_or(Null)
      }
      render(body, parents, frame, emitter, depth + 1, content, raw, prefix)
      if frame.returned is Some(cell) && cell.val is Some(_) {
        break
      }
    }
    true
  } else {
    false
  }
}

///|
fn validate_function(nodes : Array[Statement]) -> Unit raise ParseError {
  for node in nodes {
    match node {
      Leaf(value) =>
        if !(value.has_prefix("$") ||
          value.has_prefix("@return ") ||
          value.has_prefix("@error ") ||
          value.has_prefix("@warn ") ||
          value.has_prefix("@debug ")) {
          raise Invalid("function may only contain value statements")
        }
      Block(header, body) => {
        if !(header.has_prefix("@if ") ||
          header == "@else" ||
          header.has_prefix("@else if ") ||
          header.has_prefix("@each ") ||
          header.has_prefix("@for ") ||
          header.has_prefix("@while ")) {
          raise Invalid("function cannot emit CSS")
        }
        validate_function(body)
      }
    }
  }
}

///|
fn Scope::use_standard(self : Scope, source : String) -> Unit raise ParseError {
  if self.parent is Some(_) {
    raise Invalid("use must be at root")
  }
  let parts = source.split(" as ").to_array()
  if parts.length() > 2 {
    raise Invalid("invalid module prefix_name")
  }
  let path = require_text(self.evaluate(parts[0].to_owned())).0
  if !path.has_prefix("sass:") {
    raise Invalid("file module resolver required")
  }
  let name = path[5:].to_owned()
  if !["math", "list", "map", "string", "meta", "color"].contains(name) {
    raise Invalid("unsupported standard module")
  }
  let prefix_name = if parts.length() == 2 {
    parts[1].trim().to_owned()
  } else {
    name
  }
  if prefix_name == "*" ||
    prefix_name.is_empty() ||
    !prefix_name.to_array().iter().all(name_char) {
    raise Invalid("invalid standard module prefix_name")
  }
  if self.standard_modules.contains(prefix_name) ||
    self.module_scopes.contains(prefix_name) {
    raise Invalid("module namespace already used")
  }
  self.standard_modules[prefix_name] = name
}
