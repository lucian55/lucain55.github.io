# 用fiddler拦截指定网站数据包并修改数据包教程 #
1. 打开fiddler抓包工具，在左下底部，输入bpu+你要拦截的网址域名，比如，我要拦截打开百度时发送的数据包，那么我输入：bpu baidu.com或者bpu  www.baidu.com都可以，然后回车，这个时候就会拦截百度相关网址的数据包了，如下图：	
![](http://i.imgur.com/KJGHjeI.jpg)
2. 拦截了以后，你打开百度相关的网址时，可以看到是红色的，数据包实际上没有发送出去的，如图：![](http://i.imgur.com/n5cLLiV.jpg)
3. 点开，然后你就可以修改相关的数据：![](http://i.imgur.com/dkPjQDB.jpg)
4. 修改了数据以后，点击下面的“run to completion”就可以发送出去数据包了：![](http://i.imgur.com/hfBjD4T.jpg)
5. 至此，你就完成了拦截数据包，修改数据包，并发送数据包的全过程，如果要取消掉相应的拦截，可以在左下角之前输入命令的地方，输入：bpu，回车，这样就取消掉了所有的拦截设置，数据就会自动发送出去：![](http://i.imgur.com/7NzDKAd.jpg)