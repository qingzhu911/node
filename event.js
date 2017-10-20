//请求系统事件:系统给好的,直接写名字就行
var event = require("events");

// element.on("click",function(){
// 	//具体执行的代码
// });


//实例化对象事件:
var myEmitter = new event.EventEmitter();


//注册事件:
myEmitter.on("sbqevent",function(){
	console.log("sbqevent事件被触发")
});

//激活事件:
myEmitter.emit("sbqevent","sbqevent事件被触发");