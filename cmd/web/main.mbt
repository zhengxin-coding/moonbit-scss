///|
pub fn run(input : String) -> String {
  @lib.compile(input) catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}
