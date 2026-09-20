# 0.5 当前验证

颜色增量新增 241 个 Dart Sass 场景，全部通过；加原有 567 共 808 个对照。JS/Wasm-GC 各 830 项、13 宿主检查、814 求值边界与 307 异常输入通过。见 [颜色范围](COLORS.md)、evidence/color-verify.txt、evidence/color-upgrade.json。源码、引擎和当前报告绑定同一提交；历史浏览器/性能报告未重跑，不作本次新增能力的证据。

## 0.4 历史验证说明

# Validation and reproduction

The full local command is `./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe -WithOracle` after `npm ci --ignore-scripts`. Sass is exactly 1.104.0, MoonBit 0.1.20260904 / moonc 0.10.12, Node 24.11.0 on Windows. Remote CI has not run.

## Current evidence

- 589 public API tests per JS / Wasm-GC target; 567 generated cases use official expected CSS or rejection flags. They cover 124 previous selector/mixin cases, 345 values/functions/control cases, and 98 virtual-file module cases.
- `test-values.mjs` and `test-modules.mjs` compare emitted CSS using the official CSS parser/compressor; invalid CSS produced by inspect is compared as trimmed expanded text in the value suite. Rejected inputs compare rejection only. Module references use real separate files and the official resolver.
- `generate-semantic-goldens.mjs` imports only official Sass and original inputs, never the MoonBit engine. Cross-backend tests compare CSS lexical tokens, retaining word boundaries and quoted content, except optional quotes around simple attribute identifiers. This is less complete than a CSS parser; Node differential tests provide the separate parser-based check.
- `test-project-host.mjs`: 13 file/CLI/JSON/diagnostic/limit/junction checks. `test-evaluation-limits.mjs`: 814 cases, including extreme loops, recursion and exponential string growth, with a 20-second worker watchdog. `robustness.mjs` retains 307 seeded malformed inputs. These are bounded robustness exercises, not exhaustive fuzzing.
- `semantic-verification.txt` retains final full verification output. `browser-validation.json` records actual editor actions, mobile layout and downloaded file checks.
- `reference-provenance.json`: npm tarball SHA-512 matches package-lock, and all 36 installed Sass distribution files equal the tarball. Runtime dependency packages are pinned but were not separately byte-audited.
- `semantic-benchmark.json`: three warmups, seven interleaved samples for three small same-machine JS workloads; canonical outputs match. Module comparison includes JSON bridge for MoonBit and filesystem reads for Sass. It does not establish complete performance parity or peak memory.
- `semantic-upgrade.json` binds final staged Git blobs to SHA-256. `python tools/check-proof.py` verifies committed blobs offline. Historical evidence is retained for identity only and is not represented as rerun.

## Refresh generated expectations

```powershell
node tools/generate-semantic-goldens.mjs
moon fmt
moon info
moon test --target js --deny-warn
moon test --target wasm-gc --deny-warn
```

Never derive expected values from the implementation under test. Rebuild web/engine.mjs after changing MoonBit. Generator/fmt/info/build idempotence is recorded separately. The browser page must be reloaded to test the final built engine.
