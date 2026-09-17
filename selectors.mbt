///|
// Delimiter-aware splitting is shared by selectors, mixin parameters and calls.
fn split_top(text : String, delimiter : Char) -> Array[String] raise ParseError {
  let chars = text.to_array()
  let out = []
  let stack : Array[Char] = []
  let mut quote = '\u0000'
  let mut start = 0
  let mut i = 0
  while i < chars.length() {
    let c = chars[i]
    if c == '\\' {
      i += 2
      continue
    }
    if quote != '\u0000' {
      if c == quote {
        quote = '\u0000'
      }
    } else if c == '"' || c == '\'' {
      quote = c
    } else if c == '(' || c == '[' {
      stack.push(c)
    } else if c == ')' || c == ']' {
      if stack.is_empty() ||
        stack.pop() != Some(if c == ')' { '(' } else { '[' }) {
        raise Invalid("mismatched delimiters")
      }
    } else if c == delimiter && stack.is_empty() {
      out.push(String::from_array(chars[start:i]).trim().to_owned())
      start = i + 1
    }
    i += 1
  }
  if quote != '\u0000' || !stack.is_empty() {
    raise Invalid("unterminated delimiter")
  }
  out.push(String::from_array(chars[start:]).trim().to_owned())
  out
}

///|
fn has_parent(text : String) -> Bool {
  let chars = text.to_array()
  let mut quote = '\u0000'
  let mut bracket = 0
  let mut i = 0
  while i < chars.length() {
    let c = chars[i]
    if c == '\\' {
      i += 2
      continue
    }
    if quote != '\u0000' {
      if c == quote {
        quote = '\u0000'
      }
    } else if c == '"' || c == '\'' {
      quote = c
    } else if c == '[' {
      bracket += 1
    } else if c == ']' {
      bracket -= 1
    } else if c == '&' && bracket == 0 {
      return true
    }
    i += 1
  }
  false
}

///|
fn prepare_selector(
  parent : Array[String],
  text : String,
  depth : Int,
) -> (Array[String], Bool) raise ParseError {
  if depth > 32 {
    raise Invalid("selector nesting limit")
  }
  let chars = text.to_array()
  let segments = []
  let mut current = ""
  let mut quote = '\u0000'
  let mut bracket = 0
  let mut nested = false
  let mut i = 0
  while i < chars.length() {
    let c = chars[i]
    if c == '\\' {
      current += c.to_string()
      i += 1
      if i < chars.length() {
        current += chars[i].to_string()
        i += 1
      }
      continue
    }
    if quote != '\u0000' {
      current += c.to_string()
      if c == quote {
        quote = '\u0000'
      }
      i += 1
      continue
    }
    if c == '"' || c == '\'' {
      quote = c
    }
    if c == '{' || c == '}' || c == ';' {
      raise Invalid("invalid selector punctuation")
    }
    if c == '[' {
      bracket += 1
    }
    if c == ']' {
      bracket -= 1
    }
    if c == '(' && bracket == 0 {
      let start = i + 1
      let mut j = start
      let mut level = 1
      let mut q = '\u0000'
      while j < chars.length() && level > 0 {
        let x = chars[j]
        if x == '\\' {
          j += 2
          continue
        }
        if q != '\u0000' {
          if x == q {
            q = '\u0000'
          }
        } else if x == '"' || x == '\'' {
          q = x
        } else if x == '(' {
          level += 1
        } else if x == ')' {
          level -= 1
        }
        j += 1
      }
      if level != 0 {
        raise Invalid("unterminated selector function")
      }
      let inner = String::from_array(chars[start:j - 1])
      if has_parent(inner) {
        let expanded = resolve_selectors(parent, inner, false, depth + 1)
        current += "(" + expanded.join(", ") + ")"
        nested = true
      } else {
        current += "(" + inner + ")"
      }
      i = j
      continue
    }
    if c == '&' && bracket == 0 {
      if i > 0 &&
        ![' ', '\t', '\n', '\r', '>', '+', '~', '|'].contains(chars[i - 1]) {
        raise Invalid("parent selector must start a compound")
      }
      segments.push(current)
      current = ""
      i += 1
      continue
    }
    current += c.to_string()
    i += 1
  }
  segments.push(current)
  (segments, nested)
}

///|
fn resolve_selectors(
  parent : Array[String],
  child : String,
  implicit : Bool,
  depth : Int,
) -> Array[String] raise ParseError {
  let children = split_top(child, ',')
  let prepared = []
  for c in children {
    if c.is_empty() || c.has_prefix("@") {
      raise Invalid("empty or invalid selector")
    }
    if parent.is_empty() && has_parent(c) {
      raise Invalid("parent selector at root")
    }
    prepared.push((c, prepare_selector(parent, c, depth)))
  }
  let out : Array[String] = []
  let parents = if parent.is_empty() { [""] } else { parent }
  for p in parents {
    for (original, (parts, nested)) in prepared {
      if parts.length() == 1 {
        let value = if implicit && !nested && !p.is_empty() {
          p + " " + parts[0]
        } else {
          parts[0]
        }
        if (!nested && implicit) || !out.contains(value) {
          out.push(value)
        }
      } else {
        let mut values = [parts[0]]
        for i in 1..<parts.length() {
          let choices = if i == 1 { [p] } else { parent }
          let next = []
          for prefix in values {
            for choice in choices {
              let suffix = parts[i]
              if !suffix.is_empty() &&
                (word(suffix.to_array()[0]) || suffix.has_prefix("-")) {
                let last = choice.to_array().last()
                if !(last is Some(c) && (word(c) || c == '-')) {
                  raise Invalid("invalid parent selector suffix")
                }
              }
              next.push(prefix + choice + suffix)
              if next.length() > 256 {
                raise Invalid("selector expansion limit")
              }
            }
          }
          values = next
        }
        for value in values {
          out.push(value)
        }
      }
      ignore(original)
      if out.length() > 256 {
        raise Invalid("selector expansion limit")
      }
    }
  }
  out
}

///|
fn selectors(
  parent : Array[String],
  child : String,
) -> Array[String] raise ParseError {
  resolve_selectors(parent, child, true, 0)
}
