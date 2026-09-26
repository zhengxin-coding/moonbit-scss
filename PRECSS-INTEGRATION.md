# 与 precss 0.1.4 的真实接入

本模块依赖 [conglinyizhi/precss](https://github.com/conglinyizhi/precss) 0.1.4，实际调用其 core.Compiler 和 core.Engine。上游已有自身的 SCSS/SASS/LESS 编译器。旧入口提供绑定虚拟项目的 SCSS Engine；0.8.0新增显式多入口ProjectCompiler及依赖图（见PROJECT-GRAPH.md）；代码在 [precss/adapter.mbt](precss/adapter.mbt)，公共接口由 [moon info 生成](precss/pkg.generated.mbti)。

## MoonBit 调用

在当前 checkout 内的消费包中导入：

```mbt
import {
  "zhengxin-coding/scss/precss" @adapter,
  "conglinyizhi/precss/core",
}
```

```mbt
let files = {
  "styles/main.scss": "@use '../tokens'; .x {width:tokens.$gap}",
  "_tokens.scss": "$gap:4px;",
}
let engine = @adapter.project_engine("styles/main.scss", files)
let compiler = @core.Compiler::new([engine])
let css = compiler.compile_with_format(files["styles/main.scss"], @core.Scss)
```

示例主程序 [cmd/precss](cmd/precss/main.mbt) 还注册上游 css_engine、less_engine、sass_engine，通过同一 Compiler 路由其他格式。本库引擎 supports 只声明 Scss。上游 root 便捷门面的默认引擎列表不会自动替换，需使用公开 core.Compiler 显式注入。

## 必须遵守的边界

- entry 必须是传入 Map 的确切键，使用相对虚拟路径；外部文件、网络和磁盘读取不由此包承担。
- 引擎复制 Map，后续外部修改不影响它。源码不同会拒绝，修改后需重建引擎；明确绑定入口，不靠源文本反推路径。
- 只使用 compile_with_format(..., Scss) 或 compile_input(SourceWithFormat(..., Scss))，避免自动检测将裸嵌套误当 CSS。
- **compile_file/compile_many/compile_imports 明确拒绝**。上游 compile_imports 回调仅传源码与 reader，不传入口路径；即使两个目录的入口文本相同，也不能安全推导相对 @use 的目录。没有冒充完全适配这些接口。
- 独立便捷函数 compile_project 也经过上游 Compiler，不只是换名称调用旧 API。
- 本库 ParseError 转成上游 EngineFailed，保留错误内容和引擎名；on_diagnostic 转发 warn/debug。CSS-only 契约不含 loaded_files，若需要使用原 compile_files。
- 范围沿用原子集及资源上限，没有新增 Sass 全语言兼容承诺。

## 真实同输入对照

按 README 构建后，node tools/compare-precss.mjs 调用未修改的上游引擎、扩展引擎和独立 Dart Sass 1.104.0。Dart Sass 从实际临时目录读文件，用自身 resolver；CSS 比较经过其 CSS 压缩器，错误案例只比较是否拒绝。

| 原创输入 | 上游 precss 0.1.4 | 接入扩展 | Dart Sass 参考 |
|---|---|---|---|
| 变量+嵌套 | 支持 | 支持 | 三方 CSS 一致 |
| 相对 @use + @forward + with 配置 | 以 Undefined variable: $gap 拒绝 | 支持该例 | CSS 一致 |
| placeholder @extend | 以 expected "}" 拒绝 | 支持该例 | CSS 一致 |
| 相对模块菱形依赖、只输出一次 | 以 Undefined variable: $n 拒绝 | 支持该例 | CSS 一致 |
| 同名文件与 partial 歧义 | 因 $n 未定义拒绝，不是歧义检测证据 | 按模块解析规则拒绝 | 拒绝 |
| 私有模块成员访问 | 因 $-secret 未定义拒绝，不是私有性检测证据 | 按私有成员规则拒绝 | 拒绝 |

[实际 JSON 报告](evidence/precss-integration-20260923/COMPARISON.json)包含全部输入、上游原始输出、双方错误、源码及编译产物哈希。不能以这六个特选案例推导上游全局兼容率或本库完全领先；SASS/LESS 实际仍复用上游。

扩展代码在本仓库维护，没有修改上游源码或替对方发布版本，没有上游合并/背书或实际用户证明。基础编译能力重叠依旧存在，参赛差异限定为可使用的模块项目扩展和明确契约。
