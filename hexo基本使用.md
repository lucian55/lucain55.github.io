---
title: hexo基本使用
date: 2016-08-14 19:23:17
tags: "hexo"
categories: "工具"
---


> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

## 安装 ##
- 1.安装node.js和git
- 2.使用npm安装hexo `$ npm install -g hexo-cli`  

## 建站 ##
安装 Hexo 完成后，请执行下列命令，Hexo 将会在指定文件夹中新建所需要的文件。

```
	$ hexo init      
    $ npm install  
```

新建完成后，指定文件夹的目录如下：

```
    ├── _config.yml
    ├── package.json
    ├── scaffolds
    ├── scripts
    ├── source
    |   ├── _drafts
    |   └── _posts
    └── themes  
```

文件说明：
- _config.yml 网站的配置信息，可以在此配置大部分的参数。
- package.json 应用程序的信息

```
    {  
      "name": "hexo-site",  
      "version": "",  
      "private": true,  
      "hexo": {  
        "version": ""  
      },  
      "dependencies": {  
        "hexo-renderer-ejs": "*",  
        "hexo-renderer-stylus": "*",  
        "hexo-renderer-marked": "*"  
      }  
    }  
```

- scaffolds 模版文件夹,新建文章时，Hexo会根据scaffold来建立文件。
- scripts 脚本文件夹。脚本是扩展 Hexo 最简易的方式，在此文件夹内的 JavaScript 文件会被自动执行。
- source 资源文件夹是存放用户资源的地方
- themes 主题文件夹。Hexo 会根据主题来生成静态页面。

## 配置 ##
可以在 _config.yml 中修改大部份的配置。

### 网站 ###
- title 网站标题
- subtitle 网站副标题
- description	网站描述
- author 	名字
- language	网站使用的语言
- timezone	网站时区。Hexo 预设使用您电脑的时区

### 网址 ###

- url	网址	
- root	网站根目录	
- permalink	文章的永久链接
- permalink_default	永久链接中各部分的默认值

### 目录 ###

- source_dir	资源文件夹，这个文件夹用来存放内容。	
- public_dir	公共文件夹，这个文件夹用于存放生成的站点文件。	
- tag_dir	标签文件夹	
- archive_dir	归档文件夹	
- category_dir	分类文件夹	
- code_dir	Include code 文件夹	
- i18n_dir	国际化（i18n）文件夹	:
- skip_render	跳过指定文件的渲染，可使用 glob 来配置路径。	

### 文章 ###

- new_post_name	新文章的文件名称	 
- default_layout	预设布局	 
- auto_spacing	在中文和英文之间加入空格	
- titlecase	把标题转换为 title case	
- external_link	在新标签中打开链接	 
- filename_case	把文件名称转换为 (1) 小写或 (2) 大写	
- render_drafts	显示草稿	 
- post_asset_folder	启动 Asset 文件夹	 
- relative_link	把链接改为与根目录的相对位址	 
- future	显示未来的文章	 
- highlight	代码块的设置

### 分类 & 标签 ###

- default_category	默认分类	 
- category_map	分类别名	
- tag_map	标签别名

### 日期 / 时间格式 ###

- date_format	日期格式	MMM D YYYY
- time_format	时间格式	H:mm:ss

### 分页 ###

- per_page	每页显示的文章量 (0 = 关闭分页功能)	 
- pagination_dir	 

### 扩展 ###

- theme	当前主题名称
- deploy	部署

## 指令 ##
    $ hexo init [folder]
新建一个网站。如果没有设置 folder ，Hexo 默认在目前的文件夹建立网站。

    $ hexo new [layout] <title>
新建一篇文章。如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来。

    $ hexo generate
生成静态文件。

    $ hexo publish [layout] <filename>
发表草稿。

    $ hexo server
启动服务器。

    $ hexo deploy
部署网站。

    $ hexo render <file> ...
渲染文件。

    $ hexo clean
清除缓存文件 (db.json) 和已生成的静态文件 

    $ hexo list <type>
列出网站资料。

    $ hexo version
显示 Hexo 版本。