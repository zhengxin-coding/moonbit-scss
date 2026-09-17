// Generated only from Dart Sass 1.104.0. Regenerate with tools/generate-semantic-goldens.mjs.

///|
test "official 0 legacy selector .a / .x, .y" {
  assert_eq(
    css_tokens(@scss.compile(".a { .x, .y { color: red; padding: 1px; } }")),
    css_tokens(".a .x, .a .y {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 1 legacy selector .a / &:hover" {
  assert_eq(
    css_tokens(@scss.compile(".a { &:hover { color: red; padding: 1px; } }")),
    css_tokens(".a:hover {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 2 legacy selector .a / & + &" {
  assert_eq(
    css_tokens(@scss.compile(".a { & + & { color: red; padding: 1px; } }")),
    css_tokens(".a + .a {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 3 legacy selector .a / [dir=\"rtl\"] &" {
  assert_eq(
    css_tokens(
      @scss.compile(".a { [dir=\"rtl\"] & { color: red; padding: 1px; } }"),
    ),
    css_tokens("[dir=rtl] .a {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 4 legacy selector .a / :not(&)" {
  assert_eq(
    css_tokens(@scss.compile(".a { :not(&) { color: red; padding: 1px; } }")),
    css_tokens(":not(.a) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 5 legacy selector .a / &:not(&)" {
  assert_eq(
    css_tokens(@scss.compile(".a { &:not(&) { color: red; padding: 1px; } }")),
    css_tokens(".a:not(.a) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 6 legacy selector .a / :is(&, .fallback)" {
  assert_eq(
    css_tokens(
      @scss.compile(".a { :is(&, .fallback) { color: red; padding: 1px; } }"),
    ),
    css_tokens(":is(.a, .fallback) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 7 legacy selector .a / [data-value=\"a,b&\"]" {
  assert_eq(
    css_tokens(
      @scss.compile(
        ".a { [data-value=\"a,b&\"] { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(".a [data-value=\"a,b&\"] {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 8 legacy selector .a / :is(.x, .y)" {
  assert_eq(
    css_tokens(
      @scss.compile(".a { :is(.x, .y) { color: red; padding: 1px; } }"),
    ),
    css_tokens(".a :is(.x, .y) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 9 legacy selector .a / &--active" {
  assert_eq(
    css_tokens(@scss.compile(".a { &--active { color: red; padding: 1px; } }")),
    css_tokens(".a--active {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 10 legacy selector .a, .b / .x, .y" {
  assert_eq(
    css_tokens(@scss.compile(".a, .b { .x, .y { color: red; padding: 1px; } }")),
    css_tokens(
      ".a .x, .a .y, .b .x, .b .y {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 11 legacy selector .a, .b / &:hover" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { &:hover { color: red; padding: 1px; } }"),
    ),
    css_tokens(".a:hover, .b:hover {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 12 legacy selector .a, .b / & + &" {
  assert_eq(
    css_tokens(@scss.compile(".a, .b { & + & { color: red; padding: 1px; } }")),
    css_tokens(
      ".a + .a, .a + .b, .b + .a, .b + .b {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 13 legacy selector .a, .b / [dir=\"rtl\"] &" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { [dir=\"rtl\"] & { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      "[dir=rtl] .a, [dir=rtl] .b {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 14 legacy selector .a, .b / :not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { :not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(":not(.a, .b) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 15 legacy selector .a, .b / &:not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { &:not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      ".a:not(.a, .b), .b:not(.a, .b) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 16 legacy selector .a, .b / :is(&, .fallback)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        ".a, .b { :is(&, .fallback) { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(":is(.a, .fallback, .b) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 17 legacy selector .a, .b / [data-value=\"a,b&\"]" {
  assert_eq(
    css_tokens(
      @scss.compile(
        ".a, .b { [data-value=\"a,b&\"] { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(
      ".a [data-value=\"a,b&\"], .b [data-value=\"a,b&\"] {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 18 legacy selector .a, .b / :is(.x, .y)" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { :is(.x, .y) { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      ".a :is(.x, .y), .b :is(.x, .y) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 19 legacy selector .a, .b / &--active" {
  assert_eq(
    css_tokens(
      @scss.compile(".a, .b { &--active { color: red; padding: 1px; } }"),
    ),
    css_tokens(".a--active, .b--active {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 20 legacy selector nav > .item / .x, .y" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { .x, .y { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      "nav > .item .x, nav > .item .y {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 21 legacy selector nav > .item / &:hover" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { &:hover { color: red; padding: 1px; } }"),
    ),
    css_tokens("nav > .item:hover {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 22 legacy selector nav > .item / & + &" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { & + & { color: red; padding: 1px; } }"),
    ),
    css_tokens("nav > .item + nav > .item {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 23 legacy selector nav > .item / [dir=\"rtl\"] &" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "nav > .item { [dir=\"rtl\"] & { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens("[dir=rtl] nav > .item {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 24 legacy selector nav > .item / :not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { :not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(":not(nav > .item) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 25 legacy selector nav > .item / &:not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { &:not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      "nav > .item:not(nav > .item) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 26 legacy selector nav > .item / :is(&, .fallback)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "nav > .item { :is(&, .fallback) { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(
      ":is(nav > .item, .fallback) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 27 legacy selector nav > .item / [data-value=\"a,b&\"]" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "nav > .item { [data-value=\"a,b&\"] { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(
      "nav > .item [data-value=\"a,b&\"] {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 28 legacy selector nav > .item / :is(.x, .y)" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { :is(.x, .y) { color: red; padding: 1px; } }"),
    ),
    css_tokens("nav > .item :is(.x, .y) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 29 legacy selector nav > .item / &--active" {
  assert_eq(
    css_tokens(
      @scss.compile("nav > .item { &--active { color: red; padding: 1px; } }"),
    ),
    css_tokens("nav > .item--active {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 30 legacy selector #main .card / .x, .y" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { .x, .y { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      "#main .card .x, #main .card .y {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 31 legacy selector #main .card / &:hover" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { &:hover { color: red; padding: 1px; } }"),
    ),
    css_tokens("#main .card:hover {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 32 legacy selector #main .card / & + &" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { & + & { color: red; padding: 1px; } }"),
    ),
    css_tokens("#main .card + #main .card {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 33 legacy selector #main .card / [dir=\"rtl\"] &" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "#main .card { [dir=\"rtl\"] & { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens("[dir=rtl] #main .card {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 34 legacy selector #main .card / :not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { :not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(":not(#main .card) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 35 legacy selector #main .card / &:not(&)" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { &:not(&) { color: red; padding: 1px; } }"),
    ),
    css_tokens(
      "#main .card:not(#main .card) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 36 legacy selector #main .card / :is(&, .fallback)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "#main .card { :is(&, .fallback) { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(
      ":is(#main .card, .fallback) {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 37 legacy selector #main .card / [data-value=\"a,b&\"]" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "#main .card { [data-value=\"a,b&\"] { color: red; padding: 1px; } }",
      ),
    ),
    css_tokens(
      "#main .card [data-value=\"a,b&\"] {\n  color: red;\n  padding: 1px;\n}",
    ),
  )
}

///|
test "official 38 legacy selector #main .card / :is(.x, .y)" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { :is(.x, .y) { color: red; padding: 1px; } }"),
    ),
    css_tokens("#main .card :is(.x, .y) {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 39 legacy selector #main .card / &--active" {
  assert_eq(
    css_tokens(
      @scss.compile("#main .card { &--active { color: red; padding: 1px; } }"),
    ),
    css_tokens("#main .card--active {\n  color: red;\n  padding: 1px;\n}"),
  )
}

///|
test "official 40 legacy variable scope red" {
  assert_eq(
    css_tokens(
      @scss.compile("$value:red; .a {$value:blue; x:$value} .b{x:$value}"),
    ),
    css_tokens(".a {\n  x: blue;\n}\n\n.b {\n  x: red;\n}"),
  )
}

///|
test "official 41 legacy default variable red" {
  assert_eq(
    css_tokens(@scss.compile("$value:red; $value:blue !default; .a{x:$value}")),
    css_tokens(".a {\n  x: red;\n}"),
  )
}

///|
test "official 42 legacy null default red" {
  assert_eq(
    css_tokens(@scss.compile("$value:null; $value:red !default; .a{x:$value}")),
    css_tokens(".a {\n  x: red;\n}"),
  )
}

///|
test "official 43 legacy global write red" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:red; .a{$value:blue !global; x:$value} .b{x:$value}",
      ),
    ),
    css_tokens(".a {\n  x: blue;\n}\n\n.b {\n  x: blue;\n}"),
  )
}

///|
test "official 44 legacy lexical mixin scope red" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:red; @mixin m{x:$value} $value:blue; .a{$value:red; @include m}",
      ),
    ),
    css_tokens(".a {\n  x: blue;\n}"),
  )
}

///|
test "official 45 legacy variable scope 10px" {
  assert_eq(
    css_tokens(
      @scss.compile("$value:10px; .a {$value:20px; x:$value} .b{x:$value}"),
    ),
    css_tokens(".a {\n  x: 20px;\n}\n\n.b {\n  x: 10px;\n}"),
  )
}

///|
test "official 46 legacy default variable 10px" {
  assert_eq(
    css_tokens(@scss.compile("$value:10px; $value:20px !default; .a{x:$value}")),
    css_tokens(".a {\n  x: 10px;\n}"),
  )
}

///|
test "official 47 legacy null default 10px" {
  assert_eq(
    css_tokens(@scss.compile("$value:null; $value:10px !default; .a{x:$value}")),
    css_tokens(".a {\n  x: 10px;\n}"),
  )
}

///|
test "official 48 legacy global write 10px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:10px; .a{$value:20px !global; x:$value} .b{x:$value}",
      ),
    ),
    css_tokens(".a {\n  x: 20px;\n}\n\n.b {\n  x: 20px;\n}"),
  )
}

///|
test "official 49 legacy lexical mixin scope 10px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:10px; @mixin m{x:$value} $value:20px; .a{$value:10px; @include m}",
      ),
    ),
    css_tokens(".a {\n  x: 20px;\n}"),
  )
}

///|
test "official 50 legacy variable scope \"hello\"" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:\"hello\"; .a {$value:\"world\"; x:$value} .b{x:$value}",
      ),
    ),
    css_tokens(".a {\n  x: \"world\";\n}\n\n.b {\n  x: \"hello\";\n}"),
  )
}

///|
test "official 51 legacy default variable \"hello\"" {
  assert_eq(
    css_tokens(
      @scss.compile("$value:\"hello\"; $value:\"world\" !default; .a{x:$value}"),
    ),
    css_tokens(".a {\n  x: \"hello\";\n}"),
  )
}

///|
test "official 52 legacy null default \"hello\"" {
  assert_eq(
    css_tokens(
      @scss.compile("$value:null; $value:\"hello\" !default; .a{x:$value}"),
    ),
    css_tokens(".a {\n  x: \"hello\";\n}"),
  )
}

///|
test "official 53 legacy global write \"hello\"" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:\"hello\"; .a{$value:\"world\" !global; x:$value} .b{x:$value}",
      ),
    ),
    css_tokens(".a {\n  x: \"world\";\n}\n\n.b {\n  x: \"world\";\n}"),
  )
}

///|
test "official 54 legacy lexical mixin scope \"hello\"" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$value:\"hello\"; @mixin m{x:$value} $value:\"world\"; .a{$value:\"hello\"; @include m}",
      ),
    ),
    css_tokens(".a {\n  x: \"world\";\n}"),
  )
}

///|
test "official 55 legacy mixin positional red1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(red,1px);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 1px solid red;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 56 legacy mixin keyword red1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:1px,$color:red)}",
      ),
    ),
    css_tokens(".a {\n  border: 1px solid red;\n}"),
  )
}

///|
test "official 57 legacy mixin default red1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 1px solid red;\n}\n.a:hover, .b:hover {\n  color: red;\n}",
    ),
  )
}

///|
test "official 58 legacy mixin positional red2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(red,2rem);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 2rem solid red;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 59 legacy mixin keyword red2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:2rem,$color:red)}",
      ),
    ),
    css_tokens(".a {\n  border: 2rem solid red;\n}"),
  )
}

///|
test "official 60 legacy mixin default red2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:2rem){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 2rem solid red;\n}\n.a:hover, .b:hover {\n  color: red;\n}",
    ),
  )
}

///|
test "official 61 legacy mixin positional red0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(red,0);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 0 solid red;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 62 legacy mixin keyword red0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:0,$color:red)}",
      ),
    ),
    css_tokens(".a {\n  border: 0 solid red;\n}"),
  )
}

///|
test "official 63 legacy mixin default red0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:0){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 0 solid red;\n}\n.a:hover, .b:hover {\n  color: red;\n}",
    ),
  )
}

///|
test "official 64 legacy mixin positional blue1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(blue,1px);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 1px solid blue;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 65 legacy mixin keyword blue1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:1px,$color:blue)}",
      ),
    ),
    css_tokens(".a {\n  border: 1px solid blue;\n}"),
  )
}

///|
test "official 66 legacy mixin default blue1px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:blue,$width:1px){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 1px solid blue;\n}\n.a:hover, .b:hover {\n  color: blue;\n}",
    ),
  )
}

///|
test "official 67 legacy mixin positional blue2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(blue,2rem);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 2rem solid blue;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 68 legacy mixin keyword blue2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:2rem,$color:blue)}",
      ),
    ),
    css_tokens(".a {\n  border: 2rem solid blue;\n}"),
  )
}

