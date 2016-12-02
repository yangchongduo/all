var obj={meta:'meta',payload:'payload'};
// 哈哈  原来这行的代码 就是为了 定义数据类型
const {meta={},payload}=obj;
console.log(meta,payload);
console.log(typeof payload);
console.log(Object.prototype.toString.call(meta))
