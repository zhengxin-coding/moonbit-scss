import fs from 'node:fs';
import path from 'node:path';
export function readProject(directory,entry='main.scss'){
  const root=fs.realpathSync(directory),files={};
  if(!fs.statSync(root).isDirectory())throw Error('Project root must be a directory');
  if(!/\.scss$/.test(entry)||entry.includes('\\')||entry.includes(':')||entry.startsWith('/')||entry.split('/').includes('..'))
    throw Error('Entry must be a relative SCSS path inside the project');
  let bytes=0,visited=0;
  function walk(dir){
    for(const item of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
      if(++visited>4096)throw Error('Project scan exceeds 4096 entries');
      if(['.git','node_modules','_build','target'].includes(item.name))continue;
      const dest=path.join(dir,item.name),relative=path.relative(root,dest);
      if(relative.startsWith('..')||path.isAbsolute(relative))throw Error('Project path escapes root');
      if(item.isSymbolicLink())throw Error('Project loader does not follow symbolic links: '+relative);
      if(item.isDirectory()){walk(dest);continue}
      if(!item.isFile()||!item.name.endsWith('.scss'))continue;
      if(Object.keys(files).length>=256)throw Error('Project exceeds 256 SCSS files');
      const size=fs.statSync(dest).size;
      if(size>400000||bytes+size>2097152)throw Error('Project source exceeds byte limit');
      bytes+=size;
      files[relative.replaceAll('\\','/')]=fs.readFileSync(dest,'utf8');
    }
  }
  walk(root);
  return {entry,files};
}
