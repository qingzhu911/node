// express 框架

var express = require("express");//express是express.js文件,省略了.js
var app = express();//app变成了对象
//路由
app.get('/',(req,res) => {
	// console.log(req.url);
	// console.log(req);
	res.send("This is Home Page!");//send和end相同会显示到html中

});

//有几个页面就要写几个app.get
app.get('/contact',(req,res) => {
	res.send("This is Contact Page!");
});


//路由参数/:sbqid
app.get('/blogs/:sbqid',(req,res) => {
	console.log(req);
	res.send("具体的路由参数为: " + req.params.sbqid);//params为固定的
});




app.listen(3000);//第二个参宿不写默认是主机地址,公司中写入外网地址
