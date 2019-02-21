var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './packages/index.js',
    output: {
        path: path.resolve(__dirname, '../dist/lib'),
        publicPath: '/dist/lib/',
        filename: 'mt-lottery.min.js',
        library: 'mt-lottery',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {}
                // other vue-loader options go here
            }
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        },{ 
            test: /\.less$/i,
            use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
        },]
    },
    performance: {
        hints: false
    },
    plugins: [
        new ExtractTextPlugin('./mt-lottery.min.css'),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false
                }
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        })
    ]
}

