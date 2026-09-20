///|
priv enum Expression {
  Literal(SassValue)
  Variable(String)
  Unary(String, Expression)
  Binary(String, Expression, Expression)
  Sequence(Array[Expression], String, Bool)
  Mapping(Array[(Expression, Expression)])
  Call(String, Array[(String?, Expression, Bool)])
  RawCall(String, String)
  Interpolated(Array[Expression], Bool)
  Group(Expression)
}

///|
priv struct ExpressionParser {
  chars : Array[Char]
  mut pos : Int
  mut depth : Int
}

///|
fn whitespace(c : Char) -> Bool {
  [' ', '\t', '\n', '\r', '\u000c'].contains(c)
}

///|
fn digit(c : Char) -> Bool {
  c >= '0' && c <= '9'
}

///|
fn name_char(c : Char) -> Bool {
  word(c) || c == '-' || c.to_int() > 127
}

///|
fn ExpressionParser::peek(self : ExpressionParser, offset? : Int = 0) -> Char {
  self.chars.get(self.pos + offset).unwrap_or('\u0000')
}

///|
fn ExpressionParser::space(self : ExpressionParser) -> Bool {
  let start = self.pos
  while whitespace(self.peek()) {
    self.pos += 1
  }
  self.pos > start
}

///|
fn ExpressionParser::word(self : ExpressionParser, text : String) -> Bool {
  let chars = text.to_array()
  if self.pos + chars.length() > self.chars.length() {
    return false
  }
  for i in 0..<chars.length() {
    if self.chars[self.pos + i] != chars[i] {
      return false
    }
  }
  let next = self.chars.get(self.pos + chars.length()).unwrap_or('\u0000')
  !name_char(next)
}

///|
fn parse_expression(text : String) -> Expression raise ParseError {
  let parser = ExpressionParser::{ chars: text.to_array(), pos: 0, depth: 0, }
  ignore(parser.space())
  if parser.peek() == '\u0000' {
    raise Invalid("expected expression")
  }
  let result = parser.sequence(false)
  ignore(parser.space())
  if parser.pos != parser.chars.length() {
    raise Invalid("unexpected expression token")
  }
  result
}

///|
fn ExpressionParser::sequence(
  self : ExpressionParser,
  bracketed : Bool,
) -> Expression raise ParseError {
  self.depth += 1
  if self.depth > 64 {
    raise Invalid("expression nesting limit")
  }
  let comma = []
  let mut trailing = false
  while true {
    let values = [self.binary(0)]
    while true {
      let before = self.pos
      let gap = self.space()
      let c = self.peek()
      if !gap ||
        ['\u0000', ',', ')', ']', ':', '}'].contains(c) ||
        (c == '.' && self.peek(offset=1) == '.') {
        self.pos = before
        break
      }
      values.push(self.binary(0))
      if values.length() > 4096 {
        raise Invalid("list length limit")
      }
    }
    comma.push(
      if values.length() == 1 {
        values[0]
      } else {
        Sequence(values, " ", false)
      },
    )
    ignore(self.space())
    if self.peek() != ',' {
      break
    }
    self.pos += 1
    ignore(self.space())
    if ['\u0000', ')', ']', '}'].contains(self.peek()) {
      trailing = true
      break
    }
    if comma.length() > 4096 {
      raise Invalid("list length limit")
    }
  }
  self.depth -= 1
  if comma.length() > 1 || trailing {
    Sequence(comma, ",", bracketed)
  } else if bracketed {
    match comma[0] {
      Sequence(values, separator, false) => Sequence(values, separator, true)
      value => Sequence([value], " ", true)
    }
  } else {
    comma[0]
  }
}

///|
fn ExpressionParser::binary(
  self : ExpressionParser,
  minimum : Int,
) -> Expression raise ParseError {
  let mut left = self.atom()
  while true {
    let before = self.pos
    let gap = self.space()
    let c = self.peek()
    let pair = c.to_string() + self.peek(offset=1).to_string()
    let (operator, precedence, length) = if self.word("or") {
      ("or", 1, 2)
    } else if self.word("and") {
      ("and", 2, 3)
    } else if pair == "==" || pair == "!=" {
      (pair, 3, 2)
    } else if pair == ">=" || pair == "<=" {
      (pair, 4, 2)
    } else if c == '>' || c == '<' {
      (c.to_string(), 4, 1)
    } else if c == '+' || c == '-' {
      if c == '-' && gap && !whitespace(self.peek(offset=1)) {
        ("", 0, 0)
      } else {
        (c.to_string(), 5, 1)
      }
    } else if c == '*' || c == '/' || c == '%' {
      (c.to_string(), 6, 1)
    } else {
      ("", 0, 0)
    }
    if precedence == 0 || precedence < minimum {
      self.pos = before
      break
    }
    self.pos += length
    ignore(self.space())
    let right = self.binary(precedence + 1)
    left = Binary(operator, left, right)
  }
  left
}

