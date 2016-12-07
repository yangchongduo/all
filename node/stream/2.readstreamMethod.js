var fs = require('fs');
var rs = fs.createReadStream('./1.txt');
//设置编码格式
rs.setEncoding('utf8');
//暂停接收ondata事件
rs.pause();
setTimeout(function () {
    //恢复ondata事件
    rs.resume();
},2000);
rs.on('data', function (data) {
    console.log(data);
});
//pause() 暂停 resume() 恢复  setEncoding()设置编码



