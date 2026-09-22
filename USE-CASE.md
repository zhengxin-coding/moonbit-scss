# 多文件模块样式编译

把包含共享变量/函数、@use/@forward 和常用选择器扩展的多文件样式项目编译为 CSS，供 MoonBit 构建工具或浏览器项目编辑器使用。

## 输入、操作、输出

原创两文件 SCSS 项目；模块能力是与既有 precss 的候选差异，不是首个 SCSS 引擎。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/cli.mjs --project examples/use-case --entry main.scss
```

观察：输出 .panel 的 8px padding 和 .panel .title 的 4px margin。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

已有多文件 @use/@forward 及选择器扩展输入的 MoonBit 工具可评估；precss 已提供自己的预处理引擎和 SSR 用途。

precss 已有自己的 SCSS/SASS/LESS 引擎及 SSR 应用，不是只包装外部 Sass。其已查文档不支持 @use/@forward、@extend 和完整颜色/数学；本项目实际增量在有限模块语义、常用 @extend/@at-root 和颜色/单位，而非首个 SCSS 编译器。

## 不能由样例推出的结论

只是常用 Sass 子集；选择器扩展、色彩空间、导入器、模块配置和语言完整性都有限制，不能称完整 Dart Sass 替代。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
