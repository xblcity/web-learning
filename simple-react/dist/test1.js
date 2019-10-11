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
/******/ 		"test1": 0
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
/******/ 	deferredModules.push(["./src/test1.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/test1.js":
/*!**********************!*\
  !*** ./src/test1.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_1__);

 // 转换驼峰语法

/* 
  =============================================================
*/

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
} // jsx语法


var element = React.createElement("div", {
  className: "title"
}, "hello", React.createElement("div", {
  className: "content"
}, "world!", React.createElement("span", null, "\u4F60\u597D")));
var simpleElement = 123; // @babel/preset-react转换的结果, element(即jsx表示的节点)会被@babel/preset-react转换成virtual node
// var element = React.createElement("div", {
//   className: "title"
// }, "hello", React.createElement("span", {
//   className: "content"
// }, "world!"));
// ** 经过React.createElement()转换的结果在浏览器的控制台打印

console.log(element); // 在浏览器中打印如下：
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

console.log(simpleElement);
/*
  =============================================================
*/
// ** ReactDOM的render方法把 所有的virtual node 转换成真实DOM插入到html中，一般一个app只用一次

var ReactDOM = {
  render: render
  /**
   * @msg: 将虚拟DOM转换成真实DOM
   * @param {*} vdom 虚拟DOM，也就是js里的对象, eg: { attribute: {}, children: [], nodeName: 'div', key: undefined}
   * @param {*} container 需要插入的位置，一般是一个id为app的div标签, eg: <div id="app"></div>
   * @return: null
   */

};

function render(vdom, container) {
  console.log('vdom是', vdom); // vdom是 { nodeName: "div", attributes: { … }, children: Array(2), key: undefined }

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(vdom) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(vdom)) {
    // 比如说，jsx只是一个字符串或者数字
    container.innerText = container.innerText + vdom;
    return;
  }

  var dom = document.createElement(vdom.nodeName); // 根节点创建一个vNode根节点的tagName,即<div></div>

  for (var attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr]); // 示例
    // setAttribute(<div></div>, "className", "title")  ==> 把attr转换成标准属性，并放在<div></div>里面
  }

  vdom.children.length > 0 && vdom.children.forEach(function (vdomChild) {
    return render(vdomChild, dom);
  }); // ? 递归,render执行了数次

  container.appendChild(dom);
}
/**
 * @msg: 格式化(parse) vDom 的 attributes属性
 * @param {*} dom 元素,包含属性和值
 * @param {*} attr 属性
 * @param {*} value 属性值
 * @return: null
 */


function setAttribute(dom, attr, value) {
  if (attr === 'className') {
    attr = 'class';
  }

  if (attr.match(/on\w+/)) {
    var eventName = attr.toLowerCase().substr(2);
    dom.addEventListener(eventName, value);
  } else if (attr === 'style') {
    var styleStr = '';
    var standardCss;

    for (var singleStyle in value) {
      standardCss = Object(humps__WEBPACK_IMPORTED_MODULE_1__["decamelize"])(singleStyle, {
        separator: '-'
      }); // 大写字母转中划线

      value[singleStyle] = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(value[singleStyle]) ? value[singleStyle] + 'px' : value[singleStyle];
      styleStr += "".concat(standardCss, ": ").concat(value[singleStyle], ";");
    }

    dom.setAttribute(attr, styleStr); // 为DOM节点设置属性，setAttribute是DOM节点自带的方法
  } else {
    dom.setAttribute(attr, value);
  }
}

