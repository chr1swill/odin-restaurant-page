/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/asset/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/asset/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n    }\n\n* {\n    margin: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\nhtml {\n    color-scheme: light dark;\n}\n\nbody {\n    line-height: 1.4;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\niframe,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n    color: inherit;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n    isolation: isolate;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\n:root {\n    --font-family: 'Open Sans', sans-serif;\n\n    --fs-100: clamp(0.5625rem, 0.5379rem + 0.1228vw, 0.6331rem);\n    --fs-200: clamp(0.75rem, 0.7174rem + 0.163vw, 0.8438rem);\n    --fs-300: clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem);\n    --fs-400: clamp(1.3331rem, 1.2753rem + 0.2891vw, 1.4994rem);\n    --fs-500: clamp(1.7769rem, 1.6997rem + 0.3859vw, 1.9988rem);\n    --fs-600: clamp(2.3688rem, 2.2659rem + 0.5141vw, 2.6644rem);\n    --fs-700: clamp(3.1575rem, 3.0203rem + 0.6859vw, 3.5519rem);\n    --fs-800: clamp(4.2088rem, 4.0257rem + 0.9152vw, 4.735rem);    \n    --fw-300: 300;\n    --fw-400: 400;\n    --fw-500: 500;\n    --fw-600: 600;\n    --fw-700: 700;\n\n    --br-sm: 8px;\n    --br-md: 12px;\n    --br-lg: 16px;\n\n    --bm: 32px;\n    --bottom-margin: 0px 0px var(--bm) 0px;\n\n    --transition: all 0.2s ease-in-out;\n\n    --text-opacity: 0.2;\n    --text-rgba: rgba(17, 8, 2, var(--text-opacity));\n    --box-shadow: 0px 6px 12px 0px var(--text-rgba);\n}\n\n@media (prefers-color-scheme: light) {\n    :root {\n        --text: #110802;\n        --background: #fdf7f3;\n        --primary: #e26e21;\n        --secondary: #e6ee80;\n        --accent: #bde851;\n    }\n}\n@media (prefers-color-scheme: dark) {\n    :root {\n        --text: #fdf3ed;\n        --background: #0d0702;\n        --primary: #dd6a1d;\n        --secondary: #767e11;\n        --accent: #85b017;\n    }\n}\n\n.big-text, \n.btn-text,\n.h1, h1, \n.h2, h2, \n.h3, h3, \n.h4, h4, \n.h5, h5, \n.h6, h6, \n.p, p {\n    color: var(--text);\n    font-family: var(--font-family);\n}\n\n.big-text {\n    font-weight: var(--fw-800);\n    font-size: var(--fs-700);\n}\n\n.btn-text {\n    font-weight: var(--fw-600);\n    font-size: var(--fs-300);\n}\n\n.h1 {\n    font-weight: var(--fw-700);\n    font-size: var(--fs-700);\n}\n\n.h2 {\n    font-weight: var(--fw-600);\n    font-size: var(--fs-600);\n}\n\n.h3 {\n    font-weight: var(--fw-500);\n    font-size: var(--fs-500);\n}\n\n.h4 {\n    font-weight: var(--fw-400);\n    font-size: var(--fs-400);\n}\n\n.h5 {\n    font-weight: var(--fw-300);\n    font-size: var(--fs-300);\n}\n\n.h6 {\n    font-weight: var(--fw-200);\n    font-size: var(--fs-200);\n}\n\n.p {\n    font-weight: var(--fw-300);\n    font-size: var(--fs-300);\n}\n\nbody {\n    height: 100svh;\n    background-color: var(--background);\n    color: var(--text);\n    font-family: var(--font-family);\n    margin: var(--bottom-margin);\n    overflow: hidden;\n}\n\nbody, header, main {\n    display: grid;\n    place-items: center;\n}\n\nheader > .logo {\n    padding: 32px 0px;\n    width: 100%;\n    height: auto;\n\n    & g {\n        fill: var(--text);\n    }\n}\n\nmain {\n    max-width: min(1400px, calc(100% - 4rem));\n    margin: var(--bottom-margin);\n\n    & > * {\n        max-width: 100%;\n        height: auto;\n    }\n}\n\n#content {\n    --card-padding: 20px;\n    --img-br: var(--br-sm);\n    --content-padding: 32px;\n    --card-br: calc(var(--img-br) + var(--card-padding));\n\n    max-width: 100%;\n    height: min(800px, 75svh);\n    background-color: var(--background);\n    border-radius: calc(var(--card-br) + var(--content-padding));\n    margin: var(--bottom-margin);\n    padding: var(--content-padding);\n    overflow: hidden;\n    overflow-y: scroll;\n    box-shadow: var(--box-shadow);\n\n    /* Card Component Styles */\n    & [data-component=\"card\"] {\n        max-width: 100%;\n        height: auto;\n        padding: var(--card-padding);\n        display: grid;\n        place-content: center;\n        border-radius: var(--card-br);\n        background-color: var(--background);\n        box-shadow: var(--box-shadow);\n\n        & > * {\n            margin: var(--bottom-margin);\n        }\n\n        & img {\n            width: 100%;\n            height: auto;\n            border-radius: var(--img-br);\n        }\n\n        & p {\n            margin: 0;\n        }\n    }\n}\n\n#content::-webkit-scrollbar {\n    display: none;\n}\n\n.bottom-margin {\n    margin: var(--bottom-margin);\n}\n\n.nav-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: none;\n    margin: var(--bottom-margin);\n    box-shadow: var(--box-shadow);\n\n    border-radius: var(--br-sm);\n    overflow: hidden;\n\n    & button {\n        padding: 12px 24px;\n        border: none;\n        background-color: var(--background);\n        color: var(--text);\n        font-weight: var(--fw-600);\n        font-size: var(--fs-200);\n        transition: var(--transition);\n\n        &:hover {\n            background-color: var(--primary);\n        }\n    }\n}\n\n.two-column-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 40px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/asset/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/asset/characters/charles.png":
/*!******************************************!*\
  !*** ./src/asset/characters/charles.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/charles.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/characters/charles.png?");

/***/ }),

/***/ "./src/asset/characters/darryl.png":
/*!*****************************************!*\
  !*** ./src/asset/characters/darryl.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/darryl.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/characters/darryl.png?");

/***/ }),

