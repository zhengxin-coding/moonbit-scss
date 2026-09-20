///|
priv struct Evaluation {
  mut remaining : Int
  mut calls : Int
  files : Map[String, String]
  loaded : Map[String, Scope]
  loading : Array[String]
  order : Array[String]
  css : Array[String]
  diagnostics : Array[String]
}

///|
fn Evaluation::new() -> Evaluation {
  {
    remaining: 100000,
    calls: 0,
    files: Map([]),
    loaded: Map([]),
    loading: [],
    order: [],
    css: [],
    diagnostics: [],
  }
}

///|
fn Scope::charge(self : Scope) -> Unit raise ParseError {
  self.evaluation.remaining -= 1
  if self.evaluation.remaining < 0 {
    raise Invalid("evaluation budget")
  }
}

///|
fn Scope::evaluate(
  self : Scope,
  source : String,
  division? : Bool = true,
) -> SassValue raise ParseError {
  self.eval_ast(parse_expression(source), division, 0)
}

///|
fn arithmetic_expression(value : Expression) -> Bool {
  match value {
    Literal(_) | Interpolated(_, _) => false
    _ => true
  }
}

///|
fn Scope::eval_ast(
  self : Scope,
  expression : Expression,
  division : Bool,
  depth : Int,
) -> SassValue raise ParseError {
  self.charge()
  if depth > 128 {
    raise Invalid("expression evaluation depth")
  }
  let result = match expression {
    Literal(value) => value
    Variable(name) =>
      match self.get(name) {
        Some(value) => value
        None => raise Invalid("undefined variable " + name)
      }
    Group(value) => self.eval_ast(value, true, depth + 1)
    Interpolated(parts, quoted) => {
      let out = StringBuilder()
      let mut length = 0
      for part in parts {
        let value = self.eval_ast(part, true, depth + 1)
        let text = if value is List([], _, _) || value is Null {
          ""
        } else {
          value.css(unquote=true)
        }
        length += text.length()
        if length > 1000000 {
          raise Invalid("interpolation size limit")
        }
        out.write_string(text)
      }
      Text(out.to_string(), quoted)
    }
    Sequence(values, separator, bracketed) =>
      List(
        values.map(v => self.eval_ast(v, division, depth + 1)),
        separator,
        bracketed,
      )
    Mapping(values) => {
      let result : Array[(SassValue, SassValue)] = []
      for (key, value) in values {
        let key = self.eval_ast(key, true, depth + 1)
        if result.iter().any(p => p.0.same(key)) {
          raise Invalid("duplicate map key")
        }
        result.push((key, self.eval_ast(value, true, depth + 1)))
      }
      Dictionary(result)
    }
    Unary(operator, value) => {
      let v = self.eval_ast(value, true, depth + 1)
      if operator == "not" {
        Boolean(!v.truth())
      } else if v is Number(n) {
        Number({
          ..n,
          amount: if operator == "-" {
            -n.amount
          } else {
            n.amount
          },
        })
      } else {
        Text(operator + v.css(unquote=true), false)
      }
    }
    Binary(operator, a, b) => {
      let left = self.eval_ast(a, division || operator != "/", depth + 1)
      if operator == "and" {
        if left.truth() {
          self.eval_ast(b, division, depth + 1)
        } else {
          left
        }
      } else if operator == "or" {
        if left.truth() {
          left
        } else {
          self.eval_ast(b, division, depth + 1)
        }
      } else {
        let right = self.eval_ast(b, division || operator != "/", depth + 1)
        if operator == "/" &&
          !division &&
          !arithmetic_expression(a) &&
          !arithmetic_expression(b) {
          Text(left.css() + "/" + right.css(), false)
        } else {
          binary_value(operator, left, right)
        }
      }
    }
    RawCall(name, body) => Text(name + "(" + self.expand(body) + ")", false)
    Call(name, arguments) => {
      let args = if ["rgb", "rgba", "hsl", "hsla"].contains(name) &&
        self.lookup_function(name) is None {
        color_call_arguments(arguments)
      } else {
        arguments
      }
      if name == "if" &&
        args.length() == 3 &&
        args.iter().all(a => a.0 is None && !a.2) {
        let condition = self.eval_ast(args[0].1, true, depth + 1)
        self.eval_ast(
          args[if condition.truth() { 1 } else { 2 }].1,
          division,
          depth + 1,
        )
      } else {
        let positional = []
        let keywords : Map[String, SassValue] = Map([])
        let mut named = false
        for (key, expr, spread) in args {
          let expr = if ["rgb", "rgba", "hsl", "hsla"].contains(name) &&
            self.lookup_function(name) is None &&
            expr is RawCall("calc", body) {
            let computed = Some(self.evaluate(body)) catch { _ => None }
            match computed {
              Some(Number(n)) =>
                if n.unitless() {
                  Literal(Number(n))
                } else {
                  expr
                }
              _ => expr
            }
          } else {
            expr
          }
          let value = self.eval_ast(
            expr,
            division ||
            name.contains(".") ||
            self.lookup_function(name) is Some(_) ||
            global_builtin(name),
            depth + 1,
          )
          if spread {
            if key is Some(_) {
              raise Invalid("keyword cannot spread")
            }
            match value {
              Dictionary(entries) =>
                for (k, v) in entries {
                  guard k is Text(name, _) else {
                    raise Invalid("keyword map key must be string")
                  }
                  let name = identifier(name)
                  if keywords.contains(name) {
                    raise Invalid("duplicate keyword")
                  }
                  keywords[name] = v
                  named = true
                }
              _ => {
                if named {
                  raise Invalid("positional after keyword")
                }
                for item in value.items() {
                  positional.push(item)
                }
              }
            }
          } else if key is Some(name) {
            if keywords.contains(name) {
              raise Invalid("duplicate keyword")
            }
            keywords[name] = value
            named = true
          } else {
            if named {
              raise Invalid("positional after keyword")
            }
            positional.push(value)
          }
        }
        self.call_function(name, positional, keywords, depth)
      }
    }
  }
  result.check_size(Ref(16384), 0)
  result
}

