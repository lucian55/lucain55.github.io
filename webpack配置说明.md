---
title: webpack配置说明
date: 2017年1月19日11:29:32
tags: "webpack"
categories: "webpack"
---

>废话不多说，直接上代码

```
var htmlWebpackPlugin=require('html-webpack-plugin');
var openBrowserWebpackPlugin=require('open-browser-webpack-plugin');//打开浏览器插件
var extractTextWebpackPlugin=require('extract-text-webpack-plugin');//文件单独加载插件
var webpack=require('webpack');
module.exports={
  //entry:'./app/index.js',//入口文件
  //配置多个入口文件
  entry:{
    index:['./app/a.js','./app/b.js'],//将a和b同时打包在一起生成index.js
    bundle:'./app/index.js'
  },
  output:{//出口文件
    path:'./build/',//出口路径
    filename:'[name].js?[hash:8]'//出口文件名。[name]对于entry中的属性名。?[hash:8]加8位的hash值，防止缓存
  },
  plugins:[
    //自动创建plugin
    new htmlWebpackPlugin({
      title:'标题',
      //filename:'index.html',//自动生成一个新的html
      template:'./index.html',//在index.html模板上增加js
      chunks:['index','bundle','common.js']//需要哪些js文件,即依赖的js。 common是提取的js文件，必须加后缀
    }),
    //自动打开浏览器
    new openBrowserWebpackPlugin({
      url:'http://localhost:8081'
    }),
    new extractTextWebpackPlugin('bundle.css'),//文件单独加载，命名打包后的css文件
    new webpack.optimize.CommonsChunkPlugin('common.js'),//抽取chunks下所有的js相同的代码，并合并为common.js
    new webpack.optimize.UglifyJsPlugin({//压缩js文件
        compress: {
          warnings: false
          }
    }),
  ],
  module:{//模块的导入方式，即为了简化index.js中的require('style!css!./style.css')这句话。配置完一个这句话可以改为require('./style.css')
    loaders:[//所有的加载器
      //{test:/\.css$/,loaders:['style','css']},//匹配所有的css，进行css和style的配置
      {test:/\.css$/,loader:extractTextWebpackPlugin.extract('style','css')},//配置需要单独单独加载的文件
      {test:/\.(jpg|png|gif)$/,loaders:['url?limit=8000']}//匹配所有的图片，用url-loader加载。 ?limit=8000 8K以下的不转BASE64
    ]
  },
  resolve:{//请求重定向
    //在编写的时候去掉扩展名
    extensions:['','.js','.css','.jsx'],//顺序必须是 空  js  css jsx
    //配置名称简写。即把index.js中的require('./a/b/index.js')的写法改为pack
    alias:{
      pack:'./a/b/index.js'
    }
  }
}

```