/***/ "./src/asset/menu-option/greek-salad/greek-salad.png":
/*!***********************************************************!*\
  !*** ./src/asset/menu-option/greek-salad/greek-salad.png ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/greek-salad.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/menu-option/greek-salad/greek-salad.png?");

/***/ }),

/***/ "./src/asset/menu-option/pepperoni-pizza/pepperoni-pizza.png":
/*!*******************************************************************!*\
  !*** ./src/asset/menu-option/pepperoni-pizza/pepperoni-pizza.png ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/pepperoni-pizza.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/menu-option/pepperoni-pizza/pepperoni-pizza.png?");

/***/ }),

/***/ "./src/asset/menu-option/smoke-salmon/smoke-salmon.png":
/*!*************************************************************!*\
  !*** ./src/asset/menu-option/smoke-salmon/smoke-salmon.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/smoke-salmon.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/menu-option/smoke-salmon/smoke-salmon.png?");

/***/ }),

/***/ "./src/asset/menu-option/strawberries/strawberries.png":
/*!*************************************************************!*\
  !*** ./src/asset/menu-option/strawberries/strawberries.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/strawberries.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/menu-option/strawberries/strawberries.png?");

/***/ }),

/***/ "./src/asset/menu-option/veggies/veggies.png":
/*!***************************************************!*\
  !*** ./src/asset/menu-option/veggies/veggies.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"asset/veggies.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/asset/menu-option/veggies/veggies.png?");

/***/ }),