///|
fn ExpressionParser::interpolation(
  self : ExpressionParser,
) -> Expression raise ParseError {
  self.pos += 2
  ignore(self.space())
  let value = self.sequence(false)
  ignore(self.space())
  if self.peek() != '}' {
    raise Invalid("unterminated interpolation")
  }
  self.pos += 1
  value
}

///|
fn ExpressionParser::atom(
  self : ExpressionParser,
) -> Expression raise ParseError {
  self.depth += 1
  if self.depth > 64 {
    raise Invalid("expression nesting limit")
  }
  let result = self.atom_inner()
  self.depth -= 1
  result
}

///|
fn ExpressionParser::atom_inner(
  self : ExpressionParser,
) -> Expression raise ParseError {
  ignore(self.space())
  let c = self.peek()
  if c == '\u0000' {
    raise Invalid("expected expression")
  }
  if self.word("not") {
    self.pos += 3
    return Unary("not", self.atom())
  }
  if c == '+' ||
    (
      c == '-' &&
      (
        digit(self.peek(offset=1)) ||
        self.peek(offset=1) == '$' ||
        self.peek(offset=1) == '(' ||
        self.peek(offset=1) == '.'
      )
    ) {
    self.pos += 1
    return Unary(c.to_string(), self.atom())
  }
  if c == '$' {
    self.pos += 1
    let start = self.pos
    while name_char(self.peek()) {
      self.pos += 1
    }
    if start == self.pos {
      raise Invalid("invalid variable")
    }
    return Variable(identifier(String::from_array(self.chars[start:self.pos])))
  }
  if c == '"' || c == '\'' {
    self.pos += 1
    let parts = []
    let mut text = StringBuilder()
    while self.peek() != c {
      if self.peek() == '\u0000' {
        raise Invalid("unterminated string")
      }
      if self.peek() == '#' && self.peek(offset=1) == '{' {
        parts.push(Literal(Text(text.to_string(), false)))
        text = StringBuilder()
        parts.push(self.interpolation())
      } else if self.peek() == '\\' {
        self.pos += 1
        let next = self.peek()
        if next == '\u0000' {
          raise Invalid("unterminated escape")
        }
        text.write_char(next)
        self.pos += 1
      } else {
        text.write_char(self.peek())
        self.pos += 1
      }
    }
    self.pos += 1
    parts.push(Literal(Text(text.to_string(), false)))
    return Interpolated(parts, true)
  }
  if c == '(' || c == '[' {
    self.pos += 1
    ignore(self.space())
    let closing = if c == '(' { ')' } else { ']' }
    if self.peek() == closing {
      self.pos += 1
      return Literal(List([], ",", c == '['))
    }
    let first = self.sequence(c == '[')
    if c == '(' && self.peek() == ':' {
      let pairs = []
      let mut key = first
      while true {
        self.pos += 1
        ignore(self.space())
        let value = self.argument()
        pairs.push((key, value))
        ignore(self.space())
        if self.peek() != ',' {
          break
        }
        self.pos += 1
        ignore(self.space())
        if self.peek() == ')' {
          break
        }
        key = self.argument()
        ignore(self.space())
        if self.peek() != ':' {
          raise Invalid("expected map colon")
        }
      }
      if self.peek() != ')' {
        raise Invalid("unterminated map")
      }
      self.pos += 1
      return Mapping(pairs)
    }
    if self.peek() != closing {
      raise Invalid("unterminated group")
    }
    self.pos += 1
    return if c == '(' { Group(first) } else { first }
  }
  if digit(c) || (c == '.' && digit(self.peek(offset=1))) {
    let start = self.pos
    while digit(self.peek()) {
      self.pos += 1
    }
    if self.peek() == '.' && digit(self.peek(offset=1)) {
      self.pos += 1
      while digit(self.peek()) {
        self.pos += 1
      }
    }
    if self.peek() == 'e' || self.peek() == 'E' {
      let old = self.pos
      self.pos += 1
      if self.peek() == '+' || self.peek() == '-' {
        self.pos += 1
      }
      if !digit(self.peek()) {
        self.pos = old
      } else {
        while digit(self.peek()) {
          self.pos += 1
        }
      }
    }
    let value = @string.parse_double(
      String::from_array(self.chars[start:self.pos]),
    ) catch {
      _ => raise Invalid("invalid number")
    }
    let unit_start = self.pos
    if self.peek() == '%' {
      self.pos += 1
    } else {
      while name_char(self.peek()) && !digit(self.peek()) && self.peek() != '-' {
        self.pos += 1
      }
    }
    return Literal(
      numeric(value, unit=String::from_array(self.chars[unit_start:self.pos])),
    )
  }
  let start = self.pos
  let parts = []
  let mut text = StringBuilder()
  let mut interpolated = false
  while true {
    let x = self.peek()
    if x == '#' && self.peek(offset=1) == '{' {
      parts.push(Literal(Text(text.to_string(), false)))
      text = StringBuilder()
      parts.push(self.interpolation())
      interpolated = true
    } else if name_char(x) ||
      ['#', '%', '!'].contains(x) ||
      (x == '.' && self.peek(offset=1) != '.') ||
      (x == '\\' && self.peek(offset=1) != '\u0000') {
      text.write_char(x)
      self.pos += 1
      if x == '\\' {
        text.write_char(self.peek())
        self.pos += 1
      }
    } else {
      break
    }
  }
  if self.pos == start {
    raise Invalid("unexpected expression character")
  }
  parts.push(Literal(Text(text.to_string(), false)))
  if interpolated {
    return Interpolated(parts, false)
  }
  let name = text.to_string()
  if name.has_suffix(".") && self.peek() == '$' {
    self.pos += 1
    let start = self.pos
    while name_char(self.peek()) {
      self.pos += 1
    }
    if start == self.pos {
      raise Invalid("invalid module variable")
    }
    return Variable(
      reference_name(name + String::from_array(self.chars[start:self.pos])),
    )
  }
  if self.peek() == '(' {
    if ["url", "calc", "clamp", "element", "expression"].contains(name) {
      self.pos += 1
      let start = self.pos
      let mut depth = 1
      let mut quote = '\u0000'
      while self.pos < self.chars.length() && depth > 0 {
        let x = self.peek()
        self.pos += 1
        if x == '\\' {
          self.pos += 1
          continue
        }
        if quote != '\u0000' {
          if x == quote {
            quote = '\u0000'
          }
        } else if x == '"' || x == '\'' {
          quote = x
        } else if x == '(' {
          depth += 1
        } else if x == ')' {
          depth -= 1
        }
      }
      if depth != 0 {
        raise Invalid("unterminated CSS function")
      }
      return RawCall(name, String::from_array(self.chars[start:self.pos - 1]))
    }
    self.pos += 1
    ignore(self.space())
    let args = []
    if self.peek() != ')' {
      while true {
        let mut value = self.argument()
        let mut key : String? = None
        ignore(self.space())
        if self.peek() == ':' {
          guard value is Variable(variable) else {
            raise Invalid("keyword argument requires variable")
          }
          key = Some(variable)
          self.pos += 1
          ignore(self.space())
          value = self.argument()
          ignore(self.space())
        }
        let spread = self.peek() == '.' &&
          self.peek(offset=1) == '.' &&
          self.peek(offset=2) == '.'
        if spread {
          self.pos += 3
          ignore(self.space())
        }
        args.push((key, value, spread))
        if self.peek() != ',' {
          break
        }
        self.pos += 1
        ignore(self.space())
        if self.peek() == ')' {
          break
        }
        if args.length() > 4096 {
          raise Invalid("argument limit")
        }
      }
    }
    if self.peek() != ')' {
      raise Invalid("unterminated function")
    }
    self.pos += 1
    return Call(reference_name(name), args)
  }
  match name {
    "true" => Literal(Boolean(true))
    "false" => Literal(Boolean(false))
    "null" => Literal(Null)
    _ => Literal(color_literal(name).unwrap_or(Text(name, false)))
  }
}

///|
fn ExpressionParser::argument(
  self : ExpressionParser,
) -> Expression raise ParseError {
  let values = [self.binary(0)]
  while true {
    let before = self.pos
    if !self.space() ||
      [',', ')', ']', ':', '\u0000'].contains(self.peek()) ||
      (self.peek() == '.' && self.peek(offset=1) == '.') {
      self.pos = before
      break
    }
    values.push(self.binary(0))
    if values.length() > 4096 {
      raise Invalid("argument length limit")
    }
  }
  if values.length() == 1 {
    values[0]
  } else {
    Sequence(values, " ", false)
  }
}
