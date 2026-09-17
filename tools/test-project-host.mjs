import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {project} from '../web/engine.mjs';
import {readProject} from './project-host.mjs';
import {sample} from '../web/samples.mjs';
const rows=[];
function check(name,fn){fn();rows.push({name,passed:true})}
function cli(args,input){return spawnSync(process.execPath,['tools/cli.mjs',...args],{input,encoding:'utf8',timeout:15000})}
check('real directory matches browser project sample',()=>{
 const actual=JSON.parse(project(JSON.stringify(readProject('examples/modules'))));
 const browser=JSON.parse(project(JSON.stringify(sample)));
 assert.deepEqual(actual,browser);assert.match(actual.css,/padding: 12px/);
 assert.deepEqual(actual.loadedFiles,['theme/_tokens.scss','theme/_index.scss','main.scss']);
});
check('CLI directory JSON output and status',()=>{const r=cli(['--project','examples/modules','--json']);assert.equal(r.status,0,r.stderr);const v=JSON.parse(r.stdout);assert.equal(v.ok,true);assert.equal(v.loadedFiles.length,3)});
check('CLI project stdin',()=>{const r=cli(['--project-json','--json'],JSON.stringify(sample));assert.equal(r.status,0,r.stderr);assert.match(JSON.parse(r.stdout).output,/color: teal/)});
check('CLI rejects conflicting sources',()=>assert.equal(cli(['--project','examples/modules','--input','a{}']).status,1));
check('CLI missing dependency exit 2',()=>{const r=cli(['--project-json','--json'],JSON.stringify({entry:'a.scss',files:{'a.scss':'@use "missing";'}}));assert.equal(r.status,2);assert.equal(JSON.parse(r.stdout).ok,false)});
check('CLI diagnostics separate stderr',()=>{const r=cli(['--project-json'],JSON.stringify({entry:'a.scss',files:{'a.scss':'@warn "note";.a{x:1}'}}));assert.equal(r.status,0);assert.match(r.stderr,/warn: note/);assert.doesNotMatch(r.stdout,/warn/)});
check('CLI disallows entry escape',()=>assert.equal(cli(['--project','examples/modules','--entry','../main.scss']).status,1));
check('project protocol validates file values',()=>assert.match(project('{"entry":"a.scss","files":{"a.scss":1}}'),/^ERROR:/));
check('project protocol rejects malformed JSON',()=>assert.match(project('{"entry"'),/^ERROR:/));
check('project file count limit',()=>assert.match(project(JSON.stringify({entry:'a.scss',files:Object.fromEntries(Array.from({length:257},(_,i)=>[i+'.scss','']))})),/^ERROR:/));
check('source limit',()=>assert.match(project(JSON.stringify({entry:'a.scss',files:{'a.scss':' '.repeat(100001)}})),/^ERROR:/));
check('case-sensitive virtual paths',()=>assert.match(project(JSON.stringify({entry:'a.scss',files:{'a.scss':'@use "X";','x.scss':''}})),/^ERROR:/));
const fixtures=path.resolve('_build/host-fixtures');fs.mkdirSync(fixtures,{recursive:true});
const folder=fs.mkdtempSync(path.join(fixtures,'symlink-'));
fs.symlinkSync(path.resolve('examples/modules'),path.join(folder,'linked'),'junction');
check('filesystem loader rejects junctions',()=>assert.throws(()=>readProject(folder),/symbolic links/));
fs.writeFileSync('evidence/project-host.json',JSON.stringify({cases:rows.length,passed:rows.length,node:process.version,
engineSHA256:createHash('sha256').update(fs.readFileSync('web/engine.mjs')).digest('hex'),rows},null,2)+'\n');
console.log('Project host: '+rows.length+' checks passed');
