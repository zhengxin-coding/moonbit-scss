import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import * as sass from 'sass';
import {compile_project_json} from '../web/precss-engine.mjs';

const root=fileURLToPath(new URL('../',import.meta.url));
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const dep=path.join(root,'.mooncakes/conglinyizhi/precss');
assert.match(fs.readFileSync(path.join(dep,'moon.mod'),'utf8'),/version = "0\.1\.4"/);
assert.match(sass.info,/dart-sass\s+1\.104\.0/);
assert.equal(hash(path.join(root,'web/precss-engine.mjs')),hash(path.join(root,'_build/js/debug/build/cmd/precss/precss.js')),'Rebuild and refresh the actual engine');
const cases=[
  {name:'basic-nesting-overlap',entry:'main.scss',files:{'main.scss':'$gap: 4px; .box { padding: $gap; .child {margin: 2px} }'},referenceAccepts:true,upstreamMatches:true},
  {name:'configured-forward-project',...JSON.parse(fs.readFileSync(new URL('../examples/precss-project.json',import.meta.url))),referenceAccepts:true,upstreamMatches:false},
  {name:'placeholder-extend',entry:'main.scss',files:{'main.scss':'%base {color: red} .button {@extend %base}'},referenceAccepts:true,upstreamMatches:false},
  {name:'relative-diamond-load-once',entry:'styles/main.scss',files:{'styles/main.scss':'@use "../a"; @use "../b"; .entry {width: a.$n + b.$n}','_a.scss':'@use "shared"; $n:shared.$n;','_b.scss':'@use "shared"; $n:shared.$n;','_shared.scss':'$n: 2px; .shared {color: blue}'},referenceAccepts:true,upstreamMatches:false},
  {name:'ambiguous-partial-rejected',entry:'main.scss',files:{'main.scss':'@use "tokens"; .x {width: tokens.$n}','tokens.scss':'$n:1px','_tokens.scss':'$n:2px'},referenceAccepts:false},
  {name:'private-member-rejected',entry:'main.scss',files:{'main.scss':'@use "tokens"; .x {width: tokens.$-secret}','_tokens.scss':'$-secret:2px'},referenceAccepts:false}
];
const scratch=fs.mkdtempSync(path.join(os.tmpdir(),'scss-precss-reference-'));
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const rows=[];
try {
  for (const [index,input] of cases.entries()) {
    const directory=path.join(scratch,String(index));
    for (const [name,text] of Object.entries(input.files)) {
      const file=path.resolve(directory,name);
      assert(file.startsWith(directory+path.sep));
      fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,text);
    }
    let reference;
    try {reference={ok:true,css:sass.compile(path.join(directory,input.entry),options).css};}
    catch(error){reference={ok:false,error:error.message.replaceAll(scratch,'<fixture>')};}
    const upstream=JSON.parse(compile_project_json(JSON.stringify(input),false));
    const extended=JSON.parse(compile_project_json(JSON.stringify(input),true));
    const equivalent=actual=>{
      if(!reference.ok)return !actual.ok;
      if(!actual.ok)return false;
      try{return canonical(actual.css)===canonical(reference.css);}catch{return false;}
    };
    const row={input,reference,upstream,extended,upstreamMatches:equivalent(upstream),extendedMatches:equivalent(extended)};
    rows.push(row);
    assert.equal(reference.ok,input.referenceAccepts,`${input.name}: expected reference contract`);
    assert.equal(row.extendedMatches,true,JSON.stringify(row));
    if(input.upstreamMatches!==undefined)assert.equal(row.upstreamMatches,input.upstreamMatches,`${input.name}: upstream capability changed; revise comparison`);
    if(input.extra){
      // Extension owns only SCSS. The other three formats still run upstream.
      assert.equal(extended.extra.length,3);
      assert.equal(extended.extra[0].css,input.extra[0].source);
      assert.match(extended.extra[1].css,/padding: 3px/);
      assert.equal(canonical(extended.extra[2].css),canonical(sass.compileString(input.extra[2].source,{...options,syntax:'indented'}).css));
    }
  }
} finally {
  assert(path.dirname(scratch)===path.resolve(os.tmpdir())&&path.basename(scratch).startsWith('scss-precss-reference-'));
  fs.rmSync(scratch,{recursive:true,force:true});
}
const upstreamFiles=['moon.mod','LICENSE'];
function collect(relative) {
  for (const entry of fs.readdirSync(path.join(dep,relative),{withFileTypes:true})) {
    const file=`${relative}/${entry.name}`;
    if (entry.isDirectory()) collect(file);
    else if (/\.(mbt|mbti)$/.test(file)||entry.name==='moon.pkg') upstreamFiles.push(file);
  }
}
collect('core');collect('backend');upstreamFiles.sort();
const report={date:new Date().toISOString(),reference:sass.info,upstream:{module:'conglinyizhi/precss',version:'0.1.4',unmodified:true,
  sourceHashes:Object.fromEntries(upstreamFiles.map(name=>[name,hash(path.join(dep,name))]))},
  engineSha256:hash(path.join(root,'web/precss-engine.mjs')),node:process.version,platform:process.platform,total:rows.length,
  scope:'Selected shared capability, extension and rejection cases. CSS equality uses Dart Sass CSS compression; errors compare rejection only. Not a whole-language compatibility claim.',rows};
const args=process.argv.slice(2);
assert(args.length===0||(args.length===2&&args[0]==='--output'),'Use --output FILE');
if(args.length)fs.writeFileSync(args[1],JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({cases:rows.length,extensionMatchesReference:rows.filter(r=>r.extendedMatches).length,upstreamMatchesReference:rows.filter(r=>r.upstreamMatches).length,liveUpstream:true,liveDartSass:true}));
