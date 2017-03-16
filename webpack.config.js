const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'es6/index': './src/module/es6/entry',

    'api/hello': './src/module/api/hello/entry',
    'api/user/signup': './src/module/api/user/signup/entry',
    'api/user/login': './src/module/api/user/login/entry',
    'api/file': './src/module/api/file/entry',

    'jquery/base': './src/module/jquery/base/entry',

    'react/hello': './src/module/react/entry',
    'redux/demo': './src/module/redux/entry',
  },

  output: {
    path: './dist',
    filename: 'script/[name].min.js',
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
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
    new ExtractTextPlugin('style/[name].min.css'),
    // new BannerPlugin('This file is created by Charles Lim'),
    // new CommonsChunkPlugin('script/common.min.js'),
    // new UglifyJsPlugin({compress:{warnings: false}})
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
