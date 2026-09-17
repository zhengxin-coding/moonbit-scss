///|
priv struct SassNumber {
  amount : Double
  numerator : Array[String]
  denominator : Array[String]
}

///|
priv enum SassValue {
  Number(SassNumber)
  Text(String, Bool)
  Boolean(Bool)
  Null
  List(Array[SassValue], String, Bool)
  Dictionary(Array[(SassValue, SassValue)])
}

///|
fn numeric(value : Double, unit? : String = "") -> SassValue {
  Number({
    amount: value,
    numerator: if unit.is_empty() {
      []
    } else {
      [unit]
    },
    denominator: [],
  })
}

///|
fn unit_basis(unit : String) -> (String, Double) {
  match unit {
    "px" => ("length", 1.0)
    "in" => ("length", 96.0)
    "cm" => ("length", 96.0 / 2.54)
    "mm" => ("length", 96.0 / 25.4)
    "q" => ("length", 96.0 / 101.6)
    "pt" => ("length", 96.0 / 72.0)
    "pc" => ("length", 16.0)
    "deg" => ("angle", 1.0)
    "grad" => ("angle", 0.9)
    "rad" => ("angle", 180.0 / 3.141592653589793)
    "turn" => ("angle", 360.0)
    "s" => ("time", 1.0)
    "ms" => ("time", 0.001)
    "Hz" => ("frequency", 1.0)
    "kHz" => ("frequency", 1000.0)
    "dpi" => ("resolution", 1.0)
    "dpcm" => ("resolution", 2.54)
    "dppx" => ("resolution", 96.0)
    _ => (unit, 1.0)
  }
}

///|
fn normalize_number(n : SassNumber) -> SassNumber {
  let top = n.numerator.copy()
  let bottom = n.denominator.copy()
  let mut amount = n.amount
  let mut i = 0
  while i < top.length() {
    let (kind, factor) = unit_basis(top[i])
    let mut found = -1
    for j = 0; j < bottom.length(); j = j + 1 {
      if unit_basis(bottom[j]).0 == kind {
        found = j
        break
      }
    }
    if found >= 0 {
      amount *= factor / unit_basis(bottom[found]).1
      ignore(top.remove(i))
      ignore(bottom.remove(found))
    } else {
      i += 1
    }
  }
  { amount, numerator: top, denominator: bottom, }
}

///|
fn unit_factor(source : Array[String], target : Array[String]) -> Double? {
  if source.length() != target.length() {
    return None
  }
  let remaining = target.copy()
  let mut factor = 1.0
  for unit in source {
    let (kind, scale) = unit_basis(unit)
    let mut found = -1
    for i = 0; i < remaining.length(); i = i + 1 {
      if unit_basis(remaining[i]).0 == kind {
        found = i
        break
      }
    }
    if found < 0 {
      return None
    }
    factor *= scale / unit_basis(remaining[found]).1
    ignore(remaining.remove(found))
  }
  Some(factor)
}

///|
fn SassNumber::unitless(self : SassNumber) -> Bool {
  self.numerator.is_empty() && self.denominator.is_empty()
}

///|
fn SassNumber::convert(
  self : SassNumber,
  target : SassNumber,
  unitless? : Bool = false,
) -> Double? {
  if unitless && (self.unitless() || target.unitless()) {
    return Some(self.amount)
  }
  match
    (
      unit_factor(self.numerator, target.numerator),
      unit_factor(self.denominator, target.denominator),
    ) {
    (Some(a), Some(b)) => Some(self.amount * a / b)
    _ => None
  }
}

