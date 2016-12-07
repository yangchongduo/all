//导入reactdom
import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
//导入容器组件
import {CommentBox} from './containers';
// 新增 删除 查询
var utils = require('./utils');

//把留言板组件渲染到页面的ID为app的div内部
ReactDOM.render(
    <CommentBox comments={utils.list()} removeComment={utils.remove.bind(utils)} addComment={utils.add.bind(utils)} />,
    document.querySelector('#app')
);
