const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  new HtmlWebpackPlugin({
    template: 'build/template/index.html',
    filename: 'index.html', //打包后的文件名
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[name].[contenthash].css'
  }),
  new CleanWebpackPlugin(),
  new BundleAnalyzerPlugin()
]