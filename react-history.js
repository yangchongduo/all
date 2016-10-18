history原理：

React Router 是建立在 history 之上的。 简而言之，一个 history 知道如何去监听浏览器地址栏的变化， 并解析这个 URL 转化为 location 对象， 然后 router 使用它匹配到路由，最后正确地渲染对应的组件。

/*
createBrowserHistory
Browser history 是由 React Router 创建浏览器应用推荐的 history。它使用 History API 在浏览器中被创建用于处理 URL，新建一个像这样真实的 URL example.com/some/path。
*/

/*browserHistory和hashHistory不一样，使用browserHistory的时候，浏览器中导航栏的URL就不会出现_k的hash键值对。实际项目中也一般用browserHistory.*/
//下面是 hashHistory 用这个还是挺好的 原因是我们在这个页面刷新的时候 能找到 但是使用browserHistory
//是不可以的
import {Router,Route,hashHistory,Link,IndexRoute,Redirect} from 'react-router';
// 这样的话确实没有 _key 使用browserHistory
//import {Router,Route,browserHistory,Link,IndexRoute,Redirect} from 'react-router';
//以上是以前的方式 现在改变了
// JavaScript 模块导入（译者注：ES6 形式）
import createBrowserHistory from 'history/lib/createBrowserHistory'
// 或者以 commonjs 的形式导入
const createBrowserHistory = require('history/lib/createBrowserHistory')
import {Router,Route,Link,hashHistory,browserHistory,IndexRoute,Redirect,useRouterHistory} from 'react-router';

// 第一种创建history  尽管你引入了 但是你还是没有形成 所以要是要用到 react-router的 useRouterHistory;
import createHashHistory from 'history/lib/createHashHistory'
const browserHistory = useRouterHistory(createHashHistory)({
    basename: __BASENAME__,
});
//第二种 直接使用
import {hashHistory,browserHistory} from 'react-router';
