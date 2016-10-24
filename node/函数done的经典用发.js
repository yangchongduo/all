/**
 *可以这么想 我执行一个函数，同时执行完还需要对这个结果做一个别的处理 就可以使用这种写法done 和回调有点相似
 */
const fn=(req,res,done)=>{
    //.... 经过一系列的处理
    done(参数)
}
fn(req,res,function (data) {
    //...data
    /**
     *需要对他进行的处理
     */
})