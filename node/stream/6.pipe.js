var fs = require('fs');
var rs = fs.createReadStream('./1.txt');
var ws = fs.createWriteStream('./2.txt');
//将可读流导入到可写流中
rs.pipe(ws); //异步方法







