<router-link to="/users/evan">/users/evan</router-link>
<router-link :to="{ path: '/users/evan', query: { foo: 'bar' }}">
/users/evan?foo=bar
</router-link>
两种写法： 要不有 要不就没有
const Bar = r => require.ensure([], () => r(require('./Bar.vue')), '/bar')
const Baz = r => require.ensure([], () => r(require('./Baz.vue')), '/bar')
const router = new VueRouter({
        mode: 'history',// 这是路由的模式 和react中一个像hashHistroy  browserHistory 一样
        base: __dirname,
        routes: [
            { path: '/', component: Home },
            // Just use them normally in the route config
            { path: '/foo', component: Foo },
            // Bar and Baz belong to the same root route
            // and grouped in the same async chunk.
            { path: '/bar', component: Bar,
                children: [
                    { path: 'baz', component: Baz }
                ]
            }
        ]
    })
        
//-------------------------------        

<Link to={`/course/${course.id}`}>{course.name}</Link>
<Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
               activeStyle={ACTIVE}>/users/ryan?foo=bar</Link>


三种 一种是最普通的写法
require 写法
require.ensure 这个方法