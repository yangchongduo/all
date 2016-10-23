console.log(process.cwd());
//下面还是没有实现 这是进程  还有子进程
process.stdin.on('data',function(data){
console.log(data)
})
//  可以创建一个writeStream  createWriteStream  有个write end 两个方法
//process.stdout.write('hello');
// 下面是子进程
var child_process=require('child_process')
