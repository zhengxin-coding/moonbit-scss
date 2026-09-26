///|
/// Explicit entry paths retain the context missing from precss 0.1.4's
/// compile_imports(source, reader) callback. Upstream Compiler still routes each
/// SCSS compile; this does not claim to implement its pathless compile_many API.
pub struct ProjectCompiler {
  priv project : @scss.Project
}

///|
pub fn ProjectCompiler::new(
  files : Map[String, String],
) -> ProjectCompiler raise @core.CompileError {
  { project: @scss.Project::new(files), } catch {
    error =>
      raise @core.EngineFailed(
        engine="moonbit-scss-project",
        message=Repr(error).to_string(),
      )
  }
}

///|
pub fn ProjectCompiler::apply(
  self : ProjectCompiler,
  updates : Map[String, String?],
) -> Array[String] raise @core.CompileError {
  self.project.apply(updates) catch {
    error =>
      raise @core.EngineFailed(
        engine="moonbit-scss-project",
        message=Repr(error).to_string(),
      )
  }
}

///|
pub fn ProjectCompiler::compile(
  self : ProjectCompiler,
  entry : String,
  on_diagnostic? : (String) -> Unit = _ => (),
) -> @scss.ProjectOutput raise @core.CompileError {
  let source = self.project.source(entry) catch {
    error =>
      raise @core.EngineFailed(
        engine="moonbit-scss-project",
        message=Repr(error).to_string(),
      )
  }
  let retained : Ref[@scss.ProjectOutput?] = Ref(None)
  let engine = @core.Engine::new(
    name=() => "moonbit-scss-project",
    supports=format => format == @core.Scss,
    compile=_source => {
      let result = self.project.compile(entry) catch {
        error =>
          raise @core.EngineFailed(
            engine="moonbit-scss-project",
            message=Repr(error).to_string(),
          )
      }
      retained.val = Some(result)
      result.compilation.css
    },
    compile_imports=(_source, _read) => {
      raise @core.UnsupportedSyntax(
        "project compiler requires an explicit entry path",
      )
    },
  )
  ignore(@core.Compiler::new([engine]).compile_with_format(source, @core.Scss))
  let result = match retained.val {
    Some(result) => result
    None =>
      raise @core.EngineFailed(
        engine="moonbit-scss-project",
        message="upstream did not invoke project engine",
      )
  }
  for diagnostic in result.compilation.diagnostics {
    on_diagnostic(diagnostic)
  }
  result
}
