# 使用webpack定制开发环境

## 1. learn1 使用webpack打包js与less文件

- npm init -y
- yarn add webpack css-loader style-loader less less-loader
- touch app.js index.less webpack.config.js index.html
- webpack配置文件需要使用Common.js模块规范，ES6模块无法使用,但是其他文件如app.js可以使用ES6语法
- 执行webpack命令，打包出bundle.js文件，webpack可以识别出es6语法
- 浏览器打开index.html，样式加载成功

现在我们想把ES6语法打包出更多浏览器支持ES5语法(或一些ES6语法)，需要

- yarn add @babel/core babel-loader @babel/preset-env
- 配置babel-loader，然后新建.babelrc配置项，告诉babel需要兼容到何种程度等等

## 2. learn2 使用webpack打包jsx语法的js文件，并使用live reloading

安装一个用于解析jsx语法的babel插件 
- yarn add @babel-preset-react
- 配置.babelrc的plugin数组，添加如下
```js
{
  "presets": [
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

#### js文件注意点
docuemnt.getElementById()要与html的节点id对应，其次,引入的ReactDOM注意大小写, om大小写都可以

#### webpack配置文件注意点
- webpack容易写错的部分，output的是filename以及path，不是pathname
- webpack module rules 里面书写的是loader的规则，是module底下而非plugin下面，也不是loader下面
- 注意：rules之下的规则，test后面跟正则表达式，就不用加双引号了！！
- 添加mode，让webpack打包时进行相应的优化

#### 构建时注意点
- 构建完成的script文件要放在id为app的div下面

#### 其他建议
- 如果使用了babel-loader处理包含jsx语法的js文件，那就必须要配置.babelrc里面的preset选项，preset-react，但是preset-env可以配置，也可以配置，作用是选择要兼容浏览器支持语法的程度
- 使用url-loader以及include(loader处理文件的范围)，path.resolve()改进loader

#### 在package.json加入webpack命令
- 在script直接添加 `build: webpack --config webpack.config.js`这段即可，前提是需要安装webpack-cli包以及全局安装过webpack

### 继续添加插件 url-loader
- 使用Img添加图片，webpack会使用url-loader进行解析

### 添加插件html-webpack-plugin
这个可以在build之后生成html文件，并自动引入bundle包，且可以指定要用的模板

### 通过 webpack-dev-server 进行实时更新
这里先分离出dev以及build两个webpack配置文件，并在package.json指定dev以及Build命令所用的配置

`yarn add webpack-dev-server` 并在webpack.config.dev.js配置devServer选项(这个可以不用配置，有需要再配置)

在script中配置`webpack-dev-server --open`,,***要注意的是，需要把webppack这个命令删除，直接替换成webpack-dev-server***

```js
// before
webpack --config webpack.config.dev.js --mode=development
// after
webpack-dev-server --open --config webpack.config.dev.js --mode=development
```

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