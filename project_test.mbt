///|
test "multi entry identity survives identical source and isolated configurations" {
  let source = "@use 'tokens'; .x {width:tokens.$n}"
  let files = {
    "a/main.scss": source,
    "a/_tokens.scss": "$n:1px",
    "b/main.scss": source,
    "b/_tokens.scss": "$n:2px",
  }
  let p = @scss.Project::new(files)
  files["a/_tokens.scss"] = "$n:99px"
  assert_true(p.compile("a/main.scss").compilation.css.contains("1px"))
  assert_true(p.compile("b/main.scss").compilation.css.contains("2px"))
  let hit = p.compile("./a/main.scss")
  assert_true(hit.cache_hit)
  hit.compilation.loaded_files.clear()
  hit.watched_files.clear()
  assert_eq(p.compile("a/main.scss").compilation.loaded_files.length(), 2)
  assert_eq(p.apply({ "a/_tokens.scss": Some("$n:3px") }), ["a/main.scss"])
  assert_true(p.compile("b/main.scss").cache_hit)
  assert_false(p.compile("a/main.scss").cache_hit)
  assert_true(p.compile("a/main.scss").compilation.css.contains("3px"))
  assert_eq(p.apply({ "unused.scss": Some(".unused{x:1}") }), [])
  assert_true(p.compile("a/main.scss").cache_hit)
  assert_eq(p.apply({ "a/_tokens.scss": Some("$n:3px") }), [])
}

///|
test "absent resolution candidates invalidate cache and failed build never revives old CSS" {
  let p = @scss.Project::new({
    "main.scss": "@use 'tokens'; .x{width:tokens.$n}",
    "tokens/_index.scss": "$n:1px",
  })
  ignore(p.compile("main.scss"))
  assert_eq(p.apply({ "_tokens.scss": Some("$n:2px") }), ["main.scss"])
  assert_true(p.compile("main.scss").compilation.css.contains("2px"))
  assert_eq(p.apply({ "tokens.scss": Some("$n:3px") }), ["main.scss"])
  for _ in 0..<2 {
    assert_true(
      try {
        ignore(p.compile("main.scss"))
        false
      } catch {
        _ => true
      },
    )
  }
  ignore(p.apply({ "tokens.scss": None }))
  let restored = p.compile("main.scss")
  assert_false(restored.cache_hit)
  assert_true(restored.compilation.css.contains("2px"))
  assert_true(restored.watched_files.contains("tokens.scss"))
}

///|
test "invalid edit transaction preserves files cache and dependency graph" {
  let p = @scss.Project::new({
    "main.scss": "@use 'a'; .x{width:a.$n}",
    "_a.scss": "@forward 'b';",
    "_b.scss": "$n:1px",
  })
  let result = p.compile("main.scss")
  let long_path = Array::make(4097, "x").join("") + ".scss"
  let oversized : Map[String, String?] = Map([])
  oversized[long_path] = Some("")
  assert_true(
    try {
      ignore(p.apply(oversized))
      false
    } catch {
      _ => true
    },
  )
  assert_true(p.compile("main.scss").cache_hit)
  assert_eq(result.dependencies.map(d => (d.from, d.path)), [
    ("_a.scss", "_b.scss"),
    ("main.scss", "_a.scss"),
  ])
  for
    updates in [
      { "_b.scss": Some("$n:2px"), "../escape.scss": Some("") },
      { "_b.scss": Some("$n:2px"), "./_b.scss": Some("$n:3px") },
      { "_b.scss": Some("$n:2px"), "other.txt": Some("") },
      { "main.scss": None, "_a.scss": None, "_b.scss": None },
    ] {
    assert_true(
      try {
        ignore(p.apply(updates))
        false
      } catch {
        _ => true
      },
    )
    assert_true(p.compile("main.scss").cache_hit)
    assert_true(p.compile("main.scss").compilation.css.contains("1px"))
  }
  assert_eq(p.apply({ "_b.scss": Some("$n:4px") }), ["main.scss"])
  assert_true(p.compile("main.scss").compilation.css.contains("4px"))
}

///|
test "per entry cache is bounded and module configuration cannot leak" {
  let files : Map[String, String] = { "_tokens.scss": "$n:1px !default;" }
  for i in 0..<17 {
    files["e\{i}.scss"] = "@use 'tokens' with ($n:\{i}px); .x{width:tokens.$n}"
  }
  let p = @scss.Project::new(files)
  for i in 0..<17 {
    assert_true(p.compile("e\{i}.scss").compilation.css.contains("\{i}px"))
  }
  assert_false(p.compile("e0.scss").cache_hit)
  assert_true(p.compile("e16.scss").cache_hit)
}
