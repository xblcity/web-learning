# 使用webpack定制开发环境

## learn1 使用webpack打包js与less文件

- npm init -y
- yarn add webpack css-loader style-loader less less-loader
- touch app.js index.less webpack.config.js index.html
- webpack配置文件需要使用Common.js模块规范，ES6模块无法使用,但是其他文件如app.js可以使用ES6语法
- 执行webpack命令，打包出bundle.js文件，webpack可以识别出es6语法
- 浏览器打开index.html，样式加载成功

现在我们想把ES6语法打包出更多浏览器支持ES5语法(或一些ES6语法)，需要

- yarn add @babel/core babel-loader @babel/preset-env
- 配置babel-loader，然后新建.babelrc配置项，告诉babal需要兼容到何种程度等等

## learn2 使用webpack打包jsx语法的js文件

结上部分  
- yarn add @babel-preset-react
- 配置.babelrc的plugin数组，添加如下
```js
{
  "presets": [
      ["@babel/preset-env", {
          "targets": {
              "browsers": ["last 2 versions"]
          }
      }],
      [
        "@babel/preset-react",
        {
          "pragma": "dom", // default pragma is React.createElement
          "pragmaFrag": "DomFrag", // default is React.Fragment
          "throwIfNamespace": false // defaults to true
        }
      ]
  ]
}
```
注意，上面的是copy官网的配置，在@babel/preset-react 中把pragma以及 pragmaFrag字段改成后面注释的字段

docuemnt.getElementById()要与html的节点id对应，其次,引入的ReactDOM注意大小写, om大小写都可以

- webpack更新loader选项 
```js
{
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
```

使用url-loader以及include，Path.resolve()改进loader

webpack容易写错的部分，output的是filename以及path，不是pathname  
webpack module rules 里面书写的是loaders的规则，是module底下而非plugin下面，也不是loader下面

注意：rules之下的规则，test后面跟正则表达式，就不用加双引号了！！

构建完成的script文件要放在id为app的div下面

如果使用了babel-loader处理包含jsx语法的js文件，那就必须要配置.babelrc里面的preset选项，preset-react，但是preset-env可以配置，也可以配置，作用是选择要兼容的程度

使用Img添加图片，webpack会使用url-loader进行解析
```js

```