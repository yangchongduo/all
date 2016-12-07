const fn = ()=> {
    return new Promise((resolve, reject)=> {
        resolve(7)
    })
}
fn().
    then(res=> {
        console.log('0000000000')
        console.log(res)
    })
const out =async function () {
    console.log('out')
    return await fn()
}
// 本生就是promise 所以可以直接then
out().then(res=>{
    console.log('-----')
    console.log(res)
})