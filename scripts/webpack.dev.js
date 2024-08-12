const portFinderSync = require('portfinder-sync')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require("webpack-merge")
const commonCfg = require('./webpack.common');
const { package, contentBase, entry } = require('./paths');


const { proxy } = require(package);
const port = portFinderSync.getPort(8000);

module.exports = merge(commonCfg, {
  mode: 'development',
  entry,
  output: {
    path: contentBase,
    filename: './bundle.js',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-source-map',
  devServer: {
    port,
    open: true,
    disableHostCheck: true,
    inline: true,
    proxy
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      }
    }),
  ]
})