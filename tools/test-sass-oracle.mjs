import * as sass from 'sass';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {run} from '../web/engine.mjs';
import cases from './sass-cases.mjs';
assert.match(sass.info,/dart-sass\s+1\.104\.0/);
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const results=[];
for(const {name,source} of cases){
 let expected,error=false;
 try{expected=sass.compileString(source,options).css}catch{error=true}
 const actual=run(source);
 let ok,detail;
 if(error){ok=actual.startsWith('ERROR:');detail=ok?'both reject':actual}
 else if(actual.startsWith('ERROR:')){ok=false;detail=actual}
 else {
  try{const want=canonical(expected),got=canonical(actual);ok=want===got;detail=ok?'same canonical CSS':{expected:want,actual:got}}
  catch(e){ok=false;detail=String(e)}
 }
 results.push({name,source,ok,expectedError:error,detail});
 if(!ok)console.error(JSON.stringify(results.at(-1)));
}
fs.writeFileSync(new URL('../evidence/sass-oracle.json',import.meta.url),JSON.stringify({utc:new Date().toISOString(),oracle:sass.info,cases:results.length,passed:results.filter(x=>x.ok).length,normalization:'Both outputs parsed as plain CSS and serialized by Dart Sass in compressed mode; no source selector/variable substitution is performed on MoonBit output',results},null,2));
assert.equal(results.filter(x=>!x.ok).length,0);
console.log(`Dart Sass: ${results.length} independent cases passed`);
