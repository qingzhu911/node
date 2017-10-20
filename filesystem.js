//请求
var fs = require("fs");

//读取文件(同步读取和写入)
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);

//写入文件(会先清掉以前的)
// fs.writeFileSync("writeMe.txt","Hellow");


//异步读取和写入
// fs.readFile("readMe.txt","utf8",function(err,data){
// 	//如果没有错误(error),就会把data传过来
// 	//判断
// 	if(err) {
// 		throw err;
// 	}else {
// 		console.log(data);
// 	}
// });

//异步写入
// fs.writeFile("writeMe.txt","我是写入文件",function(err) {
// 	if(err) {
// 		throw err;
// 	}
// });

//练习:异步读取文件,并将读取的文件内容写入到writeMe.txt中

// fs.readFile("readMe.txt","utf8",function(err,data){
// 	if(err){
// 		throw err;
// 	}else {
// 		fs.writeFile("writeMe.txt",data,function(err){
// 			if(err) {
// 				throw err;
// 			}else {
// 				console.log("操作成功");
// 			}
// 		});
// 	}
// });


//删除一个文件
// fs.unlink("readMe.txt",function(err){
// 	if(err) {
// 		throw err;
// 	}
// });



//创建文件夹
// fs.mkdir("stuff",function(){

// });


//删除文件夹
// fs.rmdir("stuff",function() {
	
// });



















