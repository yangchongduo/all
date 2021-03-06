//第一种 最基础的
{/*<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}>
            <IndexRoute component={UserList}/>
            <Route path="list" component={UserList}/>
            <Route path="add" component={UserAdd} onEnter={handleEnter} onLeave={handleLeave}/>
            <Route path="/detail/:iding" component={UserDetail}/>
            <Redirect from="detail/:id" to="/detail/:id"/>
        </Route>
        <Route path="profile" component={Profile}/>
    </Route>
</Router>*/}
// 第二种:
/*export const createRoutes = store => ({
    path: '/',
    indexRoute: Dashboard(store),
    childRoutes: [
        Login(store),
    ],
});
//  Login(store)执行会返回一个对象
export default store => ({
    path: 'login',
    breadcrumbName: '登录',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            const Login = require('./containers/LoginContainer').default;
            cb(null, Login);
        }, 'Login');
    },
});*/
//第三种
/*export default store => ({
    component: Dashboard,
    childRoutes: [
        TicketRoute(store),
    ],
});
const TicketRoute = store => ({
    path: 'ticket',
    breadcrumbName: '券码管理',
    indexRoute: { getComponent: getComponent(store, 'Tickets') },
    childRoutes: [
        {
            path: 'new',
            breadcrumbName: '新建券码',
            getComponent: getComponent(store, 'TicketEdit'),
        },
    ],
});
const getComponent = (store, name) => (nextState, cb) => {
    if (containers) {
        cb(null, containers[`${name}Container`]);
    } else {
        require.ensure([], (require) => {
            containers = require('./containers/index');
            const reducer = require('./modules/Ticket').default;
            injectReducer(store, { key: 'ticket', reducer });
            cb(null, containers[`${name}Container`]);
        }, 'Ticket');
    }
};*/
//第四种和第三种的 childRoutes差不多 那个没有用require 这是用了而已
/*const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Calendar'),
            require('./routes/Course'),
            require('./routes/Grades'),
            require('./routes/Messages'),
            require('./routes/Profile')
        ]
    } ]
}*/
// 第五种方式 getChildRoutes 通过这获取 这个主要是通过函数 执行来获取
//下面是五种方式的总结------------------------------------------------
module.exports = {
    path: 'course/:courseId',// query params 
    childRoutes:[
        {
            path: 'new',
            breadcrumbName: '新建券码',
            getComponent: '自治性函数', 去执行
        },
        require('./routes/Calendar'),
        Login(store),
    ],
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Announcements'),
                require('./routes/Assignments'),
                require('./routes/Grades')
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Course'))
        })
    }
};

//---------------
//这是同步路由的 这是路由但没有子路由
import Login from './containers/LoginContainer';
export default store => ({
    path: 'login',
    breadcrumbName: '登录',
    component: Login,
});
//react
<Link to="/user/sally" activeClassName="active">Sally</Link>
<Link to={'market/new'}>新建</Link>
<Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link>

<li><Link   to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
    <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>



//vue:
<li><router-link to="/users/evan">/users/evan</router-link></li>
<li><router-link to="/users/evan#foo">/users/evan#foo</router-link></li>
<li>
<router-link :to="{ path: '/users/evan', query: { foo: 'bar' }}">
/users/evan?foo=bar
    </router-link>
    </li>
<Link to='/'></Link>