//读取文件流
var fs = require("fs");
//创建读取文件流对象
var myReadStream = fs.createReadStream(__dirname + "/readMe.txt","utf8");//参数1:文件名路径,参数2:编码格式
// console.log(myReadStream);

myReadStream.on("data",function(chunk){
	console.log("=============================================================================");
	console.log(chunk);
});//data这个方法名是固定的