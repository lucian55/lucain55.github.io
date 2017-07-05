---
title: js常用方法-持续更新
date: 2017年2月18日10:41:37
tags: ["js技巧"]
categories: "javascript"
---


## 一、cookie相关操作

### 1、添加cookie
```
/**
 * 添加cookie
 * @param name cookie名称
 * @param value cookie值
 * @param expiresHours 多少小时后过期
 */
function addCookie(name,value,expiresHours){
    var cookieString=name+"="+escape(value);
    //判断是否设置过期时间
    if(expiresHours>0){
        var date=new Date();
        date.setTime(date.getTime+expiresHours*3600*1000);
        cookieString=cookieString+"; expires="+date.toGMTString();
    }
    document.cookie=cookieString;
}
```

### 2、获得指定名称的cookie

```
/**
 * 获得指定名称的cookie
 * @param name cookie名称
 * @returns  返回cookie值
 */
function getCookie(name){
    var strCookie=document.cookie;
    var arrCookie=strCookie.split("; ");
    for(var i=0;i<arrCookie.length;i++){
        var arr=arrCookie[i].split("=");
        if(arr[0]==name)return arr[1];
    }
    return "";
}

```
### 3、删除指定名称的cookie

```
/**
 * 删除指定名称的cookie
 * @param name cookie名称
 */
function deleteCookie(name){
    var date=new Date();
    date.setTime(date.getTime()-10000);
    document.cookie=name+"=v; expires="+date.toGMTString();
}

```

## 二、获得url参数

```
/**
 * 获得url参数
 * @param name 参数名称
 * @returns {*}
 */
function getQueryString(name) {
  var after = window.location.hash.split("?")[1];
  if (after) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = after.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2])
    }
    else {
      return null;
    }
  }
}

```


## 三、日期时间相关

### 1、日期格式化

```
/**
 * 完美的日期格式化
 * @param data  日期  日期类型/毫秒数/时间格式字符串
 * @param fmt 格式  y年，M月，d日，h时，m分，s秒，q季度，S毫秒
 * @returns {*}
 */
function dataPart(data,fmt){
    data=new Date(data);
    let o = {
        "M+": data.getMonth() + 1, //月份
        "d+": data.getDate(), //日
        "w+": data.getDay(),//周
        "h+": data.getHours(), //小时
        "m+": data.getMinutes(), //分
        "s+": data.getSeconds(), //秒
        "q+": Math.floor((data.getMonth() + 3) / 3), //季度
        "S": data.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
```

### 日期加减法

```
/*
 *   功能:日期减的功能
 *   参数:interval,字符串表达式，表示要添加的时间间隔.y年，q季度，mon月，w周，d天，h时，min分，s秒
 *   参数:number,数值表达式，表示要添加的时间间隔的个数. 加法传正数，减法传负数
 *   参数:date,时间对象.
 *   返回:新的时间对象.
 *   
 */
export function dateSubtract(interval,number,date) {
    switch (interval) {
        case   "y"   : {
            date.setFullYear(date.getFullYear() + number);
            return date;
            break;
        }
        case   "q"   : {
            date.setMonth(date.getMonth() + number * 3);
            return date;
            break;
        }
        case   "mon"   : {
            date.setMonth(date.getMonth() + number);
            return date;
            break;
        }
        case   "w"   : {
            date.setDate(date.getDate() + number * 7);
            return date;
            break;
        }
        case   "d"   : {
            date.setDate(date.getDate() + number);
            return date;
            break;
        }
        case   "h"   : {
            date.setHours(date.getHours() + number);
            return date;
            break;
        }
        case   "min"   : {
            date.setMinutes(date.getMinutes() + number);
            return date;
            break;
        }
        case   "s"   : {
            date.setSeconds(date.getSeconds() + number);
            return date;
            break;
        }
        default   : {
            date.setDate(date.getDate() + number);
            return date;
            break;
        }
    }
}
```

## 四、获得ie浏览器版本

```
function getBrowserVersion() {
			var userAgent = navigator.userAgent.toLowerCase();
			if (userAgent.match(/msie ([\d.]+)/) != null) {//ie6--ie9
				uaMatch = userAgent.match(/msie ([\d.]+)/);
				return 'IE' + uaMatch[1].match(/\d/);
			} else if(userAgent.match(/(trident)\/([\w.]+)/)) {
				uaMatch = userAgent.match(/trident\/([\w.]+)/);
				switch (uaMatch[1]) {
					case "4.0":
						return "IE8";
						break;
					case "5.0":
						return "IE9";
						break;
					case "6.0":
						return "IE10";
						break;
					case "7.0":
						return "IE11";
						break;
					default:
						return "undefined";
				}
			}
			return "undefined";
		}

```

## 五、原生js，DOM元素相关操作

### 1、获得指定元素的索引

```
/**
 * 获得指定元素的索引
 * @param ele 指定元素
 * @returns {number} 索引
 */
function getIndex(ele) {
    var index = 0;
    var p = ele.previousSibling;
    while (p) {
        if (p.nodeType === 1) {
            index++;
        }
        p = p.previousSibling;
    }
    return index;
};

```

