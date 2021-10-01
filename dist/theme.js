/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/theme.scss":
/*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"theme.css\");\n\n//# sourceURL=webpack://wordpress-starter/./src/styles/theme.scss?");

/***/ }),

/***/ "./src/scripts/modules/author.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/author.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\n    const modal = document.querySelector(\".modal\");\n    const overlay = document.querySelector(\".overlay\");\n    const btnCloseModal = document.querySelector(\".btn--close-modal\");\n    const btnsOpenModal = document.querySelectorAll(\".author--modal\");\n    const body = document.getElementsByTagName(\"body\")[0];\n\n    const openModal = function(e) {\n        e.preventDefault();\n        modal.classList.remove(\"hidden\");\n        overlay.classList.remove(\"hidden\");\n        body.classList.add(\"stop\");\n    };\n\n    const closeModal = function() {\n        modal.classList.add(\"hidden\");\n        overlay.classList.add(\"hidden\");\n        body.classList.remove(\"stop\");\n    };\n\n    btnCloseModal.addEventListener(\"click\", closeModal);\n    overlay.addEventListener(\"click\", closeModal);\n\n    btnsOpenModal.forEach((btn) => btn.addEventListener(\"click\", openModal));\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/author.js?");

/***/ }),

/***/ "./src/scripts/modules/proTab.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/proTab.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\n    const tabContainer = document.querySelector(\".ProTab__btn--group\");\n    const tabs = document.querySelectorAll(\".Btn--tab\");\n    const tabContent = document.querySelectorAll(\".ProTab__content\");\n\n    const proSelect = document.querySelector(\".Pro__select\");\n\n    tabContainer.addEventListener(\"click\", function(e) {\n        const clicked = e.target.closest(\".Btn--tab\");\n\n        if (!clicked) return;\n        tabs.forEach((t) => t.classList.remove(\"Btn--tab--active\"));\n        clicked.classList.add(\"Btn--tab--active\");\n\n        // Active content area\n        const activeTab = clicked.dataset.tab;\n        tabContent.forEach((tab) =>\n            tab.classList.remove(\"ProTab__content--active\")\n        );\n        document\n            .querySelector(`.ProTab__content--${activeTab}`)\n            .classList.add(\"ProTab__content--active\");\n    });\n\n    proSelect.addEventListener(\"change\", function(e) {\n        const activeTab = e.target.value;\n        tabContent.forEach((tab) =>\n            tab.classList.remove(\"ProTab__content--active\")\n        );\n        document\n            .querySelector(`.ProTab__content--${activeTab}`)\n            .classList.add(\"ProTab__content--active\");\n    });\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/proTab.js?");

/***/ }),

/***/ "./src/scripts/modules/retailer.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/retailer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init() {\n    const retailerTab = document.querySelector(\".Reatiler__col\");\n    const tabs = document.querySelectorAll(\".Retailer__cta\");\n\n    const handleOver = function(e) {\n        if (e.target.classList.contains(\"RetailImg\")) {\n            const link = e.target;\n\n            const siblings = link\n                .closest(\".Reatiler__col\")\n                .querySelectorAll(\".RetailImg\");\n\n            siblings.forEach((el) => {\n                if (el !== link) {\n                    el.style.opacity = this;\n                }\n            });\n        }\n    };\n\n    retailerTab.addEventListener(\"mouseover\", handleOver.bind(0.5));\n\n    retailerTab.addEventListener(\"mouseout\", handleOver.bind(1));\n}\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/retailer.js?");

/***/ }),

/***/ "./src/scripts/modules sync recursive ^\\.\\/.*$":
/*!********************************************!*\
  !*** ./src/scripts/modules/ sync ^\.\/.*$ ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./author\": \"./src/scripts/modules/author.js\",\n\t\"./author.js\": \"./src/scripts/modules/author.js\",\n\t\"./proTab\": \"./src/scripts/modules/proTab.js\",\n\t\"./proTab.js\": \"./src/scripts/modules/proTab.js\",\n\t\"./retailer\": \"./src/scripts/modules/retailer.js\",\n\t\"./retailer.js\": \"./src/scripts/modules/retailer.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/modules/_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/scripts/theme.js":
/*!******************************!*\
  !*** ./src/scripts/theme.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/theme.scss */ \"./src/styles/theme.scss\");\n/* ----------------------------------------------------------------------\n| 💅 CSS - imported here so webpack can compile our CSS to dist\n|--------------------------------------------------------------------- */\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.querySelectorAll(\"[data-module]\").forEach((el) => {\n        const name = el.getAttribute(\"data-module\");\n        const moduleInit = __webpack_require__(\"./src/scripts/modules sync recursive ^\\\\.\\\\/.*$\")(`./${name}`).default;\n        moduleInit({ el });\n    });\n});\n\n//# sourceURL=webpack://wordpress-starter/./src/scripts/theme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/theme.js");
/******/ 	
/******/ })()
;