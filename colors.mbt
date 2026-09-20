///|
priv struct SassColor {
  red : Double
  green : Double
  blue : Double
  alpha : Double
  format : String
  original : String?
  hsl_channels : (Double, Double, Double)?
}

///|
fn color(
  red : Double,
  green : Double,
  blue : Double,
  alpha? : Double = 1.0,
  format? : String = "auto",
  original? : String? = None,
) -> SassColor {
  { red, green, blue, alpha, format, original, hsl_channels: None, }
}

///|
fn color_hex_digit(c : UInt16) -> Int? {
  let n = c.to_int()
  if n >= 48 && n <= 57 {
    Some(n - 48)
  } else if n >= 65 && n <= 70 {
    Some(n - 55)
  } else if n >= 97 && n <= 102 {
    Some(n - 87)
  } else {
    None
  }
}

///|
fn color_literal(text : String) -> SassValue? raise ParseError {
  if named_colors.get(text.to_lower()) is Some((r, g, b, a)) {
    return Some(
      Color(
        color(
          r.to_double(),
          g.to_double(),
          b.to_double(),
          alpha=a.to_double(),
          original=Some(text),
        ),
      ),
    )
  }
  if !text.has_prefix("#") {
    return None
  }
  let n = text.length() - 1
  if ![3, 4, 6, 8].contains(n) {
    raise Invalid("invalid hex color length")
  }
  let digits = []
  for i in 1..<text.length() {
    digits.push(
      color_hex_digit(text[i]).unwrap_or_else(() => {
        raise Invalid("invalid hex color")
      }),
    )
  }
  let short = n <= 4
  let channel = fn(i : Int) -> Double {
    (if short {
      digits[i] * 17
    } else {
      digits[i * 2] * 16 + digits[i * 2 + 1]
    }).to_double()
  }
  let alpha = if n == 4 || n == 8 { channel(3) / 255.0 } else { 1.0 }
  Some(
    Color(
      color(
        channel(0),
        channel(1),
        channel(2),
        alpha~,
        original=if n == 3 || n == 6 { Some(text) } else { None },
      ),
    ),
  )
}

///|
fn color_hsl(
  hue : Double,
  saturation : Double,
  lightness : Double,
  alpha : Double,
  format : String,
) -> SassColor {
  let h = (hue - (hue / 360.0).floor() * 360.0) / 60.0
  let s = saturation / 100.0
  let l = lightness / 100.0
  let c = (1.0 - (2.0 * l - 1.0).abs()) * s
  let x = c * (1.0 - (h - (h / 2.0).floor() * 2.0 - 1.0).abs())
  let m = l - c / 2.0
  let (r, g, b) = if h < 1.0 {
    (c, x, 0.0)
  } else if h < 2.0 {
    (x, c, 0.0)
  } else if h < 3.0 {
    (0.0, c, x)
  } else if h < 4.0 {
    (0.0, x, c)
  } else if h < 5.0 {
    (x, 0.0, c)
  } else {
    (c, 0.0, x)
  }
  {
    ..color((r + m) * 255.0, (g + m) * 255.0, (b + m) * 255.0, alpha~, format~),
    hsl_channels: Some((h * 60.0, saturation, lightness)),
  }
}

///|
fn SassColor::hsl(self : SassColor) -> (Double, Double, Double) {
  if self.hsl_channels is Some(channels) {
    return channels
  }
  let r = self.red / 255.0
  let g = self.green / 255.0
  let b = self.blue / 255.0
  let hi = r.max(g).max(b)
  let lo = r.min(g).min(b)
  let d = hi - lo
  let l = (hi + lo) / 2.0
  if d.abs() < 0.000000000001 {
    return (0.0, 0.0, l * 100.0)
  }
  let h = if hi == r {
    (g - b) / d
  } else if hi == g {
    (b - r) / d + 2.0
  } else {
    (r - g) / d + 4.0
  }
  let h = h * 60.0
  (
    h - (h / 360.0).floor() * 360.0,
    d / (1.0 - (2.0 * l - 1.0).abs()) * 100.0,
    l * 100.0,
  )
}

///|
fn SassColor::css(self : SassColor) -> String {
  if self.original is Some(text) {
    return text
  }
  let alpha = if self.alpha == 1.0 {
    ""
  } else {
    ", " + number_text(self.alpha)
  }
  if self.format == "hsl" {
    let (h, s, l) = self.hsl()
    return (if self.alpha == 1.0 { "hsl(" } else { "hsla(" }) +
      number_text(h) +
      ", " +
      number_text(s) +
      "%, " +
      number_text(l) +
      "%" +
      alpha +
      ")"
  }
  let rgb = [self.red, self.green, self.blue]
  let integers = rgb.iter().all(n => (n - n.round()).abs() < 0.0000000001)
  if self.format == "auto" && integers && self.alpha == 1.0 {
    let alphabet = "0123456789abcdef"
    let hex = "#" +
      rgb
      .map(n => {
        let byte = n.round().to_int().max(0).min(255)
        alphabet[byte / 16:byte / 16 + 1].to_owned() +
        alphabet[byte % 16:byte % 16 + 1].to_owned()
      })
      .join("")
    let mut shortest = hex
    for name, (r, g, b, a) in named_colors {
      if a == 1 &&
        r == self.red.round().to_int() &&
        g == self.green.round().to_int() &&
        b == self.blue.round().to_int() &&
        (
          name.length() < shortest.length() ||
          (name.length() == shortest.length() && name < shortest)
        ) {
        shortest = name
      }
    }
    return shortest
  }
  let percent = !integers || self.format == "percent"
  (if self.alpha == 1.0 { "rgb(" } else { "rgba(" }) +
  rgb
  .map(n => {
    if percent {
      number_text(n / 255.0 * 100.0) + "%"
    } else {
      number_text(n.round())
    }
  })
  .join(", ") +
  alpha +
  ")"
}

///|
fn require_color(value : SassValue) -> SassColor raise ParseError {
  match value {
    Color(c) => c
    _ => raise Invalid("expected color")
  }
}

///|
fn color_component(
  value : SassValue,
  scale : Double,
  percent_only? : Bool = false,
) -> Double raise ParseError {
  let n = require_number(value)
  if n.amount.is_nan() || n.amount.is_inf() {
    raise Invalid("finite color component required")
  }
  if n.numerator == ["%"] && n.denominator.is_empty() {
    return n.amount * scale / 100.0
  }
  if n.unitless() && !percent_only {
    return n.amount
  }
  raise Invalid("invalid color component unit")
}

///|
fn color_mix(a : SassColor, b : SassColor, weight : Double) -> SassColor {
  let p = weight / 100.0
  let w = 2.0 * p - 1.0
  let alpha = a.alpha - b.alpha
  let adjusted = if (w * alpha + 1.0).abs() < 0.000000000001 {
    w
  } else {
    (w + alpha) / (1.0 + w * alpha)
  }
  let first = (adjusted + 1.0) / 2.0
  color(
    a.red * first + b.red * (1.0 - first),
    a.green * first + b.green * (1.0 - first),
    a.blue * first + b.blue * (1.0 - first),
    alpha=a.alpha * p + b.alpha * (1.0 - p),
  )
}
