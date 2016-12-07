var fs = require('fs');
var ws = fs.createWriteStream('./2.txt',{highWaterMark:1});

//drain是抽干的意思 我们读取64k 写入16k 当16k空了后执行drain方法
var i = 0;
function write(){
    var flag = true;
    while(flag&& i<10){
        //写到写的缓存中  写的缓存中写到文件里还需要时间
        //默认的话写一个内存已经占满了，不能再写入了，等内存消耗完，在往内存里写
       flag =  ws.write(''+i++);
    }
}
write();
ws.on('drain', function () {
    //当我们缓存区中完全消耗后
    write();
});