///|
fn Scope::standard(self : Scope, prefix : String) -> String? {
  match self.standard_modules.get(prefix) {
    Some(name) => Some(name)
    None =>
      match self.parent {
        Some(parent) => parent.standard(prefix)
        None => None
      }
  }
}

///|
fn require_number(value : SassValue) -> SassNumber raise ParseError {
  match value {
    Number(n) => n
    _ => raise Invalid("expected number")
  }
}

///|
fn require_text(value : SassValue) -> (String, Bool) raise ParseError {
  match value {
    Text(s, q) => (s, q)
    _ => raise Invalid("expected string")
  }
}

///|
fn require_int(value : SassValue) -> Int raise ParseError {
  let n = require_number(value)
  if !n.unitless() ||
    n.amount.is_nan() ||
    n.amount.is_inf() ||
    n.amount != n.amount.floor() ||
    n.amount.abs() > 2147483647.0 {
    raise Invalid("expected bounded integer")
  }
  n.amount.to_int()
}

///|
fn list_index(value : SassValue, length : Int) -> Int raise ParseError {
  let raw = require_int(value)
  let index = if raw < 0 { length + raw } else { raw - 1 }
  if index < 0 || index >= length {
    raise Invalid("list index out of range")
  }
  index
}

///|
fn builtin(
  scope : Scope,
  original : String,
  positional : Array[SassValue],
  keywords : Map[String, SassValue],
) -> SassValue? raise ParseError {
  let pieces = original.split(".").to_array()
  let name = if pieces.length() == 2 {
    let library = scope.standard(pieces[0].to_owned()).unwrap_or("")
    if library.is_empty() {
      return None
    }
    library + "." + pieces[1].to_owned()
  } else {
    original
  }
  // Parameter names also define the keyword-binding contract for each function.
  let spec = match name {
    "math.div" => ["number1", "number2"]
    "abs"
    | "math.abs"
    | "ceil"
    | "math.ceil"
    | "floor"
    | "math.floor"
    | "round"
    | "math.round"
    | "percentage"
    | "math.percentage"
    | "unit"
    | "math.unit"
    | "unitless"
    | "math.is-unitless" => ["number"]
    "comparable" | "math.compatible" => ["number1", "number2"]
    "math.pow" => ["base", "exponent"]
    "math.sqrt" => ["number"]
    "length" | "list.length" | "list.separator" | "list.is-bracketed" =>
      ["list"]
    "nth" | "list.nth" => ["list", "n"]
    "set-nth" | "list.set-nth" => ["list", "n", "value"]
    "index" | "list.index" => ["list", "value"]
    "append" | "list.append" => ["list", "val", "separator"]
    "join" | "list.join" => ["list1", "list2", "separator", "bracketed"]
    "list.slash" => []
    "map-get" | "map.get" | "map-has-key" | "map.has-key" => ["map", "key"]
    "map-keys" | "map.keys" | "map-values" | "map.values" => ["map"]
    "map-merge" | "map.merge" => ["map1", "map2"]
    "map-remove" | "map.remove" => ["map", "key"]
    "quote"
    | "string.quote"
    | "unquote"
    | "string.unquote"
    | "str-length"
    | "string.length"
    | "to-upper-case"
    | "string.to-upper-case"
    | "to-lower-case"
    | "string.to-lower-case" => ["string"]
    "str-slice" | "string.slice" => ["string", "start-at", "end-at"]
    "str-index" | "string.index" => ["string", "substring"]
    "str-insert" | "string.insert" => ["string", "insert", "index"]
    "type-of" | "meta.type-of" | "inspect" | "meta.inspect" => ["value"]
    "variable-exists"
    | "meta.variable-exists"
    | "global-variable-exists"
    | "meta.global-variable-exists" => ["name"]
    "function-exists"
    | "meta.function-exists"
    | "mixin-exists"
    | "meta.mixin-exists" => ["name"]
    "min" | "math.min" | "max" | "math.max" => []
    _ => return None
  }
  let variadic = [
    "min", "math.min", "max", "math.max", "list.slash", "map-remove", "map.remove",
  ].contains(name)
  let args = positional.copy()
  let supplied : Map[Int, Bool] = Map([])
  for i in 0..<positional.length() {
    supplied[i] = true
  }
  for i in 0..<spec.length() {
    if keywords.get(spec[i]) is Some(value) {
      if i < args.length() {
        raise Invalid("argument supplied twice")
      }
      while args.length() < i {
        args.push(Null)
      }
      args.push(value)
      keywords.remove(spec[i])
      supplied[i] = true
    }
  }
  if !keywords.is_empty() {
    raise Invalid("unknown builtin keyword")
  }
  if !variadic && args.length() > spec.length() {
    raise Invalid("too many builtin arguments")
  }
  let minimum = match name {
    "append"
    | "list.append"
    | "join"
    | "list.join"
    | "str-slice"
    | "string.slice" => 2
    "min" | "math.min" | "max" | "math.max" => 1
    "list.slash" => 2
    _ => spec.length()
  }
  if args.length() < minimum {
    raise Invalid("missing builtin argument")
  }
  for i in 0..<minimum {
    if !supplied.contains(i) {
      raise Invalid("missing builtin argument")
    }
  }
  let at = fn(i : Int) -> SassValue { args.get(i).unwrap_or(Null) }
  let result : SassValue = match name {
    "math.div" => binary_value("/", at(0), at(1))
    "abs"
    | "math.abs"
    | "ceil"
    | "math.ceil"
    | "floor"
    | "math.floor"
    | "round"
    | "math.round" => {
      let n = require_number(at(0))
      Number({
        ..n,
        amount: if name.has_suffix("abs") {
          n.amount.abs()
        } else if name.has_suffix("ceil") {
          n.amount.ceil()
        } else if name.has_suffix("floor") {
          n.amount.floor()
        } else if n.amount < 0.0 {
          -(n.amount.abs() + 0.5).floor()
        } else {
          (n.amount + 0.5).floor()
        },
      })
    }
    "percentage" | "math.percentage" => {
      let n = require_number(at(0))
      if !n.unitless() {
        raise Invalid("percentage expects unitless number")
      }
      numeric(n.amount * 100.0, unit="%")
    }
    "unit" | "math.unit" => {
      let n = require_number(at(0))
      Text(
        n.numerator.join("*") +
        (if n.denominator.is_empty() {
          ""
        } else {
          "/" + n.denominator.join("*")
        }),
        true,
      )
    }
    "unitless" | "math.is-unitless" => Boolean(require_number(at(0)).unitless())
    "comparable" | "math.compatible" =>
      Boolean(
        require_number(at(0)).convert(require_number(at(1)), unitless=true)
        is Some(_),
      )
    "math.pow" | "math.sqrt" => {
      let n = require_number(at(0))
      if !n.unitless() {
        raise Invalid("math function expects unitless number")
      }
      if name == "math.sqrt" {
        numeric(n.amount.sqrt())
      } else {
        let power = require_number(at(1))
        if !power.unitless() {
          raise Invalid("power must be unitless")
        }
        numeric(@math.pow(n.amount, power.amount))
      }
    }
    "min" | "math.min" | "max" | "math.max" => {
      let mut best = require_number(args[0])
      for value in args[1:] {
        let n = require_number(value)
        let converted = match n.convert(best, unitless=true) {
          Some(v) => v
          None => raise Invalid("incompatible min/max units")
        }
        if (name.has_suffix("min") && converted < best.amount) ||
          (name.has_suffix("max") && converted > best.amount) {
          best = n
        }
      }
      Number(best)
    }
    "length" | "list.length" => numeric(at(0).items().length().to_double())
    "list.separator" =>
      Text(
        match at(0) {
          List(_, sep, _) =>
            if sep == "," {
              "comma"
            } else if sep == " / " {
              "slash"
            } else {
              "space"
            }
          Dictionary(_) => "comma"
          _ => "space"
        },
        false,
      )
    "list.is-bracketed" => Boolean(at(0) is List(_, _, true))
    "nth" | "list.nth" => {
      let values = at(0).items()
      values[list_index(at(1), values.length())]
    }
    "set-nth" | "list.set-nth" => {
      let values = at(0).items()
      values[list_index(at(1), values.length())] = at(2)
      match at(0) {
        List(_, sep, bracket) => List(values, sep, bracket)
        _ => List(values, " ", false)
      }
    }
    "index" | "list.index" => {
      let values = at(0).items()
      let mut result = Null
      for i in 0..<values.length() {
        if values[i].same(at(1)) {
          result = numeric((i + 1).to_double())
          break
        }
      }
      result
    }
    "append" | "list.append" | "join" | "list.join" => {
      let values = at(0).items()
      if name.has_suffix("append") {
        values.push(at(1))
      } else {
        for value in at(1).items() {
          values.push(value)
        }
      }
      let separator = if at(2) is Null || at(2) is Text("auto", _) {
        match at(0) {
          List(_, sep, _) => sep
          _ =>
            if name.has_suffix("join") {
              match at(1) {
                List(_, sep, _) => sep
                _ => " "
              }
            } else {
              " "
            }
        }
      } else {
        match require_text(at(2)).0 {
          "comma" => ","
          "space" => " "
          _ => raise Invalid("invalid separator")
        }
      }
      let bracketed = if at(3) is Null || at(3) is Text("auto", _) {
        at(0) is List(_, _, true)
      } else {
        match at(3) {
          Boolean(v) => v
          _ => raise Invalid("bracketed must be boolean")
        }
      }
      List(values, separator, bracketed)
    }
    "list.slash" => List(args, " / ", false)
    "map-get" | "map.get" | "map-has-key" | "map.has-key" => {
      let values = map_entries(at(0))
      let mut result = Null
      let mut found = false
      for (key, value) in values {
        if key.same(at(1)) {
          result = value
          found = true
          break
        }
      }
      if name.has_suffix("has-key") {
        Boolean(found)
      } else {
        result
      }
    }
    "map-keys" | "map.keys" =>
      List(map_entries(at(0)).map(p => p.0), ",", false)
    "map-values" | "map.values" =>
      List(map_entries(at(0)).map(p => p.1), ",", false)
    "map-merge" | "map.merge" => {
      let values = map_entries(at(0)).copy()
      for (key, value) in map_entries(at(1)) {
        let mut replaced = false
        for i in 0..<values.length() {
          if values[i].0.same(key) {
            values[i] = (key, value)
            replaced = true
            break
          }
        }
        if !replaced {
          values.push((key, value))
        }
      }
      Dictionary(values)
    }
    "map-remove" | "map.remove" =>
      Dictionary(
        map_entries(at(0)).filter(p => !args[1:].iter().any(k => k.same(p.0))),
      )
    "quote" | "string.quote" | "unquote" | "string.unquote" =>
      Text(require_text(at(0)).0, !name.has_suffix("unquote"))
    "str-length" | "string.length" =>
      numeric(require_text(at(0)).0.to_array().length().to_double())
    "to-upper-case"
    | "string.to-upper-case"
    | "to-lower-case"
    | "string.to-lower-case" => {
      let (text, quoted) = require_text(at(0))
      Text(
        if name.has_suffix("upper-case") {
          text.to_upper()
        } else {
          text.to_lower()
        },
        quoted,
      )
    }
    "str-slice" | "string.slice" => {
      let (text, quoted) = require_text(at(0))
      let chars = text.to_array()
      let start = require_int(at(1))
      let finish = if at(2) is Null {
        chars.length()
      } else {
        require_int(at(2))
      }
      let first = (if start < 0 {
          chars.length() + start
        } else {
          (start - 1).max(0)
        })
        .max(0)
        .min(chars.length())
      let last = (if finish < 0 { chars.length() + finish + 1 } else { finish })
        .max(0)
        .min(chars.length())
      Text(
        if last < first {
          ""
        } else {
          String::from_array(chars[first:last])
        },
        quoted,
      )
    }
    "str-index" | "string.index" => {
      let chars = require_text(at(0)).0.to_array()
      let needle = require_text(at(1)).0.to_array()
      let mut index = Null
      for i = 0; i + needle.length() <= chars.length(); i = i + 1 {
        if chars[i:i + needle.length()].to_owned() == needle {
          index = numeric((i + 1).to_double())
          break
        }
      }
      index
    }
    "str-insert" | "string.insert" => {
      let (text, quoted) = require_text(at(0))
      let chars = text.to_array()
      let insert = require_text(at(1)).0
      let index = require_int(at(2))
      let at = (if index < 0 {
          chars.length() + index + 1
        } else {
          (index - 1).max(0)
        })
        .max(0)
        .min(chars.length())
      Text(
        String::from_array(chars[:at]) + insert + String::from_array(chars[at:]),
        quoted,
      )
    }
    "type-of" | "meta.type-of" =>
      Text(
        match at(0) {
          Number(_) => "number"
          Text(_, _) => "string"
          Boolean(_) => "bool"
          Null => "null"
          List(_, _, _) => "list"
          Dictionary(_) => "map"
        },
        false,
      )
    "inspect" | "meta.inspect" => Text(at(0).css(inspect=true), false)
    "variable-exists" | "meta.variable-exists" =>
      Boolean(scope.get(require_text(at(0)).0) is Some(_))
    "global-variable-exists" | "meta.global-variable-exists" =>
      Boolean(scope.global().vars.contains(identifier(require_text(at(0)).0)))
    "function-exists" | "meta.function-exists" => {
      let name = identifier(require_text(at(0)).0)
      Boolean(scope.lookup_function(name) is Some(_) || global_builtin(name))
    }
    "mixin-exists" | "meta.mixin-exists" =>
      Boolean(scope.lookup_mixin(require_text(at(0)).0) is Some(_))
    _ => raise Invalid("unimplemented builtin")
  }
  Some(result)
}

///|
fn map_entries(
  value : SassValue,
) -> Array[(SassValue, SassValue)] raise ParseError {
  match value {
    Dictionary(values) => values
    List([], _, false) => []
    _ => raise Invalid("expected map")
  }
}

///|
fn global_builtin(name : String) -> Bool {
  [
    "abs", "ceil", "floor", "round", "percentage", "unit", "unitless", "comparable",
    "min", "max", "length", "nth", "set-nth", "index", "append", "join", "map-get",
    "map-has-key", "map-keys", "map-values", "map-merge", "map-remove", "quote",
    "unquote", "str-length", "to-upper-case", "to-lower-case", "str-slice", "str-index",
    "str-insert", "type-of", "inspect", "variable-exists", "global-variable-exists",
    "function-exists", "mixin-exists",
  ].contains(name)
}
