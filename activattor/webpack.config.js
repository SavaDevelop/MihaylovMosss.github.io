const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');//склейка подключаемых массивов и объектов настрокий вэбпака
const pug = require('./webpack/pug');//шаблонизатор
const devserver = require('./webpack/devserver');//сервер наблюдения при разработке
const sass = require('./webpack/sass'); //обработка сасс
const css = require('./webpack/css'); //нормалайз css
const extractCSS = require('./webpack/css.extract');//подгружаем самодостаточный моудль выгрузки css только для буилд
const uglifyJS = require('./webpack/js.uglify');//минификация js
const images = require('./webpack/images');//подгрузка картинок
const bootstrapEntryPoints = require('./webpack/webpack.bootstrap.config.js');
const fonts = require('./webpack/fonts.js'); //fonts and icons

const PATHS = {
    source: path.join(__dirname, './'),
    build: path.join(__dirname, 'build'),
    img: path.join(__dirname, 'img')
};

console.log('===============================================');
console.log('=======================>', process.argv[3], '<==========');
console.log('===============================================');
var bootstrapConfig = (process.argv[3] === 'development') ? bootstrapEntryPoints.dev : bootstrapEntryPoints.prod;

const common = merge([
  {
    entry: {
        'index':    PATHS.source + '/js/base.js'//,
        // 'bootstrap': bootstrapConfig
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js',
        library: 'myapp'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings:false,
            drop_console:true,
            unsafe:true
          },
          minimize: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/desktop.bundles/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'delivery.html',
            chunks: ['delivery'],
            template: PATHS.source + '/desktop.bundles/delivery.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            chunks: ['catalog'],
            template: PATHS.source + '/desktop.bundles/catalog.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news-section.html',
            chunks: ['news-section'],
            template: PATHS.source + '/desktop.bundles/news-section.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blank.html',
            chunks: ['blank'],
            template: PATHS.source + '/desktop.bundles/blank.pug'
        }),
        // данный плагин может объеденять общие для шаблона js
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: "common"
        // }),
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery',
          "window.jQuery": "jquery"
        })
    ]
  },
  pug(),
  images(),
  fonts()
]);


/******************************************/
module.exports = function(env) {
    if (env === 'production') {
        return merge([
          common,
          extractCSS(),
          uglifyJS(),
          css()
        ]);
    }
    if (env === 'development') {
        return merge([
          common,
          devserver(),
          sass(),
          css()
          ]);
    }
};
