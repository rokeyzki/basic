const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'es6/index': './src/module/es6/entry',
    'design/d1': './src/module/design/d1/entry',
    'api/a1': './src/module/api/a1/entry',
    'api/a2': './src/module/api/a2/entry',
    'api/a3': './src/module/api/a3/entry',
  },

  output: {
    path: './build',
    filename: 'script/[name].min.js',
  },

  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router': 'ReactRouter',
    // 'echarts': true,
    // 'g2': 'G2'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel-loader',
        // ,query: {
        //   presets: ['es2015', 'stage-0'],
        //   // plugins: ['antd']
        // }
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}'),
      },

      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}!less-loader'),
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
