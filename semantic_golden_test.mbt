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

///|
test "official 567 rgb(1 2 3 / .5)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(1 2 3 / .5);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(1, 2, 3, 0.5);\n}"),
  )
}

///|
test "official 568 rgba(50% 20% 10% / 25%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(50% 20% 10% / 25%);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(50%, 20%, 10%, 0.25);\n}"),
  )
}

///|
test "official 569 rgb(1 2 3)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(1 2 3);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(1, 2, 3);\n}"),
  )
}

///|
test "official 570 hsl(120 50% 25% / .3)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsl(120 50% 25% / .3);}",
      ),
    ),
    css_tokens("a {\n  v: hsla(120, 50%, 25%, 0.3);\n}"),
  )
}

///|
test "official 571 rgb(var(--channels))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(var(--channels));}",
      ),
    ),
    css_tokens("a {\n  v: rgb(var(--channels));\n}"),
  )
}

///|
test "official 572 hsl(120,0%,50%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsl(120,0%,50%);}",
      ),
    ),
    css_tokens("a {\n  v: hsl(120, 0%, 50%);\n}"),
  )
}

///|
test "official 573 hue(hsl(120,0%,50%))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hue(hsl(120,0%,50%));}",
      ),
    ),
    css_tokens("a {\n  v: 120deg;\n}"),
  )
}

///|
test "official 574 red(color.adjust(red,$red:30))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red(color.adjust(red,$red:30));}",
      ),
    ),
    css_tokens("a {\n  v: 255;\n}"),
  )
}

///|
test "official 575 named aliceblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(aliceblue),red(aliceblue),green(aliceblue),blue(aliceblue),alpha(aliceblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 240, 248, 255, 1;\n}"),
  )
}

///|
test "official 576 named antiquewhite" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(antiquewhite),red(antiquewhite),green(antiquewhite),blue(antiquewhite),alpha(antiquewhite);}",
      ),
    ),
    css_tokens("a {\n  v: color, 250, 235, 215, 1;\n}"),
  )
}

///|
test "official 577 named aqua" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(aqua),red(aqua),green(aqua),blue(aqua),alpha(aqua);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 255, 255, 1;\n}"),
  )
}

///|
test "official 578 named aquamarine" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(aquamarine),red(aquamarine),green(aquamarine),blue(aquamarine),alpha(aquamarine);}",
      ),
    ),
    css_tokens("a {\n  v: color, 127, 255, 212, 1;\n}"),
  )
}

///|
test "official 579 named azure" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(azure),red(azure),green(azure),blue(azure),alpha(azure);}",
      ),
    ),
    css_tokens("a {\n  v: color, 240, 255, 255, 1;\n}"),
  )
}

///|
test "official 580 named beige" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(beige),red(beige),green(beige),blue(beige),alpha(beige);}",
      ),
    ),
    css_tokens("a {\n  v: color, 245, 245, 220, 1;\n}"),
  )
}

///|
test "official 581 named bisque" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(bisque),red(bisque),green(bisque),blue(bisque),alpha(bisque);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 228, 196, 1;\n}"),
  )
}

///|
test "official 582 named black" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(black),red(black),green(black),blue(black),alpha(black);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 0, 1;\n}"),
  )
}

///|
test "official 583 named blanchedalmond" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(blanchedalmond),red(blanchedalmond),green(blanchedalmond),blue(blanchedalmond),alpha(blanchedalmond);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 235, 205, 1;\n}"),
  )
}

///|
test "official 584 named blue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(blue),red(blue),green(blue),blue(blue),alpha(blue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 255, 1;\n}"),
  )
}

///|
test "official 585 named blueviolet" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(blueviolet),red(blueviolet),green(blueviolet),blue(blueviolet),alpha(blueviolet);}",
      ),
    ),
    css_tokens("a {\n  v: color, 138, 43, 226, 1;\n}"),
  )
}

///|
test "official 586 named brown" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(brown),red(brown),green(brown),blue(brown),alpha(brown);}",
      ),
    ),
    css_tokens("a {\n  v: color, 165, 42, 42, 1;\n}"),
  )
}

///|
test "official 587 named burlywood" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(burlywood),red(burlywood),green(burlywood),blue(burlywood),alpha(burlywood);}",
      ),
    ),
    css_tokens("a {\n  v: color, 222, 184, 135, 1;\n}"),
  )
}

///|
test "official 588 named cadetblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(cadetblue),red(cadetblue),green(cadetblue),blue(cadetblue),alpha(cadetblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 95, 158, 160, 1;\n}"),
  )
}

///|
test "official 589 named chartreuse" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(chartreuse),red(chartreuse),green(chartreuse),blue(chartreuse),alpha(chartreuse);}",
      ),
    ),
    css_tokens("a {\n  v: color, 127, 255, 0, 1;\n}"),
  )
}

///|
test "official 590 named chocolate" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(chocolate),red(chocolate),green(chocolate),blue(chocolate),alpha(chocolate);}",
      ),
    ),
    css_tokens("a {\n  v: color, 210, 105, 30, 1;\n}"),
  )
}

///|
test "official 591 named coral" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(coral),red(coral),green(coral),blue(coral),alpha(coral);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 127, 80, 1;\n}"),
  )
}

///|
test "official 592 named cornflowerblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(cornflowerblue),red(cornflowerblue),green(cornflowerblue),blue(cornflowerblue),alpha(cornflowerblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 100, 149, 237, 1;\n}"),
  )
}

///|
test "official 593 named cornsilk" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(cornsilk),red(cornsilk),green(cornsilk),blue(cornsilk),alpha(cornsilk);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 248, 220, 1;\n}"),
  )
}

///|
test "official 594 named crimson" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(crimson),red(crimson),green(crimson),blue(crimson),alpha(crimson);}",
      ),
    ),
    css_tokens("a {\n  v: color, 220, 20, 60, 1;\n}"),
  )
}

///|
test "official 595 named cyan" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(cyan),red(cyan),green(cyan),blue(cyan),alpha(cyan);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 255, 255, 1;\n}"),
  )
}

