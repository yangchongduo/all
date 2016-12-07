import React from 'react';
import {CommentForm,CommentList} from '../components';
var moment = require('moment');
moment.locale('zh-cn');
export default class CommentBox extends React.Component{
    render(){
        return (
            <li className="list-group-item">
                {this.props.comment.username}:{this.props.comment.content}: <span>{moment(this.props.comment.time).fromNow()}</span> <span  className="pull-right glyphicon glyphicon-remove" onClick={
                ()=>this.props.del(this.props.comment.id)
                }></span>
            </li>
        )
    }
}