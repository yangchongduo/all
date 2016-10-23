var fs = require('fs');
//createReadStream继承了readable接口
//pram1是要读取的文件
//options
//    flags是标识打开文件后要干什么默认为r 读取
//start:3,end:5
var rs = fs.createReadStream('./2.txt',{flags:'r',highWaterMark:1});
//encoding默认为null，读取到的数据为buffer
//当我们监听了data事件后才会,不停的读取数据，默认读取数据的大小是64k
//start,end包前既包后，标识从所以位置start开始读取到end结束（包括end位置）
var result = [];
rs.on('data', function (data) {
    result.push(data); //读取到的内容
});
//监听结束事件
rs.on('end', function () {
    //将小buffer的数组连接成大buffer
    console.log(Buffer.concat(result).toString());
});
//监听错误
rs.on('error', function (err) {
    console.log(err);
})
//当指定编码后，highWaterMark大小要比当前编码的字节数大

//options{ flags:'r',start: end: highWaterMark encoding}
//end on error