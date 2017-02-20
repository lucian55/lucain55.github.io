# nodejs之process模块 #
>process可以用于node和系统中已经存在的进程进行交互，创建工作子进程等。process模块是一个全局对象，允许你获得或者修改当前node进程的设置。

## 1.process的引入 ##
process模块用来与当前进程互动，可以通过全局变量process访问，不必使用require命令加载。它是一个EventEmitter对象的实例。
## 2.process事件 ##
### 1）exit事件 ###
当前进程退出时（即按"ctre+c"时）会触发exit事件，可以对该事件指定回调函数。这是一个用来定时检测模块状态的钩子。当主事件循环在执行完exit的回调函数后将不再执行，所以在exit事件中定义的定时器不会被加入到事件列表

    process.on('exit', function() {
      // 设置一个延迟执行
      setTimeout(function() {
    console.log('主事件循环已停止，所以不会执行');
      }, 0);
      console.log('退出前执行');
    });
###2）uncaughtException事件###
这是process的异常事件，uncaughtException译为：未捕获的异常，可以利用这个函数来捕获整个进程运行时的异常，这里可以理解为“使本node.js进程中断的异常”

    process.on('uncaughtException', function (err) {
    　　console.log('Caught exception: ' + err);
    });
    nonexistentFunc();
    console.log('This will not run.');
说明：以上的例子注册了uncaughtException事件来捕获系统异常，执行到nonexistentFunc()时，因为改函数没有定义所以会抛出异常。因为javascript是解释性语言，nonexistentFunc()方法上面的语句不会被影响到，他下面的语句不会执行。所以他执行的结果如下：

    Caught exception: ReferenceError: nonexistentFunc is not defined
    This will still run.
## 2.process属性 ##
- process.pid：当前进程的进程号。
- process.version：Node的版本，比如v0.10.18。
- process.platform：当前系统平台，比如Linux。
- process.title：默认值为“node”，可以自定义该值。
- process.argv：当前进程的命令行参数数组。
- process.env：指向当前shell的环境变量。
- process.execPath：运行当前进程的可执行文件的绝对路径。
- process.stdout：指向标准输出。
- process.stdin：指向标准输入。
- process.stderr：指向标准错误。

以下是主要属性的介绍：

### 1）stdout ###
process.stdout用来控制标准输出，也就是在命令行窗口向用户显示内容。它的write方法等同于console.log。

    process.stdout.write('description:');

### 2）argv###
process.argv返回命令行脚本的各个参数组成的数组。数组第一项是node，第二项是.js文件的名称，接下来依次是命令行传入的参数
建立iweb.js
    
    console.log(process.argv);

在命令行输入：

	node iweb.js 3000 2000

结果如下：

    [ 'C:\\Program Files\\nodejs\\node.exe','D:\\portal\\iuap_portal_fe\\node_modules\\iweb\\bin\\iweb.js','3000','2000' ]

## 3.process方法 ##
- process.abort()：退出node并创建一个核心文件
- process.exit()：退出当前进程。
- process.cwd()：返回运行当前脚本的工作目录的路径。
- process.chdir()：改变工作目录。
- process.nextTick()：将一个回调函数放在下次事件循环的顶部。
- process.kill()：向进程发送一个信号
- process.memoryUsage()：返回内存使用情况单位是bytes。
- process.uptime()：返回 Node 程序已运行的秒数。
- process.hrtime()：

以下是部分方法的介绍：

### 1）process.chdir() ###
改变进程的当前进程的工作目录，若操作失败则抛出异常。

    console.log('当前目录：' + process.cwd());
	try {
	  process.chdir('/tmp');
	  console.log('新目录：' + process.cwd());
	}
	catch (err) {
	  console.log('chdir: ' + err);
	}

### 2）process.nextTick(callback) ###
在事件循环的下一次循环中调用 callback 回调函数。

	console.log('开始');
	process.nextTick(function() {
	  console.log('nextTick 回调');
	});
	console.log('已设定');
结果如下：
	
	 输出:
	 开始
	 已设定
	 nextTick 回调

### 3）process.kill(pid, [signal]) ###

向进程发送一个信号。 pid 是进程的 id 而 signal 则是描述信号的字符串名称。信号的名称都形似 'SIGINT' 或者 'SIGUSR1'。如果没有指定参数则会默认发送 'SIGTERM' 信号 。

	process.kill(process.pid, 'SIGHUP'); 


