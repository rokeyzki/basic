const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(process.env.NODE_ENV); // 当前环境
console.log(path.resolve(__dirname, '')); // 根目录

module.exports = {
  entry: {
    'es6/index': './src/es6/entry',

    'api/hello': './src/api/hello/entry',
    'api/user/signup': './src/api/user/signup/entry',
    'api/user/login': './src/api/user/login/entry',
    'api/file': './src/api/file/entry',

    'jquery/base': './src/jquery/base/entry',

    'react/hello': './src/react/entry',
    'redux/demo': './src/redux/entry',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    // echarts: true,
    // g2: 'G2',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel-loader',
      },

      {
        test: /\.jsx$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel-loader',
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!postcss'),
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!postcss!sass'),
      },

      {
        test: /\.json$/,
        loader: 'json-loader',
      },

      // ,{
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'url-loader?hash=sha512&limit=10000&name=img/[hash].[ext]',
      //     'img?minimize'
      //   ]
      // }
    ],
  },

  plugins: [
    new ExtractTextPlugin('css/[name].min.css'),
    new webpack.BannerPlugin('This file is created by Charles Lim'),
    // new CommonsChunkPlugin('js/common.min.js'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],

  // imagemin: {
  //   gifsicle: { interlaced: false },
  //   jpegtran: {
  //     progressive: true,
  //     arithmetic: false
  //   },
  //   optipng: { optimizationLevel: 5 },
  //   pngquant: {
  //     floyd: 0.5,
  //     speed: 2
  //   },
  //   svgo: {
  //     plugins: [
  //       { removeTitle: true },
  //       { convertPathData: false }
  //     ]
  //   }
  // }
};
