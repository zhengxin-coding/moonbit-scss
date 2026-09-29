# Frozen third-party SCSS input

The only copied Primer CSS source file is "vendor/primer-css/src/avatars/circle-badge.scss". It is taken byte-for-byte from "primer/css" commit "2d00353f6ea82d118ebb59ae817014ad934f4672".

- Source: https://github.com/primer/css/blob/2d00353f6ea82d118ebb59ae817014ad934f4672/src/avatars/circle-badge.scss
- Project README identifies Primer CSS as GitHub's CSS design system, says its source files use SCSS syntax, and lists MIT: https://github.com/primer/css/blob/2d00353f6ea82d118ebb59ae817014ad934f4672/README.md
- License text: "vendor/primer-css/LICENSE" (MIT, copyright GitHub Inc. 2021), copied from https://github.com/primer/css/blob/2d00353f6ea82d118ebb59ae817014ad934f4672/LICENSE
- Component SHA-256: 020e9aa2d6f25525f3fc828ba227bfcf9c765048f1db6887366fe47a69a364dd
- License SHA-256: e2719fc6fd67f6d25fea6cc263509bc517460a554248a8b87426e06e51ea4984

The fixture includes this one upstream component, the upstream license, and two small local SCSS entrypoints that each use the component. It does not include Primer's tokens, mixins, index, JavaScript, or other components. The entrypoints are local harness inputs, not a report of a Primer CSS user's project.

The consumer run temporarily changes the component's medium badge width in the in-memory project, inserts a missing module reference to exercise failure, then restores the valid edit. Those transient versions are not written over the frozen source. The consumer harness checks the frozen input hash before running.