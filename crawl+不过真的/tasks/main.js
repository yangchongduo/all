var debug = require('debug')('crawl:main');
var async = require('async');
var read = require('./read');
var save = require('./save');
/**
 * 1. 读取分类列表
 * 2. 保存分类列表
 * 3. 根据分类的URL读取分类下面的电视剧
 * 4. 保存电视剧
 **/
var categories;
var tvs = [];
async.series([
    function(cb){//读取分类
        read.category('http://top.baidu.com/category?c=2&fr=topindex',function(err,items){
            categories = items;
            cb();
        })
    },
    //保存分类之后要返回新的带有生成的_id的分类列表
    function(cb){//保存分类
        save.category(categories,function(err,items){
            categories = items;
            cb();
        });
    },
    function(cb){//读取电视剧列表
        async.forEach(categories,function(category,next){
            read.tv(category.url,category._id,function(err,items){
            tvs = [...tvs,...items];
                next();
            })
        },cb)
    },
    function(cb){//保存电视剧列表
        save.tv(tvs,cb)
    }
],function(err,result){
    debug('所有的任务执行完毕!');
})