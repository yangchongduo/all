var fs = require('fs');
//得到一个可读流
var rs = fs.createReadStream('./1.txt');
//rs.setEncoding('utf8');
rs.on('data',function(data){
    console.log(data);
});
rs.on('end',function(){
    console.log('end');
});//res.end()