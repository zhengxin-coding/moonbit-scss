# SCSS 模块、颜色与选择器编译工作流

**本项目仓库：[https://github.com/zhengxin-coding/moonbit-scss](https://github.com/zhengxin-coding/moonbit-scss)**

模块 `zhengxin-coding/scss`，本地版本 **0.6.0**，MIT。当前评审状态：**条件复审**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

## 解决什么任务

把包含共享变量/函数、@use/@forward 和常用选择器扩展的多文件样式项目编译为 CSS，供 MoonBit 构建工具或浏览器项目编辑器使用。

已有多文件 @use/@forward 及选择器扩展输入的 MoonBit 工具可评估；precss 已提供自己的预处理引擎和 SSR 用途。

## 直接复现

安装 MoonBit 和 Node.js 24，在本仓库根目录运行：

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-use-case.mjs
```

流程：**多文件模块样式编译**。运行器创建新的系统临时目录，保留每一步的 stdout/stderr、产物及 `report.json`，打印实际目录；重复运行不会覆盖之前产物。它只执行仓库内的本地样例，不连接公网或发送消息。`report.json` 的 `expected` 是应观察的结果，实际结果在各步输出中；成功退出不替代内容核对。

输入性质：原创两文件 SCSS 项目；模块能力是与既有 precss 的候选差异，不是首个 SCSS 引擎。

应观察：输出 .panel 的 8px padding 和 .panel .title 的 4px margin。

具体命令和输入路径见 [使用任务](USE-CASE.md) 与 [机器可读流程](examples/use-case.json)。只把这个脚本当复现入口，不把通用运行器计作核心技术贡献。

## 实现与已有项目的关系

MoonBit 实现解析、类型化值/单位、模块及颜色/选择器语义；Node 提供受限项目文件读取，浏览器负责编辑与取消。

precss 已有自己的 SCSS/SASS/LESS 引擎及 SSR 应用，不是只包装外部 Sass。其已查文档不支持 @use/@forward、@extend 和完整颜色/数学；本项目实际增量在有限模块语义、常用 @extend/@at-root 和颜色/单位，而非首个 SCSS 编译器。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"zhengxin-coding/scss"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。是否已发布到 Mooncakes 需另核实，本文不把 `moon add` 的下载成功作为已完成事项。

## 验证与边界

前一轮工程验证直接执行 Dart Sass1.104.0：98 个模块场景和 70 个选择器场景一致；对应输入与脚本均保留。

[上一轮工程验证](evidence/innovation-review-20260922/results.json) 与 [本轮最小任务回执](evidence/value-rework-20260922/use-case.json) 分开。历史参考版本、golden 重放、本机 peer、真实第三方服务端和本次样例是不同证据，不能合并成“全部生产验证”。

常规核心检查可运行 `moon check --target js`、`moon test --target js`、`moon test --target wasm-gc`。专项命令：

```sh
node tools/test-modules.mjs
node tools/test-selectors.mjs
```

专项所需的参考环境和历史版本见原使用说明及 TESTING 文档；本轮回执只记录实际执行项，不声称上面所有参考服务在任意环境即装即跑。

只是常用 Sass 子集；选择器扩展、色彩空间、导入器、模块配置和语言完整性都有限制，不能称完整 Dart Sass 替代。

## 复审材料状态

不应把子集编译器说成完整 Sass 替代；真实项目兼容需求仍需更多样本。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `3da091ff01383478def7318d54fb8345fd57eaa0`。本轮源码修订仅在本地，尚未推送；此记录不证明当时报名表中的地址正确，也不证明新修订已上线。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。
