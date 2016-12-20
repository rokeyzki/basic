const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'es6/index': './src/module/es6/entry',
    'api/hello': './src/module/api/hello/entry',
    'api/user/signup': './src/module/api/user/signup/entry',
    'api/user/login': './src/module/api/user/login/entry',
    'api/file': './src/module/api/file/entry',
    'design/d1': './src/module/design/d1/entry',
    'manage/hello': './src/module/manage/entry',
    'state/demo': './src/module/state/entry',
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
    // 'react-router': 'ReactRouter',
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader'),
      },

      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader'),
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader'),
      },

      // ,{
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'url-loader?hash=sha512&limit=10000&name=img/[hash].[ext]',
      //     'img?minimize'
      //   ]
      // }
      // ,{
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // }
    ],

    postLoaders: [ // 为了兼容IE8
      // {
      //   test: /\.js$/,
      //   loaders: ['es3ify-loader'], // sudo npm install es3ify-loader
      // },
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
