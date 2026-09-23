# SCSS 与已有项目的关系 · 2026-09-23

已有 [conglinyizhi/precss](https://github.com/conglinyizhi/precss) 实现 SCSS/SASS/LESS 编译及门面，本库变量/嵌套等基础功能重叠，不能说上游只是外部工具包装器。相邻 palette_forge 工具及历史检索范围保存在 evidence/innovation-review-20260922/。

本次实际获取 Mooncakes precss 0.1.4，读取 core.Engine/core.Compiler 接口并直接依赖。新增本库 /precss 公共包，返回上游 Engine 类型，将本库的虚拟模块项目接入其路由。其他格式继续调用上游引擎。未修改上游源码，也不是上游已认可的合并。

六个选定输入同时运行上游、扩展及 Dart Sass 1.104.0；共同能力和差异见 [实测与契约](PRECSS-INTEGRATION.md)。差异限定于该版本和这些输入，不能用关键词未命中证明生态空白，或用选择性案例宣称全面领先。

引擎绑定一个项目入口，明确拒绝不携带入口路径的 compile_imports/file/many 调用，避免相对导入误解析。暂无真实用户证据。新关系是可执行的扩展，仍需评委判断是否具有足够参赛价值。

本轮未检索完整非公开报名表或私有代码。既有 Sass 规则、算法和上游基础能力不计为独创；许可证见 THIRD-PARTY-NOTICES.md。
