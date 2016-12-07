var express=require('express');
var fs=require('fs')
// req的主体就会放在req.body上面
var bodyParse=require('body-parser')
const app=express();
// 这个中间件的作用和 react的中间件的作用是一样的
app.use(function (req, res,next) {
    console.log('ok');
    next()
});
// http://localhost:9090/home/1?name=ycd 就可以看出 { id: '1' }
// 理解:当我们的路由从上到下执行的时候，我们可以看到然后看着 这个可是 最后放在 req.params
// 假如要是有？呢 放在req.query中 不需要使用 url.parse('url',true)
app.use('/home/:id',function (req, res) {

    console.log(res)
  /*  console.log(req.params)
    console.log(req.query)
///req, res 两个都是流 存在的形式是buffer
    // 假如我们现在有 req.body 尽管我们引入了body-parser  但是req还是需要监听两个事件
    var str=''
    req.on('data',function (data) {
        str+=data
    })
    req.on('end',function (data) {
        console.log('接受完成')
    })
    //-----------上面是接受的 可读流---------
        fs.createReadStream('./1.txt').pipe(res)//这样会自动返回到页面 res是可写流 gulp的模式操作也是流 监听两个上面的两个事件
    //----------------------------------------*/
  // 这个写写法是写入了流了 但是我们这个可写流不知道写到何处出了 肯定可以用
    // 现在非常好 执行记得吗？ 之前都是使用的 write end 当时的时候我们直接使用 end end只能是字符串和 buffer 可以send 这个方法 send方式 引入express 之后才有的不是res自己有的记住这点
    // hellonode 看见了吗 这就是输出的结果 会自动反馈给浏览器
    //res 这个流是我们不需要创建的 因为这个流已经穿件好了
  /*  res.write('hello',function () {
        console.log('hahahha')
    })*/
  //下面这两个是一伙的 send 好像是可以不用试用setHeader('Content-type','application/json;charset=utf-8');
/*  res.setHeader('Content-Type','application/json;charset=utf-8');
   res.end('node')// 只能是字符串和buffer*/
//  可以使用send 这个方法  可以发动对象
    const  obj={name:'ycd',age:99};
    res.send(obj);
});
//----------------开始使用静态模板------------------------------
/*http://localhost:9090/template
 *
 * */
// 这个不好，原因我们使用ejs 和jade都不好 我们可以使用html 就行替换 就需要换了
app.set('view engine','ejs');//设置模板引擎
app.set('views',__dirname);//模板存放目录e
var json={id:1,name:'ycd',age:9090}
app.use('/template',function (req,res,next) {
    // user 是哪个静态模板 json是数据 使用静态模板有这个 就会有render 这个方法吗 不知道忘了
res.render('user',json)
});
app.set('view engine','html');


app.use(function(req,res, next){
    res.end('404');
});
app.use(function(err,req,res,next){
    console.log(err);
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end(err);
});
app.listen(9090,function () {
    console.log('server has created')
})