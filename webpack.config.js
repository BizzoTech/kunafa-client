const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');


const path = require('path');

if (!debug) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    library: 'kunafa',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: debug
      ? 'js/kunafa.bundle.js'
      : 'js/kunafa.bundle.min.js'
  },
  // externals: {
  //   react: "react",
  //   redux: "redux",
  //   "react-redux": "react-redux",
  //   pouchdb: "pouchdb",
  //   "pouchdb-find": "pouchdb-find",

  // },
  externals: function(context, request, callback) {
    // Absolute & Relative paths are not externals
    if (request.match(/^(\.{0,2})\//)) {
      return callback();
    }

    try {
      // Attempt to resolve the module via Node
      require.resolve(request);
      callback(null, request);
    } catch(e) {
      // Node couldn't find it, so it must be user-aliased
      callback();
    }
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
