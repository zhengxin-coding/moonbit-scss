///|
pub(all) struct ModuleDependency {
  from : String
  path : String
} derive(ToJson)

///|
pub extend ModuleDependency with ToJson::{to_json}

///|
pub(all) struct ProjectOutput {
  entry : String
  compilation : Compilation
  dependencies : Array[ModuleDependency]
  watched_files : Array[String]
  cache_hit : Bool
}

///|
/// Owned virtual files and completed per-entry results. Module evaluation is
/// isolated per entry, including @use configuration. No cross-entry globals.
pub struct Project {
  priv mut files : Map[String, String]
  priv cache : Map[String, ProjectOutput]
}

///|
pub fn Project::new(files : Map[String, String]) -> Project raise ParseError {
  { files: checked_files(files), cache: Map([]), }
}

///|
pub fn Project::source(
  self : Project,
  entry : String,
) -> String raise ParseError {
  match self.files.get(clean_path(entry)) {
    Some(source) => source
    None => raise Invalid("entry file not found")
  }
}

///|
fn ProjectOutput::snapshot(self : ProjectOutput, hit : Bool) -> ProjectOutput {
  {
    ..self,
    cache_hit: hit,
    compilation: {
      ..self.compilation,
      loaded_files: self.compilation.loaded_files.copy(),
      diagnostics: self.compilation.diagnostics.copy(),
    },
    dependencies: self.dependencies.copy(),
    watched_files: self.watched_files.copy(),
  }
}

///|
/// Reuses only a completed result of this exact virtual snapshot. Cache is
/// bounded to 16 entries / 4M CSS UTF-16 units; deterministic key-order eviction.
/// Large outputs are returned uncached; evaluation limits still apply.
pub fn Project::compile(
  self : Project,
  entry : String,
) -> ProjectOutput raise ParseError {
  let entry = clean_path(entry)
  if self.cache.get(entry) is Some(result) {
    return result.snapshot(true)
  }
  let result = compile_tracked(entry, self.files)
  if result.compilation.css.length() <= 4000000 {
    let keys = self.cache.keys().to_array()
    keys.sort()
    let mut size = result.compilation.css.length()
    for _, item in self.cache {
      size += item.compilation.css.length()
    }
    for key in keys {
      if self.cache.length() < 16 && size <= 4000000 {
        break
      }
      size -= self.cache[key].compilation.css.length()
      self.cache.remove(key)
    }
    self.cache[entry] = result
  }
  result.snapshot(false)
}

///|
/// Atomically apply a file delta after canonical path and total-size validation.
/// None deletes a file. Return invalidated cached entry paths, sorted. Absent
/// resolution candidates are tracked, so additions can invalidate results too.
/// Invalid edits leave both the virtual files and caches unchanged.
pub fn Project::apply(
  self : Project,
  updates : Map[String, String?],
) -> Array[String] raise ParseError {
  if updates.length() > 256 {
    raise Invalid("update count limit")
  }
  let next = self.files.copy()
  let seen : Map[String, Bool] = Map([])
  let changed : Map[String, Bool] = Map([])
  for raw, value in updates {
    let path = clean_path(raw)
    if !path.has_suffix(".scss") || seen.contains(path) {
      raise Invalid("invalid or duplicate canonical update path")
    }
    seen[path] = true
    if next.get(path) != value {
      changed[path] = true
    }
    match value {
      Some(source) => next[path] = source
      None => next.remove(path)
    }
  }
  let checked = checked_files(next)
  let invalidated : Array[String] = []
  for entry, result in self.cache {
    if result.watched_files.any(path => changed.contains(path)) {
      invalidated.push(entry)
    }
  }
  // No state changes occur before all edits and constraints have been checked.
  self.files = checked
  for entry in invalidated {
    self.cache.remove(entry)
  }
  invalidated.sort()
  invalidated
}
