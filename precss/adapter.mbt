///| A precss 0.1.4 Engine for one immutable virtual SCSS project. Register it

///| before the builtin SCSS engine and use compile_with_format(..., Scss) or

///| compile_input(SourceWithFormat(..., Scss)) with the bound entry's source.

///| A new project or source revision needs a new engine. Only Scss is claimed.

///|

///| precss's compile_imports callback has no originating filename. Its file and

///| compile_many APIs are deliberately rejected, so two identical source files

///|
/// in different directories cannot silently resolve against the wrong entry.
pub fn project_engine(
  entry : String,
  files : Map[String, String],
  on_diagnostic? : (String) -> Unit = _ => (),
) -> @core.Engine raise @core.CompileError {
  if files.is_empty() || files.length() > 256 {
    raise @core.EngineFailed(
      engine="moonbit-scss-project",
      message="virtual file count limit",
    )
  }
  let source = match files.get(entry) {
    Some(source) => source
    None =>
      raise @core.EngineFailed(
        engine="moonbit-scss-project",
        message="entry must be an exact key in the supplied virtual files",
      )
  }
  let snapshot = files.copy()
  @core.Engine::new(
    name=() => "moonbit-scss-project",
    supports=format => format == @core.Scss,
    compile=input => {
      if input != source {
        raise @core.EngineFailed(
          engine="moonbit-scss-project",
          message="source differs from bound entry; construct a new project engine",
        )
      }
      let result = @scss.compile_files(entry, snapshot) catch {
        error =>
          raise @core.EngineFailed(
            engine="moonbit-scss-project",
            message=Repr(error).to_string(),
          )
      }
      for diagnostic in result.diagnostics {
        on_diagnostic(diagnostic)
      }
      result.css
    },
    compile_imports=(_source, _read) => {
      raise @core.UnsupportedSyntax(
        "project engine needs an explicit bound entry; use compile_project or compile_with_format, not compile_file/compile_many",
      )
    },
  )
}

///| Convenience path that actually routes through the upstream Compiler.

///|
/// For loaded_files metadata use the core scss.compile_files API directly.
pub fn compile_project(
  entry : String,
  files : Map[String, String],
  on_diagnostic? : (String) -> Unit = _ => (),
) -> String raise @core.CompileError {
  let engine = project_engine(entry, files, on_diagnostic~)
  @core.Compiler::new([engine]).compile_with_format(files[entry], @core.Scss)
}
