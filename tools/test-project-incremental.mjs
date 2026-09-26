import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import * as sass from 'sass';
import {project_session_json} from '../web/precss-engine.mjs';
assert.match(sass.info,/dart-sass\s+1\.104\.0/);
const root=fileURLToPath(new URL('../',import.meta.url));
const source='@use "tokens"; @use "../shared"; .x {width:tokens.$n;color:shared.$color}';
const initial={'a/main.scss':source,'a/_tokens.scss':'$n:1px','b/main.scss':source,'b/_tokens.scss':'$n:2px',
  '_shared.scss':'$color:red', 'c.scss':'@use "configured" with ($n:9px); .c{width:configured.$n}',
  'd.scss':'@use "configured"; .d{width:configured.$n}','_configured.scss':'$n:4px !default'};
const compile=(entry,hit,accept=true)=>({op:'compile',entry,hit,accept});
const edit=(files,invalidated,accept=true)=>({op:'apply',files,invalidated,accept});
const steps=[compile('a/main.scss',false),compile('b/main.scss',false),compile('a/main.scss',true),
  edit({'unused.scss':'.u{x:1}'},[]),compile('a/main.scss',true),
  edit({'a/_tokens.scss':'$n:3px'},['a/main.scss']),compile('b/main.scss',true),compile('a/main.scss',false),
  edit({'_shared.scss':'$color:blue'},['a/main.scss','b/main.scss']),compile('a/main.scss',false),compile('b/main.scss',false),
  // Add a previously absent resolution candidate: cached CSS must not survive.
  edit({'a/tokens.scss':'$n:99px'},['a/main.scss']),compile('a/main.scss',false,false),compile('b/main.scss',true),
  edit({'a/tokens.scss':null},[]),compile('a/main.scss',false),
  edit({'a/_tokens.scss':'$n:88px','../escape.scss':''},[],false),compile('a/main.scss',true),
  compile('c.scss',false),compile('d.scss',false),compile('c.scss',true),
  edit({'_configured.scss':'$n:5px !default'},['c.scss','d.scss']),compile('c.scss',false),compile('d.scss',false),
  edit({'_shared.scss':null},['a/main.scss','b/main.scss']),compile('b/main.scss',false,false),
  edit({'_shared.scss':'$color:green'},[]),compile('b/main.scss',false)];
const actual=JSON.parse(project_session_json(JSON.stringify({files:initial,steps})));
assert(actual.ok,actual.error);assert.equal(actual.results.length,steps.length);
const directory=fs.mkdtempSync(path.join(os.tmpdir(),'scss-incremental-'));
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const files={...initial},records=[];
function write(name,text){const file=path.resolve(directory,name);assert(file.startsWith(directory+path.sep));if(text===null)fs.unlinkSync(file);else{fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,text);}}
try {
  for(const [name,text] of Object.entries(files))write(name,text);
  for(const [i,step] of steps.entries()){
    const value=actual.results[i];assert.equal(value.ok,step.accept??true,JSON.stringify({step,value}));
    if(step.op==='apply'){
      if(value.ok){assert.deepEqual(value.invalidated,step.invalidated);for(const [name,text] of Object.entries(step.files)){write(name,text);if(text===null)delete files[name];else files[name]=text;}}
      records.push({index:i,op:'apply',accepted:value.ok,invalidated:value.invalidated??[]});continue;
    }
    let reference;
    try {reference=sass.compile(path.join(directory,step.entry),options);}catch(e){reference={error:e.message};}
    assert.equal(!reference.error,value.ok,JSON.stringify({step,reference,value}));
    if(value.ok){
      assert.equal(canonical(value.css),canonical(reference.css),JSON.stringify({step,reference,value}));
      const loaded=reference.loadedUrls.filter(url=>url.protocol==='file:').map(url=>path.relative(directory,fileURLToPath(url)).split(path.sep).join('/')).sort();
      assert.deepEqual([...value.loaded_files].sort(),loaded);
      assert.equal(value.cache_hit,step.hit);
      assert(value.watched_files.includes(step.entry));
      for(const dependency of value.dependencies){assert(loaded.includes(dependency.from));assert(loaded.includes(dependency.path));}
    }
    records.push({index:i,entry:step.entry,accepted:value.ok,cacheHit:value.cache_hit,css:value.css,dependencies:value.dependencies,referenceLoaded:reference.loadedUrls?.length});
  }
} finally {
  assert.equal(path.dirname(directory),path.resolve(os.tmpdir()));assert(path.basename(directory).startsWith('scss-incremental-'));
  fs.rmSync(directory,{recursive:true,force:true});
}
const report={utc:new Date().toISOString(),upstream:'conglinyizhi/precss@0.1.4 unmodified Compiler on every request',reference:sass.info,
  steps:steps.length,compilations:steps.filter(s=>s.op==='compile').length,records,
  engineSha256:createHash('sha256').update(fs.readFileSync(path.join(root,'web/precss-engine.mjs'))).digest('hex'),
  limits:['original multi-entry fixture, not customer migration','CSS compared through Dart Sass CSS normalization; not full Sass compatibility','cached complete entry results, not incremental AST or dependency-module evaluation']};
const output=process.argv[2];if(output)fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({steps:steps.length,compilations:report.compilations,liveDartSass:true,success:true}));
