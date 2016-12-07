var fs = require('fs');
//创建可写流
var ws = fs.createWriteStream('./2.txt',{highWaterMark:13});
//path文件的路径
//options:
// encoding:'utf8'默认编码，默认将buffer类型转换成utf8格式
// highWaterMark: 默认是16384个字节 = 16k;
// flags:'w'打开文件要做什么

//可写流的方法 如http里的res就是一个可写流，可读流
var flag = ws.write(new Buffer('杨崇多'), function () {
    console.log('写入');
}); //write方法中只能放字符串或者buffer
//ws.end('2');//关闭文件，并且一口气的把内存中的内容写入到文件内，把end中的内容也写入到文件内
//ws.write('3');//文件已经关闭不能再写入
console.log(flag);//返回值为true的时候表示缓存区域还没有满
