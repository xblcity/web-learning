class ElementWrapper {
  // this.root可以理解为 dom
  constructor(type) {
    this.root = document.createElement(type)
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  // vchild 转换为 dom
  appendChild(vchild) {
    vchild.mountTo(this.root)
  }
  // 真正的挂载操作
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content)
  }
  // 真正的挂载操作
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

export class Component {
  constructor() {
    this.children = []
  }
  setAttribute(name, value) {
    this[name] = value
  }
  mountTo(parent) {
    // render生成vdom并挂载
    let vdom = this.render()
    vdom.mountTo(parent)
  }
  appendChild(vchild) {
    this.children.push(vchild)
  }
}

export let ToyReact = {
  createElement(type, attributes, ...children) {
    // 三个参数，节点类型，节点属性集合对象，标签中间的content内容
    console.log('createElement参数', type, attributes, ...children)

    let element
    // 第一个参数是普通dom还是react组件
    if (typeof type === 'string') {
      // 返回一个元素节点类，该类具备设置属性等方法
      element = new ElementWrapper(type)
    } else {
      // 生成函数组件实例，因为此时type是函数
      element = new type()
    }

    // 处理第二个参数，为元素添加 dom 节点属性值，调用setAttribute方法
    for (let name in attributes) {
      element.setAttribute(name, attributes[name])
    }

    // 处理第三个参数，第三个参数可能是节点集合，也可能是个字符串
    // 比如 <div><span></span></div> 或者 <div>123</div>
    // for (let child of children) {
    //   if (typeof child === 'string') {
    //     child = new TextWrapper(child)
    //   }
    //   element.appendChild(child)
    // }
    // return element
    let insertChildren = (children) => {
      for (let child of children) {
        if (typeof child === 'object' && child instanceof Array) {
          debugger
          insertChildren(child)
        } else {
          if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {
            debugger
            child = String(child)
          }
          if (typeof child === 'string') {
            child = new TextWrapper(child)
          }
          // 处理 this.children
          element.appendChild(child)
        }
      }
    }
    insertChildren(children)
    return element
  },

  render(vdom, element) {
    console.log('调用toyReact render方法')
    // vdom 转换成 真实dom
    vdom.mountTo(element)
  },
}
