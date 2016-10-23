var  fs=require('fs');
// 注意的要点 就是 只有两个参数 不用utf8  就是buffer
var name=fs.readFileSync('./1.txt','utf8');
var age =fs.readFileSync('./2.txt');
console.log(name)
console.log(age)//<Buffer 39 30 39 30 39 30>  也就是我们读到的文件是buffer 所以我们要设置成utf8  后面我们可以通过其他的方式改变 decode 就可以了
//下面这个是异步的 需要三个参数
var ycdName=fs.readFile('./1.txt','utf8',function(err,data){
    console.log(data)
})
console.log('ok')
//------------------writeFile&& writeFileSync---------------------
//这是异步的 这样就不会覆盖我们上次写的 注意执行的顺序
fs.writeFile('./3.txt','xiao',{flag:'a'});
fs.writeFileSync('./3.txt','hahah');
fs.appendFileSync('./3.txt','zhu');

//------------------existsSync-------------------------------


//--------------------------stream---------------
//理解这是可读流 之前说过是buffer 我们操作的stream存在的形式是buffer
// 当我们监听到data事件后才会不停改得读取数据 默认是64kb
var rs=fs.createReadStream('./1.txt',{flag:'r',highWaterMark:1});
// 我们设置了这个流的 方式，他就会一直以这种方式存在 下面就不用toString
//rs.setEncoding('utf8');
var result=[];
rs.on('data',function(data){
    result.push(data)
});
rs.on('end',function(){
    //buffer
    console.log(result)
    // 需要转成我们能看懂的
    console.log(Buffer.concat(result).toString())
})
rs.on('error',function(err){
    console.log(err)
})
/**
 *  流的设置 setEncoding('utf8');  或者使用buffer 的toString 这样
 */

//------------writeStream-- 这是同步的 假如可写流没有end这个方法的话会一直处于 可写的状态  pending 所以 一般必须有end 这个事件----------
var ws=fs.createWriteStream('./4.txt',{highWaterMark:13});
var flag=ws.write(new Buffer('杨崇多'),function(){
    console.log('写入了')
})
console.log(flag);

//---------------pipe异步的方法  就是可
