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
 * @LastEditTime: 2019-10-18 17:29:29
 */

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
  render: render
};

function render(vdom, container) {
  var component;

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(vdom.nodeName)) {
    // 由babel转换过后,nodeName可以是一个函数
    if (vdom.nodeName.prototype.render) {
      // 如果组件有render方法，说明是有状态组件，class里面的方法是定义在prototype上面的
      component = new vdom.nodeName(vdom.attributes); // 这一步只是处理了vdom的

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
} // react生命周期分为三个部分，生成，存在，销毁
// 生命周期放在vdom转换成dom的过程中，需要改造之前的_render方法


function _render(component, container) {
  console.log("_render\u7684component", component);
  setProps(component);
  renderComponent(component); // return component.base

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
}

function setProps(component) {
  if (component && component.componentWillMount) {
    component.componentWillMount();
  } else if (component.base && component.componentWillReceiveProps) {
    component.componentWillReceiveProps(component.props); // ??
  }
}

function renderComponent(component) {
  // 需要接受参数，确认是否需要更新视图
  if (component.base && component.shouldComponentUpdate) {
    var bool = component.shouldComponentUpdate(component.props, component.state); // 

    if (!bool && bool !== undefined) {
      // !why?
      return false; // 视图不更新
    }
  }

  if (component.base && component.componentWillUpdate) {}

  var rendered = component.render ? component.render() : ''; // ??

  console.log(rendered);
  var base = '_render(rendered)'; // ??
  // 两个需要渲染的生命周期

  if (component.base && componentDidUpdate) {
    component.componentDidUpdate();
  } else if (component.base && componentDidMount) {
    component.componentDidMount();
  }

  component.base = base; // 标识符
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
      console.log('componentWillMount');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount');
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate', nextProps, nextState);
      return true;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      console.log('componentWillUpdate');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('componentDidUpdate');
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
      console.log('render');
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.click.bind(this)
      }, "Click Me!"), React.createElement(A, {
        count: this.state.count
      }));
    }
  }]);

  return B;
}(Component);

