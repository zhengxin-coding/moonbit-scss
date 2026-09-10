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
    if c == '#' && self.pos < self.chars.length() && self.chars[self.pos] == '{' {
      out += "#{"
      self.pos += 1
      let mut nesting = 1
      let mut q = '\u0000'
      while self.pos < self.chars.length() && nesting > 0 {
        let x = self.chars[self.pos]
        self.pos += 1
        out += x.to_string()
        if x == '\\' && self.pos < self.chars.length() {
          out += self.chars[self.pos].to_string()
          self.pos += 1
          continue
        }
        if q != '\u0000' {
          if x == q {
            q = '\u0000'
          }
        } else if x == '"' || x == '\'' {
          q = x
        } else if x == '{' {
          nesting += 1
        } else if x == '}' {
          nesting -= 1
        }
      }
      if nesting != 0 {
        raise Invalid("unterminated interpolation")
      }
      continue
    }
    if c == '/' &&
      self.pos < self.chars.length() &&
      self.chars[self.pos] == '/' &&
      level == 0 {
      while self.pos < self.chars.length() && self.chars[self.pos] != '\n' {
        self.pos += 1
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
