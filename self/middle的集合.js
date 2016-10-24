function createThunkMiddleware(extraArgument) {
    return function (_ref) {
        var dispatch = _ref.dispatch;
        var getState = _ref.getState;
        return function (next) {
            return function (action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }
                return  next(action);
            };
        };
    };
}
//------------------------------------
function createThunkMiddle(extraArgument) {
    return function (_ref) {
        let dispatch=_ref.dispatch;
        let getState=_ref.getState;
        return next=>action=>{
            if (typeof action==='function'){
                return action(dispatch,getState,extraArgument)
            }
            return next(action);
        }
    }
}

//-------------------------------------------------------
function promiseMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
        return function (action) {
            if (!_fluxStandardAction.isFSA(action)) {
                return isPromise(action) ? action.then(dispatch) : next(action);
            }

            return isPromise(action.payload) ? action.payload.then(function (result) {
                return dispatch(_extends({}, action, { payload: result }));
            }, function (error) {
                return dispatch(_extends({}, action, { payload: error, error: true }));
            }) : next(action);
        };
    };
}
//------------------------------------------------
export default function promiseMiddleware({ dispatch }) {
    return next => action => {
        if (!isFSA(action)) {
            return isPromise(action)
                ? action.then(dispatch)
                : next(action);
        }

        //下面的这个写法是 固定的 不管成功还是失败，都会走这步 因为他是promise 如果不是就不走
        return isPromise(action.payload)
            ? action.payload.then(
            result => dispatch({ ...action, payload: result }),
            error => {
                dispatch({ ...action, payload: error, error: true });
                return Promise.reject(error);
            }
        )
            : next(action);
    };
}
//--------------------------------------------------
export default function promiseMiddleware({ dispatch }) {
    //可以为一个函数传入两个参数 匿名函数执行 返回一个next(action)
    return next => (action) => {
        if (!isFSA(action)) {
            return isPromise(action)
                ? action.then(dispatch)
                : next(action);
        }
        const { meta = {}, payload } = action;
        const id = _.uniqueId();
        if (isPromise(payload)) {
            //这个是同步的dispatch 还是异步的 应该同步的
            dispatch({
                ...action,
                payload: undefined,
                meta: {
                    ...meta,
                    sequence: {
                        type: 'start',
                        id,
                    },
                },
            });
            // 这个是异步的肯定的 否则不可能出现  需要等到
            return payload.then(
                result => dispatch({
                    ...action,
                    payload: result,
                    meta: {
                        ...meta,
                        sequence: {
                            type: 'next',
                            id,
                        },
                    },
                }),
                error => dispatch({
                    ...action,
                    payload: error,
                    error: true,
                    meta: {
                        ...meta,
                        sequence: {
                            type: 'next',
                            id,
                        },
                    },
                })
            );
        }

        return next(action);
    };
}
//--------------------------------------------
export default function({getState,dispatch}) {
    return (next) => (action) => {
        console.log('pre state', getState());
        // 调用 middleware 链中下一个 middleware 的 dispatch。
        //这个位置我感觉不用return 也是可以的
        next(action);
        //我知道了 next会一直执行下去 执行完了在返回这
        console.log('after dispatch', getState());
    }
}
//-------------------------------------------------
export default function customMiddleware ({dispatch, getState}){
    return next => action =>{
        if(typeof action.payload === 'function'){
            let res = action.payload(dispatch, getState);
            if (isPromise(res)) {
                res.then(
                    (result) => {
                        dispatch({...action, payload: result});
                    },
                    (error) => {
                        dispatch({...action, payload: error, error: true});
                    }
                );
            } else {
                dispatch({...action, payload: res});
            }
        } else {
            next(action);
        }
    }
}
//----------------------------------------------

