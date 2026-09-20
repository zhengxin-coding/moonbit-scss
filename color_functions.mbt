///|
fn global_color_builtin(name : String) -> Bool {
  [
    "rgb", "rgba", "hsl", "hsla", "red", "green", "blue", "alpha", "opacity", "hue",
    "saturation", "lightness", "mix", "lighten", "darken", "saturate", "desaturate",
    "adjust-hue", "complement", "grayscale", "invert", "opacify", "fade-in", "transparentize",
    "fade-out", "adjust-color", "change-color", "scale-color",
  ].contains(name)
}

///|
fn color_builtin(
  name : String,
  positional : Array[SassValue],
  keywords : Map[String, SassValue],
) -> SassValue? raise ParseError {
  let operation = if name.has_prefix("color.") {
    name[6:].to_owned()
  } else {
    name
  }
  let rgb = operation == "rgb" || operation == "rgba"
  let hsl = operation == "hsl" || operation == "hsla"
  let qualified = name.has_prefix("color.")
  if qualified &&
    [
      "rgb", "rgba", "hsl", "hsla", "lighten", "darken", "saturate", "desaturate",
      "adjust-hue", "opacify", "transparentize", "fade-in", "fade-out",
    ].contains(operation) {
    return None
  }
  if (["adjust", "change", "scale"].contains(operation) && qualified) ||
    ["adjust-color", "change-color", "scale-color"].contains(operation) {
    return Some(Color(color_modify(operation, positional, keywords)))
  }
  if !global_color_builtin(operation) {
    return None
  }
  if (rgb || hsl) &&
    positional.length() == 1 &&
    keywords.is_empty() &&
    positional[0] is Text(_, _) {
    return None
  }
  // CSS filter forms remain plain CSS functions.
  if ["opacity", "saturate", "grayscale", "invert"].contains(operation) &&
    !qualified &&
    positional.length() == 1 &&
    positional[0] is Number(_) &&
    keywords.is_empty() {
    return None
  }
  let spec = if rgb && (positional.length() == 2 || keywords.contains("color")) {
    ["color", "alpha"]
  } else if rgb {
    ["red", "green", "blue", "alpha"]
  } else if hsl {
    ["hue", "saturation", "lightness", "alpha"]
  } else if operation == "mix" {
    ["color1", "color2", "weight"]
  } else if [
      "lighten", "darken", "saturate", "desaturate", "opacify", "fade-in", "transparentize",
      "fade-out",
    ].contains(operation) {
    ["color", "amount"]
  } else if operation == "adjust-hue" {
    ["color", "degrees"]
  } else if operation == "invert" {
    ["color", "weight"]
  } else {
    ["color"]
  }
  let minimum = if rgb && spec[0] == "color" {
    2
  } else if rgb || hsl {
    3
  } else if operation == "mix" {
    2
  } else if operation == "invert" {
    1
  } else {
    spec.length()
  }
  let args = positional.copy()
  if args.length() > spec.length() {
    raise Invalid("too many color arguments")
  }
  for i in 0..<spec.length() {
    if keywords.get(spec[i]) is Some(v) {
      if i < positional.length() {
        raise Invalid("color argument supplied twice")
      }
      while args.length() <= i {
        args.push(Null)
      }
      args[i] = v
      keywords.remove(spec[i])
    }
  }
  if !keywords.is_empty() {
    raise Invalid("unknown color keyword")
  }
  if args.length() < minimum || args[:minimum].iter().any(v => v is Null) {
    raise Invalid("missing color argument")
  }
  let optional = fn(i : Int, fallback : SassValue) -> SassValue {
    args.get(i).unwrap_or(fallback)
  }
  if rgb || hsl {
    if args.iter().any(v => v is Text(_, _)) {
      // var()/calc() in channel positions must survive for browser evaluation.
      if args
        .iter()
        .any(v => {
          match v {
            Text(s, false) => s.has_prefix("var(") || s.has_prefix("calc(")
            _ => false
          }
        }) {
        return Some(
          Text(operation + "(" + args.map(v => v.css()).join(", ") + ")", false),
        )
      }
    }
    if rgb && spec[0] == "color" {
      let c = require_color(args[0])
      return Some(
        Color({
          ..c,
          alpha: color_component(args[1], 1.0).max(0.0).min(1.0),
          original: None,
          format: "rgb",
        }),
      )
    }
    let alpha = color_component(optional(3, numeric(1.0)), 1.0)
      .max(0.0)
      .min(1.0)
    if rgb {
      let r = color_component(args[0], 255.0).max(0.0).min(255.0)
      let g = color_component(args[1], 255.0).max(0.0).min(255.0)
      let b = color_component(args[2], 255.0).max(0.0).min(255.0)
      let percent = args[:3]
        .iter()
        .all(v => {
          match v {
            Number(n) => n.numerator == ["%"]
            _ => false
          }
        })
      return Some(
        Color(
          color(r, g, b, alpha~, format=if percent { "percent" } else { "rgb" }),
        ),
      )
    }
    let angle = require_number(args[0])
    let hue = angle
      .convert(require_number(numeric(0.0, unit="deg")), unitless=true)
      .unwrap_or_else(() => raise Invalid("expected angle"))
    return Some(
      Color(
        color_hsl(
          hue,
          color_component(args[1], 100.0),
          color_component(args[2], 100.0),
          alpha,
          "hsl",
        ),
      ),
    )
  }
  let c = require_color(args[0])
  match operation {
    "red" => Some(numeric(c.red.round()))
    "green" => Some(numeric(c.green.round()))
    "blue" => Some(numeric(c.blue.round()))
    "alpha" | "opacity" => Some(numeric(c.alpha))
    "hue" => Some(numeric(c.hsl().0, unit="deg"))
    "saturation" => Some(numeric(c.hsl().1, unit="%"))
    "lightness" => Some(numeric(c.hsl().2, unit="%"))
    "mix" | "invert" => {
      let weight = color_component(
        optional(
          if operation == "mix" {
            2
          } else {
            1
          },
          numeric(if operation == "mix" { 50.0 } else { 100.0 }, unit="%"),
        ),
        100.0,
        percent_only=true,
      )
      if weight < 0.0 || weight > 100.0 {
        raise Invalid("color weight out of range")
      }
      if operation == "mix" {
        Some(Color(color_mix(c, require_color(args[1]), weight)))
      } else {
        Some(
          Color(
            color_mix(
              color(
                255.0 - c.red,
                255.0 - c.green,
                255.0 - c.blue,
                alpha=c.alpha,
              ),
              c,
              weight,
            ),
          ),
        )
      }
    }
    "opacify" | "fade-in" | "transparentize" | "fade-out" => {
      let amount = color_component(args[1], 1.0)
      if amount < 0.0 || amount > 1.0 {
        raise Invalid("alpha amount out of range")
      }
      let delta = if operation == "opacify" || operation == "fade-in" {
        amount
      } else {
        -amount
      }
      Some(
        Color({
          ..c,
          alpha: (c.alpha + delta).max(0.0).min(1.0),
          original: None,
        }),
      )
    }
    _ => {
      let (h, s, l) = c.hsl()
      let mut h = h
      let mut s = s
      let mut l = l
      if operation == "complement" {
        h += 180.0
      } else if operation == "grayscale" {
        s = 0.0
      } else if operation == "adjust-hue" {
        let angle = require_number(args[1])
        h += angle
          .convert(require_number(numeric(0.0, unit="deg")), unitless=true)
          .unwrap_or_else(() => raise Invalid("expected angle"))
      } else {
        let amount = color_component(args[1], 100.0)
        if amount < 0.0 || amount > 100.0 {
          raise Invalid("color amount out of range")
        }
        if operation == "lighten" {
          l += amount
        } else if operation == "darken" {
          l -= amount
        } else if operation == "saturate" {
          s += amount
        } else if operation == "desaturate" {
          s -= amount
        } else {
          return None
        }
      }
      Some(
        Color(
          color_hsl(
            h,
            s.max(0.0).min(100.0),
            l.max(0.0).min(100.0),
            c.alpha,
            if c.format == "hsl" {
              "hsl"
            } else {
              "auto"
            },
          ),
        ),
      )
    }
  }
}

