import _ from 'lodash'

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
const A = () => <div>i am componentA</div>

// @babel/preset-react转换结果
// var A = function A() {
//   return React.createElement("div", null, "i am componentA");
// };

console.log(A)

// ƒ A() {
//   return React.createElement("div", null, "i am componentA");
// }

console.log(<A />)

// 浏览器打印结果
// attributes: null
// children: []
// key: undefined
// nodeName: ƒ A()

/*
  =============================================================
*/
// ReactDOM的render方法把 所有的virtual node 转换成真实DOM插入到html中，一般一个app只用一次

const ReactDOM = {
  render
}

/**
 * @msg: 将虚拟DOM转换成真实DOM
 * @param {*} vdom 虚拟DOM，也就是js里的对象, eg: {}, 自定义组件也是如此
 * @param {*} container 需要插入的位置，一般是一个id为app的div标签, eg: <div id="app"></div>
 * @return: null
 */
function render(vdom, container) {
  console.log(vdom)
  // attributes: null
  // children: []
  // key: undefined
  // nodeName: ƒ A()
  if (_.isFunction(vdom.nodeName)) { // 如果 JSX 中是自定义组件
    let component, returnVdom
    if (vdom.nodeName.prototype.render) {
      component = new vdom.nodeName(vdom.attributes) // 构造类, 将prop传入组件内部
      returnVdom = component.render() // 执行类的方法
    } else {
      returnVdom = vdom.nodeName(vdom.attributes) // 针对无状态组件: const A = () => <div>I'm componentsA</div>
    }
    render(returnVdom, container)
    // attributes: null
    // children: ["i am componentA"]
    // key: undefined
    // nodeName: "div"
    return
  }
  const dom = document.createElement(vdom.nodeName)  // 根节点创建一个vNode根节点的tagName，即<div></div>

  container.appendChild(dom)
}

// ? 没有处理dom以及其属性，所以没有成功渲染
ReactDOM.render(<A />, document.getElementById('app'))