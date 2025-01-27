/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 425:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/recovery-sheet/recoverySheet.css ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/***************************************
 * RECOVERY SHEET ROOT ELEMENT
 */
.recovery-sheet {
    min-width: 740px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #262626;
    box-sizing: border-box;
}

/***************************************
 * TEASER ELEMENT
 */
.recovery-sheet_teaser {
    position: relative;
    background-color: #ccc;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.recovery-sheet_teaser h1 {
    margin: 10px 0;
    font-size: 54px;
    color: #515151;
}

.recovery-sheet_teaser img {
    margin: 20px;
}

/***************************************
 * GLOBAL CONTENT
 */
.recovery-sheet_content {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    max-width: 880px;
}

.recovery-sheet_content h2,
.recovery-sheet_content h3,
.recovery-sheet_content h4 {
    color: #515151;
}

.recovery-sheet_content h2 {
    font-size: 43px;
    margin-top: 0;
}

.recovery-sheet_content h3 {
    font-size: 15px;
}

.recovery-sheet_content h4 {
    font-size: 14px;
}

.recovery-sheet_content p:last-of-type {
    margin-bottom: 0;
}

/***************************************
 * CONTENT PANEL ELEMENT
 */
.recovery-sheet_panel {
    background-color: #e8eef7;
    border: 1px solid #c6c6c6;
    margin: 20px 15px 0;
    overflow: hidden;
    width: 100%;
}

.recovery-sheet_panel-content {
    margin: 20px;
}

/***************************************
 * CODE PANEL ELEMENT
 */
.recovery-sheet_code {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px
}

.recovery-sheet_code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.recovery-sheet_code-header * {
    margin-top: 0;
}

.recovery-sheet_code-container {
    position: static !important;
    background-color: #fff;
    height: 85px !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.recovery-sheet_code-digit {
    background-color: #ccc;
    border: 1px dotted #c6c6c6;
    padding: 5px 10px;
    font-size: 30px;
    text-align: center;
    font-family: Consolas, "Lucida Console", Monaco, monospace;
}

.recovery-sheet_code-separator {
    font-size: 30px;
    margin: 5px;
}

/***************************************
 * DEVICE ELEMENTS
 */
.recovery-sheet_devices {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
}

.recovery-sheet_devices-item {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.recovery-sheet_devices-item:first-of-type {
    padding-right: 45px;
    border-right: 1px solid #c6c6c6;
}

.recovery-sheet_devices-item:last-of-type {
    padding-left: 45px;
    border-left: 1px solid #c6c6c6;
}

.recovery-sheet_devices-image {
    width: 100px;
    height: 60px;
    background-color: #999;
}

.recovery-sheet_devices-split-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.recovery-sheet_devices-split-content:last-child {
    margin-bottom: 0;
}

.recovery-sheet_devices-qr-code {
    width: 100px;
    height: 100px;
}

/***************************************
 * DESCRIPTION
 */
.recovery-sheet_description {
    margin-top: 50px;
    margin-bottom: 50px;
}

/***************************************
 * PRINT BUTTON
 */
.recovery-sheet_print {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.recovery-sheet_print > img {
    margin: 0 15px;
    opacity: 0.75;
    cursor: pointer;
}

.recovery-sheet_print > button {
    margin: 0 15px;
    cursor: pointer;
}

.recovery-sheet_print-button {
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    font-size: 16.24px;
    padding: 0 16px;
    transition: background-color .1s ease-in-out;
    border: none;
    border-radius: 4px;
    box-shadow: none;
}

.gmx .recovery-sheet_print-button {
    background: #6e8904;
    color: #fff;
}

.gmx .recovery-sheet_print-button:hover {
    background: #586e03;
}

.webde .recovery-sheet_print-button {
    background: #ffd800;
    color: #333;
}

.webde .recovery-sheet_print-button:hover {
    background: #ccad00;
}

/***************************************
 * MISC CLASSES
 */

.page-breaker {
    padding: 0;
    margin: 0;
    border: 0;
}

/***************************************
 * BRAND SPECIFIC
 */
.logo {
    width: 100px;
    height: auto;
    background-color: #fff;
}

.gmx .logo {
    margin-top: 26px;
}

.webde .gmx-specific {
    display: none;
}

.desktop-image {
    width: 121px;
    height: 99px;
}

.smartphone-image {
    width: 45px;
    height: 95px;
}

.tablet-image {
    width: 70px;
    height: 97px;
}

/***************************************
 * PRINT SPECIFIC LAYOUT
 */
@media print {

    @page {
      size: 210mm 297mm;
      margin-top: 20mm;
    }

    .recovery-sheet {
        display: block;
    }

    .recovery-sheet_teaser {
        border: 1px solid #000;
    }

    .recovery-sheet_teaser img {
        margin: 10px;
    }

    .recovery-sheet_content {
        margin: 40px 0;
    }

    .recovery-sheet_content h2 {
        font-size: 30px;
    }

    .recovery-sheet_content h3 {
        font-size: 18px;
    }

    .recovery-sheet_content h4 {
        font-size: 16px;
    }

    .recovery-sheet_content p, .recovery-sheet_content ul li {
        font-size: 14px;
    }

    .page-breaker {
        page-break-after: always;
        page-break-inside: avoid;
    }
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 673:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/util/SecurityBG.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.securityBG {
  position: absolute;
  width: 100%;
  min-height: 100%;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 601:
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 694:
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 925);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 556:
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 694)();
}


/***/ }),

/***/ 925:
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 72:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************************************************!*\
  !*** ./src/components/recovery-sheet/recoverySheetRoot.js + 13 modules ***!
  \*************************************************************************/

