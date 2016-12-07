//引入创建计划任务的模块
var CronJob = require('cron').CronJob;
// 秒 分钟 小时 日期 月份 星期
//* 代表所有可能的值
//var job = new CronJob('1,5,10 * * * * *',function(){ 表示枚举
//var job = new CronJob('30-40 * * * * *',function(){ //表示区间
//var job = new CronJob('*/5 * * * * *',function(){ //表示一个间隔频率
//1 */30 * * * *'
var job = new CronJob('0 */1 * * * *',function(){
    console.log(new Date().toLocaleString());
    console.log('job');
});
job.start();