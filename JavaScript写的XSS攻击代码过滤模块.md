---
title:  JavaScript写的XSS攻击代码过滤模块
date: 2017年7月5日
tags: "javascript"
categories: "javascript"

---

>前端安全方面一直存在HTTP劫持和XSS跨站脚本，CSRF跨站请求伪造的问题。在一次表单保存的操作中，我试着在input输入框中写了 `` <script>alert(1);</script>``,发现在提交的时候报错。各种百度发现是因为XSS安全问题的原因，被后台过滤掉了。虽然安全问题被后台解决了，但是总是给人不好的体验。 然后找到了 xss.js  用来过滤XSS攻击，将指定内容过滤为安全无害的代码。

### 什么是XSS跨站脚本
XSS指的是攻击者利用漏洞，向 Web 页面中注入恶意代码，当用户浏览该页之时，注入的代码会被执行，从而达到攻击的特殊目的。

### 如何使用xss.js

```
npm install xss;
var filterXSS=require('xss');
filterXSS('<script>alert(1);</script>');
```
或者

```
<script src="https://cdn.bootcss.com/js-xss/0.3.3/xss.js"></script>
<script>
    var html = filterXSS('<script>alert(123)<\/script>');
    alert(html);
    //输出结果：&lt;script&gt;alert(123)&lt;/script&gt;
</script>
```
