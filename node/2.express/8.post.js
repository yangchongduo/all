var express = require('express');
var app = express();
var fs=require('fs');
//之前都是通过 http.crateServer来进行操作 创建一个服务 现在不是了
var http=require('http');
var url=require('url');
// 以下是通过http 启动的服务 但是通过express 就可以不用了
const  appHttp=http.createServer(function (req, res) {
    //启动服务之后就可以 localhost:// 8080 /？name=ycd query 就可以看出来了
       var objUrl=url.parse(req.url,true);
    // 这边夹true 就是为了能够使query是对个对象
    var pathName=objUrl.pathname;
    console.log(objUrl)
    console.log(pathName);
});
appHttp.listen(8080,function () {
    console.log('server has created')
})

// app.listen(9090);