/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"test3": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/test3.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/test3.js":
/*!**********************!*\
  !*** ./src/test3.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// component props与state的实现
// import React, {Component} from 'react'
// class A extends Component {
//   render() {
//     return <div>i am a component</div>
//   }
// }
// ReactDOM.render(<A name='component'/>, document.body)
// A函数继承自Component

 // 定义createElement方法

var React = {
  createElement: createElement
};

function createElement(tag, attr) {
  for (var _len = arguments.length, child = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    child[_key - 2] = arguments[_key];
  }

  return {
    nodeName: tag,
    attributes: attr,
    children: child,
    // 数组
    key: undefined
  };
} // 构造函数component


function Component(props) {
  this.props = props;
  this.state = this.state | {};
}

Component.prototype.setState = function (updateObj) {
  this.state = Object.assign({}, this.state, updateObj);

  _render(this, document.getElementById('app')); // 重新渲染

};

var ReactDOM = {
  render: render // ReactDOM的render方法，并非组件自身的render

};

function render(vdom, container) {
  console.log("container", container);
  console.log('render的vdom', vdom); // attributes: { name: "count" }
  // children: []
  // key: undefined
  // nodeName: ƒ A(props)
  // __proto__: Object

  var component;

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(vdom.nodeName)) {
    // 由babel转换过后,nodeName可以是一个函数
    if (vdom.nodeName.prototype.render) {
      // 如果组件有render方法，说明是有状态组件，class里面的方法是定义在prototype上面的,但是为什么不加prototype就会报错呢？因为A是一个构造函数类
      component = new vdom.nodeName(vdom.attributes); // 这一步只是处理了vdom的属性，处理成props，component是vdom.nodeName这个构造函数的实例，所以可以直接调用render，这也是new操作符的功劳了
      // 由于继承自Component构造函数，也就是说this.props = vdom.attributes

      console.log('component', component); // A:
      // {
      //   props: {name: "count"}
      //   state: {count: 1}
      //   __proto__: Component
      // }
    } else {
      component = vdom.nodeName(vdom.attributes); // 无状态组件，函数直接执行，不用使用构造函数
    }
  }

  component ? _render(component, container) : _render(vdom, container);
} // 在 render函数中分离出_render主要是为了让setState也能使用_render


function _render(component, container) {
  // A:
  // {
  //   props: {name: "count"}
  //   state: {count: 1}
  //   __proto__: Component
  // }
  var vdom = component.render ? component.render() : component; // 这里的component是实例，可以直接调用构造函数上面的方法

  console.log('vdom的render', vdom); // ! 这里不明白为什么render()之后就成这个样子了
  // attributes: null
  // children: [
  //   { nodeName: "button", attributes: { … }, children: Array(1), key: undefined },
  //   { nodeName: "div", attributes: null, children: Array(3), key: undefined } ]
  // __proto__: Array(0)
  // key: undefined
  // nodeName: "div"

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(vdom) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(vdom)) {
    // vdom不是对象而是单纯的string或者number类型变量
    container.innerText = container.innerText + vdom;
    return; //  字符串直接处理就返回
  }

  var dom = document.createElement(vdom.nodeName); // 1.属性格式化成html支持的格式，vdom到dom的重要一步

  for (var attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr]);
  } // 2.对于vdom的children，也就是dom的子元素，也需要格式化，父dom更加完善了


  vdom.children && vdom.children.length && vdom.children.forEach(function (vdomChild) {
    return _render(vdomChild, dom);
  }); // 递归
  // 3.对于setState的处理

  if (component.container) {
    component.container.innerHTML = null;
    component.container.appendChild(dom);
    return;
  }

  component.container = container; // 第一次渲染给component增加一个container属性，之后再次验证时，就可以知道该组件不是第一次渲染了

  container.appendChild(dom);
} // 处理DOM的属性


function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class';
  }

  if (attr.match(/on\w+/)) {
    // w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
    console.log('事件的名字是', attr, '事件节点是', dom, 'value是', value);
    var eventName = attr.toLowerCase().substr(2);
    dom.addEventListener(eventName, value);
  } else if (attr === 'style') {
    // style = {{width: 100, backgroundColor: 'red'}}
    var standardStyle;
    var standardStyleContent;

    for (var singleStyle in attr) {
      standardStyle = Object(humps__WEBPACK_IMPORTED_MODULE_1__["decamelize"])(singleStyle, {
        separator: '-'
      }); // 大写字母转中划线

      value[singleStyle] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(value[singleStyle]) ? value[singleStyle] + 'px' : value[singleStyle];
      standardStyleContent += "".concat(standardStyle, ": ").concat(value[singleStyle], ";");
    }

    dom.setAttribute(attr, standardStyleContent); // DOM自带的方法
  } else {
    dom.setAttribute(attr, value); // 处理class，等等常规属性
  }
} // 测试用例


var A =
/*#__PURE__*/
function (_Component) {
  _inherits(A, _Component);

  function A(props) {
    var _this;

    _classCallCheck(this, A);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(A).call(this, props));
    console.log("props", props);
    _this.state = {
      count: 1
    };
    return _this;
  }

  _createClass(A, [{
    key: "click",
    value: function click() {
      console.log('click事件触发');
      this.setState({
        count: ++this.state.count
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.click.bind(this)
      }, "Click Me!"), React.createElement("div", null, this.props.name, ":", this.state.count));
    }
  }]);

  return A;
}(Component);

