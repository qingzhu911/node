
var express = require("express");
var app = express();

//告诉浏览器使用的ejs
app.set("view engine","ejs");//字符串固定的
app.use("/assets",express.static(__dirname + '/assets'));//固定方法,拿到css
//路由
app.get("/",(req,res) => {
	// res.sendFile(__dirname+"/index.html");
	res.render("index");//识别ejs文件
});
app.get("/contact",(req,res) => {
	// res.sendFile(__dirname+"/contact.html");
	res.render("contact");//识别ejs文件
});
//路由参数
app.get("/blogs/:sbqid",(req,res) => {
	//最上面设置
	var sbqdata = [
		{title:"博客1",author:"Henry",body:"this is first blog"},
		{title:"博客2",author:"Bucky",body:"this is second blog"},
		{title:"博客3",author:"Emery",body:"this is third blog"}
	]
	res.render("blog",{id:req.params.sbqid,data:sbqdata});
});
app.listen(3000);
