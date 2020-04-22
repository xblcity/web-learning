const path = require('path')
const srcRoot = path.resolve(__dirname, '../../','./src')
const modules = path.resolve(__dirname, '../../', './node_modules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const getLoader = () => {
  if (isDev) {
    return 'style-loader'
  } else {
    return MiniCssExtractPlugin.loader
  }
}

// 当APP_ENV处于undefined状态时，说明处于本地编译不需要单独的css文件以节约时间
// 当APP_ENV为qa或者prod时候，说明处于线上编译，此时需要另外打包css文件
const loader = getLoader()

module.exports = [
  {
    test: /\.(css|less)$/,
    include: [modules, srcRoot],
    use: [
      loader,
      {
        loader: 'css-loader',
        options: {
          // 开启css module
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true
        },
      },
    ],
  },
]