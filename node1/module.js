//模块

var counter = function(arr) {
	return `数组中拥有${arr.length}个元素`;
}
// console.log(counter(["h","b","c"]));

var adder = function(a,b) {
	return `两个数的和为${a+b}`;
}

var pi = 3.142;

//只有使用module.exports其他文件才可以引用,
// module.exports.counter = counter;//对外公开的是一个对象(module.exports)
// module.exports.adder = adder;
// module.exports.pi = pi;

// 优化(模块模式)
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}