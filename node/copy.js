//同步方法拷贝
var fs = require('fs');
//source原文件的路径
//target目标文件的地址
/*function copy(source,target){
    var data = fs.readFileSync(source,'utf8');
    //写数据把都出来的数据写入
    fs.writeFileSync(target,data);
}*/
//异步的copy方法
function copy(source,target){
    //异步的读取通过回调函数的方式，data读到的数据
    fs.readFile(source, function (err,data) {
        if(!err){
            //如果没有错误，写入到文件中将data数据
            fs.writeFile(target,data, function (err, data) {
            });
        }
    });
}
copy('./hello.png','./b.png');