module.exports = [
  {
    test: /\.ts(x?)/,
    // exclude与include只需要配置一个就可以了
    exclude: /(nodule_modules)/,
    use: [
      // use这里我们用了一个数组，意思是要有多个loader来处理 .js(x)后缀结尾的文件
      'babel-loader?cacheDirectory=true',
    ],
  },
]