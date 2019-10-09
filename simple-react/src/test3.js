// component props与state的实现

// import React, {Component} from 'react'

// class A extends Component {
//   render() {
//     return <div>i am a component</div>
//   }
// }

// ReactDOM.render(<A name='component'/>, document.body)

// A函数继承自Component

import _ from 'lodash'
import { decamelize } from 'humps'

// 定义createElement方法
const React = {
  createElement
}

function createElement(tag, attr, ...child) {
  return {
    nodeName: tag,
    attributes: attr,
    children: child, // 数组
    key: undefined
  }
}

// 构造函数component
function Component(props) {
  this.props = props
  this.state = this.state | {}
}

Component.prototype.setState = function (updateObj) {
  this.state = Object.assign({}, this.state, updateObj)
  _render(this) // 重新渲染
}

const ReactDOM = {
  render
}

// 组件的render方法，也是ReactDOM的render方法
function render(vdom, container) {
  console.log('render的vdom', vdom)
  // attributes: { name: "count" }
  // children: []
  // key: undefined
  // nodeName: ƒ A(props)
  // __proto__: Object
  let component
  if (_.isFunction(vdom.nodeName)) { // 由babel转换过后,nodeName可以是一个函数
    if (vdom.nodeName.prototype.render) { // 如果组件有render方法，说明是有状态组件，class里面的方法是定义在prototype上面的
      component = new vdom.nodeName(vdom.attribute) // 向组件传入props，即组件的属性
      console.log('component', component)
      // A:
      // {
      //   props: undefined,
      //   state: {count: 1},
      //   __proto__: Component
      // }
    } else {
      component = vdom.nodeName(vdom.attribute) // 函数直接执行，不用使用构造函数
    }
  }
  component ? _render(component, container) : _render(vdom, container)
}

// 在 render函数中分离出_render主要是为了让setState也能使用_render
function _render(component, container) {
  console.log(component)
  // A:
  // {
  //   props: undefined,
  //   state: {count: 1},
  //   __proto__: Component
  // }
  const vdom = component.render ? component.render() : component
  if (_.isString(vdom) || _.isNumber(vdom)) { // vdom不是对象而是单纯的string或者number类型变量
    container.innerText = container.innerText + vdom
  }
  const dom = document.createElement(vdom.nodeName)
  for (let attr in dom.attributes) {
    setAttribute(dom, attr)
  }
}

// 处理DOM的属性
function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class'
  }
  if (attr.match(/on\w+/)) { // w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
    const eventName = attr.toLowerCase().substr(2)
    dom.addEventListener(eventName, value)
  } else if (attr === 'style') { // style = {{width: 100, backgroundColor: 'red'}}
    let standardStyle
    let standardStyleContent
    for (let singleStyle in attr) {
      standardStyle = decamelize(singleStyle, { separator: '-' }) // 大写字母转中划线
      value[singleStyle] = _.isNumber(value[singleStyle]) ? value[singleStyle] + 'px' : value[singleStyle]
      standardStyleContent += `${standardStyle}: ${value[singleStyle]};`
    }
    dom.setAttribute(attr, standardStyleContent) // DOM自带的方法
  } else {
    dom.setAttribute(attr, value) // 处理class，等等常规属性
  }
}

// 测试用例
class A extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  click() {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>Click Me!</button>
        <div>{this.props.name}:{this.state.count}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <A name="count" />,
  document.getElementById('root')
)

// 执行render方法，判断A是组件，生成component，并把A的属性当作props传入，再执行_render，_render先把component执行一下render方法，得到正常的DOM节点，最后