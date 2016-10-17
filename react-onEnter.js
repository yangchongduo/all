/*
Route 可以定义 onEnter 和 onLeave 两个 hook ，这些hook会在页面跳转确认时触发一次。这些 hook 对于一些情况非常的有用，例如权限验证或者在路由跳转前将一些数据持久化保存起来。

在路由跳转过程中，onLeave hook 会在所有将离开的路由中触发，从最下层的子路由开始直到最外层父路由结束。然后onEnter hook会从最外层的父路由开始直到最下层子路由结束。

继续我们上面的例子，如果一个用户点击链接，从 /messages/5 跳转到 /about，下面是这些 hook 的执行顺序：

/messages/:id 的 onLeave
/inbox 的 onLeave
/about 的 onEnter*/

// 详细请看  ：react-router-lesson+ok 和
//下面的也是一个 路由离开的时候 要操作的事情 不过可以也可以用 onEnter 或者 onLeave
routerWillLeave() {
    if (this.state.textValue)
        return 'You have unsaved information, are you sure you want to leave this page?'
},