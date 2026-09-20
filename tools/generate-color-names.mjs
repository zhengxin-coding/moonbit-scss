// CSS color-name data only, extracted from the pinned reference distribution.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
const source=fs.readFileSync(new URL('../node_modules/sass/sass.dart.js',import.meta.url),'utf8');
const line=source.split('\n').find(line=>line.includes('"colorsByName"')&&line.includes('"aliceblue"'));
assert(line);
const rows=[...line.matchAll(/"([a-z]+)", A\.SassColor_SassColor\$rgb\((\d+), (\d+), (\d+), (\d+)\)/g)].map(m=>[m[1],...m.slice(2).map(Number)]).sort((a,b)=>a[0].localeCompare(b[0]));
assert.equal(rows.length,149);
const quote=JSON.stringify;
fs.writeFileSync(new URL('../color_names.mbt',import.meta.url),'// CSS named-color facts from pinned Dart Sass 1.104.0; regenerate with tools/generate-color-names.mjs.\n///|\nlet named_colors : Map[String, (Int, Int, Int, Int)] = Map([\n'+rows.map(([name,...rgba])=>'  ('+quote(name)+', ('+rgba.join(', ')+')),').join('\n')+'\n])\n');
fs.writeFileSync(new URL('../evidence/color-names.json',import.meta.url),JSON.stringify({reference:'Dart Sass 1.104.0',sourceSHA256:createHash('sha256').update(source).digest('hex'),scope:'149 CSS named color and transparent facts; no compiler logic copied',rows},null,2)+'\n');
console.log('Generated '+rows.length+' CSS color names');
