---
title: react-组件定义以及es5与es6在react中的不同写法
date: 2017年1月19日14:38:02
tags: "react"
categories: "react"
---

>组件定义以及es5与es6在react中的不同写法

## es5组件
```
<script type="text/babel">
    var Cm=React.createClass({
        getDefaultProps:function(){
          return {
              title:'title'
          }
        },
        getInitialState:function(){
            return {key:true}
        },
        handleClick:function(){
            this.setState({
                key:!this.state.key
            })
        },
        render:function(){
            var text=this.state.key?'+':'-';
            return(
                    <span onClick={this.handleClick} title='title'>1{text}1</span>
            )
        }
    });
    ReactDOM.render(<Cm/>,document.getElementById('b'));
</script>
```
## es6组件
```
<script type="text/babel">
    class CmEs extends React.Component{
        constructor(props){
            super(props);
            this.state={
                key:true
            }
        }
        handleClick(e){
            this.setState({
                key:!this.state.key
            })
        }
        render(){
            var text=this.state.key?'+':'-';
            return(
                    <span onClick={this.handleClick.bind(this)} title='title'>1{text}1</span>
            )
        }
    }
    CmEs.defaultProps={
        title:'title'
    };
    ReactDOM.render(<CmEs/>,document.getElementById('c'));
</script>
```

## es5与es6 react写法的不同
1. 引入模块
es5写法： ``var React=require('react');``
es6写法： ``var React,{Component,PropTypes} from 'react';``
2. 导出模块
es5写法：用define和return实现
es6写法：``export default 组件名称``
3. 组件
	1. 定义组件
	es5写法 
	```
	var Cm=React.createClass({
        render:function(){
            return(
                    <span>hello word</span>
            )
        }
    });
	```
	es6写法
	```
	class CmEs extends React.Component {  
	    render:function(){
            return(
                    <span>hello word</span>
            )
        }
	}
	```
	2. 定义组件的属性类型和默认属性(Props)
	es5写法：写在组件内部
	```
	var Cm=React.createClass({
		getDefaultProps:function(){
          return {
              title:'title'
          }
        },
        render:function(){
            return(
                    <span title='title'>hello word</span>
            )
        }
    });
	```
	es6写法：写在组件外边
	```
	class CmEs extends React.Component {  
	    render:function(){
            return(
                    <span title='title'>hello word</span>
            )
        }
	}
 	CmEs.defaultProps={
        title:'title'
    };
	```
	3. 初始化state
	es5写法
	```
	var Cm=React.createClass({
 		getInitialState:function(){
            return {key:true}
        },
        render:function(){
            return(
                    <span>hello word</span>
            )
        }
    });
	```
	es6写法
	```
	class CmEs extends React.Component {  
		constructor(props){
            super(props);
            this.state={
                key:true
            }
        }
	    render:function(){
            return(
                    <span>hello word</span>
            )
        }
	}
	```
	4. 绑定方法
	es5写法：
	```
	var Cm=React.createClass({
 		 handleClick:function(){
            this.setState({
                key:!this.state.key
            })
        },
        render:function(){
            return(
                    <span onClick={this.handleClick}>hello word</span>
            )
        }
    });
	```
	es6写法
	```
	class CmEs extends React.Component {  
		handleClick(e){
            this.setState({
                key:!this.state.key
            })
        }
	    render:function(){
            return(
                    <span onClick={this.handleClick.bind(this)}>hello word</span>
            )
        }
	}
	```
4. Mixins
使用ES6语法来创建组件是不支持React mixins的，如果一定要使用React mixins就只能使用React.createClass方法来创建组件了。
```
import React,{ Component } from 'react';

var SetIntervalMixin = {
  doSomething: function() {
    console.log('do somethis...');
  },
};
const Contacts = React.createClass({
  mixins: [SetIntervalMixin],
  
  handleClick() {
    this.doSomething(); //使用mixin
  },
  render() {
    return (
      <div onClick={this.handleClick}></div>
    );
  }
});

export default Contacts;
```
5. 解构赋值与属性传递
利用es6语法中的 ... 运算符进行传递
```
class AutoloadingPostsGrid extends React.Component {
    render() {
        var {
            className,
            ...others,  // contains all properties of this.props except for className
        } = this.props;
        return (
            <div className={className}>
                <PostsGrid {...others} />
                <button onClick={this.handleLoadMoreClick}>Load more</button>
            </div>
        );
    }
}
```
下面这种写法，则是传递所有属性的同时，用新的className值进行覆盖（{…this.props}写在前边）：
```
<div {...this.props} className="override">
    …
</div>
```
这个例子则相反，如果属性中没有包含className，则提供默认的值，而如果属性中已经包含了，则使用属性中的值（{…this.props}写在后边）
```
<div className="base" {...this.props}>
    …
</div>
```