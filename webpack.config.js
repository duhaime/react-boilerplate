// webpack.config.js
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var data = require('./data');

var TARGET = process.env.npm_lifecycle_event;

var PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules')
};

// Define configuration options common to
// development and production environments
var common = {

  entry: {
    app: PATHS.app + "/Index"
  },

  // Use the history api fallback so React routes
  // are obeyed
  devServer: {
    historyApiFallback: true
  },

  // Specify which assets webpack should load
  // '' allows files without an extension
  // to be loaded
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  // Specify where compiled assets will be bundled
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  // Include loaders for styles and jsx
  // the include param specifies the location
  // of files to be loaded (a subdomain of PATHS)
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // Leverage caching for better performance
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
}

// Development configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {

    // Enable sourcemaps for debugging
    devtool: 'eval-source-map',

    // Configure server
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback to facilitate
      // API-based routing.
      historyAPIFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to minimize output
      stats: 'errors-only',

      // When using Vagrant or other VM, set:
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default
      host: process.env.HOST,
      port: process.env.PORT
    },

    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: [PATHS.app, PATHS.node_modules]
        }
      ]
    },

    plugins: [

      // Use hot module replacement
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

// Production configuration
if(TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {

    entry: PATHS.app + '/index',
    output: {
      path: PATHS.build,
      filename: 'bundle.js',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract(
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
          ),
          include: PATHS.app
        },
        {
          test: /\.js/,
          loader: 'babel',
          include: PATHS.app
        },
        {
          test: /\.(jpg|png)/,
          loader: 'file-loader?name=assets/img-[hash:6].[ext]',
          include: PATHS.app
        }
      ],
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      new StaticSiteGeneratorPlugin('main', data.routes, data),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ]
  })
};
