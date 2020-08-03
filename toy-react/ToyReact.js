export let ToyReact = {
  createElement(type, attributes, ...children) {
    // console.log(arguments)
    // 三个参数，节点类型，节点属性集合对象，标签中间的content内容

    // 处理第二个参数，为元素添加 dom 节点属性值
    let element = document.createElement(type)
    for (let name in attributes) {
      element.setAttribute(name, attributes[name])
    }

    // 处理第三个参数，第三个参数可能是节点结合，也可能是个字符串
    // 比如 <div><span></span></div> 或者 <div>123</div>
    for (let child of children) {
      if (typeof child === 'string')
        child = document.createTextNode(child)
      element.appendChild(child)
    }
    return element
  },

  render(vdom, element) {
    element.appendChild(element)
  }
}
