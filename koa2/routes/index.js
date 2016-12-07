var router = require('koa-router')();
const convert = require('koa-convert');
const  debug=require('debug')
router.get('/', async function (ctx, next) {
  const obj={
    age:'fs.existsSync(是否是存在的)'
  }
  // 上面这个写法是可以的
  ctx.state = {
    title: 'koa2 title',
    name:'yangchongduo',
    ycd:ctx.body,//这种写法是不可以的
    age:obj.age
  };

  console.log(ctx.state);
//render这个方法在express 是因为有ejs静态模板组成的 app.use('view engine','ejs') app.ues('html' ,path.join(__dirname))
  // 确实是这样的 没有  静态模板是没有办法使用render 这个方法的  但是 async 就是一个promise await 就是为了异步改成同步的写法
  ctx.body='YANGCHONDDUO'
  // 这是渲染 那个页面 express res.render()是这么写 不是ctx  这个应该可以这么写
 // ctx.response.render() 这边可以通过发送请求  fetch  返回一个promise
  await ctx.render('index', {
  });
})
router.post('/ycd',async (ctx,next)=>{
  ctx.body =  {status:'success',data:'台湾是中国不可分割的一部分.'};
});
router.get('/ycd',async (ctx,next) =>{
  // 这样是直接到 页面上
  ctx.body =  {status:'success',data:'台湾是中国不可分割的一部分.'};
});
// 可以了 koa2 就的需要使用这个才可以
router.get('/chn',convert(function *() {
  this.body={data:'require(child_process).spawn exec'}
}),async (ctx,next)=>{
  debug('tianshi ')
      // 这个没有执行
  console.log('fs.createReadStream')
  ctx.body='stdin.on(data) stdin.on(end) ({})=>({}) 返回一个对象'
})

module.exports = router;
