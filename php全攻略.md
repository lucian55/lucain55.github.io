---
title: PHP全攻略
date: 2017年3月28日16:06:14
tags: "php"
categories: "php"

---


>PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。
PHP 是免费的，并且使用广泛。对于像微软 ASP 这样的竞争者来说，PHP 无疑是另一种高效率的选项。

参考：[php教程](http://www.w3school.com.cn/php/index.asp)


## 语法
PHP 脚本可放置于文档中的任何位置。
PHP 脚本以 <?php 开头，以 ?> 结尾：
PHP 文件的默认文件扩展名是 ".php"。
PHP 文件通常包含 HTML 标签以及一些 PHP 脚本代码。
```
<?php
// 此处是 PHP 代码
?>
```

第一个页面。hello word 

```
<!DOCTYPE html>
<html>
<body>

<h1>我的第一张 PHP 页面</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
```

## 注释
PHP 支持三种注释

```
<!DOCTYPE html>
<html>
<body>

<?php
// 这是单行注释

# 这也是单行注释

/*
这是多行注释块
它横跨了
多行
*/
?>

</body>
</html>
```

## 变量
- 变量以 $ 符号开头，其后是变量的名称
- 变量名称必须以字母或下划线开头
- 变量名称不能以数字开头
- 变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）
- 变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）
- php是一门弱类型的语言

### 创建 PHP 变量
变量会在首次为其赋值时被创建：

```
<?php
$txt="Hello world!";
$x=5;
$y=10.5;
?>
```

### 变量作用域
PHP 有三种不同的变量作用域：
- local（局部）
- global（全局）
- static（静态）

函数之外声明的变量拥有 global 作用域，只能在函数以外进行访问。
函数内部声明的变量拥有 local 作用域，只能在函数内部进行访问。

### global 关键词 
将函数内的变量暴漏到全局下，使可以在全局访问
```
<?php
$x=5;
$y=10;

function myTest() {
  global $x,$y;
  $y=$x+$y;
}

myTest();
echo $y; // 输出 15
?>
```

### PHP 同时在名为 $GLOBALS[index] 的数组中存储了所有的全局变量。下标存有变量名。这个数组在函数内也可以访问，并能够用于直接更新全局变量。
上面的例子可以这样重写：

```
<?php
$x=5;
$y=10;

function myTest() {
  $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
} 

myTest();
echo $y; // 输出 15
?>
```

### static 关键词
通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个局部变量。实现这一点需要更进一步的工作。
要完成这一点，请在您首次声明变量时使用 static 关键词：
```
<?php

function myTest() {
  static $x=0;
  echo $x;
  $x++;
}

myTest();//0
myTest();//1
myTest();//2

?>
```

## echo 和 print 语句
有两种基本的输出方法：echo 和 print。
echo 和 print 之间的差异：
- echo - 能够输出一个以上的字符串
- print - 只能输出一个字符串，并始终返回 1

### echo 语句
echo 是一个语言结构，有无括号均可使用：echo 或 echo()。
下面的例子展示如何用 echo 命令来显示不同的字符串（同时请注意字符串中能包含 HTML 标记）：
```
<!DOCTYPE html>
<html>
<body>

<?php
echo "<h2>PHP 很有趣！</h2>";//PHP 很有趣！（字号是h2大小的）
echo "Hello world!<br>";//Hello world!
echo "我计划学习 PHP！<br>";//我计划学习 PHP！
echo "这段话", "由", "多个", "字符串", "串接而成。";//这段话由多个字符串串接而成。
?>  

</body>
</html>
```

###  print 语句
下面的例子展示如何用 print 命令来显示字符串和变量：
```
<?php
$txt1="Learn PHP";
$txt2="W3School.com.cn";
$cars=array("Volvo","BMW","SAAB");

print $txt1;//Learn PHP
print "<br>";//换行
print "Study PHP at $txt2";//Study PHP at W3School.com.cn
print "My car is a {$cars[0]}";//My car is a Volvo
?>
```

## 数据类型
字符串、整数、浮点数、逻辑、数组、对象、NULL。
### var_dump() 
var_dump() 会返回变量的数据类型和值：

### 字符串
字符串可以是引号内的任何文本。您可以使用单引号或双引号：
```
<?php 
$x = "Hello world!";
echo $x;
echo "<br>"; 
$x = 'Hello world!';
echo $x;
?>
```
### 整数
整数规则：
- 整数必须有至少一个数字（0-9）
- 整数不能包含逗号或空格
- 整数不能有小数点
- 整数正负均可
- 可以用三种格式规定整数：十进制、十六进制（前缀是 0x）或八进制（前缀是 0）

在下面的例子中，我们将测试不同的数字。PHP var_dump() 会返回变量的数据类型和值：
```
<?php 
$x = 5985;
var_dump($x);//int(5985) 
echo "<br>"; 
$x = -345; // 负数
var_dump($x);//int(-345) 
echo "<br>"; 
$x = 0x8C; // 十六进制数
var_dump($x);//int(140) 
echo "<br>";
$x = 047; // 八进制数
var_dump($x);//int(39)
?>
```

### 浮点数
浮点数是有小数点或指数形式的数字。
```
<?php 
$x = 10.365;
var_dump($x);
echo "<br>"; 
$x = 2.4e3;
var_dump($x);
echo "<br>"; 
$x = 8E-5;
var_dump($x);
?>
```

### 逻辑
逻辑是 true 或 false。
```
$x=true;
$y=false;
```

### 数组
```
<?php 
$cars=array("Volvo","BMW","SAAB");
var_dump($cars);//array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(4) "SAAB" }
?>
```

### 对象
在 PHP 中，必须明确地声明对象。
首先我们必须声明对象的类。对此，我们使用 class 关键词。类是包含属性和方法的结构。
然后我们在对象类中定义数据类型，然后在该类的实例中使用此数据类型：
```
<?php
class Car
{
    var $color;
    function Car($color="green") {
      $this->color = $color;
    }
    function what_color() {
      return $this->color;
    }
}

function print_vars($obj) {
   foreach (get_object_vars($obj) as $prop => $val) {
     echo "\t$prop = $val\n";
   }
}

// instantiate one object
$herbie = new Car("white");

// show herbie properties
echo "\herbie: Properties\n";
print_vars($herbie);// \herbie: Properties color = white

?>  
```

### NULL 
特殊的 NULL 值表示变量无值。NULL 是数据类型 NULL 唯一可能的值。
NULL 值标示变量是否为空。也用于区分空字符串与空值数据库。
可以通过把值设置为 NULL，将变量清空：
```

<?php
$x="Hello world!";
$x=null;
var_dump($x);// NULL
?>
```

## 常量
如需设置常量，请使用 define() 函数 - 它使用三个参数：
- 首个参数定义常量的名称
- 第二个参数定义常量的值
- 可选的第三个参数规定常量名是否对大小写敏感。默认是 false。

```
<?php
// 定义对大小写敏感的常量
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
echo "<br>";
// 不会输出常量的值
echo greeting;
?> 


<?php
// 定义对大小写不敏感的常量
define("GREETING", "Welcome to W3School.com.cn!", true);
echo GREETING;
echo "<br>";
// 会输出常量的值
echo greeting;
?>  
```
## 数组的方法
[参考链接](http://www.w3school.com.cn/php/php_ref_array.asp)

## 字符串的方法

[参考链接](http://www.w3school.com.cn/php/php_ref_string.asp)

## 函数
PHP 的真正力量来自它的函数：它拥有超过 1000 个内建的函数。

### 创建用户定义函数
- 用户定义的函数声明以关单 "function" 开头：
- 函数名能够以字母或下划线开头（而非数字）。
- 函数名对大小写不敏感。
- 函数名应该能够反映函数所执行的任务。
```
function functionName() {
  被执行的代码;
}
```

函数默认参数
```
<?php
function setHeight($minheight=50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);//高度是：350 
setHeight(); // 高度是：50 
?>
```

函数参数返回值通javascript语法


## 全局变量 - 超全局变量
[参考地址](http://www.w3school.com.cn/php/php_superglobals.asp)


## 表单
主要笔记：
```
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
```
通过使用 htmlspecialchars() 能够避免跨站点脚本XSS漏洞

## 日期
[参考地址](http://www.w3school.com.cn/php/php_ref_date.asp)

## Include 文件
[参考地址](http://www.w3school.com.cn/php/php_includes.asp)

通过 include 或 require 语句，可以将 PHP 文件的内容插入另一个 PHP 文件（在服务器执行它之前）。
include 和 require 语句是相同的，除了错误处理方面：
- require 会生成致命错误（E_COMPILE_ERROR）并停止脚本
- include 只生成警告（E_WARNING），并且脚本会继续

因此，如果您希望继续执行，并向用户输出结果，即使包含文件已丢失，那么请使用 include。否则，在框架、CMS 或者复杂的 PHP 应用程序编程中，请始终使用 require 向执行流引用关键文件。这有助于提高应用程序的安全性和完整性，在某个关键文件意外丢失的情况下。

假设我们有一个名为 "footer.php" 的标准的页脚文件，就像这样：
```
<?php
echo "<p>Copyright © 2006-" . date("Y") . " W3School.com.cn</p>";
?>
```

如需在一张页面中引用这个页脚文件，请使用 include 语句：
```
<html>
<body>

<h1>欢迎访问我们的首页！</h1>
<p>一段文本。</p>
<p>一段文本。</p>
<?php include 'footer.php';?>

</body>
</html>
```