///| Both modes use the real upstream Compiler and engines. The extended mode

///|
/// adds the public project adapter, while non-SCSS formats stay upstream.
pub fn compile_project_json(input : String, extended : Bool) -> String {
  try {
    if input.length() > 2097152 {
      raise Failure("request size limit")
    }
    let (entry, files, extra) = match @json.parse(input) {
      { "entry": String(entry), "files": Object(raw), .. } as request => {
        let files : Map[String, String] = Map([])
        for path, value in raw {
          match value {
            String(source) => files[path] = source
            _ => raise Failure("source must be string")
          }
        }
        let extra = match request {
          { "extra": Array(items), .. } => items
          _ => []
        }
        (entry, files, extra)
      }
      _ => raise Failure("expected entry and files")
    }
    let source = match files.get(entry) {
      Some(source) => source
      None => raise Failure("entry missing")
    }
    let diagnostics : Array[String] = []
    let engines = [
      if extended {
        @adapter.project_engine(entry, files, on_diagnostic=message => {
          diagnostics.push(message)
        })
      } else {
        @builtin_scss.scss_engine()
      },
      @builtin_scss.sass_engine(),
      @builtin_less.less_engine(),
      @builtin_css.css_engine(),
    ]
    let compiler = @core.Compiler::new(engines)
    let css = if extended {
      compiler.compile_with_format(source, @core.Scss)
    } else {
      compiler.compile_file(entry, path => {
        match files.get(path) {
          Some(value) => value
          None =>
            raise @core.EngineFailed(
              engine="example-reader",
              message="missing " + path,
            )
        }
      })
    }
    let extras : Array[Json] = []
    for item in extra {
      match item {
        { "source": String(text), "format": String(format), .. } => {
          let kind = match format {
            "css" => @core.Css
            "less" => @core.Less
            "sass" => @core.Sass
            _ => raise Failure("extra format must be css, less or sass")
          }
          extras.push({
            "format": format,
            "css": compiler.compile_with_format(text, kind),
          })
        }
        _ => raise Failure("invalid extra input")
      }
    }
    (
      { "ok": true, "css": css, "diagnostics": diagnostics, "extra": extras } :
      Json).stringify()
  } catch {
    error =>
      ({ "ok": false, "error": Repr(error).to_string() } : Json).stringify()
  }
}

///|
fn main {
  ()
}
