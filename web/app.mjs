import config from './config.mjs';
import {sample} from './samples.mjs';
const $=id=>document.getElementById(id);
let files={},entry='',active='',worker=null,timer=null,lastCSS='',requestSeq=0,revision=0,pending=null,syncedFiles=null;
$('title').textContent=config.title;
$('version').textContent='v'+config.version;
$('limits').textContent=config.limitations;
function save(){if(active)files[active]=$('input').value}
function message(text,error=false){$('status').textContent=text;$('status').className=error?'error':''}
function invalidate(){lastCSS='';$('download').disabled=true;$('output').textContent='编译后显示 CSS';$('output').className='';$('metadata').textContent='';}
function clearPending(){if(timer)clearTimeout(timer);timer=null;pending=null;$('cancel').disabled=true;$('run').disabled=false}
function disposeSession(){
  revision++;
  if(worker)worker.terminate();
  worker=null;syncedFiles=null;clearPending();
}
function render(){
  for(const id of ['files','entry']){
    $(id).replaceChildren();
    for(const name of Object.keys(files)){const option=document.createElement('option');option.value=name;option.textContent=name;$(id).append(option)}
  }
  $('files').value=active;$('entry').value=entry;
  $('input').value=files[active]??'';$('filename').textContent=active;
  $('remove').disabled=Object.keys(files).length<2;
}
function snapshot(){return Object.assign(Object.create(null),files)}
function delta(previous,next){
  const changes=Object.create(null);
  for(const name of Object.keys(previous))if(!Object.hasOwn(next,name))changes[name]=null;
  for(const [name,source] of Object.entries(next))if(!Object.hasOwn(previous,name)||previous[name]!==source)changes[name]=source;
  return changes;
}
function failWorker(current,text){
  if(current!==worker)return;
  current.terminate();worker=null;syncedFiles=null;clearPending();invalidate();message(text,true);
}
function ensureWorker(){
  if(worker)return worker;
  const current=new Worker(new URL('./worker.mjs',import.meta.url),{type:'module'});
  worker=current;
  current.onerror=event=>failWorker(current,'编译器会话已丢弃：'+event.message+'。下次编译会从当前文件重建。');
  current.onmessage=({data})=>{
    if(current!==worker||!pending||data.id!==pending.id)return;
    if(timer)clearTimeout(timer);timer=null;
    const completed=pending;pending=null;
    $('cancel').disabled=true;$('run').disabled=false;
    if(data.applied)syncedFiles=completed.snapshot;
    if(!data.session_ready){current.terminate();worker=null;syncedFiles=null}
    if(completed.revision!==revision){message('项目在编译期间又有编辑；已丢弃旧结果，请再次编译。');return}
    if(!data.ok){
      $('output').textContent=data.error||'编译失败';$('output').className='error';
      $('metadata').textContent=data.session_ready?'当前 CSS 已清除；会话仍可在修复后重试。':'当前 CSS 已清除；下次编译会重建会话。';
      message('编译失败',true);return;
    }
    lastCSS=data.css;$('output').textContent=data.css||'（没有 CSS 输出）';$('output').className='';$('download').disabled=false;
    const invalidated=data.invalidated?.length?data.invalidated.join(', '):'无';
    const dependencies=(data.dependencies||[]).map(edge=>edge.from+' → '+edge.path).join('\n')||'（无模块边）';
    $('metadata').textContent='入口：'+data.entry+' · '+(data.cache_hit?'缓存命中':'已编译')+
      '\n本次失效入口：'+invalidated+
      '\n加载文件：'+(data.loaded_files||[]).join(' → ')+
      '\n依赖边：\n'+dependencies+
      ((data.diagnostics||[]).length?'\n'+data.diagnostics.join('\n'):'');
    message('编译完成 · '+data.loaded_files.length+' 个文件 · '+(performance.now()-completed.start).toFixed(0)+' ms');
  };
  return current;
}
function execute(forceReset=false){
  save();if(pending)return;
  const current=ensureWorker(),sent=snapshot(),reset=forceReset||syncedFiles===null,id=++requestSeq,start=performance.now();
  pending={id,revision,snapshot:sent,start};invalidate();
  message(reset?'正在建立项目会话并编译…':'正在应用文件变更并编译…');$('run').disabled=true;$('cancel').disabled=false;
  timer=setTimeout(()=>{
    if(!pending||pending.id!==id)return;
    current.terminate();if(worker===current)worker=null;syncedFiles=null;clearPending();invalidate();
    message('编译超时；Worker 会话已销毁。再次编译将从当前完整快照重建。',true);
  },5000);
  try{
    current.postMessage(reset?{id,reset:true,entry,files:sent}:{id,reset:false,entry,changes:delta(syncedFiles,sent)});
  }catch(error){failWorker(current,'无法发送编译请求；会话已销毁：'+String(error.message||error))}
}
function load(project){
  disposeSession();files=Object.assign(Object.create(null),project.files);entry=project.entry;active=entry;
  invalidate();render();execute(true);
}
function download(name,text,type){
  const url=URL.createObjectURL(new Blob([text],{type}));
  const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$('run').onclick=()=>execute();
$('cancel').onclick=()=>{disposeSession();invalidate();message('编译已取消；会话已销毁，下次编译会重建。')};
$('reset').onclick=()=>load(sample);
$('files').onchange=()=>{save();active=$('files').value;render()};
$('entry').onchange=()=>{save();entry=$('entry').value;revision++;invalidate();message('入口已更改，点击编译')};
$('input').oninput=()=>{save();revision++;invalidate();message('内容已修改，点击编译')};
$('input').onkeydown=event=>{if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();execute()}};
$('add').onclick=()=>{
  const name=$('new-file').value.trim();
  if(!/^(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+\.scss$/.test(name)){message('文件名需为相对 .scss 路径，例如 theme/_tokens.scss',true);return}
  if(Object.hasOwn(files,name)){message('文件已存在',true);return}
  if(Object.keys(files).length>=256){message('最多 256 个文件',true);return}
  save();files[name]='';active=name;$('new-file').value='';revision++;invalidate();render();message('文件已添加；编译时作为增量发送');
};
$('remove').onclick=()=>{
  if(Object.keys(files).length<2)return;
  save();delete files[active];active=Object.keys(files)[0];if(!Object.hasOwn(files,entry))entry=active;
  revision++;invalidate();render();message('文件已移除；编译时作为删除发送');
};
$('download').onclick=()=>download('compiled.css',lastCSS,'text/css;charset=utf-8');
$('export').onclick=()=>{save();download('scss-project.json',JSON.stringify({entry,files},null,2),'application/json')};
$('import-open').onclick=()=>$('import').click();
$('import').onchange=async event=>{
  try{
    const file=event.target.files[0];if(!file)return;
    if(file.size>4194304)throw Error('项目 JSON 超过 4 MiB');
    const value=JSON.parse(await file.text());
    if(!value||typeof value.entry!=='string'||!value.files||Array.isArray(value.files)||typeof value.files!=='object')throw Error('需要 entry 与 files 字段');
    if(Object.keys(value.files).length>256||!Object.hasOwn(value.files,value.entry)||Object.values(value.files).some(x=>typeof x!=='string'))throw Error('入口或文件内容无效');
    load(value);
  }catch(error){message('导入失败：'+error.message,true)}
  finally{event.target.value=''}
};
load(sample);