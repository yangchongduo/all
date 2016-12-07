//创建组件时
/*
constructor(props){
    super(props);
    this.props===props
    this.state = {name:''};
}*/
/*CommonJS 模块系统，则可以用 require() 函数引入 React。*/
// 第一个字母要大写 也是利用对象结构的方式写的
import React,{Compontent,PropTypes} from 'react';
import DOMRender,{render} from 'react-dom';
//这个react-router 还有很多没写
/**
 * useRouterHistory:浏览器的历史记录设置
 */
import {Router,Route,Link,hashHistory,browserHistory,IndexRoute,Redirect,useRouterHistory} from 'react-router';
import {useRouterHistory,Routers} from 'react-router';
const browserHistory = useRouterHistory(createHashHistory)({
    basename: __BASENAME__,
});

import {Router,Route,Link,hashHistory,browserHistory,IndexRoute,Redirect,useRouterHistory} from 'react-router';
//createStore 之前要有初始化状态这  按道理应该很多 还可以有中间件
const store =createStore(initialState, browserHistory);
//开始分析createStore这个方法 记住一点就是  原声的createStore是肯定是是redux的 provider是react-redux
//同时createstore是 需要reducers
import { applyMiddleware, compose, createStore } from 'redux';
//makeRootReducer 现在开始真正的createStore 肯定要用到reducers reducers 肯定有type 来执行这个函数 action
const middleware=[thunk,api,routerMiddleware(history)];
const store=createStore(
    makeReducer(),
    compose(
        applyMiddleware(...middleware),
    )
)

//因为现在是已经完createStore  需要的是reducers
import { combineReducers } from 'redux';
combineReducers();///主要是为了能够在合并reducers；
import { routerReducer as router } from 'react-router-redux';
//现在合并 combineReducers 时候来到了Dashboard.js这里面这应该是 最后的reducers吗？

import { push } from 'react-router-redux';















//没见过这个
import { routerMiddleware } from 'react-router-redux';
//是用来配置中间件的
//以下这个写法配置中间是最完美的
import thunk from 'redux-thunk';
compose的主要作用是:加强middleware
compose(
    applyMiddleware(...middleware),
);
//routerMiddleware是路由的 middleware
const middleware = [api, thunk, routerMiddleware(history)];

//这个和store的同步历史记录  产生一个history 和store传入到 顶级组件中 app中
import { syncHistoryWithStore } from 'react-router-redux';
//react-router 中的useRouterHistory() 产生browserHistory 然后当做  react-router-redux 中的方法syncHistoryWithStore

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => state.router,
});

import *  as fn from './component'  //获取所有的东西 都fn下面 这个好像是es5的方式具体我也忘了
// 写法规范
import classNames from 'classNames';
var btn=classNames({
    '类名':true // 这样就可以判断
})
import classes from './class.css'  //classes[类名]