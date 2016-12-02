const obj={name:'ycd',age:'44'};
const ary= Object.keys(obj);
///const aryobj=Object.keys(obj[key])
//console.log(aryobj)
console.log(ary)
console.log(Object.prototype.toString.call(ary));
//果真是数组  不过只是把属性名