//引入创建计划任务的模块
var CronJob = require('cron').CronJob;
// 秒 分钟 小时 日期 月份 星期
//* 代表所有可能的值
//var job = new CronJob('1,5,10 * * * * *',function(){ 表示枚举
//var job = new CronJob('30-40 * * * * *',function(){ //表示区间
//var job = new CronJob('*/5 * * * * *',function(){ //表示一个间隔频率 没5秒执行一次
//1 */30 * * * *' //没三十分钟的第一秒去执行
var job = new CronJob('10 */1 * * * *',function(){
    console.log(new Date().toLocaleString());
    console.log('job');
});
job.start();
/*
*
 每隔5秒执行一次：5 * * * * ?

    每隔1分钟执行一次：0 *!/1 * * * ?

    每天23点执行一次：0 0 23 * * ?

    每天凌晨1点执行一次：0 0 1 * * ?

    每月1号凌晨1点执行一次：0 0 1 1 * ?

    每月最后一天23点执行一次：0 0 23 L * ?

    每周星期天凌晨1点实行一次：0 0 1 ? * L

在26分、29分、33分执行一次：0 26,29,33 * * * ?

    每天的0点、13点、18点、21点都执行一次：0 0 0,13,18,21 * * ?/*/
