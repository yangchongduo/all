// 版本号的概念
/*
 * 一共三个数1:是重构而 2:兼容的基础上增加新的功能3:修改bug
 * */
var path = require('path');
var webpack = require('webpack');
var pkg=require('./package.json')//这样可以引入文件
var jqueryPath = path.resolve('node_modules/jquery/dist/jquery.js');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
//定义全局变量插件 window.___DEV___ =
var definePlugin = new webpack.DefinePlugin({
    ___IS_DEV___:(process.env.BUILD_ENV?process.env.BUILD_ENV.trim():'') == 'dev'
})
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
//指定替换规则
function rewriteUrl(replacePath){
  return function(req,options){
      //取得问号的索引
      var queryIndex = req.url.indexOf('?');
      //取得查询字符串
      var query =  queryIndex>=0?req.url.slice(queryIndex):'';
      //进行路径的替换
      req.url = req.path.replace(options.path,replacePath)+query;
      console.log(req.url);
  }
}

module.exports = {
    //指定入口文件
    entry:{
        'index':path.resolve('src/index.js'),
        //多入口文件
        /*'a':path.resolve('src/a.js'),
        'b':path.resolve('src/b.js')*/
    },
    //指定输出文件
    output:{
        //指定输出文件的路径目录
        path:path.resolve('build'),
        //指定输出文件的文件名
        filename:'[name].[hash:5].js'
    },
    devServer:{
      inline:true,
      stats:{colors:true},//是否显示颜色
      port:8080,//端口号
      contentBase:'build',//静态文件根目录
      proxy:[// proxy 之前都是用代理现在都是 mock吗 有什么不同
          {
              path:/^\/api\/(.+)/,//我要替换的路径
              //目标服务，把此请求交给哪个服务器来处理
              target:'http://localhost:9090',
              // 指定路径 的替换规则
              rewrite:rewriteUrl('/$1\.json'),
              changeorigin:true
          }
      ]
    },
    //指定如何解析加载模块
    resolve:{
      //指定扩展名
      extensions:['','.js','.css','.json'],
      alias:{
          'jquery':jqueryPath
      }
    },
    //指定模块的加载方式  现在这loaders 绝对是ok的
    module:{
        //模块加载器数组
        loaders:[
            //指定针对不同的文件如何进行加载
            {
                test:/\.js$/,
                // babel-loader可以简写成babel
                loader:'babel',
                //只解析加载src 目录下的js文件
                include:path.resolve('src'),
                //不解析node_modules文件下面的文件
                exclude:/node_modules/
            },
            {
                //加载以less后缀结尾的文件
                test:/\.less$/,
                //执行三个加载器
                loader:ExtractTextWebpackPlugin.extract('style','css!less')
                //loader:'style!css!less'
            },
            {
                test:/\.css$/,//加载css的
                loader:ExtractTextWebpackPlugin.extract('style','css')
                //loader:'style!css'  不要指定路线 在js中用到了就可以了
            },
            {
                //加载图标字体
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                loader:'url?limit=8192'
            },
            {
                //图片
                test:/\.(png|jpg|bmp|gif)$/,
                loader:'url?limit=8192'
            },
            //1. 有些插件需要依赖全局的jquery对象 jQuery $
            //2. jquery在所有的模块都要用到
            {
                test:/jquery.js/,
                loader:'expose?$'
            }
        ],
        //不再扫描此路径下面的文件里的依赖模块
        //noParse: [jqueryPath]
    },
    plugins:[
        definePlugin,//定义全局变量插件
        new ExtractTextWebpackPlugin('bundle.css'),
       /* new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),*/
        new webpack.optimize.CommonsChunkPlugin('common.js'),

        new htmlWebpackPlugin({
            title:'Webpack',
            template:'./src/index.html',
            filename:'./a.html',
            chunks:['a','common.js']//包含产出的资源
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.MinChunkSizePlugin({
            compress: {
                warnings: false
            }
        }),
        // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin(),
        // 按引用频度来排序 ID，以便达到减少文件大小的效果
    //    new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
        new htmlWebpackPlugin({
            title:'Webpack',
            template:'./src/index.html',
            filename:'./b.html',
            chunks:['b','common.js']
        }),
        new htmlWebpackPlugin({ // 只会按照产出的资源就行配置
            title:'Webpack',
            template:'./src/index.html',
            filename:'./index.html',
            chunks:['index','common.js']
        }),
     /*   new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080/'
        })*/
    ]
}