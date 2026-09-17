# 功能与兼容范围

0.4.0 增量通过 567 个固定 Dart Sass 1.104.0 场景，范围有限，不能据此判定完整追平。

| 范围 | 已实现 |
|---|---|
| 值 | 带单位数值、quoted/unquoted 字符串、bool/null、列表/映射；单位换算、复合单位和 CSS 序列化 |
| 求值 | 优先级、括号、算术/比较、短路 and/or、not、惰性旧式 if；声明中保留字面 slash，变量和函数中求除法 |
| 函数/流程 | 词法闭包、默认/关键字/rest 参数、函数调用时列表/映射展开、return、递归；if/else、双向 for、each 解构、while；warn/debug/error |
| 标准模块子集 | math、list、map、string、meta 的常用函数；别名；math 常量 pi/e/epsilon/安全整数 |
| SCSS 文件模块 | 相对路径、partial、index；use 别名或文件模块 as *；forward、前缀、show/hide；配置与 forward !default；私有成员、共享变量、一次 CSS 输出、循环/歧义错误 |
| 原有 CSS | mixin 默认/关键字/rest、调用方 @content、插值、嵌套属性、复杂父选择器组合、media/supports/layer/font-face |
| 宿主 | 纯虚拟文件 API、显式目录 CLI、独立 Worker、项目编辑/导入导出/下载、取消、超时、移动布局 |

## 标准函数的明确范围

- math：div、abs、ceil、floor、round、percentage、unit、is-unitless、compatible、pow、sqrt、min、max。
- list：length、nth、set-nth、index、append、join、separator、is-bracketed、slash。
- map：get、has-key、keys、values、merge、remove；尚非完整递归路径 API。
- string：quote、unquote、length、slice、index、insert、to-upper-case、to-lower-case。
- meta：type-of、inspect、variable-exists、global-variable-exists、function-exists、mixin-exists；不含完整反射/模块参数行为。
- 对应的已实现旧式全局函数仍可调用。函数存在性仅覆盖当前实现集合。

## 尚未完成

完整颜色类型、颜色空间和函数；calc/clamp 的 Sass 化简及现代计算语法；完整标准库、标准模块 as * / forward、动态函数/混入值；更完整的字符串转义、数值精度与 CSS 保留；mixin spread 与带参数内容块；@extend、@at-root、全部 at-rule/选择器；旧式 @import、.sass 缩进语法、CSS 模块、pkg/load-path/custom importer、源码映射、watch/incremental 编译和插件 API。

部分尚缺语义会作为普通 CSS 文本或函数保留，不保证一律提前拒绝。例：颜色当前并非完整类型，meta.type-of(red) 与完整 Sass 不同；calc(1px + 2px) 尚不化简。这些缺口不在已通过场景中冒充已实现。

模块系统也未穷尽所有配置/重导出/私有名组合。对照中的错误只比较接受/拒绝，不比较报错措辞和源位置。未运行官方全量 sass-spec；同机微基准不证明完整性能追平。

## 资源限制

核心限制按 UTF-16 码元计：单源 100,000、项目 2,000,000、CSS/字符串序列化 1,000,000；最多 256 文件、32 层模块依赖、256 个选择器组合、每个发射器 10,000 语句、共享 100,000 求值步。列表/映射最多 4096 项，单值展开结构最多 16384 节点、64 层，复合单位最多 128 项；函数递归最多 64 层。

这些限制优先保护交互运行，超限可能拒绝合法 Sass。CLI 项目扫描另有 4096 目录项、2 MiB 源文件字节上限；项目 JSON 输入最多 4 MiB。浏览器 Worker 有独立 5 秒期限，核心步数不是严格墙钟期限。
