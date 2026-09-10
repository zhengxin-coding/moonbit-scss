///|
priv struct Source {
  chars : Array[Char]
  mut pos : Int
}

///|
fn Source::segment(self : Source) -> (String, Char) raise ParseError {
  let mut out = ""
  let mut quote = '\u0000'
  let mut level = 0
  while self.pos < self.chars.length() {
    let c = self.chars[self.pos]
    self.pos += 1
    if quote != '\u0000' {
      out += c.to_string()
      if c == '\\' && self.pos < self.chars.length() {
        out += self.chars[self.pos].to_string()
        self.pos += 1
      } else if c == quote {
        quote = '\u0000'
      }
      continue
    }
    if c == '"' || c == '\'' {
      quote = c
      out += c.to_string()
      continue
    }
    if c == '/' && self.pos < self.chars.length() && self.chars[self.pos] == '*' {
      self.pos += 1
      let mut closed = false
      while self.pos + 1 < self.chars.length() {
        if self.chars[self.pos] == '*' && self.chars[self.pos + 1] == '/' {
          self.pos += 2
          closed = true
          break
        }
        self.pos += 1
      }
      if !closed {
        raise Invalid("unterminated comment")
      }
      out += " "
      continue
    }
    if c == '(' || c == '[' {
      level += 1
    }
    if c == ')' || c == ']' {
      level -= 1
      if level < 0 {
        raise Invalid("unbalanced value")
      }
    }
    if level == 0 && (c == ';' || c == '{' || c == '}') {
      return (out.trim().to_owned(), c)
    }
    out += c.to_string()
  }
  if quote != '\u0000' || level != 0 {
    raise Invalid("unterminated value")
  }
  (out.trim().to_owned(), '\u0000')
}

///|
fn expand(s : String, vars : Map[String, String]) -> String raise ParseError {
  let cs = s.to_array()
  let mut i = 0
  let mut out = ""
  let mut quote = '\u0000'
  while i < cs.length() {
    if quote != '\u0000' {
      let c = cs[i]
      out += c.to_string()
      i += 1
      if c == '\\' && i < cs.length() {
        out += cs[i].to_string()
        i += 1
      } else if c == quote {
        quote = '\u0000'
      }
      continue
    }
    if cs[i] == '"' || cs[i] == '\'' {
      quote = cs[i]
      out += cs[i].to_string()
      i += 1
      continue
    }
    if cs[i] == '$' {
      i += 1
      let mut key = ""
      while i < cs.length() && (word(cs[i]) || cs[i] == '-') {
        key += cs[i].to_string()
        i += 1
      }
      out += match vars.get(key) {
        Some(v) => v
        None => raise Invalid("undefined variable " + key)
      }
    } else {
      out += cs[i].to_string()
      i += 1
    }
  }
  out
}

///|
fn selectors(
  parent : Array[String],
  child : String,
) -> Array[String] raise ParseError {
  let children = child.split(",").map(v => v.trim().to_owned()).collect()
  let out : Array[String] = []
  for c in children {
    if c.is_empty() ||
      c.has_prefix("@") ||
      c.contains("#{") ||
      c.contains("[") ||
      c.contains("(") {
      raise Invalid("unsupported selector/directive")
    }
    if parent.is_empty() {
      if c.contains("&") {
        raise Invalid("parent selector at root")
      }
      out.push(c)
    } else {
      for p in parent {
        out.push(
          if c.contains("&") {
            c.replace_all(old="&", new=p)
          } else {
            p + " " + c
          },
        )
      }
    }
  }
  if out.length() > 256 {
    raise Invalid("selector expansion limit")
  }
  out
}

///|
fn compile_block(
  src : Source,
  parents : Array[String],
  inherited : Map[String, String],
  depth : Int,
  closing : Bool,
) -> String raise ParseError {
  if depth > 32 {
    raise Invalid("nesting limit")
  }
  let vars = inherited.copy()
  let mut declarations = ""
  let mut output = ""
  while true {
    let (part, end) = src.segment()
    if end == '{' {
      if !declarations.is_empty() {
        output += parents.join(", ") + " {\n" + declarations + "}\n"
        declarations = ""
      }
      output += compile_block(
        src,
        selectors(parents, expand(part, vars)),
        vars,
        depth + 1,
        true,
      )
    } else if !part.is_empty() {
      let pieces = part.split(":").collect()
      if pieces.length() < 2 {
        raise Invalid("declaration requires colon")
      }
      let key = pieces[0].trim().to_owned()
      let value = part.to_array()
      let mut colon = 0
      while colon < value.length() && value[colon] != ':' {
        colon += 1
      }
      let value = expand(
        String::from_array(value[colon + 1:]).trim().to_owned(),
        vars,
      )
      if key.has_prefix("$") {
        let name = key.to_array()
        vars[String::from_array(name[1:])] = value
      } else {
        if parents.is_empty() {
          raise Invalid("property outside rule")
        }
        if key.has_prefix("@") || key.contains(" ") {
          raise Invalid("unsupported declaration")
        }
        declarations += "  " + key + ": " + value + ";\n"
      }
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
  if !declarations.is_empty() {
    output += parents.join(", ") + " {\n" + declarations + "}\n"
  }
  output
}

///|
pub fn compile(source : String) -> String raise ParseError {
  if source.length() > 100000 {
    raise Invalid("source limit")
  }
  compile_block({ chars: source.to_array(), pos: 0, }, [], Map([]), 0, false)
}
