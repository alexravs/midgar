var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static/'
  },
  plugins: [
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify('production')
       }
     })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.json$/,
      loader: 'json',
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff" },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  }
};
