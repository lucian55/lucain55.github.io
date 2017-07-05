---
title: sass全攻略-语法
date: 2017年3月18日10:57:46
tags: "sass"
categories: "sass"

---


## sass语法

### 文件后缀名
sass有两种文件后缀名，一种为sass，一种为scss，推荐使用scss，因为sass后缀名的格式严格，没有大括号，scss有大括号，格式和css相似

```
//文件后缀名为sass的语法
body
  background: #eee
  font-size:12px
p
  background: #0982c1

//文件后缀名为scss的语法  
body {
  background: #eee;
  font-size:12px;
}
p{
  background: #0982c1;
} 
```

### 导入
sass的导入(@import)规则和css的有所不同，编译时会将 @import 的sass文件合并进来只生成一个css文件，但是如果你在sass中引入css文件，例如 @import 'a.css'  那效果跟普通css导入样式文件一样，导入的css文件不会合并到编译后的css文件中，而是以 @import存在。
所有sass导入文件都可以忽略 .scss 后缀。 如果基础的文件命名方法以_开头，如 _mixin.scss ，这种文件在导入的时候可以不写下划线，可写成 @import 'mixin' 。


### 变量
sass的变量必须是$开头，后面紧跟变量名，变量名和变量值之间必须用冒号(:) 分隔开，如果变量值后边加  !default  则表示默认值。

#### 普通变量
定义之后可以在全局范围内使用

```
//sass style
//-------------------------------
$fontSize: 12px;
body{
    font-size:$fontSize;
}

//css style
//-------------------------------
body{
    font-size:12px;
}
```

####　默认变量
sass的默认变量仅需要在值后边加上 !default 即可

```
//sass style
//---------------------------
$baseLineHeight: 1.5!default;
body{
	lint-height:$baseLineHeight
}
//css style
//----------------------------
body{
	line-height:1.5
}
```

sass的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下即可

```
//sass style
//-------------------------------
$baseLineHeight:        2;
$baseLineHeight:        1.5 !default;
body{
    line-height: $baseLineHeight; 
}

//css style
//-------------------------------
body{
    line-height:2;
}
```

#### 特殊变量
一般我们定义的变量都为属性值，可直接使用，但是变量作为属性名或在某些特殊情况下使用，必须要以 #{$variables} 形式使用

```
//sass style
//-------------------------------
$borderDirection:       top !default; 
$baseFontSize:          12px !default;
$baseLineHeight:        1.5 !default;

//应用于class和属性
.border-#{$borderDirection}{
  border-#{$borderDirection}:1px solid #ccc;
}
//应用于复杂的属性值
body{
    font:#{$baseFontSize}/#{$baseLineHeight};
}

//css style
//-------------------------------
.border-top{
  border-top:1px solid #ccc;
}
body {
  font: 12px/1.5;
}
```

