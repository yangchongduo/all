/**
 * thunk:让重写dispatch让action变成一个函数返回，这样就可以让
 * 之前都是dispatch{对象}加入这个thunk就可以dispatch(函数) 就这个作用好像作用很大
 * 不够还可以使用promise
 *
 */
'use strict';

exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
    return function (_ref) {
        var dispatch = _ref.dispatch;
        var getState = _ref.getState;
        return function (next) {
            return function (action) {
                //如果是 dispatch({type:''})应该是一个对象，不过通过thunk这个middle就可以讲对象成为一个函数，同时还把 原生的dispatch和getState传入到函数内部
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }

                return next(action);
            };
        };
    };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;


/*****************
 ** WEBPACK FOOTER
 ** ./~/redux-thunk/lib/index.js
 ** module id = 281
 ** module chunks = 0
 **/
