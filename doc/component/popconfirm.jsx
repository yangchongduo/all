import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Popconfirm from '../../src/popconfirm/';
import popconfirm from '../../src/popconfirm/popconfirm';

@popconfirm()
export default class PopconfirmSection extends Component {
    handleConfirmRight(e) {
        this.confirm({
            content: '确认删除',
            target: e.target,
            position: 'right',
            onConfirm: () => console.log('confirm'),
            onCancel: () => console.log('cancel')
        })
    }
    handleConfirmLeft(e) {
        this.confirm({
            content: '确认删除',
            target: e.target,
            position: 'left',
            onConfirm: () => console.log('confirm'),
            onCancel: () => console.log('cancel')
        })
    }
    handleConfirmTop(e) {
        this.confirm({
            content: '确认删除',
            target: e.target,
            position: 'top',
            onConfirm: () => console.log('confirm'),
            onCancel: () => console.log('cancel')
        })
    }
    handleConfirmBottom(e) {
        this.confirm({
            content: '确认删除',
            target: e.target,
            position: 'bottom',
            onConfirm: () => console.log('confirm'),
            onCancel: () => console.log('cancel')
        })
    }
    render() {
        return (
            <section className="component">
                <h3>Popconfirm</h3>
                <p>轻量级的确认浮层提示框</p>
                <div className="example">
                    <button onClick={::this.handleConfirmTop} className="mq-btn mq-btn-danger">Top</button>
                    <button onClick={::this.handleConfirmRight} className="mq-btn mq-btn-danger">Right</button>
                    <button onClick={::this.handleConfirmBottom} className="mq-btn mq-btn-danger">Bottom</button>
                    <button onClick={::this.handleConfirmLeft} className="mq-btn mq-btn-danger">Left</button>
                </div>
                <div className="example-code">
                    <pre>
                        {`
this.confirm({
    content: '确认删除',
    target: e.target,
    position: 'right',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel')
})
this.confirm({
    content: '确认删除',
    target: e.target,
    position: 'left',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel')
})
this.confirm({
    content: '确认删除',
    target: e.target,
    position: 'top',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel')
})
this.confirm({
    content: '确认删除',
    target: e.target,
    position: 'bottom',
    onConfirm: () => console.log('confirm'),
    onCancel: () => console.log('cancel')
})
                        `}
                    </pre>
                </div>
            </section>
        )
    }
}
