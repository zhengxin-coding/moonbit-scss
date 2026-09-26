///|
fn main raise {
  let source = "@use 'tokens'; .x{width:tokens.$n}"
  let project = @precss.ProjectCompiler::new({
    "a/main.scss": source,
    "a/_tokens.scss": "$n:1px",
    "b/main.scss": source,
    "b/_tokens.scss": "$n:2px",
  })
  for entry in ["a/main.scss", "b/main.scss"] {
    let result = project.compile(entry)
    println("\{entry}:\n\{result.compilation.css}")
  }
  let invalidated = project.apply({ "a/_tokens.scss": Some("$n:3px") })
  println("invalidated: " + invalidated.to_json().stringify())
  let cached = project.compile("b/main.scss").cache_hit
  println("b cached: " + cached.to_string())
  let result = project.compile("a/main.scss")
  println(result.compilation.css)
  println(result.dependencies.to_json().stringify())
}
