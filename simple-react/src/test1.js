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

// @babel/preset-react转换的结果
// var element = React.createElement("div", {
//   className: "title"
// }, "hello", React.createElement("span", {
//   className: "content"
// }, "world!"));

// 经过createElement转换的结果打印
console.log(element)
// element(即jsx表示的节点)会被babel-preset-react转换成virtual node
// 在浏览器中打印如下：
// {
//   attributes: { className: "title" }
//   children: ["hello", { 
//     nodeName: "span",
//     attributes: {
//       className: "content",
//       children: ["world"],
//       key: undefined,
//       nodeName: "div"
//     }
//   }]
//   key: undefined
//   nodeName: "div"
// }

/*
  =============================================================
*/
// ReactDOM的render方法把 所有的virtual node 转换成真实DOM插入到html中，一般一个app只用一次

const ReactDOM = {
  render
}

/**
 * @msg: 将虚拟DOM转换成真实DOM
 * @param {*} vdom 虚拟DOM，也就是js里的对象, eg: {}
 * @param {*} container 需要插入的位置，一般是一个id为app的div标签, eg: <div id="app"></div>
 * @return: null
 */
function render(vdom, container) {
  if (_.isString(vdom) || _.isNumber(vdom)) {
    container.innerText = container.innerText + vdom // ????
    return
  }
  const dom = document.createElement(vdom.nodeName)  // 根节点创建一个vNode根节点的tagName
  for (let attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr])
    // 示例
    // setAttribute("div", "className", "title")
  }
  vdom.children.forEach(vdomChild => render(vdomChild, dom)) // 很明显，只遍历了一层。。。
  container.appendChild(dom)
}
/**
 * @msg: 格式化(parse) vDom 的 attributes属性
 * @param {*} dom 元素
 * @param {*} attr 属性
 * @param {*} value 属性值
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