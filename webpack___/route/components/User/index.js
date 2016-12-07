import React from 'react';
import {Link} from 'react-router';//所有的路由都要继承 React.Component这个本身的React
export default class User extends React.Component{
   render(){
       return (
           <div className="row">
               <div className="col-xs-4">
                   <ul className="nav nav-pills nav-stacked">
                      <li><Link to="/user/list" query={{keyword:'a'}}>用户列表</Link></li>
                       <li><Link to="/user/add">新增用户</Link></li>
                   </ul>
               </div>
               <div className="col-xs-8">
                   {this.props.children}
               </div>
           </div>
       )
   }
}