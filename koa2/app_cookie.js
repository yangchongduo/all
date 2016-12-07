const Koa=require('koa')
const app=new Koa();
// new 的时候不准执行的 koa-bodyparse是需要执行的
const Router=require('koa-router');
const home=new Router();
// cookie 这个想放弃吧
home.get('/home',async (ctx,next)=>{
    ctx.body='koa-router new的时候不需要执行 也就他是一个类';
    //ctx.cookies.get(name, [options]) 获取
    ctx.cookies.set('name','ycd',{expires:new Date(Date.now()+10*1000)});//ok 周期设置成功
    //this.cookies.set('name', 'tobi', { signed: true });
   // ctx.cookies.set(name, value, [options])
})
app.use(home.routes(),home.allowedMethods());


module.exports=app






/*
* ctx.cookies.get(name, [options]) 对于给定的 name ，返回响应的 cookie
 options
 signed [boolean]
 ctx.cookies.set(name, value, [options]) 对于给定的参数，设置一个新 cookie
 options
 signed [boolean]
 expires [date]
 path [string] 默认为 '/'
 domain [string]
 secure [boolean]
 httpOnly [boolean] 默认为 true
*
* */
/*
*  // domain指明了此cookie属于哪个域名
 //res.cookie('name','ycd',{domain:'.ycd.cn'});
 //指定此cookie属于哪个路径
 //res.cookie('name','ycd',{path:'/read2'});
 //指定绝对过期时间
 //res.cookie('name','ycd',{expires:new Date(Date.now()+10*1000)});
 //指定相对失效时间
 //res.cookie('name','ycd',{maxAge:10*1000});
 //写入cookie
 res.cookie('name','ycd',{httpOnly:true});
*
* */