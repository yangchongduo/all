import React from 'react';
import styles from './index.css'
import assign from 'lodash/assign'
export default class Header extends React.Component{
    componentDidMount(){
        const data=assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
        console.log(data)
    }
    render(){
        return (
            <h1 className={styles.index}>我是头33333</h1>
        )
    }
}