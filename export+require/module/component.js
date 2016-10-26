export default  name = 'ycd';
var age = 8;
//---------------函数的写法1-----------------
export function fn() {
    console.log('ok')
}
//------函数写法2----------
export  const smile=(obj)=>{
    console.log('obj',obj)
};
//-----------函数写法3------

const fetch=()=>{
    console.log('fetch')
}
export {fetch,age}
var fs='fs.createReadStream';
var process='require(child_process).spawn'
var obj={
    fs,
    process
}
export {obj}


