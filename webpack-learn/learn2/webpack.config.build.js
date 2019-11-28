const path = require('path')
// const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const srcRoot = path.resolve(__dirname, 'src')

// 为多页面应用生成入口文件
// function getEntry() {
//   let entryMap = {}
//   fs.readdirSync().forEach((pathname) => {
//     let fullPathName = path.resolve(pageDir, pathname)
//     let stat
//   })
// }

module.exports = {
  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    // publicPath: 'http:/baidu.com/static/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: srcRoot
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: srcRoot
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader',
        include: srcRoot
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}