### 需要创建一个koa2的项目

    1.npm install -g koa-generator
    koa2  koa2-test 
    就可以形成一个koa2的项目
    就入安装就可以了
    

    
####中间件的原理
    每收到一个http请求，koa就会调用通过app.use()注册
    的async函数，并传入ctx和next参数。
    
    我们可以对ctx操作，并设置返回内、
    容。但是为什么要调用await 
    next()？
    原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。
    

    generatore 要被淘汰所有使用  convert 这个方法就可以使用了
>
