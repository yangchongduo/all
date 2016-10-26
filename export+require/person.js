function Person(name,age){
    this.name = name
    this.age = age;
}
Person.prototype.home = [1,2,3];
Person.prototype.aa =100;
Person.prototype.smlie=()=>{
    console.log('smlie')
}
//我们要导出一个模块让别人使用
//exports导出模块
//{person :Person}
// 就是不能 exports 原因是无法改变
//exports.person = Person;
module.exports = Person;
//exports = Person
