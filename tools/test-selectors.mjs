import * as sass from 'sass';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {run,project} from '../web/engine.mjs';
import cases from './selector-cases.mjs';
assert.match(sass.info,/dart-sass\s+1\.104\.0/);
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const rows=[];
for(const input of cases){
 let reference,referenceError,actual,actualError;
 try{
  const importer={canonicalize(url){const name=new URL(url,'memory:/').pathname.slice(1);const keys=[name,name+'.scss','_'+name+'.scss'];const found=keys.find(key=>input.files[key]!==undefined);return found?new URL('memory:/'+found):null;},load(url){return {contents:input.files[url.pathname.slice(1)],syntax:'scss'};}};
  reference=input.files?sass.compileString(input.files[input.entry],{...options,url:new URL('memory:/'+input.entry),importers:[importer]}).css:sass.compileString(input.source,options).css;
 }catch(e){referenceError=e.message;}
 if(input.files){const result=project(JSON.stringify({entry:input.entry,files:input.files}));actual=result.startsWith('ERROR:')?result:JSON.parse(result).css;}else actual=run(input.source);
 if(actual.startsWith('ERROR:'))actualError=actual;
 let matched=referenceError?!!actualError:false;
 if(!referenceError&&!actualError)try{matched=canonical(reference)===canonical(actual);}catch{}
 const row={...input,reference,referenceError,actual,actualError,matched};rows.push(row);if(!matched)console.error(JSON.stringify(row));
}
const files=['web/engine.mjs','css_output.mbt','extensions.mbt','evaluator.mbt','value_eval.mbt','modules.mbt','selectors.mbt','tools/test-selectors.mjs','tools/selector-cases.mjs'];
const sources=Object.fromEntries(files.map(name=>[name,createHash('sha256').update(fs.readFileSync(new URL('../'+name,import.meta.url))).digest('hex')]));
const report={utc:new Date().toISOString(),reference:sass.info,cases:rows.length,matched:rows.filter(r=>r.matched).length,sources,normalization:'Successful output compares official plain-CSS compressed output exactly; errors compare rejection only.',rows};
fs.writeFileSync(new URL('../evidence/selector-comparison.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cases:report.cases,matched:report.matched}));process.exitCode=report.matched===report.cases?0:1;
