> 0.6：新增常用 `@extend` / `@at-root`，详见 [范围与验证](SELECTORS.md)。下文旧轮次证据保留原日期。

# SCSS 工作台

MoonBit 本地版 0.5.0：常用 RGB/HSL 颜色、透明度、混色和颜色调整；类型化值与单位运算、用户函数、流程控制、SCSS 文件模块，以及可取消的浏览器项目编辑器。固定 Dart Sass 1.104.0 的 808 个原创场景全部匹配；这是一项兼容性增量，尚未达到完整 Sass 成熟度。

[本轮颜色范围与示例](COLORS.md)。本轮同时修复模块改名后的命令包引用；常见功能收尾后转下一项目。

## 使用

```powershell
./start-review.ps1
# 打开 http://127.0.0.1:8799/web/
node tools/cli.mjs --project examples/modules --entry main.scss --json
node tools/cli.mjs --input '.a { width: (2px * 3); }'
node tools/cli.mjs --project-json --file project.json --json
```

浏览器可编辑多个文件、切换入口、添加/移除文件、导入/导出项目 JSON、下载 CSS。编译在独立 Worker 中执行，可取消，5 秒超时后终止。页面不向远端发送源码。重新载入会恢复示例，需保留的修改请导出。

`--project DIRECTORY` 明确指定扫描根目录。CLI 只读取其中的 SCSS，跳过 .git、node_modules、_build、target，拒绝符号链接/目录联接。单文件模式保留原有参数、文件与标准输入行为；文件模块需使用项目模式。退出码：0 成功、2 编译拒绝、1 宿主/参数错误。

## MoonBit API

```moonbit
let result = @scss.compile_files("main.scss", Map([
  ("main.scss", "@use 'tokens';.card{padding:tokens.$gap}"),
  ("_tokens.scss", "$gap:4px !default;"),
]))
println(result.css)
```

`compile(source)` 返回 CSS；`compile_files(entry, files)` 返回 CSS、依赖先于入口的 `loaded_files` 和独立 `diagnostics`。核心只读取传入的虚拟文件映射，不访问磁盘或网络。路径区分大小写，私有成员不能跨模块访问。

## 构建与核验

```powershell
npm ci --ignore-scripts
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe -WithOracle
node tools/benchmark-semantics.mjs
python tools/check-proof.py
```

830 项公开 API 回归在 JS 和 Wasm-GC 均通过，其中 808 项期望来自固定官方编译器；13 项真实文件/CLI/协议检查、814 项求值边界输入和原有 307 项异常输入通过。浏览器人工交互记录、下载结果和同机小型性能对照见 evidence。具体口径见 [TESTING.md](TESTING.md)，缺项见 [FEATURES.md](FEATURES.md)。

## 来源与本地边界

按 [Sass 官方文档](https://sass-lang.com/documentation/)独立实现，未复制编译器源码。实现与原创场景采用 MIT；Dart Sass 仅为开发对照依赖。下载发行包的完整性匹配 lockfile，36 个安装文件逐一匹配原包，见 [参考指纹](evidence/reference-provenance.json)。

这是独立主仓库，旧批次目录和 ZIP 是历史快照。本轮仅本地提交和同提交 ZIP/bundle；未上传、发布或提交比赛，现有远程配置保持原状。其他项目验证另列。远端 CI 仍未执行。
