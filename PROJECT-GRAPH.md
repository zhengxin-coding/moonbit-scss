# 多入口虚拟项目与依赖驱动重编译

0.8.0新增纯MoonBit `Project` 和实际接入precss的 `ProjectCompiler`。它们保存由调用方提供的虚拟文件快照，以明确入口路径编译并返回CSS、诊断、加载文件、直接依赖边以及观察路径。相同源码在a/b目录下仍使用各自相对模块，模块的with配置和加载一次语义按入口隔离。

```sh
moon run examples/project_session --target js
moon run examples/project_session --target wasm-gc
```

示例先得到a入口1px、b入口2px，再改a/_tokens.scss为3px；失效列表只有a入口，b命中缓存，a重编译为3px。Node/Python不是这些状态或编译语义的实现。

接口：根包 `Project::new(files)`、`source(entry)`、`compile(entry)`、`apply(Map[String,String?])`；`None`删除文件。`/precss.ProjectCompiler`暴露new、compile、apply，compile每次经过未修改precss0.1.4的Compiler格式路由，并将错误转换成上游CompileError。导入返回结构类型时也导入根包。一次实例可逐一处理多个入口，保留各自结果与图；不是把多个入口CSS串接为一个文件。

apply先校验全部路径、规范化冲突和项目容量，成功后一次应用；返回排序后的已缓存且失效的入口。非法编辑保留旧文件与缓存，未改内容不失效。实际依赖之外，还记录不存在的候选文件：新增同名partial会产生歧义，新增直接模块会遮蔽index模块；这两类变化都会触发重编译。失败编译不缓存旧CSS，之后修复必须重新编译。

缓存的是成功的整个入口结果，不是AST/中间模块增量编译，不跨入口共享可变求值状态。最多16个入口、4M CSS UTF16单位；超额按入口名顺序淘汰，大于缓存额度的单次结果不缓存。虚拟路径最多4096个UTF16单位；虚拟文件仍限256、单文件100000单位、总2000000单位；既有求值/输出限额继续有效。结果数组返回副本，调用方修改不能破坏缓存。文件读取、目录监听、写盘及跨进程并发由应用负责。

旧 `project_engine` 仍绑定一个不可变入口快照；precss0.1.4的 `compile_imports(source,read)` 不带入口名，因此旧compile_file/compile_many仍拒绝。这不是假称修复了上游接口：新ProjectCompiler明确收入口名，并在内部逐次构造路由调用。

`node tools/test-project-incremental.mjs` 用真实Dart Sass1.104.0文件解析器逐次对照28步编辑、19次编译，核对CSS、加载文件集合、缓存命中和失效，包括共享模块、同源码不同目录、缺失/歧义、原子拒绝、独立with配置。另保留旧六例三方关系对照和完整模块回归。输入为原创示例，不是客户迁移或全Sass兼容证明；结果见evidence/project-20260927。