///|
test "official 596 named darkblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkblue),red(darkblue),green(darkblue),blue(darkblue),alpha(darkblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 139, 1;\n}"),
  )
}

///|
test "official 597 named darkcyan" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkcyan),red(darkcyan),green(darkcyan),blue(darkcyan),alpha(darkcyan);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 139, 139, 1;\n}"),
  )
}

///|
test "official 598 named darkgoldenrod" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkgoldenrod),red(darkgoldenrod),green(darkgoldenrod),blue(darkgoldenrod),alpha(darkgoldenrod);}",
      ),
    ),
    css_tokens("a {\n  v: color, 184, 134, 11, 1;\n}"),
  )
}

///|
test "official 599 named darkgray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkgray),red(darkgray),green(darkgray),blue(darkgray),alpha(darkgray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 169, 169, 169, 1;\n}"),
  )
}

///|
test "official 600 named darkgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkgreen),red(darkgreen),green(darkgreen),blue(darkgreen),alpha(darkgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 100, 0, 1;\n}"),
  )
}

///|
test "official 601 named darkgrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkgrey),red(darkgrey),green(darkgrey),blue(darkgrey),alpha(darkgrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 169, 169, 169, 1;\n}"),
  )
}

///|
test "official 602 named darkkhaki" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkkhaki),red(darkkhaki),green(darkkhaki),blue(darkkhaki),alpha(darkkhaki);}",
      ),
    ),
    css_tokens("a {\n  v: color, 189, 183, 107, 1;\n}"),
  )
}

///|
test "official 603 named darkmagenta" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkmagenta),red(darkmagenta),green(darkmagenta),blue(darkmagenta),alpha(darkmagenta);}",
      ),
    ),
    css_tokens("a {\n  v: color, 139, 0, 139, 1;\n}"),
  )
}

///|
test "official 604 named darkolivegreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkolivegreen),red(darkolivegreen),green(darkolivegreen),blue(darkolivegreen),alpha(darkolivegreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 85, 107, 47, 1;\n}"),
  )
}

///|
test "official 605 named darkorange" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkorange),red(darkorange),green(darkorange),blue(darkorange),alpha(darkorange);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 140, 0, 1;\n}"),
  )
}

///|
test "official 606 named darkorchid" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkorchid),red(darkorchid),green(darkorchid),blue(darkorchid),alpha(darkorchid);}",
      ),
    ),
    css_tokens("a {\n  v: color, 153, 50, 204, 1;\n}"),
  )
}

///|
test "official 607 named darkred" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkred),red(darkred),green(darkred),blue(darkred),alpha(darkred);}",
      ),
    ),
    css_tokens("a {\n  v: color, 139, 0, 0, 1;\n}"),
  )
}

///|
test "official 608 named darksalmon" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darksalmon),red(darksalmon),green(darksalmon),blue(darksalmon),alpha(darksalmon);}",
      ),
    ),
    css_tokens("a {\n  v: color, 233, 150, 122, 1;\n}"),
  )
}

///|
test "official 609 named darkseagreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkseagreen),red(darkseagreen),green(darkseagreen),blue(darkseagreen),alpha(darkseagreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 143, 188, 143, 1;\n}"),
  )
}

///|
test "official 610 named darkslateblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkslateblue),red(darkslateblue),green(darkslateblue),blue(darkslateblue),alpha(darkslateblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 72, 61, 139, 1;\n}"),
  )
}

///|
test "official 611 named darkslategray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkslategray),red(darkslategray),green(darkslategray),blue(darkslategray),alpha(darkslategray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 47, 79, 79, 1;\n}"),
  )
}

///|
test "official 612 named darkslategrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkslategrey),red(darkslategrey),green(darkslategrey),blue(darkslategrey),alpha(darkslategrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 47, 79, 79, 1;\n}"),
  )
}

///|
test "official 613 named darkturquoise" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkturquoise),red(darkturquoise),green(darkturquoise),blue(darkturquoise),alpha(darkturquoise);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 206, 209, 1;\n}"),
  )
}

///|
test "official 614 named darkviolet" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(darkviolet),red(darkviolet),green(darkviolet),blue(darkviolet),alpha(darkviolet);}",
      ),
    ),
    css_tokens("a {\n  v: color, 148, 0, 211, 1;\n}"),
  )
}

///|
test "official 615 named deeppink" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(deeppink),red(deeppink),green(deeppink),blue(deeppink),alpha(deeppink);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 20, 147, 1;\n}"),
  )
}

///|
test "official 616 named deepskyblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(deepskyblue),red(deepskyblue),green(deepskyblue),blue(deepskyblue),alpha(deepskyblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 191, 255, 1;\n}"),
  )
}

///|
test "official 617 named dimgray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(dimgray),red(dimgray),green(dimgray),blue(dimgray),alpha(dimgray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 105, 105, 105, 1;\n}"),
  )
}

///|
test "official 618 named dimgrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(dimgrey),red(dimgrey),green(dimgrey),blue(dimgrey),alpha(dimgrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 105, 105, 105, 1;\n}"),
  )
}

///|
test "official 619 named dodgerblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(dodgerblue),red(dodgerblue),green(dodgerblue),blue(dodgerblue),alpha(dodgerblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 30, 144, 255, 1;\n}"),
  )
}

///|
test "official 620 named firebrick" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(firebrick),red(firebrick),green(firebrick),blue(firebrick),alpha(firebrick);}",
      ),
    ),
    css_tokens("a {\n  v: color, 178, 34, 34, 1;\n}"),
  )
}

///|
test "official 621 named floralwhite" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(floralwhite),red(floralwhite),green(floralwhite),blue(floralwhite),alpha(floralwhite);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 250, 240, 1;\n}"),
  )
}

///|
test "official 622 named forestgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(forestgreen),red(forestgreen),green(forestgreen),blue(forestgreen),alpha(forestgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 34, 139, 34, 1;\n}"),
  )
}

///|
test "official 623 named fuchsia" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(fuchsia),red(fuchsia),green(fuchsia),blue(fuchsia),alpha(fuchsia);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 0, 255, 1;\n}"),
  )
}