///|
test "official 69 legacy mixin default blue2rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:blue,$width:2rem){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 2rem solid blue;\n}\n.a:hover, .b:hover {\n  color: blue;\n}",
    ),
  )
}

///|
test "official 70 legacy mixin positional blue0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(blue,0);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 0 solid blue;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 71 legacy mixin keyword blue0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:0,$color:blue)}",
      ),
    ),
    css_tokens(".a {\n  border: 0 solid blue;\n}"),
  )
}

///|
test "official 72 legacy mixin default blue0" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:blue,$width:0){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 0 solid blue;\n}\n.a:hover, .b:hover {\n  color: blue;\n}",
    ),
  )
}

///|
test "official 73 legacy mixin positional #1234561px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(#123456,1px);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 1px solid #123456;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 74 legacy mixin keyword #1234561px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:1px,$color:#123456)}",
      ),
    ),
    css_tokens(".a {\n  border: 1px solid #123456;\n}"),
  )
}

///|
test "official 75 legacy mixin default #1234561px" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:#123456,$width:1px){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 1px solid #123456;\n}\n.a:hover, .b:hover {\n  color: #123456;\n}",
    ),
  )
}

///|
test "official 76 legacy mixin positional #1234562rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(#123456,2rem);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 2rem solid #123456;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 77 legacy mixin keyword #1234562rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:2rem,$color:#123456)}",
      ),
    ),
    css_tokens(".a {\n  border: 2rem solid #123456;\n}"),
  )
}

///|
test "official 78 legacy mixin default #1234562rem" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:#123456,$width:2rem){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 2rem solid #123456;\n}\n.a:hover, .b:hover {\n  color: #123456;\n}",
    ),
  )
}

///|
test "official 79 legacy mixin positional #1234560" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(#123456,0);margin:0}",
      ),
    ),
    css_tokens(
      ".a {\n  display: block;\n  border: 0 solid #123456;\n  margin: 0;\n}",
    ),
  )
}

///|
test "official 80 legacy mixin keyword #1234560" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:0,$color:#123456)}",
      ),
    ),
    css_tokens(".a {\n  border: 0 solid #123456;\n}"),
  )
}

///|
test "official 81 legacy mixin default #1234560" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin border($color:#123456,$width:0){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}",
      ),
    ),
    css_tokens(
      ".a, .b {\n  border: 0 solid #123456;\n}\n.a:hover, .b:hover {\n  color: #123456;\n}",
    ),
  )
}

///|
test "official 82 legacy dependent parameter default" {
  assert_eq(
    css_tokens(
      @scss.compile("@mixin m($a,$b:$a){x:$a;y:$b}.a{@include m(red)}"),
    ),
    css_tokens(".a {\n  x: red;\n  y: red;\n}"),
  )
}

///|
test "official 83 legacy variadic arguments" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin m($a,$rest...){x:$a;box-shadow:$rest}.a{@include m(red,0 0 1px black,1px 2px blue)}",
      ),
    ),
    css_tokens(".a {\n  x: red;\n  box-shadow: 0 0 1px black, 1px 2px blue;\n}"),
  )
}

///|
test "official 84 legacy empty variadic" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($rest...){x:$rest}.a{@include m}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 85 legacy mixin identifier normalization" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin card_style($main_color:red){color:$main-color}.a{@include card-style($main-color:blue)}",
      ),
    ),
    css_tokens(".a {\n  color: blue;\n}"),
  )
}

///|
test "official 86 legacy variable identifier normalization" {
  assert_eq(
    css_tokens(@scss.compile("$main_color:red;.a{color:$main-color}")),
    css_tokens(".a {\n  color: red;\n}"),
  )
}

///|
test "official 87 legacy content body" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin wrapper{before:yes;@content;after:yes}.a{@include wrapper{color:red;&:hover{color:blue}}}",
      ),
    ),
    css_tokens(
      ".a {\n  before: yes;\n  color: red;\n}\n.a:hover {\n  color: blue;\n}\n.a {\n  after: yes;\n}",
    ),
  )
}

///|
test "official 88 legacy content caller scope" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$color:red;@mixin wrapper($color:blue){x:$color;@content}.a{$color:green;@include wrapper{y:$color}}",
      ),
    ),
    css_tokens(".a {\n  x: blue;\n  y: green;\n}"),
  )
}

///|
test "official 89 legacy content under selector" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin hover{&:hover{@content}}.a,.b{@include hover{color:red}}",
      ),
    ),
    css_tokens(".a:hover, .b:hover {\n  color: red;\n}"),
  )
}

///|
test "official 90 legacy content optional" {
  assert_eq(
    css_tokens(
      @scss.compile("@mixin wrapper{x:1;@content;y:2}.a{@include wrapper}"),
    ),
    css_tokens(".a {\n  x: 1;\n  y: 2;\n}"),
  )
}

///|
test "official 91 legacy nested content forwarding" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin inner{.inner{@content}} @mixin outer{@include inner{@content}} .a{@include outer{x:1}}",
      ),
    ),
    css_tokens(".a .inner {\n  x: 1;\n}"),
  )
}

///|
test "official 92 legacy mixin nested definition" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@mixin outer($c){@mixin inner{color:$c}@include inner}.a{@include outer(red)}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 93 legacy basic interpolation" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$name:card;$color:red;.#{$name}{#{$name}-color:$color;content:\"name=#{$name}\"}",
      ),
    ),
    css_tokens(".card {\n  card-color: red;\n  content: \"name=card\";\n}"),
  )
}

///|
test "official 94 legacy quoted interpolation" {
  assert_eq(
    css_tokens(@scss.compile("$name:\"card\";.#{$name}{content:\"#{$name}\"}")),
    css_tokens(".card {\n  content: \"card\";\n}"),
  )
}

///|
test "official 95 legacy mixin interpolation" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin item($name,$value){.#{$name}{color:$value}}@include item(card,red)",
      ),
    ),
    css_tokens(".card {\n  color: red;\n}"),
  )
}

///|
test "official 96 legacy interpolated nested parent" {
  assert_eq(
    css_tokens(@scss.compile("$state:hover;.a{&:#{$state}{color:red}}")),
    css_tokens(".a:hover {\n  color: red;\n}"),
  )
}

///|
test "official 97 legacy supports group" {
  assert_eq(
    css_tokens(@scss.compile("@supports (display: grid){.a{display:grid}}")),
    css_tokens(
      "@supports (display: grid) {\n  .a {\n    display: grid;\n  }\n}",
    ),
  )
}

///|
test "official 98 legacy supports nested" {
  assert_eq(
    css_tokens(@scss.compile(".a{@supports (display: grid){display:grid}}")),
    css_tokens(
      "@supports (display: grid) {\n  .a {\n    display: grid;\n  }\n}",
    ),
  )
}

///|
test "official 99 legacy media nested selector" {
  assert_eq(
    css_tokens(
      @scss.compile(
        ".a,.b{@media screen and (min-width: 20px){x:1;&:hover{x:2}}}",
      ),
    ),
    css_tokens(
      "@media screen and (min-width: 20px) {\n  .a, .b {\n    x: 1;\n  }\n  .a:hover, .b:hover {\n    x: 2;\n  }\n}",
    ),
  )
}

///|
test "official 100 legacy media content" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin media{@media screen{@content}}.a{@include media{x:1}}",
      ),
    ),
    css_tokens("@media screen {\n  .a {\n    x: 1;\n  }\n}"),
  )
}

///|
test "official 101 legacy layer group" {
  assert_eq(
    css_tokens(@scss.compile("@layer components {.a{x:1}}")),
    css_tokens("@layer components {\n  .a {\n    x: 1;\n  }\n}"),
  )
}

///|
test "official 102 legacy font face" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@font-face{font-family:demo;src:url(https://example.test/font.woff2)}",
      ),
    ),
    css_tokens(
      "@font-face {\n  font-family: demo;\n  src: url(https://example.test/font.woff2);\n}",
    ),
  )
}

