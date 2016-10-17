var  add=()=>()=>{
    console.log('1')
}
var obj={name:add()};
obj.name()
// 也就是说 这种情况下马上会执行