# 0.7.0 当前验证与复现

按 README 构建刷新 web/engine.mjs 和 web/precss-engine.mjs，并安装固定开发依赖 npm ci --ignore-scripts，然后运行：

```sh
moon check --target js
moon test --target js
moon test --target wasm-gc
node examples/run-precss-project.mjs
node tools/compare-precss.mjs
node tools/test-project-host.mjs
```

新适配器五组 MoonBit 测试覆盖上游 Compiler 路由、相对模块、快照不受外部更改影响、错误来源绑定、相同文本不同目录的文件接口拒绝、错误类型与诊断。新增6个差异案例同时调用真实 precss 0.1.4、扩展和 Dart Sass 1.104.0；CSS 经独立 CSS 压缩器比较，拒绝只比较是否拒绝。

新示例的 CSS/LESS/SASS 部分仍调用上游实际引擎；不将这些能力计成本库原创。本轮实际运行命令、退出码与日志见 evidence/precss-integration-20260923/LOCAL-CHECKS.json，差异实测见 COMPARISON.json。解包检查在交付包另记录，不冒充远端 CI 已通过。

原核心未改算法；保留 JS/Wasm-GC 核心回归和受影响的项目宿主路径，不以这些检查推导生产兼容。历史大规模 Dart Sass 场景、性能、模糊测试和浏览器操作见 [TESTING-BEFORE-PRECSS.md](TESTING-BEFORE-PRECSS.md)，未在本轮全部重跑。

verify.ps1 会运行新增示例；带 -WithOracle 时加入新双边对照。CI 已增加引擎刷新、示例与比较步骤，首次构建需下载 Mooncakes 依赖。

## 0.8.0 多入口项目回归（2026-09-27）

当前固定工具链，JS/WasmGC各909项通过，包含新依赖/缺失候选/原子更新/结果副本/16入口缓存界限与配置隔离。实际Dart Sass1.104.0逐次对照28步编辑、19次编译成功；既有模块98/98一致，六个既有precss三方案例仍符合原结论。纯MoonBit消费示例在JS/WasmGC均运行，a改3px只失效a、b命中缓存。

evidence/project-20260927保存本轮源码/引擎哈希、原始日志和报告，旧证据保留。首次集成编译补齐Engine必需回调和跨包结构导入，示例字符串转义错误也在正式运行前修正；这些失败不计为通过。新结果来自真实precss Compiler与Dart Sass，不以自己实现的重新编译作为唯一参考。未运行远端CI或进行生产接入。

## 0.9.0 浏览器会话实测（2026-09-27）

构建后运行 `start-review.ps1 -Port 8799`，在真实浏览器打开其 `/web/` 页面，按 `evidence/browser-session-20260927/ACTIONS.md` 导入夹具并操作当前 UI。该证据记录页面显示 0.9.0、同一 Worker 内跨消息命中、UI 文件编辑造成局部失效、候选路径歧义失败/删除恢复、依赖删除失败/恢复，以及失败时 CSS 预览被清除。逐步屏幕记录、结果和精确源码 `sourceFingerprints` 在该目录。

这里不重复旧 28 步 API/Dart Sass 对照，也不声称浏览器对完整 Sass 兼容或证明实际用户采用；它只验证 UI 事件连接到持久 Worker 会话。取消和超时后的全量重建按代码路径实现；本轮未以真实故意超时验证该分支。