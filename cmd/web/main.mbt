///|
pub fn run(input : String) -> String {
  @lib.compile(input) catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
/// JSON virtual project interface shared by Node and browser hosts.
pub fn project(input : String) -> String {
  try {
    let value = @json.parse(input)
    let (entry, files) = match value {
      { "entry": String(entry), "files": Object(raw), .. } => {
        let files : Map[String, String] = Map([])
        for name, source in raw {
          match source {
            String(text) => files[name] = text
            _ => return "ERROR: file source must be string"
          }
        }
        (entry, files)
      }
      _ => return "ERROR: expected entry and files"
    }
    let result = @lib.compile_files(entry, files)
    Json::object({
      "css": Json::string(result.css),
      "loadedFiles": Json::array(result.loaded_files.map(Json::string)),
      "diagnostics": Json::array(result.diagnostics.map(Json::string)),
    }).stringify()
  } catch {
    error => "ERROR: " + Repr(error).to_string()
  }
}

///|
fn main {

}
