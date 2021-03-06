const path = require('path')
const srcRoot = path.resolve(__dirname, 'src')

module.exports = {
  // 入口
  entry: {
    App: './src/index.jsx'
  },
  // 打包后的文件及目录
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // 生产环境，初始不设置会报警告
  mode: 'production',
  // 配置基础的loader
  module: {
    // rules是一个数组，因为要配置多个loader
    rules: [
      {
        test: /\.js(x?)/,
        // exclude与include只需要配置一个就可以了
        exclude: /(nodule_modules)/,
        include: srcRoot,
        use: [ // use这里我们用了一个数组，意思是要有多个loader来处理 .js(x)后缀结尾的文件
            'babel-loader'
        ]
      },
      {
        test: /\.less$/,
        include: srcRoot,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 开启css module
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              // javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader',
        include: srcRoot
      }
    ]
  }
}