/**
 * Created by yixi on 3/30/16.
 */
import React, {Component} from 'react';

import {DropDown, StageDropDown} from '../../src/index';

import { getVisitorPermissionSelectorZones } from '../../constants/province';

const PROVINCES = getVisitorPermissionSelectorZones();
// console.log(PROVINCES);

export default class button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            singleValue: null,
            multiValue: null,
            stageMultiValue: null
        }
    }

    renderBasicStyle() {
        return (
            <div>
                <h3>菜单</h3>
                <p>基础菜单样式, 用于扩展</p>
                <div className="example">
                    <div className="example-content">
                        <div className="mq-dropdown-menu">
                            <ul>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                                <li><a>呵呵</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onSingleValueChange(value) {
        this.setState({
            singleValue: value
        })
    }

    renderSingle() {

        let dropDownData = [
            {label: '奥格瑞玛', value: 'wow'},
            {label: '雷霆崖'},
            {label: '幽暗城'},
            {label: '银月城'},
            {label: '暴风城'},
            {label: '达纳苏斯'}
        ];

        return (
            <div>
                <h3>单选框</h3>
                <p>单选框, 有两种样式,分别用在两个地方, 通过 btnClass 参数控制,这里的样式同 button 可以自由控制, 注意使用 value 参数时双向绑定传递的问题</p>
                <div className="example">
                    <div className="example-content">
                        <DropDown placeholder="选择地区"
                                     onChange={::this.onSingleValueChange}
                                     value={this.state.singleValue}
                                     data={dropDownData}/>

                            <DropDown placeholder="选择地区"
                                      btnClass="mq-btn-select"
                                      onChange={::this.onSingleValueChange}
                                      defaultValue={dropDownData[1]}
                                      value={this.state.singleValue}
                                      data={dropDownData}/>
                        <div style={{maxWidth: '500px', padding: '10px', border: '1px solid #ccc', margin: '0 auto'}}>
                            <p>自适应宽度</p>
                            <DropDown placeholder="选择地区"
                                      btnClass="btn-block"
                                      onChange={::this.onSingleValueChange}
                                      defaultValue={dropDownData[2]}
                                      value={this.state.singleValue}
                                      data={dropDownData}/>
                            <DropDown placeholder="选择地区"
                                      btnClass="mq-btn-select btn-block"
                                      onChange={::this.onSingleValueChange}
                                      defaultValue={dropDownData[1]}
                                      value={this.state.singleValue}
                                      data={dropDownData}/>
                        </div>


                        <p>onChange: {JSON.stringify(this.state.singleValue)}</p>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`let dropDownData = [
            {label: '奥格瑞玛', value: 'wow'},
            {label: '雷霆崖'},
            {label: '幽暗城'},
            {label: '银月城'},
            {label: '暴风城'},
            {label: '达纳苏斯'}
        ];
<DropDown placeholder="选择地区"
          onChange={::this.onSingleValueChange}
          value={this.state.singleValue}
          data={dropDownData}/>
<DropDown placeholder="选择地区"
          btnClass="mq-btn-select"
          onChange={::this.onSingleValueChange}
          defaultValue={dropDownData[1]}
          value={this.state.singleValue}
          data={dropDownData}/>
<DropDown placeholder="选择地区"
          btnClass="btn-block"
          onChange={::this.onSingleValueChange}
          defaultValue={dropDownData[2]}
          value={this.state.singleValue}
          data={dropDownData}/>
<DropDown placeholder="选择地区"
          btnClass="mq-btn-select btn-block"
          onChange={::this.onSingleValueChange}
          defaultValue={dropDownData[1]}
          value={this.state.singleValue}
          data={dropDownData}/>`}
                    </pre>
                </div>
            </div>
        )
    }

    onMultiValueChange(value) {
        this.setState({
            multiValue: value
        })
    }

    renderMulti() {
        let dropDownData = [
            {label: '奥格瑞玛', value: 'wow'},
            {label: '雷霆崖'},
            {label: '幽暗城'},
            {label: '银月城'},
            {label: '暴风城'},
            {label: '达纳苏斯'}
        ];

        return (
            <div>
                <h3>多选框</h3>
                <p>多选框, 多用来做筛选条件选择, 比如地区,客服,标签等</p>
                <div className="example">
                    <div className="example-content">
                        <div>
                            <DropDown placeholder="选择地区"
                                  multi={true}
                                  value={this.state.multiValue}
                                  onChange={::this.onMultiValueChange}
                                  data={dropDownData}/>
                        </div>
                        <div>
                        <DropDown placeholder="选择地区"
                                  btnClass="mq-btn-select"
                                  multi={true}
                                  defaultValue={[dropDownData[0], dropDownData[2]]}
                                  onChange={::this.onMultiValueChange}
                                  data={dropDownData}/>
                        </div>
                        <p>onChange: {JSON.stringify(this.state.multiValue)}</p>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`<DropDown placeholder="选择地区"
          multi={true}
          value={this.state.multiValue}
          onChange={::this.onMultiValueChange}
          data={dropDownData}/>
<DropDown placeholder="选择地区"
          btnClass="mq-btn-select"
          multi={true}
          defaultValue={[dropDownData[0], dropDownData[2]]}
          onChange={::this.onMultiValueChange}
          data={dropDownData}/>`}
                    </pre>
                </div>
            </div>
        )
    }

    onStageMultiValueChange(value) {
        this.setState({
            stageMultiValue: value
        });
    }

    renderMultiStage() {
        let subChildren = [
            {
                label: '武侯',
                value: '101'
            },
            {
                label: '锦江',
                value: '102'
            },
            {
                label: '金牛',
                value: '103'
            },
            {
                label: '青羊',
                value: '104'
            },
            {
                label: '温江',
                value: '105'
            }
        ]
        let children = [
            {
                label: '成都',
                value: '101'
            },
            {
                label: '德阳',
                value: '102'
            },
            {
                label: '绵阳',
                value: '103'
            },
            {
                label: '广元',
                value: '104'
            },
            {
                label: '南充',
                value: '105'
            }
        ]
        let province = {
            label: '四川',
            value: '100',
            children
        }
        let provinces = [];
        let i = 0;
        while (i<1) {
            provinces.push(province);
            i++;
        }

        return (
            <div>
                <h3>级联多选框</h3>
                <p>级联多选框, 多用来做带分组筛选条件选择, 比如地区,客服,标签等</p>
                <div className="example">
                    <div className="example-content">
                        <div>
                            <StageDropDown placeholder="选择地区"
                                  multi={true}
                                  value={this.state.stageMultiValue}
                                  onChange={::this.onStageMultiValueChange}
                                  data={PROVINCES}/>
                        </div>
                        <div>
                            <StageDropDown placeholder="选择地区"
                                  btnClass="mq-btn-select"
                                  multi={true}
                                  value={this.state.stageMultiValue}
                                  onChange={::this.onStageMultiValueChange}
                                  data={PROVINCES}/>
                        </div>
                        <p>onChange: {JSON.stringify(this.state.stageMultiValue)}</p>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`<DropDown placeholder="选择地区"
          multi={true}
          value={this.state.multiValue}
          onChange={::this.onMultiValueChange}
          data={dropDownData}/>
<DropDown placeholder="选择地区"
          btnClass="mq-btn-select"
          multi={true}
          defaultValue={[dropDownData[0], dropDownData[2]]}
          onChange={::this.onMultiValueChange}
          data={dropDownData}/>`}
                    </pre>
                </div>
            </div>
        )
    }

    renderCustomize() {
        let dropDownData = [
            {label: '奥格瑞玛', value: 'wow'},
            {label: '雷霆崖'},
            {label: '幽暗城'},
            {label: '银月城'},
            {label: '暴风城'},
            {label: '达纳苏斯'}
        ];

        return (
            <div>
                <h3>自定义按钮</h3>
                <p>在 DropDown 组件中传入 children 属性, 会作为自定义按钮, 这种模式下, 值变化不会改变文字内容, 可以通过 onChange 追踪单选框值变化</p>
                <div className="example">
                    <div><DropDown data={dropDownData}>
                        <a href="javascript: void(0);">添加地区</a>
                    </DropDown>
                    </div>
                    <div>
                        <DropDown data={dropDownData} multi>
                            <a href="javascript: void(0);">添加地区多选</a>
                        </DropDown>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`<DropDown data={dropDownData}>
    <a href="javascript: void(0);">添加地区</a>
</DropDown>
<DropDown data={dropDownData} multi>
    <a href="javascript: void(0);">添加地区多选</a>
</DropDown>`}
                    </pre>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="component">
                <h1>下拉菜单</h1>
                {this.renderBasicStyle()}
                {this.renderSingle()}
                {this.renderMulti()}
                {this.renderMultiStage()}
                {this.renderCustomize()}
            </section>
        )
    }
}
