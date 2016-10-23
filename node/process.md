### process

```
process.nextTick(function () {
    console.log('nextTick');
});
```
process.stdin.on('data',function(data){
    console.log(data) //<Buffer e6 9d a8 e5 86 b2 e5 a4 9a 0a>
});
需要转成字符串才是我们认识的
process.stdin.on('data',function(data){
    console.log(data.toString())
});
//向控制台内输出 console.log调用的就是这个方法
process.stdout.write('hello')
### 子进程 spawn 下面的代码有误 是无法运行的不知道
##### 一般就是监听data事件 控制台输入的事件   
```
var cp = require('child_process');
var cat = cp.spawn('cat');
cat.stdin.on('data', function(d) {
    console.log(d.toString());
});
cat.on('exit', function() {
    console.log('kthxbai');
});
cat.stdout.write('meow');
cat.stdin.end();

```