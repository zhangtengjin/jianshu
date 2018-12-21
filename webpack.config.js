/*
* @Author: 12574
* @Date:   2018-10-19 10:34:32
* @Last Modified by:   12574
* @Last Modified time: 2018-10-30 16:51:48
*/

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require('webpack');
module.exports = {
    // 让代码错误提示在具体文件中
    devtool: "cheap-module-source-map",
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
        publicPath : '/',
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
                test: /\.(sass|scss)$/,
                // use: [
                //     'style-loader',
                //     MiniCssExtractPlugin.loader,
                //     {
                //       loader: "css-loader",
                //       options: {
                //         sourceMap: true
                //       }
                //     },
                //     {
                //       loader: "sass-loader",
                //       options: {
                //         sourceMap: true,
                //         sourceMapContents: true
                //       }
                //     }
                // ]
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192   // 小于8k的图片会被转化成base64编码
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new MiniCssExtractPlugin({
            //提取为外部css代码
            filename: "[name].css?v=[contenthash]"
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};