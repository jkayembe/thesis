/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 876:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/action-menu/ActionMenu.scss ***!
  \*************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body{padding:0px !important;margin:0px !important;width:100%}.action-menu .action-menu-wrapper{border:0;width:230px}.action-menu .action-menu-wrapper .action-menu-header{padding:0.75rem;background-color:transparent}.action-menu .action-menu-wrapper .action-menu-header .nav-right a{color:inherit}.action-menu .action-menu-wrapper .action-menu-header .nav-right a:last-child{margin-left:1rem}.action-menu .action-menu-wrapper .action-menu-content p{font-size:0.75rem;margin-bottom:0}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item{position:relative;border:0;padding:0.75rem;cursor:pointer}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title{margin-bottom:0.25rem}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title img{width:24px;height:24px;margin-right:0.375rem}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title strong{font-weight:700}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item ::after{content:' ';position:absolute;bottom:1px;left:50%;width:90%;height:1px;background-color:#f0f0f0;transform:translateX(-50%)}.action-menu .action-menu-wrapper .action-menu-footer{border-top:0;padding:0.75rem;background-color:transparent}
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
/*!***************************************************************!*\
  !*** ./src/components/action-menu/actionMenu.js + 12 modules ***!
  \***************************************************************/

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
const constants_SECURE_COLORS = (/* unused pure expression or super */ null && (['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536']));
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
const common_namespaceObject = {};
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
  const color = background.bgColor ? common.securityColors[background.bgColor].bg : background.color;
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
  svgTemplate.getElementById('template').setAttribute('fill', common.securityColors[bgColor].icon);
  const svgBgIconUrl = `img/security/${bgIcon}.svg`;
  const {
    documentElement: svgBgIcon
  } = await parseSVG(svgBgIconUrl);
  const paths = svgBgIcon.getElementsByTagName('path');
  for (const path of paths) {
    path.style.fill = common.securityColors[bgColor].icon;
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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./src/components/action-menu/components/ActionMenuBase.js
/**
 * Copyright (C) 2017-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['action_menu_activate_current_tab', 'action_menu_dashboard_description', 'action_menu_dashboard_label', 'action_menu_file_encryption_description', 'action_menu_file_encryption_label', 'action_menu_keyring_description', 'action_menu_keyring_label', 'action_menu_primary_menu_aria_label', 'action_menu_reload_extension_scripts', 'action_menu_review_security_logs_description', 'action_menu_review_security_logs_label']);
function ActionMenuBase(props) {
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-content list-group list-group-flush",
    role: "menu",
    "aria-label": map.action_menu_primary_menu_aria_label
  }, /*#__PURE__*/external_React_default().createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "dashboard",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, /*#__PURE__*/external_React_default().createElement("img", {
    src: "../../img/Mailvelope/dashboard.svg",
    role: "presentation"
  }), " ", /*#__PURE__*/external_React_default().createElement("strong", null, map.action_menu_dashboard_label)), /*#__PURE__*/external_React_default().createElement("p", null, map.action_menu_dashboard_description)), /*#__PURE__*/external_React_default().createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "manage-keys",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, /*#__PURE__*/external_React_default().createElement("img", {
    src: "../../img/Mailvelope/keyring.svg",
    role: "presentation"
  }), " ", /*#__PURE__*/external_React_default().createElement("strong", null, map.action_menu_keyring_label)), /*#__PURE__*/external_React_default().createElement("p", null, map.action_menu_keyring_description)), /*#__PURE__*/external_React_default().createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "encrypt-file",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, /*#__PURE__*/external_React_default().createElement("img", {
    src: "../../img/Mailvelope/encryption.svg",
    role: "presentation"
  }), " ", /*#__PURE__*/external_React_default().createElement("strong", null, map.action_menu_file_encryption_label)), /*#__PURE__*/external_React_default().createElement("p", null, map.action_menu_file_encryption_description)), /*#__PURE__*/external_React_default().createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "security-logs",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, /*#__PURE__*/external_React_default().createElement("img", {
    src: "../../img/Mailvelope/clipboard.svg",
    role: "presentation"
  }), " ", /*#__PURE__*/external_React_default().createElement("strong", null, map.action_menu_review_security_logs_label)), /*#__PURE__*/external_React_default().createElement("p", null, map.action_menu_review_security_logs_description))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-footer card-footer"
  }, /*#__PURE__*/external_React_default().createElement("button", {
    type: "button",
    onClick: props.onMenuItemClickHandler,
    id: "reload-extension",
    className: "btn btn-sm btn-secondary btn-block"
  }, /*#__PURE__*/external_React_default().createElement("span", {
    className: "icon icon-refresh",
    "aria-hidden": "true"
  }), " ", map.action_menu_reload_extension_scripts), /*#__PURE__*/external_React_default().createElement("button", {
    type: "button",
    onClick: props.onMenuItemClickHandler,
    id: "activate-tab",
    className: "btn btn-sm btn-secondary btn-block"
  }, /*#__PURE__*/external_React_default().createElement("span", {
    className: "icon icon-add",
    "aria-hidden": "true"
  }), " ", map.action_menu_activate_current_tab)));
}
ActionMenuBase.propTypes = {
  onMenuItemClickHandler: (prop_types_default()).func
};
;// ./src/components/util/Trans.js


