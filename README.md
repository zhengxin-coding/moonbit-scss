# SCSS 子集编译器

MoonBit 本地候选版 0.3.0。变量、嵌套选择器、父选择器与作用域。

## 快速试用

已附真实 MoonBit 编译的浏览器引擎。需要 Python 3：

```powershell
./start-review.ps1
```

浏览器打开 http://127.0.0.1:8799/web/ 。也可以从第二批合集审查页直接运行。

## 构建与测试

MoonBit 工具链与 Node.js 安装好后，在此目录运行：

```powershell
./verify.ps1
# 或指定编译器
./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe
```

脚本检查源码、在 Wasm-GC 和 JS 跑测试、构建浏览器引擎并运行示例。直接执行命令行示例：`moon run cmd/main`。`pkg.generated.mbti` 是生成的公共 API。

## 已实现范围

词法变量与 !default/!global、嵌套选择器、独立父选择器组合、伪类和属性选择器、mixin 默认/关键字/可变参数、调用方作用域的 @content、变量/字符串插值、嵌套属性、media/supports/layer/font-face。

## 当前边界

尚未实现模块和文件导入、完整表达式与算术、内置/用户函数、流程控制、@extend、完整 at-rule 与选择器语义、注释及自定义属性空白的完整保留；不是 Dart Sass 全兼容实现。

## 来源与许可证

按[公开规格/参考项目](https://sass-lang.com/documentation/style-rules/)重新实现，没有复制上游代码或大规模词库。源码采用 MIT；原始测试输入为本地新编写。

[查重](DUPLICATION.md)只描述本轮检索证据。`localreview` 是本地命名空间，正式发布前需替换为申请人的命名空间。

## 下一步

保留候选：先补边界和上游兼容范围，再决定是否申报。

所有文件仅在本地，未创建远程仓库、上传、发布包或提交比赛。

## 独立仓库工作流

本目录是该项目后续开发的唯一主仓库，旧批次目录及 ZIP 为历史审查快照。没有 Git remote，没有共享构建目录，没有上级 moon.work。

真实 CLI 支持输入参数、文件和标准输入：

```powershell
node tools/cli.mjs --help
node tools/cli.mjs --file sample.txt --json
```

需要安装 MoonBit 后传 `-MoonPath` 或将 moon 加入 PATH；不依赖工作区之外的私有脚本。详见 [TESTING.md](TESTING.md) 和 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 独立对照验证

固定 Dart Sass 1.104.0，对 124 个本地原创场景比较成功/错误结果与规范化 CSS。

```powershell
npm ci --ignore-scripts
./verify.ps1 -WithOracle
```

对照覆盖不等于全 Sass 兼容。结果见 evidence，完整边界见 [FEATURES.md](FEATURES.md)。
