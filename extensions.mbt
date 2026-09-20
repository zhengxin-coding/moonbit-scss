///|
/// Split only top-level simple selectors. Quoted attributes and functional
/// pseudo classes stay intact, and escaped punctuation never becomes a token.
fn selector_units(text : String) -> Array[String] raise ParseError {
  let chars = text.to_array()
  let out : Array[String] = []
  let mut i = 0
  while i < chars.length() {
    if [' ', '\t', '\n', '\r'].contains(chars[i]) {
      if !out.is_empty() && out.last() != Some(" ") {
        out.push(" ")
      }
      i += 1
      continue
    }
    if ['>', '+', '~', '|'].contains(chars[i]) {
      out.push(chars[i].to_string())
      i += 1
      continue
    }
    let start = i
    if ['.', '#', '%', ':'].contains(chars[i]) {
      let c = chars[i]
      i += 1
      if c == ':' && i < chars.length() && chars[i] == ':' {
        i += 1
      }
    }
    let mut quote = '\u0000'
    let mut level = 0
    while i < chars.length() {
      let c = chars[i]
      if c == '\\' {
        i += if i + 1 < chars.length() { 2 } else { 1 }
        continue
      }
      if quote != '\u0000' {
        if c == quote {
          quote = '\u0000'
        }
      } else if c == '"' || c == '\'' {
        quote = c
      } else if c == '[' && level == 0 && i > start {
        break
      } else if c == '(' || c == '[' {
        level += 1
      } else if c == ')' || c == ']' {
        level -= 1
      } else if level == 0 &&
        [' ', '\t', '\n', '\r', '.', '#', '%', ':', '>', '+', '~', '|', ','].contains(
          c,
        ) {
        break
      }
      i += 1
    }
    if i == start || level != 0 || quote != '\u0000' {
      raise Invalid("invalid selector")
    }
    out.push(String::from_array(chars[start:i]))
  }
  if out.last() == Some(" ") {
    ignore(out.pop())
  }
  out
}

///|
fn selector_separator(text : String) -> Bool {
  [" ", ">", "+", "~", "|"].contains(text)
}

///|
fn selector_placeholder(text : String) -> Bool {
  let units = selector_units(text) catch { _ => return true }
  units.any(s => s.has_prefix("%"))
}

///|
fn unify_compound(
  left : Array[String],
  right : Array[String],
) -> Array[String]? {
  let out : Array[String] = []
  let mut type_name : String? = None
  let mut id : String? = None
  let mut pseudo_element : String? = None
  for value in [..left, ..right] {
    if value == "*" {
      continue
    }
    if value.has_prefix("#") {
      if id is Some(old) && old != value {
        return None
      }
      id = Some(value)
    } else if value.has_prefix("::") {
      if pseudo_element is Some(old) && old != value {
        return None
      }
      pseudo_element = Some(value)
    } else if !value.has_prefix(".") &&
      !value.has_prefix("%") &&
      !value.has_prefix(":") &&
      !value.has_prefix("[") {
      if type_name is Some(old) && old != value {
        return None
      }
      type_name = Some(value)
    }
    if !out.contains(value) {
      out.push(value)
    }
  }
  let ordered : Array[String] = []
  if type_name is Some(value) {
    ordered.push(value)
  }
  for value in out {
    if Some(value) != type_name && !value.has_prefix(":") {
      ordered.push(value)
    }
  }
  for value in out {
    if value.has_prefix(":") {
      ordered.push(value)
    }
  }
  if ordered.is_empty() {
    ordered.push("*")
  }
  Some(ordered)
}

///|
fn extend_selector(
  original : String,
  target : String,
  replacement : String,
) -> (Bool, Array[String]) raise ParseError {
  let units = selector_units(original)
  let extender = selector_units(replacement)
  let mut compound_start = extender.length()
  while compound_start > 0 && !selector_separator(extender[compound_start - 1]) {
    compound_start -= 1
  }
  let lead = extender[:compound_start].to_owned()
  let tail = extender[compound_start:].to_owned()
  let out : Array[String] = []
  let mut matched = false
  for i in 0..<units.length() {
    if units[i] != target {
      continue
    }
    matched = true
    let mut start = i
    let mut end = i + 1
    while start > 0 && !selector_separator(units[start - 1]) {
      start -= 1
    }
    while end < units.length() && !selector_separator(units[end]) {
      end += 1
    }
    let rest = [..units[start:i], ..units[i + 1:end]]
    if unify_compound(rest, tail) is Some(compound) {
      let prefix = units[:start].to_owned()
      let suffix = units[end:].to_owned().join("")
      let merged = compound.join("") + suffix
      if prefix == lead || lead.is_empty() {
        out.push(prefix.join("") + merged)
      } else if prefix.is_empty() {
        out.push(lead.join("") + merged)
      } else {
        // Two independent descendant paths may appear in either order.
        // Combinator weaving requires a full selector algebra and is rejected.
        if lead.any(s => s != " " && selector_separator(s)) {
          raise Invalid("complex extender combinators are not supported")
        }
        out.push(prefix.join("") + lead.join("") + merged)
        out.push(lead.join("") + prefix.join("") + merged)
      }
    }
  }
  (matched, out)
}

///|
fn Emitter::add_extension(
  self : Emitter,
  source : String,
  parents : Array[String],
) -> Unit raise ParseError {
  if parents.is_empty() {
    raise Invalid("extend outside rule")
  }
  let optional = source.has_suffix("!optional")
  let text = if optional {
    source[:source.length() - 9].trim().to_owned()
  } else {
    source
  }
  for target in split_top(text, ',') {
    let tokens = selector_units(target)
    if tokens.length() != 1 ||
      selector_separator(tokens[0]) ||
      target.contains("&") ||
      target.is_empty() {
      raise Invalid("extend requires a simple selector")
    }
    self.extensions.push({
      target,
      selectors: parents.copy(),
      context: self.context.copy(),
      path: self.path,
      optional,
      matched: false,
    })
    if self.extensions.length() > 4096 {
      raise Invalid("extension limit")
    }
  }
}
