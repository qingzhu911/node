//1.引进系统http
var http = require("http");
//2.返回是个对象,后面必须有监听
var server = http.createServer(function(request,response){
	//在浏览器输入http://127.0.0.1:3000才会触发回调函数
	console.log("客户端和服务器已经建立通信"+ request.url);
	//相应头后才能返回html内容
	response.writeHead(200,{"Content-type":"text/plain"});//200是必须的
	//给客户端返回内容(只要在sublime中写入了内容,终端必须重启,Ctrl+c 按两次)
	response.end("Hey Node.js");
});

//第一个参数:端口号第二个参数:本机地址
server.listen("3000","127.0.0.1");
console.log("server is running...");