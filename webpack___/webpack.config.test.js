const webpack=require('webpack');
const path=require('path');// 是处理路径的 url是处理url的 两这不一样
var jqueryPath = path.resolve('node_modules/jquery/dist/jquery.js');
//自动打开浏览器
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
//根据不同的数据产生不同的页面 通过数据数据
//根据模板的HTML文件向目标文件夹自动生成一个目标html文件
//会把产出(打包后)的JS文件插入到html当中去
var htmlWebpackPlugin = require('html-webpack-plugin');
// 我要分dev 还是prod 要定义全局的变量
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
var autoprefixer = require('autoprefixer');
var env = 'env';
var getPostcss = function (env) {
    var postcss = [
        autoprefixer({browers: ['last 2 versions', 'ie >= 9', '> 5% in CN']}),
    ];
    if (env == 'production') {
        // 线上模式的配置，css压缩
        return function () {
            return _.union([
                cssnano({
                    // 关闭cssnano的autoprefixer选项，不然会和前面的autoprefixer冲突
                    autoprefixer: false,
                    reduceIdents: false,
                    zindex: false,
                    discardUnused: false,
                    mergeIdents: false
                })
            ], postcss);
        };
    } else {
        return function () {
            return _.union([], postcss);
        }
    }
};
module.exports={
    postcss:getPostcss(env),
    devtool: 'source-map',//这样我们就可以在浏览器中直接调试我们的源码，在控制台的sources下，点开可以看到webpack://目录，点开有惊喜哦。
    entry:{},
    output:{},
    resolve:{//加快webpack构建的速度 自己加后缀名
        //指定扩展名
        extensions:['','.js','.css','.json'],
        alias:{
            'jquery':jqueryPath //直接到到这个里面找每当 "jquery" 在代码中被引入，它会使用压缩后的 文件，而不是到 node_modules 中找。 2.每当 Webpack 尝试去解析那个压缩后的文件，我们阻止它，因为这不必要。
        }
    },
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
                //loader:'style!css'
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
        noParse: [jqueryPath]
    },

    devServer:{ //可以替代express 这个
        hot:true,
        inline:true,
        stats:{colors:true},//是否显示颜色
        port:8080,//端口号
        contentBase:'build',//静态文件根目录
        proxy:[// 怎么mock数据呢 可以用proxy就可以了  这个现在不经常用 这是肯定的需要用mock
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
    plugins:[
        definePlugin,//定义全局变量插件
        new ExtractTextWebpackPlugin('bundle.css'),
        // 产出一个共有的js
        new webpack.optimize.CommonsChunkPlugin('common.js'),
       new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title:'Webpack',//这是标题
            template:'./src/index.html', // 模板
            filename:'./b.html', //文件的名字
            chunks:['b','common.js']// 产出
        }),

        new webpack.BannerPlugin('version:1.0.0  \nauth:yangchongduo@le.com'), //增加注释
        //自动打开浏览器
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        }),
        // 以下每次都加
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
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1.5,
            moveToParents: true
        }),
    ],
}