;// external "React"
const external_React_namespaceObject = React;
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// ./src/lib/l10n.js
let map = {};
function register(ids) {
  for (const id of ids) {
    map[id] = true;
  }
}
function mapToLocal() {
  map = getMessages(Object.keys(map));
}
const get = chrome.i18n.getMessage;
function getMessages(ids) {
  const result = {};
  for (const id of ids) {
    result[id] = chrome.i18n.getMessage(id);
  }
  return result;
}
function set(ids) {
  register(ids);
  mapToLocal();
}
function getLanguage() {
  return chrome.i18n.getUILanguage();
}
function localizeDateTime(date, options = {}) {
  return date.toLocaleDateString(getLanguage(), options);
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./src/lib/constants.js
/* constants */

// min height for large frame
const LARGE_FRAME = 600;
// frame constants
const FRAME_STATUS = 'mveloFrame';
// frame status
const FRAME_ATTACHED = 'att';
const FRAME_DETACHED = 'det';
// armor header type
const PGP_MESSAGE = 'msg';
const PGP_SIGNATURE = 'sig';
const PGP_PUBLIC_KEY = 'pub';
const PGP_PRIVATE_KEY = 'priv';
// key status
const PGP_KEYSTATUS_VALID = 3;
// display decrypted message
const DISPLAY_INLINE = 'inline';
const DISPLAY_POPUP = 'popup';
// editor type
const PLAIN_TEXT = 'plain';
// keyring
const KEYRING_DELIMITER = '|#|';
const MAIN_KEYRING_ID = (/* unused pure expression or super */ null && (`localhost${KEYRING_DELIMITER}mailvelope`));
const GNUPG_KEYRING_ID = (/* unused pure expression or super */ null && (`localhost${KEYRING_DELIMITER}gnupg`));
// colors for secure background
const SECURE_COLORS = ['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536'];
// 50 MB file size limit
const MAX_FILE_UPLOAD_SIZE = (/* unused pure expression or super */ null && (50 * 1024 * 1024));
// stable id if app runs in top frame
const APP_TOP_FRAME_ID = 'apptopframeid';
// status of PGP key or user
const KEY_STATUS = {
  invalid: 0,
  expired: 1,
  revoked: 2,
  valid: 3,
  no_self_cert: 4
};
;// ./src/res/common.json
const common_namespaceObject = /*#__PURE__*/JSON.parse('{"J":{"petrol":{"bg":"#caebdd","icon":"#85c9af"},"corn":{"bg":"#faebae","icon":"#e3d18b"},"salmon":{"bg":"#f7cab5","icon":"#e0a98e"},"lavender":{"bg":"#d9caeb","icon":"#baa7d9"},"sky":{"bg":"#cadaeb","icon":"#90b5da"}}}');
;// ./src/lib/svg-file-parser.js
async function parseSVG(url) {
  const extUrl = chrome.runtime.getURL(url);
  const svg = await loadFile(extUrl);
  const parser = new DOMParser();
  return parser.parseFromString(svg, 'image/svg+xml');
}
async function loadFile(url) {
  const response = await fetch(url);
  const data = await response.text();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      err: data
    });
  }
}
;// ./src/lib/util.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class MvError extends Error {
  constructor(msg, code = 'INTERNAL_ERROR') {
    super(msg);
    this.code = code;
  }
}
function sortAndDeDup(unordered, compFn) {
  const result = [];
  const sorted = unordered.sort(compFn);
  // remove duplicates
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || compFn && compFn(sorted[i - 1], sorted[i]) !== 0 || !compFn && sorted[i - 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }
  return result;
}

/**
 * Remove duplicates from list, by default compares items as strings
 * @param  {Array} list - the list of items with duplicates
 * @param {Function} [compFn] compare function that gets element that should be added to result list plus the current result list
 *                            must return true if element should be added to the result list
 * @return {Array} - the list of items without duplicates
 */
function deDup(list = [], compFn = (element, array) => array.indexOf(element) === -1) {
  const result = [];
  for (const item of list) {
    if (compFn(item, result)) {
      result.push(item);
    }
  }
  return result;
}
async function filterAsync(array, asyncFilterFn) {
  const promises = array.map(async item => (await asyncFilterFn(item)) && item);
  const result = await Promise.all(promises);
  return result.filter(item => item);
}
async function someAsync(array, asyncSomeFn) {
  const promises = array.map(asyncSomeFn);
  const result = await Promise.all(promises);
  return result.some(item => item);
}
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getUUID() {
  if (crypto.randomUUID) {
    return crypto.randomUUID().replaceAll('-', '');
  } else {
    let result = '';
    const buf = new Uint16Array(8);
    crypto.getRandomValues(buf);
    for (let i = 0; i < buf.length; i++) {
      result += buf[i].toString(16);
    }
    return result;
  }
}
function encodeHTML(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\//g, '&#x2F;');
}
function decodeHTML(html) {
  return String(html).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "\'").replace(/&#x2F;/g, '\/');
}
function parseHTML(html) {
  const htmlDoc = new DOMParser().parseFromString(html, 'text/html');
  return htmlDoc.body.childNodes;
}
function decodeQuotedPrint(armored) {
  return armored.replace(/=3D=3D\s*$/m, '==').replace(/=3D\s*$/m, '=').replace(/=3D(\S{4})\s*$/m, '=$1');
}

/**
 * Encode UTF-8 string
 * @param  {String} str
 * @return {Uint8Array}
 */
function encodeUtf8(str) {
  const encoder = new TextEncoder('utf-8');
  return encoder.encode(str);
}

/**
 * Normalize PGP armored message
 * @param  {String} msg
 * @param  {Regex} typeRegex - filter message with this Regex
 * @return {String}
 */
function normalizeArmored(msg, typeRegex) {
  // filtering to get well defined PGP message format
  msg = msg.replace(/\r\n/g, '\n'); // unify new line characters
  msg = msg.replace(/\n\s+/g, '\n'); // compress sequence of whitespace and new line characters to one new line
  msg = msg.replace(/[^\S\r\n]/g, ' '); // unify white space characters (all \s without \r and \n)
  if (typeRegex) {
    msg = msg.match(typeRegex);
    if (msg) {
      msg = msg[0];
    } else {
      throw new MvError('Could not extract valid PGP message', 'INVALID_ARMORED_BLOCK');
    }
  }
  msg = msg.replace(/^(\s?>)+/gm, ''); // remove quotation
  msg = msg.replace(/^\s+/gm, ''); // remove leading whitespace
  msg = msg.replace(/:.*\n(?!.*:)/, '$&\n'); // insert new line after last armor header
  msg = msg.replace(/-----\n(?!.*:)/, '$&\n'); // insert new line if no header
  msg = decodeQuotedPrint(msg);
  return msg;
}
function html2text(html) {
  html = html.replace(/\n/g, ' '); // replace new line with space
  html = html.replace(/(<br>)/g, '\n'); // replace <br> with new line
  html = html.replace(/<\/(blockquote|div|dl|dt|dd|form|h1|h2|h3|h4|h5|h6|hr|ol|p|pre|table|tr|td|ul|li|section|header|footer)>/g, '\n'); // replace block closing tags </..> with new line
  html = html.replace(/<(.+?)>/g, ''); // remove tags
  html = html.replace(/&nbsp;/g, ' '); // replace non-breaking space with whitespace
  html = html.replace(/\n{3,}/g, '\n\n'); // compress new line
  return decodeHTML(html);
}

