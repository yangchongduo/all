//以下这种四种方式都是可以的
/*function mapStateToProps (state) {
 //todoList 这个我知道怎么来的
 return {
 todoing:state.todoListReducers
 };
 }*/
// 一下三种方法必须用 combineReducer()才可以
//  利用es6的 想返回一个对象必须 ({}) 这样才可以
/*const mapStateToProps=({todoListReducers})=>({
 todoing:todoListReducers
 })*/
//有return 就可以了
/*const mapStateToProps=({todoListReducers})=>{
 return  {todoing:todoListReducers}
 }*/
//这个中写法最牛这样就不用 在下面
const mapStateToProps=({todoListReducers})=>({
    ...todoListReducers
});