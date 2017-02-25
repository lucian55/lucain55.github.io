---
title: fiddler手机抓包
date: 2017年2月20日21:10:02
tags: ["fiddler","工具"]
categories: "工具"

---

# fiddler手机抓包 #

1. 启动fiddler，打开菜单栏中的 Tools > Fiddler Options，打开“Fiddler Options”对话框。![](http://i.imgur.com/EBByW1a.png)
2. 在Fiddler Options”对话框切换到“Connections”选项卡，然后勾选“Allow romote computers to connect”后面的复选框，然后点击“OK”按钮![](http://i.imgur.com/Td3Kuez.png)
3. 在本机命令行输入：ipconfig，找到本机的ip地址。![](http://i.imgur.com/zH6X7xD.png)
4. 打开android设备的“设置”->“WLAN”，找到你要连接的网络，在上面长按，然后选择“修改网络”，弹出网络设置对话框，然后勾选“显示高级选项”。![](http://i.imgur.com/bTLSLZG.png)
5. 在“代理”后面的输入框选择“手动”，在“代理服务器主机名”后面的输入框输入电脑的ip地址，在“代理服务器端口”后面的输入框输入8888，然后点击“保存”按钮。 ![](http://i.imgur.com/kkuAF1J.png)
6. 然后启动android设备中的浏览器，访问百度的首页，在fiddler中可以看到完成的请求和响应数据。![](http://i.imgur.com/Ez3V1xo.png)