///|
test "official 624 named gainsboro" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(gainsboro),red(gainsboro),green(gainsboro),blue(gainsboro),alpha(gainsboro);}",
      ),
    ),
    css_tokens("a {\n  v: color, 220, 220, 220, 1;\n}"),
  )
}

///|
test "official 625 named ghostwhite" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(ghostwhite),red(ghostwhite),green(ghostwhite),blue(ghostwhite),alpha(ghostwhite);}",
      ),
    ),
    css_tokens("a {\n  v: color, 248, 248, 255, 1;\n}"),
  )
}

///|
test "official 626 named gold" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(gold),red(gold),green(gold),blue(gold),alpha(gold);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 215, 0, 1;\n}"),
  )
}

///|
test "official 627 named goldenrod" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(goldenrod),red(goldenrod),green(goldenrod),blue(goldenrod),alpha(goldenrod);}",
      ),
    ),
    css_tokens("a {\n  v: color, 218, 165, 32, 1;\n}"),
  )
}

///|
test "official 628 named gray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(gray),red(gray),green(gray),blue(gray),alpha(gray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 128, 128, 128, 1;\n}"),
  )
}

///|
test "official 629 named green" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(green),red(green),green(green),blue(green),alpha(green);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 128, 0, 1;\n}"),
  )
}

///|
test "official 630 named greenyellow" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(greenyellow),red(greenyellow),green(greenyellow),blue(greenyellow),alpha(greenyellow);}",
      ),
    ),
    css_tokens("a {\n  v: color, 173, 255, 47, 1;\n}"),
  )
}

///|
test "official 631 named grey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(grey),red(grey),green(grey),blue(grey),alpha(grey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 128, 128, 128, 1;\n}"),
  )
}

///|
test "official 632 named honeydew" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(honeydew),red(honeydew),green(honeydew),blue(honeydew),alpha(honeydew);}",
      ),
    ),
    css_tokens("a {\n  v: color, 240, 255, 240, 1;\n}"),
  )
}

///|
test "official 633 named hotpink" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(hotpink),red(hotpink),green(hotpink),blue(hotpink),alpha(hotpink);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 105, 180, 1;\n}"),
  )
}

///|
test "official 634 named indianred" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(indianred),red(indianred),green(indianred),blue(indianred),alpha(indianred);}",
      ),
    ),
    css_tokens("a {\n  v: color, 205, 92, 92, 1;\n}"),
  )
}

///|
test "official 635 named indigo" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(indigo),red(indigo),green(indigo),blue(indigo),alpha(indigo);}",
      ),
    ),
    css_tokens("a {\n  v: color, 75, 0, 130, 1;\n}"),
  )
}

///|
test "official 636 named ivory" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(ivory),red(ivory),green(ivory),blue(ivory),alpha(ivory);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 255, 240, 1;\n}"),
  )
}

///|
test "official 637 named khaki" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(khaki),red(khaki),green(khaki),blue(khaki),alpha(khaki);}",
      ),
    ),
    css_tokens("a {\n  v: color, 240, 230, 140, 1;\n}"),
  )
}

///|
test "official 638 named lavender" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lavender),red(lavender),green(lavender),blue(lavender),alpha(lavender);}",
      ),
    ),
    css_tokens("a {\n  v: color, 230, 230, 250, 1;\n}"),
  )
}

///|
test "official 639 named lavenderblush" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lavenderblush),red(lavenderblush),green(lavenderblush),blue(lavenderblush),alpha(lavenderblush);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 240, 245, 1;\n}"),
  )
}

///|
test "official 640 named lawngreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lawngreen),red(lawngreen),green(lawngreen),blue(lawngreen),alpha(lawngreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 124, 252, 0, 1;\n}"),
  )
}

///|
test "official 641 named lemonchiffon" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lemonchiffon),red(lemonchiffon),green(lemonchiffon),blue(lemonchiffon),alpha(lemonchiffon);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 250, 205, 1;\n}"),
  )
}

///|
test "official 642 named lightblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightblue),red(lightblue),green(lightblue),blue(lightblue),alpha(lightblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 173, 216, 230, 1;\n}"),
  )
}

///|
test "official 643 named lightcoral" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightcoral),red(lightcoral),green(lightcoral),blue(lightcoral),alpha(lightcoral);}",
      ),
    ),
    css_tokens("a {\n  v: color, 240, 128, 128, 1;\n}"),
  )
}

///|
test "official 644 named lightcyan" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightcyan),red(lightcyan),green(lightcyan),blue(lightcyan),alpha(lightcyan);}",
      ),
    ),
    css_tokens("a {\n  v: color, 224, 255, 255, 1;\n}"),
  )
}

///|
test "official 645 named lightgoldenrodyellow" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightgoldenrodyellow),red(lightgoldenrodyellow),green(lightgoldenrodyellow),blue(lightgoldenrodyellow),alpha(lightgoldenrodyellow);}",
      ),
    ),
    css_tokens("a {\n  v: color, 250, 250, 210, 1;\n}"),
  )
}

///|
test "official 646 named lightgray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightgray),red(lightgray),green(lightgray),blue(lightgray),alpha(lightgray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 211, 211, 211, 1;\n}"),
  )
}

///|
test "official 647 named lightgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightgreen),red(lightgreen),green(lightgreen),blue(lightgreen),alpha(lightgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 144, 238, 144, 1;\n}"),
  )
}

///|
test "official 648 named lightgrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightgrey),red(lightgrey),green(lightgrey),blue(lightgrey),alpha(lightgrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 211, 211, 211, 1;\n}"),
  )
}

///|
test "official 649 named lightpink" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightpink),red(lightpink),green(lightpink),blue(lightpink),alpha(lightpink);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 182, 193, 1;\n}"),
  )
}

///|
test "official 650 named lightsalmon" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightsalmon),red(lightsalmon),green(lightsalmon),blue(lightsalmon),alpha(lightsalmon);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 160, 122, 1;\n}"),
  )
}