///|
fn number_text(value : Double) -> String {
  if value.is_nan() {
    return "NaN"
  }
  if value.is_inf() {
    return if value < 0.0 { "-infinity" } else { "infinity" }
  }
  if value == 0.0 {
    return "0"
  }
  // Sass emits at most ten fractional digits; do not overflow the scaling step.
  let n = if value.abs() < 900000.0 {
    (value * 10000000000.0).round() / 10000000000.0
  } else {
    value
  }
  let text = n.to_string()
  let parts = text.split("e").to_array()
  if parts.length() != 2 {
    return text
  }
  let exponent = @string.parse_int(parts[1]) catch { _ => return text }
  let negative = parts[0].has_prefix("-")
  let digits = parts[0]
    .to_owned()
    .replace_all(old="-", new="")
    .replace_all(old=".", new="")
  let lead = parts[0].split(".").to_array()[0].length() -
    (if negative { 1 } else { 0 })
  let at = lead + exponent
  let plain = if at <= 0 {
    "0." + "0".repeat(-at) + digits
  } else if at >= digits.length() {
    digits + "0".repeat(at - digits.length())
  } else {
    digits[:at].to_owned() + "." + digits[at:].to_owned()
  }
  (if negative { "-" } else { "" }) + plain
}

///|
fn SassValue::truth(self : SassValue) -> Bool {
  match self {
    Null | Boolean(false) => false
    _ => true
  }
}

///|
fn SassValue::items(self : SassValue) -> Array[SassValue] {
  match self {
    List(values, _, _) => values.copy()
    Dictionary(values) => values.map(pair => List([pair.0, pair.1], " ", false))
    _ => [self]
  }
}

///|
/// Count expanded value structure, including shared lists, before expensive use.
fn SassValue::check_size(
  self : SassValue,
  remaining : Ref[Int],
  depth : Int,
) -> Unit raise ParseError {
  if depth > 64 {
    raise Invalid("value nesting limit")
  }
  remaining.val -= 1
  if remaining.val < 0 {
    raise Invalid("value structure limit")
  }
  match self {
    Text(text, _) =>
      if text.length() > 1000000 {
        raise Invalid("string value limit")
      }
    Number(n) =>
      if n.numerator.length() + n.denominator.length() > 128 {
        raise Invalid("compound unit limit")
      }
    List(values, _, _) => {
      if values.length() > 4096 {
        raise Invalid("list length limit")
      }
      for value in values {
        value.check_size(remaining, depth + 1)
      }
    }
    Dictionary(values) => {
      if values.length() > 4096 {
        raise Invalid("map length limit")
      }
      for (key, value) in values {
        key.check_size(remaining, depth + 1)
        value.check_size(remaining, depth + 1)
      }
    }
    _ => ()
  }
}

///|
fn bounded_join(
  parts : Array[String],
  separator : String,
) -> String raise ParseError {
  let mut length = 0
  for part in parts {
    length += part.length() + separator.length()
    if length > 1000000 {
      raise Invalid("serialized value limit")
    }
  }
  parts.join(separator)
}

///|
fn SassValue::css(
  self : SassValue,
  unquote? : Bool = false,
  inspect? : Bool = false,
) -> String raise ParseError {
  match self {
    Null => if inspect { "null" } else { "" }
    Boolean(value) => value.to_string()
    Number(n) => {
      let value = number_text(n.amount)
      if n.numerator.length() > 1 || !n.denominator.is_empty() {
        let top = if n.numerator.is_empty() {
          value
        } else {
          value +
          n.numerator[0] +
          n.numerator[1:].to_owned().map(unit => " * 1" + unit).join("")
        }
        let bottom = n.denominator.map(unit => " / 1" + unit).join("")
        "calc(" + top + bottom + ")"
      } else if n.amount.is_nan() || n.amount.is_inf() {
        "calc(" +
        value +
        (if n.unitless() { "" } else { " * 1" + n.numerator.join("*") }) +
        ")"
      } else {
        value +
        n.numerator.join("*") +
        (if n.denominator.is_empty() {
          ""
        } else {
          "/" + n.denominator.join("*")
        })
      }
    }
    Text(text, quoted) =>
      if quoted && !unquote {
        "\"" +
        text
        .replace_all(old="\\", new="\\\\")
        .replace_all(old="\"", new="\\\"")
        .replace_all(old="\n", new="\\a ") +
        "\""
      } else {
        text
      }
    List(values, separator, bracketed) => {
      let items = values
        .filter(v => !(v is Null))
        .map(v => v.css(unquote~, inspect~))
      if items.is_empty() && !bracketed && !inspect {
        raise Invalid("empty list is not a CSS value")
      }
      let inside = bounded_join(
        items,
        if separator == "," {
          ", "
        } else {
          separator
        },
      )
      if bracketed {
        "[" + inside + "]"
      } else if inspect && (items.is_empty() || separator == ",") {
        "(" + inside + (if items.length() == 1 { "," } else { "" }) + ")"
      } else {
        inside
      }
    }
    Dictionary(values) => {
      if !inspect {
        raise Invalid("map is not a CSS value")
      }
      "(" +
      bounded_join(
        values.map(p => {
          bounded_join([p.0.css(inspect=true), p.1.css(inspect=true)], ": ")
        }),
        ", ",
      ) +
      ")"
    }
  }
}