### 2、计算任意元素距离文档上边和左边的绝对偏移量

```
/**
 * 计算任意元素距离文档上边和左边的绝对偏移量
 * @param ele
 * @returns {{t: (*|Number|number)距离上边的偏移量, l: (*|Number|number)距离左边的偏移量}}
 */
function offset(ele) {
    var top = ele.offsetTop;
    var left = ele.offsetLeft;
    var parent = ele.offsetParent;
    while (parent) {
        if (window.navigator.userAgent("MSIE 8") == -1) {
            top += parent.offsetTop + parent.clientTop;
            left += parent.offsetLeft + parent.clientLeft
        } else {
            top += parent.offsetTop;
            left += parent.offsetLeft;
        }
    }
    return {t: top, l: left};
};
```

### 3、类数组转换为数组

```
/**
 * 类数组转换为数组
 * @param likeArray 类数组
 * @returns {Array} 数组
 */
function listToArray(likeArray) {
    try {
        return [].slice.call(likeArray);
    } catch (e) {
        var ary = [];
        for (var i = 0; i < likeArray; i++) {
            ary[ary.length] = likeArray[i];
        }
        return ary;
    }
};

```

### 4、获得指定元素的所有的元素哥哥弟弟节点

```
/**
 * 获得指定元素的所有的元素哥哥弟弟节点
 * @param ele 指定元素
 * @returns {Array} 哥哥弟弟，顺序和文档顺序相同
 */
function siblings(ele) {
    var parent = ele.parentNode;
    var children = parent.children;//所有元素节点，在ie中还会包括注释节点
    var ary = [];
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType === 1 && children[i] != ele) {
            ary.push(children[i]);
        }
    }
    return ary;
};
```


### 5、获得指定元素相邻的哥哥元素节点

```
/**
 * 获得指定元素相邻的哥哥元素节点
 * @param ele 指定元素
 * @returns {Object} 元素节点
 */
function previous(ele) {
    if (typeof ele.previousElementSibling == "object") {//如果没有哥哥元素节点，或者支持这个方法  if里直接写 ele.previousElementSibling会有问题
        return ele.previousElementSibling;
    } else {
        var p = ele.previousSibling;
        while (p) {
            if (p.nodeType === 1) {
                return p;
            }
            p = p.previousSibling;
        }
        return null;//如果没有哥哥节点，返回null
    }
};
```

### 6、获得指定元素相邻的弟弟元素节点

```
/**
 * 获得指定元素相邻的弟弟元素节点
 * @param ele 指定元素
 * @returns {Object}
 */
function next(ele) {
    if (typeof ele.nextElementSibling == "object") {
        return ele.nextElementSibling;
    }
    var next = ele.nextSibling;
    while (next) {
        if (next.nodeType === 1) {
            return next;
        }
        next = next.nextSibling;
    }
    return null;
};

```

### 7、获得指定元素所有的哥哥元素节点

```
/**
 * 获得指定元素所有的哥哥元素节点
 * @param ele 指定元素
 * @returns {Array} 哥哥元素节点数组
 */
function previousAll(ele) {
    var ary = [];
    var p = ele.previousSibling;
    while (p) {
        if (p.nodeType === 1) {
            ary.push(p);
        }
        p = p.previousSibling;
    }
    return ary;
};

```

### 8、获得指定元素所有的弟弟元素节点

```
/**
 * 获得指定元素所有的弟弟元素节点
 * @param ele 指定元素
 * @returns {Array} 弟弟元素节点数组
 */
function nextAll(ele) {
    var ary = [];
    var next = ele.nextSibling;
    while (next) {
        if (next.nodeType === 1) {
            ary.push(next);
        }
        next = next.nextSibling;
    }
    return ary;
};
```

###　9、获得指定元素的第一个元素子节点

```
/**
 * 获得指定元素的第一个元素子节点
 * @param parent 指定元素
 * @returns {Object} 元素节点
 */
function firstChild(parent) {
    if (typeof parent.firstElementChild == "object") {
        return parent.firstElementChild;
    }
    var first = parent.firstChild;
    while (first) {
        if (first.nodeType === 1) {
            return first;
        }
        first = first.nextSibling;
    }
    return null;
};

```

### 10、获得指定元素的最后一个元素子节点

```
/**
 * 获得指定元素的最后一个元素子节点
 * @param parent 指定元素
 * @returns {Object} 元素节点
 */
function lastChild(parent) {
    if (typeof parent.lastElementChild == "object") {
        return parent.lastElementChild;
    }
    var last = parent.lastChild;
    while (last) {
        if (last.nodeType === 1) {
            return last;
        }
        last = last.previousSibling;
    }
    return null;
};

```