ReactDOM.render(element, document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QxLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiZWxlbWVudCIsInNpbXBsZUVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJ2ZG9tIiwiY29udGFpbmVyIiwiXyIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpbm5lclRleHQiLCJkb20iLCJkb2N1bWVudCIsInNldEF0dHJpYnV0ZSIsImxlbmd0aCIsImZvckVhY2giLCJ2ZG9tQ2hpbGQiLCJhcHBlbmRDaGlsZCIsInZhbHVlIiwibWF0Y2giLCJldmVudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0ciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZVN0ciIsInN0YW5kYXJkQ3NzIiwic2luZ2xlU3R5bGUiLCJkZWNhbWVsaXplIiwic2VwYXJhdG9yIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LEdBVE0sTUFTQTtBQUNMYixPQUFHLENBQUNFLFlBQUosQ0FBaUJyQixJQUFqQixFQUF1QjBCLEtBQXZCO0FBQ0Q7QUFDRjs7QUFFRGYsUUFBUSxDQUFDQyxNQUFULENBQWdCTCxPQUFoQixFQUF5QmEsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFIiwiZmlsZSI6InRlc3QxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInRlc3QxXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvdGVzdDEuanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCB7IGRlY2FtZWxpemUgfSBmcm9tICdodW1wcycgLy8g6L2s5o2i6am85bOw6K+t5rOVXHJcblxyXG4vKiBcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiovXHJcbmNvbnN0IFJlYWN0ID0ge1xyXG4gIGNyZWF0ZUVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHIsIC4uLmNoaWxkKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vZGVOYW1lOiB0YWcsXHJcbiAgICBhdHRyaWJ1dGVzOiBhdHRyLFxyXG4gICAgY2hpbGRyZW46IGNoaWxkLCAvLyDmlbDnu4RcclxuICAgIGtleTogdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcblxyXG4vLyBqc3jor63ms5VcclxuY29uc3QgZWxlbWVudCA9IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICBoZWxsb1xyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIHdvcmxkIVxyXG4gICAgICA8c3Bhbj7kvaDlpb08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3Qgc2ltcGxlRWxlbWVudCA9IDEyM1xyXG5cclxuLy8gQGJhYmVsL3ByZXNldC1yZWFjdOi9rOaNoueahOe7k+aenCwgZWxlbWVudCjljbNqc3jooajnpLrnmoToioLngrkp5Lya6KKrQGJhYmVsL3ByZXNldC1yZWFjdOi9rOaNouaIkHZpcnR1YWwgbm9kZVxyXG4vLyB2YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4vLyAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiXHJcbi8vIH0sIFwiaGVsbG9cIiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xyXG4vLyAgIGNsYXNzTmFtZTogXCJjb250ZW50XCJcclxuLy8gfSwgXCJ3b3JsZCFcIikpO1xyXG5cclxuLy8gKiog57uP6L+HUmVhY3QuY3JlYXRlRWxlbWVudCgp6L2s5o2i55qE57uT5p6c5Zyo5rWP6KeI5Zmo55qE5o6n5Yi25Y+w5omT5Y2wXHJcbmNvbnNvbGUubG9nKGVsZW1lbnQpXHJcbi8vIOWcqOa1j+iniOWZqOS4reaJk+WNsOWmguS4i++8mlxyXG4vLyB7XHJcbi8vICAgYXR0cmlidXRlczogeyBjbGFzc05hbWU6IFwidGl0bGVcIiB9XHJcbi8vICAgY2hpbGRyZW46IFtcImhlbGxvXCIsIHsgXHJcbi8vICAgICBub2RlTmFtZTogXCJzcGFuXCIsXHJcbi8vICAgICBhdHRyaWJ1dGVzOiB7XHJcbi8vICAgICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCIsXHJcbi8vICAgICAgIGNoaWxkcmVuOiBbXCJ3b3JsZFwiXSxcclxuLy8gICAgICAga2V5OiB1bmRlZmluZWQsXHJcbi8vICAgICAgIG5vZGVOYW1lOiBcImRpdlwiXHJcbi8vICAgICB9XHJcbi8vICAgfV1cclxuLy8gICBrZXk6IHVuZGVmaW5lZFxyXG4vLyAgIG5vZGVOYW1lOiBcImRpdlwiXHJcbi8vIH1cclxuY29uc29sZS5sb2coc2ltcGxlRWxlbWVudClcclxuXHJcbi8qXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4vLyAqKiBSZWFjdERPTeeahHJlbmRlcuaWueazleaKiiDmiYDmnInnmoR2aXJ0dWFsIG5vZGUg6L2s5o2i5oiQ55yf5a6eRE9N5o+S5YWl5YiwaHRtbOS4re+8jOS4gOiIrOS4gOS4qmFwcOWPqueUqOS4gOasoVxyXG5cclxuY29uc3QgUmVhY3RET00gPSB7XHJcbiAgcmVuZGVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbXNnOiDlsIbomZrmi59ET03ovazmjaLmiJDnnJ/lrp5ET01cclxuICogQHBhcmFtIHsqfSB2ZG9tIOiZmuaLn0RPTe+8jOS5n+WwseaYr2pz6YeM55qE5a+56LGhLCBlZzogeyBhdHRyaWJ1dGU6IHt9LCBjaGlsZHJlbjogW10sIG5vZGVOYW1lOiAnZGl2Jywga2V5OiB1bmRlZmluZWR9XHJcbiAqIEBwYXJhbSB7Kn0gY29udGFpbmVyIOmcgOimgeaPkuWFpeeahOS9jee9ru+8jOS4gOiIrOaYr+S4gOS4qmlk5Li6YXBw55qEZGl25qCH562+LCBlZzogPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxyXG4gKiBAcmV0dXJuOiBudWxsXHJcbiAqL1xyXG5mdW5jdGlvbiByZW5kZXIodmRvbSwgY29udGFpbmVyKSB7XHJcbiAgY29uc29sZS5sb2coJ3Zkb23mmK8nLCB2ZG9tKVxyXG4gIC8vIHZkb23mmK8geyBub2RlTmFtZTogXCJkaXZcIiwgYXR0cmlidXRlczogeyDigKYgfSwgY2hpbGRyZW46IEFycmF5KDIpLCBrZXk6IHVuZGVmaW5lZCB9XHJcbiAgaWYgKF8uaXNTdHJpbmcodmRvbSkgfHwgXy5pc051bWJlcih2ZG9tKSkgeyAvLyDmr5TlpoLor7TvvIxqc3jlj6rmmK/kuIDkuKrlrZfnrKbkuLLmiJbogIXmlbDlrZdcclxuICAgIGNvbnRhaW5lci5pbm5lclRleHQgPSBjb250YWluZXIuaW5uZXJUZXh0ICsgdmRvbVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmRvbS5ub2RlTmFtZSkgIC8vIOagueiKgueCueWIm+W7uuS4gOS4qnZOb2Rl5qC56IqC54K555qEdGFnTmFtZSzljbM8ZGl2PjwvZGl2PlxyXG4gIGZvciAobGV0IGF0dHIgaW4gdmRvbS5hdHRyaWJ1dGVzKSB7XHJcbiAgICBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2ZG9tLmF0dHJpYnV0ZXNbYXR0cl0pXHJcbiAgICAvLyDnpLrkvotcclxuICAgIC8vIHNldEF0dHJpYnV0ZSg8ZGl2PjwvZGl2PiwgXCJjbGFzc05hbWVcIiwgXCJ0aXRsZVwiKSAgPT0+IOaKimF0dHLovazmjaLmiJDmoIflh4blsZ7mgKfvvIzlubbmlL7lnKg8ZGl2PjwvZGl2PumHjOmdolxyXG4gIH1cclxuICB2ZG9tLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgdmRvbS5jaGlsZHJlbi5mb3JFYWNoKHZkb21DaGlsZCA9PiByZW5kZXIodmRvbUNoaWxkLCBkb20pKSAvLyA/IOmAkuW9kixyZW5kZXLmiafooYzkuobmlbDmrKFcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tKVxyXG59XHJcbi8qKlxyXG4gKiBAbXNnOiDmoLzlvI/ljJYocGFyc2UpIHZEb20g55qEIGF0dHJpYnV0ZXPlsZ7mgKdcclxuICogQHBhcmFtIHsqfSBkb20g5YWD57SgLOWMheWQq+WxnuaAp+WSjOWAvFxyXG4gKiBAcGFyYW0geyp9IGF0dHIg5bGe5oCnXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUg5bGe5oCn5YC8XHJcbiAqIEByZXR1cm46IG51bGxcclxuICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShkb20sIGF0dHIsIHZhbHVlKSB7XHJcbiAgaWYgKGF0dHIgPT09ICdjbGFzc05hbWUnKSB7XHJcbiAgICBhdHRyID0gJ2NsYXNzJ1xyXG4gIH1cclxuICBpZiAoYXR0ci5tYXRjaCgvb25cXHcrLykpIHtcclxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGF0dHIudG9Mb3dlckNhc2UoKS5zdWJzdHIoMilcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWUpXHJcbiAgfSBlbHNlIGlmIChhdHRyID09PSAnc3R5bGUnKSB7XHJcbiAgICBsZXQgc3R5bGVTdHIgPSAnJ1xyXG4gICAgbGV0IHN0YW5kYXJkQ3NzXHJcbiAgICBmb3IgKGxldCBzaW5nbGVTdHlsZSBpbiB2YWx1ZSkge1xyXG4gICAgICBzdGFuZGFyZENzcyA9IGRlY2FtZWxpemUoc2luZ2xlU3R5bGUsIHsgc2VwYXJhdG9yOiAnLScgfSkgLy8g5aSn5YaZ5a2X5q+N6L2s5Lit5YiS57q/XHJcbiAgICAgIHZhbHVlW3NpbmdsZVN0eWxlXSA9IF8uaXNOdW1iZXIodmFsdWVbc2luZ2xlU3R5bGVdKSA/IHZhbHVlW3NpbmdsZVN0eWxlXSArICdweCcgOiB2YWx1ZVtzaW5nbGVTdHlsZV1cclxuICAgICAgc3R5bGVTdHIgKz0gYCR7c3RhbmRhcmRDc3N9OiAke3ZhbHVlW3NpbmdsZVN0eWxlXX07YFxyXG4gICAgfVxyXG4gICAgZG9tLnNldEF0dHJpYnV0ZShhdHRyLCBzdHlsZVN0cikgLy8g5Li6RE9N6IqC54K56K6+572u5bGe5oCn77yMc2V0QXR0cmlidXRl5pivRE9N6IqC54K56Ieq5bim55qE5pa55rOVXHJcbiAgfSBlbHNlIHtcclxuICAgIGRvbS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdLCJzb3VyY2VSb290IjoiIn0=