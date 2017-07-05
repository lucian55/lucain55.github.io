---
title: sass全攻略-安装及编译
date: 2017年3月21日15:18:52
tags: "sass"
categories: "sass"

---


## sass安装

本文介绍sass的安装及调试

### ruby安装
因为sass依赖于ruby环境，所以装sass之前先确认装了ruby。 [ruby下载](http://rubyinstaller.org/downloads)
安装的ruby的时候勾选，Add Ruby executables to your PATH这个选项，添加环境变量。

### sass安装
安装完ruby之后，在开始菜单中，找到刚才我们安装的ruby，打开Start Command Prompt with Ruby

然后直接在命令行中输入
```
gem install sass
```

按回车键确认，等待一段时间就会提示你sass安装成功。

升级sass版本的命令行为
```
gem update sass
```

查看sass版本的命令行为
```
sass -v
```

你也可以运行帮助命令行来查看你需要的命令
```
sass -h
```


### 淘宝RubyGems镜像安装 sass

由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。这时候我们可以通过gem sources命令来配置源，先移除默认的https://rubygems.org源，然后添加淘宝的源https://ruby.taobao.org/，然后查看下当前使用的源是哪个，如果是淘宝的，则表示可以输入sass安装命令gem install sass了，关于常用gem source命令可参看：常用的gem source

```
$ gem sources --remove https://rubygems.org/
$ gem sources -a https://ruby.taobao.org/ 【如果你系统不支持https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org】
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install sass
```


## sass编译

### 命令行编译
单文件转换命令
```
sass style.scss style.css
```
单文件监听命令
```
sass --watch style.scss:style.css
```
文件夹监听命令
```
sass --watch sassFileDirectory:cssFileDirectory
```
css文件转成sass/scss文件（在线转换工具css2sass）
```
sass-convert style.css style.sass   
sass-convert style.css style.scss
```

### webstrom 编辑器编译

file-setting-tools-file Watchers
新增scss、sass文件,配置ruby地址
![sass.png](..\images\sass.png)

新建test.scss 文件。 webstrom就会自动编译，生成test.css,test.css.map。

![sass-test.png](..\images\sass-test.png)