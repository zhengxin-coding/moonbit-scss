///|
let project_session : Ref[@adapter.ProjectCompiler?] = Ref(None)

///|
fn project_session_error(
  error : String,
  session_ready : Bool,
  applied : Bool,
  invalidated : Array[String],
) -> String {
  (
    {
      "ok": false,
      "session_ready": session_ready,
      "applied": applied,
      "invalidated": invalidated.to_json(),
      "error": error,
    } : Json).stringify()
}

///|
fn project_session_files(raw : Map[String, Json]) -> Map[String, String] raise {
  let files : Map[String, String] = Map([])
  for path, value in raw {
    match value {
      String(source) => files[path] = source
      _ => raise Failure("source must be string")
    }
  }
  files
}

///|
fn project_session_changes(
  raw : Map[String, Json],
) -> Map[String, String?] raise {
  let changes : Map[String, String?] = Map([])
  for path, value in raw {
    match value {
      String(source) => changes[path] = Some(source)
      Null => changes[path] = None
      _ => raise Failure("update must be string or null")
    }
  }
  changes
}

///|
fn project_session_compile(
  project : @adapter.ProjectCompiler,
  entry : String,
  applied : Bool,
  invalidated : Array[String],
) -> String {
  try {
    let result = project.compile(entry)
    (
      {
        "ok": true,
        "session_ready": true,
        "applied": applied,
        "invalidated": invalidated.to_json(),
        "entry": result.entry,
        "css": result.compilation.css,
        "loaded_files": result.compilation.loaded_files.to_json(),
        "diagnostics": result.compilation.diagnostics.to_json(),
        "dependencies": result.dependencies.to_json(),
        "watched_files": result.watched_files.to_json(),
        "cache_hit": result.cache_hit,
      } : Json).stringify()
  } catch {
    error =>
      project_session_error(Repr(error).to_string(), true, applied, invalidated)
  }
}

///|
/// Handle one command against the Worker-owned ProjectCompiler session.
/// `reset` replaces the whole project; `run` applies a delta then compiles;
/// `close` drops the session before the Worker is terminated.
pub fn project_session_message_json(input : String) -> String {
  try {
    if input.length() > 2097152 {
      raise Failure("request limit")
    }
    match @json.parse(input) {
      {
        "op": String("reset"),
        "files": Object(raw),
        "entry": String(entry),
        ..
      } => {
        project_session.val = None
        try {
          let files = project_session_files(raw)
          let project = @adapter.ProjectCompiler::new(files)
          project_session.val = Some(project)
          project_session_compile(project, entry, true, [])
        } catch {
          error =>
            project_session_error(Repr(error).to_string(), false, false, [])
        }
      }
      {
        "op": String("run"),
        "changes": Object(raw),
        "entry": String(entry),
        ..
      } =>
        match project_session.val {
          Some(project) =>
            try {
              let changes = project_session_changes(raw)
              let invalidated = project.apply(changes)
              project_session_compile(project, entry, true, invalidated)
            } catch {
              error =>
                project_session_error(Repr(error).to_string(), true, false, [])
            }
          None => project_session_error("session is not open", false, false, [])
        }
      { "op": String("close"), .. } => {
        project_session.val = None
        ({ "ok": true, "session_ready": false, "closed": true } : Json).stringify()
      }
      _ =>
        project_session_error(
          "expected reset, run, or close command",
          project_session.val is Some(_),
          false,
          [],
        )
    }
  } catch {
    error =>
      project_session_error(
        Repr(error).to_string(),
        project_session.val is Some(_),
        false,
        [],
      )
  }
}
