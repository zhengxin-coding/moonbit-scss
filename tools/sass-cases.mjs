// Original inputs. Expected CSS is computed independently by pinned Dart Sass.
const cases=[];
const add=(name,source)=>cases.push({name,source});
for(const parent of ['.a','.a, .b','nav > .item','#main .card']){
 for(const child of ['.x, .y','&:hover','& + &','[dir="rtl"] &',':not(&)','&:not(&)',':is(&, .fallback)','[data-value="a,b&"]',':is(.x, .y)','&--active']){
  add('selector '+parent+' / '+child,`${parent} { ${child} { color: red; padding: 1px; } }`);
 }
}
for(const values of [['red','blue'],['10px','20px'],['"hello"','"world"']]){
 const [a,b]=values;
 add('variable scope '+a,`$value:${a}; .a {$value:${b}; x:$value} .b{x:$value}`);
 add('default variable '+a,`$value:${a}; $value:${b} !default; .a{x:$value}`);
 add('null default '+a,`$value:null; $value:${a} !default; .a{x:$value}`);
 add('global write '+a,`$value:${a}; .a{$value:${b} !global; x:$value} .b{x:$value}`);
 add('lexical mixin scope '+a,`$value:${a}; @mixin m{x:$value} $value:${b}; .a{$value:${a}; @include m}`);
}
for(const color of ['red','blue','#123456'])for(const width of ['1px','2rem','0']){
 add('mixin positional '+color+width,`@mixin border($color,$width:1px){border:$width solid $color} .a{display:block;@include border(${color},${width});margin:0}`);
 add('mixin keyword '+color+width,`@mixin border($color:red,$width:1px){border:$width solid $color} .a{@include border($width:${width},$color:${color})}`);
 add('mixin default '+color+width,`@mixin border($color:${color},$width:${width}){border:$width solid $color;&:hover{color:$color}} .a,.b{@include border}`);
}
add('dependent parameter default','@mixin m($a,$b:$a){x:$a;y:$b}.a{@include m(red)}');
add('variadic arguments','@mixin m($a,$rest...){x:$a;box-shadow:$rest}.a{@include m(red,0 0 1px black,1px 2px blue)}');
add('empty variadic','@mixin m($rest...){x:$rest}.a{@include m}');
add('mixin identifier normalization','@mixin card_style($main_color:red){color:$main-color}.a{@include card-style($main-color:blue)}');
add('variable identifier normalization','$main_color:red;.a{color:$main-color}');
add('content body','@mixin wrapper{before:yes;@content;after:yes}.a{@include wrapper{color:red;&:hover{color:blue}}}');
add('content caller scope','$color:red;@mixin wrapper($color:blue){x:$color;@content}.a{$color:green;@include wrapper{y:$color}}');
add('content under selector','@mixin hover{&:hover{@content}}.a,.b{@include hover{color:red}}');
add('content optional','@mixin wrapper{x:1;@content;y:2}.a{@include wrapper}');
add('nested content forwarding','@mixin inner{.inner{@content}} @mixin outer{@include inner{@content}} .a{@include outer{x:1}}');
add('mixin nested definition','@mixin outer($c){@mixin inner{color:$c}@include inner}.a{@include outer(red)}');
add('basic interpolation','$name:card;$color:red;.#{$name}{#{$name}-color:$color;content:"name=#{$name}"}');
add('quoted interpolation','$name:"card";.#{$name}{content:"#{$name}"}');
add('mixin interpolation','@mixin item($name,$value){.#{$name}{color:$value}}@include item(card,red)');
add('interpolated nested parent','$state:hover;.a{&:#{$state}{color:red}}');
add('supports group','@supports (display: grid){.a{display:grid}}');
add('supports nested','.a{@supports (display: grid){display:grid}}');
add('media nested selector','.a,.b{@media screen and (min-width: 20px){x:1;&:hover{x:2}}}');
add('media content','@mixin media{@media screen{@content}}.a{@include media{x:1}}');
add('layer group','@layer components {.a{x:1}}');
add('font face','@font-face{font-family:demo;src:url(https://example.test/font.woff2)}');
add('nested properties','.a{font:{family:serif;size:12px}border:{color:red;style:solid}}');
add('silent comments','// top\n.a{// inner\ncolor:red; // tail\nmargin:0}');
add('quote commas in arguments','@mixin m($a,$b){content:$a;background:$b}.a{@include m("a,b",url("x,y"))}');
add('parent reference remains attribute data','.a{[title="&"]{content:"&"}}');
add('empty mixin does not split rule','@mixin empty{}.a{x:1;@include empty;y:2}');
add('mixin overwriting','@mixin m{x:1}@mixin m{x:2}.a{@include m}');
add('unused default does not evaluate','$x:red;$x:$missing !default;.a{x:$x}');
add('custom property variable remains literal','$c:red;.a{--literal:$c;--expanded:#{$c}}');
add('font face bubbles out of selector','.a{@font-face{font-family:demo;src:url(x.woff)}color:red}');
add('error content outside mixin','@content;');
for(const [name,source] of [
 ['unknown mixin','.a{@include missing}'],
 ['missing argument','@mixin m($a){x:$a}.a{@include m}'],
 ['too many arguments','@mixin m($a){x:$a}.a{@include m(1,2)}'],
 ['unknown keyword','@mixin m($a:1){x:$a}.a{@include m($b:2)}'],
 ['duplicate keyword','@mixin m($a:1){x:$a}.a{@include m($a:2,$a:3)}'],
 ['duplicate positional','@mixin m($a){x:$a}.a{@include m(1,$a:2)}'],
 ['duplicate parameter','@mixin m($a,$a){x:$a}.a{@include m(1,2)}'],
 ['invalid suffix','[a]{&-x{x:1}}'],
 ['invalid parent position','.a{span&{x:1}}'],
 ['mismatched brackets','.a{[x=(]){x:1}}'],
 ['unknown interpolation variable','.#{$missing}{x:1}'],
])add('error '+name,source);
export default cases;
