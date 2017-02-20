# 1.Knockout如何使用 # 
## 1. 引入Konckout文件 ##
   ` <script src="http://design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>`
## 2. 在js中定义一个view model并绑定 ##
```
<script type='text/JavaScript'>
	//定义viewModel
	var viewModel={
		name:'lsz',
		age:'23'
	};
	//开始绑定
	ko.applyBindings(viewModel);
</script>
```

## 3. 在knockout中，每个HTML的DOM对象都是通过data-bind属性来绑定数据的。 ##
例如:
```
<p data-bind="text:name"></p>
<p data-bind="text:age"></p>
```
	
说明：ko.applyBindings()两个参数，第一个参数是用于绑定的对象。第二个参数（可选），可以指定使用knockout的DOM元素或者容器。例如 `ko.applyBindings(viewModel,document,getElementById('div'))`。它现在的功能是只有对id为div的元素和子元素生效
# 2.knockout的DOM元素上的属性说明 #
## 2.1 text绑定 ##
text绑定到DOM元素上，使得该元素的文本值为你绑定的参数值。
例如：
```
<span data-bind="text:name"></span>
```
```
<script type="text/javascript">
  var viewModel={
     name:'lsz'
  }
  ko.applyBindings(viewModel);
</script>
```
说明：knockout将参数值设置在指定DOM元素的innerText(IE)或textContent(Firefox)属性上。原来的文本将会被覆盖
## 2.2 value绑定 ##
value绑定是关联DOM元素的值到view model的属性上。主要是用在表单控件input，select和textarea上。
例如：
```
<p data-bind="text:name"></p>
<input data-bind="value: name"/>
```
```
<script type="text/javascript">
    var viewModel={
       name:ko.observable('lsz')
    };
    ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是的，当input的值发生变化的时候，会给viewModel的name属性重新赋值，并在p标签中显示
## 2.3 visible绑定 ##
visible绑定到DOM元素上，使得该元素的hidden和visible状态取决于绑定的值
例如：

```
<div data-bind="visible:shouldShowMessage">
    当visible的值为true的时候，你才可以看到这句话
</div>
```
```
<script type="text/javascript">
  var viewModel={
        shouldShowMessage:true 
    };
    ko.applyBindings(viewModel);
</script>
```
说明：当visible的值为真的时候，元素的display为css设置的样式。 当visible的值为假的时候，元素的display为none，它的优先级高于css定义的任何display的样式
## 2.4 html绑定 ##
html绑定到DOM元素上，使得该元素的HTML值为你绑定的参数值
例如：

```
<div data-bind="html:content">
    <p>原来的html结构</p>
</div>
```
```
<script type="text/javascript">
    var viewModel={
        content:'<h1>标题一</h1>'
    };
    ko.applyBindings(viewModel);
</script>
```
说明：knockout将参数值设置到指定DOM元素的innerHTML属性上，元素原来的内容将会被覆盖
## 2.5 css绑定 ##
css绑定是添加或删除一个或多个class类名到指定DOM元素上
例如：
```
<style type="text/css">
	.bg{
	    background: red;
	}
</style>
```
```
<div data-bind="css:{bg:flag}">
    <p>css绑定</p>
</div>
```
```
<script type="text/javascript">
	var viewModel={
	    flag:true
	};
	ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是当flag为true的时候，将bg这个类添加到指定DOM元素上。当flag为false的时候，将bg这个类从指定DOM元素上移除
## 2.6 style绑定 ##
style是添加或删除一个或多个DOM元素上的style值
例如：
```
<div data-bind="style:{background:flag?'red':'blue',color:flag?'blue':'red'}" >
    <p>内容</p>
</div>
```
```
<script type="text/javascript">
    var viewModel={
        flag:true
    };
    ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是当flag为true的时候，DOM元素为红背景蓝字体。当flag为flase的时候，DOM元素为蓝背景红字体
## 2.7 attr绑定 ##
attr绑定提供了一种可以设置DOM元素的任何属性的值，例如可以设置a标签的title属性，href属性，自定义属性等等
```
<a data-bind="attr:{href:url,title:alt,self:self}">百度</a>
```
```
<script type="text/javascript">
    var viewModel={
       url:'https://www.baidu.com/',
       alt:'百度一下',
       self:'自定义属性值'
    };
    ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是给a动态绑定了href和title属性已经自定义属性self的值
