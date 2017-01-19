---
title: react-基本使用
date: 2017年1月19日13:37:05
tags: "react"
categories: "react"
---

> react的基本使用

## 获取 react
- npm下载
```
npm install react --save
```
- bower下载
```
bower install react --save
```
- 直接去下载zip包

## react使用简单用例
```
<html>
  <head>
    <script src="../vendors/react/react.js"></script>
    <script src="../vendors/react/react-dom.js"></script>
    <!-- browser.js 的作用是将 JSX 语法转为 JavaScript 语法 -->
    <script src="../vendors/babel/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <!-- JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel" -->
    <script type="text/babel">
      var MyComponent = React.createClass({
          render: function (){
            return (
              <h1 className="header">我的第一个组件</h1>
            )
          }
      });
      ReactDOM.render(<MyComponent />, document.getElementById('example'));
    </script>
  </body>
</html>
```
说明：
- 需要用 bowser.js 将jsx语法转换为javascript语法。script标签的type写为 text/babel
- render的方法中return的顶级元素只能是一个
- 如果要定义样式的时候，style="opacity:{this.state.opacity};"
- 使用 className 和 htmlFor 来替代对应的class 和 for