///|
fn color_modify(
  operation : String,
  positional : Array[SassValue],
  keywords : Map[String, SassValue],
) -> SassColor raise ParseError {
  let c = if positional.length() == 1 {
    if keywords.contains("color") {
      raise Invalid("color supplied twice")
    }
    require_color(positional[0])
  } else if positional.is_empty() && keywords.get("color") is Some(v) {
    keywords.remove("color")
    require_color(v)
  } else {
    raise Invalid("expected one color")
  }
  let rgb = ["red", "green", "blue"].iter().any(k => keywords.contains(k))
  let hsl = ["hue", "saturation", "lightness"]
    .iter()
    .any(k => keywords.contains(k))
  if rgb && hsl {
    raise Invalid("cannot mix RGB and HSL adjustments")
  }
  let modify = fn(
    key : String,
    value : Double,
    maximum : Double,
  ) -> Double raise ParseError {
    match keywords.get(key) {
      None => value
      Some(v) => {
        keywords.remove(key)
        if operation.has_prefix("scale") {
          if key == "hue" {
            raise Invalid("cannot scale hue")
          }
          let amount = color_component(v, 1.0, percent_only=true)
          if amount < -1.0 || amount > 1.0 {
            raise Invalid("scale amount out of range")
          }
          value + amount * (if amount > 0.0 { maximum - value } else { value })
        } else {
          let amount = if key == "hue" {
            require_number(v)
            .convert(require_number(numeric(0.0, unit="deg")), unitless=true)
            .unwrap_or_else(() => raise Invalid("expected angle"))
          } else {
            color_component(v, maximum)
          }
          let out = if operation.has_prefix("change") {
            amount
          } else {
            value + amount
          }
          if key != "hue" {
            out.max(0.0).min(maximum)
          } else {
            out
          }
        }
      }
    }
  }
  let alpha = modify("alpha", c.alpha, 1.0)
  let result = if hsl {
    let (h, s, l) = c.hsl()
    color_hsl(
      modify("hue", h, 360.0),
      modify("saturation", s, 100.0),
      modify("lightness", l, 100.0),
      alpha,
      if c.format == "hsl" {
        "hsl"
      } else {
        "auto"
      },
    )
  } else {
    color(
      modify("red", c.red, 255.0),
      modify("green", c.green, 255.0),
      modify("blue", c.blue, 255.0),
      alpha~,
      format=if c.format == "hsl" { "hsl" } else { "auto" },
    )
  }
  if !keywords.is_empty() {
    raise Invalid("unsupported color adjustment keyword or color space")
  }
  result
}
