import React from 'react';
import {Header,Footer} from './components';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>
    <Header/>
    <input/>
    <Footer/>
</div>,document.querySelector('#app'));
if(module.hot){
    console.log('module.hot---->',module.hot);
    module.hot.accept()
}



