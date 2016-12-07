/*引入的部分  两种方式*/
import fn from './'
const  fn=require('./');
//重点：必须要default 才可以
//第一种
export default ()=>{
    return store
}
//第二种
const createStoreFn =()=>{
    return store
};
export default createStoreFn;