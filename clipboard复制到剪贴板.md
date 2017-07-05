---
title: clipboard复制到剪贴板
date: 2017年3月29日10:30:32
tags: ["clipboard","工具","javaScript"]
categories: "clipboard"

---

>在做项目的过程中，有一个需求是客户需要把浏览器中的一行命令复制到docker中，其实是很简单的功能，但是要处理兼容性并不简单，出于安全原因，大多数现代浏览器都未提供通用的剪贴板复制接口(或即便有，也默认被禁用)

在网络上搜索以后，现有如下两种方法：
1. 使用原生JavaScript中window.clipboardData实现复制到剪贴板功能；
2. 使用Zero Clipboard库；

在尝试了之后发现现有的方案都不能满足需求。
方案一仅仅支持ie浏览器，在firefox,chrome浏览器上则不起作用。
方案二则是现有绝大多数网站（包括github等）所采取的方ZeroClipboard是国外大神开发的一个用于剪贴板复制的 JS 插件，它是基于 Flash 来实现跨浏览器的复制功能的。当我们使用 ZeroClipboard的时候，它会悄悄隐藏一个小小的 Flash 影片(swf)，不会对我们的用户界面造成影响。我们只需要借助它实现复制功能就行了。==**但是**== 在现代浏览器中，flash逐渐没落，firefox浏览器默认不开启flash，所以Zero Clipboard在
兼容方面也表现不佳。

### 下边进入正题

那么，对于复制到剪切板这种简单的操作有没有一种实现简单，兼容性良好的解决方案呢？有的！那就是github上的开源项目clipboard.js[官网](https://clipboardjs.com/) 

如何使用：
1.引入clipboard.js文件
2.new 一个实例
3.给实例绑定success，和 error方法

实例1
```
<button id="btn" data-clipboard-action="copy" data-clipboard-text="这是cut出来的内容" > 点击复制</button> 

var clipboard = new Clipboard('#btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
clipboard.destroy();
```

说明：
1.clipboard在实例中提供了三个属性
- data-clipboard-action：方法，可选copy(复制)，cut(剪切)
- data-clipboard-text：要复制/剪切的内容
- data-clipboard-target：要复制/剪切的目标dom，如果不写为当前实例的data-clipboard-text。data-clipboard-target还可以写为其它dom元素，使用css选择器,如实例2。 *注意* 如果data-clipboard-target和data-clipboard-text同时具备，则会使用data-clipboard-text

2.如果你是在开发一个单页应用，可能需要更精确地管理DOM的生命周期，clipboard提供了destroy()事件来销毁创建的clipboard实例
3.**注：** 如果data-clipboard-text不为空，cut方法无效

实例2:
```
<textarea cols="20" rows="10" id="text">这段文字将会被复制到剪贴板</textarea>
<button id="btn" data-clipboard-action="cut"  data-clipboard-target="#text">点击复制</button>
var clipboard=new Clipboard('#btn');
clipboard.on('success',function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});
clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
clipboard.destroy();
</script>
```