## 2.8 checked绑定 ##
checked绑定可以用于checkbox和redio设置的绑定
例如：
```
<input type="checkbox" data-bind="checked: checkboxFlag"/>
<input type="radio" data-bind="checked: radioFlag" value="radioValue"/>
```
```
<script type="text/javascript">
    var viewModel={
        checkboxFlag: true,
        radioFlag:'radioValue'
    };
    ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是，当checkboxFlag为true的时候，对应的checkbox被选中。当radioFlag的值等于radio的value的值的时候，对应的元素被选中 
## 2.9 click绑定 ##
click绑定在DOM元素上，给元素添加点击事件
```
<button data-bind="click: clickFn">Click</button>
```
```
<script type="text/javascript">
    var viewModel = {
        clickFn: function () {
           alert();
        }
    };
	ko.applyBindings(viewModel);
</script>
```
说明：以上代码的效果是，当点击按钮的时候执行函数
## 2.10 event绑定 ##
event绑定在DOM元素上，给元素添加指定的事件
```
<div data-bind="event: { mouseover: overFn, mouseout: outFn }">
	Mouse 
</div>
```
```
<script type="text/javascript">
    var viewModel = {
        overFn: function () {
            alert('over');
        },
		outFn:function(){
		    alert('out');
		}
    };
	ko.applyBindings(viewModel);
</script>

```
说明：以上代码的效果是，当鼠标划入或划出的时候执行对应的函数
## 2.11 submit绑定 ##
submit绑定在form表单上添加指定的事件，以使该form被提交的时候执行指定的函数
```
<form data-bind="submit: sub">
    ... form contents ...
    <button type="submit">submit</button>
</form>
```
```
<script type="text/javascript">
	var viewModel={
        sub: function (formElement) {
            console.log(formElement);
        }
    };
    ko.applyBindings(viewModel);
</script>
```
说明：submit只能用在form表单上，当你使用submit绑定的时候， knockout会阻止form表单默认的submit动作。sub执行的时候，knockout会将整个form表单元素传递到sub函数中
## 2.12 options绑定 ##
options绑定控制下拉列表的内容，只能用于select元素
```
<select data-bind="options: options"></select>
```
```
<script type="text/javascript">
    var viewModel = {
        options: ['France', 'Germany', 'Spain']
    };
    ko.applyBindings(viewModel);
</script>
```
说明：options给select标签增加了options元素，options默认会被展开
# 3.Knockout的数据绑定 #
## 3.1. 单向绑定 ##
	
```
<p>姓名：<span data-bind="text:name"></span></p>	
<p>年龄：<span data-bind="text:age"></span></p>
```
```
<script type="text/javascript">
 var viewModel= {
      name:'lsz';
      age:'23';
  }
  ko.applyBindings(viewModel);
</script>
```
## 3.2. 双向绑定 ##
```
<p>姓名：<span data-bind="text:name"></span></p>
<p>年龄：<span data-bind="text:age"></span></p>
<p>姓名：<input type="text" data-bind="value:name"></p>
<p>年龄：<input type="text" data-bind="value:age"></p>
```
```
<script type="text/javascript">
  var viewModel={
        name:ko.observable('lsz'),
        age:ko.observable('23')
    };
    ko.applyBindings(viewModel)
</script>
```
说明：上述代码中，利用ko.observable()实现对属性的监控，当input的值发生改变的时候，span的值也会发生改变
## 3.3. 依赖绑定 ##
```
<p>姓名：<span data-bind="text:name"></span></p>
<p>年龄：<span data-bind="text:age"></span></p>
<p>姓名：<input type="text" data-bind="value:name"></p>
<p>年龄：<input type="text" data-bind="value:age"></p>
<p>姓名年龄：<span data-bind="text:nameAge"></span></p>
```
```
<script type="text/javascript">
  var viewModel={
        name:ko.observable('lsz'),
        age:ko.observable('23')
    };
    viewModel.nameAge=ko.computed(function () {
        return this.name()+this.age();
    },viewModel);
    ko.applyBindings(viewModel);
</script>
```
说明：ko.computed()用来依赖一个或多个监控属性，并且当其中任何一个依赖对象被改变的时候将会自动更新。