///|
test "official 103 legacy nested properties" {
  assert_eq(
    css_tokens(
      @scss.compile(
        ".a{font:{family:serif;size:12px}border:{color:red;style:solid}}",
      ),
    ),
    css_tokens(
      ".a {\n  font-family: serif;\n  font-size: 12px;\n  border-color: red;\n  border-style: solid;\n}",
    ),
  )
}

///|
test "official 104 legacy silent comments" {
  assert_eq(
    css_tokens(
      @scss.compile("// top\n.a{// inner\ncolor:red; // tail\nmargin:0}"),
    ),
    css_tokens(".a {\n  color: red;\n  margin: 0;\n}"),
  )
}

///|
test "official 105 legacy quote commas in arguments" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@mixin m($a,$b){content:$a;background:$b}.a{@include m(\"a,b\",url(\"x,y\"))}",
      ),
    ),
    css_tokens(".a {\n  content: \"a,b\";\n  background: url(\"x,y\");\n}"),
  )
}

///|
test "official 106 legacy parent reference remains attribute data" {
  assert_eq(
    css_tokens(@scss.compile(".a{[title=\"&\"]{content:\"&\"}}")),
    css_tokens(".a [title=\"&\"] {\n  content: \"&\";\n}"),
  )
}

///|
test "official 107 legacy empty mixin does not split rule" {
  assert_eq(
    css_tokens(@scss.compile("@mixin empty{}.a{x:1;@include empty;y:2}")),
    css_tokens(".a {\n  x: 1;\n  y: 2;\n}"),
  )
}

///|
test "official 108 legacy mixin overwriting" {
  assert_eq(
    css_tokens(@scss.compile("@mixin m{x:1}@mixin m{x:2}.a{@include m}")),
    css_tokens(".a {\n  x: 2;\n}"),
  )
}

///|
test "official 109 legacy unused default does not evaluate" {
  assert_eq(
    css_tokens(@scss.compile("$x:red;$x:$missing !default;.a{x:$x}")),
    css_tokens(".a {\n  x: red;\n}"),
  )
}

///|
test "official 110 legacy custom property variable remains literal" {
  assert_eq(
    css_tokens(@scss.compile("$c:red;.a{--literal:$c;--expanded:#{$c}}")),
    css_tokens(".a {\n  --literal:$c;\n  --expanded:red;\n}"),
  )
}

///|
test "official 111 legacy font face bubbles out of selector" {
  assert_eq(
    css_tokens(
      @scss.compile(".a{@font-face{font-family:demo;src:url(x.woff)}color:red}"),
    ),
    css_tokens(
      "@font-face {\n  font-family: demo;\n  src: url(x.woff);\n}\n.a {\n  color: red;\n}",
    ),
  )
}

///|
test "official 112 legacy error content outside mixin" {
  assert_true(
    try {
      ignore(@scss.compile("@content;"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 113 legacy error unknown mixin" {
  assert_true(
    try {
      ignore(@scss.compile(".a{@include missing}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 114 legacy error missing argument" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a){x:$a}.a{@include m}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 115 legacy error too many arguments" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a){x:$a}.a{@include m(1,2)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 116 legacy error unknown keyword" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a:1){x:$a}.a{@include m($b:2)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 117 legacy error duplicate keyword" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a:1){x:$a}.a{@include m($a:2,$a:3)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 118 legacy error duplicate positional" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a){x:$a}.a{@include m(1,$a:2)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 119 legacy error duplicate parameter" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m($a,$a){x:$a}.a{@include m(1,2)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 120 legacy error invalid suffix" {
  assert_true(
    try {
      ignore(@scss.compile("[a]{&-x{x:1}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 121 legacy error invalid parent position" {
  assert_true(
    try {
      ignore(@scss.compile(".a{span&{x:1}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 122 legacy error mismatched brackets" {
  assert_true(
    try {
      ignore(@scss.compile(".a{[x=(]){x:1}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 123 legacy error unknown interpolation variable" {
  assert_true(
    try {
      ignore(@scss.compile(".#{$missing}{x:1}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 124 operator 1 + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 + 2); }")),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 125 operator 1 - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 - 2); }")),
    css_tokens(".probe {\n  value: -1;\n}"),
  )
}

///|
test "official 126 operator 1 * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 * 2); }")),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 127 operator 1 / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 / 2); }")),
    css_tokens(".probe {\n  value: 0.5;\n}"),
  )
}

///|
test "official 128 operator 1 % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 % 2); }")),
    css_tokens(".probe {\n  value: 1;\n}"),
  )
}

///|
test "official 129 operator 1 == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 130 operator 1 != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 131 operator 1 > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 > 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 132 operator 1 <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 <= 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 133 operator 1 + 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 + 1px); }")),
    css_tokens(".probe {\n  value: 2px;\n}"),
  )
}

///|
test "official 134 operator 1 - 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 - 1px); }")),
    css_tokens(".probe {\n  value: 0px;\n}"),
  )
}

///|
test "official 135 operator 1 * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 * 1px); }")),
    css_tokens(".probe {\n  value: 1px;\n}"),
  )
}

///|
test "official 136 operator 1 / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 / 1px); }")),
    css_tokens(".probe {\n  value: calc(1 / 1px);\n}"),
  )
}

///|
test "official 137 operator 1 % 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 % 1px); }")),
    css_tokens(".probe {\n  value: 0px;\n}"),
  )
}

///|
test "official 138 operator 1 == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 139 operator 1 != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 140 operator 1 > 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 > 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 141 operator 1 <= 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 <= 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 142 operator 1 + 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 + 1cm); }")),
    css_tokens(".probe {\n  value: 2cm;\n}"),
  )
}

///|
test "official 143 operator 1 - 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 - 1cm); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 144 operator 1 * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 * 1cm); }")),
    css_tokens(".probe {\n  value: 1cm;\n}"),
  )
}

///|
test "official 145 operator 1 / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 / 1cm); }")),
    css_tokens(".probe {\n  value: calc(1 / 1cm);\n}"),
  )
}

///|
test "official 146 operator 1 % 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 % 1cm); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 147 operator 1 == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 148 operator 1 != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 149 operator 1 > 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 > 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 150 operator 1 <= 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 <= 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 151 operator 1 + 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 + 500ms); }")),
    css_tokens(".probe {\n  value: 501ms;\n}"),
  )
}

///|
test "official 152 operator 1 - 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 - 500ms); }")),
    css_tokens(".probe {\n  value: -499ms;\n}"),
  )
}

///|
test "official 153 operator 1 * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 * 500ms); }")),
    css_tokens(".probe {\n  value: 500ms;\n}"),
  )
}

///|
test "official 154 operator 1 / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 / 500ms); }")),
    css_tokens(".probe {\n  value: calc(0.002 / 1ms);\n}"),
  )
}

///|
test "official 155 operator 1 % 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 % 500ms); }")),
    css_tokens(".probe {\n  value: 1ms;\n}"),
  )
}

///|
test "official 156 operator 1 == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 157 operator 1 != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 158 operator 1 > 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 > 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 159 operator 1 <= 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 <= 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 160 operator -2.5 + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 + 2); }")),
    css_tokens(".probe {\n  value: -0.5;\n}"),
  )
}

///|
test "official 161 operator -2.5 - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 - 2); }")),
    css_tokens(".probe {\n  value: -4.5;\n}"),
  )
}

///|
test "official 162 operator -2.5 * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 * 2); }")),
    css_tokens(".probe {\n  value: -5;\n}"),
  )
}

///|
test "official 163 operator -2.5 / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 / 2); }")),
    css_tokens(".probe {\n  value: -1.25;\n}"),
  )
}

///|
test "official 164 operator -2.5 % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 % 2); }")),
    css_tokens(".probe {\n  value: 1.5;\n}"),
  )
}

///|
test "official 165 operator -2.5 == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 166 operator -2.5 != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 167 operator -2.5 > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 > 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 168 operator -2.5 <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 <= 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 169 operator -2.5 + 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 + 1px); }")),
    css_tokens(".probe {\n  value: -1.5px;\n}"),
  )
}

///|
test "official 170 operator -2.5 - 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 - 1px); }")),
    css_tokens(".probe {\n  value: -3.5px;\n}"),
  )
}

///|
test "official 171 operator -2.5 * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 * 1px); }")),
    css_tokens(".probe {\n  value: -2.5px;\n}"),
  )
}

///|
test "official 172 operator -2.5 / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 / 1px); }")),
    css_tokens(".probe {\n  value: calc(-2.5 / 1px);\n}"),
  )
}

///|
test "official 173 operator -2.5 % 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 % 1px); }")),
    css_tokens(".probe {\n  value: 0.5px;\n}"),
  )
}

///|
test "official 174 operator -2.5 == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 175 operator -2.5 != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 176 operator -2.5 > 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 > 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 177 operator -2.5 <= 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 <= 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 178 operator -2.5 + 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 + 1cm); }")),
    css_tokens(".probe {\n  value: -1.5cm;\n}"),
  )
}

///|
test "official 179 operator -2.5 - 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 - 1cm); }")),
    css_tokens(".probe {\n  value: -3.5cm;\n}"),
  )
}

///|
test "official 180 operator -2.5 * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 * 1cm); }")),
    css_tokens(".probe {\n  value: -2.5cm;\n}"),
  )
}

///|
test "official 181 operator -2.5 / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 / 1cm); }")),
    css_tokens(".probe {\n  value: calc(-2.5 / 1cm);\n}"),
  )
}

///|
test "official 182 operator -2.5 % 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 % 1cm); }")),
    css_tokens(".probe {\n  value: 0.5cm;\n}"),
  )
}

///|
test "official 183 operator -2.5 == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 184 operator -2.5 != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 185 operator -2.5 > 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 > 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 186 operator -2.5 <= 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 <= 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 187 operator -2.5 + 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 + 500ms); }")),
    css_tokens(".probe {\n  value: 497.5ms;\n}"),
  )
}

///|
test "official 188 operator -2.5 - 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 - 500ms); }")),
    css_tokens(".probe {\n  value: -502.5ms;\n}"),
  )
}

///|
test "official 189 operator -2.5 * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 * 500ms); }")),
    css_tokens(".probe {\n  value: -1250ms;\n}"),
  )
}

///|
test "official 190 operator -2.5 / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 / 500ms); }")),
    css_tokens(".probe {\n  value: calc(-0.005 / 1ms);\n}"),
  )
}

///|
test "official 191 operator -2.5 % 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 % 500ms); }")),
    css_tokens(".probe {\n  value: 497.5ms;\n}"),
  )
}

