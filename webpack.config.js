module.exports = {
  entry: {
    index: './entry/index.entry.js',
    // other: './components/other.entry.js'
  },
  output: {
    path: './build',
    filename: 'script/[name].min.js'
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router': 'ReactRouter',
    // 'echarts': true,
    // 'g2': 'G2'
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/, // 只针对js文件
    //     loader: 'eslint', // 指定启用eslint-loader
    //     exclude: /node_modules/
    //   }
    // ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          // plugins: ['antd']
        }
      }
      // ,{
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}')
      // }
      // ,{
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 versions", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]}!less-loader')
      // }
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

    // postLoaders: [ // 为了兼容IE8
    //   {
    //     test: /\.js$/,
    //     loaders: ['es3ify-loader'], // sudo npm install es3ify-loader
    //   },
    // ],
  },

  plugins: [
    // new ExtractTextPlugin('style/[name].min.css'),
    // new BannerPlugin('This file is created by Charles Lim'),
    // new CommonsChunkPlugin('script/common.min.js'),
    // new UglifyJsPlugin({compress:{warnings: false}})
  ],

  // eslint: {
  //   failOnWarning: true, // eslint报warning了就终止webpack编译
  //   failOnError: true, // eslint报error了就终止webpack编译
  //   cache: true, // 开启eslint的cache，cache存在node_modules/.cache目录里
  // },

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
