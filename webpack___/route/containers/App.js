import React from 'react';
import {Link} from 'react-router';
//组件和路由之间如何跳转呢，就得需要利用link这个标签实现跳转 这个link自动生成a标签
export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">珠峰React</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><Link activeStyle={{color:'red'}} to="/home">首页</Link></li>
                                <li><Link activeStyle={{color:'red'}} to="/user">用户管理</Link></li>
                                <li><Link activeStyle={{color:'red'}} to="/profile">个人设置</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {this.props.children}
            </div>
        )
    }
}
/*只要显示组件 就的需要利用这个 this.props.children  因为就是子组件显示*/