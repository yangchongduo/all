/**
 * Created by yixi on 3/30/16.
 */
import React, {Component} from 'react';
import Header from './header';
import Main from './main';
import Menu from './menu';

require('../style/style.scss');

export default class app extends Component {
    render() {
        return (
           <div>
                <Header />
                <Menu />
                <Main />
           </div>
        );
    }
}
