///|
/// Ignore formatting whitespace, preserving token and quoted-content boundaries.
fn css_tokens(css : String) -> Array[String] {
  let chars = css.to_array()
  let result = []
  let mut i = 0
  while i < chars.length() {
    let c = chars[i]
    if [' ', '\t', '\n', '\r', '\u000c'].contains(c) {
      i += 1
      continue
    }
    let start = i
    if c == '"' || c == '\'' {
      i += 1
      while i < chars.length() {
        let x = chars[i]
        i += 1
        if x == '\\' {
          i = (i + 1).min(chars.length())
        } else if x == c {
          break
        }
      }
    } else if (c >= 'a' && c <= 'z') ||
      (c >= 'A' && c <= 'Z') ||
      (c >= '0' && c <= '9') ||
      c == '_' ||
      c == '-' ||
      c.to_int() > 127 {
      i += 1
      while i < chars.length() {
        let x = chars[i]
        if (x >= 'a' && x <= 'z') ||
          (x >= 'A' && x <= 'Z') ||
          (x >= '0' && x <= '9') ||
          x == '_' ||
          x == '-' ||
          x.to_int() > 127 {
          i += 1
        } else {
          break
        }
      }
    } else {
      i += 1
    }
    let token = String::from_array(chars[start:i])
    // Sass may omit attribute-value quotes around a simple CSS identifier.
    if (c == '"' || c == '\'') &&
      result.last() == Some("=") &&
      i - start > 2 &&
      chars[start + 1:i - 1]
      .iter()
      .all(x => (x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z') || x == '-') {
      result.push(String::from_array(chars[start + 1:i - 1]))
    } else {
      result.push(token)
    }
  }
  result
}

///|
test "module metadata and diagnostics are separate from CSS" {
  let result = @scss.compile_files(
    "main.scss",
    Map([
      ("main.scss", "@use 'a';@warn 'entry';.x{x:a.$n}"),
      ("_a.scss", "@debug 'module';$n:2;"),
    ]),
  )
  assert_eq(result.loaded_files, ["_a.scss", "main.scss"])
  assert_eq(result.diagnostics, ["debug: module", "warn: entry"])
  assert_eq(result.css, ".x {\n  x: 2;\n}\n")
}

///|
test "virtual filesystem rejects canonical duplicates and escape paths" {
  for
    files in [
      Map([("main.scss", ""), ("./main.scss", "")]),
      Map([("../main.scss", "")]),
      Map([("/main.scss", "")]),
      Map([("main.scss", "@use '../outside';")]),
    ] {
    assert_true(
      try {
        ignore(@scss.compile_files("main.scss", files))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "evaluation bounds stop loops and recursion" {
  for
    source in [
      "@while true {}", "@function f(){@return f()}.a{x:f()}", "@mixin m(){@include m}.a{@include m}",
      "@function f($x){@return f($x+$x)}.a{x:f('x')}", "@use 'sass:list';@function f($x){@return f(list.append($x,$x))}.a{x:f(1)}",
    ] {
    assert_true(
      try {
        ignore(@scss.compile(source))
        false
      } catch {
        _ => true
      },
    )
  }
}
