//请求require ./   后面不需要加.js
var obj = require("./module");//引入的是函数,得用变量接收,得到的是一个对象

console.log(obj);//得到的是一个对象


// console.log(obj.counter(["h","b","c"]));
// console.log(obj.adder(3,5));
// console.log(obj.pi);
