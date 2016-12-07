#### fs
fs.readFileSync('./age.txt','utf8');
fs.readFile('./age.txt', 'utf8', function (err, data) {});
fs.writeFileSync('./hello.txt',"xiaohong",{flag:'a'})
## 返回一个数组的形式，只读子级的目录
fs.readFile()
fs.readdirSync()
```
var fs = require('fs');
var per = {};
//处理异步的方法有两种 ：index 和 keys promise
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    out()
});
fs.readFile('./name.txt', 'utf8', function (err, data) {
    per.age = data
    out()
});
function out() {
    if (Object.keys(per).length == 2) {
        console.log(per)
    }
}
var index = 0;
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.age = data
    index++
    out()
})
fs.readFile('./age.txt', 'utf8', function (err, data) {
    per.name = data
    index++
    out()
});
function out() {
    if (index == 2) {
        console.log(per)
    }
}
```
## 写文件内容
 fs.writeFileSync()
 fs.appendFileSync()
```
//即使相同也会写入但是再次执行还是一样的
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
fs.writeFileSync('./hello.txt',"ycd",{flag:'a'});
//{flag:'a'}等同于appendFile
fs.appendFileSync('./hello.txt',"珠峰");//可以重复调用的方法
//return O_TRUNC 截断 | O_CREAT 创建 | O_WRONLY 只写
```
##
 fs.exists 文件是否存在()bollean
 fs.existsSync 文件是否存在
 fs.mkdirSync  创建文件同步
  fs.mkdir 创建文件异步的
```
makeP('a/b/c/d');
function makeP(path){
    //将path以/的方式分割开
    var arr = path.split('/');
    //在原数组里，不停的取相对应的目录，加入/
    for(var i = 1; i<=arr.length;i++){
       var curDir =  arr.slice(0,i).join('/');
        //我们在创建目录之前，要先查看curDir是否存在
       var flag = fs.existsSync(curDir);
        //flag表示当前是否存在
        if(!flag)
        fs.mkdirSync(curDir);//创建目录
    }
}
```
##  删除文件 unlinkSync rmdirSync
fs.statSync()//判断目录的状态要用全目录
stat.isDirectory() 是否是文件夹呢
stat.isFile() 是否是文件
fs.rmdirSync() 删除文件夹
fs.unlinkSync() 删除文件
```
curArr.forEach(function (item) {

    var stat = fs.statSync('./dir/' + item);
    if (stat.isDirectory()) {
        console.log('./dir/' + item + "是文件夹");
        fs.rmdirSync('./dir/' + item);
    }
    if (stat.isFile()) {
        console.log('./dir/' + item + "是文件");
        fs.unlinkSync('./dir/' + item);
    }
});

```
## path
```
path.join('a','b','..')会把两个路径拼接起来，以自己系统的分隔符
path.normalize('a////c////d///..//e/')将不合法的路径转换成标准路径
path.resolve解析路径path.resolve('..','a.js/')
path.basename获得文件的基本名字
path.extname('b.png')
console.log(path.sep);获得目录分割符
console.log(path.delimiter); //可以区分是mac还是windows获取环境变量分隔符 mac是冒号，
```