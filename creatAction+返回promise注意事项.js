console.log('00000000000')
const test=()=>fetchServer()
console.log('4444')
// 在没有 async的时候，test()执行的返回结果是 fetchServer的返回结果
// 重点:在有async的情况下 好像默认 返回promise 下面的return 不在返回了
const fetchServer= async function () {
    await '21111'
    console.log('666')
    return '222'
}
console.log(test())
