// import webpack from 'webpack'
const path = require('path')

module.exports =   {
  entry: {
    name: './app.js'
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
        // or
        // use: [
        //   {
        //     loader: 'style-loader'
        //   },
        //   {
        //     loader: 'css-loader',
        //     options: {}
        //   },
        //   {
        //     loader: 'less-loader'
        //   },
        // ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // }
    ]
  }
}
