import React from 'react';
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        //this.props.params.id
        var persons = {
            '1':'张三',
            '2':'李四'
        }
        this.state = {name:persons[this.props.params.id]};
    }
    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    用户详情
                </div>
                <div className="panel-body">
                    {this.state.name}
                </div>
            </div>
        )
    }
}