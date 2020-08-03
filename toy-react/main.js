import { ToyReact } from './ToyReact.js'

// class MyComponent {
//   render() {
//     return <div>233</div>
//   }
//   setAttribute(name, value) {
//     this[name] = value
//   }
//   mountTo(parent) {
//     let vdom = this.render()
//     vdom.mountTo(parent)
//   }
// }
let a = (
  <div name="a" id="toy">
    <span>hello</span>
    <span>world</span>
    <span>!</span>
  </div>
)

// main.js经过babel编译的内容

// var a = ToyReact.createElement("div", {
//   name: "a",
//   id: "toy"
// },
// ToyReact.createElement("span", null, "hello"),
// ToyReact.createElement("span", null, "world"),
// ToyReact.createElement("span", null, "!"));

document.body.appendChild(a)
