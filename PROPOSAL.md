# SCSS：precss 的虚拟模块项目扩展
本项目仓库：https://github.com/zhengxin-coding/moonbit-scss
模块：zhengxin-coding/scss；本地0.8.0；自身MIT，上游Apache-2.0保留。
状态：本地修订，未推送、发布或提交表单，审核结果未知。

## 任务与已有工作
precss已有MoonBit SCSS/SASS/LESS编译器和编译门面，基础编译与本库重叠；不宣称首个或生态空白。
任务是让其调用方接入支持相对模块、@use/@forward和配置的虚拟SCSS项目，并重复编译多个入口。
直接依赖conglinyizhi/precss@0.1.4，公开zhengxin-coding/scss/precss包的project_engine返回真实core.Engine，经过上游Compiler路由。
SCSS项目由本库编译，CSS/LESS/SASS留给上游；路由及其他格式能力不计为本项目新增贡献。

## 核心增量
0.8.0纯MoonBit ProjectCompiler按显式入口管理项目快照、依赖和加载元数据，原子应用编辑并使相关缓存失效。
观察不存在的候选文件，因此新增shadow或歧义模块也会失效；相同源码在不同目录、with配置按入口隔离。
缓存为有界完整入口结果，不声称增量AST或跨入口求值缓存。编译、路径和状态逻辑在MoonBit，Node只提供输入输出。
旧project_engine仍绑定一个入口；precss回调缺入口路径，因此明确拒绝该适配器的compile_file/compile_many路径。

## 复现与验证
按README构建后运行node examples/run-precss-project.mjs，实际组合gap=8px、相对@use/@forward与上游三种格式。
公开ProjectCompiler消费和编辑流程见PROJECT-GRAPH.md；接口核验快照、路径歧义、格式范围、错误类型及诊断。
未经修改的precss0.1.4和Dart Sass1.104.0已实跑6个共享/增量/拒绝案例；原始结果和依赖指纹见PRECSS-INTEGRATION。
另有28步编辑、19次编译逐次对照Dart Sass的CSS与loaded files，并核对缓存失效；不能把选定案例当完整兼容率。
更多核心、选择器及双后端回执见TESTING.md，各轮测试范围分开列明。

## 边界和交付
仍为Sass子集，完整导入器、复杂选择器、转义和色彩语义有限；没有完全替代Dart Sass、真实迁移或上游接受证明。
交付可复用MoonBit核心、实际上游接入、示例和独立证据；暂无确认使用方，不用包装或测试数量替代扩展价值。
团队同步公开版本、报名标题和附件后再申请评估；本地验证不代表远端CI或赛事通过。
