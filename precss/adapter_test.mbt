///|
test "upstream compiler routes module project through injected engine" {
  let files = {
    "styles/main.scss": "@use '../theme' as t with ($gap: 8px); .card { padding: t.$gap; }",
    "theme/_index.scss": "@forward 'tokens';",
    "theme/_tokens.scss": "$gap: 4px !default;",
  }
  let engine = @precss.project_engine("styles/main.scss", files)
  let compiler = @core.Compiler::new([engine])
  assert_eq(engine.supports(@core.Scss), true)
  assert_eq(engine.supports(@core.Sass), false)
  assert_eq(engine.supports(@core.Less), false)
  assert_eq(engine.supports(@core.Css), false)
  let result = compiler.compile_input(
    @core.SourceWithFormat(files["styles/main.scss"], @core.Scss),
  )
  assert_eq(result, ".card {\n  padding: 8px;\n}\n")
}

///|
test "bound project takes a snapshot and requires new source revisions" {
  let files = {
    "main.scss": "@use 'tokens'; .x {width:tokens.$n}",
    "_tokens.scss": "$n: 4px;",
  }
  let engine = @precss.project_engine("main.scss", files)
  files["_tokens.scss"] = "$n: 99px;"
  assert_eq(engine.compile(files["main.scss"]), ".x {\n  width: 4px;\n}\n")
  let rejected = try {
    ignore(engine.compile(".different {width: 2px}"))
    false
  } catch {
    @core.EngineFailed(engine~, message~) =>
      engine == "moonbit-scss-project" && message.contains("source differs")
    _ => false
  }
  assert_eq(rejected, true)
}

///|
test "file entry ambiguity is rejected even for identical source text" {
  let source = "@use 'tokens'; .x {width:tokens.$n}"
  let files = {
    "a/main.scss": source,
    "a/_tokens.scss": "$n:1px",
    "b/main.scss": source,
    "b/_tokens.scss": "$n:2px",
  }
  let engine = @precss.project_engine("a/main.scss", files)
  let compiler = @core.Compiler::new([engine])
  let rejected = try {
    ignore(compiler.compile_file("b/main.scss", path => files[path]))
    false
  } catch {
    @core.UnsupportedSyntax(_) => true
    _ => false
  }
  assert_eq(rejected, true)
  assert_eq(
    @precss.compile_project("b/main.scss", files),
    ".x {\n  width: 2px;\n}\n",
  )
}

///|
test "missing modules and virtual root escape use upstream error type" {
  for source in ["@use 'missing';", "@use '../outside';"] {
    let rejected = try {
      ignore(@precss.compile_project("main.scss", { "main.scss": source }))
      false
    } catch {
      @core.EngineFailed(engine~, message~) =>
        engine == "moonbit-scss-project" && message.length() > 0
      _ => false
    }
    assert_eq(rejected, true)
  }
}

///|
test "diagnostics are delivered rather than discarded by CSS-only facade" {
  let diagnostics = []
  let css = @precss.compile_project(
    "main.scss",
    { "main.scss": "@warn 'notice'; .x {width:1px}" },
    on_diagnostic=message => diagnostics.push(message),
  )
  assert_eq(css, ".x {\n  width: 1px;\n}\n")
  assert_eq(diagnostics.length(), 1)
  assert_eq(diagnostics[0].contains("notice"), true)
}
