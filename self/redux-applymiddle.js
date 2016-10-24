var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

import compose from './compose';

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
/**
 *Redux 提供了 applyMiddleware(...middlewares) 来将中间件应用到 createStore。applyMiddleware
 * 会返回一个函数，该函数接收原来的 creatStore 作为参数，返回一个应用了 middlewares 的增强后的 creatStore。
 */
export default function applyMiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
    }

    return function (createStore) {
        return function (reducer, preloadedState, enhancer) {
            var store = createStore(reducer, preloadedState, enhancer);
            var _dispatch = store.dispatch;
            var chain = [];
            //业就是说每个middleware执行 都会传入 middlewareAPI 有原生的getState 和_dispatch、
            //  //传递给中间件的参数
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch(action) {
                    return _dispatch(action);
                }
            };
            //这个是讲原生的dispatch和    //注册中间件调用链 middleware 是每一个中间件  接受两个参数
            //并返回一个函数 middleware(middlewareAPI);
            //，该函数会被传入下一个中间件的 dispatch 方法，并返回一个接收 action 的新函数。
            chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
            });
            // middleware 处理之后 最后都到 _dispatch
            _dispatch = compose.apply(undefined, chain)(store.dispatch);
            //最终会返回一个 对象 有store和
            // //返回经middlewares增强后的createStore
            return _extends({}, store, {
                dispatch: _dispatch
            });
        };
    };
}