import * as sass from 'sass';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {project} from '../web/engine.mjs';
import cases from './module-cases.mjs';
if(!/dart-sass\s+1\.104\.0/.test(sass.info))throw Error('Expected pinned Dart Sass 1.104.0');
const root=fileURLToPath(new URL('../_build/module-reference/',import.meta.url));
fs.mkdirSync(root,{recursive:true});
const runRoot=fs.mkdtempSync(path.join(root,'run-'));
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const rows=[];
for(let i=0;i<cases.length;i++){
  const input=cases[i],dir=path.join(runRoot,String(i));
  for(const [name,source]of Object.entries(input.files)){
    const dest=path.join(dir,name);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,source);
  }
  let reference,referenceError,actual,actualError,referenceFiles;
  try{const result=sass.compile(path.join(dir,input.entry),options);reference=result.css;
    referenceFiles=result.loadedUrls.map(url=>path.relative(dir,fileURLToPath(url)).replaceAll('\\','/'));}
  catch(error){referenceError=error.message.replaceAll(dir,'<fixture>').replaceAll(path.relative(process.cwd(),dir),'<fixture>');}
  const output=project(JSON.stringify(input));
  if(output.startsWith('ERROR:'))actualError=output;else actual=JSON.parse(output);
  let matched=!!referenceError&&!!actualError;
  if(!referenceError&&!actualError){
    try{matched=canonical(reference)===canonical(actual.css);}catch(error){actualError=error.message;}
  }
  const row={...input,reference,referenceFiles,referenceError,actual,actualError,matched};
  rows.push(row);if(!matched)console.error(JSON.stringify(row));
}
const report={reference:sass.info,cases:rows.length,matched:rows.filter(r=>r.matched).length,
  engineSHA256:createHash('sha256').update(fs.readFileSync(new URL('../web/engine.mjs',import.meta.url))).digest('hex'),
  normalization:'Official Sass reads separate on-disk fixtures with its own resolver. Successful CSS compared after official CSS compression; errors compare rejection only. Loaded files retained for inspection.',rows};
fs.writeFileSync(new URL('../evidence/module-comparison.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cases:report.cases,matched:report.matched}));
process.exitCode=report.matched===report.cases?0:1;
