/**
 * Created by yixi on 4/13/16.
 */
import React, {Component, PropTypes} from 'react';

import Modal from '../../src/modal';

import { StageDropDown } from '../../src/index';
import { getVisitorPermissionSelectorZones } from '../../constants/province';

const PROVINCES = getVisitorPermissionSelectorZones();
// console.log(PROVINCES);

export default class modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            stageMultiValue: {}
        };
    }

    onBasicClick() {
        this.setState({
            show: !this.state.show
        })
    }

    onBasicClose() {
        this.setState({
            show: false
        });
    }

    onStageMultiValueChange(value) {
        this.setState({
            stageMultiValue: value
        });
    }

    renderBasic() {
        return (
            <div>
                <h3>基础用法</h3>
                <div className="example">
                    <div className="example-content">
                        <button className="mq-btn" onClick={::this.onBasicClick}>Click Me</button>
                        <Modal show={this.state.show} onClose={::this.onBasicClose} maskClosable={false}>
                            <div className="mq-modal-content">
                                <div className="mq-modal-header">
                                    保存当前筛选条件
                                </div>
                                <div className="mq-modal-body">
                                    <input type="text" className="mq-form"/>
                                    <StageDropDown placeholder="选择地区"
                                        multi={true}
                                        value={this.state.stageMultiValue}
                                        onChange={::this.onStageMultiValueChange}
                                        data={PROVINCES}/>
                                </div>
                                <div className="mq-modal-footer">
                                    <button className="mq-btn">保存</button>
                                    <button className="mq-btn mq-btn-gray">取消</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        return (
           <section className="component">
               <h1>对话框</h1>
               {this.renderBasic()}
           </section>
        );
    }
}
