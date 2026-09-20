import fs from 'node:fs';
const rows=[];
const add=(name,expr)=>rows.push({name,source:'@use "sass:color"; @use "sass:meta"; @use "sass:map"; a{v:'+expr+';}'});
const named=JSON.parse(fs.readFileSync(new URL('../evidence/color-names.json',import.meta.url))).rows;
for(const expr of ['rgb(1 2 3 / .5)','rgba(50% 20% 10% / 25%)','rgb(1 2 3)','hsl(120 50% 25% / .3)','rgb(var(--channels))','hsl(120,0%,50%)','hue(hsl(120,0%,50%))','red(color.adjust(red,$red:30))'])add(expr,expr);
for(const [name]of named)add('named '+name,'meta.type-of('+name+'),red('+name+'),green('+name+'),blue('+name+'),alpha('+name+')');
for(const expr of ['#123','#ABC','#1234','#aabbccdd','#0000','#ffffffff','RED','rgb(255,0,0)','rgb(50%,0%,100%)','rgb(12.3,5,6)','rgb(1%,2,3)','rgb(-10,300,20)','rgba(0,30,200,1.2)','rgba(red,.4)','rgba(#ABC,20%)','rgba($color:red,$alpha:.25)','rgba($blue:3,$red:1,$alpha:.3,$green:2)',
 'hsl(120,50%,25%)','hsla(.5turn,100%,50%,.3)','hsl(-90,50,60)','hsl(450deg,200%,-10%)',
 'red == #ff0000','red == "red"','rgba(red,0) == rgba(blue,0)','map.get((red:yes),#ff0000)',
 'meta.type-of(rgb(1,2,3))','meta.type-of(unquote("red"))','meta.function-exists(mix)',
 'rgb(var(--r),0,0)','rgb(calc(1 + 2),5,6)','opacity(.5)','invert(40%)','grayscale(10%)','saturate(2)',
 'mix(red,blue)','mix(rgba(red,.2),rgba(blue,.8),30%)','color.mix(red,blue,$weight:0%)','mix(red,blue,100%)',
 'lighten(#333,10%)','darken(red,10%)','saturate(#6699aa,20%)','desaturate(red,20%)','adjust-hue(red,90deg)','complement(red)','color.complement(blue)','grayscale(red)','color.grayscale(#abcdef)','invert(#13579b)','color.invert(red,25%)',
 'fade-out(rgba(red,.5),.2)','fade-in(rgba(blue,.2),.4)','transparentize(red,1)','opacify(transparent,1)',
 'color.change(red,$alpha:.2)','color.change(red,$green:30,$blue:60)','color.adjust(#abcdef,$red:-20,$green:5,$blue:-30)','color.scale(red,$lightness:-20%)','color.scale(#123456,$red:20%,$green:-50%,$blue:10%)','color.adjust(red,$hue:180deg,$saturation:-20%)','color.change($color:blue,$lightness:40%)','color.adjust(red,$red:30)',
 'hue(#123456)','saturation(#123456)','lightness(#123456)','red(rgb(12.3,4.7,6.5))','color.alpha(rgba(red,.42))','lighten(hsl(120,50%,25%),10%)',
 'rgba("red",.5)','red("red")','mix(red,blue,120%)','mix(red,blue,-1%)','rgb(1px,2,3)','rgba(red)','rgba($color:red,$alpha:.2,$bad:1)','color.change(red,$red:1,$hue:1)','color.scale(red,$red:101%)','color.adjust(red,$oops:1)','lighten(red,101%)','red + blue','#12','#12345','#12zz12','rgb(1,2,3,4,5)'])add(expr,expr);
rows.push({name:'theme module with defaults, function and mixin',files:{'main.scss':'@use "tokens" with ($brand:#336699);a{@include tokens.button();}', '_tokens.scss':'@use "sass:color";$brand:red !default;@function shade($c){@return color.scale($c,$lightness:-20%);}@mixin button(){color:$brand;background:shade($brand);border-color:rgba($brand,.4);}'},entry:'main.scss'});
export default rows;
