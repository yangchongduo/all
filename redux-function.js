function text(arg) {
    return ()=>{
        if(arg==1){
            console.log('1')
           return 1
        }
        console.log('2')
        return '2'
    }
};
text(1);
console.log(text(2)());
/**
 function createThunkMiddleware(extraArgument) {
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }
        return next(action);
    };
}
