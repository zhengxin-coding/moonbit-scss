# Browser session verification

Recorded 2026-09-27 using Firefox 156.0 (Playwright CLI 0.1.21) against the local page `http://127.0.0.1:8799/web/`. The page displayed `v0.9.0`. The six-file synthetic project was imported through the UI file chooser from `browser-project.json`; no direct call to the MoonBit session bridge was used for these browser outcomes.

| Snapshot (UTC) | UI action and observed result |
| --- | --- |
| `.playwright-cli/page-2026-09-27T11-51-55-081Z.yml` | Imported project compiled `a/main.scss` to `.a { width: 1px; }`. |
| `.playwright-cli/page-2026-09-27T11-54-38-763Z.yml` | Selected and compiled `b/main.scss`; output `.b { width: 2px; }`. |
| `.playwright-cli/page-2026-09-27T11-55-08-871Z.yml` | Compiled unchanged B again; UI reported `缓存命中`. |
| `.playwright-cli/page-2026-09-27T11-57-44-964Z.yml` | Edited `a/_tokens.scss` from `$n:1px;` to `$n:3px;`, then compiled B. UI still reported a B cache hit and listed only `a/main.scss` as invalidated. |
| `.playwright-cli/page-2026-09-27T11-58-16-392Z.yml` | Selected A and compiled `.a { width: 3px; }`. |
| `.playwright-cli/page-2026-09-27T11-59-26-237Z.yml` | Added `a/tokens.scss` with `$n:9px;`; compile failed with `ambiguous module tokens`, the old CSS was cleared, and the UI said the session could retry after repair. |
| `.playwright-cli/page-2026-09-27T11-59-49-242Z.yml` | Removed the ambiguous candidate through the UI; the file list no longer contained `a/tokens.scss`. |
| `.playwright-cli/page-2026-09-27T12-00-10-151Z.yml` | Retried A; `.a { width: 3px; }` compiled successfully in the same page session. |
| `.playwright-cli/page-2026-09-27T12-00-45-235Z.yml` | Selected and compiled `common/main.scss`; output `.c { color: red; }`. |
| `.playwright-cli/page-2026-09-27T12-01-34-543Z.yml` and `.playwright-cli/page-2026-09-27T12-01-46-827Z.yml` | Removed `common/_shared.scss`, then compiled common. It failed with `module not found shared`; the old CSS was cleared and the download button disabled. |
| `.playwright-cli/page-2026-09-27T12-03-01-582Z.yml` | Re-added `common/_shared.scss` with `$c:green;`; common compiled to `.c { color: green; }`. Screenshot: `.playwright-cli/page-2026-09-27T12-03-55-524Z.png`. |
| `.playwright-cli/page-2026-09-27T12-07-28-708Z.yml` | After reloading with a diagnostic Worker-construction counter installed, imported the project through the UI again; A compiled. |
| `.playwright-cli/page-2026-09-27T12-08-30-670Z.yml` and `.playwright-cli/page-2026-09-27T12-08-31-868Z.yml` | Selected B and clicked compile twice through the UI. The second result visibly reported `缓存命中`. |

The diagnostic wrapper recorded Worker constructions without changing the application protocol: the initial page load constructed one Worker; importing the project constructed a replacement, making two total, while Playwright observed exactly one active `web/worker.mjs`. After the two subsequent UI compile clicks, the total remained two and the active count remained one. Together with the visible cache-hit result, this confirms the compile messages reused the imported project's Worker session instead of reconstructing the project for each action.

All source edits, entry selection, add/remove, compile, and import actions above were driven through the visible page controls. Playwright `run-code` was used only to read Worker counts and browser metadata. The fixture is synthetic and demonstrates host/session behavior, not a real customer project or production integration.

Limits: the cancellation and five-second timeout recovery branches were not triggered in this browser run; only Firefox 156 was used; reload persistence and concurrent project sessions are outside this single-page in-memory session check.