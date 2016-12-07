var a  = require('./a.js');
console.log(a)
/*delete require.cache[require.resolve('./a.js')];*/
var b  = require('./a.js');
//多次加载同一个模块，第一次会将其缓存下来，第二次加载走缓存，发现缓存过了，就不再继续加载了
//console.log(require);
//我们想将缓存删除掉
//1.我们要通过绝对路径找到对应的属性，进行删除
//解析出一个绝对路径，根据文件名
/*require.resolve('./a.js');
console.log(require.resolve('./a.js'));*/
//2.去缓存内找到对应的缓存模块require.cache
//3.找到对应的模块require.cache[require.resolve('./a.js')]
//4.delete

//require方法是同步的还是异步的
//异步的方法是不能通过返回值接受的
//require是同步方法
