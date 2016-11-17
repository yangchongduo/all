/**
 * Created by yixi on 4/12/16.
 */
import React, {Component, } from 'react';

export default class input extends Component {


    renderInput() {
        return (
            <div key="input">
                <h3>输入框</h3>
                <div className="example">
                    <div className="example-content">
                        <input type="text" className="mq-form"/>
                        错误样式
                        <input type="text" className="mq-form mq-form-error"/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="component">
                <h1>表单</h1>
                {this.renderInput()}
            </section>
        );
    }
}
