import * as sass from 'sass';
const options={style:'expanded',charset:false,logger:{warn(){},debug(){}}};
for(const expression of ['red','RED','#ABC','#aabbccdd','rgb(255,0,0)','rgb(50%,0%,100%)','rgb(12.3,5,6)','rgba(red,.4)','hsl(120,50%,25%)','mix(red,blue)','lighten(#333,10%)','darken(red,10%)','transparent','red == #ff0000','red + blue','alpha(opacity=50)','rgb(var(--r),0,0)','rgb(1 2 3 / .5)','color.change(red,$alpha:.2)','color.adjust(red,$red:-10)','color.scale(red,$lightness:-20%)']){
 try{console.log(JSON.stringify({expression,css:sass.compileString('@use "sass:color"; @use "sass:meta"; a{v:'+expression+';}',options).css}));}catch(e){console.log(JSON.stringify({expression,error:e.message}));}
}
