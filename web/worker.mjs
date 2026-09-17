import {project} from './engine.mjs';
self.onmessage=({data})=>{
  try{
    const output=project(JSON.stringify(data));
    self.postMessage(output.startsWith('ERROR:')?{error:output}:JSON.parse(output));
  }catch(error){self.postMessage({error:String(error.message||error)})}
};
