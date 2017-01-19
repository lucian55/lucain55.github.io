---
title: hexo主题更换
date: 2016-08-28 9:22:29
tags: "hexo"
categories: "工具"
---

>前两篇文章介绍了如何使用hexo，已经如何同步到git上。但是搭建出来的hexo博客，感觉不好看，作为一个90后，觉得需要一点个性，所以本次介绍如何更换主题，为方便说明将 hexo下的_config.xml成为站点配置文件，将NexT下的_config.xml成为主题配置文件

## 选择主题 ##
经过多次寻找，各种度娘，发现有个叫 NEXT 主题的挺牛逼，不妨拿来试试。[NexT官网](http://theme-next.iissnan.com/)

## 下载 NexT 主题 ##
可以在官网找到zip包下载，或者

	git clone https://github.com/iissnan/hexo-theme-next themes/next。 

个人比较偏向与后者，因为逼格高（手动滑稽）。
将NexT克隆到 themes文件下，命名为next(此处名字可以随便起，只要在配置文件中写相同即可)

## 启用 NexT主题 ##
在配置文件站点配置文件中找到 theme，然后将这个字段的值改为next即可

## 验证主题 ##
启用hexo本地站点 ``hexo s``

然后访问 ``http://localhost:4000``  检查站点主题是否更换成功，最好清除一次浏览器缓存再访问，以免缓存这个大大大坑

## NexT主题配置 ##
 
### 选择 Scheme ###
在主题配置文件中可以找到Scheme，Scheme 是 NexT 提供的一种特性，借助于 Scheme，NexT 为你提供多种不同的外观。即NexT这个主题还有三个主题，目前 NexT 支持三种 Scheme,自行根据需要选择，他们是：
- Muse 默认 Scheme，这是 NexT 最初的版本，黑白主调，大量留白
- Mist Muse 的紧凑版本，整洁有序的单栏外观
- Pisces 双栏 Scheme，小家碧玉似的清新


### 语言设置 ###
在站点配置文件中，将language设置成你需要的语言，可用的如下如下表格所示：

|语言	|代码	|设定值	|
|-------:|-------|-------|
|English|	en	|language: en|
|简体中文|	zh-Hans|	language: zh-Hans|
|Français|	fr-FR|	language: fr-FR|
|Português|	pt|	language: pt|
|繁體中文|	zh-hk 或者 zh-tw	|language: zh-hk|
|Русский язык|	ru|	language: ru|
|Deutsch|	de|	language: de|
|日本語|	ja|	language: ja|
|Indonesian|	id|	language: id|

语言示例配置

	language: zh-Hans


### 菜单设置 ###
#### 1.设置菜单内容
编辑主题配置文件的menu字段，NexT 默认的菜单项有

|键值		|设定值					|显示文本（简体中文）|
|-----------|-----------------------|------------------|
|home		|home: /				|主页|
|archives	|archives: /archives	|归档页|
|categories	|categories: /categories|分类页|
|tags		|tags: /tags			|标签页|
|about		|about: /about			|关于页面|
|commonweal	|commonweal: /404.html	|公益 404|

菜单内容示例配置(启用和管理，只需要更改菜单前边的#即可)

	menu:
	  home: /
	  categories: /categories
	  #about: /about
	  archives: /archives
	  tags: /tags
	  #commonweal: /404.html

#### 2.设置菜单项的显示文本
在第一步中设置的菜单的名称并不直接用于界面上的展示。Hexo 在生成的时候将使用 这个名称查找对应的语言翻译，并提取显示文本。这些翻译文本放置在 NexT 主题目录下的 languages/{language}.yml （{language} 为你所使用的语言）。以简体中文为例，若你需要添加一个菜单项，比如 something。那么就需要修改简体中文对应的翻译文件 languages/zh-Hans.yml，在 menu 字段下添加一项：

	menu:
	  home: 首页
	  archives: 归档
	  categories: 分类
	  tags: 标签
	  about: 关于
	  search: 搜索
	  commonweal: 公益404
	  something: 有料

#### 3.设定菜单项的图标
设定菜单项的图标，对应的字段是 menu_icons。 此设定格式是 item name: icon name，其中 item name 与上一步所配置的菜单名字对应，icon name 是 Font Awesome 图标的 名字。而 enable 可用于控制是否显示图标，你可以设置成 false 来去掉图标。

	menu_icons:
	  enable: true
	  # Icon Mapping.
	  home: home
	  about: user
	  categories: th
	  tags: tags
	  archives: archive
	  commonweal: heartbeat

### 侧栏设置
默认情况下，侧栏仅在文章页面（拥有目录列表）时才显示，并放置于右侧位置。 可以通过修改 主题配置文件 中的 sidebar 字段来控制侧栏的行为。侧栏的设置包括两个部分，其一是侧栏的位置， 其二是侧栏显示的时机。支持的选项为：
- post 默认行为，在文章页面（拥有目录列表）时显示
- always 在所有页面中都显示
- hide 在所有页面中都隐藏（可以手动展开）

侧栏示例配置：
	
	sidebar:
		position: right
		display: post

### 头像设置
编辑 站点配置文件，新增字段 avatar，值设置成的地址，可以使用完整的互联网URL，也可以将图片放到站点目录下，使用相对地址。
头像设置示例
	
	avatar: /images/avatar.jpg

### 作者昵称设置 

编辑 站点配置文件， 设置 author 为你的昵称。

### 站点描述

编辑 站点配置文件， 设置 description 字段为你的站点描述。