///|
test "official 651 named lightseagreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightseagreen),red(lightseagreen),green(lightseagreen),blue(lightseagreen),alpha(lightseagreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 32, 178, 170, 1;\n}"),
  )
}

///|
test "official 652 named lightskyblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightskyblue),red(lightskyblue),green(lightskyblue),blue(lightskyblue),alpha(lightskyblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 135, 206, 250, 1;\n}"),
  )
}

///|
test "official 653 named lightslategray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightslategray),red(lightslategray),green(lightslategray),blue(lightslategray),alpha(lightslategray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 119, 136, 153, 1;\n}"),
  )
}

///|
test "official 654 named lightslategrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightslategrey),red(lightslategrey),green(lightslategrey),blue(lightslategrey),alpha(lightslategrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 119, 136, 153, 1;\n}"),
  )
}

///|
test "official 655 named lightsteelblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightsteelblue),red(lightsteelblue),green(lightsteelblue),blue(lightsteelblue),alpha(lightsteelblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 176, 196, 222, 1;\n}"),
  )
}

///|
test "official 656 named lightyellow" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lightyellow),red(lightyellow),green(lightyellow),blue(lightyellow),alpha(lightyellow);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 255, 224, 1;\n}"),
  )
}

///|
test "official 657 named lime" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(lime),red(lime),green(lime),blue(lime),alpha(lime);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 255, 0, 1;\n}"),
  )
}

///|
test "official 658 named limegreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(limegreen),red(limegreen),green(limegreen),blue(limegreen),alpha(limegreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 50, 205, 50, 1;\n}"),
  )
}

///|
test "official 659 named linen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(linen),red(linen),green(linen),blue(linen),alpha(linen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 250, 240, 230, 1;\n}"),
  )
}

///|
test "official 660 named magenta" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(magenta),red(magenta),green(magenta),blue(magenta),alpha(magenta);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 0, 255, 1;\n}"),
  )
}

///|
test "official 661 named maroon" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(maroon),red(maroon),green(maroon),blue(maroon),alpha(maroon);}",
      ),
    ),
    css_tokens("a {\n  v: color, 128, 0, 0, 1;\n}"),
  )
}

///|
test "official 662 named mediumaquamarine" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumaquamarine),red(mediumaquamarine),green(mediumaquamarine),blue(mediumaquamarine),alpha(mediumaquamarine);}",
      ),
    ),
    css_tokens("a {\n  v: color, 102, 205, 170, 1;\n}"),
  )
}

///|
test "official 663 named mediumblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumblue),red(mediumblue),green(mediumblue),blue(mediumblue),alpha(mediumblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 205, 1;\n}"),
  )
}

///|
test "official 664 named mediumorchid" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumorchid),red(mediumorchid),green(mediumorchid),blue(mediumorchid),alpha(mediumorchid);}",
      ),
    ),
    css_tokens("a {\n  v: color, 186, 85, 211, 1;\n}"),
  )
}

///|
test "official 665 named mediumpurple" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumpurple),red(mediumpurple),green(mediumpurple),blue(mediumpurple),alpha(mediumpurple);}",
      ),
    ),
    css_tokens("a {\n  v: color, 147, 112, 219, 1;\n}"),
  )
}

///|
test "official 666 named mediumseagreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumseagreen),red(mediumseagreen),green(mediumseagreen),blue(mediumseagreen),alpha(mediumseagreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 60, 179, 113, 1;\n}"),
  )
}

///|
test "official 667 named mediumslateblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumslateblue),red(mediumslateblue),green(mediumslateblue),blue(mediumslateblue),alpha(mediumslateblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 123, 104, 238, 1;\n}"),
  )
}

///|
test "official 668 named mediumspringgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumspringgreen),red(mediumspringgreen),green(mediumspringgreen),blue(mediumspringgreen),alpha(mediumspringgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 250, 154, 1;\n}"),
  )
}

///|
test "official 669 named mediumturquoise" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumturquoise),red(mediumturquoise),green(mediumturquoise),blue(mediumturquoise),alpha(mediumturquoise);}",
      ),
    ),
    css_tokens("a {\n  v: color, 72, 209, 204, 1;\n}"),
  )
}

///|
test "official 670 named mediumvioletred" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mediumvioletred),red(mediumvioletred),green(mediumvioletred),blue(mediumvioletred),alpha(mediumvioletred);}",
      ),
    ),
    css_tokens("a {\n  v: color, 199, 21, 133, 1;\n}"),
  )
}

///|
test "official 671 named midnightblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(midnightblue),red(midnightblue),green(midnightblue),blue(midnightblue),alpha(midnightblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 25, 25, 112, 1;\n}"),
  )
}

///|
test "official 672 named mintcream" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mintcream),red(mintcream),green(mintcream),blue(mintcream),alpha(mintcream);}",
      ),
    ),
    css_tokens("a {\n  v: color, 245, 255, 250, 1;\n}"),
  )
}

///|
test "official 673 named mistyrose" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(mistyrose),red(mistyrose),green(mistyrose),blue(mistyrose),alpha(mistyrose);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 228, 225, 1;\n}"),
  )
}

///|
test "official 674 named moccasin" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(moccasin),red(moccasin),green(moccasin),blue(moccasin),alpha(moccasin);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 228, 181, 1;\n}"),
  )
}

///|
test "official 675 named navajowhite" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(navajowhite),red(navajowhite),green(navajowhite),blue(navajowhite),alpha(navajowhite);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 222, 173, 1;\n}"),
  )
}

///|
test "official 676 named navy" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(navy),red(navy),green(navy),blue(navy),alpha(navy);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 128, 1;\n}"),
  )
}

///|
test "official 677 named oldlace" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(oldlace),red(oldlace),green(oldlace),blue(oldlace),alpha(oldlace);}",
      ),
    ),
    css_tokens("a {\n  v: color, 253, 245, 230, 1;\n}"),
  )
}

///|
test "official 678 named olive" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(olive),red(olive),green(olive),blue(olive),alpha(olive);}",
      ),
    ),
    css_tokens("a {\n  v: color, 128, 128, 0, 1;\n}"),
  )
}

