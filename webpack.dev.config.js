
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const publicPath = ''
const webPackMiddleware = 'webpack-hot-middleware/client?reload=true'
const lost = require('lost')
const autoprefixer = require('autoprefixer')

const postcss = require('postcss')
const sprites = require('postcss-sprites')
const updateRule = require('postcss-sprites/lib/core').updateRule

// const opts = {
//     stylesheetPath: './client/SassPattern/src/sass',
//     spritePath: './client/SassPattern/src/img/icons/',
//     hooks: {
//         onUpdateRule: function(rule, token, image) {
//             // Use built-in logic for background-image & background-position
//             updateRule(rule, token, image)
//             let width, height
//             ['width', 'height'].forEach(function(prop) {
//                 rule.insertAfter(rule.last, postcss.decl({
//                     prop: prop,
//                     value: image.coords[prop] + 'px'
//                 }))
//             })
//         }
//     }
// }



const config = {
  entry: [
    path.resolve(__dirname, 'client/SassPattern/src'),
    webPackMiddleware
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
        loader: 'style!css!postcss!sass'
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
      autoprefixer, lost
      // autoprefixer, sprites(opts), lost
    ]
  },
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/SassPattern/index.pug',
      filename: 'index.html'
    }),
    // new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
