/**
 * Created by yixi on 3/30/16.
 */

import React, {Component} from 'react';

import Button from '../baseStyle/button';
import Input from '../baseStyle/input';

import Menu from '../component/menu';
import Modal from '../component/modal';
import Progress from '../component/progress';
import Popconfirm from '../component/popconfirm';
import Select from '../component/select';

export default class main extends Component {
    render() {
        return (
            <div id="mainContent">
                <Button />
                <Input/>
                <Menu />
                <Select />
                <Modal />
                <Popconfirm />
                <Progress />
            </div>
        )
    }
}