ReactDOM.render(React.createElement(A, {
  name: "count"
}), document.getElementById('app')); // 执行render方法，判断A是组件，生成component，并把A的属性当作props传入，再执行_render，_render先把component执行一下render方法，得到正常的DOM节点，最后递归子节点，生成完整DOM

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsInByb3RvdHlwZSIsInNldFN0YXRlIiwidXBkYXRlT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZkb20iLCJjb250YWluZXIiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50IiwiXyIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaW5uZXJUZXh0IiwiZG9tIiwic2V0QXR0cmlidXRlIiwibGVuZ3RoIiwiZm9yRWFjaCIsInZkb21DaGlsZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJtYXRjaCIsImV2ZW50TmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YW5kYXJkU3R5bGUiLCJzdGFuZGFyZFN0eWxlQ29udGVudCIsInNpbmdsZVN0eWxlIiwiZGVjYW1lbGl6ZSIsInNlcGFyYXRvciIsIkEiLCJjb3VudCIsImNsaWNrIiwiYmluZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztR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QUFRLGVBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IsSUFBaEI7QUFBakIscUJBREYsRUFFRSxpQ0FBTSxLQUFLM0MsS0FBTCxDQUFXNEMsSUFBakIsT0FBd0IsS0FBSzNDLEtBQUwsQ0FBV3dDLEtBQW5DLENBRkYsQ0FERjtBQU1EOzs7O0VBdkJhMUMsUzs7QUEwQmhCVyxRQUFRLENBQUNDLE1BQVQsQ0FDRSxvQkFBQyxDQUFEO0FBQUcsTUFBSSxFQUFDO0FBQVIsRUFERixFQUVFSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRixFLENBS0EscUgiLCJmaWxlIjoidGVzdDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwidGVzdDNcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy90ZXN0My5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIGNvbXBvbmVudCBwcm9wc+S4jnN0YXRl55qE5a6e546wXHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIDxkaXY+aSBhbSBhIGNvbXBvbmVudDwvZGl2PlxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gUmVhY3RET00ucmVuZGVyKDxBIG5hbWU9J2NvbXBvbmVudCcvPiwgZG9jdW1lbnQuYm9keSlcclxuXHJcbi8vIEHlh73mlbDnu6fmib/oh6pDb21wb25lbnRcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgZGVjYW1lbGl6ZSB9IGZyb20gJ2h1bXBzJ1xyXG5cclxuLy8g5a6a5LmJY3JlYXRlRWxlbWVudOaWueazlVxyXG5jb25zdCBSZWFjdCA9IHtcclxuICBjcmVhdGVFbGVtZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyLCAuLi5jaGlsZCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBub2RlTmFtZTogdGFnLFxyXG4gICAgYXR0cmlidXRlczogYXR0cixcclxuICAgIGNoaWxkcmVuOiBjaGlsZCwgLy8g5pWw57uEXHJcbiAgICBrZXk6IHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLy8g5p6E6YCg5Ye95pWwY29tcG9uZW50XHJcbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xyXG4gIHRoaXMucHJvcHMgPSBwcm9wc1xyXG4gIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlIHwge31cclxufVxyXG5cclxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVPYmopIHtcclxuICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgdXBkYXRlT2JqKVxyXG4gIF9yZW5kZXIodGhpcywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSAvLyDph43mlrDmuLLmn5NcclxufVxyXG5cclxuY29uc3QgUmVhY3RET00gPSB7XHJcbiAgcmVuZGVyXHJcbn1cclxuXHJcbi8vIFJlYWN0RE9N55qEcmVuZGVy5pa55rOV77yM5bm26Z2e57uE5Lu26Ieq6Lqr55qEcmVuZGVyXHJcbmZ1bmN0aW9uIHJlbmRlcih2ZG9tLCBjb250YWluZXIpIHtcclxuICBjb25zb2xlLmxvZyhgY29udGFpbmVyYCwgY29udGFpbmVyKVxyXG4gIGNvbnNvbGUubG9nKCdyZW5kZXLnmoR2ZG9tJywgdmRvbSlcclxuICAvLyBhdHRyaWJ1dGVzOiB7IG5hbWU6IFwiY291bnRcIiB9XHJcbiAgLy8gY2hpbGRyZW46IFtdXHJcbiAgLy8ga2V5OiB1bmRlZmluZWRcclxuICAvLyBub2RlTmFtZTogxpIgQShwcm9wcylcclxuICAvLyBfX3Byb3RvX186IE9iamVjdFxyXG4gIGxldCBjb21wb25lbnRcclxuICBpZiAoXy5pc0Z1bmN0aW9uKHZkb20ubm9kZU5hbWUpKSB7IC8vIOeUsWJhYmVs6L2s5o2i6L+H5ZCOLG5vZGVOYW1l5Y+v5Lul5piv5LiA5Liq5Ye95pWwXHJcbiAgICBpZiAodmRvbS5ub2RlTmFtZS5wcm90b3R5cGUucmVuZGVyKSB7IC8vIOWmguaenOe7hOS7tuaciXJlbmRlcuaWueazle+8jOivtOaYjuaYr+acieeKtuaAgee7hOS7tu+8jGNsYXNz6YeM6Z2i55qE5pa55rOV5piv5a6a5LmJ5ZyocHJvdG90eXBl5LiK6Z2i55qELOS9huaYr+S4uuS7gOS5iOS4jeWKoHByb3RvdHlwZeWwseS8muaKpemUmeWRou+8n+WboOS4ukHmmK/kuIDkuKrmnoTpgKDlh73mlbDnsbtcclxuICAgICAgY29tcG9uZW50ID0gbmV3IHZkb20ubm9kZU5hbWUodmRvbS5hdHRyaWJ1dGVzKSAvLyDov5nkuIDmraXlj6rmmK/lpITnkIbkuoZ2ZG9t55qE5bGe5oCn77yM5aSE55CG5oiQcHJvcHPvvIxjb21wb25lbnTmmK92ZG9tLm5vZGVOYW1l6L+Z5Liq5p6E6YCg5Ye95pWw55qE5a6e5L6L77yM5omA5Lul5Y+v5Lul55u05o6l6LCD55SocmVuZGVy77yM6L+Z5Lmf5pivbmV35pON5L2c56ym55qE5Yqf5Yqz5LqGXHJcbiAgICAgIC8vIOeUseS6jue7p+aJv+iHqkNvbXBvbmVudOaehOmAoOWHveaVsO+8jOS5n+WwseaYr+ivtHRoaXMucHJvcHMgPSB2ZG9tLmF0dHJpYnV0ZXNcclxuICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCcsIGNvbXBvbmVudClcclxuICAgICAgLy8gQTpcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHByb3BzOiB7bmFtZTogXCJjb3VudFwifVxyXG4gICAgICAvLyAgIHN0YXRlOiB7Y291bnQ6IDF9XHJcbiAgICAgIC8vICAgX19wcm90b19fOiBDb21wb25lbnRcclxuICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcG9uZW50ID0gdmRvbS5ub2RlTmFtZSh2ZG9tLmF0dHJpYnV0ZXMpIC8vIOaXoOeKtuaAgee7hOS7tu+8jOWHveaVsOebtOaOpeaJp+ihjO+8jOS4jeeUqOS9v+eUqOaehOmAoOWHveaVsFxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnQgPyBfcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSA6IF9yZW5kZXIodmRvbSwgY29udGFpbmVyKVxyXG59XHJcblxyXG4vLyDlnKggcmVuZGVy5Ye95pWw5Lit5YiG56a75Ye6X3JlbmRlcuS4u+imgeaYr+S4uuS6huiuqXNldFN0YXRl5Lmf6IO95L2/55SoX3JlbmRlclxyXG5mdW5jdGlvbiBfcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSB7XHJcbiAgLy8gQTpcclxuICAvLyB7XHJcbiAgLy8gICBwcm9wczoge25hbWU6IFwiY291bnRcIn1cclxuICAvLyAgIHN0YXRlOiB7Y291bnQ6IDF9XHJcbiAgLy8gICBfX3Byb3RvX186IENvbXBvbmVudFxyXG4gIC8vIH1cclxuICBjb25zdCB2ZG9tID0gY29tcG9uZW50LnJlbmRlciA/IGNvbXBvbmVudC5yZW5kZXIoKSA6IGNvbXBvbmVudCAvLyDov5nph4znmoRjb21wb25lbnTmmK/lrp7kvovvvIzlj6/ku6Xnm7TmjqXosIPnlKjmnoTpgKDlh73mlbDkuIrpnaLnmoTmlrnms5VcclxuICBjb25zb2xlLmxvZygndmRvbeeahHJlbmRlcicsIHZkb20pICAvLyAhIOi/memHjOS4jeaYjueZveS4uuS7gOS5iHJlbmRlcigp5LmL5ZCO5bCx5oiQ6L+Z5Liq5qC35a2Q5LqGXHJcbiAgLy8gYXR0cmlidXRlczogbnVsbFxyXG4gIC8vIGNoaWxkcmVuOiBbXHJcbiAgLy8gICB7IG5vZGVOYW1lOiBcImJ1dHRvblwiLCBhdHRyaWJ1dGVzOiB7IOKApiB9LCBjaGlsZHJlbjogQXJyYXkoMSksIGtleTogdW5kZWZpbmVkIH0sXHJcbiAgLy8gICB7IG5vZGVOYW1lOiBcImRpdlwiLCBhdHRyaWJ1dGVzOiBudWxsLCBjaGlsZHJlbjogQXJyYXkoMyksIGtleTogdW5kZWZpbmVkIH0gXVxyXG4gIC8vIF9fcHJvdG9fXzogQXJyYXkoMClcclxuICAvLyBrZXk6IHVuZGVmaW5lZFxyXG4gIC8vIG5vZGVOYW1lOiBcImRpdlwiXHJcbiAgaWYgKF8uaXNTdHJpbmcodmRvbSkgfHwgXy5pc051bWJlcih2ZG9tKSkgeyAvLyB2ZG9t5LiN5piv5a+56LGh6ICM5piv5Y2V57qv55qEc3RyaW5n5oiW6ICFbnVtYmVy57G75Z6L5Y+Y6YePXHJcbiAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gY29udGFpbmVyLmlubmVyVGV4dCArIHZkb21cclxuICAgIHJldHVybiAvLyAg5a2X56ym5Liy55u05o6l5aSE55CG5bCx6L+U5ZueXHJcbiAgfVxyXG4gIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmRvbS5ub2RlTmFtZSlcclxuICAvLyAxLuWxnuaAp+agvOW8j+WMluaIkGh0bWzmlK/mjIHnmoTmoLzlvI/vvIx2ZG9t5YiwZG9t55qE6YeN6KaB5LiA5q2lXHJcbiAgZm9yIChsZXQgYXR0ciBpbiB2ZG9tLmF0dHJpYnV0ZXMpIHtcclxuICAgIHNldEF0dHJpYnV0ZShkb20sIGF0dHIsIHZkb20uYXR0cmlidXRlc1thdHRyXSlcclxuICB9XHJcbiAgLy8gMi7lr7nkuo52ZG9t55qEY2hpbGRyZW7vvIzkuZ/lsLHmmK9kb23nmoTlrZDlhYPntKDvvIzkuZ/pnIDopoHmoLzlvI/ljJbvvIzniLZkb23mm7TliqDlrozlloTkuoZcclxuICB2ZG9tLmNoaWxkcmVuICYmIHZkb20uY2hpbGRyZW4ubGVuZ3RoICYmIHZkb20uY2hpbGRyZW4uZm9yRWFjaCh2ZG9tQ2hpbGQgPT4gX3JlbmRlcih2ZG9tQ2hpbGQsIGRvbSkpIC8vIOmAkuW9klxyXG4gIC8vIDMu5a+55LqOc2V0U3RhdGXnmoTlpITnkIZcclxuICBpZiAoY29tcG9uZW50LmNvbnRhaW5lcikge1xyXG4gICAgY29tcG9uZW50LmNvbnRhaW5lci5pbm5lckhUTUwgPSBudWxsXHJcbiAgICBjb21wb25lbnQuY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbSlcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBjb21wb25lbnQuY29udGFpbmVyID0gY29udGFpbmVyIC8vIOesrOS4gOasoea4suafk+e7mWNvbXBvbmVudOWinuWKoOS4gOS4qmNvbnRhaW5lcuWxnuaAp++8jOS5i+WQjuWGjeasoemqjOivgeaXtu+8jOWwseWPr+S7peefpemBk+ivpee7hOS7tuS4jeaYr+esrOS4gOasoea4suafk+S6hlxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20pXHJcbn1cclxuXHJcbi8vIOWkhOeQhkRPTeeahOWxnuaAp1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2YWx1ZSkge1xyXG4gIGlmIChhdHRyID09PSAnY2xhc3NOYW1lJykge1xyXG4gICAgYXR0ciA9ICdjbGFzcydcclxuICB9XHJcbiAgaWYgKGF0dHIubWF0Y2goL29uXFx3Ky8pKSB7IC8vIHcg5Yy56YWN5a2X5q+N5oiW5pWw5a2X5oiW5LiL5YiS57q/5oiW5rGJ5a2XIOetieS7t+S6jiAnW15BLVphLXowLTlfXSdcclxuICAgIGNvbnNvbGUubG9nKCfkuovku7bnmoTlkI3lrZfmmK8nLCBhdHRyLCAn5LqL5Lu26IqC54K55pivJywgZG9tLCAndmFsdWXmmK8nLCB2YWx1ZSlcclxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGF0dHIudG9Mb3dlckNhc2UoKS5zdWJzdHIoMilcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpXHJcbiAgfSBlbHNlIGlmIChhdHRyID09PSAnc3R5bGUnKSB7IC8vIHN0eWxlID0ge3t3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX1cclxuICAgIGxldCBzdGFuZGFyZFN0eWxlXHJcbiAgICBsZXQgc3RhbmRhcmRTdHlsZUNvbnRlbnRcclxuICAgIGZvciAobGV0IHNpbmdsZVN0eWxlIGluIGF0dHIpIHtcclxuICAgICAgc3RhbmRhcmRTdHlsZSA9IGRlY2FtZWxpemUoc2luZ2xlU3R5bGUsIHsgc2VwYXJhdG9yOiAnLScgfSkgLy8g5aSn5YaZ5a2X5q+N6L2s5Lit5YiS57q/XHJcbiAgICAgIHZhbHVlW3NpbmdsZVN0eWxlXSA9IF8uaXNOdW1iZXIodmFsdWVbc2luZ2xlU3R5bGVdKSA/IHZhbHVlW3NpbmdsZVN0eWxlXSArICdweCcgOiB2YWx1ZVtzaW5nbGVTdHlsZV1cclxuICAgICAgc3RhbmRhcmRTdHlsZUNvbnRlbnQgKz0gYCR7c3RhbmRhcmRTdHlsZX06ICR7dmFsdWVbc2luZ2xlU3R5bGVdfTtgXHJcbiAgICB9XHJcbiAgICBkb20uc2V0QXR0cmlidXRlKGF0dHIsIHN0YW5kYXJkU3R5bGVDb250ZW50KSAvLyBET03oh6rluKbnmoTmlrnms5VcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSkgLy8g5aSE55CGY2xhc3PvvIznrYnnrYnluLjop4TlsZ7mgKdcclxuICB9XHJcbn1cclxuXHJcbi8vIOa1i+ivleeUqOS+i1xyXG5jbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBjb25zb2xlLmxvZyhgcHJvcHNgLCBwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNvdW50OiAxXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGljaygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja+S6i+S7tuinpuWPkScpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY291bnQ6ICsrdGhpcy5zdGF0ZS5jb3VudFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrLmJpbmQodGhpcyl9PkNsaWNrIE1lITwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXY+e3RoaXMucHJvcHMubmFtZX06e3RoaXMuc3RhdGUuY291bnR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxBIG5hbWU9XCJjb3VudFwiIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pXHJcblxyXG4vLyDmiafooYxyZW5kZXLmlrnms5XvvIzliKTmlq1B5piv57uE5Lu277yM55Sf5oiQY29tcG9uZW5077yM5bm25oqKQeeahOWxnuaAp+W9k+S9nHByb3Bz5Lyg5YWl77yM5YaN5omn6KGMX3JlbmRlcu+8jF9yZW5kZXLlhYjmiopjb21wb25lbnTmiafooYzkuIDkuItyZW5kZXLmlrnms5XvvIzlvpfliLDmraPluLjnmoRET03oioLngrnvvIzmnIDlkI7pgJLlvZLlrZDoioLngrnvvIznlJ/miJDlrozmlbRET00iXSwic291cmNlUm9vdCI6IiJ9