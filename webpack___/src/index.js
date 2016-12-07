import $ from 'jquery';
import {name} from './component'

require('./less/index.less');
require('./animate.css');
//加载到了bootstrap的样式文件
require('bootstrap/dist/css/bootstrap.css');
//创建一个图片
var img = document.createElement('img');
//指定源文件
img.src= require('./imgs/baidu.png');
//指定使用的样式
img.className = 'img-circle';
//把当前的图片插入到当前的文档里
document.body.appendChild(img);
//在代码中能够判断出来当前处于哪个环境 开发环境 还是生产环境
// set ENV=development         echo %ENV%
// export ENV=delopment        echo $ENV
var a=1, b=2,c=3;
var result = a+b;
if(window.___IS_DEV___)
  console.log('res1',result);
result = result +c;
if(window.___IS_DEV___)
  console.log('res2',result);




/*
var xhr = new XMLHttpRequest;
xhr.open('GET','/api/users',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && /2\d{2}/.test(xhr.status)){
        document.write(xhr.responseText);
    }
}
xhr.send();*/
