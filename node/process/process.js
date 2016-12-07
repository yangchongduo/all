console.log(process.cwd());
//下面还是没有实现 这是进程  还有子进程 的data 事件不是req 可读流的data事件和end事件
//res是可写流，有两个方法 分别是write 和end end必须有这是写给浏览器的 同时可以send 这个方法不过是因为express 这个方法才有的 还有很多必须 body-parse cookie-parse 再次说明我们操作的流，但是流存在的形式是buffer
//我们 假如使用静态模板的话，就得需要使用 render这个方法
/**
 * 练习写一下
 * app.set('view engine','html');
 * app.set('views',path.join(__dirname,));
 * app.engine('html',require('ejs').__express)
 * res.render('文件的名字'，jsonData)
 */
/**
 *
 */
process.stdin.on('data',function(data){
console.log(data)
})
//  可以创建一个writeStream  createWriteStream  有个write end 两个方法
//process.stdout.write('hello');
// 下面是子进程
var child_process=require('child_process');