/***/ "./src/asset/styles.css":
/*!******************************!*\
  !*** ./src/asset/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/asset/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/asset/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _asset_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/styles.css */ \"./src/asset/styles.css\");\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Card */ \"./src/component/Card.js\");\n/* harmony import */ var _view_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/home */ \"./src/view/home.js\");\n/* harmony import */ var _view_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/menu */ \"./src/view/menu.js\");\n\n\n\n\n\nconst entryPoint = document.querySelector('#content')\nconst homeBtn = document.querySelector('[data-nav=\"home\"]')\nconst menuBtn = document.querySelector('[data-nav=\"menu\"]')\n\nif (!entryPoint) {\n    console.error('#content not found')\n} else {\n    entryPoint.innerHTML = `${(0,_view_home__WEBPACK_IMPORTED_MODULE_2__.homePage)()}`\n}\n\nhomeBtn.addEventListener('click', () => {\n    if (!entryPoint) {\n        console.error('#content not found')\n    }\n    entryPoint.innerHTML = `${(0,_view_home__WEBPACK_IMPORTED_MODULE_2__.homePage)()}` \n})\n\nmenuBtn.addEventListener('click', () => {\n    if (!entryPoint) {\n        console.error('#content not found')\n    }\n    entryPoint.innerHTML = `${(0,_view_menu__WEBPACK_IMPORTED_MODULE_3__.menuPage)()}`\n})\n\n\n//# sourceURL=webpack://restaurant-page/./src/app.js?");

/***/ }),

/***/ "./src/component/Card.js":
/*!*******************************!*\
  !*** ./src/component/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardComponent: () => (/* binding */ cardComponent)\n/* harmony export */ });\n/**\n * creates a cardComponent\n *\n * @param {string} imgSrc - the path or url to your image\n * @param {string} imgAlt - the alt text for your image\n * @param {string} title - the content of the h2 in your card\n * @param {string} description - the content of the p in your card\n * @returns {string} - a cardComponent\n */\nconst cardComponent = (imgSrc, imgAlt, title, description) => {\n    return `\n            <section data-component=\"card\">\n                <img data-component=\"image\"\n                    src=\"${imgSrc}\"\n                    alt=\"${imgAlt}\"\n                    loading=\"lazy\"\n                >\n                <h2 data-component=\"title\" class='h3'>${title}</h2>\n                <p data-component=\"description\" class='p'>${description}</p>\n            </section>\n    ` \n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/component/Card.js?");

/***/ }),

/***/ "./src/view/home.js":
/*!**************************!*\
  !*** ./src/view/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Card */ \"./src/component/Card.js\");\n/* harmony import */ var _asset_characters_charles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/characters/charles.png */ \"./src/asset/characters/charles.png\");\n/* harmony import */ var _asset_characters_darryl_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/characters/darryl.png */ \"./src/asset/characters/darryl.png\");\n\n\n\n\nconst homePage = () => {\n    return `\n        <section data-id=\"home\">\n            <h1 class=\"h2 bottom-margin\">Welcome to our Restaurant Page!</h1>\n            <ul class=\"two-column-grid\">\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/charles.png', \n                    'An Image of a man with brown hair, brown eyes, fair skin. Wearing a hoodie and possing confidently for a picture.',\n                    'Charles the Owner', \n                    'One day I woke up and had a crazy idea, why don\\'t I open my very own restaurant. So naturally, instead of doing any real work to open the store, I went and told all my boys about my master plan. And they said it was lame. It was all, \"You don\\'t even know how to cook!\" or \"You, a restaurant, get a load of this guy!\" or \"Open a restaurant, you can\\'t even open a jar of pickles. Good luck!\" When I got to my only true friend, who I believed we had a chance, I told him my master plan and he loved it. He was ecstatic to be a part of the team and could not wait to get started on our new venture. And that was it, now we own the best restaurant in all of the city. Who would have thought.'\n    )}\n                </li>\n\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/darryl.png', \n                    'An Image of a many with long unkept hair, a dirty clothing, an apron, and a beard. Inside of a kitchen the look messy.',\n                    'Darryl the Chef', \n                    'I remember the day like it was yesterday. He won\\'t tell you but we practically was on his knees begging me to help him. He said I\\'m the best cook he know, that I was the \"best man for the job\", he plead that \"no one can cook as well as you do\". Keep in mind only cooking experience was my summer job at Arby\\'s, as a Dishwasher. That summer I ate more soaps then I did really food. Anyways though, I sort of got tired of him asking. So I agreed to be his chef. And the rest was history.'\n                    )}\n                </li>\n            </ul>\n        </section>\n    `\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/view/home.js?");

