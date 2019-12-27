import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import timg from './timg.jpg'

// preset-env 不支持
// class A {
//   s = 1
// }
// console.log(A)

const element = <div>
  <div>这是react组件</div>
  <div>下面是一个图片</div>
  <img src={timg} alt="图片" />
</div>

ReactDOM.render(element, document.getElementById('app'))