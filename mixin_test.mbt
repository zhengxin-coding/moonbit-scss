///|
test "mixin arguments merge into surrounding declaration order" {
  assert_eq(
    @scss.compile(
      "@mixin border($color,$width:1px){border:$width solid $color}.a{display:block;@include border(red,$width:2px);margin:0}",
    ),
    ".a {\n  display: block;\n  border: 2px solid red;\n  margin: 0;\n}\n",
  )
}

///|
test "lexical mixin scope and caller content scope" {
  assert_eq(
    @scss.compile(
      "$color:red;@mixin m($color:blue){x:$color;@content}.a{$color:green;@include m{y:$color}}",
    ),
    ".a {\n  x: blue;\n  y: green;\n}\n",
  )
  assert_eq(
    @scss.compile(
      "$color:red;@mixin m{x:$color}$color:blue;.a{$color:green;@include m}",
    ),
    ".a {\n  x: blue;\n}\n",
  )
}

///|
test "content forwarding retains the original caller" {
  assert_eq(
    @scss.compile(
      "@mixin inner{.inner{@content}}@mixin outer{@include inner{@content}}.a{@include outer{x:1}}",
    ),
    ".a .inner {\n  x: 1;\n}\n",
  )
}

///|
test "interpolation in selectors properties and quoted strings" {
  assert_eq(
    @scss.compile(
      "$name:\"card\";.#{$name}{#{$name}-color:red;content:\"name=#{$name}\"}",
    ),
    ".card {\n  card-color: red;\n  content: \"name=card\";\n}\n",
  )
}

///|
test "complex selectors independent parent references and pseudo lists" {
  assert_eq(
    @scss.compile(".a, .b { & + & {x:1} :not(&) {x:2} }"),
    ".a + .a, .a + .b, .b + .a, .b + .b {\n  x: 1;\n}\n:not(.a, .b) {\n  x: 2;\n}\n",
  )
  assert_eq(
    @scss.compile(".a { [data-x=\"a,b&\"] {x:1} }"),
    ".a [data-x=\"a,b&\"] {\n  x: 1;\n}\n",
  )
}

///|
test "default global and underscore-equivalent variable names" {
  assert_eq(
    @scss.compile(
      "$main_color:null;$main-color:red !default;.a{$main_color:blue !global;x:$main-color}.b{x:$main_color}",
    ),
    ".a {\n  x: blue;\n}\n.b {\n  x: blue;\n}\n",
  )
}

///|
test "nested property groups and conditional CSS group" {
  assert_eq(
    @scss.compile(
      ".a{font:{size:12px;family:serif}@supports (display: grid){display:grid}}",
    ),
    ".a {\n  font-size: 12px;\n  font-family: serif;\n}\n@supports (display: grid) {\n.a {\n  display: grid;\n}\n}\n",
  )
}

///|
test "compile calls cannot leak definitions or global variables" {
  ignore(@scss.compile("$x:red;@mixin m{x:$x}.a{@include m}"))
  for source in [".a{x:$x}", ".a{@include m}"] {
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

///|
test "mixin recursion output growth and selector growth are bounded" {
  for
    source in [
      "@mixin m{@include m}.a{@include m}", ".a,.b,.c,.d{& + & + & + & + & {x:1}}",
      "@mixin m($a){x:$a}.a{@include m()}", "@mixin m($a,$a){x:$a}.a{@include m(1,2)}",
      "@mixin m($a...){x:$a}.a{@include m}", "@mixin m{@mixin nested{x:1}}",
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
  let block = "x:" + "a".repeat(10000) + ";"
  let source = "@mixin m{" + block + "}.a{" + "@include m;".repeat(110) + "}"
  assert_true(
    try {
      ignore(@scss.compile(source))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "default short circuit custom properties and font face bubbling" {
  assert_eq(
    @scss.compile("$x:red;$x:$missing !default;.a{x:$x}"),
    ".a {\n  x: red;\n}\n",
  )
  assert_eq(
    @scss.compile("$c:red;.a{--literal:$c;--expanded:#{$c}}"),
    ".a {\n  --literal:$c;\n  --expanded:red;\n}\n",
  )
  assert_eq(
    @scss.compile(".a{@font-face{font-family:demo}color:red}"),
    "@font-face {\n  font-family: demo;\n}\n.a {\n  color: red;\n}\n",
  )
  for source in ["@content;", "@mixin m(...){}"] {
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