///|
test "official 192 operator -2.5 == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 193 operator -2.5 != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 194 operator -2.5 > 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 > 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 195 operator -2.5 <= 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-2.5 <= 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 196 operator 0 + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 + 2); }")),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 197 operator 0 - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 - 2); }")),
    css_tokens(".probe {\n  value: -2;\n}"),
  )
}

///|
test "official 198 operator 0 * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 * 2); }")),
    css_tokens(".probe {\n  value: 0;\n}"),
  )
}

///|
test "official 199 operator 0 / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 / 2); }")),
    css_tokens(".probe {\n  value: 0;\n}"),
  )
}

///|
test "official 200 operator 0 % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 % 2); }")),
    css_tokens(".probe {\n  value: 0;\n}"),
  )
}

///|
test "official 201 operator 0 == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 202 operator 0 != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 203 operator 0 > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 > 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 204 operator 0 <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 <= 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 205 operator 0 + 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 + 1px); }")),
    css_tokens(".probe {\n  value: 1px;\n}"),
  )
}

///|
test "official 206 operator 0 - 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 - 1px); }")),
    css_tokens(".probe {\n  value: -1px;\n}"),
  )
}

///|
test "official 207 operator 0 * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 * 1px); }")),
    css_tokens(".probe {\n  value: 0px;\n}"),
  )
}

///|
test "official 208 operator 0 / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 / 1px); }")),
    css_tokens(".probe {\n  value: calc(0 / 1px);\n}"),
  )
}

///|
test "official 209 operator 0 % 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 % 1px); }")),
    css_tokens(".probe {\n  value: 0px;\n}"),
  )
}

///|
test "official 210 operator 0 == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 211 operator 0 != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 212 operator 0 > 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 > 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 213 operator 0 <= 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 <= 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 214 operator 0 + 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 + 1cm); }")),
    css_tokens(".probe {\n  value: 1cm;\n}"),
  )
}

///|
test "official 215 operator 0 - 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 - 1cm); }")),
    css_tokens(".probe {\n  value: -1cm;\n}"),
  )
}

///|
test "official 216 operator 0 * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 * 1cm); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 217 operator 0 / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 / 1cm); }")),
    css_tokens(".probe {\n  value: calc(0 / 1cm);\n}"),
  )
}

///|
test "official 218 operator 0 % 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 % 1cm); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 219 operator 0 == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 220 operator 0 != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 221 operator 0 > 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 > 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 222 operator 0 <= 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 <= 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 223 operator 0 + 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 + 500ms); }")),
    css_tokens(".probe {\n  value: 500ms;\n}"),
  )
}

///|
test "official 224 operator 0 - 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 - 500ms); }")),
    css_tokens(".probe {\n  value: -500ms;\n}"),
  )
}

///|
test "official 225 operator 0 * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 * 500ms); }")),
    css_tokens(".probe {\n  value: 0ms;\n}"),
  )
}

///|
test "official 226 operator 0 / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 / 500ms); }")),
    css_tokens(".probe {\n  value: calc(0 / 1ms);\n}"),
  )
}

///|
test "official 227 operator 0 % 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 % 500ms); }")),
    css_tokens(".probe {\n  value: 0ms;\n}"),
  )
}

///|
test "official 228 operator 0 == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 229 operator 0 != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 230 operator 0 > 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 > 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 231 operator 0 <= 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0 <= 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 232 operator 3px + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px + 2); }")),
    css_tokens(".probe {\n  value: 5px;\n}"),
  )
}

///|
test "official 233 operator 3px - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px - 2); }")),
    css_tokens(".probe {\n  value: 1px;\n}"),
  )
}

///|
test "official 234 operator 3px * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px * 2); }")),
    css_tokens(".probe {\n  value: 6px;\n}"),
  )
}

///|
test "official 235 operator 3px / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px / 2); }")),
    css_tokens(".probe {\n  value: 1.5px;\n}"),
  )
}

///|
test "official 236 operator 3px % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px % 2); }")),
    css_tokens(".probe {\n  value: 1px;\n}"),
  )
}

///|
test "official 237 operator 3px == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 238 operator 3px != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 239 operator 3px > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px > 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 240 operator 3px <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px <= 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 241 operator 3px + 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px + 1px); }")),
    css_tokens(".probe {\n  value: 4px;\n}"),
  )
}

///|
test "official 242 operator 3px - 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px - 1px); }")),
    css_tokens(".probe {\n  value: 2px;\n}"),
  )
}

///|
test "official 243 operator 3px * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px * 1px); }")),
    css_tokens(".probe {\n  value: calc(3px * 1px);\n}"),
  )
}

///|
test "official 244 operator 3px / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px / 1px); }")),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 245 operator 3px % 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px % 1px); }")),
    css_tokens(".probe {\n  value: 0px;\n}"),
  )
}

///|
test "official 246 operator 3px == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 247 operator 3px != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 248 operator 3px > 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px > 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 249 operator 3px <= 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px <= 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 250 operator 3px + 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px + 1cm); }")),
    css_tokens(".probe {\n  value: 40.7952755906px;\n}"),
  )
}

///|
test "official 251 operator 3px - 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px - 1cm); }")),
    css_tokens(".probe {\n  value: -34.7952755906px;\n}"),
  )
}

///|
test "official 252 operator 3px * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px * 1cm); }")),
    css_tokens(".probe {\n  value: calc(3px * 1cm);\n}"),
  )
}

///|
test "official 253 operator 3px / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px / 1cm); }")),
    css_tokens(".probe {\n  value: 0.079375;\n}"),
  )
}

///|
test "official 254 operator 3px % 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px % 1cm); }")),
    css_tokens(".probe {\n  value: 3px;\n}"),
  )
}

///|
test "official 255 operator 3px == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 256 operator 3px != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 257 operator 3px > 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px > 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 258 operator 3px <= 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px <= 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 259 operator 3px + 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (3px + 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 260 operator 3px - 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (3px - 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 261 operator 3px * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px * 500ms); }")),
    css_tokens(".probe {\n  value: calc(1500px * 1ms);\n}"),
  )
}

///|
test "official 262 operator 3px / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px / 500ms); }")),
    css_tokens(".probe {\n  value: calc(0.006px / 1ms);\n}"),
  )
}

///|
test "official 263 operator 3px % 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (3px % 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 264 operator 3px == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 265 operator 3px != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (3px != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 266 operator 3px > 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (3px > 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 267 operator 3px <= 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (3px <= 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 268 operator 2cm + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm + 2); }")),
    css_tokens(".probe {\n  value: 4cm;\n}"),
  )
}

///|
test "official 269 operator 2cm - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm - 2); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 270 operator 2cm * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm * 2); }")),
    css_tokens(".probe {\n  value: 4cm;\n}"),
  )
}

///|
test "official 271 operator 2cm / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm / 2); }")),
    css_tokens(".probe {\n  value: 1cm;\n}"),
  )
}

///|
test "official 272 operator 2cm % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm % 2); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 273 operator 2cm == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 274 operator 2cm != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 275 operator 2cm > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm > 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 276 operator 2cm <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm <= 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 277 operator 2cm + 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm + 1px); }")),
    css_tokens(".probe {\n  value: 2.0264583333cm;\n}"),
  )
}

///|
test "official 278 operator 2cm - 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm - 1px); }")),
    css_tokens(".probe {\n  value: 1.9735416667cm;\n}"),
  )
}

///|
test "official 279 operator 2cm * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm * 1px); }")),
    css_tokens(".probe {\n  value: calc(2cm * 1px);\n}"),
  )
}

///|
test "official 280 operator 2cm / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm / 1px); }")),
    css_tokens(".probe {\n  value: 75.5905511811;\n}"),
  )
}

///|
test "official 281 operator 2cm % 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm % 1px); }")),
    css_tokens(".probe {\n  value: 0.015625cm;\n}"),
  )
}

///|
test "official 282 operator 2cm == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 283 operator 2cm != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 284 operator 2cm > 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm > 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 285 operator 2cm <= 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm <= 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 286 operator 2cm + 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm + 1cm); }")),
    css_tokens(".probe {\n  value: 3cm;\n}"),
  )
}

///|
test "official 287 operator 2cm - 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm - 1cm); }")),
    css_tokens(".probe {\n  value: 1cm;\n}"),
  )
}

///|
test "official 288 operator 2cm * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm * 1cm); }")),
    css_tokens(".probe {\n  value: calc(2cm * 1cm);\n}"),
  )
}

///|
test "official 289 operator 2cm / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm / 1cm); }")),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 290 operator 2cm % 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm % 1cm); }")),
    css_tokens(".probe {\n  value: 0cm;\n}"),
  )
}

///|
test "official 291 operator 2cm == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 292 operator 2cm != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 293 operator 2cm > 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm > 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 294 operator 2cm <= 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm <= 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 295 operator 2cm + 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (2cm + 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 296 operator 2cm - 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (2cm - 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 297 operator 2cm * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm * 500ms); }")),
    css_tokens(".probe {\n  value: calc(1000cm * 1ms);\n}"),
  )
}

///|
test "official 298 operator 2cm / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm / 500ms); }")),
    css_tokens(".probe {\n  value: calc(0.004cm / 1ms);\n}"),
  )
}

///|
test "official 299 operator 2cm % 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (2cm % 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 300 operator 2cm == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 301 operator 2cm != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (2cm != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 302 operator 2cm > 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (2cm > 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 303 operator 2cm <= 500ms" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (2cm <= 500ms); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 304 operator 1s + 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s + 2); }")),
    css_tokens(".probe {\n  value: 3s;\n}"),
  )
}

///|
test "official 305 operator 1s - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s - 2); }")),
    css_tokens(".probe {\n  value: -1s;\n}"),
  )
}

///|
test "official 306 operator 1s * 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s * 2); }")),
    css_tokens(".probe {\n  value: 2s;\n}"),
  )
}

///|
test "official 307 operator 1s / 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s / 2); }")),
    css_tokens(".probe {\n  value: 0.5s;\n}"),
  )
}

///|
test "official 308 operator 1s % 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s % 2); }")),
    css_tokens(".probe {\n  value: 1s;\n}"),
  )
}

///|
test "official 309 operator 1s == 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s == 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 310 operator 1s != 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s != 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 311 operator 1s > 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s > 2); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 312 operator 1s <= 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s <= 2); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 313 operator 1s + 1px" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s + 1px); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 314 operator 1s - 1px" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s - 1px); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 315 operator 1s * 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s * 1px); }")),
    css_tokens(".probe {\n  value: calc(1s * 1px);\n}"),
  )
}

///|
test "official 316 operator 1s / 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s / 1px); }")),
    css_tokens(".probe {\n  value: calc(1s / 1px);\n}"),
  )
}

