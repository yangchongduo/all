var router = require('koa-router')();
// 这个express 一个执行还好
// 我也不知道为什么不会再ctx 里面
router.get('/ycd/:id', function (ctx, next) {
  // 谨记：这里是没有this 的 就只有ctx 只能这样

  console.log(ctx.params.id)
  console.log(ctx)
  ctx.body = 'tianshi';
});
//下面的写法不存在  应该可以继续嵌套暂时不试试
/*router.get('/ycd/id', function (ctx, next) {
  // 谨记：这里是没有this 的 就只有ctx 只能这样
console.log(ctx.query)
  ctx.body = '/ycd/id';
});*/


/*
 http://localhost:3000/user/ycd?name=yangchongduo
* */
router.get('/ycd', function (ctx, next) {
 // 谨记：这里是没有this 的 就只有ctx 只能这样

console.log('ctx.url-------->',ctx.url)
  // /user/ycd?name=yangchongduo
  console.log('ctx.search-------->',ctx.search)
  // ?name=yangchongduo
  console.log('ctx.path-------->',ctx.path)
  // /user/ycd
  console.log(ctx.query)
  // { name: 'yangchongduo' }
  console.log('ctx.ip-------->',ctx.ip)
 // console.log('ctx.header-------->',ctx.header)
  // 在原生node中 req.headers这是因为ajax的时候有个heards
  // res.header['set-Cookie']//字段 这样就可以原生设置cookie字段了
  // 在express中 引入了 cookie-parse 这样就全部换成req。cookie
  //res.cookies  这个忘了可以在看一下 koa肯定也有 等会在学
 // console.log('ctx.req------>',ctx.req) 用不到这个
  console.log('ctx.hostname--->',ctx.hostname)
  console.log('host',ctx.host)

  console.log('type',ctx.type)
  console.log('method',ctx.method)//从后台得到的大写的 GET 所以说 需要转换成小写 lowerCase()
  //host localhost:3000
  console.log('ctx.response.header------->',ctx.response);
  console.log('ctx.requset------->',ctx.request);
  console.log('ctx.request.search----->',ctx.request.search)
  //?name=yangchongduo
  console.log('ctx.request.status-->',ctx.response.status)
  // 挺好的 知道了
  /**
   *总结终于明白了 ctx.request.search==ctx.search
   * 重新封装了 一遍 哈哈 明白了
   */
  ctx.body = ctx.status;
 });
module.exports = router;





/* ctx
{
  request: {
    method: "GET",
        url: "/user/ycd",
        header: {
      host: "localhost:3000",
          connection: "keep-alive",
      upgrade-insecure-requests: "1",
      user-agent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2873.0 Safari/537.36",
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*;q=0.8",
      accept-encoding: "gzip, deflate, sdch, br",
      accept-language: "zh-CN,zh;q=0.8",
          cookie: "Webstorm-876bb596=28d2d2bb-4cec-4dc4-9deb-a55ee28657c6; hudson_auto_refresh=false"
    }
  },
  response: {
    status: 200,
        message: "OK",
        header: {
      content-type: "application/json; charset=utf-8"
    }
  },
  app: {
    subdomainOffset: 2,
        proxy: false,
        env: "development"
  },
  originalUrl: "/user/ycd",
      req: "<original node req>",
    res: "<original node res>",
    socket: "<original node socket>"
}*/
