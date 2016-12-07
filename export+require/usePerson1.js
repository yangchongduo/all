
var person = require('./person.js');
//Person
console.log(person);

/*
//this = {};

//一个js是一个模块
(function (exports,require,module,__dirname,__filename) {
    //模块化 返回对象 暴露接口
    //__dirname __filename 是通过外界传进来的，所以可以在文件中访问
    exports = module.exports = {};
    //exports  = Person;//改变了exports指向但是，module没有变化
    function Person (){}
    //方法1：给exports增加属性会影响到module.exports值
    //方法2：直接改变module.exports
    //exports.person = Person =》
    exports = module.exports = {person:Person};
    //引用地址
    return module.exports;
    //如果导出的是引用数据类型 用module.exports =Function
    //错误方式epxorts = Function
})();

//require/exports/modules.exports
*/



