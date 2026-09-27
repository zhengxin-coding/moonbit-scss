import {project_session_message_json} from './precss-engine.mjs';
self.onmessage=({data})=>{
  try{
    const request=data.reset
      ? {op:'reset',entry:data.entry,files:data.files}
      : {op:'run',entry:data.entry,changes:data.changes};
    self.postMessage({id:data.id,...JSON.parse(project_session_message_json(JSON.stringify(request)))});
  }catch(error){
    self.postMessage({id:data.id,ok:false,session_ready:false,applied:false,error:String(error.message||error)});
  }
};