### 11、获得parent所有的子元素节点
```
/**
 * 获得parent所有的子元素节点,兼容ie，还可以获得指定标签名tagName的子元素
 * @param parent 父元素
 * @param tagName 子元素的名称
 * @returns {Array} 数组
 */
function children(parent, tagName) {
    var ary = [];
    var child = parent.children;//children在ie67中会包括注释节点
    if (typeof tagName == "string") {
        for (var i = 0; i < child.length; i++) {
            //if(child[i].nodeType===1&&child[i].nodeName==tagName.toUpperCase()){
            //if(child[i].nodeType===1&&child[i].tagName==tagName.toUpperCase()){nodeName和tagName：tagName只是元素节点的属性（其它节点是undefined），nodeName是所有的节点
            if (child[i].tagName === tagName.toUpperCase()) {
                ary.push(child[i]);
            }
        }
    } else if (tagName === undefined) {
        for (var i = 0; i < child.length; i++) {
            if (child[i].nodeType === 1) {
                ary.push(child[i]);
            }
        }
    } else {
        throw new Error("第二个参数标签名错误");
    }
    return ary;
};
```

### 12、根据类名获得元素
```
/**
 * 根据类名获得元素
 * @param className  类名，字符串，多个类名以空格分隔
 * @param parent  父级，可以不写，不写为整个文档
 * @returns {Array} 数组
 */
function getByClassName(className, parent) {
    parent = parent || document;
    if (parent.getElementsByClassName) {
        return parent.getElementsByClassName(className);
    }
    var regTrim = /^ +| +$/g;
    className = className.replace(regTrim, "");
    var allTag = parent.getElementsByTagName("*");
    var classNameAry = className.split(/ +/);
    for (var i = 0; i < classNameAry.length; i++) {
        var reg = new RegExp("(?:^| )" + classNameAry[i] + "(?: |$)");
        var ary = [];
        for (var k = 0; k < allTag.length; k++) {
            if (reg.test(allTag[k].className)) {
                ary.push(allTag[k]);
            }
        }
        allTag = ary;
    }
    return allTag;
};
```

### 13、新增class类名

```
/**
 * 新增class类名
 * @param ele 元素
 * @param className 要新增的类名
 */
function addClass(ele, className) {
    if (ele && ele.nodeType && ele.nodeType === 1 && className && typeof className === "string") {
        var reg = new RegExp("(?:^| )" + className + "(?: |$)");
        if (!reg.test(ele.className)) {
            ele.className = ele.className + " " + className;
        }
    }
};
```

### 14、移除class类名
```
/**
 * 移除class类名
 * @param ele 元素
 * @param className 要移除的类名
 */
function removeClass(ele, className) {
    if (ele && ele.nodeType && ele.nodeType === 1 && className && typeof className === "string") {
        var reg = new RegExp("(?:^| )" + className + "(?: |$)", "g");
        //ele.className = ele.className.replace(/ /g, "   ");//加空格
        ele.className = ele.className.replace(reg, " ");
    }
};
```

### 15、将新元素添加到老元素后边
```
/**
 * 将新元素添加到老元素后边
 * @param newEle 新元素
 * @param oldEle 老元素
 */
function insetAfter(newEle, oldEle) {
    //ele.insertBefore(newEle,oldEle);//如果第二个参数为null，或者不写，相当于appendChild
    //把newEle添加到oldEle的弟弟的前边
    oldEle.parentNode.insertBefore(newEle, oldEle.nextSibling);
};
```
### 16、将子元素添加到父元素的第一个位置
```
/**
 * 将子元素添加到父元素的第一个位置
 * @param parent 父元素
 * @param child 子元素
 */
function prepend(parent, child) {
    //appendChile是在最后
    parent.insertBefore(child, parent.firstChild);
};

```
### 17、获得内敛式或者外嵌式css属性值

```
/**
 * 获得内敛式或者外嵌式css属性值。带单位的属性值去掉单位，不带单位直接返回
 * @param ele  元素
 * @param attr  属性名 例如 "left"、"margin"
 * @returns {Number}
 */
function getCss(ele, attr) {
    var value, reg;
    if (typeof window.getComputedStyle == "function") {
        value = window.getComputedStyle(ele)[attr];
    } else {
        if(attr=="opacity"){
            var opacity=ele.currentStyle["filter"];//alpha(opacity=80)
            var regOpacity=/alpha\(opacity *= *(\d+(\.\d+)?)\)/;
            value=regOpacity.test(opacity)?parseFloat(RegExp.$1)/100:1;
        }else{
            value = ele.currentStyle[attr];
        }
    }
    reg = /^[+-]?\d+(\.\d+)?(px|pt|em|rem)?$/;
    if (reg.test(value)) {
        return parseFloat(value);
    } else {
        return value;
    }
};

```
### 18、设置css属性

```
/**
 * 设置css属性 兼容ie的透明度
 * @param ele  元素
 * @param attr  属性名
 * @param value  属性值
 */
DOM.setCss=function setCss(ele,attr,value){
    if(attr=="opacity"){
        ele.style["opacity"]=value;
        ele.style["filter"]="alpha(opacity="+value+")";
    }else{
        if(isNaN(value)){
            ele.style[attr]=value;
        }else{
            ele.style[attr]=value+"px";
        }
    }
};

```