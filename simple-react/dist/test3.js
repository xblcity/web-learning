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
  render: render // 组件的render方法，也是ReactDOM的render方法

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
      // 如果组件有render方法，说明是有状态组件，class里面的方法是定义在prototype上面的
      component = new vdom.nodeName(vdom.attributes); // ? 向组件传入props，即组件的属性

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
  var vdom = component.render ? component.render() : component;
  console.log('vdom或者render', vdom); // attributes: null
  // children: [
  //   { nodeName: "button", attributes: { … }, children: Array(1), key: undefined },
  //   { nodeName: "div", attributes: null, children: Array(3), key: undefined } ]
  // __proto__: Array(0)
  // key: undefined
  // nodeName: "div"

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(vdom) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(vdom)) {
    // vdom不是对象而是单纯的string或者number类型变量
    container.innerText = container.innerText + vdom;
    return; // ! 字符串直接处理就返回
  }

  var dom = document.createElement(vdom.nodeName);

  for (var attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr]);
  } // ? 之前忘记填写了的


  console.log("vdom\u7684\u5B50\u8282\u70B9", vdom.children); // vdom.children && vdom.children.length > 0 && vdom.children.forEach(vdomChild => { if (vdomChild.children) { _render(vdomChild, dom) } }) // ? 递归,render执行了数次

  vdom.children && vdom.children.length > 0 && vdom.children.forEach(function (vdomChild) {
    return _render(vdomChild, dom);
  });

  if (component.container) {
    // setState进入这个逻辑
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
}), document.getElementById('app')); // 执行render方法，判断A是组件，生成component，并把A的属性当作props传入，再执行_render，_render先把component执行一下render方法，得到正常的DOM节点，最后

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsInByb3RvdHlwZSIsInNldFN0YXRlIiwidXBkYXRlT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZkb20iLCJjb250YWluZXIiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50IiwiXyIsImlzRnVuY3Rpb24iLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiaW5uZXJUZXh0IiwiZG9tIiwic2V0QXR0cmlidXRlIiwibGVuZ3RoIiwiZm9yRWFjaCIsInZkb21DaGlsZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJtYXRjaCIsImV2ZW50TmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YW5kYXJkU3R5bGUiLCJzdGFuZGFyZFN0eWxlQ29udGVudCIsInNpbmdsZVN0eWxlIiwiZGVjYW1lbGl6ZSIsInNlcGFyYXRvciIsIkEiLCJjb3VudCIsImNsaWNrIiwiYmluZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztR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QkFFUTtBQUNQLGFBQ0UsaUNBQ0U7QUFBUSxlQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCO0FBQWpCLHFCQURGLEVBRUUsaUNBQU0sS0FBSzNDLEtBQUwsQ0FBVzRDLElBQWpCLE9BQXdCLEtBQUszQyxLQUFMLENBQVd3QyxLQUFuQyxDQUZGLENBREY7QUFNRDs7OztFQXZCYTFDLFM7O0FBMEJoQlcsUUFBUSxDQUFDQyxNQUFULENBQ0Usb0JBQUMsQ0FBRDtBQUFHLE1BQUksRUFBQztBQUFSLEVBREYsRUFFRUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBRkYsRSxDQUtBLHdHIiwiZmlsZSI6InRlc3QzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInRlc3QzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvdGVzdDMuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBjb21wb25lbnQgcHJvcHPkuI5zdGF0ZeeahOWunueOsFxyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PmkgYW0gYSBjb21wb25lbnQ8L2Rpdj5cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcig8QSBuYW1lPSdjb21wb25lbnQnLz4sIGRvY3VtZW50LmJvZHkpXHJcblxyXG4vLyBB5Ye95pWw57un5om/6IeqQ29tcG9uZW50XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IGRlY2FtZWxpemUgfSBmcm9tICdodW1wcydcclxuXHJcbi8vIOWumuS5iWNyZWF0ZUVsZW1lbnTmlrnms5VcclxuY29uc3QgUmVhY3QgPSB7XHJcbiAgY3JlYXRlRWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgLi4uY2hpbGQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZU5hbWU6IHRhZyxcclxuICAgIGF0dHJpYnV0ZXM6IGF0dHIsXHJcbiAgICBjaGlsZHJlbjogY2hpbGQsIC8vIOaVsOe7hFxyXG4gICAga2V5OiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8vIOaehOmAoOWHveaVsGNvbXBvbmVudFxyXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMpIHtcclxuICB0aGlzLnByb3BzID0gcHJvcHNcclxuICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8IHt9XHJcbn1cclxuXHJcbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAodXBkYXRlT2JqKSB7XHJcbiAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHVwZGF0ZU9iailcclxuICBfcmVuZGVyKHRoaXMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkgLy8g6YeN5paw5riy5p+TXHJcbn1cclxuXHJcbmNvbnN0IFJlYWN0RE9NID0ge1xyXG4gIHJlbmRlclxyXG59XHJcblxyXG4vLyDnu4Tku7bnmoRyZW5kZXLmlrnms5XvvIzkuZ/mmK9SZWFjdERPTeeahHJlbmRlcuaWueazlVxyXG5mdW5jdGlvbiByZW5kZXIodmRvbSwgY29udGFpbmVyKSB7XHJcbiAgY29uc29sZS5sb2coYGNvbnRhaW5lcmAsIGNvbnRhaW5lcilcclxuICBjb25zb2xlLmxvZygncmVuZGVy55qEdmRvbScsIHZkb20pXHJcbiAgLy8gYXR0cmlidXRlczogeyBuYW1lOiBcImNvdW50XCIgfVxyXG4gIC8vIGNoaWxkcmVuOiBbXVxyXG4gIC8vIGtleTogdW5kZWZpbmVkXHJcbiAgLy8gbm9kZU5hbWU6IMaSIEEocHJvcHMpXHJcbiAgLy8gX19wcm90b19fOiBPYmplY3RcclxuICBsZXQgY29tcG9uZW50XHJcbiAgaWYgKF8uaXNGdW5jdGlvbih2ZG9tLm5vZGVOYW1lKSkgeyAvLyDnlLFiYWJlbOi9rOaNoui/h+WQjixub2RlTmFtZeWPr+S7peaYr+S4gOS4quWHveaVsFxyXG4gICAgaWYgKHZkb20ubm9kZU5hbWUucHJvdG90eXBlLnJlbmRlcikgeyAvLyDlpoLmnpznu4Tku7bmnIlyZW5kZXLmlrnms5XvvIzor7TmmI7mmK/mnInnirbmgIHnu4Tku7bvvIxjbGFzc+mHjOmdoueahOaWueazleaYr+WumuS5ieWcqHByb3RvdHlwZeS4iumdoueahFxyXG4gICAgICBjb21wb25lbnQgPSBuZXcgdmRvbS5ub2RlTmFtZSh2ZG9tLmF0dHJpYnV0ZXMpIC8vID8g5ZCR57uE5Lu25Lyg5YWlcHJvcHPvvIzljbPnu4Tku7bnmoTlsZ7mgKdcclxuICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCcsIGNvbXBvbmVudClcclxuICAgICAgLy8gQTpcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHByb3BzOiB7bmFtZTogXCJjb3VudFwifVxyXG4gICAgICAvLyAgIHN0YXRlOiB7Y291bnQ6IDF9XHJcbiAgICAgIC8vICAgX19wcm90b19fOiBDb21wb25lbnRcclxuICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcG9uZW50ID0gdmRvbS5ub2RlTmFtZSh2ZG9tLmF0dHJpYnV0ZXMpIC8vIOaXoOeKtuaAgee7hOS7tu+8jOWHveaVsOebtOaOpeaJp+ihjO+8jOS4jeeUqOS9v+eUqOaehOmAoOWHveaVsFxyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnQgPyBfcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSA6IF9yZW5kZXIodmRvbSwgY29udGFpbmVyKVxyXG59XHJcblxyXG4vLyDlnKggcmVuZGVy5Ye95pWw5Lit5YiG56a75Ye6X3JlbmRlcuS4u+imgeaYr+S4uuS6huiuqXNldFN0YXRl5Lmf6IO95L2/55SoX3JlbmRlclxyXG5mdW5jdGlvbiBfcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSB7XHJcbiAgLy8gQTpcclxuICAvLyB7XHJcbiAgLy8gICBwcm9wczoge25hbWU6IFwiY291bnRcIn1cclxuICAvLyAgIHN0YXRlOiB7Y291bnQ6IDF9XHJcbiAgLy8gICBfX3Byb3RvX186IENvbXBvbmVudFxyXG4gIC8vIH1cclxuICBjb25zdCB2ZG9tID0gY29tcG9uZW50LnJlbmRlciA/IGNvbXBvbmVudC5yZW5kZXIoKSA6IGNvbXBvbmVudFxyXG4gIGNvbnNvbGUubG9nKCd2ZG9t5oiW6ICFcmVuZGVyJywgdmRvbSlcclxuICAvLyBhdHRyaWJ1dGVzOiBudWxsXHJcbiAgLy8gY2hpbGRyZW46IFtcclxuICAvLyAgIHsgbm9kZU5hbWU6IFwiYnV0dG9uXCIsIGF0dHJpYnV0ZXM6IHsg4oCmIH0sIGNoaWxkcmVuOiBBcnJheSgxKSwga2V5OiB1bmRlZmluZWQgfSxcclxuICAvLyAgIHsgbm9kZU5hbWU6IFwiZGl2XCIsIGF0dHJpYnV0ZXM6IG51bGwsIGNoaWxkcmVuOiBBcnJheSgzKSwga2V5OiB1bmRlZmluZWQgfSBdXHJcbiAgLy8gX19wcm90b19fOiBBcnJheSgwKVxyXG4gIC8vIGtleTogdW5kZWZpbmVkXHJcbiAgLy8gbm9kZU5hbWU6IFwiZGl2XCJcclxuICBpZiAoXy5pc1N0cmluZyh2ZG9tKSB8fCBfLmlzTnVtYmVyKHZkb20pKSB7IC8vIHZkb23kuI3mmK/lr7nosaHogIzmmK/ljZXnuq/nmoRzdHJpbmfmiJbogIVudW1iZXLnsbvlnovlj5jph49cclxuICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSBjb250YWluZXIuaW5uZXJUZXh0ICsgdmRvbVxyXG4gICAgcmV0dXJuIC8vICEg5a2X56ym5Liy55u05o6l5aSE55CG5bCx6L+U5ZueXHJcbiAgfVxyXG4gIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmRvbS5ub2RlTmFtZSlcclxuICBmb3IgKGxldCBhdHRyIGluIHZkb20uYXR0cmlidXRlcykge1xyXG4gICAgc2V0QXR0cmlidXRlKGRvbSwgYXR0ciwgdmRvbS5hdHRyaWJ1dGVzW2F0dHJdKVxyXG4gIH1cclxuICAvLyA/IOS5i+WJjeW/mOiusOWhq+WGmeS6hueahFxyXG4gIGNvbnNvbGUubG9nKGB2ZG9t55qE5a2Q6IqC54K5YCwgdmRvbS5jaGlsZHJlbilcclxuICAvLyB2ZG9tLmNoaWxkcmVuICYmIHZkb20uY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiB2ZG9tLmNoaWxkcmVuLmZvckVhY2godmRvbUNoaWxkID0+IHsgaWYgKHZkb21DaGlsZC5jaGlsZHJlbikgeyBfcmVuZGVyKHZkb21DaGlsZCwgZG9tKSB9IH0pIC8vID8g6YCS5b2SLHJlbmRlcuaJp+ihjOS6huaVsOasoVxyXG4gIHZkb20uY2hpbGRyZW4gJiYgdmRvbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHZkb20uY2hpbGRyZW4uZm9yRWFjaCh2ZG9tQ2hpbGQgPT4gX3JlbmRlcih2ZG9tQ2hpbGQsIGRvbSkpXHJcbiAgaWYgKGNvbXBvbmVudC5jb250YWluZXIpIHsgLy8gc2V0U3RhdGXov5vlhaXov5nkuKrpgLvovpFcclxuICAgIGNvbXBvbmVudC5jb250YWluZXIuaW5uZXJIVE1MID0gbnVsbFxyXG4gICAgY29tcG9uZW50LmNvbnRhaW5lci5hcHBlbmRDaGlsZChkb20pXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgY29tcG9uZW50LmNvbnRhaW5lciA9IGNvbnRhaW5lciAvLyDnrKzkuIDmrKHmuLLmn5Pnu5ljb21wb25lbnTlop7liqDkuIDkuKpjb250YWluZXLlsZ7mgKfvvIzkuYvlkI7lho3mrKHpqozor4Hml7bvvIzlsLHlj6/ku6Xnn6XpgZPor6Xnu4Tku7bkuI3mmK/nrKzkuIDmrKHmuLLmn5PkuoZcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tKVxyXG59XHJcblxyXG4vLyDlpITnkIZET03nmoTlsZ7mgKdcclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKGRvbSwgYXR0ciwgdmFsdWUpIHtcclxuICBpZiAoYXR0ciA9PT0gJ2NsYXNzTmFtZScpIHtcclxuICAgIGF0dHIgPSAnY2xhc3MnXHJcbiAgfVxyXG4gIGlmIChhdHRyLm1hdGNoKC9vblxcdysvKSkgeyAvLyB3IOWMuemFjeWtl+avjeaIluaVsOWtl+aIluS4i+WIkue6v+aIluaxieWtlyDnrYnku7fkuo4gJ1teQS1aYS16MC05X10nXHJcbiAgICBjb25zb2xlLmxvZygn5LqL5Lu255qE5ZCN5a2X5pivJywgYXR0ciwgJ+S6i+S7tuiKgueCueaYrycsIGRvbSwgJ3ZhbHVl5pivJywgdmFsdWUpXHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBhdHRyLnRvTG93ZXJDYXNlKCkuc3Vic3RyKDIpXHJcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZhbHVlKVxyXG4gIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ3N0eWxlJykgeyAvLyBzdHlsZSA9IHt7d2lkdGg6IDEwMCwgYmFja2dyb3VuZENvbG9yOiAncmVkJ319XHJcbiAgICBsZXQgc3RhbmRhcmRTdHlsZVxyXG4gICAgbGV0IHN0YW5kYXJkU3R5bGVDb250ZW50XHJcbiAgICBmb3IgKGxldCBzaW5nbGVTdHlsZSBpbiBhdHRyKSB7XHJcbiAgICAgIHN0YW5kYXJkU3R5bGUgPSBkZWNhbWVsaXplKHNpbmdsZVN0eWxlLCB7IHNlcGFyYXRvcjogJy0nIH0pIC8vIOWkp+WGmeWtl+avjei9rOS4reWIkue6v1xyXG4gICAgICB2YWx1ZVtzaW5nbGVTdHlsZV0gPSBfLmlzTnVtYmVyKHZhbHVlW3NpbmdsZVN0eWxlXSkgPyB2YWx1ZVtzaW5nbGVTdHlsZV0gKyAncHgnIDogdmFsdWVbc2luZ2xlU3R5bGVdXHJcbiAgICAgIHN0YW5kYXJkU3R5bGVDb250ZW50ICs9IGAke3N0YW5kYXJkU3R5bGV9OiAke3ZhbHVlW3NpbmdsZVN0eWxlXX07YFxyXG4gICAgfVxyXG4gICAgZG9tLnNldEF0dHJpYnV0ZShhdHRyLCBzdGFuZGFyZFN0eWxlQ29udGVudCkgLy8gRE9N6Ieq5bim55qE5pa55rOVXHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpIC8vIOWkhOeQhmNsYXNz77yM562J562J5bi46KeE5bGe5oCnXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmtYvor5XnlKjkvotcclxuY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgY29uc29sZS5sb2coYHByb3BzYCwgcHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb3VudDogMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2vkuovku7bop6blj5EnKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNvdW50OiArK3RoaXMuc3RhdGUuY291bnRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbGljay5iaW5kKHRoaXMpfT5DbGljayBNZSE8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLm5hbWV9Ont0aGlzLnN0YXRlLmNvdW50fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QSBuYW1lPVwiY291bnRcIiAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKVxyXG5cclxuLy8g5omn6KGMcmVuZGVy5pa55rOV77yM5Yik5patQeaYr+e7hOS7tu+8jOeUn+aIkGNvbXBvbmVudO+8jOW5tuaKikHnmoTlsZ7mgKflvZPkvZxwcm9wc+S8oOWFpe+8jOWGjeaJp+ihjF9yZW5kZXLvvIxfcmVuZGVy5YWI5oqKY29tcG9uZW505omn6KGM5LiA5LiLcmVuZGVy5pa55rOV77yM5b6X5Yiw5q2j5bi455qERE9N6IqC54K577yM5pyA5ZCOIl0sInNvdXJjZVJvb3QiOiIifQ==