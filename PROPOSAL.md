# SCSS：precss 的模块项目引擎扩展 · 修订申报草稿

本项目仓库：https://github.com/zhengxin-coding/moonbit-scss
模块 / 本地版本：zhengxin-coding/scss / 0.7.0；自身 MIT，上游 Apache-2.0 保留。
状态：针对同类重叠风险的本地修订；未推送、未发布、未提交表单。

## 现有项目与任务
precss 已有 MoonBit SCSS/SASS/LESS 编译器及编译门面，本库基础编译与其重叠，不宣称首个实现或生态空白。
任务：让既有 precss 消费方在其 Compiler 路由中接入有 @use/@forward、配置和相对模块的虚拟 SCSS 项目。

## 已实现的扩展关系
moon.mod 直接依赖 conglinyizhi/precss@0.1.4，新增公开 zhengxin-coding/scss/precss 包。
project_engine 返回真实 core.Engine，经过上游 Compiler 路由，SCSS 项目由本库编译；CSS/LESS/SASS 留给上游引擎。
已有有限模块、选择器扩展、颜色/单位能力为本库贡献；上游路由和其他格式、Sass 规范与算法不计为本项目独创。
引擎复制项目快照，限定入口/源码，将错误映射为上游 CompileError，通过回调传递诊断。
示例实际配置 gap=8px，跨目录 @use/@forward 后生成 panel/title CSS，同时处理上游三种格式。
按 README 构建后运行 node examples/run-precss-project.mjs；Node 只提供输入/输出，数值及编译在 MoonBit。

## 可核验依据
以未修改 precss 0.1.4 和独立 Dart Sass 1.104.0 实跑六个共享、增量与拒绝案例，保留原始结果和源码指纹。
接口测试验证快照、相对路径歧义、格式范围、错误类型、诊断；详细命令及范围见 TESTING.md。
具体分工、接口和同输入差异见 PRECSS-INTEGRATION.md；不把六个选定案例称为完整兼容率或成熟度证明。

## 边界与后续
引擎绑定一个入口，需显式 Scss 格式；precss 回调缺入口路径，因此明确拒绝其 compile_file/compile_many 路径。
本库仍是 Sass 子集，不宣称完全替代 Dart Sass；完整导入器/选择器/色彩语义均有边界。
暂无真实使用方、生产迁移或上游接受证明；本次提供可复用扩展和材料纠正，不保证初审通过。
团队需合并代码后同步公开版本、报名标题和附件；本任务只交付本地材料。
