// Expected CSS comes exclusively from the pinned official compiler.
import * as sass from 'sass';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import values from './value-cases.mjs';
import modules from './module-cases.mjs';
import legacy from './sass-cases.mjs';
import colors from './color-cases.mjs';
import selectors from './selector-cases.mjs';
if(!/dart-sass\s+1\.104\.0/.test(sass.info))throw Error('Expected pinned Sass 1.104.0');
const root=fileURLToPath(new URL('../_build/golden-reference/',import.meta.url));
fs.mkdirSync(root,{recursive:true});
const runRoot=fs.mkdtempSync(path.join(root,'run-'));
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const quote=JSON.stringify,rows=[],lines=['// Generated only from Dart Sass 1.104.0. Regenerate with tools/generate-semantic-goldens.mjs.'];
for(const [i,input]of [...legacy.map(x=>({...x,name:'legacy '+x.name})),...values,...modules,...colors,...selectors].entries()){
  let css,error=false;
  try{
    if(input.files){
      const dir=path.join(runRoot,String(i));
      for(const [name,source]of Object.entries(input.files)){
        const dest=path.join(dir,name);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,source);
      }
      css=sass.compile(path.join(dir,input.entry),options).css;
    }else css=sass.compileString(input.source,options).css;
  }catch{error=true;}
  const invocation=input.files?
    '@scss.compile_files('+quote(input.entry)+', Map(['+Object.entries(input.files).map(([n,s])=>'('+quote(n)+', '+quote(s)+')').join(',')+'])).css':
    '@scss.compile('+quote(input.source)+')';
  lines.push('///|','test '+quote('official '+i+' '+input.name)+' {');
  if(error)lines.push('  assert_true(try { ignore('+invocation+'); false } catch { _ => true })');
  else lines.push('  assert_eq(css_tokens('+invocation+'), css_tokens('+quote(css)+'))');
  lines.push('}','');
  rows.push({...input,css,error});
}
const source=lines.join('\n');
fs.writeFileSync(new URL('../semantic_golden_test.mbt',import.meta.url),source);
fs.writeFileSync(new URL('../evidence/semantic-golden-provenance.json',import.meta.url),
 JSON.stringify({reference:sass.info,cases:rows.length,expectedResultsSHA256:createHash('sha256').update(JSON.stringify(rows)).digest('hex'),
 normalization:'MoonBit tests compare CSS lexical tokens, preserving quoted text and boundaries between words. Node differential suites additionally compare CSS using the official CSS parser.',
 generation:'Expected CSS and rejection flags produced solely by pinned Sass; MoonBit engine is not imported by this generator.'},null,2)+'\n');
console.log('Generated '+rows.length+' official golden cases.');
