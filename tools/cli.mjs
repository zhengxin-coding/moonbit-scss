import fs from 'node:fs';
import {run,project} from '../web/engine.mjs';
import {readProject} from './project-host.mjs';
const args=process.argv.slice(2);let input, json=false,projectRoot,entry='main.scss',projectJson=false;
try {
 for(let i=0;i<args.length;i++){
  const a=args[i];
  if(a==='--help'){process.stdout.write('Usage: node tools/cli.mjs [--input TEXT | --file PATH] [--json] [--project-json]\n       node tools/cli.mjs --project DIRECTORY [--entry main.scss] [--json]\nWithout a source, reads UTF-8 stdin. --project-json accepts {entry,files}.\nProject mode reads bounded SCSS files under the explicit directory; symlinks are rejected.\nExit: 0 success, 2 compiler rejection, 1 host error.\n');process.exit(0)}
  else if(a==='--json')json=true;
  else if(a==='--project-json')projectJson=true;
  else if(a==='--project'||a==='--entry'){
   if(i+1>=args.length)throw Error('Missing '+a+' value');
   if(a==='--project'){if(projectRoot!==undefined)throw Error('Duplicate project root');projectRoot=args[++i]}
   else entry=args[++i];
  }
  else if(a==='--input'||a==='--file'){
   if(input!==undefined||i+1>=args.length)throw new Error('Exactly one input source is required');
   const value=args[++i];
   if(a==='--file'){if(fs.statSync(value).size>2097152)throw new Error('Input exceeds 2 MiB');input=fs.readFileSync(value,'utf8')}else input=value;
  }else throw new Error('Unknown argument: '+a);
 }
 if(projectRoot!==undefined){
  if(input!==undefined||projectJson)throw Error('Project directory cannot be combined with another source');
  input=JSON.stringify(readProject(projectRoot,entry));projectJson=true;
 }
 if(input===undefined){let size=0;const chunks=[];for await(const chunk of process.stdin){size+=chunk.length;if(size>4194304)throw new Error('Input exceeds 4 MiB');chunks.push(chunk)}input=Buffer.concat(chunks).toString('utf8')}
 if(Buffer.byteLength(input)>4194304)throw new Error('Input exceeds 4 MiB');
 let output=projectJson?project(input):run(input),ok=!output.startsWith('ERROR:'),result;
 if(ok&&projectJson){result=JSON.parse(output);output=result.css}
 process.stdout.write(json?JSON.stringify({ok,output,...(result?{loadedFiles:result.loadedFiles,diagnostics:result.diagnostics}:{})})+'\n':output+(output.endsWith('\n')?'':'\n'));
 if(!json&&result?.diagnostics.length)process.stderr.write(result.diagnostics.join('\n')+'\n');
 process.exitCode=ok?0:2;
}catch(e){process.stderr.write(JSON.stringify({ok:false,error:String(e.message||e)})+'\n');process.exitCode=1}