/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 * @param {string} str
 * @returns {number}
 */
function byteCount(str) {
  return encodeURI(str).split(/%..|./).length - 1;
}
function ab2str(buf) {
  const ab = new Uint8Array(buf);
  return Uint8Array2str(ab);
}
function Uint8Array2str(ab) {
  let str = '';
  const CHUNK_SIZE = Math.pow(2, 15);
  let offset;
  let len;
  let subab;
  for (offset = 0; offset < ab.length; offset += CHUNK_SIZE) {
    len = Math.min(CHUNK_SIZE, ab.length - offset);
    subab = ab.subarray(offset, offset + len);
    str += String.fromCharCode.apply(null, subab);
  }
  return str;
}
function str2ab(str) {
  const bufView = str2Uint8Array(str);
  return bufView.buffer;
}
function str2Uint8Array(str) {
  const bufView = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return bufView;
}
function str2bool(value) {
  if (value && typeof value === 'string') {
    if (value.toLowerCase() === 'true') {
      return true;
    }
    if (value.toLowerCase() === 'false') {
      return false;
    }
  }
  return value;
}
function ab2hex(ab) {
  return Array.from(new Uint8Array(ab)).map(b => b.toString(16).padStart(2, '0')).join('');
}
function base64EncodeUrl(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}
function base64DecodeUrl(str) {
  str = `${str}===`.slice(0, str.length + str.length % 4);
  return str.replace(/-/g, '+').replace(/_/g, '/');
}
function dataURL2str(dataURL) {
  const base64 = dataURL2base64(dataURL);
  return atob(base64);
}
function dataURL2base64(dataURL) {
  return dataURL.split(';base64,')[1];
}
function generateSecurityBackground({
  width,
  height,
  scaling = 1,
  angle = 0,
  colorId = 0
}) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = SECURE_COLORS[colorId];
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
}
async function getSecurityBackground(port) {
  const background = await port.send('get-security-background');
  const image = background.bgIcon ? (await generateSecurityBGSVG(background)).outerHTML : generateSecurityBackground(background);
  const color = background.bgColor ? common_namespaceObject.J[background.bgColor].bg : background.color;
  return {
    image: `url(data:image/svg+xml;base64,${btoa(image)})`,
    color
  };
}
async function generateSecurityBGSVG({
  bgIcon,
  bgColor
}) {
  const svgTemplateUrl = 'img/security/template.svg';
  const {
    documentElement: svgTemplate
  } = await parseSVG(svgTemplateUrl);
  const tileWidth = 640;
  svgTemplate.setAttribute('width', tileWidth);
  svgTemplate.getElementById('template').setAttribute('fill', common_namespaceObject.J[bgColor].icon);
  const svgBgIconUrl = `img/security/${bgIcon}.svg`;
  const {
    documentElement: svgBgIcon
  } = await parseSVG(svgBgIconUrl);
  const paths = svgBgIcon.getElementsByTagName('path');
  for (const path of paths) {
    path.style.fill = common_namespaceObject.J[bgColor].icon;
  }
  const placeholders = svgTemplate.querySelectorAll('.icon');
  for (const placeholderElem of placeholders) {
    const gElem = placeholderElem.querySelector('g:last-child');
    gElem.firstElementChild.remove();
    const clonedSvgBgIcon = svgBgIcon.cloneNode(true);
    while (clonedSvgBgIcon.childNodes.length > 0) {
      gElem.appendChild(clonedSvgBgIcon.childNodes[0]);
    }
  }
  return svgTemplate;
}
function matchPattern2RegEx(matchPattern) {
  return new RegExp(`^${matchPattern2RegExString(matchPattern)}$`);
}
function matchPattern2RegExString(matchPattern) {
  return matchPattern.replace(/\./g, '\\.').replace(/^\*\\\./, '(\\w+(-\\w+)*\\.)*');
}
function mapError(error = {}) {
  return {
    message: error.message || 'Unexpected error.',
    code: error.code || 'INTERNAL_ERROR'
  };
}
class PromiseQueue {
  constructor() {
    this.queue = [];
  }
  push(thisArg, method, args) {
    const {
      promise,
      resolve,
      reject
    } = Promise.withResolvers();
    this.queue.push({
      promise,
      resolve,
      reject,
      thisArg,
      method,
      args
    });
    if (this.queue.length === 1) {
      this._next();
    }
    return promise;
  }
  _next() {
    if (this.queue.length === 0) {
      return;
    }
    const nextEntry = this.queue[0];
    setTimeout(() => {
      nextEntry.thisArg[nextEntry.method].apply(nextEntry.thisArg, nextEntry.args).then(result => {
        nextEntry.resolve(result);
      }).catch(error => {
        nextEntry.reject(error);
      }).then(() => {
        this.queue.shift();
        this._next();
      });
    }, 0);
  }
}

/**
 * Waterfall of async processes
 * @param  {Function} process - has to return Promise, result as array
 * @param  {Array} list - each item is processed
 * @return {Promise} - resolved when all processes finished with end result as array
 */
/* eslint-disable arrow-body-style */
function sequential(process, list) {
  return list.reduce((acc, item) => {
    return acc.then(result => {
      return process(item).then(processResult => {
        result.push(...processResult);
        return result;
      });
    });
  }, Promise.resolve([]));
}
/* eslint-enable arrow-body-style */

/**
 * Validate an email address.
 * @param  {String} address   The email address to validate
 * @return {Boolean}          True if valid, false if not
 */
function checkEmail(address) {
  const pattern = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  return pattern.test(address);
}

/**
 * Normalize parameter to Array. falsy -> []
 * @param  {Any}  param
 * @return {Array}
 */
function toArray(param) {
  if (!param) {
    return [];
  }
  if (!Array.isArray(param)) {
    return [param];
  }
  return param;
}

/**
 * Validate an url
 * @param  {String} url       The URL to validate
 * @return {Boolean}          True if valid, false if not
 */
