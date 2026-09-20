import * as sass from 'sass';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {run,project} from '../web/engine.mjs';
import cases from './color-cases.mjs';
assert.match(sass.info,/dart-sass\s+1\.104\.0/);
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const rows=[];
for(const input of cases){
 let reference,referenceError,actual,actualError;
 try{reference=input.files?sass.compileString(input.files[input.entry],{...options,url:new URL('memory:/'+input.entry),importers:[{canonicalize(url){const key='_'+url+'.scss';return input.files[key]?new URL('memory:/'+key):null},load(url){return {contents:input.files[url.pathname.slice(1)],syntax:'scss'}}}]}).css:sass.compileString(input.source,options).css;}catch(e){referenceError=e.message;}
 if(input.files){const output=project(JSON.stringify({entry:input.entry,files:input.files}));actual=output.startsWith('ERROR:')?output:JSON.parse(output).css;}else actual=run(input.source);
 if(actual.startsWith('ERROR:'))actualError=actual;
 let matched=referenceError?!!actualError:false;
 if(!referenceError&&!actualError)try{matched=canonical(reference)===canonical(actual);}catch{matched=reference.trim()===actual.trim();}
 const row={...input,reference,referenceError,actual,actualError,matched};rows.push(row);if(!matched)console.error(JSON.stringify(row));
}
const digest=p=>createHash('sha256').update(fs.readFileSync(new URL('../'+p,import.meta.url))).digest('hex');
const sources=Object.fromEntries(['web/engine.mjs','colors.mbt','color_functions.mbt','color_names.mbt','values.mbt','expressions.mbt','builtins.mbt','control.mbt','tools/test-colors.mjs','tools/color-cases.mjs'].map(p=>[p,digest(p)]));
const report={utc:new Date().toISOString(),reference:sass.info,cases:rows.length,matched:rows.filter(r=>r.matched).length,sources,normalization:'Official plain-CSS parser/compressor on successful CSS, exact expanded fallback for non-CSS inspect output. Errors compare rejection, not diagnostic text.',rows};
fs.writeFileSync(new URL('../evidence/'+(process.env.COLOR_REPORT??'color-comparison.json'),import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cases:report.cases,matched:report.matched}));process.exitCode=report.matched===report.cases?0:1;
