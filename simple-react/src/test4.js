/*
 * @Descripttion: 实现react的生命周期
 * @version:
 * @Author:
 * @Date: 2019-10-11 16:54:41
 * @LastEditors:
 * @LastEditTime: 2019-10-21 16:22:14
 */

// 参考这里 https://github.com/hujiulong/blog/issues/5

import _ from 'lodash'
import { decamelize } from 'humps'

// 定义createElement方法
const React = {
  createElement
}

function createElement(tag, attr, ...child) {
  return {
    nodeName: tag,
    attrs: attr,
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
  renderComponent(this); // 重新渲染
}

const ReactDOM = {
  render
}

// 在调用ReactDOM.render(<B/>, document.getElementById('app'))的时候，<B/>已经被转换成document.createElement(B，null)的格式，结果为,{nodeName: B, attrs: null}即虚拟DOM
function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

// 渲染真实dom
function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  if (typeof vnode === 'number') vnode = String(vnode);
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }

  if (typeof vnode.nodeName === 'function') {
    const component = createComponent(vnode.nodeName, vnode.attrs); // 以B为例, createComponent(B, null) ===> {base: div, props: null, state: {count: 1}}
    console.log('createComponent', component)
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  const dom = document.createElement(vnode.nodeName)

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
      console.log('层层递归', dom, key, value)
    });
  }
  vnode.children.forEach(child => render(child, dom));

  return dom;
}

// 创建组件
function createComponent(component, props) {
  let inst;
  // 如果是类定义组件，则直接返回实例
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    console.log('组件实例化', inst)  // {base: div, props: null, state: {count: 1}}
    // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function () {
      return this.constructor(props);
    }
  }
  return inst;
}

// set props
// 其中可以实现componentWillMount，componentWillReceiveProps两个生命周期方法
function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }
  component.props = props;
  renderComponent(component);
}

// renderComponent方法用来渲染组件，setState方法中会直接调用这个方法进行重新渲染，
// 在这个方法里可以实现componentWillUpdate，componentDidUpdate，componentDidMount几个生命周期方法。
function renderComponent(component) {
  let base;
  const renderer = component.render();

  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }

  base = _render(renderer);

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }

  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }

  component.base = base;
  base._component = component;

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

class A extends Component {
  // componentWillReceiveProps(props) {
  //   console.log('componentWillReceiveProps')
  // }

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
    console.log('生命周期之componentWillMount')
  }

  componentDidMount() {
    console.log('生命周期之componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('生命周期之shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate() {
    console.log('生命周期之componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('生命周期之componentDidUpdate')
  }

  click() {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    console.log('B组件的render方法', 'render')
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
  document.getElementById('app')
)
// 被jsx转换成 ReactDOM.render(React.createElement(B, null), document.getElementById('app'));

// ReactDOM.render(
//   <A name="count" />,
//   document.getElementById('app')
// )
