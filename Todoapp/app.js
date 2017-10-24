var express = require('express');//拿到的是方法
var app = express();
app.set("view engine","ejs");//字符串固定的
app.use("/assets",express.static(__dirname + "/assets"));//固定方法,拿到css	
//请求自定义文件
var todoController = require("./controller/todoController");

todoController(app);

app.listen(3000);