import * as sass from 'sass';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {run} from '../web/engine.mjs';
import cases from './value-cases.mjs';
if(!/dart-sass\s+1\.104\.0/.test(sass.info))throw Error('Expected pinned Dart Sass 1.104.0');
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const rows=[];
for(const input of cases) {
  let reference,referenceError,actual,actualError;
  try{reference=sass.compileString(input.source,options).css;}catch(error){referenceError=error.message;}
  actual=run(input.source);
  if(actual.startsWith('ERROR:'))actualError=actual;
  let matched;
  if(referenceError)matched=!!actualError;
  else if(actualError)matched=false;
  else{
    let expectedCss;
    try{expectedCss=canonical(reference);}catch{}
    if(expectedCss===undefined)matched=reference.trim()===actual.trim();
    else{try{matched=expectedCss===canonical(actual);}catch(error){actualError=error.message;matched=false;}}
  }
  const row={...input,reference,referenceError,actual,actualError,matched};
  rows.push(row);if(!matched)console.error(JSON.stringify(row));
}
const report={reference:sass.info,cases:rows.length,matched:rows.filter(r=>r.matched).length,
  engineSHA256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),
  normalization:'Successful outputs parsed as plain CSS and compressed by official Sass. When reference inspect() output is not valid CSS, compare trimmed expanded outputs exactly. Errors compare acceptance only; messages retained.',rows};
fs.writeFileSync(new URL('../evidence/value-comparison.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cases:report.cases,matched:report.matched}));
process.exitCode=report.matched===report.cases?0:1;