///|
test "official 679 named olivedrab" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(olivedrab),red(olivedrab),green(olivedrab),blue(olivedrab),alpha(olivedrab);}",
      ),
    ),
    css_tokens("a {\n  v: color, 107, 142, 35, 1;\n}"),
  )
}

///|
test "official 680 named orange" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(orange),red(orange),green(orange),blue(orange),alpha(orange);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 165, 0, 1;\n}"),
  )
}

///|
test "official 681 named orangered" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(orangered),red(orangered),green(orangered),blue(orangered),alpha(orangered);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 69, 0, 1;\n}"),
  )
}

///|
test "official 682 named orchid" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(orchid),red(orchid),green(orchid),blue(orchid),alpha(orchid);}",
      ),
    ),
    css_tokens("a {\n  v: color, 218, 112, 214, 1;\n}"),
  )
}

///|
test "official 683 named palegoldenrod" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(palegoldenrod),red(palegoldenrod),green(palegoldenrod),blue(palegoldenrod),alpha(palegoldenrod);}",
      ),
    ),
    css_tokens("a {\n  v: color, 238, 232, 170, 1;\n}"),
  )
}

///|
test "official 684 named palegreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(palegreen),red(palegreen),green(palegreen),blue(palegreen),alpha(palegreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 152, 251, 152, 1;\n}"),
  )
}

///|
test "official 685 named paleturquoise" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(paleturquoise),red(paleturquoise),green(paleturquoise),blue(paleturquoise),alpha(paleturquoise);}",
      ),
    ),
    css_tokens("a {\n  v: color, 175, 238, 238, 1;\n}"),
  )
}

///|
test "official 686 named palevioletred" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(palevioletred),red(palevioletred),green(palevioletred),blue(palevioletred),alpha(palevioletred);}",
      ),
    ),
    css_tokens("a {\n  v: color, 219, 112, 147, 1;\n}"),
  )
}

///|
test "official 687 named papayawhip" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(papayawhip),red(papayawhip),green(papayawhip),blue(papayawhip),alpha(papayawhip);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 239, 213, 1;\n}"),
  )
}

///|
test "official 688 named peachpuff" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(peachpuff),red(peachpuff),green(peachpuff),blue(peachpuff),alpha(peachpuff);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 218, 185, 1;\n}"),
  )
}

///|
test "official 689 named peru" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(peru),red(peru),green(peru),blue(peru),alpha(peru);}",
      ),
    ),
    css_tokens("a {\n  v: color, 205, 133, 63, 1;\n}"),
  )
}

///|
test "official 690 named pink" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(pink),red(pink),green(pink),blue(pink),alpha(pink);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 192, 203, 1;\n}"),
  )
}

///|
test "official 691 named plum" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(plum),red(plum),green(plum),blue(plum),alpha(plum);}",
      ),
    ),
    css_tokens("a {\n  v: color, 221, 160, 221, 1;\n}"),
  )
}

///|
test "official 692 named powderblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(powderblue),red(powderblue),green(powderblue),blue(powderblue),alpha(powderblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 176, 224, 230, 1;\n}"),
  )
}

///|
test "official 693 named purple" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(purple),red(purple),green(purple),blue(purple),alpha(purple);}",
      ),
    ),
    css_tokens("a {\n  v: color, 128, 0, 128, 1;\n}"),
  )
}

///|
test "official 694 named rebeccapurple" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(rebeccapurple),red(rebeccapurple),green(rebeccapurple),blue(rebeccapurple),alpha(rebeccapurple);}",
      ),
    ),
    css_tokens("a {\n  v: color, 102, 51, 153, 1;\n}"),
  )
}

///|
test "official 695 named red" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(red),red(red),green(red),blue(red),alpha(red);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 0, 0, 1;\n}"),
  )
}

///|
test "official 696 named rosybrown" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(rosybrown),red(rosybrown),green(rosybrown),blue(rosybrown),alpha(rosybrown);}",
      ),
    ),
    css_tokens("a {\n  v: color, 188, 143, 143, 1;\n}"),
  )
}

///|
test "official 697 named royalblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(royalblue),red(royalblue),green(royalblue),blue(royalblue),alpha(royalblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 65, 105, 225, 1;\n}"),
  )
}

///|
test "official 698 named saddlebrown" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(saddlebrown),red(saddlebrown),green(saddlebrown),blue(saddlebrown),alpha(saddlebrown);}",
      ),
    ),
    css_tokens("a {\n  v: color, 139, 69, 19, 1;\n}"),
  )
}

///|
test "official 699 named salmon" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(salmon),red(salmon),green(salmon),blue(salmon),alpha(salmon);}",
      ),
    ),
    css_tokens("a {\n  v: color, 250, 128, 114, 1;\n}"),
  )
}

///|
test "official 700 named sandybrown" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(sandybrown),red(sandybrown),green(sandybrown),blue(sandybrown),alpha(sandybrown);}",
      ),
    ),
    css_tokens("a {\n  v: color, 244, 164, 96, 1;\n}"),
  )
}

///|
test "official 701 named seagreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(seagreen),red(seagreen),green(seagreen),blue(seagreen),alpha(seagreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 46, 139, 87, 1;\n}"),
  )
}

///|
test "official 702 named seashell" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(seashell),red(seashell),green(seashell),blue(seashell),alpha(seashell);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 245, 238, 1;\n}"),
  )
}

///|
test "official 703 named sienna" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(sienna),red(sienna),green(sienna),blue(sienna),alpha(sienna);}",
      ),
    ),
    css_tokens("a {\n  v: color, 160, 82, 45, 1;\n}"),
  )
}

///|
test "official 704 named silver" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(silver),red(silver),green(silver),blue(silver),alpha(silver);}",
      ),
    ),
    css_tokens("a {\n  v: color, 192, 192, 192, 1;\n}"),
  )
}

///|
test "official 705 named skyblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(skyblue),red(skyblue),green(skyblue),blue(skyblue),alpha(skyblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 135, 206, 235, 1;\n}"),
  )
}

