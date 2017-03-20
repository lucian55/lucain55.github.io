---
title: react-技巧
date: 2017年3月20日
tags: "react"
categories: "react"

---

##　react-技巧
> 在react组件开发中的一些技巧，和常用模块。持续更新


### classnames模块
在ract组件开发中，如果给标签添加class，直接获取到对应的标签，然后写className='xx'即可。
但是如果是动态设置class，多个class就会麻烦。这里可以引入classnames模块来解决。
[classnames github地址](https://github.com/JedWatson/classnames).
classnames传参很灵活，这里通过几个例子说明

The classNames function takes any number of arguments which can be a string or object. The argument 'foo' is short for { foo: true }. If the value associated with a given key is falsy, that key won't be included in the output.

```
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

Arrays will be recursively flattened as per the rules above:

```
var arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

Dynamic class names with ES2015

```
let buttonType = 'primary';
classNames({ [`btn-${buttonType}`]: true });
```

