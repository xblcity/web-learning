# ToyReact

## 安装基础依赖

```js
yarn add webpack @babel/core @babel/plugin-transform-react-jsx @babel/preset-env babel-loader webpack
```

## 基础文件

```bash
--dist
    main.js # webpack-babel转换后的文件
--main.js # 写JSX的文件
--ToyReact # toyReact核心实现文件
--webpack.config.js # webpack配置文件
```

## babel 的转换

`ToyReact` 主要提供两个方法，来供 `babel` 进行转换
