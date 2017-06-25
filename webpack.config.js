const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV); // 当前环境
console.log(path.resolve(__dirname, '')); // __dirname 指的是 webpack.config.js 所在的目录

const webpackConfig = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'es6/index': './es6/entry',

    'api/hello': './api/hello/entry',
    'api/user/signup': './api/user/signup/entry',
    'api/user/login': './api/user/login/entry',
    'api/file': './api/file/entry',

    'jquery/base': './jquery/base/entry',

    'react/hello': './react/entry',
    'redux/demo': './redux/entry',
    'example/app': './example/app',

    'vue/index': './vue/main',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].min.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    axios: 'axios',
    // echarts: true,
    // g2: 'G2',
    vue: 'Vue',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },

      {
        test: /\.vue$/,
        exclude: /(node_modules|dist)/,
        use: 'vue-loader',
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[local]__[name]-[hash:base64:5]',
            'resolve-url-loader',
            'postcss-loader?sourceMap=true',
          ],
        }),
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[local]__[name]-[hash:base64:5]',
            'resolve-url-loader',
            'postcss-loader?sourceMap=true',
            'sass-loader',
          ],
        }),
      },

      {
        test: /\.json$/,
        use: 'json-loader',
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'url-loader?hash=sha512&limit=8192&name=img/[hash].[ext]',
          // 'img?minimize',
        ],
      },

      {
        test: /\.svg$/,
        use: [
          'svg-inline-loader?classPrefix',
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
      template: '../views/example.ejs',
      favicon: './example/favicon.ico',
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
