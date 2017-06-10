var a = 1 ;
var b = "World";
var c = function(x){
	console.log('Hello'+x+a);
};

c(b);


//在命令行中可以使用 node debug debug.js 命令对 debug.js 文件进行调试
/**
	node.js 的调试功能是有 V8 提供的，保持了一贯的高效和方便的特性
有以下命令：

	run					执行脚本，在第一行暂停
	restart				重新执行脚本
	cont c				继续执行，直到遇到下一个断点
	next n				单步执行
	step s				单步执行并进入函数
	out  o				从函数中步出
	setBreakpoint() sb()从当前行设置断点
	clearBreakpoint() cs()	清除所有的断点
	backtrace bt		显示当前的调用栈
	list(5)				显示当前执行到前后5行代码
	watch(expr)			把表达式 expr 加入到监视列表
	unwatch(expr)		把表达式 expr 从监视列表中移除
	watchers			显示监视列表中所有表达式和值
	repl				在当前上下文打开即时求值环境
	kill				终止当前执行的脚本
	scripts				显示当前已加载的所有脚本
	version				显示 V8 的版本

远程调试
	V8 提供的调试功能是基于 TCP 协议 的，因此 Node.js 可以轻松的实现远程调试，在命令行下使用以下语句打开调试器服务
		node --debug[=port] script.js
		node --debug-brk[=port] script.js

	node --debug 命令选项可以启动调试服务器，默认情况下是用的调试端口是 5858，也可以使用 --debug=1234 指定调试端口为1234
	使用 --debug 选项运行脚本时，脚本会正常执行，但不会暂停，在执行过程中调试客户端可以链接到服务器，，如果脚本

*/