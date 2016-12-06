//vue 的action
export const increment = ({ commit }) => {
    commit('INCREMENT') //
};
//------------这是middle-
const promiseMiddle=({getState,dispatch})=>(next)=>(action)=>{
}
// 这个react的thunk 函数action
export const logout = () => (dispatch) => {
    local.clear('userInfo', 'accessToken', 'refreshToken');
    dispatch({ type: LOGOUT });
    dispatch(push('/login'));
};