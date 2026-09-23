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