///|
test "official 706 named slateblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(slateblue),red(slateblue),green(slateblue),blue(slateblue),alpha(slateblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 106, 90, 205, 1;\n}"),
  )
}

///|
test "official 707 named slategray" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(slategray),red(slategray),green(slategray),blue(slategray),alpha(slategray);}",
      ),
    ),
    css_tokens("a {\n  v: color, 112, 128, 144, 1;\n}"),
  )
}

///|
test "official 708 named slategrey" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(slategrey),red(slategrey),green(slategrey),blue(slategrey),alpha(slategrey);}",
      ),
    ),
    css_tokens("a {\n  v: color, 112, 128, 144, 1;\n}"),
  )
}

///|
test "official 709 named snow" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(snow),red(snow),green(snow),blue(snow),alpha(snow);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 250, 250, 1;\n}"),
  )
}

///|
test "official 710 named springgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(springgreen),red(springgreen),green(springgreen),blue(springgreen),alpha(springgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 255, 127, 1;\n}"),
  )
}

///|
test "official 711 named steelblue" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(steelblue),red(steelblue),green(steelblue),blue(steelblue),alpha(steelblue);}",
      ),
    ),
    css_tokens("a {\n  v: color, 70, 130, 180, 1;\n}"),
  )
}

///|
test "official 712 named tan" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(tan),red(tan),green(tan),blue(tan),alpha(tan);}",
      ),
    ),
    css_tokens("a {\n  v: color, 210, 180, 140, 1;\n}"),
  )
}

///|
test "official 713 named teal" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(teal),red(teal),green(teal),blue(teal),alpha(teal);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 128, 128, 1;\n}"),
  )
}

///|
test "official 714 named thistle" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(thistle),red(thistle),green(thistle),blue(thistle),alpha(thistle);}",
      ),
    ),
    css_tokens("a {\n  v: color, 216, 191, 216, 1;\n}"),
  )
}

///|
test "official 715 named tomato" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(tomato),red(tomato),green(tomato),blue(tomato),alpha(tomato);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 99, 71, 1;\n}"),
  )
}

///|
test "official 716 named transparent" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(transparent),red(transparent),green(transparent),blue(transparent),alpha(transparent);}",
      ),
    ),
    css_tokens("a {\n  v: color, 0, 0, 0, 0;\n}"),
  )
}

///|
test "official 717 named turquoise" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(turquoise),red(turquoise),green(turquoise),blue(turquoise),alpha(turquoise);}",
      ),
    ),
    css_tokens("a {\n  v: color, 64, 224, 208, 1;\n}"),
  )
}

///|
test "official 718 named violet" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(violet),red(violet),green(violet),blue(violet),alpha(violet);}",
      ),
    ),
    css_tokens("a {\n  v: color, 238, 130, 238, 1;\n}"),
  )
}

///|
test "official 719 named wheat" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(wheat),red(wheat),green(wheat),blue(wheat),alpha(wheat);}",
      ),
    ),
    css_tokens("a {\n  v: color, 245, 222, 179, 1;\n}"),
  )
}

///|
test "official 720 named white" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(white),red(white),green(white),blue(white),alpha(white);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 255, 255, 1;\n}"),
  )
}

///|
test "official 721 named whitesmoke" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(whitesmoke),red(whitesmoke),green(whitesmoke),blue(whitesmoke),alpha(whitesmoke);}",
      ),
    ),
    css_tokens("a {\n  v: color, 245, 245, 245, 1;\n}"),
  )
}

///|
test "official 722 named yellow" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(yellow),red(yellow),green(yellow),blue(yellow),alpha(yellow);}",
      ),
    ),
    css_tokens("a {\n  v: color, 255, 255, 0, 1;\n}"),
  )
}

///|
test "official 723 named yellowgreen" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(yellowgreen),red(yellowgreen),green(yellowgreen),blue(yellowgreen),alpha(yellowgreen);}",
      ),
    ),
    css_tokens("a {\n  v: color, 154, 205, 50, 1;\n}"),
  )
}

///|
test "official 724 #123" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#123;}",
      ),
    ),
    css_tokens("a {\n  v: #123;\n}"),
  )
}

///|
test "official 725 #ABC" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#ABC;}",
      ),
    ),
    css_tokens("a {\n  v: #ABC;\n}"),
  )
}

///|
test "official 726 #1234" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#1234;}",
      ),
    ),
    css_tokens("a {\n  v: rgba(17, 34, 51, 0.2666666667);\n}"),
  )
}

///|
test "official 727 #aabbccdd" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#aabbccdd;}",
      ),
    ),
    css_tokens("a {\n  v: rgba(170, 187, 204, 0.8666666667);\n}"),
  )
}

///|
test "official 728 #0000" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#0000;}",
      ),
    ),
    css_tokens("a {\n  v: rgba(0, 0, 0, 0);\n}"),
  )
}

///|
test "official 729 #ffffffff" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#ffffffff;}",
      ),
    ),
    css_tokens("a {\n  v: white;\n}"),
  )
}

///|
test "official 730 RED" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:RED;}",
      ),
    ),
    css_tokens("a {\n  v: RED;\n}"),
  )
}

///|
test "official 731 rgb(255,0,0)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(255,0,0);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(255, 0, 0);\n}"),
  )
}

///|
test "official 732 rgb(50%,0%,100%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(50%,0%,100%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(50%, 0%, 100%);\n}"),
  )
}

///|
test "official 733 rgb(12.3,5,6)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(12.3,5,6);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(4.8235294118%, 1.9607843137%, 2.3529411765%);\n}"),
  )
}

///|
test "official 734 rgb(1%,2,3)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(1%,2,3);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(1%, 0.7843137255%, 1.1764705882%);\n}"),
  )
}

///|
test "official 735 rgb(-10,300,20)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(-10,300,20);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(0, 255, 20);\n}"),
  )
}

///|
test "official 736 rgba(0,30,200,1.2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(0,30,200,1.2);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(0, 30, 200);\n}"),
  )
}