///|
test "official 317 operator 1s % 1px" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s % 1px); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 318 operator 1s == 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s == 1px); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 319 operator 1s != 1px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s != 1px); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 320 operator 1s > 1px" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s > 1px); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 321 operator 1s <= 1px" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s <= 1px); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 322 operator 1s + 1cm" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s + 1cm); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 323 operator 1s - 1cm" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s - 1cm); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 324 operator 1s * 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s * 1cm); }")),
    css_tokens(".probe {\n  value: calc(1s * 1cm);\n}"),
  )
}

///|
test "official 325 operator 1s / 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s / 1cm); }")),
    css_tokens(".probe {\n  value: calc(1s / 1cm);\n}"),
  )
}

///|
test "official 326 operator 1s % 1cm" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s % 1cm); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 327 operator 1s == 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s == 1cm); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 328 operator 1s != 1cm" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s != 1cm); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 329 operator 1s > 1cm" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s > 1cm); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 330 operator 1s <= 1cm" {
  assert_true(
    try {
      ignore(@scss.compile(".probe { value: (1s <= 1cm); }"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 331 operator 1s + 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s + 500ms); }")),
    css_tokens(".probe {\n  value: 1.5s;\n}"),
  )
}

///|
test "official 332 operator 1s - 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s - 500ms); }")),
    css_tokens(".probe {\n  value: 0.5s;\n}"),
  )
}

///|
test "official 333 operator 1s * 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s * 500ms); }")),
    css_tokens(".probe {\n  value: calc(500s * 1ms);\n}"),
  )
}

///|
test "official 334 operator 1s / 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s / 500ms); }")),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 335 operator 1s % 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s % 500ms); }")),
    css_tokens(".probe {\n  value: 0s;\n}"),
  )
}

///|
test "official 336 operator 1s == 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s == 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 337 operator 1s != 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s != 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 338 operator 1s > 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s > 500ms); }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 339 operator 1s <= 500ms" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1s <= 500ms); }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 340 expression 1 + 2 * 3" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1 + 2 * 3; }")),
    css_tokens(".probe {\n  value: 7;\n}"),
  )
}

///|
test "official 341 expression (1 + 2) * 3" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1 + 2) * 3; }")),
    css_tokens(".probe {\n  value: 9;\n}"),
  )
}

///|
test "official 342 expression 12/3" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 12/3; }")),
    css_tokens(".probe {\n  value: 12/3;\n}"),
  )
}

///|
test "official 343 expression (12/3)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (12/3); }")),
    css_tokens(".probe {\n  value: 4;\n}"),
  )
}

///|
test "official 344 expression 12px/3px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 12px/3px; }")),
    css_tokens(".probe {\n  value: 12px/3px;\n}"),
  )
}

///|
test "official 345 expression true or $missing" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: true or $missing; }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 346 expression false and $missing" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: false and $missing; }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 347 expression not null" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: not null; }")),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 348 expression not 0" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: not 0; }")),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 349 expression true and 12px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: true and 12px; }")),
    css_tokens(".probe {\n  value: 12px;\n}"),
  )
}

///|
test "official 350 expression null or hello" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: null or hello; }")),
    css_tokens(".probe {\n  value: hello;\n}"),
  )
}

///|
test "official 351 expression if(true, 2px, $missing)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: if(true, 2px, $missing); }")),
    css_tokens(".probe {\n  value: 2px;\n}"),
  )
}

///|
test "official 352 expression if(false, $missing, 3px)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: if(false, $missing, 3px); }")),
    css_tokens(".probe {\n  value: 3px;\n}"),
  )
}

///|
test "official 353 expression \"a\" + \"b\"" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: \"a\" + \"b\"; }")),
    css_tokens(".probe {\n  value: \"ab\";\n}"),
  )
}

///|
test "official 354 expression a + \"b\"" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: a + \"b\"; }")),
    css_tokens(".probe {\n  value: ab;\n}"),
  )
}

///|
test "official 355 expression \"a\" + 3" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: \"a\" + 3; }")),
    css_tokens(".probe {\n  value: \"a3\";\n}"),
  )
}

///|
test "official 356 expression #{1 + 2} + 4" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: #{1 + 2} + 4; }")),
    css_tokens(".probe {\n  value: 34;\n}"),
  )
}

///|
test "official 357 expression 1 -2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1 -2; }")),
    css_tokens(".probe {\n  value: 1 -2;\n}"),
  )
}

///|
test "official 358 expression 1 - 2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1 - 2; }")),
    css_tokens(".probe {\n  value: -1;\n}"),
  )
}

///|
test "official 359 expression 1+2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1+2; }")),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 360 expression 1 +2" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1 +2; }")),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 361 expression (1/0)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (1/0); }")),
    css_tokens(".probe {\n  value: calc(infinity);\n}"),
  )
}

///|
test "official 362 expression (-1/0)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (-1/0); }")),
    css_tokens(".probe {\n  value: calc(-infinity);\n}"),
  )
}

///|
test "official 363 expression (0/0)" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: (0/0); }")),
    css_tokens(".probe {\n  value: calc(NaN);\n}"),
  )
}

///|
test "official 364 expression 1in + 96px" {
  assert_eq(
    css_tokens(@scss.compile(".probe { value: 1in + 96px; }")),
    css_tokens(".probe {\n  value: 2in;\n}"),
  )
}

///|
test "official 365 math math.div(1in,96px)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.div(1in,96px); }"),
    ),
    css_tokens(".probe {\n  value: 1;\n}"),
  )
}

///|
test "official 366 math math.div(1,3)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.div(1,3); }"),
    ),
    css_tokens(".probe {\n  value: 0.3333333333;\n}"),
  )
}

///|
test "official 367 math math.pow(2,8)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.pow(2,8); }"),
    ),
    css_tokens(".probe {\n  value: 256;\n}"),
  )
}

///|
test "official 368 math math.sqrt(9)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.sqrt(9); }"),
    ),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 369 math math.abs(-2px)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.abs(-2px); }"),
    ),
    css_tokens(".probe {\n  value: 2px;\n}"),
  )
}

///|
test "official 370 math math.round(-1.5)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.round(-1.5); }"),
    ),
    css_tokens(".probe {\n  value: -2;\n}"),
  )
}

///|
test "official 371 math math.ceil(1.2px)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.ceil(1.2px); }"),
    ),
    css_tokens(".probe {\n  value: 2px;\n}"),
  )
}

///|
test "official 372 math math.floor(-1.2px)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.floor(-1.2px); }"),
    ),
    css_tokens(".probe {\n  value: -2px;\n}"),
  )
}

///|
test "official 373 math math.percentage(.25)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:math\";.probe { value: math.percentage(.25); }",
      ),
    ),
    css_tokens(".probe {\n  value: 25%;\n}"),
  )
}

///|
test "official 374 math math.unit(1px * 1s)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.unit(1px * 1s); }"),
    ),
    css_tokens(".probe {\n  value: \"px*s\";\n}"),
  )
}

///|
test "official 375 math math.is-unitless(1px / 1px)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:math\";.probe { value: math.is-unitless(1px / 1px); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 376 math math.compatible(1in,2cm)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:math\";.probe { value: math.compatible(1in,2cm); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 377 math math.min(2cm, 1in)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.min(2cm, 1in); }"),
    ),
    css_tokens(".probe {\n  value: 2cm;\n}"),
  )
}

///|
test "official 378 math math.max(2cm, 1in)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.max(2cm, 1in); }"),
    ),
    css_tokens(".probe {\n  value: 1in;\n}"),
  )
}

///|
test "official 379 math math.div($number2: 4, $number1: 12)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:math\";.probe { value: math.div($number2: 4, $number1: 12); }",
      ),
    ),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 380 math math.div(1px,1s)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:math\";.probe { value: math.div(1px,1s); }"),
    ),
    css_tokens(".probe {\n  value: calc(1px / 1s);\n}"),
  )
}

///|
test "official 381 math math.sqrt(1px)" {
  assert_true(
    try {
      ignore(
        @scss.compile("@use \"sass:math\";.probe { value: math.sqrt(1px); }"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 382 list list.length(1 2 3)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:list\";.probe { value: list.length(1 2 3); }"),
    ),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 383 list list.nth((a,b,c), -1)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.nth((a,b,c), -1); }",
      ),
    ),
    css_tokens(".probe {\n  value: c;\n}"),
  )
}

///|
test "official 384 list list.set-nth((a,b,c),2,x)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.set-nth((a,b,c),2,x); }",
      ),
    ),
    css_tokens(".probe {\n  value: a, x, c;\n}"),
  )
}

///|
test "official 385 list list.index(1in 96px 3px,96px)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.index(1in 96px 3px,96px); }",
      ),
    ),
    css_tokens(".probe {\n  value: 1;\n}"),
  )
}

///|
test "official 386 list list.append(1 2,3)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:list\";.probe { value: list.append(1 2,3); }"),
    ),
    css_tokens(".probe {\n  value: 1 2 3;\n}"),
  )
}

///|
test "official 387 list list.append([1,2],3)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.append([1,2],3); }",
      ),
    ),
    css_tokens(".probe {\n  value: [1, 2, 3];\n}"),
  )
}

///|
test "official 388 list list.append((1,2),3,space)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.append((1,2),3,space); }",
      ),
    ),
    css_tokens(".probe {\n  value: 1 2 3;\n}"),
  )
}

///|
test "official 389 list list.join((1,2),3 4)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.join((1,2),3 4); }",
      ),
    ),
    css_tokens(".probe {\n  value: 1, 2, 3, 4;\n}"),
  )
}

///|
test "official 390 list list.join(1 2,(3,4),comma,true)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.join(1 2,(3,4),comma,true); }",
      ),
    ),
    css_tokens(".probe {\n  value: [1, 2, 3, 4];\n}"),
  )
}

///|
test "official 391 list list.separator((a,b))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.separator((a,b)); }",
      ),
    ),
    css_tokens(".probe {\n  value: comma;\n}"),
  )
}

///|
test "official 392 list list.is-bracketed([a b])" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.is-bracketed([a b]); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 393 list list.slash(1,2,3)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:list\";.probe { value: list.slash(1,2,3); }"),
    ),
    css_tokens(".probe {\n  value: 1 / 2 / 3;\n}"),
  )
}