///|
fn color_call_arguments(
  args : Array[(String?, Expression, Bool)],
) -> Array[(String?, Expression, Bool)] {
  if args.length() == 1 && args[0].0 is None && !args[0].2 {
    if args[0].1 is Sequence(values, " ", false) {
      let out = []
      for i in 0..<values.length() {
        if i == values.length() - 1 && values[i] is Binary("/", channel, alpha) {
          out.push((None, channel, false))
          out.push((None, alpha, false))
        } else {
          out.push((None, values[i], false))
        }
      }
      return out
    }
  }
  args
}

///|
fn Scope::lookup_function(
  self : Scope,
  name : String,
) -> Mixin? raise ParseError {
  if name.contains(".") {
    return self.qualified_callable(name, true)
  }
  match self.functions.get(name) {
    Some(value) => Some(value)
    None =>
      match self.parent {
        Some(parent) => parent.lookup_function(name)
        None => self.star_callable(name, true)
      }
  }
}

///|
fn bind_arguments(
  definition : Mixin,
  args : Array[SassValue],
  keywords : Map[String, SassValue],
) -> Scope raise ParseError {
  let frame = Scope::new(Some(definition.scope))
  for i in 0..<definition.params.length() {
    let (key, default) = definition.params[i]
    let value = if i < args.length() {
      if keywords.contains(key) {
        raise Invalid("argument supplied twice")
      }
      args[i]
    } else {
      match keywords.get(key) {
        Some(value) => {
          keywords.remove(key)
          value
        }
        None =>
          match default {
            Some(text) => frame.evaluate(text)
            None => raise Invalid("missing argument " + key)
          }
      }
    }
    frame.vars[key] = value
  }
  if !keywords.is_empty() {
    raise Invalid("unknown keyword argument")
  }
  match definition.rest {
    Some(key) =>
      frame.vars[key] = List(
        if args.length() > definition.params.length() {
          args[definition.params.length():].to_owned()
        } else {
          []
        },
        ",",
        false,
      )
    None =>
      if args.length() > definition.params.length() {
        raise Invalid("too many arguments")
      }
  }
  frame
}

///|
fn Scope::call_function(
  self : Scope,
  name : String,
  args : Array[SassValue],
  keywords : Map[String, SassValue],
  depth : Int,
) -> SassValue raise ParseError {
  if self.lookup_function(name) is Some(definition) {
    self.evaluation.calls += 1
    if self.evaluation.calls > 64 {
      raise Invalid("function recursion limit")
    }
    let frame = bind_arguments(definition, args, keywords)
    let returned = Ref(None)
    let frame = { ..frame, returned: Some(returned), }
    let emitter = Emitter::{
      output: StringBuilder(),
      size: 0,
      budget: 10000,
      pending_size: 0,
      pending: [],
      parents: [],
    }
    render(definition.body, [], frame, emitter, depth + 1, None, false, "")
    self.evaluation.calls -= 1
    match returned.val {
      Some(value) => value
      None => raise Invalid("function finished without return")
    }
  } else if builtin(self, name, args, keywords) is Some(value) {
    value
  } else {
    if name.contains(".") {
      raise Invalid("undefined namespaced function")
    }
    if !keywords.is_empty() {
      raise Invalid("plain CSS function cannot use keyword arguments")
    }
    Text(
      name +
      "(" +
      args.filter(v => !(v is Null)).map(v => v.css()).join(", ") +
      ")",
      false,
    )
  }
}
