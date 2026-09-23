# 在 precss 编译门面中处理 SCSS 模块项目

按 README 构建后运行 node examples/run-precss-project.mjs。输入为 examples/precss-project.json 的原创合成项目：styles/main.scss 使用 theme/_index.scss 转发的 tokens，配置 gap=8px，再调用模块 mixin。

同一个真实上游 Compiler 输出主项目 .panel 的 8px padding 和 .panel .title 的 4px margin；附加 CSS 原样保留，LESS 变量变成 3px padding，缩进 SASS 变成 blue 声明。这三种格式仍来自上游，脚本对内容作断言。

这说明已有 precss 的调度/格式体系可与本项目的有限模块编译组合，不证明真实用户迁移、全语言兼容或上游背书。单项目引擎绑定入口，不能通过 compile_file/compile_many 猜测来源路径；实际调用采用显式 Scss 源码入口。

node tools/compare-precss.mjs 使用固定 precss 和 Dart Sass 版本实跑六个选择案例；双方结果全部保存，不把原引擎的共同能力隐去。原独立多文件 CLI 仍可运行 node tools/cli.mjs --project examples/use-case --entry main.scss。
