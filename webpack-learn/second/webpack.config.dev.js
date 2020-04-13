//webpack.config.dev.js
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // 可以定位到未被打包之前的文件
    devtool: 'source-map',
    // 配置dev-server
    devServer: {
      contentBase: './dist', // 根目录
      open: true,
      port: '3000', //默认是8080
      stats: "errors-only", //终端仅打印 error
  }
});