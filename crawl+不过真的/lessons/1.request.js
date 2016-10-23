//request用于向一个网页发起请求并且得到响应
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//可以实现GBK编码转成utf8编码 后台都是buffer模式的
var iconv = require('iconv-lite');
request({url: 'http://top.baidu.com/buzz?b=618&c=9&fr=topcategory_c9', encoding: null}, function (err, response, body) {//错误处理 响应对象 响应体
    // decode可以把gbk的Buffer对象转成utf8字符串
    var content = iconv.decode(body,'gbk');
    //fs.writeFile('person.html',content);
    var result = content.match(/<a class="list-title".*?>(.+)<\/a>/g);
    // 这个位置需要加g  因为这是全局匹配的问题
    var $ = cheerio.load('<a class="list-title" href="/item/90" age="91"  >张艺兴</a><a class="list-title"  href="/item/92" age="91" >鹿晗</a>');
    //此处不能加 /g
    //如果加了/g则意味着只能得到匹配到的字符串数组，得不到分组信息了
    //如果不加/g,则意味着得到第一个匹配结果，包含分组信息
    var idRex = /\/item\/(\d+)/;
    var items = [];
    $('a').each(function(){
        var $me = $(this);
        var item = {
            name:$me.text().trim(),
            age:$me.attr('age')
        }
        var href = $me.attr('href');//获取 href属性
        var res = href.match(idRex);//匹配ID
        item.id = res[1];
        items.push(item);
    });
    console.log(items);
   // console.log(result);
   //fs.writeFile('persons.html',result);
    //console.log(content);
});
