var gulp = require('gulp');
// 也返回个流
var rs = gulp.src(['./1.txt','./2.txt']);
rs.on('data',function(data){
    console.log(data);
    /*for(var attr in data){
        console.log(attr+'='+data[attr]);
    }*/
    console.log(data.cwd);
  console.log(data.base);
    /*   //console.log(data.stat);
    console.log(data._contents);
    console.log('============');*/
});
