const path = require('path')

module.exports = {
  entry: {
    app: './src/test'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'simpleReact.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader'
      }
    ]
  }
}