///|
fn SassValue::same(self : SassValue, other : SassValue) -> Bool {
  match (self, other) {
    (Null, Null) => true
    (Boolean(a), Boolean(b)) => a == b
    (Text(a, _), Text(b, _)) => a == b
    (Number(a), Number(b)) =>
      match b.convert(a) {
        Some(n) =>
          (a.amount - n).abs() <=
          0.00000000001 * a.amount.abs().max(n.abs()).max(1.0)
        None => false
      }
    (List(a, sep, bracket), List(b, sep2, bracket2)) =>
      sep == sep2 &&
      bracket == bracket2 &&
      a.length() == b.length() &&
      same_items(a, b)
    (Dictionary(a), Dictionary(b)) =>
      a.length() == b.length() &&
      a.iter().all(p => b.iter().any(q => p.0.same(q.0) && p.1.same(q.1)))
    (List(a, _, false), Dictionary(b)) | (Dictionary(b), List(a, _, false)) =>
      a.is_empty() && b.is_empty()
    _ => false
  }
}

///|
fn same_items(a : Array[SassValue], b : Array[SassValue]) -> Bool {
  if a.length() != b.length() {
    return false
  }
  for i in 0..<a.length() {
    if !a[i].same(b[i]) {
      return false
    }
  }
  true
}

///|
fn binary_value(
  operator : String,
  left : SassValue,
  right : SassValue,
) -> SassValue raise ParseError {
  if operator == "==" || operator == "!=" {
    return Boolean(
      if operator == "==" {
        left.same(right)
      } else {
        !left.same(right)
      },
    )
  }
  if (left, right) is (Number(a), Number(b)) {
    if operator == "*" || operator == "/" {
      if a.numerator.length() +
        a.denominator.length() +
        b.numerator.length() +
        b.denominator.length() >
        128 {
        raise Invalid("compound unit limit")
      }
      return Number(
        normalize_number({
          amount: if operator == "*" {
            a.amount * b.amount
          } else {
            a.amount / b.amount
          },
          numerator: a.numerator +
          (if operator == "*" { b.numerator } else { b.denominator }),
          denominator: a.denominator +
          (if operator == "*" { b.denominator } else { b.numerator }),
        }),
      )
    }
    let target = if a.unitless() { b } else { a }
    let av = a.convert(target, unitless=true).unwrap()
    let bv = match b.convert(target, unitless=true) {
      Some(v) => v
      None => raise Invalid("incompatible units")
    }
    match operator {
      "+" => return Number({ ..target, amount: av + bv, })
      "-" => return Number({ ..target, amount: av - bv, })
      "%" => return Number({ ..target, amount: av - bv * (av / bv).floor(), })
      "<" => return Boolean(av < bv)
      "<=" => return Boolean(av <= bv)
      ">" => return Boolean(av > bv)
      ">=" => return Boolean(av >= bv)
      _ => ()
    }
  }
  if operator == "+" {
    let quoted = match left {
      Text(_, q) => q
      _ => false
    }
    return Text(
      bounded_join([left.css(unquote=true), right.css(unquote=true)], ""),
      quoted,
    )
  }
  if operator == "-" || operator == "/" {
    return Text(
      bounded_join([left.css(unquote=true), right.css(unquote=true)], operator),
      false,
    )
  }
  raise Invalid("undefined operation " + operator)
}
