const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV); // 当前环境
console.log(path.resolve(__dirname, '')); // 根目录

const webpackConfig = {
  entry: {
    // 'es6/index': './src/es6/entry',

    // 'api/hello': './src/api/hello/entry',
    // 'api/user/signup': './src/api/user/signup/entry',
    // 'api/user/login': './src/api/user/login/entry',
    // 'api/file': './src/api/file/entry',

    // 'jquery/base': './src/jquery/base/entry',

    'react/hello': './src/react/entry',
    // 'redux/demo': './src/redux/entry',

    // 'example/app': './src/example/app',
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
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!resolve-url!postcss'),
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]-[hash:base64:5]!resolve-url!postcss!sass'),
      },

      {
        test: /\.json$/,
        loader: 'json-loader',
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader?hash=sha512&limit=10000&name=/img/[hash].[ext]',
          // 'img?minimize',
        ],
      },
    ],
  },

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

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ExtractTextPlugin('css/[name].min.css'),
    // new CommonsChunkPlugin('js/common.min.js'),
    new HtmlWebpackPlugin({
      template: 'views/example.ejs',
      favicon: 'src/example/favicon.ico',
      hash: true,
      chunks: ['example/app'],
      title: 'Basic Example',
      env: (process.env.NODE_ENV === 'production') ? 'min.js' : 'js',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  const BannerPlugin = new webpack.BannerPlugin('This file is created by Charles Lim');
  const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
  webpackConfig.plugins.push(BannerPlugin, UglifyJsPlugin);
}

module.exports = webpackConfig;