///|
test "official 737 rgba(red,.4)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(red,.4);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(255, 0, 0, 0.4);\n}"),
  )
}

///|
test "official 738 rgba(#ABC,20%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(#ABC,20%);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(170, 187, 204, 0.2);\n}"),
  )
}

///|
test "official 739 rgba($color:red,$alpha:.25)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba($color:red,$alpha:.25);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(255, 0, 0, 0.25);\n}"),
  )
}

///|
test "official 740 rgba($blue:3,$red:1,$alpha:.3,$green:2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba($blue:3,$red:1,$alpha:.3,$green:2);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(1, 2, 3, 0.3);\n}"),
  )
}

///|
test "official 741 hsl(120,50%,25%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsl(120,50%,25%);}",
      ),
    ),
    css_tokens("a {\n  v: hsl(120, 50%, 25%);\n}"),
  )
}

///|
test "official 742 hsla(.5turn,100%,50%,.3)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsla(.5turn,100%,50%,.3);}",
      ),
    ),
    css_tokens("a {\n  v: hsla(180, 100%, 50%, 0.3);\n}"),
  )
}

///|
test "official 743 hsl(-90,50,60)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsl(-90,50,60);}",
      ),
    ),
    css_tokens("a {\n  v: hsl(270, 50%, 60%);\n}"),
  )
}

///|
test "official 744 hsl(450deg,200%,-10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hsl(450deg,200%,-10%);}",
      ),
    ),
    css_tokens("a {\n  v: hsl(90, 200%, -10%);\n}"),
  )
}

///|
test "official 745 red == #ff0000" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red == #ff0000;}",
      ),
    ),
    css_tokens("a {\n  v: true;\n}"),
  )
}

///|
test "official 746 red == \"red\"" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red == \"red\";}",
      ),
    ),
    css_tokens("a {\n  v: false;\n}"),
  )
}

///|
test "official 747 rgba(red,0) == rgba(blue,0)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(red,0) == rgba(blue,0);}",
      ),
    ),
    css_tokens("a {\n  v: false;\n}"),
  )
}

///|
test "official 748 map.get((red:yes),#ff0000)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:map.get((red:yes),#ff0000);}",
      ),
    ),
    css_tokens("a {\n  v: yes;\n}"),
  )
}

///|
test "official 749 meta.type-of(rgb(1,2,3))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(rgb(1,2,3));}",
      ),
    ),
    css_tokens("a {\n  v: color;\n}"),
  )
}

///|
test "official 750 meta.type-of(unquote(\"red\"))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.type-of(unquote(\"red\"));}",
      ),
    ),
    css_tokens("a {\n  v: string;\n}"),
  )
}

///|
test "official 751 meta.function-exists(mix)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:meta.function-exists(mix);}",
      ),
    ),
    css_tokens("a {\n  v: true;\n}"),
  )
}

///|
test "official 752 rgb(var(--r),0,0)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(var(--r),0,0);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(var(--r), 0, 0);\n}"),
  )
}

///|
test "official 753 rgb(calc(1 + 2),5,6)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(calc(1 + 2),5,6);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(3, 5, 6);\n}"),
  )
}

///|
test "official 754 opacity(.5)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:opacity(.5);}",
      ),
    ),
    css_tokens("a {\n  v: opacity(0.5);\n}"),
  )
}

///|
test "official 755 invert(40%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:invert(40%);}",
      ),
    ),
    css_tokens("a {\n  v: invert(40%);\n}"),
  )
}

///|
test "official 756 grayscale(10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:grayscale(10%);}",
      ),
    ),
    css_tokens("a {\n  v: grayscale(10%);\n}"),
  )
}

///|
test "official 757 saturate(2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:saturate(2);}",
      ),
    ),
    css_tokens("a {\n  v: saturate(2);\n}"),
  )
}

///|
test "official 758 mix(red,blue)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:mix(red,blue);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(50%, 0%, 50%);\n}"),
  )
}

///|
test "official 759 mix(rgba(red,.2),rgba(blue,.8),30%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:mix(rgba(red,.2),rgba(blue,.8),30%);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(9.6774193548%, 0%, 90.3225806452%, 0.62);\n}"),
  )
}

///|
test "official 760 color.mix(red,blue,$weight:0%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.mix(red,blue,$weight:0%);}",
      ),
    ),
    css_tokens("a {\n  v: blue;\n}"),
  )
}

///|
test "official 761 mix(red,blue,100%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:mix(red,blue,100%);}",
      ),
    ),
    css_tokens("a {\n  v: red;\n}"),
  )
}

///|
test "official 762 lighten(#333,10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:lighten(#333,10%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(30%, 30%, 30%);\n}"),
  )
}

///|
test "official 763 darken(red,10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:darken(red,10%);}",
      ),
    ),
    css_tokens("a {\n  v: #cc0000;\n}"),
  )
}

///|
test "official 764 saturate(#6699aa,20%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:saturate(#6699aa,20%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(30.6666666667%, 64.6666666667%, 76%);\n}"),
  )
}

///|
test "official 765 desaturate(red,20%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:desaturate(red,20%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(90%, 10%, 10%);\n}"),
  )
}

///|
test "official 766 adjust-hue(red,90deg)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:adjust-hue(red,90deg);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(50%, 100%, 0%);\n}"),
  )
}

///|
test "official 767 complement(red)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:complement(red);}",
      ),
    ),
    css_tokens("a {\n  v: aqua;\n}"),
  )
}

///|
test "official 768 color.complement(blue)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.complement(blue);}",
      ),
    ),
    css_tokens("a {\n  v: yellow;\n}"),
  )
}

///|
test "official 769 grayscale(red)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:grayscale(red);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(50%, 50%, 50%);\n}"),
  )
}

///|
test "official 770 color.grayscale(#abcdef)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.grayscale(#abcdef);}",
      ),
    ),
    css_tokens("a {\n  v: #cdcdcd;\n}"),
  )
}

///|
test "official 771 invert(#13579b)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:invert(#13579b);}",
      ),
    ),
    css_tokens("a {\n  v: #eca864;\n}"),
  )
}

