var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.json$/,
      loader: 'json',
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    ]
  }
};
