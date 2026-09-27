# SCSS：PreCSS 虚拟项目与浏览器会话扩展
仓库：https://github.com/zhengxin-coding/moonbit-scss
模块：zhengxin-coding/scss；本地 0.9.0；MIT，自身代码；第三方 Apache-2.0 见通知。
状态：本地复核；未发布、未提交赛事表单；审核结果未知。

## 任务与增量
PreCSS 已有 MoonBit SCSS/SASS/LESS 编译器；本项目不申报另一套通用 SCSS 编译器。
0.8.0 的纯 MoonBit ProjectCompiler 管理多入口虚拟文件、依赖及缺失候选观察，并按编辑失效有界完整入口缓存。
0.9.0 将该对象接入本地浏览器工作台的长活 Worker：编辑/新增/删除发送增量，入口切换复用会话。
重置/导入会替换会话；失败清除旧 CSS；取消、超时或 Worker 错误销毁会话，下次从当前快照重建。
该工作流只证明一个浏览器内存项目会话，不增加 Sass 语法，也不提供磁盘 watcher、写盘、并发服务或通用 Vite 集成。

## 上游与复现
固定依赖 conglinyizhi/precss@0.1.4；每次 SCSS 编译仍经其 core.Compiler 格式路由。
旧单入口适配器限制只适用于 pinned 0.1.4；当前 PreCSS main 有带 importer 上下文的 resolved API，不据旧限制宣称上游缺失。
运行 `moon build --target js`，刷新 `web/precss-engine.mjs` 后打开 `start-review.ps1` 打印的本地 `/web/` 页面。
`evidence/browser-session-20260927` 记录实际浏览器 UI 的多入口缓存、局部失效、歧义失败、删除与恢复；旧 28 步独立 Dart Sass 对照仍在 `evidence/project-20260927`。
输入为可复现的原创虚拟文件，不代表客户迁移；没有已确认采用方或上游背书。

## 边界
核心缓存整入口结果，不做 AST/模块增量求值；输入需由调用者提供，浏览器页面不读写用户工程目录。
Dart Sass CLI 与 Vite 已覆盖常见文件系统多入口构建和 Sass/HMR；本扩展的有限差异是 MoonBit 虚拟项目状态可供定制 JS/Wasm 宿主复用。
是否值得独立参赛仍取决于评审；不宣称创新语法、行业空白、完整兼容、生产用户或通过赛事。