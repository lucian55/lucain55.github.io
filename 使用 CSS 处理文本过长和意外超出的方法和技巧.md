## 使用 CSS 处理文本过长和意外超出的方法和技巧

>在网页开发中，经常会碰到在一些场景中文本内容不受控制过长超出的问题，为了不破坏UI界面保持设计上的美观，我们需要对它进行一些截断或者是其它的处理。这篇文章就文本超出这类型的情形的方法做了一些总结，下面就来看看，针对不同的场景我们有哪些方法呢？


### 按钮图文混排问题
![image](https://user-images.githubusercontent.com/17527649/27760284-375b9ef2-5e76-11e7-90f4-7af487414467.png)
上图是一个有图标的按钮。图标是在按钮的右侧，这里又一个小小的问题，就是当按钮的长度不够长的时候，按钮中文字会叠在图标上，尤其是按钮中的文本过长的时候。
一种解决方法是给按钮设置足够大的padding-right值
效果如下图
![image](https://user-images.githubusercontent.com/17527649/27760287-53102e60-5e76-11e7-8d01-8411391e5240.png)


### 占位文本（placeholder）
在一些表单的设计场景中，一般都会使用占位文本来对用户进行要填写内容的提示。同样也会碰到文本过长的问题，如下图所示：
![image](https://user-images.githubusercontent.com/17527649/27760295-841b7136-5e76-11e7-9f67-af1c5ca82201.png)

通常的解决方法是把文字放在按钮的下面：
![image](https://user-images.githubusercontent.com/17527649/27760297-8b2f6ab8-5e76-11e7-8325-384d9a970088.png)

### 人名过长
![image](https://user-images.githubusercontent.com/17527649/27760299-98d42564-5e76-11e7-8e59-0f34339a2b77.png)

如上图所示，在web开发中经常会碰到此类人名过长的问题。当人名过长的时候，会破坏整个UI界面的视觉体验。
对这种左图右文的布局，一般的做法是图片使用浮动进行向左浮动，这样文字就会在图片的右边。当然，这仅仅是在文字不够长的情形下有效。
为了这种布局更加的健壮，可以给这两个元素添加一个宽度。当然，现在有更好的方法，那就是使用flexbox的这个属性来进行布局。


### 英文单词过长
![image](https://user-images.githubusercontent.com/17527649/27760305-da300262-5e76-11e7-873e-11b84d2e8529.png)

在文本内容中经常会碰到一些单词过长的问题。在大尺寸设备上没啥问题，但是在小尺寸设备上，过长的单词会破坏整个页面的美感。
有两种解决方案：

1. 使用CSS中word-break
通过使用 word-break 属性，可以让浏览器实现在任意位置的换行。
```
p {
  word-break: break-all;
}
```

2. 使用text-overflow
使用text-overflow来截断文字。这个方法用在链接类型的文字上比较好，对于普通的文本推荐使用word-break。
效果图下图
![image](https://user-images.githubusercontent.com/17527649/27760318-11bbae66-5e77-11e7-910d-4f1d0ecf6265.png)
