var fs = require('fs');
var async = require('async');
var files = ['1.txt','2.txt','3.txt'];
//同异步的方式读取三个文件的内容
//当全部读取完成之后把它们的结果组装起来打印
/*var results = [];
files.forEach(function(file){
    fs.readFile(file,'utf8',function(err,data){
        results.push(data);
        if(results.length==3){
           console.log(results);
        }
    })
})*/
// readFile这是异步的流程
var results = [];
async.forEach(files,function(file,next){
    fs.readFile(file,'utf8',function(err,data){
        results.push(data);
        next();
    })
},function(err,result){
    console.log(results);
});

