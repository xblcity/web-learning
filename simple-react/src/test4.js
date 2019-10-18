/*
 * @Descripttion: 实现react的生命周期
 * @version:
 * @Author:
 * @Date: 2019-10-11 16:54:41
 * @LastEditors:
 * @LastEditTime: 2019-10-18 17:29:29
 */

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
  _render(this, document.getElementById('app')) // 重新渲染
}

const ReactDOM = {
  render
}

function render(vdom, container) {
  let component
  if (_.isFunction(vdom.nodeName)) { // 由babel转换过后,nodeName可以是一个函数
    if (vdom.nodeName.prototype.render) { // 如果组件有render方法，说明是有状态组件，class里面的方法是定义在prototype上面的
      component = new vdom.nodeName(vdom.attributes) // 这一步只是处理了vdom的
      console.log('component', component)
      // A:
      // {
      //   props: {name: "count"}
      //   state: {count: 1}
      //   __proto__: Component
      // }
    } else {
      component = vdom.nodeName(vdom.attributes) // 无状态组件，函数直接执行，不用使用构造函数
    }
  }
  component ? _render(component, container) : _render(vdom, container)
}

// react生命周期分为三个部分，生成，存在，销毁
// 生命周期放在vdom转换成dom的过程中，需要改造之前的_render方法

function _render(component, container) {
  console.log(`_render的component`, component)
  setProps(component)
  renderComponent(component)
  // return component.base

  const vdom = component.render ? component.render() : component
  console.log('vdom或者render', vdom)
  // attributes: null
  // children: [
  //   { nodeName: "button", attributes: { … }, children: Array(1), key: undefined },
  //   { nodeName: "div", attributes: null, children: Array(3), key: undefined } ]
  // __proto__: Array(0)
  // key: undefined
  // nodeName: "div"
  if (_.isString(vdom) || _.isNumber(vdom)) { // vdom不是对象而是单纯的string或者number类型变量
    container.innerText = container.innerText + vdom
    return // ! 字符串直接处理就返回
  }
  const dom = document.createElement(vdom.nodeName)
  // 1.属性格式化成html支持的格式，vdom到dom的重要一步
  for (let attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr])
  }
  // 2.对于vdom的children，也就是dom的子元素，也需要格式化，父dom更加完善了
  vdom.children && vdom.children.length && vdom.children.forEach(vdomChild => _render(vdomChild, dom)) // 递归
  // 3.对于setState的处理
  if (component.container) {
    component.container.innerHTML = null
    component.container.appendChild(dom)
    return
  }
  component.container = container // 第一次渲染给component增加一个container属性，之后再次验证时，就可以知道该组件不是第一次渲染了
  container.appendChild(dom)
}



function setProps(component) {
  if (component && component.componentWillMount) {
    component.componentWillMount()
  } else if (component.base && component.componentWillReceiveProps) {
    component.componentWillReceiveProps(component.props) // ??
  }
}

function renderComponent(component) {
  // 需要接受参数，确认是否需要更新视图
  if (component.base && component.shouldComponentUpdate) {
    const bool = component.shouldComponentUpdate(component.props, component.state) // 
    if (!bool && bool !== undefined) { // !why?
      return false // 视图不更新
    }
  }
  if (component.base && component.componentWillUpdate) {

  }
  const rendered = component.render ? component.render() : '' // ??
  console.log(rendered)
  const base = '_render(rendered)'  // ??
  // 两个需要渲染的生命周期
  if (component.base && componentDidUpdate) {
    component.componentDidUpdate()
  } else if (component.base && componentDidMount) {
    component.componentDidMount()
  }

  component.base = base // 标识符
}



// 处理DOM的属性
function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class'
  }
  if (attr.match(/on\w+/)) { // w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
    console.log('事件的名字是', attr, '事件节点是', dom, 'value是', value)
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

class A extends Component {
  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps')
  }

  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

class B extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  click() {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.click.bind(this)}>Click Me!</button>
        <A count={this.state.count} />
      </div>
    )
  }
}

ReactDOM.render(
  <B />,
  document.getElementById('root')
)

ReactDOM.render(
  <A name="count" />,
  document.getElementById('app')
)