///|
test "official 394 list list.nth((1,2),0)" {
  assert_true(
    try {
      ignore(
        @scss.compile("@use \"sass:list\";.probe { value: list.nth((1,2),0); }"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 395 list list.nth((1,2),3)" {
  assert_true(
    try {
      ignore(
        @scss.compile("@use \"sass:list\";.probe { value: list.nth((1,2),3); }"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 396 list list.nth((),1)" {
  assert_true(
    try {
      ignore(
        @scss.compile("@use \"sass:list\";.probe { value: list.nth((),1); }"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 397 map map.get((a:1,b:2), b)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:map\";.probe { value: map.get((a:1,b:2), b); }",
      ),
    ),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 398 map map.has-key((a:null),a)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:map\";.probe { value: map.has-key((a:null),a); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 399 map map.get((a:1),x)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:map\";.probe { value: map.get((a:1),x); }"),
    ),
    css_tokens(""),
  )
}

///|
test "official 400 map map.keys((a:1,b:2))" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:map\";.probe { value: map.keys((a:1,b:2)); }"),
    ),
    css_tokens(".probe {\n  value: a, b;\n}"),
  )
}

///|
test "official 401 map map.values((a:1,b:2))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:map\";.probe { value: map.values((a:1,b:2)); }",
      ),
    ),
    css_tokens(".probe {\n  value: 1, 2;\n}"),
  )
}

///|
test "official 402 map map.keys(map.merge((a:1,b:2),(b:3,c:4)))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:map\";.probe { value: map.keys(map.merge((a:1,b:2),(b:3,c:4))); }",
      ),
    ),
    css_tokens(".probe {\n  value: a, b, c;\n}"),
  )
}

///|
test "official 403 map map.values(map.remove((a:1,b:2,c:3),a,c))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:map\";.probe { value: map.values(map.remove((a:1,b:2,c:3),a,c)); }",
      ),
    ),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 404 map map.get((a:(b:2)),a)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:map\";.probe { value: map.get((a:(b:2)),a); }",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 405 map map.get((a:1,a:2),a)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:map\";.probe { value: map.get((a:1,a:2),a); }",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 406 string string.quote(abc)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:string\";.probe { value: string.quote(abc); }"),
    ),
    css_tokens(".probe {\n  value: \"abc\";\n}"),
  )
}

///|
test "official 407 string string.unquote(\"abc\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.unquote(\"abc\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: abc;\n}"),
  )
}

///|
test "official 408 string string.length(\"a😀中\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.length(\"a😀中\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: 3;\n}"),
  )
}

///|
test "official 409 string string.slice(\"abcdef\",2,-2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.slice(\"abcdef\",2,-2); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"bcde\";\n}"),
  )
}

///|
test "official 410 string string.slice(\"abc\",5)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.slice(\"abc\",5); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"\";\n}"),
  )
}

///|
test "official 411 string string.slice(\"abc\",-10,2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.slice(\"abc\",-10,2); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"ab\";\n}"),
  )
}

///|
test "official 412 string string.index(\"a😀b😀\",\"😀\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.index(\"a😀b😀\",\"😀\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: 2;\n}"),
  )
}

///|
test "official 413 string string.index(\"abc\",\"\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.index(\"abc\",\"\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: 1;\n}"),
  )
}

///|
test "official 414 string string.insert(\"abcd\",\"X\",-1)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.insert(\"abcd\",\"X\",-1); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"abcdX\";\n}"),
  )
}

///|
test "official 415 string string.insert(\"abcd\",\"X\",0)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.insert(\"abcd\",\"X\",0); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"Xabcd\";\n}"),
  )
}

///|
test "official 416 string string.to-upper-case(\"aZ中\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.to-upper-case(\"aZ中\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"AZ中\";\n}"),
  )
}

///|
test "official 417 string string.to-lower-case(\"AZ中\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:string\";.probe { value: string.to-lower-case(\"AZ中\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: \"az中\";\n}"),
  )
}

///|
test "official 418 meta meta.type-of(1px)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of(1px); }",
      ),
    ),
    css_tokens(".probe {\n  value: number;\n}"),
  )
}

///|
test "official 419 meta meta.type-of(\"hello\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of(\"hello\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: string;\n}"),
  )
}

///|
test "official 420 meta meta.type-of(false)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of(false); }",
      ),
    ),
    css_tokens(".probe {\n  value: bool;\n}"),
  )
}

///|
test "official 421 meta meta.type-of(null)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of(null); }",
      ),
    ),
    css_tokens(".probe {\n  value: null;\n}"),
  )
}

///|
test "official 422 meta meta.type-of(())" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of(()); }",
      ),
    ),
    css_tokens(".probe {\n  value: list;\n}"),
  )
}

///|
test "official 423 meta meta.type-of((a:1))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.type-of((a:1)); }",
      ),
    ),
    css_tokens(".probe {\n  value: map;\n}"),
  )
}

///|
test "official 424 meta meta.inspect((a: 1, b: (2,3)))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.inspect((a: 1, b: (2,3))); }",
      ),
    ),
    css_tokens(".probe {\n  value: (a: 1, b: (2, 3));\n}"),
  )
}

///|
test "official 425 meta meta.variable-exists(\"x\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.variable-exists(\"x\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 426 meta meta.global-variable-exists(\"x\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";$x:1;.probe { value: meta.global-variable-exists(\"x\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 427 function optional keyword and lexical scope" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$x:2;@function f($a,$b:$a*2){@return $a+$b+$x}.a{$x:100;x:f(3);y:f($b:7,$a:2)}",
      ),
    ),
    css_tokens(".a {\n  x: 11;\n  y: 11;\n}"),
  )
}

///|
test "official 428 recursive factorial" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function fac($n){@if $n<=1{@return 1}@return $n*fac($n - 1)}.a{x:fac(6)}",
      ),
    ),
    css_tokens(".a {\n  x: 720;\n}"),
  )
}

///|
test "official 429 recursive fibonacci" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function fib($n){@if $n<2{@return $n}@return fib($n - 1)+fib($n - 2)}.a{x:fib(8)}",
      ),
    ),
    css_tokens(".a {\n  x: 21;\n}"),
  )
}

///|
test "official 430 function variadic loop sum" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function sum($xs...){$total:0;@each $x in $xs{$total:$total+$x}@return $total}.a{x:sum(1px,2px,3px)}",
      ),
    ),
    css_tokens(".a {\n  x: 6px;\n}"),
  )
}

///|
test "official 431 function positional spread" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function f($a,$b,$c:4){@return $a+$b+$c}$v:1,2;.a{x:f($v...)}",
      ),
    ),
    css_tokens(".a {\n  x: 7;\n}"),
  )
}

///|
test "official 432 function keyword spread" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function f($a,$b){@return $a+$b}$v:(\"b\":2,\"a\":3);.a{x:f($v...)}",
      ),
    ),
    css_tokens(".a {\n  x: 5;\n}"),
  )
}

///|
test "official 433 function side effect" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$global:0;@function f(){$global:3 !global;@return 7}.a{x:f();y:$global}",
      ),
    ),
    css_tokens(".a {\n  x: 7;\n  y: 3;\n}"),
  )
}

///|
test "official 434 function early return in for" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@function f(){@for $i from 1 through 10{@if $i==3{@return $i}}@return 0}.a{x:f()}",
      ),
    ),
    css_tokens(".a {\n  x: 3;\n}"),
  )
}

///|
test "official 435 loop variable scope" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$i:99;@for $i from 1 through 3{.item-#{$i}{x:$i*2}}.after{x:$i}",
      ),
    ),
    css_tokens(
      ".item-1 {\n  x: 2;\n}\n\n.item-2 {\n  x: 4;\n}\n\n.item-3 {\n  x: 6;\n}\n\n.after {\n  x: 99;\n}",
    ),
  )
}

///|
test "official 436 descending exclusive for" {
  assert_eq(
    css_tokens(@scss.compile("@for $i from 3 to 0{.n-#{$i}{x:$i}}")),
    css_tokens(".n-3 {\n  x: 3;\n}\n\n.n-2 {\n  x: 2;\n}\n\n.n-1 {\n  x: 1;\n}"),
  )
}

///|
test "official 437 for no iterations" {
  assert_eq(
    css_tokens(@scss.compile("@for $i from 1 to 1{.a{x:1}}")),
    css_tokens(""),
  )
}

///|
test "official 438 while outer assignment" {
  assert_eq(
    css_tokens(
      @scss.compile("$i:3;@while $i>0{.item-#{$i}{x:$i}$i:$i - 1}.a{x:$i}"),
    ),
    css_tokens(
      ".item-3 {\n  x: 3;\n}\n\n.item-2 {\n  x: 2;\n}\n\n.item-1 {\n  x: 1;\n}\n\n.a {\n  x: 0;\n}",
    ),
  )
}

///|
test "official 439 each destructuring" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@each $name,$size in (small,1px),(large,2px){.#{$name}{x:$size}}",
      ),
    ),
    css_tokens(".small {\n  x: 1px;\n}\n\n.large {\n  x: 2px;\n}"),
  )
}

///|
test "official 440 each map iteration" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$sizes:(small:1px,large:2px);@each $name,$size in $sizes{.#{$name}{x:$size}}",
      ),
    ),
    css_tokens(".small {\n  x: 1px;\n}\n\n.large {\n  x: 2px;\n}"),
  )
}

