///|
priv struct CssRule {
  selectors : Array[String]
  declarations : String
  context : Array[String]
  path : String
}

///|
priv struct Extension {
  target : String
  selectors : Array[String]
  context : Array[String]
  path : String
  optional : Bool
  mut matched : Bool
}

///|
priv struct Emitter {
  output : Array[CssRule]
  extensions : Array[Extension]
  path : String
  mut context : Array[String]
  mut root_parent : Array[String]
  hoisted : Array[(Int, Array[CssRule])]
  mut size : Int
  mut budget : Int
  mut pending_size : Int
  mut pending : Array[String]
  mut parents : Array[String]
}

///|
fn Emitter::flush(self : Emitter) -> Unit raise ParseError {
  if self.pending.is_empty() {
    return
  }
  let declarations = self.pending.join("")
  self.size += declarations.length() + self.parents.join(", ").length() + 5
  if self.size > 1000000 {
    raise Invalid("CSS output limit")
  }
  self.output.push({
    selectors: self.parents.copy(),
    declarations,
    context: self.context.copy(),
    path: self.path,
  })
  self.pending = []
  self.pending_size = 0
}

///|
fn at_rule_name(header : String) -> String {
  let chars = header.to_array()
  let mut end = 1
  while end < chars.length() && name_char(chars[end]) {
    end += 1
  }
  String::from_array(chars[1:end])
}

///|
fn render_at_root(
  header : String,
  body : Array[Statement],
  parents : Array[String],
  scope : Scope,
  emitter : Emitter,
  depth : Int,
  content : Content?,
) -> Unit raise ParseError {
  let tail = scope
    .expand(
      header[8:].to_owned().replace_all(old="#{&}", new=parents.join(", ")),
    )
    .trim()
    .to_owned()
  let saved_context = emitter.context
  let saved_parent = emitter.root_parent
  let mut next_parents : Array[String] = []
  let mut next_context = saved_context
  if tail.has_prefix("(") {
    if !tail.has_suffix(")") {
      raise Invalid("invalid at-root query")
    }
    let parts = split_top(tail[1:tail.length() - 1].to_owned(), ':')
    if parts.length() != 2 || !["with", "without"].contains(parts[0]) {
      raise Invalid("at-root query requires with or without")
    }
    let names = parts[1]
      .replace_all(old="\t", new=" ")
      .replace_all(old="\n", new=" ")
      .split(" ")
      .filter(s => !s.is_empty())
      .map(s => s.to_owned())
      .to_array()
    if names.is_empty() {
      raise Invalid("empty at-root query")
    }
    let keep = fn(name) {
      let listed = names.contains("all") || names.contains(name)
      if parts[0] == "with" {
        listed
      } else {
        !listed
      }
    }
    if keep("rule") {
      next_parents = parents
    }
    next_context = saved_context.filter(h => keep(at_rule_name(h)))
  } else if !tail.is_empty() {
    next_parents = resolve_selectors(parents, tail, false, 0)
  }
  if next_context != saved_context {
    let mut shared = 0
    while shared < next_context.length() &&
          shared < saved_context.length() &&
          next_context[shared] == saved_context[shared] {
      shared += 1
    }
    let lifted : Emitter = {
      output: [],
      extensions: emitter.extensions,
      path: emitter.path,
      context: next_context,
      root_parent: parents,
      hoisted: [],
      size: 0,
      budget: emitter.budget,
      pending_size: 0,
      pending: [],
      parents: [],
    }
    render(
      body,
      next_parents,
      Scope::new(Some(scope)),
      lifted,
      depth + 1,
      content,
      false,
      "",
    )
    lifted.flush()
    emitter.budget = lifted.budget
    emitter.hoisted.push((shared, lifted.output))
    for item in lifted.hoisted {
      emitter.hoisted.push(item)
    }
    return
  }
  emitter.flush()
  if !next_parents.is_empty() {
    emitter.output.push({
      selectors: next_parents.copy(),
      declarations: "",
      context: emitter.context.copy(),
      path: emitter.path,
    })
  }
  emitter.root_parent = if parents.is_empty() { saved_parent } else { parents }
  render(
    body,
    next_parents,
    Scope::new(Some(scope)),
    emitter,
    depth + 1,
    content,
    false,
    "",
  )
  emitter.flush()
  emitter.context = saved_context
  emitter.root_parent = saved_parent
}