///|
test "official 772 color.invert(red,25%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.invert(red,25%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(75%, 25%, 25%);\n}"),
  )
}

///|
test "official 773 fade-out(rgba(red,.5),.2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:fade-out(rgba(red,.5),.2);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(255, 0, 0, 0.3);\n}"),
  )
}

///|
test "official 774 fade-in(rgba(blue,.2),.4)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:fade-in(rgba(blue,.2),.4);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(0, 0, 255, 0.6);\n}"),
  )
}

///|
test "official 775 transparentize(red,1)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:transparentize(red,1);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(255, 0, 0, 0);\n}"),
  )
}

///|
test "official 776 opacify(transparent,1)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:opacify(transparent,1);}",
      ),
    ),
    css_tokens("a {\n  v: black;\n}"),
  )
}

///|
test "official 777 color.change(red,$alpha:.2)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.change(red,$alpha:.2);}",
      ),
    ),
    css_tokens("a {\n  v: rgba(255, 0, 0, 0.2);\n}"),
  )
}

///|
test "official 778 color.change(red,$green:30,$blue:60)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.change(red,$green:30,$blue:60);}",
      ),
    ),
    css_tokens("a {\n  v: #ff1e3c;\n}"),
  )
}

///|
test "official 779 color.adjust(#abcdef,$red:-20,$green:5,$blue:-30)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.adjust(#abcdef,$red:-20,$green:5,$blue:-30);}",
      ),
    ),
    css_tokens("a {\n  v: #97d2d1;\n}"),
  )
}

///|
test "official 780 color.scale(red,$lightness:-20%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.scale(red,$lightness:-20%);}",
      ),
    ),
    css_tokens("a {\n  v: #cc0000;\n}"),
  )
}

///|
test "official 781 color.scale(#123456,$red:20%,$green:-50%,$blue:10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.scale(#123456,$red:20%,$green:-50%,$blue:10%);}",
      ),
    ),
    css_tokens(
      "a {\n  v: rgb(25.6470588235%, 10.1960784314%, 40.3529411765%);\n}",
    ),
  )
}

///|
test "official 782 color.adjust(red,$hue:180deg,$saturation:-20%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.adjust(red,$hue:180deg,$saturation:-20%);}",
      ),
    ),
    css_tokens("a {\n  v: rgb(10%, 90%, 90%);\n}"),
  )
}

///|
test "official 783 color.change($color:blue,$lightness:40%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.change($color:blue,$lightness:40%);}",
      ),
    ),
    css_tokens("a {\n  v: #0000cc;\n}"),
  )
}

///|
test "official 784 color.adjust(red,$red:30)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.adjust(red,$red:30);}",
      ),
    ),
    css_tokens("a {\n  v: red;\n}"),
  )
}

///|
test "official 785 hue(#123456)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:hue(#123456);}",
      ),
    ),
    css_tokens("a {\n  v: 210deg;\n}"),
  )
}

///|
test "official 786 saturation(#123456)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:saturation(#123456);}",
      ),
    ),
    css_tokens("a {\n  v: 65.3846153846%;\n}"),
  )
}

///|
test "official 787 lightness(#123456)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:lightness(#123456);}",
      ),
    ),
    css_tokens("a {\n  v: 20.3921568627%;\n}"),
  )
}

///|
test "official 788 red(rgb(12.3,4.7,6.5))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red(rgb(12.3,4.7,6.5));}",
      ),
    ),
    css_tokens("a {\n  v: 12;\n}"),
  )
}

///|
test "official 789 color.alpha(rgba(red,.42))" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.alpha(rgba(red,.42));}",
      ),
    ),
    css_tokens("a {\n  v: 0.42;\n}"),
  )
}

///|
test "official 790 lighten(hsl(120,50%,25%),10%)" {
  assert_eq(
    css_tokens(
      @scss.compile(
        "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:lighten(hsl(120,50%,25%),10%);}",
      ),
    ),
    css_tokens("a {\n  v: hsl(120, 50%, 35%);\n}"),
  )
}

///|
test "official 791 rgba(\"red\",.5)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(\"red\",.5);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 792 red(\"red\")" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red(\"red\");}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 793 mix(red,blue,120%)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:mix(red,blue,120%);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 794 mix(red,blue,-1%)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:mix(red,blue,-1%);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 795 rgb(1px,2,3)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(1px,2,3);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 796 rgba(red)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba(red);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 797 rgba($color:red,$alpha:.2,$bad:1)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgba($color:red,$alpha:.2,$bad:1);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 798 color.change(red,$red:1,$hue:1)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.change(red,$red:1,$hue:1);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 799 color.scale(red,$red:101%)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.scale(red,$red:101%);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 800 color.adjust(red,$oops:1)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:color.adjust(red,$oops:1);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 801 lighten(red,101%)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:lighten(red,101%);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 802 red + blue" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:red + blue;}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 803 #12" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#12;}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 804 #12345" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#12345;}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 805 #12zz12" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:#12zz12;}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 806 rgb(1,2,3,4,5)" {
  assert_true(
    try {
      ignore(
        @scss.compile(
          "@use \"sass:color\"; @use \"sass:meta\"; @use \"sass:map\"; a{v:rgb(1,2,3,4,5);}",
        ),
      )
      false
    } catch {
      _ => true
    },
  )
}

///|
test "official 807 theme module with defaults, function and mixin" {
  assert_eq(
    css_tokens(
      @scss.compile_files(
        "main.scss",
        Map([
          (
            "main.scss", "@use \"tokens\" with ($brand:#336699);a{@include tokens.button();}",
          ),
          (
            "_tokens.scss", "@use \"sass:color\";$brand:red !default;@function shade($c){@return color.scale($c,$lightness:-20%);}@mixin button(){color:$brand;background:shade($brand);border-color:rgba($brand,.4);}",
          ),
        ]),
      ).css,
    ),
    css_tokens(
      "a {\n  color: #336699;\n  background: rgb(16%, 32%, 48%);\n  border-color: rgba(51, 102, 153, 0.4);\n}",
    ),
  )
}
