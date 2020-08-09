import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component {
  render() {
    console.log('调用component render方法')
    return (
      <div>
        <span>hello</span>
        <span>world</span>
        <div>{this.children}</div>
      </div>
    )
  }
}

let a = <MyComponent name="a" id="ida"><div>123</div></MyComponent>
// let a = (
//   <div>
//     <span>hello</span>
//     <span>world</span>
//   </div>
// )

ToyReact.render(a, document.body)
// main.js经过babel编译的内容

// var a = ToyReact.createElement("div", {
//   name: "a",
//   id: "toy"
// },
// ToyReact.createElement("span", null, "hello"),
// ToyReact.createElement("span", null, "world"),
// ToyReact.createElement("span", null, "!"));

// document.body.appendChild(a)
