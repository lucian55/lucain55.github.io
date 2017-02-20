# director.js：客户端的路由 #
>director是客户端的路由，功能是在不刷新页面的情况下，利用"#"符号组织不同的URL路径。根据不同的URL路径来匹配不同的回调方法。`director.js` 适用于客户端浏览器以及`node.js`的服务器端应用，在两者的应用场景里调用方法仅有少量的不同。它非常适合用来开发不需要刷新的单页程序以及node.js应用。`director.js` 不依赖于任何其他的js库

## 1.简单的开始 ##
上文简单提到： `director.js` 是通过“#”符号进行路径组织的，例如：

	http://www.demo.com/#/show
	http://www.demo.com/#/show/list
	http://www.demo.com/#/show/single

路由注册在URL里的体现是用“#”符号来标识路由的开始，再利用"/"分隔符（分隔符可自定义，后面会讲到）来定义路由片段。客户端路由其实就是通过URL来区分应用程序的不同状态，并且定义在不同的状态下应该做什么事情。当用户访问不同的URL时，`director.js `会解析路由信息并告知应用程序需要做什么事情。
下面是一个简单的例子：

	<html>
	<head>
	    <title>demo</title>
	    <script src="director.js"></script>
	</head>
	<body>
	<ul>
	    <li><a href="#/author">author</a></li>
	    <li><a href="#/books">books</a></li>
	    <li><a href="#/books/view/1">books/view/1</a></li>
	</ul>
	</body>
	<script>
	
	    var author = function () {
	                console.log("author");
	            },
	            books = function () {
	                console.log("books");
	            },
	            viewBook = function (bookId) {
	                console.log("viewBook: bookId is populated: " + bookId);
	            };
	
	    var routes = {
	        '/author': author,
	        '/books': [books, function () {
	            console.log("An inline route handler.");
	        }],
	        '/books/view/:bookId': viewBook
	    };
	
	    var router = Router(routes);
	    router.init();
	
	</script>
	</html>

## 2.初始化及路由注册 ##
`director.js`的主要对象是`Router`对象，构造方法如下：
	
	var router = new Router(routes);

构造方法传入的`routes`参数是一个路由表对象，它是一个具有键值对结构的对象，路由允许多层的嵌套定义。
键值对的键对应URL中传入的路径，一般一个键对应按分隔符切割后的某一部分；而键值对的值则对应该路径需要触发的回调函数名，可以传入一个或多个函数名，传入多个函数名时请使用数组对象。一般来说，回调函数要在路由表对象使用前先声明，否则js会报错。另外，回调函数除非特殊情况，一般不推荐使用匿名函数，请尽量先声明后使用。
	
	var routes = {
	    '/dog': bark,    
	    '/cat': [meow, scratch]
	  };

上面例子中，对应的URL分别为：`#/dog` 和 `#/cat`

声明`Router`对象后，需要调用`init()`方法进行初始化，如下：

	var routes = {
	    '/dog': bark,    
	    '/cat': [meow, scratch]
	};
	
	var router = Router(routes);
	router.init();

## 3.路由的即时注册 ##

当我们在开发一些规模比较大的应用的时候，一般做不到一开始就将需要的路径和它对应的回调函数都预先准备好。很多时候，我们都是在做到某一功能时，或者是开发一些独立性比较强耦合度比较低的模块时，才知道我们需要什么样的路径和回调函数。这个时候我们就需要实时注册路由的功能了。 

`director.js` 通过“`on`”方法，提供对即时注册功能的支持，示例如下：

	router.on('/rabbit', function(){
	　　...
	})

## 4.路由事件 ##
路由事件是路由注册表中一个有固定命名的属性，是指当路由方法`router.dispatch()`被调用时，路由匹配成功的时定义的需要触发的回调方法（允许定义多个回调方法）。上文即时注册功能里的"on"方法就是一个事件。具体信息如下：
- `on` ：当路由匹配成功后，需要执行的方法
- `before`：在触发“on”方法之前执行的方法

仅在客户端有效的方法：
- `after`：当离开当前注册路径时，需要执行的方法
- `once`: 当前注册路径仅执行一次的方法

	    var before = function (id) {
    		alert("direct to : /Home/About/" + id);
    	},
    	on = function (id) {
    		window.location = "/Home/About/" + id;
    	};
    	var routes = {
	    	"/about/:id": {
		    	before: before,
		    	on: on
	    	}
    	}

## 5.配置参数 ##
`director.js` 通过配置一些可选项的参数从而提升Router对象的灵活性。而这些参数的设置需要通过`router.configure()`方法实现。

	var router = new director.Router(routes).configure(options);

具体的配置参数有：
- recurse：控制路由递归触发方式的参数，可选值为"forward","backward"和"false"，客户端的默认值是"false"，而服务端的默认值是"backward"
- strict：当值为"false"时，路径允许以"/"结尾（也可以是其他自定义的分隔符）；默认值是"true"，说明默认不允许路径以"/"结尾
- async：同步异步控制器，值为"ture","false"，默认值为"false"
- delimiter：路由分隔符，默认值为"/"
- notfound：当路由方法router.dispatch()被调用时，没有匹配到任何路由时触发的方法
- on：当路由方法router.dispatch()被调用时，任何一个路由匹配成功后都需要执行的方法；与上文路由事件中的“on”事件的区别类似于全局和局部的概念，路由表中仅针对当前注册的路由；而configure方法中的"on"则针对全局的所有路由
- before：当路由方法router.dispatch()被调用时，当任何一个路由匹配成功并在"on"执行之前需要执行的方法；与上文路由事件中的 “before” 事件的区别同上

仅在客户端有效的参数：
- resource：用来进行回调函数绑定的基于字符串的对象。使用该参数能实现回调函数的延迟绑定（原词是 "late-binding"，后面有相关的详细说明）
- after：当给定的路径不再是当前激活的路径时触发的方法，可以理解为离开当前路径后触发的方法；与上文路由事件中的 “after” 事件的区别同上

## 5.URL匹配 ##
在路由事件那一节的示例里，有这么一个路由表达式`"/about/:id"`，其中":"后面定义的部分表示实际路径对应的这部分是传入回调函数的参数，例如"`#/about/5`"中，5就是id参数的值。参数的匹配还可以用嵌套的方式来定义：
	
	var router = Router({
	  '/about': {
	    '/:id': {
	      on: on
	    }
	  }
	});

在实际应用的过程中，我们的路由可能会变得非常复杂，像"`/about/:id`"这样简单的表达式并不能满足我们的需求。而`director.js` 支持利用正则表达式来匹配复杂的路由名称，匹配到的值会作为参数传给回调函数，例如：

	var router = Router({
	  '/hello': {
	     '/(\\w+)': {
	      on: function (who) { console.log(who) }
	    }
	  }
	});

当URL传入'`#/hello/world`'，则回调函数的`who=world`
支持更为复杂的多参数的传递：


	var fn=function (a, b) {
	        console.log(a, b);
	    };
    var router = Router({
        '/hello': {
            '/world/?([^\/]*)\/([^\/]*)/?': fn
        }
    });

当URL传入'`#/hello/world/johny/appleseed`'，则回调函数的`a=johny,b=applesee`