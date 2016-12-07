import React from 'react';
export default class UserList extends React.Component{
    render(){
        return (
            <form >
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input type="text" className="form-control"/>
                </div>
            </form>
        )
    }
}