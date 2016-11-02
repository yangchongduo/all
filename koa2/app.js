const Koa=require('koa');
const app=new Koa();
const Router=require('koa-router');
const convert=require('koa-convert')
const bodyParse=require('koa-bodyparser')()
const home=new Router();
const index=new Router();
// 引文本身是 生成器函数ctx.body 星期五下午  jade 语法练习一下

app.use(convert(bodyParse));

//

app.use(home.routes(),home.allowedMethods())
module.exports=app