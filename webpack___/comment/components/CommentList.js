import React from 'react';
import Comment from './Comment';
export default class CommentList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <ul className="list-group">
                        {
                            this.props.comments.map(comment=>
                                <Comment del={this.props.del} key={comment.id} comment={comment}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}