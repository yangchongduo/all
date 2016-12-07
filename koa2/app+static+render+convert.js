const  Koa=require('koa');
const  app=new Koa();
const router=require('koa-router')();
const index=require('./routes/index');


//------- 和express 比较一下------------
const views=require('koa-views');
// 这个是执行静态资源文件
//express app.static() 可以在看一下
// 中间件
app.use(require('koa-static')(__dirname+'/public'))
// 然后就要指定 在那里渲染
app.use(views(__dirname+'/views',{
    extension:'jade'
}))
//这个位置可以是  use 这是嵌套的可以
router.use('/index',index.routes(),index.allowedMethods())
app.use(router.routes(),router.allowedMethods())
app.on('err',(err,ctx)=>{
    console.log(err)
})
module.exports=app