var bodyParser = require("body-parser");//对url发送过来的数据进行解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });//接收post发送过来的数据,解析 request 中 body的 urlencoded字符
var data = [{item:"Dog"},{item:"east"},{item:"west"}];

module.exports = function(app) {
	app.get('/todo',(req,res) => {
		res.render('todos',{todos:data});
	});
	app.post('/todo',urlencodedParser,(req,res) => {
		// console.log(req.body);
		data.push(req.body);
		res.json(data);
	});
	app.delete('/todo/:name',(req,res) => {
		// console.log(req.params.name);
		//ES6 = es2015 
		//array 方法:  for...of,filter,map
		//filter:过滤,满足的留下,不满足的干掉
		data = data.filter(function(todo){
			var value = todo.item !== req.params.name;
			return value;
		});
		res.json(data);
	});
}