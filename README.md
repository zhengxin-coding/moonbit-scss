# SCSS：precss 的模块项目引擎扩展

**本项目仓库：[https://github.com/zhengxin-coding/moonbit-scss](https://github.com/zhengxin-coding/moonbit-scss)**

模块 `zhengxin-coding/scss`，本地 **0.7.0**。自身代码 MIT；包含上游代码的发布内容同时保留 Apache-2.0，详见 [第三方说明](THIRD-PARTY-NOTICES.md)。本轮仅本地修订，未推送或发布。

## 使用已有编译门面，扩展模块项目

[precss](https://github.com/conglinyizhi/precss) 已有 MoonBit 实现的 SCSS/SASS/LESS 引擎和 CSS 编译门面。本项目基础解析/编译能力与它重叠，不宣称首个 SCSS 引擎，也不把上游说成外部 Sass 包装器。

0.7.0 直接依赖 `conglinyizhi/precss@0.1.4`。新公开包 `zhengxin-coding/scss/precss` 提供 `project_engine`，把已有的虚拟项目 @use/@forward、配置、相对模块和有限 @extend 能力接到上游 `core.Engine` 契约。上游 Compiler 负责路由，SCSS 项目走扩展；CSS、LESS、缩进 SASS 可继续使用上游引擎。

这是面向已有 precss 调用方的可选扩展，不是完整 Sass 替代，也不是已经被上游合并或认可。原有独立 `compile`/`compile_files` API 保留；底层 Sass 规则和算法不计为新发明。

## 直接复现

需要 MoonBit、Node.js 24；首次构建会下载 Mooncakes 依赖。Dart Sass 仅用于独立对照。

```sh
moon build --target js
node -e "const f=require('node:fs');f.copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs');f.copyFileSync('_build/js/debug/build/cmd/precss/precss.js','web/precss-engine.mjs')"
node examples/run-precss-project.mjs
npm ci --ignore-scripts
node tools/compare-precss.mjs
```

示例由真正的 precss Compiler 处理：绑定 styles/main.scss，跨目录 @use、@forward 后配置 gap=8px，输出 panel 的 8px padding 和 title 的 4px margin；另外三段 CSS/LESS/SASS 仍由上游处理。输入是原创合成项目，不冒充真实用户迁移。

## 接入契约

导入本库 `/precss` 和 `conglinyizhi/precss/core`，创建 `project_engine(entry, files)`，把它放在 `Compiler::new` 引擎列表的 SCSS 位置。以入口源码调用 `compile_with_format(source, Scss)`，或 `compile_input(SourceWithFormat(source, Scss))`。只要 CSS 字符串可用，可直接调用便捷函数 `compile_project(entry, files)`；它内部也经过上游 Compiler。

**一份引擎绑定一个入口和虚拟文件快照。** 修改源码后创建新引擎，不依靠内容自动探测。precss 0.1.4 的文件回调不携带入口路径，扩展因此明确拒绝 compile_file/compile_many/compile_imports，避免相同源码在不同目录下解析到错误模块；不能把它写成这些 API 的通用替代。详见 [接入示例和限制](PRECSS-INTEGRATION.md)。

编译错误映射为上游 CompileError；on_diagnostic 回调传递 warn/debug。上游字符串接口无法返回 loaded_files，需要该元数据时仍用根包 compile_files。

## 证据与剩余边界

[同输入对照](PRECSS-INTEGRATION.md)使用真实 precss 0.1.4 和 Dart Sass 1.104.0，包含共享基础语法、三个增量场景及两个拒绝场景。六个选定案例不构成整个 Sass 的兼容率。新适配器另外检查快照、目录歧义、错误类型、诊断和显式格式路由。

本库仍是 Sass 子集，模块配置、选择器扩展、颜色、导入器等边界沿用 [完整用法与模块范围](README-BEFORE-VALUE-REWORK.md)、[选择器说明](SELECTORS.md)、[颜色说明](COLORS.md)。暂无独立使用方、生产接入或上游接受证明。

[修订申报书](PROPOSAL.md)、[同类反馈回应](REVIEW-RESPONSE.md)、[使用任务](USE-CASE.md)、[验证命令](TESTING.md)。历史完整用法在 README-BEFORE-VALUE-REWORK.md；不以旧记录冒充本轮重跑。复申认定由组委会作出。
