---
title: ES6入门
date: 2017年1月23日8:58:17
tags: "ES6"
categories: ["javascript","ES6"]
---

>参考 [ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)

## 一、let、const定义变量
现在一般定义变量都用`var`，但是`var`会有很多的问题：

- `var`没有块级作用域，定义后在当前闭包中都可以访问，如果变量名重复，就会覆盖前面定义的变量，并且也有可能被其他人更改。
- `var`在`for`循环标记变量共享，一般在循环中使用的`i`会被共享，其本质上也是由于没有块级作用域造成的，由于情况比较多见和特殊，单独算一个问题。

因此有了两种新的变量定义方式`let`和`const`。

用`let`定义的变量具有块级作用域。
用`const`定义的变量是静态变量，定义以后不可修改。

### `let`的好处和用法

- `let`拥有块级作用域
- `let`生命的全局变量不会影响`window`
- 循环时不会共享`let`定义的变量

#### 友好的报错
**`'use strict';`** 用了严格模式才有有友好的报错

- 重新定义`let`的变量会报错
- 使用未定义的变量会报错（包括不在自己作用域中的变量）
- `let`没有变量提升(变量预定义)，在一个块级作用域中，不可以先使用未定义的变量。

#### 块级作用域是什么
在用`var`定义变量的时候，变量是通过闭包进行隔离的，现在用了`let`，不仅仅可以通过闭包隔离，还增加了一些块级作用域隔离。

 `{}`

在`for`、`if`、`switch`、`function`等的大括号都会当成一个独立的块级作用域。

闭包的新写法：

```javascript
{
	
}
```

不必再是：

```javascript
;(function () {

})();
```
### const的好处和用法
`const`是静态变量，定以后不允许再被修改或者重新定义。

- 在严格模式下，重新定义或者修改静态变量会报错。
- 不同的块级作用域下，可以定义相同名字的静态变量。


## 二、解构赋值
>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

- 数组的解构赋值
- 对象的解构赋值
- 字符串的解构赋值
- 数值和布尔值的解构赋值
- 函数参数的解构赋值
- 圆括号问题

## 三、字符串的扩展
- 字符的Unicode表示法
- codePointAt()
- String.fromCodePoint()
- 字符串的遍历器接口
- at()
- normalize()
- includes(), startsWith(), endsWith()
- repeat()
- padStart()，padEnd()
- 模板字符串
- 标签模板
- String.raw()
- 模板字符串的限制

## 四、正则的扩展
- RegExp构造函数
- 字符串的正则方法
- u 修饰符
- y 修饰符
- sticky属性
- flags属性
- RegExp.escape()
- s 修饰符：dotAll 模式
- 后行断言
- Unicode属性类

## 五、数值的扩展
- Number.isFinite(), Number.isNaN()
- Number.parseInt(), Number.parseFloat()
- Number.isInteger()
- Number.EPSILON
- 安全整数和Number.isSafeInteger()
- Math对象的扩展
- 指数运算符

## 六、函数的扩展
- 函数参数的默认值
- rest参数
- 扩展运算符
- 严格模式
- name 属性
- 箭头函数
- 绑定 this
- 尾调用优化
- 函数参数的尾逗号

## 七、对象的扩展
- 属性的简洁表示法
- 属性名表达式
- 方法的 name 属性
- Object.is()
- Object.assign()
- 属性的可枚举性
- 属性的遍历
- __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
- Object.keys()，Object.values()，Object.entries()
- 对象的扩展运算符
- Object.getOwnPropertyDescriptors()

## 八、Symbol
>JavaScript语言的第七种数据类型

Symbol值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
```
let s = Symbol();
typeof s
// "symbol"
```
上面代码中，变量s就是一个独一无二的值。typeof运算符的结果，表明变量s是Symbol数据类型，而不是字符串之类的其他类型。
注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
.........

## 九、Set和Map数据结构
- Set
- WeakSet
- Map
- WeakMap

## 十、Class
JavaScript语言的传统方法是通过构造函数，定义并生成新对象。下面是一个例子。
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
上面这种写法跟传统的面向对象语言（比如C++和Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写，就是下面这样。
```
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法。
Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。
ES6的类，完全可以看作构造函数的另一种写法。类的数据类型就是函数，类本身就指向构造函数。使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。

## 十一、Module模块
>模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

### export 命令
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。
```
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
```
上面代码是profile.js文件，保存了用户信息。ES6将其视为一个模块，里面用export命令对外部输出了三个变量。
export的写法，除了像上面这样，还有另外一种。

// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};
上面代码在export命令后面，使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。
export命令除了输出变量，还可以输出函数或类（class）。
```
export function multiply(x, y) {
  return x * y;
};
```
上面代码对外输出一个函数multiply。

通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
```
function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
```
上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
```
// 报错
export 1;

// 报错
var m = 1;
export m;
```
上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。正确的写法是下面这样。
```
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};
```
上面三种写法都是正确的，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。
同样的，function和class的输出，也必须遵守这样的写法。
```
// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};
```
另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
```
export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);
```
上面代码输出变量foo，值为bar，500毫秒之后变成baz。
### import 命令

使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

    // main.js
    import {firstName, lastName, year} from './profile';
    
    function setName(element) {
      element.textContent = firstName + ' ' + lastName;
    }
上面代码的import命令，用于加载profile.js文件，并从中输入变量。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

    import { lastName as surname } from './profile';

import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js路径可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

    import {myMethod} from 'util';
上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。

注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。
    
    foo();
    
    import { foo } from 'my_module';
上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
    
    // 报错
    import { 'f' + 'oo' } from 'my_module';
    
    // 报错
    let module = 'my_module';
    import { foo } from module;
    
    // 报错
    if (x === 1) {
      import { foo } from 'module1';
    } else {
      import { foo } from 'module2';
    }
上面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

最后，import语句会执行所加载的模块，因此可以有下面的写法。

    import 'lodash';
上面代码仅仅执行lodash模块，但是不输入任何值。

如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

    import 'lodash';
    import 'lodash';
上面代码加载了两次lodash，但是只会执行一次。
    
    import { foo } from 'my_module';
    import { bar } from 'my_module';
    
    // 等同于
    import { foo, bar } from 'my_module';
上面代码中，虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例。
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个circle.js文件，它输出两个方法area和circumference。
    
    // circle.js
    
    export function area(radius) {
      return Math.PI * radius * radius;
    }
    
    export function circumference(radius) {
      return 2 * Math.PI * radius;
    }
现在，加载这个模块。

    // main.js
    
    import { area, circumference } from './circle';
    
    console.log('圆面积：' + area(4));
    console.log('圆周长：' + circumference(14));
上面写法是逐一指定要加载的方法，整体加载的写法如下。

    import * as circle from './circle';
    
    console.log('圆面积：' + circle.area(4));
    console.log('圆周长：' + circle.circumference(14));

从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。
    
    // export-default.js
    export default function () {
      console.log('foo');
    }
上面代码是一个模块文件export-default.js，它的默认输出是一个函数。
其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

    // import-default.js
    import customName from './export-default';
    customName(); // 'foo'
上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。