
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const publicPath = ''
const autoprefixer = require('autoprefixer')

const postcss = require('postcss')


module.exports = {
  entry: [
    path.resolve(__dirname, 'client/SassPattern/src')
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: publicPath
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(eot|woff|ttf|svg|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: () => {
    return [
      autoprefixer
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/SassPattern/index.pug',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
  ]
}
