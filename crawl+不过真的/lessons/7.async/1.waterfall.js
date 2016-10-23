var async = require('async');
// ./ 是自己写的模块
//waterfall 第一个函数的返回值会成为下一个函数的参数
// 第一个参数是数组 应该也对象，但是需要名字，用es6的写法下 waterfall 是瀑布的意思
async.waterfall([
    function(next){
        setTimeout(function(){
            next(null,'水');// 一个是错误对象 一个是传给下一个函数的参数
        },1000);
    },
    function(data,next){
        setTimeout(next,1000,null,data+'+咖啡')
    },
    function(data,next){
        setTimeout(next,1000,null,data+'+糖')
    }
],function(err,result){
   console.log(result);
})

