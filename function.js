// 在node.js中经常使用函数表达式



//函数定义
var sayH2 = function() {
	console.log("我是函数表达式");
}


//函数表达式要比正常函数执行快(右左法则)
function sayH1() {
	console.log("hello");
}
// sayH();//只执行函数表达式,函数赋值给变量


function callFunction (foo) {
	foo();
}
callFunction(sayH2);
