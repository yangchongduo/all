var express = require('express');
var app = express();
app.get('/',function(){

});
//如果是正常的请求，不会走到错误处理中间件里去的
app.use(function(err,res,res,next){
    console.log(err);
});
app.listen(9090);