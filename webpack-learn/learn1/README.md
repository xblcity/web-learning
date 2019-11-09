# webpack第一步配置

- npm init -y
- yarn add webpack css-loader style-loader less less-loader
- touch app.js index.less webpack.config.js index.html
- webpack配置文件需要使用Common.js模块规范，ES6模块无法使用,但是其他文件如app.js可以使用ES6语法
- 执行webpack命令，打包出bundle.js文件，webpack可以识别出es6语法
- 浏览器打开index.html，样式加载成功

现在我们想把ES6语法打包出更多浏览器支持ES5语法(或一些ES6语法)，需要

- yarn add @babel/core babel-loader @babel/preset-env
- 配置babel-loader，然后新建.babelrc配置项，告诉babal需要兼容到何种程度等等