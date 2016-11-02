const Koa = require('koa')
const app = new Koa;
const router = require('koa-router')();
// 在express中router 是一个方法 app.router()
// 这是express的方法；
// 这个是koa2的路由已经改进了去掉之前的
// 第一步要  都是要分开的所以就第一步直接分开
// 在复习一下  这是 require 这是npm包 必须通过 module.exports导出
// 假如是用 export  就需要使用使用 import 这是es的方式
const user=require('./routes/users');
//http://localhost:3000/user/ycd

router.use('/user',user.routes(),user.allowedMethods())
// 这行代码是必须加的 这是告诉app 用的是什么 在router早的版本是
// app.use(router())//  反正已经被替代了 和vue2替代vue1中的dispatch的事件也是一样的  这是路由的嵌套
app.use(router.routes(), router.allowedMethods());

module.exports=app