/*
* @Author: 12574
* @Date:   2018-10-18 12:00:25
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 11:44:11
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    // 让代码错误提示在具体文件中
    devtool: "inline-source-map",
    mode: 'development',
    /*入口*/
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192   // 小于8k的图片会被转化成base64编码
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // })
    ],
    resolve: {
        alias: {
            api: path.join(__dirname, 'src/api')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 9000,
        inline:true,
        historyApiFallback: true,
        proxy: {
            // "/api": "http://localhost:9000/api/"
        }
    }
};