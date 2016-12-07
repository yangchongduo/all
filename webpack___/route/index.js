import React from 'react';//这是外层的路由 但是这个React的路由
import ReactDOM from 'react-dom';
import App from './containers/App';//这是文件app文件
import {Router,Route,hashHistory,IndexRoute,Redirect} from 'react-router';//这是路由需要的东西
import {Home,Profile,User,UserList,UserAdd,UserDetail} from './components';//这是具体的路由
require('bootstrap/dist/css/bootstrap.css');
function enter(){
    alert('enter Home');
}
function leave(){
    alert('leave Home');
}
ReactDOM.render(
    <Router>
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>

            <Route path="home" onEnter={enter} onLeave={leave} component={Home}/>/
            <Route path="user" component={User}>
                <Route path="list" component={UserList}/>
                <Route path="add" component={UserAdd}/>
                <Redirect from="detail/:id" to="/detail/:id"/>
                <Route path="/detail/:id" component={UserDetail}/>
            </Route>
            <Route path="profile" component={Profile}/>
        </Route>
    </Router>,
    document.querySelector('#app')
)
/*这是处理没有路由进行匹配的时候 走的路由*//*这个是最外层的路由*//*如果决定是子组件还是父组件 需要在render中来规定，看你写的位置*/