function checkUrl(url) {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
  return pattern.test(url);
}
function addDocumentTitle(text) {
  const title = document.createElement('title');
  title.appendChild(document.createTextNode(text));
  document.head.appendChild(title);
}
function formatFpr(fpr) {
  return fpr.toUpperCase().match(/.{1,4}/g).join(' ');
}
function isVisible(element) {
  return Boolean(element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length));
}
function firstParent(element, selector) {
  while (element) {
    if (element.nodeType === Node.ELEMENT_NODE && element.matches(selector)) {
      return element;
    }
    element = element.parentNode;
  }
}
const brands = navigator && navigator.userAgentData && navigator.userAgentData.brands;
const brand = !brands ? {
  other: true
} : {
  chrome: brands.some(({
    brand
  }) => brand === 'Google Chrome'),
  edge: brands.some(({
    brand
  }) => brand === 'Microsoft Edge'),
  chromium: brands.some(({
    brand
  }) => brand === 'Chromium')
};
function parseViewName(viewName) {
  const pair = viewName.split('-');
  if (pair.length !== 2) {
    throw new Error('Invalid view name.');
  }
  return {
    type: pair[0],
    id: pair[1]
  };
}
;// ./src/lib/EventHandler.js
/**
 * Copyright (C) 2016-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



/**
 * Event handler is an abstraction on top of Port to support methods 'on', 'emit' and 'send'.
 * @param {Port} port - port object received from runtime.connect()
 * @param {Map} handlers - handler map of parent event handler
 */
class EventHandler {
  #reply;
  #replyCount = 0;
  #uninstallListener = [];
  #uninstallInterval;
  #portName;
  #activePortMessages = true;
  #connectListener = [];
  #disconnectListener = [];
  constructor(port, handlers) {
    if (port) {
      this.initPort(port);
    }
    this._handlers = handlers || new Map();
    this._handlerObject = null;
  }

  /**
   * Open port to background script
   * @param  {String} sender identifier of sender (type + id)
   * @return {EventHandler}        initialized EventHandler
   */
  static connect(sender, handlerObject) {
    const eventHandler = new EventHandler(chrome.runtime.connect({
      name: sender
    }));
    eventHandler._handlerObject = handlerObject;
    chrome.runtime.onMessage.addListener(eventHandler.handleRuntimeMessage.bind(eventHandler));
    setTimeout(() => eventHandler.triggerConnectListener(), 0);
    return eventHandler;
  }
  activatePortMessages() {
    this.#activePortMessages = true;
  }
  deactivatePortMessages() {
    this.#activePortMessages = false;
  }
  #checkConnection() {
    if (this._port) {
      return;
    }
    const port = chrome.runtime.connect({
      name: this.#portName
    });
    this.initPort(port);
    this.triggerConnectListener();
  }
  handleRuntimeMessage(msg) {
    switch (msg.event) {
      case 'reconnect':
        this.#checkConnection();
        break;
    }
  }
  initPort(port) {
    this._port = port;
    this._port.onMessage.addListener(this.handlePortMessage.bind(this));
    this.#portName = port.name;
    if (this._port.onDisconnect) {
      this._port.onDisconnect.addListener(() => this.handleDisconnect());
      for (const listener of this.#disconnectListener) {
        this._port.onDisconnect.addListener(listener);
      }
    }
  }
  handleDisconnect() {
    this.clearPort();
    this.#reply?.forEach(({
      reject
    }) => reject({
      message: 'The Mailvelope service worker was shutdown after 30s of inactivity. Please try again.',
      code: 'INTERNAL_ERROR'
    }));
    this.#reply = null;
    this.#replyCount = 0;
  }
  clearPort() {
    this._port = null;
  }

  /**
   * Disconnect port
   */
  disconnect() {
    if (this._port) {
      this._port.disconnect();
    }
  }

  /**
   * We can detect an uninstall event if the field chrome.runtime.id is cleared
   */
  #checkUninstall() {
    if (chrome.runtime?.id) {
      return;
    }
    for (const listener of this.#uninstallListener) {
      listener();
    }
    clearInterval(this.#uninstallInterval);
  }
  get onDisconnect() {
    const obj = {};
    obj.addListener = listener => {
      this._port.onDisconnect.addListener(listener);
      this.#disconnectListener.push(listener);
    };
    return obj;
  }
  get onConnect() {
    const obj = {};
    obj.addListener = listener => this.#connectListener.push(listener);
    return obj;
  }
  triggerConnectListener() {
    this.#connectListener.forEach(listener => listener());
  }
  get onUninstall() {
    const obj = {};
    obj.addListener = listener => {
      this.#uninstallListener.push(listener);
      if (!this.#uninstallInterval) {
        this.#uninstallInterval = setInterval(() => this.#checkUninstall(), 2000);
      }
    };
    return obj;
  }

  /**
   * Generic port message handler that can be attached via port.onMessage.addListener().
   * Once set up, events can be handled with on('event', function(options) {})
   * @param  {String} options.event   The event descriptor
   * @param  {Object} options         Contains message attributes and data
   */
  handlePortMessage(options = {}) {
    if (!this.#activePortMessages) {
      return;
    }
    if (this._handlers.has(options.event)) {
      const handler = this._handlers.get(options.event);
      if (options._reply) {
        // sender expects reply
        Promise.resolve().then(() => handler.call(this, options)).then(result => this.emit('_reply', {
          result,
          _reply: options._reply
        })).catch(error => this.emit('_reply', {
          error: mapError(error),
          _reply: options._reply
        }));
      } else {
        // normal one way communication
        handler.call(this, options);
      }
    } else if (options.event === '_reply') {
      // we have received a reply
      const replyHandler = this.#reply.get(options._reply);
      this.#reply.delete(options._reply);
      if (options.error) {
        replyHandler.reject(options.error);
      } else {
        replyHandler.resolve(options.result);
      }
    } else {
      console.log('Unknown event', options);
    }
  }

  /**
   * The new event handling style to asign a function to an event.
   * @param  {String} event       The event descriptor
   * @param  {Function} handler   The event handler
   */
  on(event, handler) {
    if (!event || typeof event !== 'string' || event === '_reply' || typeof handler !== 'function') {
      throw new Error('Invalid event handler!');
    }
    this._handlers.set(event, handler.bind(this._handlerObject || this));
  }

  /**
   * Helper to emit events via postMessage using a port.
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   */
  emit(event, options = {}) {
    if (!event || typeof event !== 'string') {
      throw new Error('Invalid event!');
    }
    this.#checkConnection();
    options.event = event;
    this._port.postMessage(options);
  }
  trigger(event, options = {}) {
    if (!event || typeof event !== 'string') {
      throw new Error('Invalid event!');
    }
    options.event = event;
    if (!this._handlers.has(options.event)) {
      throw new Error('Unknown event!');
    }
    const handler = this._handlers.get(options.event);
    handler.call(this, options);
  }

  /**
   * Like emit but receiver can send response
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   * @param  {Object} port      (optional) The port to be used. If
   *                            not specified, the main port is used.
   * @return {Promise}
   */
  send(event, options = {}) {
    return new Promise((resolve, reject) => {
      if (!event || typeof event !== 'string') {
        return reject(new Error('Invalid event!'));
      }
      this.#checkConnection();
      if (!this.#reply) {
        this.#reply = new Map();
      }
      options.event = event;
      options._reply = ++this.#replyCount;
      this.#reply.set(options._reply, {
        resolve,
        reject
      });
      this._port.postMessage(options);
    });
  }
}
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/util/SecurityBG.css
var SecurityBG = __webpack_require__(673);
;// ./src/components/util/SecurityBG.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SecurityBG/* default */.A, options);




       /* harmony default export */ const util_SecurityBG = (SecurityBG/* default */.A && SecurityBG/* default */.A.locals ? SecurityBG/* default */.A.locals : undefined);

