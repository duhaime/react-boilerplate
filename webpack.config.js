const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack'); 
const path = require('path');

const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build')
}

const uglifyConfig = {
  sourceMap: false,
  warnings: false,
  mangle: true,
  minimize: true
}

const htmlConfig = {
  template: path.join(paths.src, 'index.html'),
  minify : {
    collapseWhitespace: true
  }
}

const common = {
  entry: path.join(paths.src, 'index.js'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: paths.build,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: false,
          }
        }
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(htmlConfig),
    new ExtractTextPlugin('styles.[contenthash].css'),
  ]
};

const devSettings = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([paths.build]),
  ]
}

const prodSettings = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(uglifyConfig),
    new OptimizeCssAssetsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}

/**
* Exports
**/

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

if (TARGET === 'start') {
  module.exports = merge(common, devSettings)
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(common, prodSettings)
}