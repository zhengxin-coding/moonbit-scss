///|
fn run(input : String) -> String {
  @lib.compile(input) catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {
  println(
    run(
      "$accent: #4ca98f;\n.card, .panel {\n  color: $accent;\n  padding: 12px;\n  &:hover { color: white; }\n  .title { font-weight: bold; }\n}",
    ),
  )
}
