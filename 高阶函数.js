/*
const compose =(f,g)=>x=>f(g(x));
//高级函数就是不段的return
const logger99=(store)=>(next)=>(action)=>{
    return store+next+action
};
console.log(logger99('1')('2')('3'));
function logger(store){
    return function (next){
        return function(action){
            return store+next+action
        }
    }
}
const log=(store,next,action)=>{
    return store+next+action
};
console.log(log('1','2','3'))

function logger1(store,next,action){
    return store+next+action
}
console.log(logger1('1','2','3'))
console.log(logger('1')('2')('3'));
*/


//有几个 箭头函数 就会少一个 return
const xiao=fn=>(next)=>{
    console.log('1')
}
xiao()()
function xia(fn) {
    return function (next) {
        console.log('1')
    }
}
xia()();