///|
fn Emitter::release_hoisted(self : Emitter) -> Unit {
  let retained : Array[(Int, Array[CssRule])] = []
  for (depth, rules) in self.hoisted {
    if self.context.length() <= depth {
      self.output.append(rules)
    } else {
      retained.push((depth, rules))
    }
  }
  self.hoisted.clear()
  self.hoisted.append(retained)
}

///|
fn Evaluation::extension_visible(
  self : Evaluation,
  from : String,
  target : String,
) -> Bool {
  let pending = [from]
  let seen : Map[String, Bool] = Map([])
  while pending.pop() is Some(path) {
    if path == target {
      return true
    }
    if !seen.contains(path) {
      seen[path] = true
      if self.dependencies.get(path) is Some(paths) {
        for path in paths {
          pending.push(path)
        }
      }
    }
  }
  false
}

///|
fn Evaluation::render_css(self : Evaluation) -> String raise ParseError {
  // Keep selectors until all modules have evaluated, so later and transitive
  // extensions can update earlier rules without reparsing emitted CSS text.
  let rules : Array[CssRule] = []
  for group in self.css {
    for rule in group {
      rules.push(rule)
    }
  }
  for rule in rules {
    let originals = rule.selectors.copy()
    rule.selectors.clear()
    for source in originals {
      let expanded = [source]
      let mut cursor = 0
      while cursor < expanded.length() {
        let original = expanded[cursor]
        cursor += 1
        for extension in self.extensions {
          self.remaining -= 1
          if self.remaining < 0 {
            raise Invalid("extension evaluation budget")
          }
          if !self.extension_visible(extension.path, rule.path) {
            continue
          }
          if extension.target.has_prefix("%_") ||
            extension.target.has_prefix("%-") {
            if extension.path != rule.path {
              continue
            }
          }
          for selector in extension.selectors {
            let (matched, added) = extend_selector(
              original,
              extension.target,
              selector,
            )
            if matched {
              let media = extension.context.filter(s => s.has_prefix("@media "))
              if !media.is_empty() &&
                media != rule.context.filter(s => s.has_prefix("@media ")) {
                raise Invalid("cannot extend across media contexts")
              }
              extension.matched = true
              for value in added {
                if !expanded.contains(value) {
                  expanded.push(value)
                  if expanded.length() > 256 {
                    raise Invalid("selector expansion limit")
                  }
                }
              }
            }
          }
        }
      }
      for value in expanded {
        if !rule.selectors.contains(value) {
          rule.selectors.push(value)
        }
      }
      if rule.selectors.length() > 256 {
        raise Invalid("selector expansion limit")
      }
    }
  }
  for extension in self.extensions {
    if !extension.matched && !extension.optional {
      raise Invalid("extend target not found " + extension.target)
    }
  }
  let out = StringBuilder()
  let mut context : Array[String] = []
  let mut length = 0
  let write = fn(text : String) -> Unit raise ParseError {
    length += text.length()
    if length > 1000000 {
      raise Invalid("CSS output limit")
    }
    out.write_string(text)
  }
  for rule in rules {
    if rule.declarations.is_empty() {
      continue
    }
    let selectors = rule.selectors.filter(s => !selector_placeholder(s))
    if !rule.selectors.is_empty() && selectors.is_empty() {
      continue
    }
    let mut shared = 0
    while shared < context.length() &&
          shared < rule.context.length() &&
          context[shared] == rule.context[shared] {
      shared += 1
    }
    for _ in shared..<context.length() {
      write("}\n")
    }
    for i in shared..<rule.context.length() {
      write(rule.context[i] + " {\n")
    }
    context = rule.context
    if !selectors.is_empty() {
      write(selectors.join(", ") + " {\n")
    }
    write(rule.declarations)
    if !selectors.is_empty() {
      write("}\n")
    }
  }
  for _ in context {
    write("}\n")
  }
  out.to_string()
}
