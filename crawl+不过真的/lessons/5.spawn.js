var spawn = require('child_process').spawn;
var fs = require('fs');
//process  是进程， child_process是子进程也是进程
function download(url){
  //得到文件名
  var filename = url.split('/').pop();
    //创建保存的文件写入流
  var fileStream = fs.createWriteStream(filename);
    //开始执行子进程 得到子进程对象
  var child = spawn('curl',[url]);
    //监听子进程的标准输出，把标准输出得到的内容写到文件流中
  child.stdout.on('data',function(data){
      fileStream.write(data);
  });
    //监听子进程的标准输出的结束事件，关掉可写流
  child.stdout.on('end',function(){
        fileStream.end();
  });
  //监听退出事件
  child.on('exit',function(){
        console.log('子进程已经退出');
  });
}
download('https://www.baidu.com/img/bd_logo1.png');