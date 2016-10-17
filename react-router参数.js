理解：
{/*<Link to={"/user/detail/"+item.ids}>{item.ids}:{item.name}</Link>;*/}
// query 使用场景是: list 列表页  params 场景: 详情页
// 上面的函是这么写  点击的时候 会到路由里面 进行逐层匹配
// 看到了 :的 ok 就是他了 然后放到 ：就会存起来了  存到 props
// params  :{变量}   这个变量会当做属性名
//         那个会当做属性值 存起来 供下面使用

//这是第一种
React.render((
    <Router>
    <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
    <Route path="/messages/:id" component={Message} />

    {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
    <Redirect from="messages/:id" to="/messages/:id" />
    </Route>
    </Route>
    </Router>
), document.body);

//jsx的第二种方式
const routeConfig = [
    { path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            { path: 'about', component: About },
            { path: 'inbox',
                component: Inbox,
                indexRoute:{component:Inbox},
                childRoutes: [
                    { path: '/messages/:id', component: Message ,getComponent:getComponent()},
                    { path: 'messages/:id',
                        onEnter: function (nextState, replaceState) {
                            replaceState(null, '/messages/' + nextState.params.id)
                        }
                    }
                ]
            }
        ]
    }
];

const rootRoute = {
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
}
///这是顶级的api  需要三个参数 一个是 history  routes store 这三个参数
render((
    <Router
        history={withExampleBasename(browserHistory, __dirname)}
        routes={rootRoute}
    />
), document.getElementById('example'));
//进入没个单独的路由
module.exports = {
    path: 'course/:courseId',
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

module.exports = {
    path: 'course/:courseId',
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
}
//-------------------------------------------------------------------

let render = () => {
    const routes = require('./routes/index').default(store);
    ReactDOM.render(
        <AppContainer
            store={store}
            history={history}
            routes={routes}
        />,
        MOUNT_NODE
    );
};

export default store => ({
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
        {
            path: ':id/edit',
            breadcrumbName: '编辑券码',
            getComponent: getComponent(store, 'TicketEdit'),
        },

        {
            path: ':id',
            breadcrumbName: '券码详情',
            getComponent: getComponent(store, 'TicketDetail'),
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
};
//---------------------是一个函数所以  下面是一个集合
export const createRoutes = store => ({
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
});



/*
//   <Router history={hashHistory} >
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
    </Router>*/