function Trans(props) {
  return /*#__PURE__*/external_React_default().createElement("span", null, props.id.split(/(<\d>.*?<\/\d>)/).map(value => {
    const tags = value.match(/(<(\d)>(.*?)<\/\d>)/);
    if (tags) {
      const comp = props.components[tags[2]];
      return /*#__PURE__*/external_React_default().cloneElement(comp, null, comp.props.children || tags[3]);
    } else {
      return value;
    }
  }));
}
Trans.propTypes = {
  id: (prop_types_default()).string,
  components: (prop_types_default()).array
};
;// ./src/components/action-menu/components/ActionMenuSetup.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





register(['action_menu_configure_mailvelope', 'action_menu_setup_menu_aria_label', 'action_menu_setup_start_label']);
function ActionMenuSetup(props) {
  return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-content card-body",
    role: "menu",
    "aria-label": map.action_menu_setup_menu_aria_label
  }, /*#__PURE__*/external_React_default().createElement("img", {
    src: "../../../img/Mailvelope/seal.svg",
    className: "mx-auto d-block mb-3",
    alt: "..."
  }), /*#__PURE__*/external_React_default().createElement("p", null, /*#__PURE__*/external_React_default().createElement(Trans, {
    id: map.action_menu_configure_mailvelope,
    components: [/*#__PURE__*/external_React_default().createElement("strong", {
      key: "0"
    })]
  }))), /*#__PURE__*/external_React_default().createElement("div", {
    className: "action-menu-footer card-footer text-center pt-1 pb-4"
  }, /*#__PURE__*/external_React_default().createElement("button", {
    type: "button",
    className: "btn btn-primary",
    id: "lets-start",
    role: "button",
    onClick: props.onMenuItemClickHandler
  }, map.action_menu_setup_start_label)));
}
ActionMenuSetup.propTypes = {
  onMenuItemClickHandler: (prop_types_default()).func
};
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/action-menu/ActionMenu.scss
var ActionMenu = __webpack_require__(876);
;// ./src/components/action-menu/ActionMenu.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ActionMenu/* default */.A, options);




       /* harmony default export */ const action_menu_ActionMenu = (ActionMenu/* default */.A && ActionMenu/* default */.A.locals ? ActionMenu/* default */.A.locals : undefined);

;// ./src/components/action-menu/components/ActionMenuWrapper.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







register(['action_menu_help', 'action_menu_all_options']);
mapToLocal();
class ActionMenuWrapper extends external_React_namespaceObject.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSetupDone: true
    };
    this.port = EventHandler.connect('menu-59edbbeb9affc4004a916276');
  }
  componentDidMount() {
    this.init();
  }
  async init() {
    const {
      isSetupDone
    } = await this.port.send('get-is-setup-done');
    this.setState({
      isSetupDone
    });
  }
  onMenuItemClick(e) {
    const itemClicked = e.currentTarget;
    if (itemClicked === '' || itemClicked.id === '') {
      return false;
    }
    this.port.emit('browser-action', {
      action: itemClicked.id
    });
    this.hide();
  }
  hide() {
    window.close();
  }
  render() {
    let actionMenuContent = null;
    if (!this.state.isSetupDone) {
      actionMenuContent = /*#__PURE__*/external_React_default().createElement(ActionMenuSetup, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    } else {
      actionMenuContent = /*#__PURE__*/external_React_default().createElement(ActionMenuBase, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    }
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: `action-menu ${this.state.isSetupDone ? '' : 'action-menu-setup'}`
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "action-menu-wrapper card"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "action-menu-header card-header d-flex"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "../../img/Mailvelope/logo.svg",
      width: "111",
      height: "20",
      className: "d-inline-block mr-auto",
      alt: ""
    }), /*#__PURE__*/external_React_default().createElement("div", {
      className: "nav-right"
    }, this.state.isSetupDone && /*#__PURE__*/external_React_default().createElement("a", {
      id: "options",
      href: "#",
      onClick: e => this.onMenuItemClick(e),
      tabIndex: "0",
      title: map.action_menu_all_options
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-settings",
      "aria-hidden": "true"
    })), /*#__PURE__*/external_React_default().createElement("a", {
      href: "https://www.mailvelope.com/faq",
      target: "_blank",
      rel: "noreferrer noopener",
      tabIndex: "0",
      title: map.action_menu_help
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-help",
      "aria-hidden": "true"
    })))), actionMenuContent));
  }
}
/* harmony default export */ const components_ActionMenuWrapper = (ActionMenuWrapper);
;// ./src/components/action-menu/actionMenu.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




document.addEventListener('DOMContentLoaded', init);
function init() {
  const root = document.createElement('div');
  external_ReactDOM_default().render(/*#__PURE__*/external_React_default().createElement(components_ActionMenuWrapper, null), document.body.appendChild(root));
}
})();

/******/ })()
;