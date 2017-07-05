---
title: react-propTypes校验
date: 2017年3月20日10:17:34
tags: "react"
categories: "react"

---

## React.PropTypes

> 组件的属性可以接受任意值，字符串、对象、函数等等。有时候需要一种机制，来验证使用组件的时候，提供的组件属性值是否符合要求。这时就要使用propTypes属性来校验。React.PropTypes提供很多的验证器来验证传入数据的有效性，当向props传入无效数据是，js控制台就会抛出警告。

## 写在前面：
- 随着应用不断变大，保证组件被正确使用变得非常有用。React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。
- 当向 props 传入无效数据时，JavaScript 控制台会抛出警告。

```
React.createClass({
  propTypes: {
    // 可以声明 prop 为指定的 JS 基本类型。默认
    // 情况下，这些 prop 都是可传可不传的。
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // 所有可以被渲染的对象：数字，
    // 字符串，DOM 元素或包含这些类型的数组。
    optionalNode: React.PropTypes.node,

    // React 元素
    optionalElement: React.PropTypes.element,

    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: React.PropTypes.instanceOf(Message),

    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // 指定的多个对象类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // 特定形状参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // 以后任意类型加上 `isRequired` 来使 prop 不可空。
    requiredFunc: React.PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,

    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接
    // 使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  },
  /* ... */
});
```

## flow类型检测 简单了解
> Flow能够帮助开发人员查找出JavaScript代码中的类型错误，从而提高开发效率和代码质量。Flow已经能够捕获JavaScript代码中的常见问题，如静态类型转换不匹配、空指针引用等问题。同时，Flow还为JavaScript新增了类型语法，如类型别名。

- Flow的类型检查具有可选性和自动性

	除非你明确告诉Flow需要对某些文件进行类型检查，否则它是不会检查你不需要检查文件的。这就是说，你可以慢慢地将你的代码库转到Flow之上，继续收获其持续增长的价值。比如你选择了一个文件进行检查，Flow会自动地对你代码的类型检查，并查出你的代码中的错误。不过，如果你的代码分得很细并存在于不同的文件之中，这种做法显得太麻烦。但有些时候，你选择检查一些很大型的库，Flow可能会不是那么准确。在这种情况下，我们可以手动地采用“类型注解”或者切换到“弱模式”下限制其类型引用来解决问题。

- Flow的类型检查是一种及时、在线的检查

    当对整个代码库进行检查时，Flow首先会对整个代码库的所有文件进行一个初步地分析，然后监控文件的后续变化，并进行类型检查和依赖检查。对于开发者来说，他们根本感觉不出编译时间的延迟。当对代码进行编辑或者批量更新一批文件时，Flow将会自动触发代码检查，并保存检查的结果以备及时查询使用

>flow简单了解，后续详细介绍
