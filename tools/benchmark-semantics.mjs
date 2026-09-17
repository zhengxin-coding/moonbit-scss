import * as sass from 'sass';
import fs from 'node:fs';
import os from 'node:os';
import {performance} from 'node:perf_hooks';
import {createHash} from 'node:crypto';
import {run,project} from '../web/engine.mjs';
import {sample} from '../web/samples.mjs';
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
const canonical=css=>sass.compileString(css,{...options,syntax:'css',style:'compressed'}).css;
const cases=[
 {name:'200 generated rules with function and unit arithmetic',source:'@function gap($i){@return $i * 2px}@for $i from 1 through 200{.x-#{$i}{padding:gap($i);width:gap($i)+1px}}'},
 {name:'100 map iterations with mixin and selector nesting',source:'@mixin card($v){padding:$v;&:hover{padding:$v * 2}}$m:('+Array.from({length:100},(_,i)=>'n'+i+':'+i+'px').join(',')+');@each $name,$v in $m{.#{$name}{@include card($v)}}'},
 {name:'three-file configured module project',files:true}
];
const rows=[];
for(const input of cases){
 const ours=()=>input.files?JSON.parse(project(JSON.stringify(sample))).css:run(input.source);
 const reference=()=>input.files?sass.compile('examples/modules/main.scss',options).css:sass.compileString(input.source,options).css;
 const expected=reference(),actual=ours();if(canonical(expected)!==canonical(actual))throw Error('Benchmark outputs differ');
 for(let i=0;i<3;i++){ours();reference()}
 const measurements={moonbit:[],dartSass:[]};
 for(let i=0;i<7;i++){
  for(const name of i%2?['dartSass','moonbit']:['moonbit','dartSass']){
   const start=performance.now();(name==='moonbit'?ours:reference)();measurements[name].push(performance.now()-start);
  }
 }
 const stats=values=>{const sorted=[...values].sort((a,b)=>a-b);return{medianMs:sorted[3],minMs:sorted[0],maxMs:sorted[6],samplesMs:values}};
 rows.push({name:input.name,cssBytes:Buffer.byteLength(actual),canonicalSHA256:createHash('sha256').update(canonical(actual)).digest('hex'),moonbit:stats(measurements.moonbit),dartSass:stats(measurements.dartSass)});
}
fs.writeFileSync('evidence/semantic-benchmark.json',JSON.stringify({node:process.version,platform:process.platform,arch:process.arch,cpu:os.cpus()[0]?.model,reference:sass.info,
  engineSHA256:createHash('sha256').update(fs.readFileSync('web/engine.mjs')).digest('hex'),warmups:3,measurements:7,rows,
  scope:'Single-process synchronous JS API latency; interleaved order. Module MoonBit includes JSON bridge, Sass includes filesystem reads. Different feature sets; these small workloads do not establish full performance parity or peak memory.'},null,2)+'\n');
console.log(JSON.stringify(rows.map(({name,moonbit,dartSass})=>({name,moonbitMs:moonbit.medianMs,sassMs:dartSass.medianMs}))));
