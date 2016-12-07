/*var date=new Date();
date.setTime(date.getTime()+30*60*1000); //设置date为当前时间+30分
document.cookie="key=value; expires="+date.toGMTString(); //将date赋值给expires*/


var date=new Date();//30秒
date.setTime(date.getTime+30*1000)
document.cookie='key=ycd;expires'+date.toGMTString();




 //设置响应头中Set-Cookie,客户端可以读取到此响应头并将cookie保存在本地
// 这个是原生的种植cookie 
        res.setHeader('Set-Cookie',['age=6','home=beijing']);
// 原生的获取cookie 从请求头里
cookie = req.headers['cookie'];
//-------------------------------使用express框架之后-----------------------------------

    // domain指明了此cookie属于哪个域名
    //res.cookie('name','ycd',{domain:'.ycd.cn'});
     //指定此cookie属于哪个路径
    //res.cookie('name','ycd',{path:'/read2'});
    //指定绝对过期时间
    //res.cookie('name','ycd',{expires:new Date(Date.now()+10*1000);
    //指定相对失效时间
    //res.cookie('name','ycd',{maxAge:10*1000});
    //写入cookie
    res.cookie('name','ycd',{httpOnly:true});
// 获取cookie 从服务器获取cookie 
     req.cookies   req.cookies
    res.send('ok');//send 是可以发送 对象的是 因为express 方法 的 
    res.end // 这个是 可以是字符串 JSON.stringIfy() 和buffer
    fs.readFileSync('1.txt','utf-8');// 读到的东西 肯定是buffer
    fs.setEncoding('utf-8');//
    fs.createReadSteam('1.txt').pipe(res)//
    //----------------------四个对比记忆------------------
    req.cookies
       res.cookie('name','ycd',{httpOnly:true});
// 这个是原生的种植cookie 
        res.setHeader('Set-Cookie',['age=6','home=beijing']);
// 原生的获取cookie 从请求头里
cookie = req.headers['cookie'];
