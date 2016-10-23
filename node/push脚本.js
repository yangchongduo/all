// git add -A
// git commit -m"dd"
// git push origin master
var exec = require('child_process').exec;
var async = require('async');
var CronJob = require('cron').CronJob;
var job = new CronJob("1 * * * * *",function(){
    //可以在控制台监听用户的输入，输入内容之后会触发此事件
    //process.stdin.on('data',function(data){
    exec('git status',function(err,stdout,stderr){
        if(stdout.indexOf('nothing to commit, working directory clean')!=-1){
            var data = new Date().toLocaleString();
            console.log(stdout);
            async.series([
                function (cb) {
                    exec('git add -A', cb);
                },
                function (cb) {
                    exec('git commit -m"'+data+'"', cb);
                }, function (cb) {
                    exec('git push origin master',function(){
                        console.log('提交成功');
                    });
                }
            ], function (err, result) {
                //console.log('result',result);
            })
        }
    })

    //});
});

job.start();

