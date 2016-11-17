/**
 * Created by yixi on 3/30/16.
 */

import React, {Component} from 'react';


export default class button extends Component {


    renderBasic() {
        return (
            <div key="basic">

                <h3>基础样式</h3>
                <div className="example">
                    <div className="example-content">
                        <button className="mq-btn mq-btn-default">默认按钮</button>
                        <span className="mq-btn mq-btn-gray">取消按钮</span>
                        <button className="mq-btn mq-btn-ghost">选择按钮</button>
                        <button className="mq-btn mq-btn-danger">删除按钮</button>
                        <button className="mq-btn mq-btn-delete">删除按钮（视觉弱化）</button>
                        <button className="mq-btn mq-btn-disable">按钮禁用</button>
                    </div>
                </div>
                <div className="example-code">
                        <pre>
                            {`<button className="mq-btn mq-btn-default">默认按钮</button>
<span className="mq-btn mq-btn-gray">取消按钮</span>
<button className="mq-btn mq-btn-ghost">选择按钮</button>
<button className="mq-btn mq-btn-danger">删除按钮</button>
<button className="mq-btn mq-btn-delete">删除按钮（视觉弱化）</button>
<button className="mq-btn mq-btn-disable">按钮禁用</button>`}
                        </pre>
                </div>
            </div>
        )
    }


    renderSize() {
        return (
            <div key="size">
                <h3>尺寸</h3>
                <div className="example">
                    <div className="example-content">
                        <button className="mq-btn btn-tiny">Tiny</button>
                        <button className="mq-btn btn-small">Small</button>
                        <button className="mq-btn">Normal</button>
                        <button className="mq-btn btn-large">Large</button>
                        <button className="mq-btn btn-big">Big</button>
                        <button className="mq-btn btn-massive">Massive</button>
                    </div>
                </div>
                <div className="example-code">
                        <pre>
                            {`<button className="mq-btn btn-tiny">Tiny</button>
<button className="mq-btn btn-small">Small</button>
<button className="mq-btn">Normal</button>
<button className="mq-btn btn-large">Large</button>
<button className="mq-btn btn-big">Big</button>
<button className="mq-btn btn-massive">Massive</button>`}
                        </pre>
                </div>
            </div>
        )
    }


    renderBlock() {
        return (
            <div key="block">
                <h3>自适应宽度</h3>
                <div className="example">
                    <div className="example-content">
                        <div style={{maxWidth: '500px', padding: '10px', backgroundColor: '#f2f3f5', margin: '0 auto'}}>
                            <button className="mq-btn btn-block">块级元素</button>
                        </div>
                    </div>
                </div>
                <div className="example-code">
                    <pre>{`<button className="mq-btn btn-block">块级元素</button>`}</pre>
                </div>
            </div>
        )
    }

    renderGroup() {
        return (
            <div key="group">
                <h3>按钮组</h3>
                <div className="example">
                    <div className="example-content">
                        <div className="mq-btn-group">
                            <button className="mq-btn">人族</button>
                            <button className="mq-btn mq-btn-light">神族</button>
                            <button className="mq-btn mq-btn-light">虫族</button>
                        </div>
                    </div>
                </div>
                <div className="example-code">
                    <pre>{`
<div className="mq-btn-group">
    <button className="mq-btn">人族</button>
    <button className="mq-btn mq-btn-gray">神族</button>
    <button className="mq-btn mq-btn-gray">虫族</button>
</div>
                    `}</pre>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="component">
                <h1>按钮</h1>
                {this.renderBasic()}
                {this.renderSize()}
                {this.renderBlock()}
                {this.renderGroup()}
            </section>
        )
    }
}
