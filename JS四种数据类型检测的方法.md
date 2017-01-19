---
title: javaScript四种数据类型检测的方法
date: 2017-01-17 15:02:37
tags: "js技巧"
categories: "javascript"
---


>js中常用的四种数据类型检测的方法：typeof、instanceof、constructor、Object.prototype.toString.call()

## 1、typeof用来检测数据类型的运算符 ##

例子：
	
	console.log(typeof 12);//"number"
	console.log(typeof ['a','b']);//"object"
	console.log(typeof /\d+/);//"object"
	console.log(typeof 'a');//"string"
	console.log(typeof undefined);//"undefined"

说明：typeof检测数据类型返回一个字符串。可以检测到的数据类型为："number"、“string”、“boolean”，“undefined”，“function”、“object”。由以上代码可以看出，typeof不可以检测出数组，正则等具体的数据类型。会将对象数据类型的值都返回“object”

## 2、instanceof检测某一个实例是否属于某个类 ##

例子：

	var ary=[1,2]; 
	console.log(ary instanceof Array);//true
	console.log(ary instanceof Object);//true
	console.log(1 instanceof Number);//false
	console.log(new Number(1) instanceof Number);//true

说明：由以上代码可以说明instanceof不能用来处理字面量方式创建出来的基本数据类型的值。只要在当前实例的原型链上，我们用其检测出来的结果都是true。instanceof不可以检测null和undefined

## 3、constructor ##

例子：

	var aa=[1,2];
    console.log(aa.constructor==Array);//true
    console.log(aa.constructor==RegExp);//false
    console.log((1).constructor==Number);//true
    var reg=/^$/;
    console.log(reg.constructor==RegExp);//true
    console.log(reg.constructor==Object);//false

说明：constructor作用和instanceof非常相似。但是我们可以把类的原型进行重写，在重写的过程中很有可能把之前的constructor给覆盖了，所以这样检测出来的结果是不准确的。constructor不可以检测null和undefined

## 4、Object.prototype.toString.call() 最准确最常用的方式。 ##

例子：
	
	var aaa=[];
    console.log(Object.prototype.toString.call(aaa));//[object Array]
    console.log(({}).toString.call(aaa));//[object Array]
    console.log(Object.prototype.toString.call(aaa)==="[object Array]");//true

说明：Object.prototype.toString.call() 最准确最常用的方式。 首先获取Object原型上的toString方法，让方法执行，让toString方法中的this指向第一个参数的值。Object上的toString并不是用来转换为字符串的。Object上的toSting它的作用是返回当前方法执行的主体（方法中的this）所属类的详细信息——>"[object Object]":第一个object代表当前实例是对象数据类型的，这个是固定死的，第二个Object代表的是this所属的类是Object。 Object可以检测null和undefined，第二和第三种方法不可以检测null和undefined