///|
test "official 441 flow local does not leak" {
  assert_true(
    try {
      ignore(@scss.compile("@if true{$new:2}.a{x:$new}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 442 flow existing assignment" {
  assert_eq(
    css_tokens(@scss.compile("$a:1;@if true{$a:2}.a{x:$a}")),
    css_tokens(".a {\n  x: 2;\n}"),
  )
}

///|
test "official 443 conditional chains" {
  assert_eq(
    css_tokens(
      @scss.compile("@if false{.a{x:1}}@else if 0{.b{x:2}}@else{.c{x:3}}"),
    ),
    css_tokens(".b {\n  x: 2;\n}"),
  )
}

///|
test "official 444 conditional branch lazy" {
  assert_eq(
    css_tokens(@scss.compile("@if true{.a{x:1}}@else if $missing{.b{x:2}}")),
    css_tokens(".a {\n  x: 1;\n}"),
  )
}

///|
test "official 445 standard module alias" {
  assert_eq(
    css_tokens(@scss.compile("@use \"sass:math\" as m;.a{x:m.div(6,2)}")),
    css_tokens(".a {\n  x: 3;\n}"),
  )
}

///|
test "official 446 interpolation nested call" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "$n:2;.n-#{if($n>1,\"yes\",\"no\")}{x:#{$n*3};content:\"sum=#{1+2}\"}",
      ),
    ),
    css_tokens(".n-yes {\n  x: 6;\n  content: \"sum=3\";\n}"),
  )
}

///|
test "official 447 error no return" {
  assert_true(
    try {
      ignore(@scss.compile("@function f($a){$x:1}.a{x:f(1)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 448 error bad return" {
  assert_true(
    try {
      ignore(@scss.compile("@return 1;"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 449 error CSS in function" {
  assert_true(
    try {
      ignore(@scss.compile("@function f(){.a{x:1}@return 1}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 450 error unknown keyword" {
  assert_true(
    try {
      ignore(@scss.compile("@function f($x){@return $x}.a{x:f($z:1)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 451 error duplicate positional" {
  assert_true(
    try {
      ignore(@scss.compile("@function f($x){@return $x}.a{x:f(1,$x:2)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 452 error duplicate parameter" {
  assert_true(
    try {
      ignore(@scss.compile("@function f($x,$x){@return 1}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 453 error orphan else" {
  assert_true(
    try {
      ignore(@scss.compile("@else{.a{x:1}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 454 error bad bound" {
  assert_true(
    try {
      ignore(@scss.compile("@for $i from 1.5 through 3{.a{x:$i}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 455 error module absent" {
  assert_true(
    try {
      ignore(@scss.compile(".a{x:math.div(2,1)}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 456 error duplicate module" {
  assert_true(
    try {
      ignore(@scss.compile("@use \"sass:math\";@use \"sass:math\";"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 457 binding list.separator(list.slash(1,2))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.separator(list.slash(1,2)); }",
      ),
    ),
    css_tokens(".probe {\n  value: slash;\n}"),
  )
}

///|
test "official 458 binding list.separator((a:1))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:list\";.probe { value: list.separator((a:1)); }",
      ),
    ),
    css_tokens(".probe {\n  value: comma;\n}"),
  )
}

///|
test "official 459 binding list.append($list:1,$separator:comma)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:list\";.probe { value: list.append($list:1,$separator:comma); }",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 460 binding list.join($list1:1,$bracketed:true)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:list\";.probe { value: list.join($list1:1,$bracketed:true); }",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 461 binding list.append(1,null)" {
  assert_eq(
    css_tokens(
      @scss.compile("@use \"sass:list\";.probe { value: list.append(1,null); }"),
    ),
    css_tokens(".probe {\n  value: 1;\n}"),
  )
}

///|
test "official 462 binding list.nth($n:1)" {
  assert_true(
    try {
      ignore(
        @scss.compile("@use \"sass:list\";.probe { value: list.nth($n:1); }"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 463 existence meta.function-exists(\"abs\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";.probe { value: meta.function-exists(\"abs\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: true;\n}"),
  )
}

///|
test "official 464 existence meta.function-exists(\"missing\")" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:meta\";.probe { value: meta.function-exists(\"missing\"); }",
      ),
    ),
    css_tokens(".probe {\n  value: false;\n}"),
  )
}

///|
test "official 465 quoted close brace interpolation" {
  assert_true(
    try {
      ignore(
        @scss.compile(".#{if(true,\"}\",a)} {content: \"value #{1 + 2}\"}"),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 466 nested interpolation selector" {
  assert_eq(
    css_tokens(@scss.compile("$n:2;.x-#{\"a#{$n}\"}{x:1}")),
    css_tokens(".x-a2 {\n  x: 1;\n}"),
  )
}

///|
test "official 467 static return in false branch" {
  assert_true(
    try {
      ignore(@scss.compile("@if false{@return 1}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 468 static nested function in unused mixin" {
  assert_true(
    try {
      ignore(@scss.compile("@mixin m(){@function f(){@return 1}}"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 469 namespace-variable-function-mixin" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\";.a{x:tokens.$size;y:tokens.twice();@include tokens.card(9px)}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n  width: 9px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 470 alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" as t;.a{x:t.$size;y:t.twice();@include t.card}",
          ),
          (
            "tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n  width: 4px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 471 star" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" as *;.a{x:$size;y:twice();@include card}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n  width: 4px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 472 module-lexical-scope" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "$size:99px;@use \"tokens\";.a{y:tokens.twice()}"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  y: 8px;\n}"),
  )
}

///|
test "official 473 module-cannot-see-caller" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "$size:99px;@use \"tokens\";"),
            ("_tokens.scss", ".x{v:$size}"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 474 nested-relative" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"styles/theme\";.a{x:theme.$n}"),
          ("styles/_theme.scss", "@use \"../common\";$n:common.$n * 2;"),
          ("_common.scss", "$n:3px;.base{x:1}"),
        ]),
      ).css,
    ),
    css_tokens(".base {\n  x: 1;\n}\n\n.a {\n  x: 6px;\n}"),
  )
}

///|
test "official 475 index" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"theme\";.a{x:theme.$n}"),
          ("theme/_index.scss", "$n:6"),
        ]),
      ).css,
    ),
    css_tokens(".a {\n  x: 6;\n}"),
  )
}

///|
test "official 476 index-explicit" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"theme/index\";.a{x:index.$n}"),
          ("theme/_index.scss", "$n:6"),
        ]),
      ).css,
    ),
    css_tokens(".a {\n  x: 6;\n}"),
  )
}

///|
test "official 477 normalization" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"./theme/../tokens.scss\";.a{x:tokens.$size}"),
          (
            "tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 478 underscore-url" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"_tokens\";.a{x:tokens.$size}"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 479 extension-alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"tokens.scss\" as t;.a{x:t.$size}"),
          (
            "tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 480 configure" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" with ($size:7px,$color:blue);.a{y:tokens.twice();@include tokens.card}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 7px;\n}\n\n.a {\n  y: 14px;\n  width: 7px;\n  color: blue;\n}",
    ),
  )
}

///|
test "official 481 configure-expression" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "$base:2;@use \"tokens\" with ($size:$base * 3px);.a{x:tokens.$size}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 6px;\n}\n\n.a {\n  x: 6px;\n}"),
  )
}

///|
test "official 482 configure-null" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"tokens\" with ($size:null);.a{x:tokens.$size}"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 483 configure-missing" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\" with ($missing:2);"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 484 configure-nondefault" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\" with ($n:2);"),
            ("_tokens.scss", "$n:1"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 485 configure-private" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\" with ($_secret:2);"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 486 configure-twice" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            (
              "main.scss", "@use \"tokens\" as a with ($size:2px);@use \"tokens\" as b with ($size:3px);",
            ),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 487 duplicate-load-alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" as a;@use \"./_tokens.scss\" as b;.x{a:a.$size;b:b.$size}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.x {\n  a: 4px;\n  b: 4px;\n}"),
  )
}

///|
test "official 488 diamond-load-once" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";@use \"b\";.x{a:a.$n;b:b.$n}"),
          ("a.scss", "@use \"shared\";$n:shared.$n;.a{x:1}"),
          ("b.scss", "@use \"shared\";$n:shared.$n;.b{x:1}"),
          ("_shared.scss", "$n:7;.shared{x:1}"),
        ]),
      ).css,
    ),
    css_tokens(
      ".shared {\n  x: 1;\n}\n\n.a {\n  x: 1;\n}\n\n.b {\n  x: 1;\n}\n\n.x {\n  a: 7;\n  b: 7;\n}",
    ),
  )
}

///|
test "official 489 mutation-shared" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" as a;@use \"tokens\" as b;a.$size:10px;.x{x:b.$size;y:b.twice()}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.x {\n  x: 10px;\n  y: 20px;\n}"),
  )
}

///|
test "official 490 mutation-nested" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" as a;.x{a.$size:10px;y:a.twice()}.y{x:a.$size}",
          ),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.x {\n  y: 20px;\n}\n\n.y {\n  x: 10px;\n}",
    ),
  )
}

///|
test "official 491 mutation-star" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"tokens\" as *;$size:12px;.x{x:twice()}"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.x {\n  x: 24px;\n}"),
  )
}

///|
test "official 492 private-variable" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\";.a{x:tokens.$_secret}"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 493 private-function" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"lib\";.a{x:lib.-f()}"),
            ("lib.scss", "@function -f(){@return 1}"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 494 private-mixin" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"lib\";.a{@include lib._m}"),
            ("lib.scss", "@mixin _m(){x:1}"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 495 undefined-variable" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\";.a{x:tokens.$missing}"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 496 undefined-namespace" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", ".a{x:missing.$n}")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 497 undefined-mixin" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\";.a{@include tokens.missing}"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 498 undefined-function" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\";.a{x:tokens.missing()}"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 499 undefined-mutation" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"tokens\";tokens.$missing:2;"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 500 std-constants" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"sass:math\";.a{pi:math.$pi;e:math.$e;eps:math.$epsilon;max:math.$max-safe-integer}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".a {\n  pi: 3.1415926536;\n  e: 2.7182818285;\n  eps: 0;\n  max: 9007199254740991;\n}",
    ),
  )
}

///|
test "official 501 std-constant-alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([("main.scss", "@use \"sass:math\" as m;.a{x:m.$pi}")]),
      ).css,
    ),
    css_tokens(".a {\n  x: 3.1415926536;\n}"),
  )
}

///|
test "official 502 std-readonly" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", "@use \"sass:math\";math.$pi:3;")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 503 same-namespace" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";@use \"dir/a\";"),
            ("a.scss", ""),
            ("dir/a.scss", ""),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 504 std-namespace-collision" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"sass:math\";@use \"math\";"),
            ("math.scss", ""),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 505 use-after-css" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", ".x{x:1}@use \"a\";"), ("a.scss", "")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 506 use-after-function" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@function f(){@return 1}@use \"a\";"),
            ("a.scss", ""),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 507 nested-use" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", ".x{@use \"a\";}"), ("a.scss", "")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 508 missing-file" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", "@use \"missing\";")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 509 ambiguous-partial" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";"),
            ("a.scss", "$n:1"),
            ("_a.scss", "$n:2"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 510 ambiguous-index" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";"),
            ("a/index.scss", "$n:1"),
            ("a/_index.scss", "$n:2"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 511 file-before-index" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:a.$n}"),
          ("a.scss", "$n:1"),
          ("a/_index.scss", "$n:2"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 1;\n}"),
  )
}

///|
test "official 512 direct-cycle" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", "@use \"a\";"), ("a.scss", "@use \"a\";")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 513 indirect-cycle" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";"),
            ("a.scss", "@use \"b\";"),
            ("b.scss", "@use \"a\";"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 514 forward-all" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"api\";.a{x:api.$size;y:api.twice();@include api.card}",
          ),
          ("api.scss", "@forward \"tokens\";"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n  width: 4px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 515 forward-not-visible-locally" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";"),
            ("api.scss", "@forward \"tokens\";.a{x:$size}"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 516 forward-plus-use" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$n}"),
          ("api.scss", "@forward \"tokens\";@use \"tokens\";$n:tokens.$size;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 517 forward-prefix" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"api\";.a{x:api.$ui-size;y:api.ui-twice();@include api.ui-card}",
          ),
          ("api.scss", "@forward \"tokens\" as ui-*;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n  width: 4px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 518 forward-show" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size;y:api.twice()}"),
          ("api.scss", "@forward \"tokens\" show $size, twice;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  y: 8px;\n}"),
  )
}

///|
test "official 519 forward-show-excluded" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";.a{@include api.card}"),
            ("api.scss", "@forward \"tokens\" show $size, twice;"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 520 forward-hide" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size;@include api.card}"),
          ("api.scss", "@forward \"tokens\" hide $color, twice;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      ".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n  width: 4px;\n  color: red;\n}",
    ),
  )
}

