import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import timg from './timg.jpg'

const element = <div>
  <div>这是react组件</div>
  <img src={timg} alt="图片"/>
</div>

ReactDOM.render(element, document.getElementById('app'))