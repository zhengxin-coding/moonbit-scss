import config from './config.mjs';
import {sample} from './samples.mjs';
const $=id=>document.getElementById(id);
let files={},entry='',active='',worker,timer,lastCSS='',serial=0;
$('title').textContent=config.title;
$('version').textContent='v'+config.version;
$('limits').textContent=config.limitations;
function save(){if(active)files[active]=$('input').value}
function message(text,error=false){$('status').textContent=text;$('status').className=error?'error':''}
function stop(text){
  serial++;worker?.terminate();worker=null;clearTimeout(timer);
  $('cancel').disabled=true;$('run').disabled=false;
  if(text)message(text);
}
function invalidate(){lastCSS='';$('download').disabled=true;$('output').textContent='编译后显示 CSS';$('metadata').textContent='';}
function render(){
  for(const id of ['files','entry']){
    $(id).replaceChildren();
    for(const name of Object.keys(files)){const option=document.createElement('option');option.value=name;option.textContent=name;$(id).append(option)}
  }
  $('files').value=active;$('entry').value=entry;
  $('input').value=files[active]??'';$('filename').textContent=active;
  $('remove').disabled=Object.keys(files).length<2;
}
function load(project){
  stop();files=Object.assign(Object.create(null),project.files);entry=project.entry;active=entry;
  invalidate();render();execute();
}
function execute(){
  save();stop();invalidate();
  const id=serial,start=performance.now();
  message('正在编译…');$('run').disabled=true;$('cancel').disabled=false;
  worker=new Worker(new URL('./worker.mjs',import.meta.url),{type:'module'});
  timer=setTimeout(()=>{stop();message('编译超时，已停止。可修改项目后重新编译。',true)},5000);
  worker.onerror=event=>{stop();message('编译器加载失败：'+event.message,true)};
  worker.onmessage=({data})=>{
    if(id!==serial)return;
    stop();
    if(data.error){$('output').textContent=data.error;$('output').className='error';message('编译失败',true);return}
    lastCSS=data.css;$('output').textContent=data.css||'（没有 CSS 输出）';$('output').className='';
    $('download').disabled=false;
    $('metadata').textContent='加载顺序：'+data.loadedFiles.join(' → ')+
      (data.diagnostics.length?'\n'+data.diagnostics.join('\n'):'');
    message('编译完成 · '+data.loadedFiles.length+' 个文件 · '+(performance.now()-start).toFixed(0)+' ms');
  };
  worker.postMessage({entry,files});
}
function download(name,text,type){
  const url=URL.createObjectURL(new Blob([text],{type}));
  const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
$('run').onclick=execute;
$('cancel').onclick=()=>stop('编译已取消');
$('reset').onclick=()=>load(sample);
$('files').onchange=()=>{save();active=$('files').value;render()};
$('entry').onchange=()=>{save();stop();entry=$('entry').value;invalidate();message('入口已更改，点击编译')};
$('input').oninput=()=>{save();stop();invalidate();message('内容已修改，点击编译')};
$('input').onkeydown=event=>{if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();execute()}};
$('add').onclick=()=>{
  const name=$('new-file').value.trim();
  if(!/^(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]+\.scss$/.test(name)){message('文件名需为相对 .scss 路径，例如 theme/_tokens.scss',true);return}
  if(Object.hasOwn(files,name)){message('文件已存在',true);return}
  if(Object.keys(files).length>=256){message('最多 256 个文件',true);return}
  save();stop();files[name]='';active=name;$('new-file').value='';invalidate();render();message('文件已添加');
};
$('remove').onclick=()=>{
  if(Object.keys(files).length<2)return;
  stop();delete files[active];active=Object.keys(files)[0];if(!Object.hasOwn(files,entry))entry=active;
  invalidate();render();message('文件已移除');
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
