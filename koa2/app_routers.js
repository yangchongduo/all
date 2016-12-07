const Koa=require('koa');
const app=new Koa()
const Router=require('koa-router');
const convert=require('koa-convert');
const index=new Router();
const home=new Router();
index.get('/index',async (ctx,next)=>{
    ctx.body='persets plugins'
});
home.get('/home',convert(function *() {
    console.log('fs.readFile')
    this.body='fs.readFile'
}))
// 必须下 这就是路由的嵌套
home.use(index.routes(),index.allowedMethods());
app.use(home.routes(),home.allowedMethods())
module.exports=app
/*
*
* app_routers
* */