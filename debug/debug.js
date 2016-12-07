var colors = require('colors');
colors.setTheme({
    name: 'cyan',
    cost: 'green'
});
module.exports = function(name){
   return function(msg){
     var start = Date.now();
     //判断环境变量中的DEUBG的值是是否匹配当前日志记录器的名称
     var env = process.env.DEBUG;
     env = env.replace('*','.*')
     if(new RegExp(env).test(name)){
         console.log(name.name,msg,('+'+(Date.now()-start)+'ms').cost);
     }
   }
}