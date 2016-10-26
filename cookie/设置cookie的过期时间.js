/*var date=new Date();
date.setTime(date.getTime()+30*60*1000); //设置date为当前时间+30分
document.cookie="key=value; expires="+date.toGMTString(); //将date赋值给expires*/


var date=new Date();//30秒
date.setTime(date.getTime+30*1000)
document.cookie='key=ycd;expires'+date.toGMTString();