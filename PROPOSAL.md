# SCSS 模块、颜色与选择器编译工作流

本地申报候选材料，2026-09-22；模块 `zhengxin-coding/scss`，版本 `0.6.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

把包含共享变量/函数、@use/@forward 和常用选择器扩展的多文件样式项目编译为 CSS，供 MoonBit 构建工具或浏览器项目编辑器使用。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[conglinyizhi/precss；lkdrt/palette_forge 为相邻工具](https://github.com/conglinyizhi/precss)。precss 已有自己的 SCSS/SASS/LESS 引擎及 SSR 应用，不是只包装外部 Sass。其已查文档不支持 @use/@forward、@extend 和完整颜色/数学；本项目实际增量在有限模块语义、常用 @extend/@at-root 和颜色/单位，而非首个 SCSS 编译器。

MoonBit 实现解析、类型化值/单位、模块及颜色/选择器语义；Node 提供受限项目文件读取，浏览器负责编辑与取消。

- [conglinyizhi/precss 固定提交](https://github.com/conglinyizhi/precss/tree/1159178e8bf6eb2d9a4a1ab7c317048c36dcae1d)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/test-modules.mjs
node tools/test-selectors.mjs
```

本轮直接执行 Dart Sass1.104.0：98 个模块场景和 70 个选择器场景一致；对应输入与脚本均保留。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

只是常用 Sass 子集；选择器扩展、色彩空间、导入器、模块配置和语言完整性都有限制，不能称完整 Dart Sass 替代。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
