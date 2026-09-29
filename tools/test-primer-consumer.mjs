import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import * as sass from 'sass';
import {project_session_json} from '../web/precss-engine.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const fixture = path.join(root, 'examples/primer-consumer');
const evidenceDir = path.join(root, 'evidence/primer-consumer-20260929');
const sourcePath = 'vendor/primer-css/src/avatars/circle-badge.scss';
const licensePath = 'vendor/primer-css/LICENSE';
const catalogEntry = 'consumers/catalog.scss';
const showcaseEntry = 'consumers/showcase.scss';
const componentFile = path.join(fixture, sourcePath);
const licenseFile = path.join(fixture, licensePath);
const sha256 = value => createHash('sha256').update(value).digest('hex');
const source = fs.readFileSync(componentFile, 'utf8');
const license = fs.readFileSync(licenseFile);

assert.match(sass.info, /dart-sass\s+1\.104\.0/);
assert.equal(
  sha256(fs.readFileSync(componentFile)),
  '020e9aa2d6f25525f3fc828ba227bfcf9c765048f1db6887366fe47a69a364dd',
  'frozen Primer source changed',
);
assert.equal(
  sha256(license),
  'e2719fc6fd67f6d25fea6cc263509bc517460a554248a8b87426e06e51ea4984',
  'copied MIT license changed',
);
assert.equal((source.match(/width: 96px;/g) || []).length, 1);

const catalog = fs.readFileSync(path.join(fixture, catalogEntry), 'utf8');
const showcase = fs.readFileSync(path.join(fixture, showcaseEntry), 'utf8');
const edited = source.replace('width: 96px;', 'width: 104px;');
const broken = '@use "missing-theme";\n' + edited;
const repaired = broken.replace('@use "missing-theme";\n', '');
const initial = {
  [catalogEntry]: catalog,
  [showcaseEntry]: showcase,
  [sourcePath]: source,
};
const steps = [
  {op: 'compile', entry: catalogEntry, hit: false},
  {op: 'compile', entry: showcaseEntry, hit: false},
  {op: 'compile', entry: catalogEntry, hit: true},
  {
    op: 'apply',
    files: {[sourcePath]: edited},
    invalidated: [catalogEntry, showcaseEntry],
  },
  {op: 'compile', entry: catalogEntry, hit: false},
  {op: 'compile', entry: showcaseEntry, hit: false},
  {op: 'compile', entry: catalogEntry, hit: true},
  {
    op: 'apply',
    files: {[sourcePath]: broken},
    invalidated: [catalogEntry, showcaseEntry],
  },
  {op: 'compile', entry: catalogEntry, hit: false, accept: false},
  {op: 'compile', entry: showcaseEntry, hit: false, accept: false},
  {op: 'apply', files: {[sourcePath]: repaired}, invalidated: []},
  {op: 'compile', entry: catalogEntry, hit: false},
  {op: 'compile', entry: showcaseEntry, hit: false},
];
const actual = JSON.parse(
  project_session_json(JSON.stringify({files: initial, steps})),
);
assert(actual.ok, actual.error);
assert.equal(actual.results.length, steps.length);

const tempParent = path.resolve(os.tmpdir());
const tempDir = fs.mkdtempSync(path.join(tempParent, 'primer-consumer-'));
const files = {...initial};
const sassOptions = {
  charset: false,
  style: 'expanded',
  logger: {warn() {}, debug() {}},
};
const normalizeCss = css =>
  sass.compileString(css, {
    charset: false,
    logger: {warn() {}, debug() {}},
    style: 'compressed',
    syntax: 'css',
  }).css;

function writeVirtualFile(name, text) {
  const filename = path.resolve(tempDir, name);
  assert(filename.startsWith(tempDir + path.sep));
  fs.mkdirSync(path.dirname(filename), {recursive: true});
  fs.writeFileSync(filename, text);
}

for (const [name, text] of Object.entries(files)) {
  writeVirtualFile(name, text);
}

