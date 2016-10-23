var http = require('http');
http.get("http://baijia.baidu.com/", function(res) {
    // res是一个可写流 我们是 读到的是一个buffer  因为是爬虫所以 gbk 好像号可以通过request这个方法， 需要监听data 是一个流 是一个可写流 url.parse()
    res.setEncoding('utf8')
    res.on('data', function (data) {
        console.log(data);
    })
}).on('error', function(e) {
    console.log("错误：" + e.message);
});