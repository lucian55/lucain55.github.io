---
title: hexo同步到git
date: 2016-08-21 11:29:01
tags: "hexo"
categories: "工具"
---

## 配置Github ##
建立Repository
建立与你用户名对应的仓库，仓库名必须为【yourname.github.io】，固定写法，例如：我的用户名是 liushaozhen，则我的仓库名必须为 liushaozhen.github.io

## 修改hexo配置文件 建立关联 ##
修改_config.yml文件

```
deploy:
	type: git
	repo: https://github.com/liushaozhen/liushaozhen.github.io.git
	branch: master
```

网上会有很多说法，有的type是github, 还有repository最后面的后缀也不一样，是github.com.git，我也踩了很多坑，我现在的版本是hexo: 3.2.2，执行命令hexo -vsersion就出来了,貌似3.0后全部改成我上面这种格式了。

## 最后 ##
执行命令

	hexo deploy


## 部署步骤 ##

    hexo clean

    hexo generate

    hexo deploy 