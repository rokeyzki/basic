const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

switch (process.env.NODE_ENV) {
  case 'production':
    console.log('webpack 生产环境配置');
    break;
  case 'test':
    console.log('webpack 测试环境配置');
    break;
  case 'development':
    console.log('webpack 开发环境配置');
    break;
  default:
    console.log('webpack 无环境配置');
    break;
}

console.log(path.resolve(__dirname, '')); // __dirname 指的是 webpack.config.js 所在的目录

const webpackConfig = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'es6/index': './es6/entry',
    'ts/index': './ts/app',

    'api/hello': './api/hello/entry',
    'api/user/signup': './api/user/signup/entry',
    'api/user/login': './api/user/login/entry',
    'api/file': './api/file/entry',

    'jquery/base': './jquery/base/entry',

    'react/hello': './react/entry',
    'redux/demo': './redux/entry',
    'example/app': './example/app',

    'vue/index': './vue/main',

    // 'commonjs/require-a': './commonjs/require-a',
    // 'commonjs/require-b': './commonjs/require-b',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].min.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
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
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /(node_modules|dist)/,
        use: 'awesome-typescript-loader',
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            // 'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]-[hash:base64:5]',
            // 'resolve-url-loader',
            'postcss-loader?sourceMap=true',
          ],
        }),
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[local]__[name]-[hash:base64:5]',
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
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?hash=sha512&limit=8192&name=img/[hash].[ext]',
        ],
      },
    ],
  },

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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  webpackConfig.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    axios: 'axios',
    // echarts: true,
    // g2: 'G2',
    vue: 'Vue',
  };
}

if (process.env.NODE_ENV === 'production') {
  const BannerPluginObj = new webpack.BannerPlugin(`This file is created by Charles Lim, Last update: ${new Date().toString()}`);
  const UglifyJsPluginObj = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  });
  const CompressionPluginObj = new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css)$/,
    threshold: 10240,
    minRatio: 0.8,
  });
  webpackConfig.plugins.push(BannerPluginObj, UglifyJsPluginObj, CompressionPluginObj);

  webpack.devtool = false;
}

if (process.env.NODE_ENV === 'development') {
  const BundleAnalyzerPluginObj = new BundleAnalyzerPlugin({
    analyzerPort: 8081,
    openAnalyzer: false,
  });
  webpackConfig.plugins.push(BundleAnalyzerPluginObj);

  webpack.devtool = '#cheap-module-eval-source-map';
}

module.exports = webpackConfig;
