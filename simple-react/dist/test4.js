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
/******/ 		"test4": 0
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
/******/ 	deferredModules.push(["./src/test4.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/test4.js":
/*!**********************!*\
  !*** ./src/test4.js ***!
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

/*
 * @Descripttion: 实现react的生命周期
 * @version:
 * @Author:
 * @Date: 2019-10-11 16:54:41
 * @LastEditors:
 * @LastEditTime: 2019-10-21 16:21:28
 */
// 参考这里 https://github.com/hujiulong/blog/issues/5

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
    attrs: attr,
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
  renderComponent(this); // 重新渲染
};

var ReactDOM = {
  render: render // 在调用ReactDOM.render(<B/>, document.getElementById('app'))的时候，<B/>已经被转换成document.createElement(B，null)的格式，结果为,{nodeName: B, attrs: null}即虚拟DOM

};

function render(vnode, container) {
  return container.appendChild(_render(vnode));
} // 渲染真实dom


function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  if (typeof vnode === 'number') vnode = String(vnode);

  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return textNode;
  }

  if (typeof vnode.nodeName === 'function') {
    var component = createComponent(vnode.nodeName, vnode.attrs); // 以B为例, createComponent(B, null) ===> {base: div, props: null, state: {count: 1}}

    console.log('createComponent', component);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  var dom = document.createElement(vnode.nodeName);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      setAttribute(dom, key, value);
      console.log('层层递归', dom, key, value);
    });
  }

  vnode.children.forEach(function (child) {
    return render(child, dom);
  });
  return dom;
} // 创建组件


function createComponent(component, props) {
  var inst; // 如果是类定义组件，则直接返回实例

  if (component.prototype && component.prototype.render) {
    inst = new component(props);
    console.log('组件实例化', inst); // {base: div, props: null, state: {count: 1}}
    // 如果是函数定义组件，则将其扩展为类定义组件
  } else {
    inst = new Component(props);
    inst.constructor = component;

    inst.render = function () {
      return this.constructor(props);
    };
  }

  return inst;
} // set props
// 其中可以实现componentWillMount，componentWillReceiveProps两个生命周期方法


function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;
  renderComponent(component);
} // renderComponent方法用来渲染组件，setState方法中会直接调用这个方法进行重新渲染，
// 在这个方法里可以实现componentWillUpdate，componentDidUpdate，componentDidMount几个生命周期方法。


function renderComponent(component) {
  var base;
  var renderer = component.render();

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
} // 处理DOM的属性


function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class';
  }

  if (attr.match(/on\w+/)) {
    // w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
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
}

var A =
/*#__PURE__*/
function (_Component) {
  _inherits(A, _Component);

  function A() {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, _getPrototypeOf(A).apply(this, arguments));
  }

  _createClass(A, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      console.log('componentWillReceiveProps');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.props.count);
    }
  }]);

  return A;
}(Component);

var B =
/*#__PURE__*/
function (_Component2) {
  _inherits(B, _Component2);

  function B(props) {
    var _this;

    _classCallCheck(this, B);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(B).call(this, props));
    _this.state = {
      count: 1
    };
    return _this;
  }

  _createClass(B, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log('生命周期之componentWillMount');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('生命周期之componentDidMount');
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      console.log('生命周期之shouldComponentUpdate', nextProps, nextState);
      return true;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log('生命周期之componentWillUpdate');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('生命周期之componentDidUpdate');
    }
  }, {
    key: "click",
    value: function click() {
      this.setState({
        count: ++this.state.count
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log('B组件的render方法', 'render');
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.click.bind(this)
      }, "Click Me!"), React.createElement(A, {
        count: this.state.count
      }));
    }
  }]);

  return B;
}(Component);

