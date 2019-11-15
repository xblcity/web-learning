const path = require('path')

const srcRoot = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
  }
}