//webpack.config.dev.js
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // 可以定位到未被打包之前的文件
    devtool: 'source-map',
    // 配置dev-server
    devServer: {
      contentBase: './src', // 告诉devServer监听哪些文件的变化
      port: '3000', //默认是8080
      quiet: false, //默认不启用
      inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
      stats: "errors-only", //终端仅打印 error
      compress: true //是否启用 gzip 压缩
  }
});