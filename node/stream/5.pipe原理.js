var fs = require('fs');
var rs = fs.createReadStream('./1.txt',{highWaterMark:4});
var ws = fs.createWriteStream('./2.txt',{highWaterMark:1});
//pipe就是连接我们可读流和可写流的一个管道

pipe(); //rs可读流需要监听两个事件 一个是data 一个end drain
function pipe(){
    rs.on('data', function (data) {
        //先读，读到后要不读到的内容写进去
        var flag = ws.write(data);
        //先撑了一碗，发现还没吃完
        if(!flag)
        rs.pause();
    });
    ws.on('drain', function () {
        //当我们吃完后，再去盛饭
        console.log('干了');
        rs.resume();
    });
    //关闭文件
    rs.on('end', function () {
        //将内存中的内容全部写入到文件中 关闭文件
        ws.end();
    })
}

