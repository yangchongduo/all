理解：
{/*<Link to={"/user/detail/"+item.ids}>{item.ids}:{item.name}</Link>;*/}
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
                childRoutes: [
                    { path: '/messages/:id', component: Message },
                    { path: 'messages/:id',
                        onEnter: function (nextState, replaceState) {
                            replaceState(null, '/messages/' + nextState.params.id)
                        }
                    }
                ]
            }
        ]
    }
]

React.render(<Router routes={routeConfig} />, document.body)
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
