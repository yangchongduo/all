module.exports = {
    output:
    { filename: '[name].[hash].js',
        path: 'E:\\code\\new_third\\sense\\dist',
        publicPath: '/' },
    module: { loaders:
        [ { test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: { cacheDirectory: true, plugins: [Object], presets: [Object] } },
            { test: /\.json$/, loader: 'json' },
            { test: /\.less$/,
                include: /(E\:\\code\\new_third\\sense\\src)/,
                loaders:
                    [ 'style',
                        'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'postcss',
                        'less?{"sourceMap":true,"modifyVars":{"primary-color":"#BE1E50","link-color":"#BE1E50","border-radius-base":"3px","border-radius-s":"1px"}}' ] },
            { test: /\.css$/,
                include: /(E\:\\code\\new_third\\sense\\src)/,
                loaders:
                    [ 'style',
                        'css?sourceMap&-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'postcss' ] },
            { test: /\.less$/,
                exclude: /(E\:\\code\\new_third\\sense\\src)/,
                loaders:
                    [ 'style',
                        'css?sourceMap&-minimize',
                        'postcss',
                        'less?{"sourceMap":true,"modifyVars":{"primary-color":"#BE1E50","link-color":"#BE1E50","border-radius-base":"3px","border-radius-s":"1px"}}' ] },
            { test: /\.css$/,
                exclude: /(E\:\\code\\new_third\\sense\\src)/,
                loaders: [ 'style', 'css?sourceMap&-minimize', 'postcss' ] },
            { test: /\.woff(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/,
                loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/,
                loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/,
                loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
            { test: /\.svg$/, loader: 'react-svg?es5=1' },
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' } ]
    },


}

}
