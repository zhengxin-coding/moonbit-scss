# PreCSS 扩展：MoonBit 虚拟 SCSS 模块项目与编辑会话

项目仓库：https://github.com/zhengxin-coding/moonbit-scss。模块 `zhengxin-coding/scss@0.9.0`；自有代码 MIT，上游 Apache-2.0 随附。申报范围为基于现有 PreCSS 的项目扩展。

## 使用任务

浏览器内的代码编辑器或 MoonBit 工具可能只有一组虚拟文件，而没有磁盘工程目录。多个样式入口共享 tokens、partial 和模块，编辑、删除或新增一个文件时，需要明确哪些入口失效、是否仍可显示旧 CSS，以及何时销毁失败会话。本项目把这些状态放在可复用的 MoonBit `ProjectCompiler` 中，提供可运行浏览器消费者。

## 与已有编译器的扩展关系

[conglinyizhi/precss](https://github.com/conglinyizhi/precss) 已实现 SCSS/SASS/LESS 编译门面。本库实际依赖 0.1.4，通过其 `core.Compiler` 和 `core.Engine` 路由；扩展 SCSS 的限定 `@use/@forward`、模块配置、菱形依赖和部分 `@extend`，CSS/LESS/SASS 继续使用上游引擎。不是上游分支或已获认可的插件，也不把基础 SCSS 编译再次申报为独有成果。

当前上游 main 已提供带 importer 上下文的 resolved API，因此“能传相对路径”不构成差异。这里保留的独立范围是虚拟文件项目、模块子域、候选路径观察、多入口有界缓存及会话生命周期。Dart Sass 和 Vite 已解决成熟文件系统构建/HMR，本项目不与这些能力作虚假优劣比较。

## 已完成的任务闭环

按照 README 构建并刷新浏览器引擎，运行 `start-review.ps1` 后打开本地 `/web/`。长活 Worker 复用同一编译会话；编辑/新增/删除发送文件增量，切换入口复用缓存。歧义或编译失败清除旧 CSS；取消、超时或 Worker 错误销毁会话，下一次按当前快照重建。核心公共 API 同时供 JS/Wasm-GC 使用。

六个选定输入与未修改 PreCSS 0.1.4、Dart Sass 1.104.0 的真实对照见 [PRECSS-INTEGRATION](PRECSS-INTEGRATION.md)；28 步项目变更对照、浏览器实际操作回执分别保存于证据目录。它们证明已列模块及编辑路径，不能外推完整 Sass 兼容率。

核心缓存完整入口结果，不做 AST 增量求值；页面处理内存项目，不读写用户磁盘，也不提供通用 watcher 或 Vite 插件。尚无确认的编辑器接入方。AI 生成的样式同样需要可重复编译及明确失败状态，但是否值得独立交付仍取决于实际宿主对该接口的需要。

**公开状态（2026-09-29 核对）**：GitHub [公开仓库](https://github.com/zhengxin-coding/moonbit-scss)、[Mooncakes 0.9.0](https://mooncakes.io/docs/zhengxin-coding/scss@0.9.0) 已可访问；[CI 成功记录](https://github.com/zhengxin-coding/moonbit-scss/actions/runs/36436167541) 对应 `b6e4a8877bf3`。本次材料更新尚未推送；该远端 CI 对应所列公开提交。报名表一致性及赛事审核结果尚未核实。