const records = [];
try {
  for (const [index, step] of steps.entries()) {
    const value = actual.results[index];
    const accepted = step.accept ?? true;
    assert.equal(value.ok, accepted, JSON.stringify({index, step, value}));
    if (step.op === 'apply') {
      assert.deepEqual(value.invalidated, step.invalidated);
      for (const [name, text] of Object.entries(step.files)) {
        files[name] = text;
        writeVirtualFile(name, text);
      }
      records.push({
        index,
        op: 'apply',
        changedFiles: Object.keys(step.files),
        accepted: value.ok,
        invalidated: value.invalidated,
      });
      continue;
    }

    if (!accepted) {
      assert.equal(Object.hasOwn(value, 'css'), false, 'failure exposed stale CSS');
      assert.equal(Object.hasOwn(value, 'cache_hit'), false);
      let sassError;
      try {
        sass.compile(path.join(tempDir, step.entry), sassOptions);
      } catch (error) {
        sassError = String(error.message || error);
      }
      assert(sassError, 'Dart Sass accepted the broken component');
      records.push({
        index,
        op: 'compile',
        entry: step.entry,
        accepted: false,
        moonbitError: value.error,
        dartSassError: sassError.split(tempDir).join('<temp-project>'),
      });
      continue;
    }

    assert.equal(value.cache_hit, step.hit);
    const reference = sass.compile(path.join(tempDir, step.entry), sassOptions);
    assert.equal(normalizeCss(value.css), normalizeCss(reference.css));
    const sassLoaded = reference.loadedUrls
      .filter(url => url.protocol === 'file:')
      .map(url =>
        path
          .relative(tempDir, fileURLToPath(url))
          .split(path.sep)
          .join('/'),
      )
      .sort();
    assert.deepEqual([...value.loaded_files].sort(), sassLoaded);
    assert(value.loaded_files.includes(sourcePath));
    const componentEdges = value.dependencies.filter(
      edge => edge.path === sourcePath,
    );
    assert.equal(componentEdges.length, 1);
    assert.equal(componentEdges[0].from, step.entry);
    if ([4, 5, 6, 11, 12].includes(index)) {
      assert.match(value.css, /width: 104px/);
    } else {
      assert.match(value.css, /width: 96px/);
    }
    records.push({
      index,
      op: 'compile',
      entry: step.entry,
      accepted: true,
      cacheHit: value.cache_hit,
      loadedFiles: value.loaded_files,
      dependencies: value.dependencies,
      cssSha256: sha256(value.css),
      dartSassCssSha256: sha256(reference.css),
      normalizedCssMatched: true,
    });
  }
} finally {
  assert.equal(path.dirname(tempDir), tempParent);
  assert(path.basename(tempDir).startsWith('primer-consumer-'));
  fs.rmSync(tempDir, {recursive: true, force: true});
}

const report = {
  generatedAt: new Date().toISOString(),
  source: {
    repository: 'https://github.com/primer/css',
    commit: '2d00353f6ea82d118ebb59ae817014ad934f4672',
    file: 'src/avatars/circle-badge.scss',
    license: 'MIT',
    fixturePath: sourcePath,
    sha256: sha256(fs.readFileSync(componentFile)),
    licenseSha256: sha256(license),
  },
  consumerFiles: {
    [catalogEntry]: sha256(catalog),
    [showcaseEntry]: sha256(showcase),
  },
  interface: 'repository cmd/precss project_session_json -> ProjectCompiler',
  dartSass: sass.info,
  node: process.version,
  steps: steps.length,
  compilations: steps.filter(step => step.op === 'compile').length,
  records,
  engineSha256: sha256(
    fs.readFileSync(path.join(root, 'web/precss-engine.mjs')),
  ),
  limits: [
    'one standalone Primer CSS CircleBadge source file only',
    'two local entrypoints are a harness, not a reported Primer CSS consumer',
    'the fixture excludes Primer tokens, mixins, index, and other components',
    'CSS equality is checked after Dart Sass CSS normalization',
    'this does not establish full Primer CSS or full Sass compatibility',
    'cache stores completed entry output; this does not test AST-level incremental evaluation',
  ],
};
fs.mkdirSync(evidenceDir, {recursive: true});
fs.writeFileSync(
  path.join(evidenceDir, 'REPORT.json'),
  JSON.stringify(report, null, 2) + '\n',
);
console.log(
  JSON.stringify({
    success: true,
    sourceSha256: report.source.sha256,
    dartSass: report.dartSass,
    steps: report.steps,
    compilations: report.compilations,
  }),
);