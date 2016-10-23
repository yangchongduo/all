/**
 * 抓取网页，把网页的内容抓到数据库中
 * 分类 Category {_id,name,url} {name:"偶像",url:'http://top.baidu.com/buzz?b=349&c=2&fr=topcategory_c2'}
 *
 * 电视剧列表
 * ID 名称 URL 分类ID
 * Tv {_id,name,url,cid}
 */
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
process.env.DEBUG = 'crawl:*';
var debug = require('debug')('crawl:read');
//读取分类列表
exports.category = function(url,callback){
    //读取远程地址，不指定编码则得到的body为buffer类型
  request({url:url,encoding:null},function(err,response,body){
      //把原来的GBK编码的Buffer转成utf8格式的字符串
      var content = iconv.decode(body,'gbk');
      var $ = cheerio.load(content);
      var items = [];
      $('.hd .title a').each(function(){
         var $me = $(this);
         var item = {
             name:$me.text(),
             url:'http://top.baidu.com'+$me.attr('href').slice(1)
         }
          var result = item.url.match(/buzz\?b=(\d+)&c=/);
          item.id = result[1];
          debug('读取分类:'+item.name);
          items.push(item);
      });
      //console.log(items);
      callback(null,items);
  })
}
//exports.category('http://top.baidu.com/category?c=2&fr=topindex');
//读取分类下面的电视剧列表
exports.tv = function(url,cid,callback){
    //读取远程地址，不指定编码则得到的body为buffer类型
    request({url:url,encoding:null},function(err,response,body){
        //把原来的GBK编码的Buffer转成utf8格式的字符串
        var content = iconv.decode(body,'gbk');
        var $ = cheerio.load(content);
        var items = [];
        $('.keyword .list-title').each(function(){
            var $me = $(this);
            var item = {
                name:$me.text(),
                url:$me.attr('href'),
                cid:cid //此电视剧的分类ID
            }
            debug('读取电视剧:'+item.name);
            items.push(item);
        });
        callback(null,items);
    })
}
//exports.tv('http://top.baidu.com/buzz?b=466&c=2',466);