#### 多值变量
多值变量分为list类型和map类型，list类似与js的数组，map类似与js中的对象
##### list
list可以通过空格，逗号或者小括号分割多个值，可用nth($var,$index)取值，$index从1开始，关于list数据操作还有很多其它还是，如length($list),join($list1,$list2,[$separator]),append($list,$value,[$separator])等，具体可参考 [sass Function](http://sass-lang.com/documentation/Sass/Script/Functions.html)

###### 定义

```
//一维数据
$px: 5px 10px 20px 30px;

//二维数据，相当于js中的二维数组
$px: 5px 10px, 20px 30px;
$px: (5px 10px) (20px 30px);
```

###### 使用

```
//sass style
//-------------------------------
$linkColor:         #08c #333 !default;//第一个值为默认值，第二个鼠标滑过值
a{
  color:nth($linkColor,1);

  &:hover{
    color:nth($linkColor,2);
  }
}

//css style
//-------------------------------
a{
  color:#08c;
}
a:hover{
  color:#333;
}
```

##### map
map数据类型以key，value形式成对出现，其中value又可以是list。格式为： $map:(key1:value1,key2:value2,key3:value3);可以通过，map-get($map,$key)取值。同样，map也有很多函数，具体参考 [sass Function](http://sass-lang.com/documentation/Sass/Script/Functions.html)

###### 定义

```
$heading:(h1:2em,h2:1.5em,h3:1.2em);
```

###### 使用

```
//sass style
//-------------------------------
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}

//css style
//-------------------------------
h1 {
  font-size: 2em; 
}
h2 {
  font-size: 1.5em; 
}
h3 {
  font-size: 1.2em; 
}
```

### 嵌套
sass 的嵌套包括两种，一种是选择器的嵌套，一种是属性的嵌套，我们一般说起到或用到的都是选择器的嵌套
#### 选择器嵌套
选择器嵌套指的是在一个选择器中嵌套另一个选择器来实现集成，从而增强了sass文件的结构性和可读性，在选择器嵌套中，可以使用&表示父元素选择器

```
//sass style
//-------------------------------
#top_nav{
  line-height: 40px;
  text-transform: capitalize;
  background-color:#333;
  li{
    float:left;
  }
  a{
    display: block;
    padding: 0 10px;
    color: #fff;

    &:hover{
      color:#ddd;
    }
  }
}

//css style
//-------------------------------
#top_nav{
  line-height: 40px;
  text-transform: capitalize;
  background-color:#333;
}  
#top_nav li{
  float:left;
}
#top_nav a{
  display: block;
  padding: 0 10px;
  color: #fff;
}
#top_nav a:hover{
  color:#ddd;
}
```

#### 属性嵌套
所谓属性嵌套指的是有些属性用友同一个开始单词，如border-width，border-color都是以border开头。不推荐使用，很乱。官网实例如下

```
//sass style
//-------------------------------
.fakeshadow {
  border: {
    style: solid;
    left: {
      width: 4px;
      color: #888;
    }
    right: {
      width: 2px;
      color: #ccc;
    }
  }
}

//css style
//-------------------------------
.fakeshadow {
  border-style: solid;
  border-left-width: 4px;
  border-left-color: #888;
  border-right-width: 2px;
  border-right-color: #ccc; 
}
```

#### @at-root
sass 3.3.0中新增的功能，用来跳出选择器嵌套的。应用不多，暂不介绍

### 混合（mixin）
sass使用 @mixin声明混合，可以传递参数，参数名以￥符号开始，多个参数以逗号分开，也可以给参数设置默认值，声明的 @mixin 通过 @include 来调用

#### 无参数mixin

```
//sass style
//-------------------------------
@mixin center-block {
    margin-left:auto;
    margin-right:auto;
}
.demo{
    @include center-block;
}

//css style
//-------------------------------
.demo{
    margin-left:auto;
    margin-right:auto;
}
```

#### 有参数mixin

```
//sass style
//-------------------------------   
@mixin opacity($opacity:50) {
  opacity: $opacity / 100;
  filter: alpha(opacity=$opacity);
}

//css style
//-------------------------------
.opacity{
  @include opacity; //参数使用默认值
}
.opacity-80{
  @include opacity(80); //传递参数
}
```

#### 多个参数mixin
调用时可以直接传入值，如 @include 传入参数的个数小于 @mixin 定义参数的个数，则按照顺序表示，后面不足的使用默认值，如不足的没有默认值则报错，除此之外还可以选择性的传入参数，使用参数名与值同时传入。

```
//sass style
//-------------------------------   
@mixin horizontal-line($border:1px dashed #ccc, $padding:10px){
    border-bottom:$border;
    padding-top:$padding;
    padding-bottom:$padding;  
}
.imgtext-h li{
    @include horizontal-line(1px solid #ccc);
}
.imgtext-h--product li{
    @include horizontal-line($padding:15px);
}

//css style
//-------------------------------
.imgtext-h li {
    border-bottom: 1px solid #cccccc;
    padding-top: 10px;
    padding-bottom: 10px;
}
.imgtext-h--product li {
    border-bottom: 1px dashed #cccccc;
    padding-top: 15px;
    padding-bottom: 15px;
}
```

#### 多组值参数mixin
如果一个参数可以有多组值，如box-shadow，transition等，那么需要在变量后加三个点表示，如 $variables...

```
//sass style
//-------------------------------   
//box-shadow可以有多组值，所以在变量参数后面添加...
@mixin box-shadow($shadow...) {
  -webkit-box-shadow:$shadow;
  box-shadow:$shadow;
}
.box{
  border:1px solid #ccc;
  @include box-shadow(0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3));
}

//css style
//-------------------------------
.box{
  border:1px solid #ccc;
  -webkit-box-shadow:0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3);
  box-shadow:0 2px 2px rgba(0,0,0,.3),0 3px 3px rgba(0,0,0,.3),0 4px 4px rgba(0,0,0,.3);
}
```

#### @content
@content 在sass3.2.0中引入，可以用来解决css3的@media等带来的问题，它可以使@mixin接受已整块样式，接受的样式从@content开始

```
 //sass style
//-------------------------------                     
@mixin max-screen($res){
  @media only screen and ( max-width: $res )
  {
    @content;
  }
}

@include max-screen(480px) {
  body { color: red }
}

//css style
//-------------------------------
@media only screen and (max-width: 480px) {
  body { color: red }
}    
```

### 继承
sass中，选择器继承可以让选择器继承另一个选择器的所有样式，并联合声明，使用选择器的继承，要使用关键字 @extent，后边紧跟要继承的选择器

```
//sass style
//-------------------------------
h1{
  border: 4px solid #ff9aa9;
}
.speaker{
  @extend h1;
  border-width: 2px;
}

//css style
//-------------------------------
h1,.speaker{
  border: 4px solid #ff9aa9;
}
.speaker{
  border-width: 2px;
}
```

### 占位选择器 %
从sass 3.2.0以后就可以定义占位选择器%，这种选择器的有事在于，如果不调用则不会有任何多余的css文件，避免了以前在一些基础的文件中预定义了很多基础的样式，然后实际应用中不管是否使用了 @extend 去集成响应的样式，都会解析出来所有的样式，占位选择器以 % 标示定义，通过 @extend 调用

```
//sass style
//-------------------------------
%ir{
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
%clearfix{
  @if $lte7 {
    *zoom: 1;
  }
  &:before,
  &:after {
    content: "";
    display: table;
    font: 0/0 a;
  }
  &:after {
    clear: both;
  }
}
#header{
  h1{
    @extend %ir;
    width:300px;
  }
}
.ir{
  @extend %ir;
}

//css style
//-------------------------------
#header h1,
.ir{
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
#header h1{
  width:300px;
}
```
如上代码，定义了两个占位选择器 %ir和%clearfix，其中没有调用，所以解析出来的参数是样式也就没有clearfix部分，占位选择器的出现，是css文件更加简练可控，没有多余。所以可以用其定义一些基础的样式文件，然后根据需要调用产生响应的css。目前版本在 @media中暂时不能用@extend，@media外的代码片段

### 函数
sass定义了很多函数可供使用，当然你也可以自己定义函数，以@fuction开始。sass的官方函数链接为：[sass fuction](http://sass-lang.com/documentation/Sass/Script/Functions.html)
举个栗子

```
//sass style
//-------------------------------                     
$baseFontSize:      10px !default;
$gray:              #ccc !defualt;        

// pixels to rems 
@function pxToRem($px) {
  @return $px / $baseFontSize * 1rem;
}

body{
  font-size:$baseFontSize;
  color:lighten($gray,10%);
}
.test{
  font-size:pxToRem(16px);
  color:darken($gray,10%);
}

//css style
//-------------------------------
body{
  font-size:10px;
  color:#E6E6E6;
}
.test{
  font-size:1.6rem;
  color:#B3B3B3;
}
```

### 运算
sass可以对数值型的value(如颜色，数字，变量等)进行加减乘除四则运算，注意运算符前后留一个空格，否则会报错

```
$baseFontSize:          14px !default;
$baseLineHeight:        1.5 !default;
$baseGap:               $baseFontSize * $baseLineHeight !default;
$halfBaseGap:           $baseGap / 2  !default;
$samllFontSize:         $baseFontSize - 2px  !default;

//grid 
$_columns:                     12 !default;      // Total number of columns
$_column-width:                60px !default;   // Width of a single column
$_gutter:                      20px !default;     // Width of the gutter
$_gridsystem-width:            $_columns * ($_column-width + $_gutter); //grid system width
```

### 条件判断及循环

#### @if判断
@if可以单独使用，也可以和@else结合多条使用

```
//sass style
//-------------------------------
$lte7: true;
$type: monster;
.ib{
    display:inline-block;
    @if $lte7 {
        *display:inline;
        *zoom:1;
    }
}
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

//css style
//-------------------------------
.ib{
    display:inline-block;
    *display:inline;
    *zoom:1;
}
p {
  color: green; 
}
```

#### 三目运算
语法 if($condition,$if_true,$if_false)，和js中的三目运算符一个意思

```
if(true,1px,2px)=>1px
if(false,1px,2px)=>2px
```

#### @for循环
for循环有两种形式，分别为：@for $var from <start> through <end> 和 @for $var from <start> to <end> 。 $var 标示变量，start 标示起始值，end表示结束值，这两个的却别是：through包括end这个数，而to不包括end这个数

```
//sass style
//-------------------------------
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

//css style
//-------------------------------
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}
```

####　@each循环
语法： @each $var in <list or map> 。其中 $var 表示变量，list和map表示list类型数据和map类型数据。sass 3.3.0 新加入了多字段循环和map数据循环

#####　单个字段list数据循环
语法：@each $item in list

```
//sass style
//-------------------------------
$animal-list: puma, sea-slug, egret, salamander;
@each $animal in $animal-list {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

//css style
//-------------------------------
.puma-icon {
  background-image: url('/images/puma.png'); 
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); 
}
.egret-icon {
  background-image: url('/images/egret.png'); 
}
.salamander-icon {
  background-image: url('/images/salamander.png'); 
}
```

##### 多个字段list数据循环
语法：@each $item1,item2,item3 in list

```
//sass style
//-------------------------------
$animal-data: (puma, black, default),(sea-slug, blue, pointer),(egret, white, move);
@each $animal, $color, $cursor in $animal-data {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}

//css style
//-------------------------------
.puma-icon {
  background-image: url('/images/puma.png');
  border: 2px solid black;
  cursor: default; 
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
  border: 2px solid blue;
  cursor: pointer; 
}
.egret-icon {
  background-image: url('/images/egret.png');
  border: 2px solid white;
  cursor: move; 
}
```

##### 多个字段map数据循环
语法: @each $key $value in map

```
//sass style
//-------------------------------
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
@each $header, $size in $headings {
  #{$header} {
    font-size: $size;
  }
}

//css style
//-------------------------------
h1 {
  font-size: 2em; 
}
h2 {
  font-size: 1.5em; 
}
h3 {
  font-size: 1.2em; 
}
```