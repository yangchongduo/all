var async = require('async');
// 会自动判断先加载哪个
//参数1:一个对象，两个函数 和mix和steam两个 数组
async.auto({
  water(callback){
      callback(null,'水');
  },
  flour(callback){
      callback(null,'面粉');
  },
  mix:['water','flour',function(result,callback){
      callback(null,result['water']+'+'+result['flour']+'+和面');
  }],
  steam:['mix',function(result,callback){
      callback(null,result['mix']+'+蒸');
  }]
},function(err,result){
    console.log(result);//3
});