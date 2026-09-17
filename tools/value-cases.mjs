// Original semantic probes; the official pinned compiler supplies expected values.
const cases=[];
const add=(name,source)=>cases.push({name,source});
const value=(name,expression,setup='')=>add(name,setup+'.probe { value: '+expression+'; }');
for(const a of ['1','-2.5','0','3px','2cm','1s'])for(const b of ['2','1px','1cm','500ms'])
  for(const op of ['+','-','*','/','%','==','!=','>','<='])
    value('operator '+a+' '+op+' '+b,'('+a+' '+op+' '+b+')');
for(const expr of ['1 + 2 * 3','(1 + 2) * 3','12/3','(12/3)','12px/3px',
  'true or $missing','false and $missing','not null','not 0','true and 12px','null or hello',
  'if(true, 2px, $missing)','if(false, $missing, 3px)','"a" + "b"','a + "b"','"a" + 3',
  '#{1 + 2} + 4','1 -2','1 - 2','1+2','1 +2','(1/0)','(-1/0)','(0/0)','1in + 96px'])
  value('expression '+expr,expr);
for(const expr of ['math.div(1in,96px)','math.div(1,3)','math.pow(2,8)','math.sqrt(9)',
  'math.abs(-2px)','math.round(-1.5)','math.ceil(1.2px)','math.floor(-1.2px)',
  'math.percentage(.25)','math.unit(1px * 1s)','math.is-unitless(1px / 1px)',
  'math.compatible(1in,2cm)','math.min(2cm, 1in)','math.max(2cm, 1in)',
  'math.div($number2: 4, $number1: 12)','math.div(1px,1s)','math.sqrt(1px)'])
  value('math '+expr,expr,'@use "sass:math";');
for(const expr of ['list.length(1 2 3)','list.nth((a,b,c), -1)','list.set-nth((a,b,c),2,x)',
  'list.index(1in 96px 3px,96px)','list.append(1 2,3)','list.append([1,2],3)',
  'list.append((1,2),3,space)','list.join((1,2),3 4)','list.join(1 2,(3,4),comma,true)',
  'list.separator((a,b))','list.is-bracketed([a b])','list.slash(1,2,3)',
  'list.nth((1,2),0)','list.nth((1,2),3)','list.nth((),1)'])
  value('list '+expr,expr,'@use "sass:list";');
for(const expr of ['map.get((a:1,b:2), b)','map.has-key((a:null),a)','map.get((a:1),x)',
  'map.keys((a:1,b:2))','map.values((a:1,b:2))','map.keys(map.merge((a:1,b:2),(b:3,c:4)))',
  'map.values(map.remove((a:1,b:2,c:3),a,c))','map.get((a:(b:2)),a)','map.get((a:1,a:2),a)'])
  value('map '+expr,expr,'@use "sass:map";');
for(const expr of ['string.quote(abc)','string.unquote("abc")','string.length("a😀中")',
  'string.slice("abcdef",2,-2)','string.slice("abc",5)','string.slice("abc",-10,2)',
  'string.index("a😀b😀","😀")','string.index("abc","")','string.insert("abcd","X",-1)',
  'string.insert("abcd","X",0)','string.to-upper-case("aZ中")','string.to-lower-case("AZ中")'])
  value('string '+expr,expr,'@use "sass:string";');
for(const expr of ['meta.type-of(1px)','meta.type-of("hello")','meta.type-of(false)','meta.type-of(null)',
  'meta.type-of(())','meta.type-of((a:1))','meta.inspect((a: 1, b: (2,3)))',
  'meta.variable-exists("x")','meta.global-variable-exists("x")'])
  value('meta '+expr,expr,'@use "sass:meta";$x:1;');
add('function optional keyword and lexical scope','$x:2;@function f($a,$b:$a*2){@return $a+$b+$x}.a{$x:100;x:f(3);y:f($b:7,$a:2)}');
add('recursive factorial','@function fac($n){@if $n<=1{@return 1}@return $n*fac($n - 1)}.a{x:fac(6)}');
add('recursive fibonacci','@function fib($n){@if $n<2{@return $n}@return fib($n - 1)+fib($n - 2)}.a{x:fib(8)}');
add('function variadic loop sum','@function sum($xs...){$total:0;@each $x in $xs{$total:$total+$x}@return $total}.a{x:sum(1px,2px,3px)}');
add('function positional spread','@function f($a,$b,$c:4){@return $a+$b+$c}$v:1,2;.a{x:f($v...)}');
add('function keyword spread','@function f($a,$b){@return $a+$b}$v:("b":2,"a":3);.a{x:f($v...)}');
add('function side effect','$global:0;@function f(){$global:3 !global;@return 7}.a{x:f();y:$global}');
add('function early return in for','@function f(){@for $i from 1 through 10{@if $i==3{@return $i}}@return 0}.a{x:f()}');
add('loop variable scope','$i:99;@for $i from 1 through 3{.item-#{$i}{x:$i*2}}.after{x:$i}');
add('descending exclusive for','@for $i from 3 to 0{.n-#{$i}{x:$i}}');
add('for no iterations','@for $i from 1 to 1{.a{x:1}}');
add('while outer assignment','$i:3;@while $i>0{.item-#{$i}{x:$i}$i:$i - 1}.a{x:$i}');
add('each destructuring','@each $name,$size in (small,1px),(large,2px){.#{$name}{x:$size}}');
add('each map iteration','$sizes:(small:1px,large:2px);@each $name,$size in $sizes{.#{$name}{x:$size}}');
add('flow local does not leak','@if true{$new:2}.a{x:$new}');
add('flow existing assignment','$a:1;@if true{$a:2}.a{x:$a}');
add('conditional chains','@if false{.a{x:1}}@else if 0{.b{x:2}}@else{.c{x:3}}');
add('conditional branch lazy','@if true{.a{x:1}}@else if $missing{.b{x:2}}');
add('standard module alias','@use "sass:math" as m;.a{x:m.div(6,2)}');
add('interpolation nested call','$n:2;.n-#{if($n>1,"yes","no")}{x:#{$n*3};content:"sum=#{1+2}"}');
for(const [name,source] of [
  ['no return','@function f($a){$x:1}.a{x:f(1)}'],
  ['bad return','@return 1;'],
  ['CSS in function','@function f(){.a{x:1}@return 1}'],
  ['unknown keyword','@function f($x){@return $x}.a{x:f($z:1)}'],
  ['duplicate positional','@function f($x){@return $x}.a{x:f(1,$x:2)}'],
  ['duplicate parameter','@function f($x,$x){@return 1}'],
  ['orphan else','@else{.a{x:1}}'],
  ['bad bound','@for $i from 1.5 through 3{.a{x:$i}}'],
  ['module absent','.a{x:math.div(2,1)}'],
  ['duplicate module','@use "sass:math";@use "sass:math";'],
])add('error '+name,source);
for(const expr of ['list.separator(list.slash(1,2))','list.separator((a:1))',
  'list.append($list:1,$separator:comma)','list.join($list1:1,$bracketed:true)',
  'list.append(1,null)','list.nth($n:1)'])
  value('binding '+expr,expr,'@use "sass:list";');
for(const expr of ['meta.function-exists("abs")','meta.function-exists("missing")'])
  value('existence '+expr,expr,'@use "sass:meta";');
add('quoted close brace interpolation','.#{if(true,"}",a)} {content: "value #{1 + 2}"}');
add('nested interpolation selector','$n:2;.x-#{"a#{$n}"}{x:1}');
add('static return in false branch','@if false{@return 1}');
add('static nested function in unused mixin','@mixin m(){@function f(){@return 1}}');
export default cases;
