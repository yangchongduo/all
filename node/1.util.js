//util是核心包，内置的
var util = require('util');
function Parent(name,age){
    this.name = name;
    this.age = age;
    this.aa = '123'
}
Parent.prototype.smile="笑";
function Child(){
    this.eat = '吃'
}
Parent.prototype.play="玩";
//只继承共有方法
//Child.prototype = new Parent();
//Child.prototype.__proto__ = Parent.prototype;
/*Child.prototype = Object.create(Parent.prototype);
var child = new Child();
console.log(child.smile);*/
//继承 param1是子构造函数 param2是父类 只能继承共有的方法
util.inherits(Child,Parent);
var child = new Child();
console.log(child.aa);


//console.dir();//util.inspect()默认调用这个方法
var obj = {
    name:'xiaohong'
};
//定义属性
Object.defineProperty(obj,'age',{
    value:100, //当前设置的值
    enumerable:true, //设置可枚举
    writable:false,//是否可被重写
    configurable:false//是否可配置
});
// 删除某个对象的属性
delete obj.age
console.log(obj.age);
//inspect可以解析
//showHidden, depth, colors
console.log(util.inspect(obj));

//判断类型
console.log(util.isArray([]));
console.log(util.isError(new Error()));
console.log(util.isRegExp(/^$/));
console.log(util.isDate(new Date()));
