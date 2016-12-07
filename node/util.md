### util
```
util.inherits 继承 通过create 只能继承共有的
console.log(util.inspect(obj)); 详细解析一个对象

//判断类型
console.log(util.isArray([]));
console.log(util.isError(new Error()));
console.log(util.isRegExp(/^$/));
console.log(util.isDate(new Date()));
```