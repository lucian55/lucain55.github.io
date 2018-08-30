---
title: ie不打开开发者工具不加载js问题
date: 2018年08月30日20:33:41
tags: "bug"
categories: "bug"

---


>最近在调ie9的时候出现了一个奇怪问题，不打开开发者中心不会加载js，导致页面一片空白

### 问题表现

在ie9下页面不加载js，打开开发者工具后，页面正常加载。  chrome没有问题



### 原因以及解决方案

部分IE版本是不支持console的，还有部分奇怪的IE版本比如IE8/IE9在开启开发者工具时才支持console。 这设计我也是醉了

### 处理方法
去掉没必要的console。
如果非要用console的话，就在console前加判断，如下

```
if(window.console)//测试是否可用
  console.log("智障ie hehe ");//可用的话，输出信息

```