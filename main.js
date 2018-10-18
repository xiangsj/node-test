//非异步
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束!");

//下面是回调，可以异步执行
// var fs = require("fs");
// fs.readFile('test_fs.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("程序执行结束!");

// 异步回调
// function aa(func) {
//     setTimeout(() => {
//         func('msg');
//     }, 2000);
// }

// aa((msg) => {
//     console.log('func01-' + msg)
// });

// console.log('func00')

// 自定义模块
var module_test = require('./module_test')
// console.log(module_test)
module_test('james')