///|
test "official 521 forward-hide-excluded" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";.a{x:api.twice()}"),
            ("api.scss", "@forward \"tokens\" hide $color, twice;"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 522 forward-prefix-show-original" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";.a{x:api.$ui-size}"),
            ("api.scss", "@forward \"tokens\" as ui-* show $size;"),
            (
              "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
            ),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 523 forward-prefix-show-prefixed" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$ui-size}"),
          ("api.scss", "@forward \"tokens\" as ui-* show $ui-size;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 524 forward-mutation" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"api\";@use \"tokens\";api.$size:20px;.a{x:tokens.$size;y:api.twice()}",
          ),
          ("api.scss", "@forward \"tokens\";"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 20px;\n  y: 40px;\n}"),
  )
}

///|
test "official 525 forward-chain" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size}"),
          ("api.scss", "@forward \"middle\";"),
          ("middle.scss", "@forward \"tokens\";"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 526 forward-duplicate-same-origin" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size}"),
          ("api.scss", "@forward \"tokens\";@forward \"middle\";"),
          ("middle.scss", "@forward \"tokens\";"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 4px;\n}\n\n.a {\n  x: 4px;\n}"),
  )
}

///|
test "official 527 forward-conflict-variable" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";"),
            ("api.scss", "@forward \"a\";@forward \"b\";"),
            ("a.scss", "$n:1"),
            ("b.scss", "$n:2"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 528 forward-conflict-function" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"api\";"),
            ("api.scss", "@forward \"a\";@forward \"b\";"),
            ("a.scss", "@function f(){@return 1}"),
            ("b.scss", "@function f(){@return 2}"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 529 forward-explicit-config" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size}"),
          ("api.scss", "@forward \"tokens\" with ($size:5px);"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 5px;\n}\n\n.a {\n  x: 5px;\n}"),
  )
}

///|
test "official 530 forward-incoming-config" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\" with ($size:5px);.a{x:api.$size}"),
          ("api.scss", "@forward \"tokens\";"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 5px;\n}\n\n.a {\n  x: 5px;\n}"),
  )
}

///|
test "official 531 forward-prefix-config" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\" with ($ui-size:5px);.a{x:api.$ui-size}"),
          ("api.scss", "@forward \"tokens\" as ui-*;"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 5px;\n}\n\n.a {\n  x: 5px;\n}"),
  )
}

///|
test "official 532 forward-default-config" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\" with ($size:5px);.a{x:api.$size}"),
          ("api.scss", "@forward \"tokens\" with ($size:8px !default);"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 5px;\n}\n\n.a {\n  x: 5px;\n}"),
  )
}

///|
test "official 533 forward-default-used" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"api\";.a{x:api.$size}"),
          ("api.scss", "@forward \"tokens\" with ($size:8px !default);"),
          (
            "_tokens.scss", "$size: 4px !default; $color: red !default; $_secret: 8; @function twice($x: $size){@return $x * 2} @mixin card($x: $size){width:$x;color:$color} .tokens{x:$size}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".tokens {\n  x: 8px;\n}\n\n.a {\n  x: 8px;\n}"),
  )
}

///|
test "official 534 star-conflict-variable" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" as *;@use \"b\" as *;.x{x:$n}"),
            ("a.scss", "$n:1"),
            ("b.scss", "$n:2"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 535 star-conflict-unused" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" as *;@use \"b\" as *;.x{x:1}"),
          ("a.scss", "$n:1"),
          ("b.scss", "$n:2"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 1;\n}"),
  )
}

///|
test "official 536 star-conflict-function" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" as *;@use \"b\" as *;.x{x:f()}"),
            ("a.scss", "@function f(){@return 1}"),
            ("b.scss", "@function f(){@return 2}"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 537 star-same-forwarded-origin" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" as *;@use \"b\" as *;.x{x:$n;y:f()}"),
          ("a.scss", "@forward \"shared\";"),
          ("b.scss", "@forward \"shared\";"),
          ("shared.scss", "$n:1;@function f(){@return 2}"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 1;\n  y: 2;\n}"),
  )
}

///|
test "official 538 star-local-var-before" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "$n:9;@use \"a\" as *;.x{x:$n}"),
            ("a.scss", "$n:1"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 539 star-local-var-after" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([("main.scss", "@use \"a\" as *;$n:9;.x{x:$n}"), ("a.scss", "$n:1")]),
      ).css,
    ),
    css_tokens(".x {\n  x: 9;\n}"),
  )
}

///|
test "official 540 star-local-function" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" as *;@function f(){@return 9}.x{x:f()}"),
          ("a.scss", "@function f(){@return 1}"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 9;\n}"),
  )
}

///|
test "official 541 diagnostics" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";@warn \"entry\";.a{x:1}"),
          ("a.scss", "@debug \"library\";"),
        ]),
      ).css,
    ),
    css_tokens(".a {\n  x: 1;\n}"),
  )
}

///|
test "official 542 configuration-applies-once" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($n:2);.x{x:a.$n}"),
          ("a.scss", "$n:1 !default;$n:7;$n:3 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 7;\n}"),
  )
}

///|
test "official 543 configuration-after-normal-declaration" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($n:2);.x{x:a.$n}"),
          ("a.scss", "$n:7;$n:3 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n}"),
  )
}

///|
test "official 544 forward-config-chain" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($n:2);.x{x:a.$n}"),
          ("a.scss", "@forward \"b\";"),
          ("b.scss", "@forward \"c\";"),
          ("c.scss", "$n:1 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n}"),
  )
}

///|
test "official 545 forward-config-siblings" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($x:2,$y:3);.x{x:a.$x;y:a.$y}"),
          ("a.scss", "@forward \"b\";@forward \"c\";"),
          ("b.scss", "$x:1 !default;"),
          ("c.scss", "$y:1 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n  y: 3;\n}"),
  )
}

///|
test "official 546 forward-config-local-default" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($x:2,$y:3);.x{x:a.$x;y:a.$y}"),
          ("a.scss", "@forward \"b\";$y:1 !default;"),
          ("b.scss", "$x:1 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n  y: 3;\n}"),
  )
}

///|
test "official 547 forward-config-hidden" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" with ($x:2);.x{x:a.$x}"),
            ("a.scss", "@forward \"b\" hide $x;"),
            ("b.scss", "$x:1 !default;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 548 forward-config-show" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" with ($x:2);.x{x:a.$x}"),
          ("a.scss", "@forward \"b\" show $x;"),
          ("b.scss", "$x:1 !default;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n}"),
  )
}

///|
test "official 549 forward-config-fixed-override" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" with ($x:2);"),
            ("a.scss", "@forward \"b\" with ($x:1);"),
            ("b.scss", "$x:0 !default;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 550 forward-config-unknown-explicit" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";"),
            ("a.scss", "@forward \"b\" with ($z:1);"),
            ("b.scss", "$x:0 !default;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 551 forward-own-override" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:a.$n}"),
          ("a.scss", "@forward \"b\";$n:2;"),
          ("b.scss", "$n:1;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n}"),
  )
}

///|
test "official 552 forward-css-before-parent" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:3}"),
          ("a.scss", "@forward \"b\";.a{x:2}"),
          ("b.scss", ".b{x:1}"),
        ]),
      ).css,
    ),
    css_tokens(".b {\n  x: 1;\n}\n\n.a {\n  x: 2;\n}\n\n.x {\n  x: 3;\n}"),
  )
}

///|
test "official 553 forward-after-css" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([("main.scss", ".a{x:1}@forward \"b\";"), ("b.scss", ".b{x:2}")]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 554 forward-private-not-exported" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";.x{x:a.$-n}"),
            ("a.scss", "@forward \"b\";"),
            ("b.scss", "$-n:1;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 555 standard-name-hyphens" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:a.$foo_bar;y:a.foo_bar()}"),
          ("a.scss", "$foo-bar:1;@function foo-bar(){@return 2}"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 1;\n  y: 2;\n}"),
  )
}

///|
test "official 556 nested-namespace-function" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:a.f(3)}"),
          ("a.scss", "@use \"b\";@function f($n){@return b.g($n)}"),
          ("b.scss", "$n:2;@function g($v){@return $v*$n}"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 6;\n}"),
  )
}

///|
test "official 557 star-local-shadow-rule" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" as *;.x{$n:8;x:$n}.y{x:$n}"),
          ("a.scss", "$n:1;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 8;\n}\n\n.y {\n  x: 1;\n}"),
  )
}

///|
test "official 558 star-mutation-from-function" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"a\" as *;@function f(){$n:8 !global;@return $n}.x{x:f();y:$n}",
          ),
          ("a.scss", "$n:1;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 8;\n  y: 8;\n}"),
  )
}

///|
test "official 559 index-resolution-local" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\";.x{x:a.$n}"),
          ("a/_index.scss", "@use \"b\";$n:b.$n;"),
          ("a/_b.scss", "$n:9;"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 9;\n}"),
  )
}

///|
test "official 560 use-configuration-default-flag" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" with ($n:2 !default);"),
            ("a.scss", "$n:1 !default;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 561 forward-private-prefix" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\";.x{x:a.$-n}"),
            ("a.scss", "@forward \"b\" as -*;"),
            ("b.scss", "$n:1;"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 562 diagnostics-in-function" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@function f(){@warn \"f\";@debug 1 + 2;@return 4}.x{x:f()}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 4;\n}"),
  )
}

///|
test "official 563 underscore-namespace" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"some_tokens\";.x{x:some_tokens.$foo_bar;y:some_tokens.foo_bar();@include some_tokens.card}",
          ),
          (
            "_some_tokens.scss", "$foo-bar:2;@function foo-bar(){@return 3}@mixin card(){width:4px}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 2;\n  y: 3;\n  width: 4px;\n}"),
  )
}

///|
test "official 564 underscore-alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          ("main.scss", "@use \"a\" as foo_bar;foo_bar.$n:3;.x{x:foo_bar.$n}"),
          ("a.scss", "$n:1"),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 3;\n}"),
  )
}

///|
test "official 565 namespace-underscore-is-distinct" {
  assert_true(
    try {
      ignore(
        @scss.compile_files(
          "main.scss",
          Map([
            ("main.scss", "@use \"a\" as foo_bar;.x{x:foo-bar.$n}"),
            ("a.scss", "$n:1"),
          ]),
        ).css,
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 566 standard-underscore-alias" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"sass:math\" as my_math;.x{x:my_math.div(6,2);y:my_math.$pi}",
          ),
        ]),
      ).css,
    ),
    css_tokens(".x {\n  x: 3;\n  y: 3.1415926536;\n}"),
  )
}
