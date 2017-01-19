---
title: javascript代码规范
date: 2016-07-30 15:53:37
tags: "代码规范"
categories: "javascript"
---


> 团队代码规范-- js代码规范，用于规范团队内统一的代码风格。

## 1、缩进 

缩进的单位为四个空格。
## 2、每行长度 

避免每行超过80个字符。当一条语句一行写不下时,请考虑折行。
## 3、注释 

- 不要吝啬注释。注释应该和它们所注释的代码一样是书写良好且清晰明了。
- 及时地更新注释也很重要。错误的注释会让程序更加难以阅读和理解。
- 让注释有意义。重点在解释那些不容易立即明白的逻辑上。不要把读者的时间浪费在阅读类似于:
 `i = 0; //让i等于0`  使用单行注释。

## 4、变量声明  ##

- 所有的变量必须在使用前进行声明。JavaScript并不强制必须这么做,但是这么做可以让程序易于阅读,且也容易发现那些没声明的变量(它们会被编译成全局变量)。
- 将var语句放在函数的首部。
- 最好把每个变量的声明语句单独放到一行,并加上注释说明。所有变量按照字母排序。如下

    var currentEntry; // 当前选择项
    var level;// 缩进程度
    var size; // 表格大小

- 尽量减少全局变量的使用。不要让局部变量覆盖全局变量。
 
## 5、字符串 ##
统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处：

	var msg = 'This is some HTML <div class="makes-sense"></div>';
## 6、函数声明 ##

- 所有的函数在使用前进行声明。 内函数的声明跟在var语句的后面。这样可以帮助判断哪些变量是在函数范围内的。

        function outer(c, d) {
		    var e = c * d;
		    
		    function inner(a, b) {
		    return (e * a) + b;
		    }
		    
		    return inner(0, 1);
	    }

- 如果函数是匿名函数,则在function和((左括号)之间应有一个空格。

	    div.onclick = function (e) {
	        return false;
	    };

   
- 尽量不使用全局函数。

## 7、命名 ##

- 变量名应由26个大小写字母(A..Z,a..z),10个数字(0..9),和 _(下划线)组成。
- 不要把 _(下划线)作为变量名的第一个字符。
- 大多数的变量名和方法命应以小写字母开头。
- 必须与new共同使用的构造函数名应以大写字母开头。
- 全局变量应该全部大写。

## 8、语句 ##

### 8.1、简单语句 ###

每一行最多只包含一条语句。把;(分号)放到每条简单语句的结尾处。
### 8.2、复合语句 ###

- 复合语句是被包含在{ }(大括号)的语句序列。
- 被括起的语句必须多缩进四个空格。
- {(左大括号)应在复合语句起始行的结尾处。
- }(右大括号)应与{(左大括号)的那一行的开头对齐
- 大括号应该在所有复合语句中使用,即使只有一条语句,当它们是控制结构的一部分时, 比如一个if或者for语句。这样做可以避免以后添加语句时造成的错误。

### 8.3、严格模式 ###

ECMAScript 5 严格模式可在整个脚本或独个方法内被激活。它对应不同的 javascript 语境会做更加严格的错误检查。严格模式也确保了 javascript 代码更加的健壮，运行的也更加快速。

不推荐

    // Script starts here
    'use strict';
     
    (function(){
     
      // Your code starts here
     
    }());
推荐

    (function(){
      'use strict';
     
      // Your code starts here
     
    }());
### 8.4、变量赋值时的逻辑操作 ###
逻辑操作符 || 和 && 也可被用来返回布尔值。如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。

不推荐

    if(!x) {
      if(!y) {
    x = 1;
      } else {
    x = y;
      }
    }
推荐

    x = x || y || 1;
### 8.5、return 语句 ###

一条有返回值的return语句不要使用( )(括号)来括住返回值。如果返回表达式,则表达式应与return 关键字在同一行,以避免误加分号错误。
### 8.6、if 语句 ###

if语句应如以下格式:

    if (condition){
        statements;
    }

    if (condition) {
        statements;
    } else {
        statements;
    }

    if (condition) {
        statements;
    } else if (condition) {
        statements;
    } else {
        statements;
    }
### 8.7、for 语句 ###

for语句应如以下格式:

    for (initialization;condition; update) {
        statements;
    }

    for (variable in object){
		if (filter) {
        	statements;
		}
    }
第一种形式的循环用于已经知道相关参数的数组循环。
第二种形式应用于对象中。object原型中的成员将会被包含在迭代器中。通过预先定义hasOwnProperty方法来区分真正的object成员是个不错方法:

    for (variablein object) {
		if (object.hasOwnProperty(variable)){
        	statements;
		}
    }
### 8.8、while 语句 ###

while语句应如以下格式:

    while (condition){
        statements;
    }
### 9、do 语句 ###

do语句应如以下格式:

    do {
        statements;
    } while (condition);
注：不像别的复合语句,do语句总是以;(分号)结尾。
### 10、switch 语句 ###

switch语句应如以下格式:

    switch (expression){
    case expression:
        statements;
    default:
        statements;
    }
每个 case与switch对齐。这可避免过分缩进。
每一组statements(除了default应以 break,return,或者throw结尾。不要让它顺次往下执行。
### 8.11、try 语句 ###

try语句应如以下格式:

    try {
        statements;
    } catch (variable){
        statements;
    }

    try {
        statements;
    } catch (variable){
        statements;
    } finally {
        statements;
    }
### 8.12、continue 语句 ###

避免使用continue语句。它很容易使得程序的逻辑过程晦涩难懂。
### 8.13、with 语句 ###

不要使用with语句。

## 9、另外的建议 ##

### 9.1、{} 和[] ###

- 使用{}代替new Object()。使用[]代替new Array()。
- 当成员名是一组有序的数字时使用数组来保存数据。当成员名是无规律的字符串或其他时使用对象来保存数据。

### 9.2、,(逗号)操作符 ###

避免使用逗号操作符,除非在特定的for 语句的控制部分。(这不包括那些被用在对象定义,数组定义,var语句,和参数列表中的逗号分隔符。)
### 9.3、作用域 ###

在JavaScript中块没有域。只有函数有域。不要使用块,除非在复合语句中。
### 9.4、赋值表达式 ###

避免在if和while语句的条件部分进行赋值。

### 9.5、===和!==操作符。 ###

使用===和!==操作符会相对好点。==和!=操作符会进行类型强制转换。 特别是, 不要将==用于与错值比较( false,null,undefined,“”,0,NaN)。
### 9.6、令人迷惑的加号和减号 ###

不要在+后紧跟+或++。这种形式很容易仍人迷惑。应插入括号以便于理解。

	total = subtotal + +myInput.value;
最好能写成

	total = subtotal + (+myInput.value);
这样+ +不会被误认为是++。
### 9.7、避免使用eval  ##

eval是JavaScript中最容易被滥用的方法。避免使用它。
### 9.8、规范定义JSON对象，补全双引号 ##
### 9.9、不在文件中留下未来确定不再使用的代码片段 ##