/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _component_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Card */ \"./src/component/Card.js\");\n/* harmony import */ var _asset_menu_option_veggies_veggies_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/menu-option/veggies/veggies.png */ \"./src/asset/menu-option/veggies/veggies.png\");\n/* harmony import */ var _asset_menu_option_greek_salad_greek_salad_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/menu-option/greek-salad/greek-salad.png */ \"./src/asset/menu-option/greek-salad/greek-salad.png\");\n/* harmony import */ var _asset_menu_option_smoke_salmon_smoke_salmon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/menu-option/smoke-salmon/smoke-salmon.png */ \"./src/asset/menu-option/smoke-salmon/smoke-salmon.png\");\n/* harmony import */ var _asset_menu_option_strawberries_strawberries_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/menu-option/strawberries/strawberries.png */ \"./src/asset/menu-option/strawberries/strawberries.png\");\n/* harmony import */ var _asset_menu_option_pepperoni_pizza_pepperoni_pizza_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/menu-option/pepperoni-pizza/pepperoni-pizza.png */ \"./src/asset/menu-option/pepperoni-pizza/pepperoni-pizza.png\");\n\n\n\n\n\n\n\nconst menuPage = () => {\n    return `\n        <section data-id=\"menu\">\n            <h1 class=\"h2 bottom-margin\">Todays Menu</h1>\n            <ul class=\"two-column-grid\">\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/veggies.png', \n                    'Assorted chopped veggies on a plate',\n                    'Veggie Mosaic Medley',\n                    'Dive into a colorful assortment of freshly chopped vegetables, each piece a tiny masterpiece. This vibrant dish features crisp carrots, sweet bell peppers, juicy cucumbers, and tender broccoli, all lightly seasoned with a sprinkle of herbs and a dash of extra virgin olive oil. It\\'s a healthy and delightful starter that\\'s as pleasing to the eye as it is to the palate.'\n                    )}\n                </li>\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/greek-salad.png',\n                    'Greek salad with feta cheese and olives',\n                    'Athenian Delight Salad',\n                    'Transport your taste buds to the sunny shores of Greece with our Athenian Delight Salad. A refreshing mix of juicy tomatoes, crisp cucumbers, and plump Kalamata olives, topped with a generous crumble of feta cheese. Each bite is dressed with a zesty lemon-olive oil vinaigrette and a hint of oregano, bringing the flavors of the Mediterranean straight to your table.'\n                    )}\n                </li>\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/smoke-salmon.png',\n                    'Smoked salmon on Toast with Feta Cheese',\n                    'Salmon Symphony on Toast',\n                    'Experience a melody of flavors with our Smoked Salmon Toast. A slice of artisanal bread, perfectly toasted to a golden crisp, serves as the stage for velvety smoked salmon, complemented by a spread of creamy dill-infused cream cheese. Garnished with capers and thinly sliced red onions, this dish hits all the right notes for a luxurious and satisfying treat.'\n                    )}\n                </li>\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/strawberries.png',\n                    'A Fancy Victoria era plate with Strawberries on it',\n                    'Berry Bliss Bowl',\n                    'Indulge in the simple sweetness of nature with our Bowl of Strawberries. Each strawberry is handpicked at peak ripeness, ensuring a burst of natural sweetness in every bite. Served fresh, these ruby red jewels are lightly dusted with a whisper of powdered sugar and accompanied by a dollop of freshly whipped cream, making it a guilt-free dessert or a delightful snack.'\n                    )}\n                </li>\n                <li>\n                    ${(0,_component_Card__WEBPACK_IMPORTED_MODULE_0__.cardComponent)(\n                    './asset/pepperoni-pizza.png',\n                    'A classic pepperoni pizza',\n                    'Peppy Pepperoni Party Pizza',\n                    'Get ready to party with every slice of our Peppy Pepperoni Pizza. This crowd-pleaser features a golden, hand-tossed crust topped with our signature tomato sauce, a generous layer of melted mozzarella cheese, and a parade of spicy pepperoni slices. Baked to perfection, it\\'s a classic comfort dish with a fun twist, perfect for sharing with friends and family.'\n                    )}\n                </li>\n            </ul>\n        </section>\n        `\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/view/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;