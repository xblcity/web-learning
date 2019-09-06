import _ from 'lodash'
import { decamelize } from 'humps' // 转换驼峰语法

/* 
  =============================================================
*/
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

// jsx语法
const element = (
  <div className="title">
    hello
    <span className="content">
      world!
    </span>
  </div>
)

console.log(element)
// element(即jsx表示的节点)会被babel-preset-react转换成virtual node
// 在浏览器中打印如下：
// {
//   attributes: { className: "title" }
//   children: (2)["hello", { … }]
//   key: undefined
//   nodeName: "div"
// }

/*
  =============================================================
*/
// render方法把virtual node 转换成真实DOM插入到html中

const ReactDOM = {
  render
}

/**
 * @msg: 将虚拟DOM转换成真实DOM
 * @param {*} vdom 虚拟DOM
 * @param {*} container 需要插入的位置，一般是一个id为app的div标签
 * @return: null
 */
function render(vdom, container) {
  if (_.isString(vdom) || _.isNumber(vdom)) {
    container.innerText = container.innerText + vdom // ????
    return
  }
  const dom = document.createElement(vdom.nodeName)  // 根节点创建一个<div>DOM节点
  for (let attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr])
  }
  vdom.children.forEach(vdomChild => render(vdomChild, dom))
  container.appendChild(dom)

}
/**
 * @msg: 给节点设置属性
 * @param {*} dom 操作元素
 * @param {*} attr 操作元素属性
 * @param {*} value 操作元素值
 * @return: null
 */
function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class'
  }
  if (attr.match(/on\w+/)) {
    const eventName = attr.toLowerCase().substr(2)
    dom.addEventListener(eventName, value)
  } else if (attr === 'style') {
    let styleStr = ''
    let standardCss
    for (let singleStyle in value) {
      standardCss = decamelize(singleStyle, { separator: '-' }) // 大写字母转中划线
      value[singleStyle] = _.isNumber(value[singleStyle]) ? value[singleStyle] + 'px' : value[singleStyle]
      styleStr += `${standardCss}: ${value[singleStyle]};`
    }
    dom.setAttribute(attr, styleStr) // 为DOM节点设置属性，setAttribute是DOM节点自带的方法
  } else {
    dom.setAttribute(attr, value)
  }
}

ReactDOM.render(element, document.getElementById('app'))