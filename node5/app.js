var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){
	//解决fave.icom
	if(request.url !== "/favicon.icon") {
		// console.log(response.url);

		//在浏览器后面写上url后面的东西
		if(request.url == "/" || request.url == "/home") {	
			response.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname + "/home.html","utf8");
			// response.end("这事主页");
			myReadStream.pipe(response);

		}else if(request.url == "/about") {
			response.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname + "/about.html","utf8");
			// response.end("这是about页面");
			myReadStream.pipe(response);

		}else if(request.url == "/contact") {
			response.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname + "/contact.html","utf8");
			// response.end("这是联系我们页面");
			myReadStream.pipe(response);

		}else {
			response.writeHead(200,{"Content-type":"text/html"});
			var myReadStream = fs.createReadStream(__dirname + "/404.html","utf8");
			// response.end("404:找不到您要的页面");
			myReadStream.pipe(response);

		}
	}
	// response.writeHead(200,{"Content-type":"application/json"});//json特有格式
	// var myReadStream = fs.createReadStream(__dirname + "/users.json","utf8");
	// response.end(JSON.stringify(users));

	// response.end(JSON.stringify(users));
});
server.listen(3000,"127.0.0.1");
console.log("server is running...");

//路由:
