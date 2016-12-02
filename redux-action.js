/*是一个纯文本对象
只具备 type 、payload、error 和 meta 中的一个或者多个属性。type 字段不可缺省，其它字段可缺省
若 Action 报错，error 字段不可缺省，切必须为 true
*/
//
let addTodo = (data='default data') => {
    return {
        type: ADD_TODO,
        data: data
    }
}
//payload 是一个对象，用作Action携带数据的载体。所以，上述的写法可以更改为：
let addTodo = (data='default data') => {
    return {
        type: ADD_TODO,
        payload: {
            data
        }
    }
};
//在 redux 全家桶中，可以利用 redux-actions 来创建符合 FSA 规范的Action：
import {creatAction} from 'redux-actions';

let addTodo = creatAction(ADD_TODO)
//same as
let addTodo = creatAction(ADD_TODO,data=>data);
//可以采用如下一个简单的方式检验一个Action是否符合FSA标准：

let isFSA = Object.keys(action).every((item)=>{
    return  ['payload','type','error','meta'].indexOf(item) >  -1
});


