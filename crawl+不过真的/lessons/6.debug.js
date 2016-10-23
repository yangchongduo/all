var exec = require('child_process').exec;
var fs = require('fs');
function download(url){
  //得到文件名
  var filename = url.split('/').pop();
    //开始执行子进程 得到子进程对象 -o 指定保存的路径
  var child = exec(`curl ${url} -o ${filename}`,function(err,stdout,stderr){
      console.log(stdout);
      console.log('已经下载完成');
  });
}
download('https://www.baidu.com/img/bd_logo1.png');