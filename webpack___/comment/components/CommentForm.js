import React from 'react';
export default class CommentForm extends React.Component{
    //处理点击按钮事件
    handleClick(){
        var username = this.refs.username.value;// 取得用户名
        var content = this.refs.content.value;//取得留言
        this.props.submitForm({username,content});//把此对象交由父组件方法来处理
        this.refs.username.value = '';
        this.refs.content.value = '';
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                        <div className="form-group">
                            <label className="control-label col-xs-1" htmlFor="username">姓名</label>
                            <div className="col-xs-11">
                                <input ref="username" className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-xs-1" htmlFor="content">留言</label>
                            <div className="col-xs-11">
                                <textarea ref="content" name="content" className="form-control" id="content" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-offset-1 col-xs-11">
                                <button onClick={this.handleClick.bind(this)} className="btn btn-primary">发言</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}