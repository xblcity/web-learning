const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')

const isDev = process.env.NODE_ENV === 'development'

// console.log(process.env.NODE_ENV)
// console.log(optimization)

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: {
    app: resolve('src/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].[chunkhash:4].js', // 添加hash，解决浏览器缓存问题   开发的时候不需要hash值
    chunkFilename: '[name].[chunkhash:4].js', // 模块包的名字，比如page-a,添加hash，解决浏览器缓存问题
    publicPath: '/'
  },
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'source-map' : undefined, // 生产环境不需要source-map
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@components': resolve('src/components'),
    }
  },
  module: {
    rules: [...jsRules, ...styleRules, ...fileRules]
  },
  plugins: [...plugins],
  optimization: isDev ? {} : optimization // 开发的时候不需要优化打包和压缩代码
}