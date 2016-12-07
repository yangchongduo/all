var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const Nyan = require('nyan-progress-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');
var _ = require('lodash')// 这个应该是开发依赖
/**
 * 标识开发环境和生产环境
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
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
module.exports = {
    postcss:getPostcss(env),
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,// 实时更新
      contentBase: './build',
      port: 8080,
      stats: { colors: true }
    },
    entry: {
      index: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/index.js')
      ],
      vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
      extension: ['', '.jsx', '.js', '.json'],
      // 提高webpack搜索的速度
      alias: { }
    },
    devtool: 'source-map',
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          loaders: ['react-hot', 'babel'],
          exclude: path.resolve(__dirname, 'node_modules')
        },

        {
          test: /\.css/,//处理文件中使用css的问题
          loader: ExtractTextPlugin.extract("style-loader", 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]')
        },
        {
          test: /\.less/,
            // 这种不是引入 是可以require这种  没有postcss
        //  loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            //使用方法:require('./less/index.less');  postcss+less
            //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
            // 下面这个是数组处理的  使用方法:import styles from './class.less'
   /*         loaders:[
                'style',
                'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss',
                'less?{"sourceMap":true}'
            ]*/
   // 这个是非常好的
            loaders:
                [ 'style',
                    'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss',
                    'less?{"sourceMap":true}']
  /*  loader:ExtractTextPlugin.extract('style-loader', 'css-loader!css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader?{"sourceMap":true}')*/
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url?limit=8192'
        },
        {
          test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000"
        }
      ]
    },
    plugins: [
        new Nyan(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      definePlugin,
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
      new HtmlWebpackPlugin({
        title: 'your app title',
        template: './app/index.html',
      }),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        // 这个是做什么用的
      new ExtractTextPlugin("main.css", {
          allChunks: true,
          disable: false
      }),
    ]
};
