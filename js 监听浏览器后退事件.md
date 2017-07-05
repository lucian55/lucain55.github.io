---
title:  js 监听浏览器后退事件
date: 2017年7月3日
tags: "javascript"
categories: "javascript"

---

>这篇文章主要介绍了JS监听微信、支付宝等移动app及浏览器的返回、后退、上一页按钮的事件方法,需要的朋友可以参考下


在实际的应用中，我们常常需要实现在移动app和浏览器中点击返回、后退、上一页等按钮实现自己的关闭页面、调整到指定页面或执行一些其它操作的需求，那在代码中怎样监听当点击微信、支付宝、百度糯米、百度钱包等app的返回按钮或者浏览器的上一页或后退按钮的事件呢。
我相信很多朋友像我一样，在百度、搜狗里面搜索很久都没找到方法。
#### 下面就来告诉大家怎样监听的方法：
首先我们要了解浏览器的history。
大家知道在页面中我们可以使用javascript window history，后退到前面页面，但是由于安全原因javascript不允许修改history里已有的url链接，但可以使用pushState方法往history里增加url链接，并且提供popstate事件监测从history栈里弹出url。既然有提供popstate事件监测，那么我们就可以进行监听。
#### 返回、后退、上一页按钮点击监听实现代码：
```
window.addEventListener("popstate", function(e) { 
alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
}, false); 
```

虽然我们监听到了后退事件，但是页面还是会返回上一个页面，所以我们需要使用pushState增加一个本页的url,代表本页，大家都非常清楚是#

```
function pushHistory() { 
var state = { 
title: "title", 
url: "#" 
}; 
window.history.pushState(state, "title", "#"); 
}
```

当进入该页面，我们就给这个history压入一个本地的连接。当点击返回、后退及上一页的操作时，就进行监听，在监听代码中实现自己操作。

下面是 
```
$(function(){ 
pushHistory(); 
window.addEventListener("popstate", function(e) { 
alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能 
}, false); 
function pushHistory() { 
var state = { 
title: "title", 
url: "#" 
}; 
window.history.pushState(state, "title", "#"); 
} 
}); 
```

以上内容只是小编给大家列出的核心代码，大家根据需求适当的添加，修改，删除代码。如果大家在参考本段代码的过程中发现有任何疑问欢迎给我留言，小编会及时回复大家的！