;// ./src/components/util/SecurityBG.js




class SecurityBG_SecurityBG extends (external_React_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'none',
      color: 'none'
    };
    props.port.on('update-security-background', () => this.setSecurityBG());
  }
  componentDidMount() {
    this.setSecurityBG();
  }
  async setSecurityBG() {
    const {
      image,
      color
    } = await getSecurityBackground(this.props.port);
    this.setState({
      image,
      color
    });
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: `securityBG ${this.props.className || ''}`,
      style: {
        backgroundImage: this.state.image,
        backgroundColor: this.state.color
      }
    }, this.props.children);
  }
}
SecurityBG_SecurityBG.propTypes = {
  className: (prop_types_default()).string,
  port: (prop_types_default()).object.isRequired,
  children: (prop_types_default()).node.isRequired
};
;// ./node_modules/qrcode.react/lib/esm/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx


// src/third-party/qrcodegen/index.ts
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var qrcodegen;
((qrcodegen2) => {
  const _QrCode = class {
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < _QrCode.MIN_VERSION || version > _QrCode.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7)
        throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++)
        row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(0 <= msk && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return _QrCode.encodeSegments(segs, ecl);
    }
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return _QrCode.encodeSegments([seg], ecl);
    }
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(_QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= _QrCode.MAX_VERSION) || mask < -1 || mask > 7)
        throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = _QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [_QrCode.Ecc.MEDIUM, _QrCode.Ecc.QUARTILE, _QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= _QrCode.getNumDataCodewords(version, newEcl) * 8)
          ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData())
          bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = _QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17)
        appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length)
        dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new _QrCode(version, ecl, dataCodewords, mask);
    }
    getModule(x, y) {
      return 0 <= x && x < this.size && 0 <= y && y < this.size && this.modules[y][x];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0))
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++)
        rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++)
        this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++)
        this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++)
        this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++)
        this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let rem = this.version;
      for (let i = 0; i < 12; i++)
        rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size)
            this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++)
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != _QrCode.getNumDataCodewords(ver, ecl))
        throw new RangeError("Invalid argument");
      const numBlocks = _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(_QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = _QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = _QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks)
          dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
            result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    drawCodewords(data) {
      if (data.length != Math.floor(_QrCode.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6)
          right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    applyMask(mask) {
      if (mask < 0 || mask > 7)
        throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert)
            this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5)
              result += _QrCode.PENALTY_N1;
            else if (runX > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5)
              result += _QrCode.PENALTY_N1;
            else if (runY > 5)
              result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor)
              result += this.finderPenaltyCountPatterns(runHistory) * _QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * _QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1])
            result += _QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules)
        dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(0 <= k && k <= 9);
      result += k * _QrCode.PENALTY_N4;
      assert(0 <= result && result <= 2568888);
      return result;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step)
          result.splice(1, 0, pos);
        return result;
      }
    }
    static getNumRawDataModules(ver) {
      if (ver < _QrCode.MIN_VERSION || ver > _QrCode.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7)
          result -= 36;
      }
      assert(208 <= result && result <= 29648);
      return result;
    }
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(_QrCode.getNumRawDataModules(ver) / 8) - _QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * _QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255)
        throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++)
        result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = _QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length)
            result[j] ^= result[j + 1];
        }
        root = _QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= _QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0)
        throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0)
        currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
  };
  let QrCode = _QrCode;
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.PENALTY_N1 = 3;
  QrCode.PENALTY_N2 = 3;
  QrCode.PENALTY_N3 = 40;
  QrCode.PENALTY_N4 = 10;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0)
      throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--)
      bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond)
      throw new Error("Assertion error");
  }
  const _QrSegment = class {
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0)
        throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    static makeBytes(data) {
      let bb = [];
      for (const b of data)
        appendBits(b, 8, bb);
      return new _QrSegment(_QrSegment.Mode.BYTE, data.length, bb);
    }
    static makeNumeric(digits) {
      if (!_QrSegment.isNumeric(digits))
        throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substr(i, n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new _QrSegment(_QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    static makeAlphanumeric(text) {
      if (!_QrSegment.isAlphanumeric(text))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += _QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(_QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new _QrSegment(_QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    static makeSegments(text) {
      if (text == "")
        return [];
      else if (_QrSegment.isNumeric(text))
        return [_QrSegment.makeNumeric(text)];
      else if (_QrSegment.isAlphanumeric(text))
        return [_QrSegment.makeAlphanumeric(text)];
      else
        return [_QrSegment.makeBytes(_QrSegment.toUtf8ByteArray(text))];
    }
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0)
        throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7)
        appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else
        throw new RangeError("ECI assignment value out of range");
      return new _QrSegment(_QrSegment.Mode.ECI, 0, bb);
    }
    static isNumeric(text) {
      return _QrSegment.NUMERIC_REGEX.test(text);
    }
    static isAlphanumeric(text) {
      return _QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits)
          return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%")
          result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substr(i + 1, 2), 16));
          i += 2;
        }
      }
      return result;
    }
  };
  let QrSegment = _QrSegment;
  QrSegment.NUMERIC_REGEX = /^[0-9]*$/;
  QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
  QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrCode;
  ((QrCode2) => {
    const _Ecc = class {
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    };
    let Ecc = _Ecc;
    Ecc.LOW = new _Ecc(0, 1);
    Ecc.MEDIUM = new _Ecc(1, 0);
    Ecc.QUARTILE = new _Ecc(2, 3);
    Ecc.HIGH = new _Ecc(3, 2);
    QrCode2.Ecc = Ecc;
  })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
