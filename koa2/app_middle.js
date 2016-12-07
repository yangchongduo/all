const Koa = require('koa');
const app = new Koa();
const debug=require('debug')('x')
const conver = require('koa-convert');// 这个主要是为了能支持generator的写法 因为以后要移除 generator的写法(中间件写法)
// 个人还是比较倾向于 es7中的 async 和await
app.use(async (ctx, next)=> {
    const start = new Date();
    await next();// 遇见这个这个中间件就暂时不会执行了 会走下个中间件  一直遇到没有遇见 没有的中间件 next的中间件
    // 然后再反向执行 所有的中间件 和 react的中间件有点一样，也是需要  next()
    console.log('这是返回的中间')
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 这个的写法会保留 不过是因为convert 这个原因不过 个人不建议 没意思
app.use(convert(function *(next) {
    const start = new Date();
    yield next;
    const ms = new Date() - start;
    console.log(`${this.method} ${this.url} - ${ms}ms`);
}));
// response ok
//这是generator的方法
/*app.use(function *(){
 this.body = 'Hello World';
 });*/
// 这个是koa2的
app.use(ctx=> {
    ctx.body = 'hello world'
})
/*
 app.listen(3000,function (data) {
 console.log('server has created','backgroud:red;color:#fff');
 });*/
module.exports = app