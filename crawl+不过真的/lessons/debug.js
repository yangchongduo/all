module.exports = function(name){//logger:school
    return function(msg){
        var start = Date.now();
        //process.env代表环境变量对象 path=>
        var DEBUG = process.env.DEBUG;
        // DEBUG=logger:* => /^logger:.*$/
        // 因为*是一个量词修饰符，用来修饰前面的单词
        // 所以要进行转换，转成.*才能在正则中使用
        DEBUG = DEBUG.replace('*','.*');
        //把DEBUG转成正则表达式
        var regex = new RegExp('^'+DEBUG+'$');
        //如果DEBUG正则匹配name
        if(regex.test(name))
            console.log(`${name} ${msg} +${Date.now()-start}ms`);
    }
}