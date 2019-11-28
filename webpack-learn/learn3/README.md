# 渐进配置所需环境

## ES6

```js
yarn add webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

配置

```js
module: {
  rules: [
    {
      test: /\.js$/,
      // use: [{
      //   loader: 'babel-loader',
      // }]
      // use: ['babel-loader']
      // loader: 'babel-loader'
    }
  ]
}
```

.babelrc

注意babel@7与babel6版本的配置的名字的差异

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      // {
      //   "polyfill": false  // 已废弃
      // } 
    ]
   ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    // "stage-2",
    // react"
  ]
}
```