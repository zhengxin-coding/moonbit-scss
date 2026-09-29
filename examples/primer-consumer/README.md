# Primer CSS component consumer fixture

This fixture exercises the current ProjectCompiler interface with one frozen, real SCSS component from Primer CSS. Two local entrypoints use the same component; the task compiles each, recompiles after an in-memory component edit, handles a missing-module error without returning stale CSS, and compiles both entries after repair.

The exact copied source, commit, MIT notice, hash, selected file boundary, and source links are in [UPSTREAM.md](UPSTREAM.md). Only CircleBadge is in scope; this run does not show that all of Primer CSS or all Sass syntax compiles.

Build the JS engine using the repository instructions, install the pinned npm dependencies, then run:

~~~sh
node tools/test-primer-consumer.mjs
~~~

The harness calls the existing project_session_json path, which constructs and edits ProjectCompiler, and independently compiles each entry state with the pinned Dart Sass package. The generated result is "evidence/primer-consumer-20260929/REPORT.json".