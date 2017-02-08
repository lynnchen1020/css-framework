const express = require('express')
const server = express()

const webpack = require('webpack')
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')

// 调用webpack把配置傳給compiler
const compiler = webpack(webpackConfig)
compiler.apply(new DashboardPlugin())

const browserSync = require('browser-sync').create()


const port = 8080

// server.use(express.static('dist'))

// 注册中間件
server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))

// 注册中間件
server.use(webpackHotMiddleware(compiler))

// server.get('/', (req, res) => {
//   res.sendFile(__dirname + 'index.html')
// })

server.listen(port, () => {
  console.log(`webpack dev server listening on port 8080!`)
    browserSync.init({
      open: 'local',
      ui: false,
      notify: false,
      proxy: `localhost:${port}`,
      files: ['./client/SassPattern/*.pug'],
      port: 3000
    })
    console.log(`browserSync is running on prot 3000`)
  })
