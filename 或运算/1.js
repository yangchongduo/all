let flag=false

flag= flag||1==1;
console.log(flag);/// true
var ary=[1,2];

//----------为什么两次的结果不一样-----------
/*const fn=()=>{
    console.log(arguments.length)//5
}*/
function fn() {
    console.log(arguments)
    console.log(arguments.length)
}
fn(...ary);//2