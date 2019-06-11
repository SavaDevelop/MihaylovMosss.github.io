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
// const bootstrapEntryPoints = require('./webpack/webpack.bootstrap.config.js');
const fonts = require('./webpack/fonts.js'); //fonts and icons

const PATHS = {
    source: path.join(__dirname, './'),
    build: path.join(__dirname, 'build'),
    img: path.join(__dirname, 'img')
};

console.log('===============================================');
console.log('=======================>', process.argv[3], '<==========');
console.log('===============================================');
// var bootstrapConfig = (process.argv[3] === 'development') ? bootstrapEntryPoints.dev : bootstrapEntryPoints.prod;

const common = merge([
  {
    entry: {
        'about':  PATHS.source + '/desktop.bundles/about/about.js',
        'application-accepted':  PATHS.source + '/desktop.bundles/application-accepted/application-accepted.js',
        'application-details':  PATHS.source + '/desktop.bundles/application-details/application-details.js',
        'basket':  PATHS.source + '/desktop.bundles/basket/basket.js',
        'blank':  PATHS.source + '/desktop.bundles/blank/blank.js',
        'card-product':  PATHS.source + '/desktop.bundles/card-product/card-product.js',
        'catalog':  PATHS.source + '/desktop.bundles/catalog/catalog.js',
        'check-in':  PATHS.source + '/desktop.bundles/check-in/check-in.js',
        'compare':  PATHS.source + '/desktop.bundles/compare/compare.js',
        'contacts':  PATHS.source + '/desktop.bundles/contacts/contacts.js',
        'credit':  PATHS.source + '/desktop.bundles/credit/credit.js',
        'delivery':  PATHS.source + '/desktop.bundles/delivery/delivery.js',
        'entrance':  PATHS.source + '/desktop.bundles/entrance/entrance.js',
        'favorites':  PATHS.source + '/desktop.bundles/favorites/favorites.js',
        'index':  PATHS.source + '/desktop.bundles/index/index.js',
        'installment':  PATHS.source + '/desktop.bundles/installment/installment.js',
        'news-section':  PATHS.source + '/desktop.bundles/news-section/news-section.js',
        'news-single':  PATHS.source + '/desktop.bundles/news-single/news-single.js',
        'order':  PATHS.source + '/desktop.bundles/order/order.js',
        'partnership':  PATHS.source + '/desktop.bundles/partnership/partnership.js',
        'password-recovery':  PATHS.source + '/desktop.bundles/password-recovery/password-recovery.js',
        'password-recovery-answer':  PATHS.source + '/desktop.bundles/password-recovery-answer/password-recovery-answer.js',
        'privacy-policy':  PATHS.source + '/desktop.bundles/privacy-policy/privacy-policy.js',
        'purchase':  PATHS.source + '/desktop.bundles/purchase/purchase.js',
        'search':  PATHS.source + '/desktop.bundles/search/search.js',
        'site-map':  PATHS.source + '/desktop.bundles/site-map/site-map.js',
        'stock':  PATHS.source + '/desktop.bundles/stock/stock.js',
        'stocks':  PATHS.source + '/desktop.bundles/stocks/stocks.js',
        'test':    PATHS.source + '/desktop.bundles/test/test.js',
        'ui-kit':    PATHS.source + '/desktop.bundles/ui-kit/ui-kit.js'
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
            filename: 'about.html',
            chunks: ['about'],
            template: PATHS.source + '/desktop.bundles/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'application-accepted.html',
            chunks: ['application-accepted'],
            template: PATHS.source + '/desktop.bundles/application-accepted/application-accepted.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'application-details.html',
            chunks: ['application-details'],
            template: PATHS.source + '/desktop.bundles/application-details/application-details.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'basket.html',
            chunks: ['basket'],
            template: PATHS.source + '/desktop.bundles/basket/basket.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blank.html',
            chunks: ['blank'],
            template: PATHS.source + '/desktop.bundles/blank/blank.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'card-product.html',
            chunks: ['card-product'],
            template: PATHS.source + '/desktop.bundles/card-product/card-product.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'catalog.html',
            chunks: ['catalog'],
            template: PATHS.source + '/desktop.bundles/catalog/catalog.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'check-in.html',
            chunks: ['check-in'],
            template: PATHS.source + '/desktop.bundles/check-in/check-in.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'compare.html',
            chunks: ['compare'],
            template: PATHS.source + '/desktop.bundles/compare/compare.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            chunks: ['contacts'],
            template: PATHS.source + '/desktop.bundles/contacts/contacts.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'credit.html',
            chunks: ['credit'],
            template: PATHS.source + '/desktop.bundles/credit/credit.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'delivery.html',
            chunks: ['delivery'],
            template: PATHS.source + '/desktop.bundles/delivery/delivery.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'entrance.html',
            chunks: ['entrance'],
            template: PATHS.source + '/desktop.bundles/entrance/entrance.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'favorites.html',
            chunks: ['favorites'],
            template: PATHS.source + '/desktop.bundles/favorites/favorites.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/desktop.bundles/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'installment.html',
            chunks: ['installment'],
            template: PATHS.source + '/desktop.bundles/installment/installment.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news-section.html',
            chunks: ['news-section'],
            template: PATHS.source + '/desktop.bundles/news-section/news-section.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'news-single.html',
            chunks: ['news-single'],
            template: PATHS.source + '/desktop.bundles/news-single/news-single.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'order.html',
            chunks: ['order'],
            template: PATHS.source + '/desktop.bundles/order/order.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'partnership.html',
            chunks: ['partnership'],
            template: PATHS.source + '/desktop.bundles/partnership/partnership.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'password-recovery.html',
            chunks: ['password-recovery'],
            template: PATHS.source + '/desktop.bundles/password-recovery/password-recovery.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'password-recovery-answer.html',
            chunks: ['password-recovery-answer'],
            template: PATHS.source + '/desktop.bundles/password-recovery-answer/password-recovery-answer.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'privacy-policy.html',
            chunks: ['privacy-policy'],
            template: PATHS.source + '/desktop.bundles/privacy-policy/privacy-policy.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'purchase.html',
            chunks: ['purchase'],
            template: PATHS.source + '/desktop.bundles/purchase/purchase.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            chunks: ['search'],
            template: PATHS.source + '/desktop.bundles/search/search.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'site-map.html',
            chunks: ['site-map'],
            template: PATHS.source + '/desktop.bundles/site-map/site-map.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'stock.html',
            chunks: ['stock'],
            template: PATHS.source + '/desktop.bundles/stock/stock.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'stocks.html',
            chunks: ['stocks'],
            template: PATHS.source + '/desktop.bundles/stocks/stocks.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            chunks: ['test'],
            template: PATHS.source + '/desktop.bundles/test/test.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit.html',
            chunks: ['ui-kit'],
            template: PATHS.source + '/desktop.bundles/ui-kit/ui-kit.pug'
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
