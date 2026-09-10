///|
test "nested parent selectors Cartesian expansion" {
  assert_eq(
    @scss.compile(
      ".a, .b { color: red; &:hover { color: blue; } .x { margin: 0; }}",
    ),
    ".a, .b {\n  color: red;\n}\n.a:hover, .b:hover {\n  color: blue;\n}\n.a .x, .b .x {\n  margin: 0;\n}\n",
  )
}

///|
test "variable scope" {
  assert_eq(
    @scss.compile("$c:red;.a{$c:blue;color:$c}.b{color:$c}"),
    ".a {\n  color: blue;\n}\n.b {\n  color: red;\n}\n",
  )
}

///|
test "quoted delimiters and URL colon" {
  assert_eq(
    @scss.compile("a{content:\"};\";background:url(https://example.test/a;b)}"),
    "a {\n  content: \"};\";\n  background: url(https://example.test/a;b);\n}\n",
  )
}

///|
test "comments" {
  assert_eq(
    @scss.compile("/* top */ a{/* inner */ color: red;}"),
    "a {\n  color: red;\n}\n",
  )
}

///|
test "later declarations preserve source order" {
  assert_eq(
    @scss.compile("a{x:1;b{x:2}x:3}"),
    "a {\n  x: 1;\n}\na b {\n  x: 2;\n}\na {\n  x: 3;\n}\n",
  )
}

///|
test "unsupported and invalid fail" {
  for
    s in [
      "a{color:$missing}", "a{color:red", "a{color: url(x}", "&:hover{x:1}", "@media screen {a{x:1}}",
      "/* unfinished",
    ] {
    assert_true(
      try {
        ignore(@scss.compile(s))
        false
      } catch {
        _ => true
      },
    )
  }
}

///|
test "quoted dollar stays literal" {
  assert_eq(
    @scss.compile("$c:red; a{content:\"$c\";color:$c}"),
    "a {\n  content: \"$c\";\n  color: red;\n}\n",
  )
}

///|
test "multiple parent references" {
  assert_eq(@scss.compile("a{& + &{x:1}}"), "a + a {\n  x: 1;\n}\n")
}
