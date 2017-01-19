---
title: react-复合组件
date: 2017年1月19日15:51:08
tags: "react"
categories: "react"
---

> react 复合组件，增加样式，自定义属性的使用
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style type="text/css">
        .a{
            margin-left: 10px;
        }
    </style>
</head>
<script src="lib/react/react.js"></script>
<script src="lib/react/react-dom.min.js"></script>
<script src="lib/browser.min.js"></script>
<body>
<div id="a"></div>
</body>
<script type="text/babel">
    var bg={
        background:'red'
    };
    var A=React.createClass({
        render:function(){
            return (
                    <div>
                            <B b={this.props.b}/>
                            <C c={this.props.c}/>
                    </div>
            )
        }
    });
    var B=React.createClass({
        getInitialState:function(){
            return {
                name:'哈哈B',
                style:{color:'blue'}
            }
        },
        render:function(){
            return(
                    <span data-spanb={this.props.b} className ='a' style={this.state.style}>{this.state.name}</span>
            )
        }
    });

    var C=React.createClass({
        getInitialState:function(){
          return {name:'哈哈C'}
        },
        render:function(){
            return(
                    <span data-spanc={this.props.c} className ='a' style={bg}>{this.state.name}</span>
            )
        }
    });
    ReactDOM.render(<A b="b" c="c"/>,document.getElementById('a'));
</script>
</html>
```

说明：

1. react组件中的类名用 className增加，不可直接写为类似 ``style="color:red"``这样的错误代码。 
2. this.props：react的数据流传递是单项的，只能从父级传到子集，this.props代表父级dom中的属性
3. this.state: react每个组件都会有state，可以在getInitialState中初始化组件的state
4. 组件自定义属性：react支持 data-*** 这样自定义属性