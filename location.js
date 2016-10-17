//总结：
/*  search  :包含？后面的
   query:   会放在  再window 是没有的  不过在后台是有的 用query接受
   pathname 在前段是有的 就是url后面的参数*/

location
 window.location.pathname // ？ 之前的  "/user/list"
window.location.search // ？ 后面的 包含问好？  ?orderBy=id
在react中有：location.query  // ?的内容 以键值对的方式存在
// 以下这样就会有query 了 然后再 this.location.query 中获取了 至于什么作用再说
/**
 * < li><Link to="/user/list" query={{ordering:'id'}} >用户列表</Link></li>
 */
window.location = "http://www.baidu.com" 跳转后有后退功能
//要新的窗口打开链接
window.open("http://www.baidu.com")
//是本页面跳转
window.location.href //  "http://localhost:8080/#/user/list?orderBy=id&_k=uf07fo"



http://localhost:8080/#/user/list?orderBy=id&_k=uf07fo
/**
 hash:"#/user/list?orderBy=id&_k=uf07fo"
 host:"localhost:8080"
 hostname:"localhost"
 href:"http://localhost:8080/#/user/list?orderBy=id&_k=uf07fo"
 origin:"http://localhost:8080"
 pathname:"/"
 port:"8080"
 protocol:"http:"
 search:""
 window.location.search方法是截取当前url中“?”后面的字符串，
 例如：index.php?act=doctor,截取后的字符串就是act=doctor
 */