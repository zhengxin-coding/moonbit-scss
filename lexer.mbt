///|
pub suberror ParseError {
  Invalid(String)
} derive(Debug)

///|
fn word(c : Char) -> Bool {
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  (c >= '0' && c <= '9') ||
  c == '_'
}
