// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: './src/Index',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    filename: 'bundle.js',
    path: 'build',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },

      {
        test: /\.jsx$/,
        loaders: ['jsx-loader', 'babel?cacheDirectory']
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ]
}
