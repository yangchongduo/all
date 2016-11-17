/**
 * Created by yixi on 6/27/16.
 */
import React, {Component, PropTypes} from 'react';

import Select from  '../../src/select';

export default class select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            mutilSelected: null
        }
    }

    onSingleSelected(value) {
        console.log(value);
        this.setState({
            selected: value
        })
    }

    onMutilSelected(value) {
        this.setState({
            mutilSelected: value
        })
    }

    renderBasic() {

        let data = [
            {name: '银月城', value: 0, children: [
                {name: '幽暗林地', value: 10},
                {name: '祖阿曼', value: 11}
            ]},
            {name: '奥格瑞玛', value: 1},
            {name: '幽暗城', value: 'group-2', children: [
                {name: '血色修道院', value: 3},
                {name: '提瑞斯法林地', value: 4},
                {name: '幽暗城主城', value: 'group-5', children: [
                    {name: '盗贼区', value: 6},
                    {name: '炼金区', value: 7},
                    {name: '法师区', value: 8},
                    {name: '战士区', value: 9}
                ]}
            ]}
        ];

        return (
            <div>
                <h3>单选</h3>
                <p>这是新的下拉菜单</p>
                <div className="example">
                    <div className="example-content">
                        <Select data={data}
                                defaultValue={1}
                                value={this.state.selected}
                                onChange={::this.onSingleSelected}/>

                        <Select data={data}
                                btnClass="mq-btn-select"
                                defaultValue={'group-5'}
                                value={this.state.selected}
                                onChange={::this.onSingleSelected}/>

                        <p>onChange: {this.state.selected}</p>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`
let data = [
            {name: '银月城', value: 0},
            {name: '奥格瑞玛', value: 1},
            {name: '幽暗城', value: 'group-2', children: [
                {name: '血色修道院', value: 3},
                {name: '提瑞斯法林地', value: 4},
                {name: '幽暗城主城', value: 'group-5', children: [
                    {name: '盗贼区', value: 6},
                    {name: '炼金区', value: 7},
                    {name: '法师区', value: 8},
                    {name: '战士区', value: 9}
                ]}
            ]}
        ];

    <Select data={data}
            defaultValue={1}
            value={this.state.selected}
            onChange={::this.onSingleSelected}/>

    <Select data={data}
            btnClass="mq-btn-select"
            defaultValue={'group-5'}
            value={this.state.selected}
            onChange={::this.onSingleSelected}/>
`}
                        </pre>
                </div>
            </div>
        )
    }

    renderMutil() {

        let data = [
            {name: '银月城', value: 0},
            {name: '奥格瑞玛', value: 1},
            {name: '亡灵领土', value: 'group-2', children: [
                {name: '血色修道院', value: 3},
                {name: '提瑞斯法林地', value: 4},
                {name: '幽暗城主城', value: 'group-5', children: [
                    {name: '盗贼区', value: 6},
                    {name: '炼金区', value: 7},
                    {name: '法师区', value: 8},
                    {name: '战士区', value: 9}
                ]}
            ]},
            {name: '暴风城', value: 10},
            {name: '雷霆崖', value: 11},
            {name: '达纳苏斯', value: 12},
            {name: '铁炉堡', value: 13},
            {name: '卡拉赞', value: 14},
            {name: '达拉然', value: 15},
            {name: '七星殿', value: 16},
            {name: '双月殿', value: 17},
            {name: '沙塔斯', value: 18},
            {name: '十字军', value: 19},
            {name: '银色黎明', value: 20},
            {name: '银色北伐军', value: 21}

        ];

        return (
            <div>
                <h3>多选</h3>
                <h3>这是新的下拉菜单 支持多选</h3>
                <div className="example">
                    <div className="example-content">
                        <Select data={data}
                                multi={true}
                                defaultValue={[0, 3,'group-5']}
                                value={this.state.mutilSelected}
                                onChange={::this.onMutilSelected}/>

                        <Select data={data}
                                position='top'
                                multi={true}
                                btnClass="mq-btn-select"
                                defaultValue={[0, 1]}
                                value={this.state.mutilSelected}
                                onChange={::this.onMutilSelected}/>

                        <Select data={data}
                                multi={true}
                                btnClass="mq-btn-select"
                                defaultValue={[0, 1]}
                                value={this.state.mutilSelected}
                                onChange={::this.onMutilSelected}>
                            <a>自定义按钮</a>
                        </Select>

                       <p>onChange: {JSON.stringify(this.state.mutilSelected)}</p>
                    </div>
                </div>
                <div className="example-code">
                    <pre>
{`<Select data={data}
        multi={true}
        defaultValue={[0, 3,'group-5']}
        value={this.state.mutilSelected}
        onChange={::this.onMutilSelected}/>

<Select data={data}
        multi={true}
        btnClass="mq-btn-select"
        defaultValue={[0, 1]}
        value={this.state.mutilSelected}
        onChange={::this.onMutilSelected}/>`}
                    </pre>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="component">
                <h1>选择器</h1>
                {this.renderBasic()}
                {this.renderMutil()}
            </section>
        );
    }
}
