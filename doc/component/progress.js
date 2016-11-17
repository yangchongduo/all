/**
 * Created by yixi on 3/30/16.
 */

import React, {Component} from 'react';

import {Progress} from '../../src/index';

export default class button extends Component {
    render() {
        return (
            <section className="component">
                <h3>进度条</h3>
                <p>引入进度条组件进行使用</p>
                <div className="example">
                    <div className="example-content">
                        <Progress />
                    </div>
                </div>
            </section>
        )
    }
}
