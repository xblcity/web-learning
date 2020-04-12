# 使用webpack定制开发环境

[README参考](https://github.com/xblcity/blog/blob/master/fe-engineering/webpack-react.md)

### babel也可以把options直接写在module的rules里面,省略.babelrc文件

要注意的是cacheDirectory选项是webpack babel-loader独有的，不能写在.babelrc的配置文件里面

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          cacheDirectory: true
        }
      }],
      include: srcRoot
    }
  ]
},
```