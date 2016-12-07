import React from 'react';
import {Link} from 'react-router';
//这是用户列表
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        var persons = [{id:1,name:'zhangsan'},{id:2,name:"lisi"}];
        let { query } = props.location;
        persons = persons.filter(person=>person.name.indexOf(query.keyword)!=-1);
        this.state = {persons:persons};
    }
//为什么下面要用this.state.persons 因为这是状态，是可以改变的
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.persons.map(person=> <li className="list-group-item">
                        <Link to={"/user/detail/"+person.id}>{person.id}:{person.name}</Link>
                    </li>)
                }
            </ul>
        )
    }
}