ReactDOM.render(React.createElement(B, null), document.getElementById('root'));
ReactDOM.render(React.createElement(A, {
  name: "count"
}), document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3Q0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsInByb3RvdHlwZSIsInNldFN0YXRlIiwidXBkYXRlT2JqIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdERPTSIsInJlbmRlciIsInZkb20iLCJjb250YWluZXIiLCJjb21wb25lbnQiLCJfIiwiaXNGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRQcm9wcyIsInJlbmRlckNvbXBvbmVudCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpbm5lclRleHQiLCJkb20iLCJzZXRBdHRyaWJ1dGUiLCJsZW5ndGgiLCJmb3JFYWNoIiwidmRvbUNoaWxkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJiYXNlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImJvb2wiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwicmVuZGVyZWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInZhbHVlIiwibWF0Y2giLCJldmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFuZGFyZFN0eWxlIiwic3RhbmRhcmRTdHlsZUNvbnRlbnQiLCJzaW5nbGVTdHlsZSIsImRlY2FtZWxpemUiLCJzZXBhcmF0b3IiLCJBIiwiY291bnQiLCJCIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiY2xpY2siLCJiaW5kIl0s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LE1BQVQsQ0FDRSxvQkFBQyxDQUFEO0FBQUcsTUFBSSxFQUFDO0FBQVIsRUFERixFQUVFSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRixFIiwiZmlsZSI6InRlc3Q0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInRlc3Q0XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvdGVzdDQuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKlxyXG4gKiBARGVzY3JpcHR0aW9uOiDlrp7njrByZWFjdOeahOeUn+WRveWRqOacn1xyXG4gKiBAdmVyc2lvbjpcclxuICogQEF1dGhvcjpcclxuICogQERhdGU6IDIwMTktMTAtMTEgMTY6NTQ6NDFcclxuICogQExhc3RFZGl0b3JzOlxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDE5LTEwLTE4IDE3OjI5OjI5XHJcbiAqL1xyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBkZWNhbWVsaXplIH0gZnJvbSAnaHVtcHMnXHJcblxyXG4vLyDlrprkuYljcmVhdGVFbGVtZW505pa55rOVXHJcbmNvbnN0IFJlYWN0ID0ge1xyXG4gIGNyZWF0ZUVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHIsIC4uLmNoaWxkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vZGVOYW1lOiB0YWcsXHJcbiAgICBhdHRyaWJ1dGVzOiBhdHRyLFxyXG4gICAgY2hpbGRyZW46IGNoaWxkLCAvLyDmlbDnu4RcclxuICAgIGtleTogdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcblxyXG4vLyDmnoTpgKDlh73mlbBjb21wb25lbnRcclxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgdGhpcy5wcm9wcyA9IHByb3BzXHJcbiAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfCB7fVxyXG59XHJcblxyXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xyXG4gIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCB1cGRhdGVPYmopXHJcbiAgX3JlbmRlcih0aGlzLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpIC8vIOmHjeaWsOa4suafk1xyXG59XHJcblxyXG5jb25zdCBSZWFjdERPTSA9IHtcclxuICByZW5kZXJcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKHZkb20sIGNvbnRhaW5lcikge1xyXG4gIGxldCBjb21wb25lbnRcclxuICBpZiAoXy5pc0Z1bmN0aW9uKHZkb20ubm9kZU5hbWUpKSB7IC8vIOeUsWJhYmVs6L2s5o2i6L+H5ZCOLG5vZGVOYW1l5Y+v5Lul5piv5LiA5Liq5Ye95pWwXHJcbiAgICBpZiAodmRvbS5ub2RlTmFtZS5wcm90b3R5cGUucmVuZGVyKSB7IC8vIOWmguaenOe7hOS7tuaciXJlbmRlcuaWueazle+8jOivtOaYjuaYr+acieeKtuaAgee7hOS7tu+8jGNsYXNz6YeM6Z2i55qE5pa55rOV5piv5a6a5LmJ5ZyocHJvdG90eXBl5LiK6Z2i55qEXHJcbiAgICAgIGNvbXBvbmVudCA9IG5ldyB2ZG9tLm5vZGVOYW1lKHZkb20uYXR0cmlidXRlcykgLy8g6L+Z5LiA5q2l5Y+q5piv5aSE55CG5LqGdmRvbeeahFxyXG4gICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50JywgY29tcG9uZW50KVxyXG4gICAgICAvLyBBOlxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgcHJvcHM6IHtuYW1lOiBcImNvdW50XCJ9XHJcbiAgICAgIC8vICAgc3RhdGU6IHtjb3VudDogMX1cclxuICAgICAgLy8gICBfX3Byb3RvX186IENvbXBvbmVudFxyXG4gICAgICAvLyB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wb25lbnQgPSB2ZG9tLm5vZGVOYW1lKHZkb20uYXR0cmlidXRlcykgLy8g5peg54q25oCB57uE5Lu277yM5Ye95pWw55u05o6l5omn6KGM77yM5LiN55So5L2/55So5p6E6YCg5Ye95pWwXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudCA/IF9yZW5kZXIoY29tcG9uZW50LCBjb250YWluZXIpIDogX3JlbmRlcih2ZG9tLCBjb250YWluZXIpXHJcbn1cclxuXHJcbi8vIHJlYWN055Sf5ZG95ZGo5pyf5YiG5Li65LiJ5Liq6YOo5YiG77yM55Sf5oiQ77yM5a2Y5Zyo77yM6ZSA5q+BXHJcbi8vIOeUn+WRveWRqOacn+aUvuWcqHZkb23ovazmjaLmiJBkb23nmoTov4fnqIvkuK3vvIzpnIDopoHmlLnpgKDkuYvliY3nmoRfcmVuZGVy5pa55rOVXHJcblxyXG5mdW5jdGlvbiBfcmVuZGVyKGNvbXBvbmVudCwgY29udGFpbmVyKSB7XHJcbiAgY29uc29sZS5sb2coYF9yZW5kZXLnmoRjb21wb25lbnRgLCBjb21wb25lbnQpXHJcbiAgc2V0UHJvcHMoY29tcG9uZW50KVxyXG4gIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpXHJcbiAgLy8gcmV0dXJuIGNvbXBvbmVudC5iYXNlXHJcblxyXG4gIGNvbnN0IHZkb20gPSBjb21wb25lbnQucmVuZGVyID8gY29tcG9uZW50LnJlbmRlcigpIDogY29tcG9uZW50XHJcbiAgY29uc29sZS5sb2coJ3Zkb23miJbogIVyZW5kZXInLCB2ZG9tKVxyXG4gIC8vIGF0dHJpYnV0ZXM6IG51bGxcclxuICAvLyBjaGlsZHJlbjogW1xyXG4gIC8vICAgeyBub2RlTmFtZTogXCJidXR0b25cIiwgYXR0cmlidXRlczogeyDigKYgfSwgY2hpbGRyZW46IEFycmF5KDEpLCBrZXk6IHVuZGVmaW5lZCB9LFxyXG4gIC8vICAgeyBub2RlTmFtZTogXCJkaXZcIiwgYXR0cmlidXRlczogbnVsbCwgY2hpbGRyZW46IEFycmF5KDMpLCBrZXk6IHVuZGVmaW5lZCB9IF1cclxuICAvLyBfX3Byb3RvX186IEFycmF5KDApXHJcbiAgLy8ga2V5OiB1bmRlZmluZWRcclxuICAvLyBub2RlTmFtZTogXCJkaXZcIlxyXG4gIGlmIChfLmlzU3RyaW5nKHZkb20pIHx8IF8uaXNOdW1iZXIodmRvbSkpIHsgLy8gdmRvbeS4jeaYr+WvueixoeiAjOaYr+WNlee6r+eahHN0cmluZ+aIluiAhW51bWJlcuexu+Wei+WPmOmHj1xyXG4gICAgY29udGFpbmVyLmlubmVyVGV4dCA9IGNvbnRhaW5lci5pbm5lclRleHQgKyB2ZG9tXHJcbiAgICByZXR1cm4gLy8gISDlrZfnrKbkuLLnm7TmjqXlpITnkIblsLHov5Tlm55cclxuICB9XHJcbiAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZG9tLm5vZGVOYW1lKVxyXG4gIC8vIDEu5bGe5oCn5qC85byP5YyW5oiQaHRtbOaUr+aMgeeahOagvOW8j++8jHZkb23liLBkb23nmoTph43opoHkuIDmraVcclxuICBmb3IgKGxldCBhdHRyIGluIHZkb20uYXR0cmlidXRlcykge1xyXG4gICAgc2V0QXR0cmlidXRlKGRvbSwgYXR0ciwgdmRvbS5hdHRyaWJ1dGVzW2F0dHJdKVxyXG4gIH1cclxuICAvLyAyLuWvueS6jnZkb23nmoRjaGlsZHJlbu+8jOS5n+WwseaYr2RvbeeahOWtkOWFg+e0oO+8jOS5n+mcgOimgeagvOW8j+WMlu+8jOeItmRvbeabtOWKoOWujOWWhOS6hlxyXG4gIHZkb20uY2hpbGRyZW4gJiYgdmRvbS5jaGlsZHJlbi5sZW5ndGggJiYgdmRvbS5jaGlsZHJlbi5mb3JFYWNoKHZkb21DaGlsZCA9PiBfcmVuZGVyKHZkb21DaGlsZCwgZG9tKSkgLy8g6YCS5b2SXHJcbiAgLy8gMy7lr7nkuo5zZXRTdGF0ZeeahOWkhOeQhlxyXG4gIGlmIChjb21wb25lbnQuY29udGFpbmVyKSB7XHJcbiAgICBjb21wb25lbnQuY29udGFpbmVyLmlubmVySFRNTCA9IG51bGxcclxuICAgIGNvbXBvbmVudC5jb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbXBvbmVudC5jb250YWluZXIgPSBjb250YWluZXIgLy8g56ys5LiA5qyh5riy5p+T57uZY29tcG9uZW505aKe5Yqg5LiA5LiqY29udGFpbmVy5bGe5oCn77yM5LmL5ZCO5YaN5qyh6aqM6K+B5pe277yM5bCx5Y+v5Lul55+l6YGT6K+l57uE5Lu25LiN5piv56ys5LiA5qyh5riy5p+T5LqGXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbSlcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzZXRQcm9wcyhjb21wb25lbnQpIHtcclxuICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIHtcclxuICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKVxyXG4gIH0gZWxzZSBpZiAoY29tcG9uZW50LmJhc2UgJiYgY29tcG9uZW50LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMpIHtcclxuICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGNvbXBvbmVudC5wcm9wcykgLy8gPz9cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAvLyDpnIDopoHmjqXlj5flj4LmlbDvvIznoa7orqTmmK/lkKbpnIDopoHmm7TmlrDop4blm75cclxuICBpZiAoY29tcG9uZW50LmJhc2UgJiYgY29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSkge1xyXG4gICAgY29uc3QgYm9vbCA9IGNvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUoY29tcG9uZW50LnByb3BzLCBjb21wb25lbnQuc3RhdGUpIC8vIFxyXG4gICAgaWYgKCFib29sICYmIGJvb2wgIT09IHVuZGVmaW5lZCkgeyAvLyAhd2h5P1xyXG4gICAgICByZXR1cm4gZmFsc2UgLy8g6KeG5Zu+5LiN5pu05pawXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChjb21wb25lbnQuYmFzZSAmJiBjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xyXG5cclxuICB9XHJcbiAgY29uc3QgcmVuZGVyZWQgPSBjb21wb25lbnQucmVuZGVyID8gY29tcG9uZW50LnJlbmRlcigpIDogJycgLy8gPz9cclxuICBjb25zb2xlLmxvZyhyZW5kZXJlZClcclxuICBjb25zdCBiYXNlID0gJ19yZW5kZXIocmVuZGVyZWQpJyAgLy8gPz9cclxuICAvLyDkuKTkuKrpnIDopoHmuLLmn5PnmoTnlJ/lkb3lkajmnJ9cclxuICBpZiAoY29tcG9uZW50LmJhc2UgJiYgY29tcG9uZW50RGlkVXBkYXRlKSB7XHJcbiAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKClcclxuICB9IGVsc2UgaWYgKGNvbXBvbmVudC5iYXNlICYmIGNvbXBvbmVudERpZE1vdW50KSB7XHJcbiAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50LmJhc2UgPSBiYXNlIC8vIOagh+ivhuesplxyXG59XHJcblxyXG5cclxuXHJcbi8vIOWkhOeQhkRPTeeahOWxnuaAp1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2YWx1ZSkge1xyXG4gIGlmIChhdHRyID09PSAnY2xhc3NOYW1lJykge1xyXG4gICAgYXR0ciA9ICdjbGFzcydcclxuICB9XHJcbiAgaWYgKGF0dHIubWF0Y2goL29uXFx3Ky8pKSB7IC8vIHcg5Yy56YWN5a2X5q+N5oiW5pWw5a2X5oiW5LiL5YiS57q/5oiW5rGJ5a2XIOetieS7t+S6jiAnW15BLVphLXowLTlfXSdcclxuICAgIGNvbnNvbGUubG9nKCfkuovku7bnmoTlkI3lrZfmmK8nLCBhdHRyLCAn5LqL5Lu26IqC54K55pivJywgZG9tLCAndmFsdWXmmK8nLCB2YWx1ZSlcclxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGF0dHIudG9Mb3dlckNhc2UoKS5zdWJzdHIoMilcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpXHJcbiAgfSBlbHNlIGlmIChhdHRyID09PSAnc3R5bGUnKSB7IC8vIHN0eWxlID0ge3t3aWR0aDogMTAwLCBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnfX1cclxuICAgIGxldCBzdGFuZGFyZFN0eWxlXHJcbiAgICBsZXQgc3RhbmRhcmRTdHlsZUNvbnRlbnRcclxuICAgIGZvciAobGV0IHNpbmdsZVN0eWxlIGluIGF0dHIpIHtcclxuICAgICAgc3RhbmRhcmRTdHlsZSA9IGRlY2FtZWxpemUoc2luZ2xlU3R5bGUsIHsgc2VwYXJhdG9yOiAnLScgfSkgLy8g5aSn5YaZ5a2X5q+N6L2s5Lit5YiS57q/XHJcbiAgICAgIHZhbHVlW3NpbmdsZVN0eWxlXSA9IF8uaXNOdW1iZXIodmFsdWVbc2luZ2xlU3R5bGVdKSA/IHZhbHVlW3NpbmdsZVN0eWxlXSArICdweCcgOiB2YWx1ZVtzaW5nbGVTdHlsZV1cclxuICAgICAgc3RhbmRhcmRTdHlsZUNvbnRlbnQgKz0gYCR7c3RhbmRhcmRTdHlsZX06ICR7dmFsdWVbc2luZ2xlU3R5bGVdfTtgXHJcbiAgICB9XHJcbiAgICBkb20uc2V0QXR0cmlidXRlKGF0dHIsIHN0YW5kYXJkU3R5bGVDb250ZW50KSAvLyBET03oh6rluKbnmoTmlrnms5VcclxuICB9IGVsc2Uge1xyXG4gICAgZG9tLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSkgLy8g5aSE55CGY2xhc3PvvIznrYnnrYnluLjop4TlsZ7mgKdcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+e3RoaXMucHJvcHMuY291bnR9PC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBCIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjb3VudDogMVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxNb3VudCcpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnREaWRNb3VudCcpXHJcbiAgfVxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzaG91bGRDb21wb25lbnRVcGRhdGUnLCBuZXh0UHJvcHMsIG5leHRTdGF0ZSlcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxVcGRhdGUnKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudERpZFVwZGF0ZScpXHJcbiAgfVxyXG5cclxuICBjbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjb3VudDogKyt0aGlzLnN0YXRlLmNvdW50XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlbmRlcicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbGljay5iaW5kKHRoaXMpfT5DbGljayBNZSE8L2J1dHRvbj5cclxuICAgICAgICA8QSBjb3VudD17dGhpcy5zdGF0ZS5jb3VudH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEIgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEEgbmFtZT1cImNvdW50XCIgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==