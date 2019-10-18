const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    test1: './src/test1',
    test2: './src/test2',
    test3: './src/test3',
    test4: './src/test4',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'test1.html',
      title: 'simple-react',
      chunks: ['vendors', 'test1']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'test2.html',
      title: 'simple-react',
      chunks: ['test2', 'vendors']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'test3.html',
      title: '组件添加state与props',
      chunks: ['test3', 'vendors']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'test4.html',
      title: '组件添加生命周期',
      chunks: ['test4', 'vendors']
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      minSize: 30000,
      maxSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}