ReactDOM.render(React.createElement(B, null), document.getElementById('app')); // 被jsx转换成 ReactDOM.render(React.createElement(B, null), document.getElementById('app'));
// ReactDOM.render(
//   <A name="count" />,
//   document.getElementById('app')
// )

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3Q0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cnMiLCJjaGlsZHJlbiIsImtleSIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJwcm90b3R5cGUiLCJzZXRTdGF0ZSIsInVwZGF0ZU9iaiIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlckNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwidm5vZGUiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsIl9yZW5kZXIiLCJTdHJpbmciLCJ0ZXh0Tm9kZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb25zb2xlIiwibG9nIiwic2V0Q29tcG9uZW50UHJvcHMiLCJiYXNlIiwiZG9tIiwia2V5cyIsImZvckVhY2giLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImluc3QiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJyZW5kZXJlciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJfY29tcG9uZW50IiwibWF0Y2giLCJldmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFuZGFyZFN0eWxlIiwic3RhbmRhcmRTdHlsZUNvbnRlbnQiLCJzaW5nbGVTdHlsZSIsImRlY2FtZWxpemUiLCJzZXBhcmF0b3IiLCJfIiwiaXNOdW1iZXIiLCJBIiwiY291bnQiLCJCIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiY2xpY2siLCJiaW5kIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7Ozs7Ozs7O0FBU0E7QUFFQTtDQUdBOztBQUNBLElBQU1BLEtBQUssR0FBRztBQUNaQyxlQUFhLEVBQWJBO0FBRFksQ0FBZDs7QUFJQSxTQUFTQSxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsSUFBNUIsRUFBNEM7QUFBQSxvQ0FBUEMsS0FBTztBQUFQQSxTQUFPO0FBQUE7O0FBQzFDLFNBQU87QUFDTEMsWUFBUSxFQUFFSCxHQURMO0FBRUxJLFNBQUssRUFBRUgsSUFGRjtBQUdMSSxZQUFRLEVBQUVILEtBSEw7QUFHWTtBQUNqQkksT0FBRyxFQUFFQztBQUpBLEdBQVA7QUFNRCxDLENBRUQ7OztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCLE9BQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxLQUFLQSxLQUFMLEdBQWEsRUFBMUI7QUFDRDs7QUFFREYsU0FBUyxDQUFDRyxTQUFWLENBQW9CQyxRQUFwQixHQUErQixVQUFVQyxTQUFWLEVBQXFCO0FBQ2xELE9BQUtILEtBQUwsR0FBYUksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLTCxLQUF2QixFQUE4QkcsU0FBOUIsQ0FBYjtBQUNBRyxpQkFBZSxDQUFDLElBQUQsQ0FBZixDQUZrRCxDQUUzQjtBQUN4QixDQUhEOztBQUtBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxRQUFNLEVBQU5BLE1BRGUsQ0FJakI7O0FBSmlCLENBQWpCOztBQUtBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxTQUF2QixFQUFrQztBQUNoQyxTQUFPQSxTQUFTLENBQUNDLFdBQVYsQ0FBc0JDLE9BQU8sQ0FBQ0gsS0FBRCxDQUE3QixDQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTRyxPQUFULENBQWlCSCxLQUFqQixFQUF3QjtBQUN0QixNQUFJQSxLQUFLLEtBQUtaLFNBQVYsSUFBdUJZLEtBQUssS0FBSyxJQUFqQyxJQUF5QyxPQUFPQSxLQUFQLEtBQWlCLFNBQTlELEVBQXlFQSxLQUFLLEdBQUcsRUFBUjtBQUN6RSxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0JBLEtBQUssR0FBR0ksTUFBTSxDQUFDSixLQUFELENBQWQ7O0FBQy9CLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFJSyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlAsS0FBeEIsQ0FBZjtBQUNBLFdBQU9LLFFBQVA7QUFDRDs7QUFFRCxNQUFJLE9BQU9MLEtBQUssQ0FBQ2hCLFFBQWIsS0FBMEIsVUFBOUIsRUFBMEM7QUFDeEMsUUFBTXdCLFNBQVMsR0FBR0MsZUFBZSxDQUFDVCxLQUFLLENBQUNoQixRQUFQLEVBQWlCZ0IsS0FBSyxDQUFDZixLQUF2QixDQUFqQyxDQUR3QyxDQUN3Qjs7QUFDaEV5QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkgsU0FBL0I7QUFDQUkscUJBQWlCLENBQUNKLFNBQUQsRUFBWVIsS0FBSyxDQUFDZixLQUFsQixDQUFqQjtBQUNBLFdBQU91QixTQUFTLENBQUNLLElBQWpCO0FBQ0Q7O0FBRUQsTUFBTUMsR0FBRyxHQUFHUixRQUFRLENBQUMxQixhQUFULENBQXVCb0IsS0FBSyxDQUFDaEIsUUFBN0IsQ0FBWjs7QUFFQSxNQUFJZ0IsS0FBSyxDQUFDZixLQUFWLEVBQWlCO0FBQ2ZVLFVBQU0sQ0FBQ29CLElBQVAsQ0FBWWYsS0FBSyxDQUFDZixLQUFsQixFQUF5QitCLE9BQXpCLENBQWlDLFVBQUE3QixHQUFHLEVBQUk7QUFDdEMsVUFBTThCLEtBQUssR0FBR2pCLEtBQUssQ0FBQ2YsS0FBTixDQUFZRSxHQUFaLENBQWQ7QUFDQStCLGtCQUFZLENBQUNKLEdBQUQsRUFBTTNCLEdBQU4sRUFBVzhCLEtBQVgsQ0FBWjtBQUNBUCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRyxHQUFwQixFQUF5QjNCLEdBQXpCLEVBQThCOEIsS0FBOUI7QUFDRCxLQUpEO0FBS0Q7O0FBQ0RqQixPQUFLLENBQUNkLFFBQU4sQ0FBZThCLE9BQWYsQ0FBdUIsVUFBQWpDLEtBQUs7QUFBQSxXQUFJZ0IsTUFBTSxDQUFDaEIsS0FBRCxFQUFRK0IsR0FBUixDQUFWO0FBQUEsR0FBNUI7QUFFQSxTQUFPQSxHQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQSxTQUFTTCxlQUFULENBQXlCRCxTQUF6QixFQUFvQ2xCLEtBQXBDLEVBQTJDO0FBQ3pDLE1BQUk2QixJQUFKLENBRHlDLENBRXpDOztBQUNBLE1BQUlYLFNBQVMsQ0FBQ2hCLFNBQVYsSUFBdUJnQixTQUFTLENBQUNoQixTQUFWLENBQW9CTyxNQUEvQyxFQUF1RDtBQUNyRG9CLFFBQUksR0FBRyxJQUFJWCxTQUFKLENBQWNsQixLQUFkLENBQVA7QUFDQW9CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJRLElBQXJCLEVBRnFELENBRXpCO0FBQzVCO0FBQ0QsR0FKRCxNQUlPO0FBQ0xBLFFBQUksR0FBRyxJQUFJOUIsU0FBSixDQUFjQyxLQUFkLENBQVA7QUFDQTZCLFFBQUksQ0FBQ0MsV0FBTCxHQUFtQlosU0FBbkI7O0FBQ0FXLFFBQUksQ0FBQ3BCLE1BQUwsR0FBYyxZQUFZO0FBQ3hCLGFBQU8sS0FBS3FCLFdBQUwsQ0FBaUI5QixLQUFqQixDQUFQO0FBQ0QsS0FGRDtBQUdEOztBQUNELFNBQU82QixJQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7OztBQUNBLFNBQVNQLGlCQUFULENBQTJCSixTQUEzQixFQUFzQ2xCLEtBQXRDLEVBQTZDO0FBQzNDLE1BQUksQ0FBQ2tCLFNBQVMsQ0FBQ0ssSUFBZixFQUFxQjtBQUNuQixRQUFJTCxTQUFTLENBQUNhLGtCQUFkLEVBQWtDYixTQUFTLENBQUNhLGtCQUFWO0FBQ25DLEdBRkQsTUFFTyxJQUFJYixTQUFTLENBQUNjLHlCQUFkLEVBQXlDO0FBQzlDZCxhQUFTLENBQUNjLHlCQUFWLENBQW9DaEMsS0FBcEM7QUFDRDs7QUFDRGtCLFdBQVMsQ0FBQ2xCLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0FPLGlCQUFlLENBQUNXLFNBQUQsQ0FBZjtBQUNELEMsQ0FFRDtBQUNBOzs7QUFDQSxTQUFTWCxlQUFULENBQXlCVyxTQUF6QixFQUFvQztBQUNsQyxNQUFJSyxJQUFKO0FBQ0EsTUFBTVUsUUFBUSxHQUFHZixTQUFTLENBQUNULE1BQVYsRUFBakI7O0FBRUEsTUFBSVMsU0FBUyxDQUFDSyxJQUFWLElBQWtCTCxTQUFTLENBQUNnQixtQkFBaEMsRUFBcUQ7QUFDbkRoQixhQUFTLENBQUNnQixtQkFBVjtBQUNEOztBQUVEWCxNQUFJLEdBQUdWLE9BQU8sQ0FBQ29CLFFBQUQsQ0FBZDs7QUFFQSxNQUFJZixTQUFTLENBQUNLLElBQWQsRUFBb0I7QUFDbEIsUUFBSUwsU0FBUyxDQUFDaUIsa0JBQWQsRUFBa0NqQixTQUFTLENBQUNpQixrQkFBVjtBQUNuQyxHQUZELE1BRU8sSUFBSWpCLFNBQVMsQ0FBQ2tCLGlCQUFkLEVBQWlDO0FBQ3RDbEIsYUFBUyxDQUFDa0IsaUJBQVY7QUFDRDs7QUFFRCxNQUFJbEIsU0FBUyxDQUFDSyxJQUFWLElBQWtCTCxTQUFTLENBQUNLLElBQVYsQ0FBZWMsVUFBckMsRUFBaUQ7QUFDL0NuQixhQUFTLENBQUNLLElBQVYsQ0FBZWMsVUFBZixDQUEwQkMsWUFBMUIsQ0FBdUNmLElBQXZDLEVBQTZDTCxTQUFTLENBQUNLLElBQXZEO0FBQ0Q7O0FBRURMLFdBQVMsQ0FBQ0ssSUFBVixHQUFpQkEsSUFBakI7QUFDQUEsTUFBSSxDQUFDZ0IsVUFBTCxHQUFrQnJCLFNBQWxCO0FBRUQsQyxDQUdEOzs7QUFDQSxTQUFTVSxZQUFULENBQXNCSixHQUF0QixFQUEyQmhDLElBQTNCLEVBQWlDbUMsS0FBakMsRUFBd0M7QUFDdEMsTUFBSW5DLElBQUksS0FBSyxXQUFiLEVBQTBCO0FBQ3hCQSxRQUFJLEdBQUcsT0FBUDtBQUNEOztBQUNELE1BQUlBLElBQUksQ0FBQ2dELEtBQUwsQ0FBVyxPQUFYLENBQUosRUFBeUI7QUFBRTtBQUN6QixRQUFNQyxTQUFTLEdBQUdqRCxJQUFJLENBQUNrRCxXQUFMLEdBQW1CQyxNQUFuQixDQUEwQixDQUExQixDQUFsQjtBQUNBbkIsT0FBRyxDQUFDb0IsZ0JBQUosQ0FBcUJILFNBQXJCLEVBQWdDZCxLQUFoQztBQUNELEdBSEQsTUFHTyxJQUFJbkMsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFBRTtBQUM3QixRQUFJcUQsYUFBSjtBQUNBLFFBQUlDLG9CQUFKOztBQUNBLFNBQUssSUFBSUMsV0FBVCxJQUF3QnZELElBQXhCLEVBQThCO0FBQzVCcUQsbUJBQWEsR0FBR0csd0RBQVUsQ0FBQ0QsV0FBRCxFQUFjO0FBQUVFLGlCQUFTLEVBQUU7QUFBYixPQUFkLENBQTFCLENBRDRCLENBQ2dDOztBQUM1RHRCLFdBQUssQ0FBQ29CLFdBQUQsQ0FBTCxHQUFxQkcsNkNBQUMsQ0FBQ0MsUUFBRixDQUFXeEIsS0FBSyxDQUFDb0IsV0FBRCxDQUFoQixJQUFpQ3BCLEtBQUssQ0FBQ29CLFdBQUQsQ0FBTCxHQUFxQixJQUF0RCxHQUE2RHBCLEtBQUssQ0FBQ29CLFdBQUQsQ0FBdkY7QUFDQUQsMEJBQW9CLGNBQU9ELGFBQVAsZUFBeUJsQixLQUFLLENBQUNvQixXQUFELENBQTlCLE1BQXBCO0FBQ0Q7O0FBQ0R2QixPQUFHLENBQUNJLFlBQUosQ0FBaUJwQyxJQUFqQixFQUF1QnNELG9CQUF2QixFQVIyQixDQVFrQjtBQUM5QyxHQVRNLE1BU0E7QUFDTHRCLE9BQUcsQ0FBQ0ksWUFBSixDQUFpQnBDLElBQWpCLEVBQXVCbUMsS0FBdkIsRUFESyxDQUN5QjtBQUMvQjtBQUNGOztJQUVLeUIsQzs7Ozs7Ozs7Ozs7Ozs4Q0FDc0JwRCxLLEVBQU87QUFDL0JvQixhQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFLGlDQUFNLEtBQUtyQixLQUFMLENBQVdxRCxLQUFqQixDQURGO0FBR0Q7Ozs7RUFUYXRELFM7O0lBWVZ1RCxDOzs7OztBQUNKLGFBQVl0RCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDJFQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hvRCxXQUFLLEVBQUU7QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUNuQmpDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEJELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0Q7OzswQ0FFcUJrQyxTLEVBQVdDLFMsRUFBVztBQUMxQ3BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaLEVBQTBDa0MsU0FBMUMsRUFBcURDLFNBQXJEO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEJwQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNEOzs7eUNBRW9CO0FBQ25CRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNEOzs7NEJBRU87QUFDTixXQUFLbEIsUUFBTCxDQUFjO0FBQ1prRCxhQUFLLEVBQUUsRUFBRSxLQUFLcEQsS0FBTCxDQUFXb0Q7QUFEUixPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQakMsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QixRQUE1QjtBQUNBLGFBQ0UsaUNBQ0U7QUFBUSxlQUFPLEVBQUUsS0FBS29DLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQjtBQUFqQixxQkFERixFQUVFLG9CQUFDLENBQUQ7QUFBRyxhQUFLLEVBQUUsS0FBS3pELEtBQUwsQ0FBV29EO0FBQXJCLFFBRkYsQ0FERjtBQU1EOzs7O0VBM0NhdEQsUzs7QUE4Q2hCUyxRQUFRLENBQUNDLE1BQVQsQ0FDRSxvQkFBQyxDQUFELE9BREYsRUFFRU8sUUFBUSxDQUFDMkMsY0FBVCxDQUF3QixLQUF4QixDQUZGLEUsQ0FJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEkiLCJmaWxlIjoidGVzdDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwidGVzdDRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy90ZXN0NC5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qXHJcbiAqIEBEZXNjcmlwdHRpb246IOWunueOsHJlYWN055qE55Sf5ZG95ZGo5pyfXHJcbiAqIEB2ZXJzaW9uOlxyXG4gKiBAQXV0aG9yOlxyXG4gKiBARGF0ZTogMjAxOS0xMC0xMSAxNjo1NDo0MVxyXG4gKiBATGFzdEVkaXRvcnM6XHJcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMTktMTAtMjEgMTY6MjE6MjhcclxuICovXHJcblxyXG4vLyDlj4LogIPov5nph4wgaHR0cHM6Ly9naXRodWIuY29tL2h1aml1bG9uZy9ibG9nL2lzc3Vlcy81XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IGRlY2FtZWxpemUgfSBmcm9tICdodW1wcydcclxuXHJcbi8vIOWumuS5iWNyZWF0ZUVsZW1lbnTmlrnms5VcclxuY29uc3QgUmVhY3QgPSB7XHJcbiAgY3JlYXRlRWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgLi4uY2hpbGQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZU5hbWU6IHRhZyxcclxuICAgIGF0dHJzOiBhdHRyLFxyXG4gICAgY2hpbGRyZW46IGNoaWxkLCAvLyDmlbDnu4RcclxuICAgIGtleTogdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmnoTpgKDlh73mlbBjb21wb25lbnRcclxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfCB7fVxyXG59XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xyXG4gIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB1cGRhdGVPYmopXHJcbiAgcmVuZGVyQ29tcG9uZW50KHRoaXMpOyAvLyDph43mlrDmuLLmn5NcclxufVxyXG5cclxuY29uc3QgUmVhY3RET00gPSB7XHJcbiAgcmVuZGVyXHJcbn1cclxuXHJcbi8vIOWcqOiwg+eUqFJlYWN0RE9NLnJlbmRlcig8Qi8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykp55qE5pe25YCZ77yMPEIvPuW3sue7j+iiq+i9rOaNouaIkGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoQu+8jG51bGwp55qE5qC85byP77yM57uT5p6c5Li6LHtub2RlTmFtZTogQiwgYXR0cnM6IG51bGx95Y2z6Jma5oufRE9NXHJcbmZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgY29udGFpbmVyKSB7XHJcbiAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfcmVuZGVyKHZub2RlKSk7XHJcbn1cclxuXHJcbi8vIOa4suafk+ecn+WunmRvbVxyXG5mdW5jdGlvbiBfcmVuZGVyKHZub2RlKSB7XHJcbiAgaWYgKHZub2RlID09PSB1bmRlZmluZWQgfHwgdm5vZGUgPT09IG51bGwgfHwgdHlwZW9mIHZub2RlID09PSAnYm9vbGVhbicpIHZub2RlID0gJyc7XHJcbiAgaWYgKHR5cGVvZiB2bm9kZSA9PT0gJ251bWJlcicpIHZub2RlID0gU3RyaW5nKHZub2RlKTtcclxuICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJykge1xyXG4gICAgbGV0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xyXG4gICAgcmV0dXJuIHRleHROb2RlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2bm9kZS5ub2RlTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50KHZub2RlLm5vZGVOYW1lLCB2bm9kZS5hdHRycyk7IC8vIOS7pULkuLrkvossIGNyZWF0ZUNvbXBvbmVudChCLCBudWxsKSA9PT0+IHtiYXNlOiBkaXYsIHByb3BzOiBudWxsLCBzdGF0ZToge2NvdW50OiAxfX1cclxuICAgIGNvbnNvbGUubG9nKCdjcmVhdGVDb21wb25lbnQnLCBjb21wb25lbnQpXHJcbiAgICBzZXRDb21wb25lbnRQcm9wcyhjb21wb25lbnQsIHZub2RlLmF0dHJzKTtcclxuICAgIHJldHVybiBjb21wb25lbnQuYmFzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodm5vZGUubm9kZU5hbWUpXHJcblxyXG4gIGlmICh2bm9kZS5hdHRycykge1xyXG4gICAgT2JqZWN0LmtleXModm5vZGUuYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB2bm9kZS5hdHRyc1trZXldO1xyXG4gICAgICBzZXRBdHRyaWJ1dGUoZG9tLCBrZXksIHZhbHVlKTtcclxuICAgICAgY29uc29sZS5sb2coJ+WxguWxgumAkuW9kicsIGRvbSwga2V5LCB2YWx1ZSlcclxuICAgIH0pO1xyXG4gIH1cclxuICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHJlbmRlcihjaGlsZCwgZG9tKSk7XHJcblxyXG4gIHJldHVybiBkb207XHJcbn1cclxuXHJcbi8vIOWIm+W7uue7hOS7tlxyXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xyXG4gIGxldCBpbnN0O1xyXG4gIC8vIOWmguaenOaYr+exu+WumuS5iee7hOS7tu+8jOWImeebtOaOpei/lOWbnuWunuS+i1xyXG4gIGlmIChjb21wb25lbnQucHJvdG90eXBlICYmIGNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKSB7XHJcbiAgICBpbnN0ID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XHJcbiAgICBjb25zb2xlLmxvZygn57uE5Lu25a6e5L6L5YyWJywgaW5zdCkgIC8vIHtiYXNlOiBkaXYsIHByb3BzOiBudWxsLCBzdGF0ZToge2NvdW50OiAxfX1cclxuICAgIC8vIOWmguaenOaYr+WHveaVsOWumuS5iee7hOS7tu+8jOWImeWwhuWFtuaJqeWxleS4uuexu+WumuS5iee7hOS7tlxyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnN0ID0gbmV3IENvbXBvbmVudChwcm9wcyk7XHJcbiAgICBpbnN0LmNvbnN0cnVjdG9yID0gY29tcG9uZW50O1xyXG4gICAgaW5zdC5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGluc3Q7XHJcbn1cclxuXHJcbi8vIHNldCBwcm9wc1xyXG4vLyDlhbbkuK3lj6/ku6Xlrp7njrBjb21wb25lbnRXaWxsTW91bnTvvIxjb21wb25lbnRXaWxsUmVjZWl2ZVByb3Bz5Lik5Liq55Sf5ZG95ZGo5pyf5pa55rOVXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5iYXNlKSB7XHJcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxNb3VudCgpO1xyXG4gIH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcclxuICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKTtcclxuICB9XHJcbiAgY29tcG9uZW50LnByb3BzID0gcHJvcHM7XHJcbiAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbn1cclxuXHJcbi8vIHJlbmRlckNvbXBvbmVudOaWueazleeUqOadpea4suafk+e7hOS7tu+8jHNldFN0YXRl5pa55rOV5Lit5Lya55u05o6l6LCD55So6L+Z5Liq5pa55rOV6L+b6KGM6YeN5paw5riy5p+T77yMXHJcbi8vIOWcqOi/meS4quaWueazlemHjOWPr+S7peWunueOsGNvbXBvbmVudFdpbGxVcGRhdGXvvIxjb21wb25lbnREaWRVcGRhdGXvvIxjb21wb25lbnREaWRNb3VudOWHoOS4queUn+WRveWRqOacn+aWueazleOAglxyXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgbGV0IGJhc2U7XHJcbiAgY29uc3QgcmVuZGVyZXIgPSBjb21wb25lbnQucmVuZGVyKCk7XHJcblxyXG4gIGlmIChjb21wb25lbnQuYmFzZSAmJiBjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xyXG4gICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGJhc2UgPSBfcmVuZGVyKHJlbmRlcmVyKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5iYXNlKSB7XHJcbiAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSkgY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSgpO1xyXG4gIH0gZWxzZSBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KSB7XHJcbiAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQoKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuYmFzZSAmJiBjb21wb25lbnQuYmFzZS5wYXJlbnROb2RlKSB7XHJcbiAgICBjb21wb25lbnQuYmFzZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChiYXNlLCBjb21wb25lbnQuYmFzZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnQuYmFzZSA9IGJhc2U7XHJcbiAgYmFzZS5fY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuXHJcbi8vIOWkhOeQhkRPTeeahOWxnuaAp1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2YWx1ZSkge1xyXG4gIGlmIChhdHRyID09PSAnY2xhc3NOYW1lJykge1xyXG4gICAgYXR0ciA9ICdjbGFzcydcclxuICB9XHJcbiAgaWYgKGF0dHIubWF0Y2goL29uXFx3Ky8pKSB7IC8vIHcg5Yy56YWN5a2X5q+N5oiW5pWw5a2X5oiW5LiL5YiS57q/5oiW5rGJ5a2XIOetieS7t+S6jiAnW15BLVphLXowLTlfXSdcclxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGF0dHIudG9Mb3dlckNhc2UoKS5zdWJzdHIoMilcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpXHJcbiAgfSBlbHNlIGlmIChhdHRyID09PSAnc3R5bGUnKSB7IC8vIHN0eWxlID0ge3t3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX1cclxuICAgIGxldCBzdGFuZGFyZFN0eWxlXHJcbiAgICBsZXQgc3RhbmRhcmRTdHlsZUNvbnRlbnRcclxuICAgIGZvciAobGV0IHNpbmdsZVN0eWxlIGluIGF0dHIpIHtcclxuICAgICAgc3RhbmRhcmRTdHlsZSA9IGRlY2FtZWxpemUoc2luZ2xlU3R5bGUsIHsgc2VwYXJhdG9yOiAnLScgfSkgLy8g5aSn5YaZ5a2X5q+N6L2s5Lit5YiS57q/XHJcbiAgICAgIHZhbHVlW3NpbmdsZVN0eWxlXSA9IF8uaXNOdW1iZXIodmFsdWVbc2luZ2xlU3R5bGVdKSA/IHZhbHVlW3NpbmdsZVN0eWxlXSArICdweCcgOiB2YWx1ZVtzaW5nbGVTdHlsZV1cclxuICAgICAgc3RhbmRhcmRTdHlsZUNvbnRlbnQgKz0gYCR7c3RhbmRhcmRTdHlsZX06ICR7dmFsdWVbc2luZ2xlU3R5bGVdfTtgXHJcbiAgICB9XHJcbiAgICBkb20uc2V0QXR0cmlidXRlKGF0dHIsIHN0YW5kYXJkU3R5bGVDb250ZW50KSAvLyBET03oh6rluKbnmoTmlrnms5VcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSkgLy8g5aSE55CGY2xhc3PvvIznrYnnrYnluLjop4TlsZ7mgKdcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+e3RoaXMucHJvcHMuY291bnR9PC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb3VudDogMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eUn+WRveWRqOacn+S5i2NvbXBvbmVudFdpbGxNb3VudCcpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCfnlJ/lkb3lkajmnJ/kuYtjb21wb25lbnREaWRNb3VudCcpXHJcbiAgfVxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCfnlJ/lkb3lkajmnJ/kuYtzaG91bGRDb21wb25lbnRVcGRhdGUnLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSlcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eUn+WRveWRqOacn+S5i2NvbXBvbmVudFdpbGxVcGRhdGUnKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+eUn+WRveWRqOacn+S5i2NvbXBvbmVudERpZFVwZGF0ZScpXHJcbiAgfVxyXG5cclxuICBjbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb3VudDogKyt0aGlzLnN0YXRlLmNvdW50XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0Lnu4Tku7bnmoRyZW5kZXLmlrnms5UnLCAncmVuZGVyJylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsaWNrLmJpbmQodGhpcyl9PkNsaWNrIE1lITwvYnV0dG9uPlxyXG4gICAgICAgIDxBIGNvdW50PXt0aGlzLnN0YXRlLmNvdW50fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QiAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKVxyXG4vLyDooqtqc3jovazmjaLmiJAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQiwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoXHJcbi8vICAgPEEgbmFtZT1cImNvdW50XCIgLz4sXHJcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbi8vIClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==