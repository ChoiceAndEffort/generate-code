/*
 * @Author: suchiva@126.com
 * @Date: 2022-08-15 21:14:40
 * @LastEditors: gonglei
 * @LastEditTime: 2022-10-20 11:53:18
 * @FilePath: /su-micro-web/packages/vue2-sub-web/vue.config.js
 * @Description: vu2
 *
 * @Copyright (c) 2022 by suchiva@126.com, All Rights Reserved.
 */
// 头部引入
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const packageName = require('./package.json').name;

const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const { resolve } = path;

const port = 5001;

module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave: false,
  outputDir: 'dist', // 打包目录
  assetsDir: 'static', // 静态资源
  filenameHashing: true,
  publicPath: '/',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'), // vue-cli5 配置更新
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // contentBase: path.join(__dirname, 'dist'), // vue-cli5 配置更新
    port,
    hot: true,
    // disableHostCheck: true, // vue-cli5 被废弃 配置更新
    historyApiFallback: true,
    allowedHosts: 'all',
    // disableHostCheck: true, // vue-cli5 被废弃 配置更新

    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // 把子应用打包成umd格式
      libraryTarget: 'umd',
      chunkFilename: `${packageName}.js`, // vue-cli5 更新配置
      library: `${packageName}`,
      // jsonpFunction: `webpackJsonp_${name}` // vue-cli5 更新配置
      chunkLoadingGlobal: `webpackJsonp_${packageName}` // window['webpackJsonp_vue2-sub-web']
    },
    plugins: [new NodePolyfillPlugin()]
  }
});