((qrcodegen2) => {
  let QrSegment;
  ((QrSegment2) => {
    const _Mode = class {
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    };
    let Mode = _Mode;
    Mode.NUMERIC = new _Mode(1, [10, 12, 14]);
    Mode.ALPHANUMERIC = new _Mode(2, [9, 11, 13]);
    Mode.BYTE = new _Mode(4, [8, 16, 16]);
    Mode.KANJI = new _Mode(8, [8, 10, 12]);
    Mode.ECI = new _Mode(7, [0, 0, 0]);
    QrSegment2.Mode = Mode;
  })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen_default = qrcodegen;

// src/index.tsx
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ERROR_LEVEL_MAP = {
  L: qrcodegen_default.QrCode.Ecc.LOW,
  M: qrcodegen_default.QrCode.Ecc.MEDIUM,
  Q: qrcodegen_default.QrCode.Ecc.QUARTILE,
  H: qrcodegen_default.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 128;
var DEFAULT_LEVEL = "L";
var DEFAULT_BGCOLOR = "#FFFFFF";
var DEFAULT_FGCOLOR = "#000000";
var DEFAULT_INCLUDEMARGIN = false;
var MARGIN_SIZE = 4;
var DEFAULT_IMG_SCALE = 0.1;
function generatePath(modules, margin = 0) {
  const ops = [];
  modules.forEach(function(row, y) {
    let start = null;
    row.forEach(function(cell, x) {
      if (!cell && start !== null) {
        ops.push(`M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`);
        start = null;
        return;
      }
      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(`M${start + margin},${y + margin} h${x + 1 - start}v1H${start + margin}z`);
        }
        return;
      }
      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join("");
}
function excavateModules(modules, excavation) {
  return modules.slice().map((row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return row.map((cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}
function getImageSettings(cells, size, includeMargin, imageSettings) {
  if (imageSettings == null) {
    return null;
  }
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  const y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  let excavation = null;
  if (imageSettings.excavate) {
    let floorX = Math.floor(x);
    let floorY = Math.floor(y);
    let ceilW = Math.ceil(w + x - floorX);
    let ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }
  return { x, y, h, w, excavation };
}
var SUPPORTS_PATH2D = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
function QRCodeCanvas(props) {
  const _a = props, {
    value,
    size = DEFAULT_SIZE,
    level = DEFAULT_LEVEL,
    bgColor = DEFAULT_BGCOLOR,
    fgColor = DEFAULT_FGCOLOR,
    includeMargin = DEFAULT_INCLUDEMARGIN,
    style,
    imageSettings
  } = _a, otherProps = __objRest(_a, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]);
  const imgSrc = imageSettings == null ? void 0 : imageSettings.src;
  const _canvas = (0,external_React_namespaceObject.useRef)(null);
  const _image = (0,external_React_namespaceObject.useRef)(null);
  const [isImgLoaded, setIsImageLoaded] = (0,external_React_namespaceObject.useState)(false);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (_canvas.current != null) {
      const canvas = _canvas.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      let cells = qrcodegen_default.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]).getModules();
      const margin = includeMargin ? MARGIN_SIZE : 0;
      const numCells = cells.length + margin * 2;
      const calculatedImageSettings = getImageSettings(cells, size, includeMargin, imageSettings);
      const image = _image.current;
      const haveImageToRender = calculatedImageSettings != null && image !== null && image.complete && image.naturalHeight !== 0 && image.naturalWidth !== 0;
      if (haveImageToRender) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }
      }
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.height = canvas.width = size * pixelRatio;
      const scale = size / numCells * pixelRatio;
      ctx.scale(scale, scale);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, numCells, numCells);
      ctx.fillStyle = fgColor;
      if (SUPPORTS_PATH2D) {
        ctx.fill(new Path2D(generatePath(cells, margin)));
      } else {
        cells.forEach(function(row, rdx) {
          row.forEach(function(cell, cdx) {
            if (cell) {
              ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
            }
          });
        });
      }
      if (haveImageToRender) {
        ctx.drawImage(image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
      }
    }
  });
  (0,external_React_namespaceObject.useEffect)(() => {
    setIsImageLoaded(false);
  }, [imgSrc]);
  const canvasStyle = __spreadValues({ height: size, width: size }, style);
  let img = null;
  if (imgSrc != null) {
    img = /* @__PURE__ */ external_React_default().createElement("img", {
      src: imgSrc,
      key: imgSrc,
      style: { display: "none" },
      onLoad: () => {
        setIsImageLoaded(true);
      },
      ref: _image
    });
  }
  return /* @__PURE__ */ external_React_default().createElement((external_React_default()).Fragment, null, /* @__PURE__ */ external_React_default().createElement("canvas", __spreadValues({
    style: canvasStyle,
    height: size,
    width: size,
    ref: _canvas
  }, otherProps)), img);
}
function QRCodeSVG(props) {
  const _a = props, {
    value,
    size = DEFAULT_SIZE,
    level = DEFAULT_LEVEL,
    bgColor = DEFAULT_BGCOLOR,
    fgColor = DEFAULT_FGCOLOR,
    includeMargin = DEFAULT_INCLUDEMARGIN,
    imageSettings
  } = _a, otherProps = __objRest(_a, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let cells = qrcodegen_default.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]).getModules();
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const calculatedImageSettings = getImageSettings(cells, size, includeMargin, imageSettings);
  let image = null;
  if (imageSettings != null && calculatedImageSettings != null) {
    if (calculatedImageSettings.excavation != null) {
      cells = excavateModules(cells, calculatedImageSettings.excavation);
    }
    image = /* @__PURE__ */ React.createElement("image", {
      xlinkHref: imageSettings.src,
      height: calculatedImageSettings.h,
      width: calculatedImageSettings.w,
      x: calculatedImageSettings.x + margin,
      y: calculatedImageSettings.y + margin,
      preserveAspectRatio: "none"
    });
  }
  const fgPath = generatePath(cells, margin);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    height: size,
    width: size,
    viewBox: `0 0 ${numCells} ${numCells}`
  }, otherProps), /* @__PURE__ */ React.createElement("path", {
    fill: bgColor,
    d: `M0,0 h${numCells}v${numCells}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: fgColor,
    d: fgPath,
    shapeRendering: "crispEdges"
  }), image);
}
var QRCode = (props) => {
  const _a = props, { renderAs } = _a, otherProps = __objRest(_a, ["renderAs"]);
  if (renderAs === "svg") {
    return /* @__PURE__ */ React.createElement(QRCodeSVG, __spreadValues({}, otherProps));
  }
  return /* @__PURE__ */ React.createElement(QRCodeCanvas, __spreadValues({}, otherProps));
};


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/recovery-sheet/recoverySheet.css
var recoverySheet = __webpack_require__(425);
;// ./src/components/recovery-sheet/recoverySheet.css

      
      
      
      
      
      
      
      
      

var recoverySheet_options = {};

recoverySheet_options.styleTagTransform = (styleTagTransform_default());
recoverySheet_options.setAttributes = (setAttributesWithoutAttributes_default());
recoverySheet_options.insert = insertBySelector_default().bind(null, "head");
recoverySheet_options.domAPI = (styleDomAPI_default());
recoverySheet_options.insertStyleElement = (insertStyleElement_default());

var recoverySheet_update = injectStylesIntoStyleTag_default()(recoverySheet/* default */.A, recoverySheet_options);




       /* harmony default export */ const recovery_sheet_recoverySheet = (recoverySheet/* default */.A && recoverySheet/* default */.A.locals ? recoverySheet/* default */.A.locals : undefined);

;// ./src/components/recovery-sheet/recoverySheet.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */









// register language strings
register(['recovery_sheet_backup_data', 'recovery_sheet_be_aware', 'recovery_sheet_check_settings', 'recovery_sheet_creation_date', 'recovery_sheet_data_lost', 'recovery_sheet_enter_code', 'recovery_sheet_extension_problems', 'recovery_sheet_forgot_password', 'recovery_sheet_header', 'recovery_sheet_in_general', 'recovery_sheet_keep_safe', 'recovery_sheet_mobile_devices', 'recovery_sheet_not_working', 'recovery_sheet_other_computer', 'recovery_sheet_other_contacts', 'recovery_sheet_other_devices', 'recovery_sheet_other_devices_setup', 'recovery_sheet_other_problems', 'recovery_sheet_pgp_compat', 'recovery_sheet_print_block', 'recovery_sheet_print_button', 'recovery_sheet_print_notice', 'recovery_sheet_provider_communication', 'recovery_sheet_provider_inbox', 'recovery_sheet_provider_security', 'recovery_sheet_provider_settings', 'recovery_sheet_qr_code', 'recovery_sheet_recommendation', 'recovery_sheet_recover_data', 'recovery_sheet_recovery_code', 'recovery_sheet_subtitle_receipt', 'recovery_sheet_subtitle_recover', 'recovery_sheet_trusted_contacts', 'recovery_sheet_unknown_third', 'recovery_sheet_unlock_backup']);
class RecoverySheet extends (external_React_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.setBrand(props.brand),
      backupCode: null,
      logoDataUrl: null,
      date: new Date().toLocaleDateString()
    };
    this.port = EventHandler.connect(`recoverySheet-${props.id}`, this);
    this.registerEventListeners();
    this.port.emit('get-logo-image');
    this.port.emit('get-backup-code');
  }
  registerEventListeners() {
    this.port.on('set-backup-code', ({
      backupCode
    }) => this.setState({
      backupCode
    }, this.port.emit('backup-code-window-init')));
    this.port.on('set-logo-image', ({
      image
    }) => this.setState({
      logoDataUrl: image
    }));
  }
  setBrand(brandId) {
    if (!brandId) {
      return '';
    }
    let brand;
    switch (brandId) {
      case 'webde':
        brand = 'WEB.DE';
        break;
      case 'gmx':
        brand = 'GMX';
        break;
      default:
        throw new Error('Unknown brand');
    }
    return brand;
  }
  render() {
    const printButton = /*#__PURE__*/external_React_default().createElement("button", {
      type: "button",
      onClick: () => window.print(),
      className: this.props.brand ? 'recovery-sheet_print-button' : 'btn btn-primary'
    }, map.recovery_sheet_print_button);
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: `recovery-sheet ${this.props.brand || ''}`
    }, /*#__PURE__*/external_React_default().createElement("header", {
      className: "recovery-sheet_teaser"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    }), /*#__PURE__*/external_React_default().createElement("h1", null, map.recovery_sheet_header), /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    })), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_content container"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "col-2"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: this.state.logoDataUrl ? this.state.logoDataUrl : '../../img/Mailvelope/logo_signet_96.png',
      className: "logo"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "col-10"
    }, /*#__PURE__*/external_React_default().createElement("h2", null, map.recovery_sheet_subtitle_receipt), /*#__PURE__*/external_React_default().createElement("h3", {
      className: "d-print-none"
    }, map.recovery_sheet_print_notice), /*#__PURE__*/external_React_default().createElement("h3", {
      className: "d-none d-print-flex"
    }, map.recovery_sheet_print_block))), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    }), printButton, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    })), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_panel"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_panel-content"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_code"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_code-header"
    }, /*#__PURE__*/external_React_default().createElement("h3", null, map.recovery_sheet_recovery_code), /*#__PURE__*/external_React_default().createElement("h3", null, /*#__PURE__*/external_React_default().createElement("span", null, map.recovery_sheet_creation_date), " ", /*#__PURE__*/external_React_default().createElement("span", null, this.state.date))), this.state.backupCode && /*#__PURE__*/external_React_default().createElement(SecurityBG_SecurityBG, {
      className: "recovery-sheet_code-container",
      port: this.port
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(0, 5)), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(5, 10)), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(10, 15)), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(15, 20)), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(20, 25)), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.slice(25, 26)))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_plain-content"
    }, /*#__PURE__*/external_React_default().createElement("h3", null, map.recovery_sheet_subtitle_recover), /*#__PURE__*/external_React_default().createElement("p", null, map.recovery_sheet_not_working), /*#__PURE__*/external_React_default().createElement("ul", null, /*#__PURE__*/external_React_default().createElement("li", null, map.recovery_sheet_forgot_password), /*#__PURE__*/external_React_default().createElement("li", null, map.recovery_sheet_extension_problems), /*#__PURE__*/external_React_default().createElement("li", null, map.recovery_sheet_other_problems)), this.props.brand && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("p", null, map.recovery_sheet_check_settings), /*#__PURE__*/external_React_default().createElement("p", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_inbox), " > ", /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_settings), " > ", /*#__PURE__*/external_React_default().createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), /*#__PURE__*/external_React_default().createElement("span", {
      className: "gmx-specific"
    }, " > "), /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_communication), "."))))), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_panel"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_panel-content"
    }, /*#__PURE__*/external_React_default().createElement("h3", null, map.recovery_sheet_other_devices), /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices-item recovery-sheet_devices-desktop"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_other_computer), /*#__PURE__*/external_React_default().createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/desktop.png`,
      className: "desktop-image"
    })), this.props.brand && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("p", null, map.recovery_sheet_enter_code), /*#__PURE__*/external_React_default().createElement("p", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_inbox), " > ", /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_settings), " > ", /*#__PURE__*/external_React_default().createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), /*#__PURE__*/external_React_default().createElement("span", {
      className: "gmx-specific"
    }, " > "), /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_communication), "."))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices-item recovery-sheet_devices-mobile"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_mobile_devices), /*#__PURE__*/external_React_default().createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/smartphone.png`,
      className: "smartphone-image"
    }), /*#__PURE__*/external_React_default().createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/tablet.png`,
      className: "tablet-image"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, /*#__PURE__*/external_React_default().createElement("p", null, map.recovery_sheet_qr_code), /*#__PURE__*/external_React_default().createElement(QRCodeCanvas, {
      value: this.state.backupCode,
      size: 175,
      level: "H",
      title: this.state.backupCode
    })))))), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    }), printButton, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    }))), /*#__PURE__*/external_React_default().createElement("footer", {
      className: "recovery-sheet_teaser d-none d-print-flex"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    }), /*#__PURE__*/external_React_default().createElement("h1", null, map.recovery_sheet_header), /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    })), this.props.brand && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("hr", {
      className: "page-breaker"
    }), /*#__PURE__*/external_React_default().createElement("header", {
      className: "recovery-sheet_teaser"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    }), /*#__PURE__*/external_React_default().createElement("h1", null, map.recovery_sheet_header), /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    })), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_content container"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "row"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "col-2"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: this.state.logoDataUrl ? this.state.logoDataUrl : '../../img/Mailvelope/logo_signet_96.png',
      className: "logo"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "col-10"
    }, /*#__PURE__*/external_React_default().createElement("h2", null, get('recovery_sheet_encryption_note', this.state.brand)), /*#__PURE__*/external_React_default().createElement("p", null, get('recovery_sheet_explain_pgp', this.state.brand)), /*#__PURE__*/external_React_default().createElement("div", {
      className: "recovery-sheet_description"
    }, /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_backup_data), /*#__PURE__*/external_React_default().createElement("ul", null, /*#__PURE__*/external_React_default().createElement("li", null, get('recovery_sheet_backup_server', this.state.brand)), /*#__PURE__*/external_React_default().createElement("li", null, get('recovery_sheet_backup_local', this.state.brand)), /*#__PURE__*/external_React_default().createElement("li", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_be_aware), ": ", /*#__PURE__*/external_React_default().createElement("span", null, map.recovery_sheet_data_lost))), /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_recover_data), /*#__PURE__*/external_React_default().createElement("ul", null, /*#__PURE__*/external_React_default().createElement("li", null, map.recovery_sheet_unlock_backup), /*#__PURE__*/external_React_default().createElement("li", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_recommendation), ": ", /*#__PURE__*/external_React_default().createElement("span", null, map.recovery_sheet_keep_safe))), /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_other_contacts), /*#__PURE__*/external_React_default().createElement("ul", null, /*#__PURE__*/external_React_default().createElement("li", null, map.recovery_sheet_pgp_compat), /*#__PURE__*/external_React_default().createElement("li", null, get('recovery_sheet_key_server', this.state.brand)), /*#__PURE__*/external_React_default().createElement("li", null, get('recovery_sheet_invite_contacts', this.state.brand)), /*#__PURE__*/external_React_default().createElement("li", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_recommendation), ": ", /*#__PURE__*/external_React_default().createElement("span", null, map.recovery_sheet_trusted_contacts))), /*#__PURE__*/external_React_default().createElement("h4", null, map.recovery_sheet_other_devices_setup), /*#__PURE__*/external_React_default().createElement("ul", null, /*#__PURE__*/external_React_default().createElement("li", null, /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_in_general), ": ", /*#__PURE__*/external_React_default().createElement("span", null, map.recovery_sheet_unknown_third)))), /*#__PURE__*/external_React_default().createElement("p", null, /*#__PURE__*/external_React_default().createElement("span", null, get('recovery_sheet_further_info', this.state.brand)), " ", /*#__PURE__*/external_React_default().createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_inbox), /*#__PURE__*/external_React_default().createElement("span", {
      className: "gmx-specific"
    }, " > "), /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_settings), " > ", /*#__PURE__*/external_React_default().createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), /*#__PURE__*/external_React_default().createElement("span", {
      className: "gmx-specific"
    }, " > "), /*#__PURE__*/external_React_default().createElement("em", null, map.recovery_sheet_provider_communication), "."))), /*#__PURE__*/external_React_default().createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    }), printButton, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/printer.png"
    }))), /*#__PURE__*/external_React_default().createElement("footer", {
      className: "recovery-sheet_teaser"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    }), /*#__PURE__*/external_React_default().createElement("h1", null, map.recovery_sheet_header), /*#__PURE__*/external_React_default().createElement("img", {
      src: "assets/lock.png"
    }))));
  }
}
RecoverySheet.propTypes = {
  id: (prop_types_default()).string,
  brand: (prop_types_default()).string
};
;// ./src/components/recovery-sheet/recoverySheetRoot.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





document.addEventListener('DOMContentLoaded', init);
mapToLocal();
function init() {
  const query = new URLSearchParams(document.location.search);
  // component id
  const id = query.get('id') || '';
  // brand if any
  const brand = query.get('brand') || '';
  // component used as a container (client API)
  const root = document.createElement('div');
  external_ReactDOM_default().render(/*#__PURE__*/external_React_default().createElement(RecoverySheet, {
    id: id,
    brand: brand
  }), document.body.appendChild(root));
}
})();

/******/ })()
;