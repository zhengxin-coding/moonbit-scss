///|
pub fn project_session_json(input : String) -> String {
  try {
    if input.length() > 2097152 {
      raise Failure("request limit")
    }
    let (files, steps) = match @json.parse(input) {
      { "files": Object(raw), "steps": Array(steps), .. } => {
        let files : Map[String, String] = Map([])
        for path, value in raw {
          match value {
            String(source) => files[path] = source
            _ => raise Failure("source must be string")
          }
        }
        (files, steps)
      }
      _ => raise Failure("expected files and steps")
    }
    if steps.length() > 128 {
      raise Failure("session step limit")
    }
    let project = @adapter.ProjectCompiler::new(files)
    let results : Array[Json] = []
    for step in steps {
      let result : Json = try {
        match step {
          { "op": String("compile"), "entry": String(entry), .. } => {
            let result = project.compile(entry)
            {
              "ok": true,
              "entry": result.entry,
              "css": result.compilation.css,
              "loaded_files": result.compilation.loaded_files.to_json(),
              "diagnostics": result.compilation.diagnostics.to_json(),
              "dependencies": result.dependencies.to_json(),
              "watched_files": result.watched_files.to_json(),
              "cache_hit": result.cache_hit,
            }
          }
          { "op": String("apply"), "files": Object(raw), .. } => {
            let changes : Map[String, String?] = Map([])
            for path, value in raw {
              match value {
                String(source) => changes[path] = Some(source)
                Null => changes[path] = None
                _ => raise Failure("update must be string or null")
              }
            }
            { "ok": true, "invalidated": project.apply(changes).to_json() }
          }
          _ => raise Failure("unknown project step")
        }
      } catch {
        error => { "ok": false, "error": Repr(error).to_string() }
      }
      results.push(result)
    }
    ({ "ok": true, "results": results } : Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}
