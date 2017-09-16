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
  externals: {
    react: "react",
    redux: "redux",
    "react-redux": "react-redux"
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
