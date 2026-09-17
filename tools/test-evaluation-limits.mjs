import {Worker,isMainThread,parentPort} from 'node:worker_threads';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {run,project} from '../web/engine.mjs';
if(isMainThread){
 const worker=new Worker(new URL(import.meta.url));
 const timer=setTimeout(()=>{worker.terminate();console.error('Evaluation stress exceeded 20 seconds');process.exitCode=1},20000);
 worker.on('message',report=>{clearTimeout(timer);fs.writeFileSync('evidence/evaluation-limits.json',JSON.stringify(report,null,2)+'\n');console.log('Evaluation limits: '+report.cases+' inputs; '+report.rejected+' rejected without uncaught failure')});
 worker.on('error',error=>{clearTimeout(timer);console.error(error);process.exitCode=1});
}else{
 const hard=['@while true {}','@for $i from 1 through 2147483647 {}',
  '@function f(){@return f()}.a{x:f()}','@mixin m(){@include m}.a{@include m}',
  '.a{x:'+ '('.repeat(200)+'1'+')'.repeat(200)+'}',
  '@function f($x){@return f($x+$x)}.a{x:f("x")}'];
 let rejected=0,total=0;
 const exercise=(input,hard=false)=>{
  const output=run(input);if(typeof output!=='string')throw Error('Non-string result');
  const error=output.startsWith('ERROR:');if(hard&&!error)throw Error('Expected bounded rejection');
  total++;if(error)rejected++;
 };
 for(const source of hard)exercise(source,true);
 let seed=20260918;
 const rng=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed};
 const atoms=['$x','0','1px','"text"','null','true','(a:1)','[1,2]','math.div(1,0)'];
 const ops=['+','-','*','/','%','==','and','or',':',',','...'];
 for(let i=0;i<800;i++){
  let expression=atoms[rng()%atoms.length];
  for(let j=0,n=1+rng()%6;j<n;j++)expression+=' '+ops[rng()%ops.length]+' '+atoms[rng()%atoms.length];
  exercise('@use "sass:math";$x:2;.a{x:'+expression+'}');
 }
 const paths=['../outside','/absolute','a\\b','http://example.test/a','a','./a','a/../a','a/../../b'];
 for(let i=0;i<paths.length;i++){
  const output=project(JSON.stringify({entry:'main.scss',files:{'main.scss':'@use '+JSON.stringify(paths[i])+';','_a.scss':'$n:1;'}}));
  total++;if(output.startsWith('ERROR:'))rejected++;
 }
 parentPort.postMessage({seed:20260918,cases:total,rejected,uncaught:0,hardRejectionCases:hard.length,
  engineSHA256:createHash('sha256').update(fs.readFileSync('web/engine.mjs')).digest('hex'),
  scope:'Seeded bounded expression stress, extreme loops/recursion, and module path rejection. No full-language conformance or fuzzing completeness claim.'});
}
