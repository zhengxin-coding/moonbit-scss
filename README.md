# SCSS：PreCSS 虚拟项目与浏览器会话扩展

**本项目仓库：[https://github.com/zhengxin-coding/moonbit-scss](https://github.com/zhengxin-coding/moonbit-scss)**

模块 `zhengxin-coding/scss`，本地 **0.9.0**。自身代码 MIT；包含上游代码的发布内容同时保留 Apache-2.0，详见 [第三方说明](THIRD-PARTY-NOTICES.md)。本轮仅本地修订，未推送或发布。

## 使用已有编译门面，扩展模块项目

[precss](https://github.com/conglinyizhi/precss) 已有 MoonBit 实现的 SCSS/SASS/LESS 引擎和 CSS 编译门面。本项目基础解析/编译能力与它重叠，不宣称首个 SCSS 引擎，也不把上游说成外部 Sass 包装器。

0.7.0 直接依赖 `conglinyizhi/precss@0.1.4`。新公开包 `zhengxin-coding/scss/precss` 提供 `project_engine`，把已有的虚拟项目 @use/@forward、配置、相对模块和有限 @extend 能力接到上游 `core.Engine` 契约。上游 Compiler 负责路由，SCSS 项目走扩展；CSS、LESS、缩进 SASS 可继续使用上游引擎。

这是面向已有 precss 调用方的可选扩展，不是完整 Sass 替代，也不是已经被上游合并或认可。原有独立 `compile`/`compile_files` API 保留；底层 Sass 规则和算法不计为新发明。

0.8.0 增加可复用多入口 `ProjectCompiler`，有直接依赖图、候选路径观察、原子文件编辑和有界入口缓存。0.9.0 将它接入浏览器工作台的长活 Worker：入口切换复用同一会话，编辑/添加/删除作为文件增量；重置或导入替换会话，失败清除旧 CSS，取消/超时销毁会话后下次全量重建。详见 [PROJECT-GRAPH.md](PROJECT-GRAPH.md)。这只服务于单个内存项目编辑会话，不提供磁盘 watcher 或一般构建器集成。

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

旧 `project_engine` **一份引擎绑定一个入口和虚拟文件快照。** 修改源码后创建新引擎，不依靠内容自动探测。precss 0.1.4 的文件回调不携带入口路径，扩展因此明确拒绝 compile_file/compile_many/compile_imports，避免相同源码在不同目录下解析到错误模块；不能把它写成这些 API 的通用替代。详见 [接入示例和限制](PRECSS-INTEGRATION.md)。

编译错误映射为上游 CompileError；on_diagnostic 回调传递 warn/debug。上游字符串接口无法返回 loaded_files；新ProjectCompiler的明确入口API保留CSS之外的加载文件、依赖图和失效信息，原compile_files仍可用。

## 证据与剩余边界

[同输入对照](PRECSS-INTEGRATION.md)使用真实 precss 0.1.4 和 Dart Sass 1.104.0，包含共享基础语法、三个增量场景及两个拒绝场景。六个选定案例不构成整个 Sass 的兼容率。新适配器另外检查快照、目录歧义、错误类型、诊断和显式格式路由。

本库仍是 Sass 子集，模块配置、选择器扩展、颜色、导入器等边界沿用 [完整用法与模块范围](README-BEFORE-VALUE-REWORK.md)、[选择器说明](SELECTORS.md)、[颜色说明](COLORS.md)。浏览器闭环输入是原创合成项目；暂无独立使用方、生产接入或上游接受证明。

[修订申报书](PROPOSAL.md)、[同类反馈回应](REVIEW-RESPONSE.md)、[使用任务](USE-CASE.md)、[验证命令](TESTING.md)。历史完整用法在 README-BEFORE-VALUE-REWORK.md；不以旧记录冒充本轮重跑。复申认定由组委会作出。

CI固定的编译器与标准库版本见 [TOOLCHAIN.md](TOOLCHAIN.md)；升级时需同时核对生成产物。

## 本地验收与公开交付（2026-09-28）

核心实现使用 MoonBit；[固定编译器](.moonbit-version)为 `moonc 0.10.14+7d59c7ec9`。先按本文安装宿主依赖、运行 `moon update`，再从仓库根目录执行以下与 [CI](.github/workflows/ci.yml) 对齐的检查；可运行任务和适用边界见本文前面的示例与说明。

```sh
moon check --deny-warn
moon test --target wasm-gc --deny-warn
moon test --target js --deny-warn
moon build --target js --deny-warn
moon package
```

跨平台复核（2026-09-28，本地 Ubuntu-D 26.04 WSL2）：从当时的源码归档全新解包，固定 `moonc 0.10.14+7d59c7ec9` 下通过 `moon update`、`moon fmt --check`、`moon info`、严格检查、JS/Wasm-GC 测试及 JS release 构建；Node 24.21.0 跑通本仓一条宿主入口。本次补记仅修改文档，代码与 CI 未变；复核日志在本地交接包中，公开提交后的 GitHub Actions 仍须单独核对。

本地核验：JS/Wasm-GC 测试、虚拟项目/浏览器会话示例，以及 814 个输入和 539 个预期拒绝用例通过。 `moon package` 已完成离线打包预检，它不等于已发布到 Mooncakes。

公开交付（2026-09-28 核对）：当日 [https://github.com/zhengxin-coding/moonbit-scss](https://github.com/zhengxin-coding/moonbit-scss) 可匿名读取 Git HEAD，Mooncakes 在线版本为 `0.4.0`；此处源码版本 `0.9.0` 仍需由申报人同步到公开仓库，检查新提交的 GitHub Actions，再由对应账号发布 Mooncakes 新版。相关远端 CI 与赛事结果仍需以实际记录核对。项目许可见 [LICENSE](LICENSE)；如使用第三方材料，其来源和许可见仓内相应说明。
