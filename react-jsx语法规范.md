---
title: react/jsx语法规范
date: 2017年1月19日16:37:05
tags: "react"
categories: "react"
---

## 命名规范
- 组件命名已大写开头

## 组件声明
- return的根元素只能是一个
- 尽量不使用 ``displayName``，通过引用来命名
```
export defalut React.createClass({
	displayName:'MyCom'
});//不使用

const MyCom = React.createClass({

});
export defalut MyCom;//使用
```

## 属性
- 在组件中，使用``className``代替``class``
- 在组件中，使用``htmlFor``代替``for``
- 自定义属性需要加``data-``前缀，否则react不会渲染
- ``aria-``可以正常使用

## 样式
可以在组件中定义样式对象，然后直接使用
```
import React, { Component } from 'react';

class StyleDemo extends Component {
  render(){
    // 5. 在JS文件里面给组件定义样式
    var MyComponentStyles = {
        color: 'blue',
        fontSize: '28px'
    };

    return (
      <div style={MyComponentStyles}>
          可以直接这样写行内样式
      </div>
    )
  }
}

export default StyleDemo;
```

## 其它
- 多行的JSX使用 () 包裹，有组件嵌套时使用多行模式
- 单行的JSX 省略 ()
- JSX中所有的标签必须闭合