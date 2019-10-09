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
}, "hello", React.createElement("span", {
  className: "content"
}, "world!")); // @babel/preset-react转换的结果, element(即jsx表示的节点)会被@babel/preset-react转换成virtual node
// var element = React.createElement("div", {
//   className: "title"
// }, "hello", React.createElement("span", {
//   className: "content"
// }, "world!"));
// 经过createElement转换的结果打印

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

/*
  =============================================================
*/
// ReactDOM的render方法把 所有的virtual node 转换成真实DOM插入到html中，一般一个app只用一次

var ReactDOM = {
  render: render
  /**
   * @msg: 将虚拟DOM转换成真实DOM
   * @param {*} vdom 虚拟DOM，也就是js里的对象, eg: {}
   * @param {*} container 需要插入的位置，一般是一个id为app的div标签, eg: <div id="app"></div>
   * @return: null
   */

};

function render(vdom, container) {
  console.log('vdom是', vdom); // vdom是 { nodeName: "div", attributes: { … }, children: Array(2), key: undefined }
  // test1.js: 71 vdom是 hello
  // test1.js: 71 vdom是 { nodeName: "span", attributes: { … }, children: Array(1), key: undefined }
  // test1.js: 71 vdom是 world!

  if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(vdom) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(vdom)) {
    container.innerText = container.innerText + vdom; // ????

    return;
  }

  var dom = document.createElement(vdom.nodeName); // 根节点创建一个vNode根节点的tagName,即<div></div>

  for (var attr in vdom.attributes) {
    setAttribute(dom, attr, vdom.attributes[attr]); // 示例
    // setAttribute("div", "className", "title")
  }

  vdom.children.forEach(function (vdomChild) {
    return render(vdomChild, dom);
  }); // 递归

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3QxLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHIiLCJjaGlsZCIsIm5vZGVOYW1lIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwia2V5IiwidW5kZWZpbmVkIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdERPTSIsInJlbmRlciIsInZkb20iLCJjb250YWluZXIiLCJfIiwiaXNTdHJpbmciLCJpc051bWJlciIsImlubmVyVGV4dCIsImRvbSIsImRvY3VtZW50Iiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsInZkb21DaGlsZCIsImFwcGVuZENoaWxkIiwidmFsdWUiLCJtYXRjaCIsImV2ZW50TmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlU3RyIiwic3RhbmRhcmRDc3MiLCJzaW5nbGVTdHlsZSIsImRlY2FtZWxpemUiLCJzZXBhcmF0b3IiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Z0IsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFIiwiZmlsZSI6InRlc3QxLjBhMmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwidGVzdDFcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy90ZXN0MS5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgZGVjYW1lbGl6ZSB9IGZyb20gJ2h1bXBzJyAvLyDovazmjaLpqbzls7Dor63ms5VcclxuXHJcbi8qIFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuY29uc3QgUmVhY3QgPSB7XHJcbiAgY3JlYXRlRWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0ciwgLi4uY2hpbGQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgbm9kZU5hbWU6IHRhZyxcclxuICAgIGF0dHJpYnV0ZXM6IGF0dHIsXHJcbiAgICBjaGlsZHJlbjogY2hpbGQsIC8vIOaVsOe7hFxyXG4gICAga2V5OiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8vIGpzeOivreazlVxyXG5jb25zdCBlbGVtZW50ID0gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgIGhlbGxvXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgIHdvcmxkIVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG4vLyBAYmFiZWwvcHJlc2V0LXJlYWN06L2s5o2i55qE57uT5p6cLCBlbGVtZW50KOWNs2pzeOihqOekuueahOiKgueCuSnkvJrooqtAYmFiZWwvcHJlc2V0LXJlYWN06L2s5o2i5oiQdmlydHVhbCBub2RlXHJcbi8vIHZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbi8vICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcclxuLy8gfSwgXCJoZWxsb1wiLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XHJcbi8vICAgY2xhc3NOYW1lOiBcImNvbnRlbnRcIlxyXG4vLyB9LCBcIndvcmxkIVwiKSk7XHJcblxyXG4vLyDnu4/ov4djcmVhdGVFbGVtZW506L2s5o2i55qE57uT5p6c5omT5Y2wXHJcbmNvbnNvbGUubG9nKGVsZW1lbnQpXHJcbi8vIOWcqOa1j+iniOWZqOS4reaJk+WNsOWmguS4i++8mlxyXG4vLyB7XHJcbi8vICAgYXR0cmlidXRlczogeyBjbGFzc05hbWU6IFwidGl0bGVcIiB9XHJcbi8vICAgY2hpbGRyZW46IFtcImhlbGxvXCIsIHsgXHJcbi8vICAgICBub2RlTmFtZTogXCJzcGFuXCIsXHJcbi8vICAgICBhdHRyaWJ1dGVzOiB7XHJcbi8vICAgICAgIGNsYXNzTmFtZTogXCJjb250ZW50XCIsXHJcbi8vICAgICAgIGNoaWxkcmVuOiBbXCJ3b3JsZFwiXSxcclxuLy8gICAgICAga2V5OiB1bmRlZmluZWQsXHJcbi8vICAgICAgIG5vZGVOYW1lOiBcImRpdlwiXHJcbi8vICAgICB9XHJcbi8vICAgfV1cclxuLy8gICBrZXk6IHVuZGVmaW5lZFxyXG4vLyAgIG5vZGVOYW1lOiBcImRpdlwiXHJcbi8vIH1cclxuXHJcbi8qXHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4vLyBSZWFjdERPTeeahHJlbmRlcuaWueazleaKiiDmiYDmnInnmoR2aXJ0dWFsIG5vZGUg6L2s5o2i5oiQ55yf5a6eRE9N5o+S5YWl5YiwaHRtbOS4re+8jOS4gOiIrOS4gOS4qmFwcOWPqueUqOS4gOasoVxyXG5cclxuY29uc3QgUmVhY3RET00gPSB7XHJcbiAgcmVuZGVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbXNnOiDlsIbomZrmi59ET03ovazmjaLmiJDnnJ/lrp5ET01cclxuICogQHBhcmFtIHsqfSB2ZG9tIOiZmuaLn0RPTe+8jOS5n+WwseaYr2pz6YeM55qE5a+56LGhLCBlZzoge31cclxuICogQHBhcmFtIHsqfSBjb250YWluZXIg6ZyA6KaB5o+S5YWl55qE5L2N572u77yM5LiA6Iis5piv5LiA5LiqaWTkuLphcHDnmoRkaXbmoIfnrb4sIGVnOiA8ZGl2IGlkPVwiYXBwXCI+PC9kaXY+XHJcbiAqIEByZXR1cm46IG51bGxcclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlcih2ZG9tLCBjb250YWluZXIpIHtcclxuICBjb25zb2xlLmxvZygndmRvbeaYrycsIHZkb20pXHJcbiAgLy8gdmRvbeaYryB7IG5vZGVOYW1lOiBcImRpdlwiLCBhdHRyaWJ1dGVzOiB7IOKApiB9LCBjaGlsZHJlbjogQXJyYXkoMiksIGtleTogdW5kZWZpbmVkIH1cclxuICAvLyB0ZXN0MS5qczogNzEgdmRvbeaYryBoZWxsb1xyXG4gIC8vIHRlc3QxLmpzOiA3MSB2ZG9t5pivIHsgbm9kZU5hbWU6IFwic3BhblwiLCBhdHRyaWJ1dGVzOiB7IOKApiB9LCBjaGlsZHJlbjogQXJyYXkoMSksIGtleTogdW5kZWZpbmVkIH1cclxuICAvLyB0ZXN0MS5qczogNzEgdmRvbeaYryB3b3JsZCFcclxuICBpZiAoXy5pc1N0cmluZyh2ZG9tKSB8fCBfLmlzTnVtYmVyKHZkb20pKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJUZXh0ID0gY29udGFpbmVyLmlubmVyVGV4dCArIHZkb20gLy8gPz8/P1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmRvbS5ub2RlTmFtZSkgIC8vIOagueiKgueCueWIm+W7uuS4gOS4qnZOb2Rl5qC56IqC54K555qEdGFnTmFtZSzljbM8ZGl2PjwvZGl2PlxyXG4gIGZvciAobGV0IGF0dHIgaW4gdmRvbS5hdHRyaWJ1dGVzKSB7XHJcbiAgICBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2ZG9tLmF0dHJpYnV0ZXNbYXR0cl0pXHJcbiAgICAvLyDnpLrkvotcclxuICAgIC8vIHNldEF0dHJpYnV0ZShcImRpdlwiLCBcImNsYXNzTmFtZVwiLCBcInRpdGxlXCIpXHJcbiAgfVxyXG4gIHZkb20uY2hpbGRyZW4uZm9yRWFjaCh2ZG9tQ2hpbGQgPT4gcmVuZGVyKHZkb21DaGlsZCwgZG9tKSkgLy8g6YCS5b2SXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbSlcclxufVxyXG4vKipcclxuICogQG1zZzog5qC85byP5YyWKHBhcnNlKSB2RG9tIOeahCBhdHRyaWJ1dGVz5bGe5oCnXHJcbiAqIEBwYXJhbSB7Kn0gZG9tIOWFg+e0oCzljIXlkKvlsZ7mgKflkozlgLxcclxuICogQHBhcmFtIHsqfSBhdHRyIOWxnuaAp1xyXG4gKiBAcGFyYW0geyp9IHZhbHVlIOWxnuaAp+WAvFxyXG4gKiBAcmV0dXJuOiBudWxsXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZG9tLCBhdHRyLCB2YWx1ZSkge1xyXG4gIGlmIChhdHRyID09PSAnY2xhc3NOYW1lJykge1xyXG4gICAgYXR0ciA9ICdjbGFzcydcclxuICB9XHJcbiAgaWYgKGF0dHIubWF0Y2goL29uXFx3Ky8pKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBhdHRyLnRvTG93ZXJDYXNlKCkuc3Vic3RyKDIpXHJcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZhbHVlKVxyXG4gIH0gZWxzZSBpZiAoYXR0ciA9PT0gJ3N0eWxlJykge1xyXG4gICAgbGV0IHN0eWxlU3RyID0gJydcclxuICAgIGxldCBzdGFuZGFyZENzc1xyXG4gICAgZm9yIChsZXQgc2luZ2xlU3R5bGUgaW4gdmFsdWUpIHtcclxuICAgICAgc3RhbmRhcmRDc3MgPSBkZWNhbWVsaXplKHNpbmdsZVN0eWxlLCB7IHNlcGFyYXRvcjogJy0nIH0pIC8vIOWkp+WGmeWtl+avjei9rOS4reWIkue6v1xyXG4gICAgICB2YWx1ZVtzaW5nbGVTdHlsZV0gPSBfLmlzTnVtYmVyKHZhbHVlW3NpbmdsZVN0eWxlXSkgPyB2YWx1ZVtzaW5nbGVTdHlsZV0gKyAncHgnIDogdmFsdWVbc2luZ2xlU3R5bGVdXHJcbiAgICAgIHN0eWxlU3RyICs9IGAke3N0YW5kYXJkQ3NzfTogJHt2YWx1ZVtzaW5nbGVTdHlsZV19O2BcclxuICAgIH1cclxuICAgIGRvbS5zZXRBdHRyaWJ1dGUoYXR0ciwgc3R5bGVTdHIpIC8vIOS4ukRPTeiKgueCueiuvue9ruWxnuaAp++8jHNldEF0dHJpYnV0ZeaYr0RPTeiKgueCueiHquW4pueahOaWueazlVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkb20uc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxyXG4gIH1cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXSwic291cmNlUm9vdCI6IiJ9