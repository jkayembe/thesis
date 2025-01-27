/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 904:
/*!**********************************************!*\
  !*** ./src/content-scripts/encryptFrame.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.m-encrypt-frame[id^="eFrame"] {
  position: absolute;
  top: 5px;
  display: flex;
  visibility: hidden;
  opacity: 0;
  z-index: 3;
  transition: visibility 0.3s 0s, opacity 0.3s ease-out;
}

.m-encrypt-frame.m-show[id^="eFrame"] {
  visibility: visible;
  opacity: 1;
}

.m-encrypt-frame {
  margin-left: 10px;
}

.m-encrypt-container {
  font-family: CeraPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  padding: 6px;
  margin-left: auto;
}

.m-encrypt-container.active {
  box-shadow: 0 0 0 3px rgba(227,0,72,0.25);
}

.m-encrypt-container .m-encrypt-button:hover span,
.m-encrypt-container.active .m-encrypt-button span {
  max-width: 250px;
  margin-left: 0.5rem;
  transition: max-width 0.25s ease-in-out, margin 0s;
}

.m-encrypt-container a {
  color: inherit !important;
  text-decoration: none !important;
  cursor: pointer;
}

.m-encrypt-container .m-encrypt-button {
  display: flex;
  align-items: center;
}

.m-encrypt-container .m-encrypt-button span {
  max-width: 0px;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 0;
  margin-right: 0;
  font-size: 14px;
  font-weight: 500;
  transition: margin 0s 0.25s, max-width 0.25s ease-in-out;
}

.m-encrypt-container button.m-encrypt-close {
  padding: 6px;
  border-radius: 100%;
  border: 0;
  background-color: transparent;
  margin-left: 0.5rem;
}

.m-encrypt-container button.m-encrypt-close:focus {
  outline: none;
}

.m-encrypt-container button.m-encrypt-close:hover {
  background-color: #ebebeb;
}

.m-encrypt-container button.m-encrypt-close:active {
  background-color: #dbdbdb;
}

.m-encrypt-container .m-encrypt-close .icon-close {
  font-family: inherit !important;
  display: flex;
  align-items: center;
}

.m-encrypt-container .m-encrypt-close .icon-close::before {
  display: inline-block;
  height: 14px;
  width: 14px;
  content: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 6.1534l3.2028-3.4164a.75.75 0 0 1 1.0944 1.026L8.028 7.25l3.269 3.487a.75.75 0 1 1-1.0943 1.026L7 8.3466 3.7972 11.763a.75.75 0 0 1-1.0944-1.026L5.972 7.25 2.7028 3.763a.75.75 0 0 1 1.0944-1.026L7 6.1534z' fill='%23757575' fill-rule='evenodd'/%3E%3C/svg%3E");
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ 136:
/*!**********************************************!*\
  !*** ./src/content-scripts/extractFrame.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.m-extract-frame {
  transition: visibility 0.3s 0s, opacity 0.3s ease-out;
  background-color: rgba(255,255,255,.92);
  background-image: linear-gradient(to bottom, rgba(255,255,255,.25), rgba(255,255,255,.92) 50%, rgba(242,242,242,.92) 50%, rgba(255,255,255,.25));
  background-size: 100% 48px;
  background-position: center center;
  background-repeat: no-repeat;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  position: absolute;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  overflow: hidden;
}

.m-extract-frame.m-large {
  background-position: center 150px;
}

.m-extract-frame::before {
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  content: url("data:image/svg+xml,%3Csvg width='62px' height='64px' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23FF004F'/%3E%3Cpath d='M15.995 28.667c-3.39 0-6.57-1.311-8.955-3.691-2.387-2.383-3.704-5.567-3.707-8.966a12.628 12.628 0 0 1 .592-3.836l.007-.028c.087-.306.194-.6.318-.875.022-.055.047-.116.073-.176.11-.251.545-1.115 1.588-1.77.943-.593 1.77-.644 1.866-.648.228-.027.464-.04.699-.04 1.07 0 2.015.423 2.662 1.194.492.587.76 1.307.78 2.097a4.321 4.321 0 0 1 1.959-.481c1.07 0 2.016.424 2.662 1.194.039.046.076.094.113.142.859-.852 1.993-1.336 3.14-1.336 1.07 0 2.015.424 2.662 1.194.656.782.913 1.81.722 2.893l-.672 3.807c-.09.513.017.982.301 1.321.274.327.696.507 1.187.507 1.482 0 2.003-1.08 2.345-2.246.293-1.033.428-2.107.401-3.191a10.675 10.675 0 0 0-3.219-7.387 10.683 10.683 0 0 0-7.445-3.086H16c-2.14 0-4.209.63-5.982 1.825a.97.97 0 0 1-.544.167.958.958 0 0 1-.729-.335L8.74 6.91a.96.96 0 0 1 .196-1.418 12.585 12.585 0 0 1 7.317-2.156 12.604 12.604 0 0 1 8.65 3.67 12.601 12.601 0 0 1 3.758 8.612 12.664 12.664 0 0 1-.41 3.606h.001l-.043.158-.019.063a12.57 12.57 0 0 1-.4 1.187c-.079.187-.518 1.143-1.599 1.822-.935.588-1.673.618-1.76.62a4.89 4.89 0 0 1-.439.02c-1.07 0-2.016-.424-2.662-1.194-.656-.783-.913-1.81-.722-2.893l.672-3.808c.09-.512-.017-.982-.301-1.32-.274-.327-.696-.507-1.187-.507-1.166 0-2.325.99-2.531 2.162l-.735 3.998a.528.528 0 0 1-.52.432h-.883a.527.527 0 0 1-.52-.623l.762-4.144c.09-.51-.017-.98-.3-1.319-.275-.326-.697-.506-1.188-.506-1.165 0-2.324.99-2.531 2.162l-.734 3.998a.528.528 0 0 1-.52.432H9.21a.526.526 0 0 1-.52-.623l.764-4.159.512-2.799c.09-.509-.018-.976-.302-1.315-.274-.327-.696-.507-1.187-.507-1.21 0-1.989.465-2.454 1.463a10.662 10.662 0 0 0-.755 4.408c.108 2.737 1.266 5.313 3.26 7.252 1.995 1.939 4.603 3.024 7.343 3.057H16c2.266 0 4.435-.7 6.272-2.026a.942.942 0 0 1 .555-.18.962.962 0 0 1 .565 1.743 12.571 12.571 0 0 1-7.397 2.389' fill='%23FFF2F6'/%3E%3C/g%3E%3C/svg%3E");
}

.m-extract-frame > p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
  margin-top: 70px;
  color: #dbdbdb;
  font-family: CeraPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: color .2s ease-out;
}

.m-extract-frame.m-large::before,
.m-extract-frame.m-large > p {
  top: 174px;
}

.m-extract-frame.m-cursor > p {
  color: #404040;
}

.m-extract-frame.m-decrypt, .m-extract-frame.m-import {
  top: 0;
}

.m-extract-frame.m-verify {
  bottom: 0;
}

.m-extract-frame.m-cursor {
  cursor: pointer;
}

.m-extract-frame .m-frame-dialog {
  position: absolute;
}

.m-extract-frame.m-show {
  visibility: visible;
  opacity: 1;
}

.m-frame-close {
  float: right;
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  position: relative;
  right: 3px;
  z-index: 1;
  text-decoration: none !important;
  font-family: arial, sans-serif;
}

.m-frame-close:hover {
  color: #000000;
  opacity: 0.4;
  cursor: pointer !important;
  text-decoration: none !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ 58:
/*!**************************************************!*\
  !*** ./src/content-scripts/gmailIntegration.css ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.mv-editor-btn-container {
  display: flex;
}

.mv-editor-btn {
  cursor: pointer;
  line-height: 0;
}

.mv-editor-btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
  transition: box-shadow .08s linear,min-width .15s cubic-bezier(0.4,0.0,0.2,1);
}

.mv-editor-btn:hover .mv-editor-btn-content,
.mv-editor-btn:focus .mv-editor-btn-content {
  box-shadow: 0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149);
  background-color: #fafafb;
}
.mv-editor-btn:active .mv-editor-btn-content {
  background-color: #f1f3f4;
}

.mv-reply-btn-top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 0 0 20px;
  border: none;
  outline: none;
  cursor: pointer;
}

.mv-reply-btn-top::before {
  content: '';
  display: block;
  opacity: 0;
  position: absolute;
  transition-duration: .15s;
  transition-timing-function: cubic-bezier(0.4,0.0,0.2,1);
  bottom: -10px;
  left: -10px;
  right: -10px;
  top: -10px;
  background-color: rgba(32,33,36,0.059);
  border-radius: 50%;
  box-sizing: border-box;
  transform: scale(0);
  transition-property: transform,opacity;
}

.mv-reply-btn-top:hover::before {
  opacity: 1;
  transform: scale(1);
}

.mv-reply-btn-top::after {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  height: 40px;
  width: 40px;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23ff004f'/%3E%3Cpath fill='%23fff' d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z'/%3E%3C/svg%3E");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
}

.mv-menu-item {
  position: relative;
  padding: 6px 48px 6px 48px;
  cursor: pointer;
}

.mv-menu-item:hover {
  background-color: #eee;
}

.mv-menu-item::before {
  content: '';
  position: absolute;
  display: inline-block;
  position: absolute;
  height: 20px;
  width: 20px;
  margin-right: 12px;
  left: 16px;
  vertical-align: middle;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
}

.mv-menu-item-reply::before,
.mv-action-btn-bottom-reply::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23ff004f'/%3E%3Cpath fill='%23fff' d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z'/%3E%3C/svg%3E");
}

.mv-menu-item-replyAll::before,
.mv-action-btn-bottom-replyAll::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='Ebene_1' viewBox='0 0 24 24'%3E%3Cstyle id='style2'%3E%3C/style%3E%3Ccircle id='circle4-6' cx='12' cy='12' r='12' fill='%23ff004f'/%3E%3Cpath id='circle4' fill='%23fff' d='M7 4.5L.0273 11.4727a12 12 0 0 0-.0039.0507L7 18.5v-3l-4-4 4-4v-3zm6 0l-7 7 7 7v-4.0996c4.084 0 7.1548 1.0884 9.5098 3.3867a12 12 0 0 0 .6113-1.2988C21.6109 12.6357 18.5778 9.2968 13 8.5v-4z'/%3E%3C/svg%3E");
}

.mv-menu-item-forward::before,
.mv-action-btn-bottom-forward::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23ff004f'/%3E%3Cpath fill='%23fff' d='M12 8V4l8 8-8 8v-4H4V8h8z'/%3E%3C/svg%3E");
}


.mv-action-btns-bottom {
  align-items: center;
  display: flex;
  height: auto;
  line-height: 20px;
  padding: 0;
}

.mv-action-btn-bottom {
  align-items: center;
  border: none;
  display: inline-flex;
  justify-content: center;
  outline: none;
  position: relative;
  z-index: 0;
  font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  font-size: .875rem;
  letter-spacing: .25px;
  background: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #5f6368;
  cursor: pointer;
  font-weight: 500;
  height: 36px;
  outline: none;
  padding: 0 16px;
  box-shadow: inset 0 0 0 1px #dadce0;
  min-width: 104px;
  padding-left: 12px;
  user-select: none;
  margin-right: 12px;
  text-decoration: none;
}

.mv-action-btn-bottom:hover {
  background-color: rgba(32,33,36,0.059);
}

.mv-action-btn-bottom:active {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);
  background-color: rgba(32,33,36,0.059);
}

.mv-action-btn-bottom:focus {
  background-color: rgba(32,33,36,0.122);
  box-shadow: inset 0 0 0 1px #bdc1c6;
}

.mv-action-btn-bottom::before {
  content: '';
  height: 20px;
  display: block;
  margin-right: 8px;
  width: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ 314:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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



module.exports = function (i) {
  return i[1];
};

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
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************************!*\
  !*** ./src/content-scripts/main.js + 24 modules ***!
  \**************************************************/

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PQ: () => (/* binding */ currentProvider),
  Am: () => (/* binding */ getMessageType),
  Hc: () => (/* binding */ host),
  lg: () => (/* binding */ isAttached),
  N_: () => (/* binding */ main_prefs)
});

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
const MAIN_KEYRING_ID = `localhost${KEYRING_DELIMITER}mailvelope`;
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
  const promises = array.map(async item => await asyncFilterFn(item) && item);
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
  return String(text)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;')
  .replace(/\//g, '&#x2F;');
}

function decodeHTML(html) {
  return String(html)
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#039;/g, "\'")
  .replace(/&#x2F;/g, '\/');
}

function parseHTML(html) {
  const htmlDoc = new DOMParser().parseFromString(html, 'text/html');
  return htmlDoc.body.childNodes;
}

function decodeQuotedPrint(armored) {
  return armored
  .replace(/=3D=3D\s*$/m, '==')
  .replace(/=3D\s*$/m, '=')
  .replace(/=3D(\S{4})\s*$/m, '=$1');
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
  msg = msg.replace(/:.*\n(?!.*:)/, '$&\n');  // insert new line after last armor header
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
  str = (`${str}===`).slice(0, str.length + (str.length % 4));
  return str.replace(/-/g, '+').replace(/_/g, '/');
}

function dataURL2str(dataURL) {
  const base64 = dataURL2base64(dataURL);
  return atob(base64);
}

function dataURL2base64(dataURL) {
  return dataURL.split(';base64,')[1];
}

function generateSecurityBackground({width, height, scaling = 1, angle = 0, colorId = 0}) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = SECURE_COLORS[colorId];
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
}

async function getSecurityBackground(port) {
  const background = await port.send('get-security-background');
  const image = background.bgIcon ? (await generateSecurityBGSVG(background)).outerHTML : generateSecurityBackground(background);
  const color = background.bgColor ? common.securityColors[background.bgColor].bg : background.color;
  return {image: `url(data:image/svg+xml;base64,${btoa(image)})`, color};
}

async function generateSecurityBGSVG({bgIcon, bgColor}) {
  const svgTemplateUrl = 'img/security/template.svg';
  const {documentElement: svgTemplate} = await parseSVG(svgTemplateUrl);
  const tileWidth = 640;
  svgTemplate.setAttribute('width', tileWidth);
  svgTemplate.getElementById('template').setAttribute('fill', common.securityColors[bgColor].icon);
  const svgBgIconUrl = `img/security/${bgIcon}.svg`;
  const {documentElement: svgBgIcon} = await parseSVG(svgBgIconUrl);
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
  return new RegExp(
    `^${matchPattern2RegExString(matchPattern)}$`
  );
}

function matchPattern2RegExString(matchPattern) {
  return matchPattern.replace(/\./g, '\\.').replace(/^\*\\\./, '(\\w+(-\\w+)*\\.)*');
}

function mapError(error = {}) {
  return {message: error.message || 'Unexpected error.', code: error.code  || 'INTERNAL_ERROR'};
}

class PromiseQueue {
  constructor() {
    this.queue = [];
  }

  push(thisArg, method, args) {
    const {promise, resolve, reject} = Promise.withResolvers();
    this.queue.push({promise, resolve, reject, thisArg, method, args});
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
      nextEntry.thisArg[nextEntry.method].apply(nextEntry.thisArg, nextEntry.args)
      .then(result => {
        nextEntry.resolve(result);
      })
      .catch(error => {
        nextEntry.reject(error);
      })
      .then(() => {
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

const brands =  navigator && navigator.userAgentData && navigator.userAgentData.brands;
const brand = !brands ? {other: true} : {
  chrome: brands.some(({brand}) => brand === 'Google Chrome'),
  edge: brands.some(({brand}) => brand === 'Microsoft Edge'),
  chromium: brands.some(({brand}) => brand === 'Chromium')
};

function parseViewName(viewName) {
  const pair = viewName.split('-');
  if (pair.length !== 2) {
    throw new Error('Invalid view name.');
  }
  return {type: pair[0], id: pair[1]};
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
    const eventHandler = new EventHandler(chrome.runtime.connect({name: sender}));
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
    const port = chrome.runtime.connect({name: this.#portName});
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
    this.#reply?.forEach(({reject}) => reject({message: 'The Mailvelope service worker was shutdown after 30s of inactivity. Please try again.', code: 'INTERNAL_ERROR'}));
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
        Promise.resolve()
        .then(() => handler.call(this, options))
        .then(result => this.emit('_reply', {result, _reply: options._reply}))
        .catch(error => this.emit('_reply', {error: mapError(error), _reply: options._reply}));
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
      this.#reply.set(options._reply, {resolve, reject});
      this._port.postMessage(options);
    });
  }
}

;// ./src/content-scripts/clientAPITypeCheck.js
/**
 * Copyright (C) 2014-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



const dataTypes = {
  identifier: 'string',
  event: 'string',
  _reply: 'string',
  selector: 'string',
  armored: 'string',
  options: 'object',
  recipients: 'array',
  emailAddr: 'string',
  email: 'string',
  dataURL: 'string',
  revision: 'number',
  fingerprint: 'string',
  syncHandlerObj: 'object',
  editorId: 'string',
  generatorId: 'string',
  popupId: 'string',
  syncHandlerId: 'string',
  syncType: 'string',
  syncData: 'object',
  error: 'object',
  restoreId: 'string',
  restoreBackup: 'string',
  id: 'string',
  confirmRequired: 'boolean',
  signature: 'string',
  formHtml: 'string',
  headers: 'object'
};

const optionsTypes = {
  quota: 'number',
  predefinedText: 'string',
  quotedMail: 'string',
  signMsg: 'boolean',
  quotedMailIndent: 'boolean',
  quotedMailHeader: 'string',
  userIds: 'array',
  keySize: 'number',
  initialSetup: 'boolean',
  senderAddress: 'string',
  restorePassword: 'boolean',
  email: 'string',
  fullName: 'string',
  keepAttachments: 'boolean',
  armoredDraft: 'string',
  showDefaultKey: 'boolean'
};

function checkTypes(data) {
  enforceTypeWhitelist(data, dataTypes);
  if (data.options && typeof data.options === 'object') {
    enforceTypeWhitelist(data.options, optionsTypes);
  }
}

function enforceTypeWhitelist(data, whitelist) {
  const parameters = Object.keys(data) || [];
  for (let i = 0; i < parameters.length; i++) {
    const parameter = parameters[i];
    const dataType = whitelist[parameter];
    const value = data[parameter];
    if (dataType === undefined) {
      console.log(`Mailvelope client-API type checker: parameter ${parameter} not accepted.`);
      delete data[parameter];
      continue;
    }
    if (value === undefined || value === null) {
      continue;
    }
    let wrong = false;
    switch (dataType) {
      case 'array':
        if (!Array.isArray(value)) {
          wrong = true;
        }
        break;
      default:
        if (typeof value !== dataType) {
          wrong = true;
        }
    }
    if (wrong) {
      throw new MvError(`Type mismatch: ${parameter} should be of type ${dataType}.`, 'TYPE_MISMATCH');
    }
  }
}

;// ./src/content-scripts/decryptContainer.js
/**
 * Copyright (C) 2014-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class DecryptContainer {
  constructor(selector, keyringId, options) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.options = options;
    this.id = getUUID();
    this.port = EventHandler.connect(`decryptCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.container = null;
    this.armored = null;
  }

  create(armored) {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      this.armored = armored;
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      const url = chrome.runtime.getURL(`components/decrypt-message/decryptMessage.html?id=${this.id}&embedded=true`);
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.parent.appendChild(this.container);
    });
  }

  registerEventListener() {
    this.port.on('destroy', this.onDestroy);
    this.port.on('error-message', this.onError);
    this.port.on('get-armored', this.onArmored);
    this.port.on('decrypt-done', () => this.createPromise.resolve({}));
  }

  onDestroy() {
    this.parent.removeChild(this.container);
    this.port.disconnect();
  }

  onError({error}) {
    if (error.code) {
      // error with error code is not handled as an exception
      this.createPromise.resolve({error});
    } else {
      this.createPromise.reject(error);
    }
  }

  onArmored() {
    this.port.emit('set-armored', {
      data: this.armored,
      keyringId: this.keyringId,
      options: this.options
    });
  }
}

;// ./src/content-scripts/editorContainer.js
/**
 * Copyright (C) 2014-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






class EditorContainer {
  constructor(selector, keyringId, options) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.options = options;
    this.id = getUUID();
    this.port = EventHandler.connect(`editorCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.container = null;
  }

  create() {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      let quota = '';
      if (this.options.quota) {
        quota = `&quota=${this.options.quota}`;
      }
      const url = chrome.runtime.getURL(`components/editor/editor.html?id=${this.id}${quota}&embedded=true`);
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.parent.appendChild(this.container);
    });
  }

  registerEventListener() {
    this.port.on('editor-ready', this.onEditorReady);
    this.port.on('destroy', this.onDestroy);
    this.port.on('error-message', this.onError);
    this.port.on('encrypted-message', this.onEncryptedMessage);
  }

  onEditorReady() {
    const error = this.options && this.processOptions();
    if (error) {
      this.createPromise.reject(error);
    }
    this.createPromise.resolve(this.id);
  }

  onDestroy() {
    this.parent.removeChild(this.container);
    this.port.disconnect();
  }

  onError({error}) {
    if (this.encryptPromise) {
      this.encryptPromise.reject(error);
      this.encryptPromise = null;
    } else if (this.createDraftPromise) {
      this.createDraftPromise.reject(error);
      this.createDraftPromise = null;
    }
  }

  onEncryptedMessage({message}) {
    if (this.encryptPromise) {
      this.encryptPromise.resolve(message);
      this.encryptPromise = null;
    } else if (this.createDraftPromise) {
      this.createDraftPromise.resolve(message);
      this.createDraftPromise = null;
    }
  }

  encrypt(recipients) {
    return new Promise((resolve, reject) => {
      this.checkInProgress();
      this.encryptPromise = {resolve, reject};
      this.port.emit('editor-container-encrypt', {
        keyringId: this.keyringId,
        recipients
      });
    });
  }

  createDraft() {
    return new Promise((resolve, reject) => {
      this.checkInProgress();
      this.createDraftPromise = {resolve, reject};
      this.port.emit('editor-container-create-draft', {keyringId: this.keyringId});
    });
  }

  checkInProgress() {
    if (this.encryptPromise || this.createDraftPromise) {
      throw new MvError('Encryption already in progress.', 'ENCRYPT_IN_PROGRESS');
    }
  }

  processOptions() {
    if (this.options.quotedMail && getMessageType(this.options.quotedMail) !== PGP_MESSAGE ||
        this.options.armoredDraft && getMessageType(this.options.armoredDraft) !== PGP_MESSAGE) {
      return new MvError('quotedMail or armoredDraft parameter need to be a PGP message.', 'WRONG_ARMOR_TYPE');
    }
    if (this.options.armoredDraft && (this.options.predefinedText || this.options.quotedMail ||
                                      this.options.quotedMailIndent || this.options.quotedMailHeader)) {
      return new MvError('armoredDraft parameter cannot be combined with parameters: predefinedText, quotedMail, quotedMailIndent, quotedMailHeader.', 'INVALID_OPTIONS');
    }
    this.port.emit('editor-options', {
      keyringId: this.keyringId,
      options: this.options
    });
  }
}

;// ./src/content-scripts/encryptedFormContainer.js
/**
 * Copyright (C) 2018 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class EncryptedFormContainer {
  constructor(selector, html, signature) {
    this.baseValidate(selector, html, signature);
    this.selector = selector;
    this.id = getUUID();
    this.port = EventHandler.connect(`encryptedFormCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.signature = signature;
    this.container = null;
    this.html = html;
  }

  create() {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      const url = chrome.runtime.getURL(`components/encrypted-form/encryptedForm.html?id=${this.id}`);
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.setAttribute('style', 'overflow:hidden');
      this.container.style.width = '100%';
      this.container.style.height = '150px';
      this.parent.appendChild(this.container);
    });
  }

  processFormDefinition() {
    this.port.emit('encrypted-form-definition', {
      html: this.html,
      signature: this.signature
    });
  }

  onResize({height}) {
    this.container.style.height = `${height}px`;
  }

  onDestroy() {
    this.parent.removeChild(this.container);
    this.port.disconnect();
    this.createPromise.resolve(this.id);
  }

  onError(error) {
    error.code = 'INVALID_FORM';
    if (this.container) {
      this.parent.removeChild(this.container);
      this.port.disconnect();
    }
    this.createPromise.reject(error);
  }

  registerEventListener() {
    this.port.on('encrypted-form-ready', this.processFormDefinition);
    this.port.on('encrypted-form-data', ({armoredData}) => this.createPromise.resolve({armoredData}));
    this.port.on('encrypted-form-resize', this.onResize);
    this.port.on('destroy', this.onDestroy);
    this.port.on('error-message', this.onError);
  }

  baseValidate(selector, html, signature) {
    if (!selector) {
      throw new MvError('The pgp encrypted form selector cannot be empty.', 'NO_FORM');
    }
    if (!html) {
      throw new MvError('The pgp encrypted form html cannot be empty.', 'NO_HTML');
    }
    if (!signature) {
      throw new MvError('The pgp encrypted form signature cannot be empty.', 'NO_SIGNATURE');
    }
    return true;
  }
}

;// ./src/content-scripts/appContainer.js
/**
 * Copyright (C) 2015-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class AppContainer {
  constructor(selector, keyringId, options = {}) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.email = '';
    if (options.email) {
      this.email = `&email=${encodeURIComponent(options.email)}`;
    }
    this.fullName = '';
    if (options.fullName) {
      this.fullName = `&fname=${encodeURIComponent(options.fullName)}`;
    }
    this.hasPrivateKey = options.hasPrivateKey;
    this.id = getUUID();
    this.port = EventHandler.connect(`appCont-${this.id}`, this);
    this.parent = null;
    this.container = null;
  }

  create() {
    return new Promise(resolve => {
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      const options = `id=${this.id}&krid=${encodeURIComponent(this.keyringId)}${this.email}${this.fullName}#/keyring/${this.hasPrivateKey ? 'display' : 'setup'}`;
      const url = chrome.runtime.getURL(`app/app.html?${options}`);
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('style', 'width: 100%; height: 100%; overflow-x: none; overflow-y: auto');
      this.container.addEventListener('load', () => resolve(this.id));
      this.parent.appendChild(this.container);
    });
  }
}

;// ./src/content-scripts/keyGenContainer.js
/**
 * Copyright (C) 2015-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




class KeyGenContainer {
  /**
   * @param {CssSelector} selector - target container
   * @param {string} keyringId - the keyring to use for this operation
   * @param {object} options
   * @constructor
   */
  constructor(selector, keyringId, options) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.options = options;
    this.id = getUUID();
    this.port = EventHandler.connect(`keyGenCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.container = null;
  }

  /**
   * Create an iframe
   */
  create() {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      const url = chrome.runtime.getURL(`components/generate-key/genKey.html?id=${this.id}`);
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.parent.appendChild(this.container);
    });
  }

  registerEventListener() {
    this.port.on('generate-done', this.generateDone);
    this.port.on('dialog-done', () => this.createPromise.resolve(this.id));
  }

  /**
   * Generate a key pair and check if the inputs are correct
   * @param {boolean} confirmRequired - generated key only valid after confirm
   */
  generate(confirmRequired) {
    return new Promise((resolve, reject) => {
      this.generatePromise = {resolve, reject};
      this.options.confirmRequired = confirmRequired;
      this.port.emit('generate-key', {
        keyringId: this.keyringId,
        options: this.options
      });
    });
  }

  generateDone({error, publicKey}) {
    if (error) {
      this.generatePromise.reject(error);
    } else {
      this.generatePromise.resolve(publicKey);
    }
  }

  confirm() {
    this.port.emit('generate-confirm');
  }

  reject() {
    this.port.emit('generate-reject');
  }
}

;// ./src/content-scripts/keyBackupContainer.js
/**
 * Copyright (C) 2015-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





class KeyBackupContainer {
  /**
   * @param {CssSelector} selector - target container
   * @param {string} keyringId - the keyring to use for this operation
   * @param {object} options
   * @constructor
   */
  constructor(selector, keyringId, options) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.options = options;
    this.id = getUUID();
    this.port = EventHandler.connect(`keyBackupCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.container = null;
    this.host = host;
  }

  /**
   * Create an iframe
   */
  create() {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      const url = chrome.runtime.getURL(`components/key-backup/backupKey.html?id=${this.id}`);
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      this.port.emit('set-keybackup-window-props', {
        host: host,
        keyringId: this.keyringId,
        initialSetup: (this.options.initialSetup === undefined) ? true : this.options.initialSetup
      });
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.parent.appendChild(this.container);
    });
  }

  registerEventListener() {
    this.port.on('popup-isready', this.onPopupReady);
    this.port.on('dialog-done', () => this.createPromise.resolve(this.id));
  }

  onPopupReady({error}) {
    if (this.popupReadyPromise) {
      error ? this.popupReadyPromise.reject(error) : this.popupReadyPromise.resolve();
    }
  }

  keyBackupDone() {
    return new Promise((resolve, reject) => {
      this.popupReadyPromise = {resolve, reject};
    });
  }
}

;// ./src/content-scripts/restoreBackupContainer.js
/**
 * Copyright (C) 2015-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




/**
 *
 * @param {CssSelector} selector - target container
 * @param {string} keyringId - the keyring to use for this operation
 * @param {object} options
 * @constructor
 */
class RestoreBackupContainer {
  constructor(selector, keyringId, options) {
    this.selector = selector;
    this.keyringId = keyringId;
    this.options = options;
    this.id = getUUID();
    this.port = EventHandler.connect(`restoreBackupCont-${this.id}`, this);
    this.registerEventListener();
    this.parent = null;
    this.container = null;
  }

  /**
   * Create an iframe
   */
  create() {
    return new Promise((resolve, reject) => {
      this.createPromise = {resolve, reject};
      const url = chrome.runtime.getURL(`components/restore-backup/backupRestore.html?id=${this.id}`);
      this.parent = document.querySelector(this.selector);
      this.container = document.createElement('iframe');
      this.port.emit('set-init-data', {
        data: {
          keyringId: this.keyringId
        }
      });
      this.container.setAttribute('src', url);
      this.container.setAttribute('frameBorder', 0);
      this.container.setAttribute('scrolling', 'no');
      this.container.style.width = '100%';
      this.container.style.height = '100%';
      this.parent.appendChild(this.container);
    });
  }

  registerEventListener() {
    this.port.on('restore-backup-done', this.onRestoreBackupDone);
    this.port.on('dialog-done', this.onDialogDone);
  }

  onRestoreBackupDone({error}) {
    if (this.restorePromise) {
      error ? this.restorePromise.reject(error) : this.restorePromise.resolve();
    }
  }

  onDialogDone() {
    this.port.emit('set-init-data', {data: this.options});
    this.createPromise.resolve(this.id);
  }

  restoreBackupReady() {
    return new Promise((resolve, reject) => {
      this.restorePromise = {resolve, reject};
    });
  }
}

;// ./src/content-scripts/syncHandler.js
/**
 * Copyright (C) 2015-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





class SyncHandler {
  /**
   * @param {string} keyringId - the keyring to use for this operation
   * @constructor
   */
  constructor(keyringId) {
    this.keyringId = keyringId;
    this.id = getUUID();
    this.port = EventHandler.connect(`syncHandler-${this.id}`, this);
    this.registerEventListener();
  }

  onConnect() {
    this.port.emit('init', {keyringId: this.keyringId});
  }

  syncDone(data) {
    this.port.emit('sync-done', data);
  }

  registerEventListener() {
    this.port.on('sync-event', data => clientPort.emit('sync-event', data));
    this.port.onConnect.addListener(() => this.onConnect());
    // workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=655932
    window.addEventListener('beforeunload', () => {
      this.port.disconnect();
    });
  }
}

;// ./src/content-scripts/clientAPI.js
/**
 * Copyright (C) 2014-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */















const containers = new Map();

// must be a singelton
let syncHandler = null;
let controllerPort = null;
let clientPort = null;

function init() {
  const apiTag = document.getElementById('mailvelope-api');
  if (apiTag) {
    if (apiTag.dataset.version !== main_prefs.version) {
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent('mailvelope-disconnect', {detail: {version: main_prefs.version}}));
      }, 1);
    }
    return;
  }
  if (!window.mailvelope) {
    const element = document.createElement('script');
    element.id = 'mailvelope-api';
    element.src = chrome.runtime.getURL('client-API/mailvelope-client-api.js');
    element.dataset.version = main_prefs.version;
    document.head.append(element);
  }
  controllerPort = EventHandler.connect(`api-${getUUID()}`);
  const port = {
    onMessage: {
      addListener(listener) {
        window.addEventListener('message', event => {
          if (event.origin !== window.location.origin ||
              event.data.mvelo_extension ||
              !event.data.mvelo_client) {
            return;
          }
          const {mvelo_client, ...data} = event.data;
          try {
            checkTypes(data);
            if (data.identifier) {
              if (data.identifier.includes(KEYRING_DELIMITER)) {
                throw new MvError('Identifier invalid.', 'INVALID_IDENTIFIER');
              }
              data.keyringId = host + KEYRING_DELIMITER + data.identifier;
            } else {
              data.keyringId = MAIN_KEYRING_ID;
            }
            listener(data);
          } catch (e) {
            if (data._reply) {
              port.postMessage({...data, event: '_reply', error: mapError(e)});
            } else {
              throw e;
            }
          }
        });
      }
    },
    postMessage(options) {
      options.mvelo_extension = true;
      window.postMessage(options, window.location.origin);
    }
  };
  clientPort = new EventHandler(port);
  registerClientEventHandler();
}

function registerClientEventHandler() {
  clientPort.on('get-version', getVersion);
  clientPort.on('get-keyring', getKeyring);
  clientPort.on('create-keyring', createKeyring);
  clientPort.on('display-container', displayContainer);
  clientPort.on('editor-container', editorContainer);
  clientPort.on('settings-container', settingsContainer);
  clientPort.on('open-settings', openSettings);
  clientPort.on('key-gen-container', keyGenContainer);
  clientPort.on('key-backup-container', keyBackupContainer);
  clientPort.on('restore-backup-container', restoreBackupContainer);
  clientPort.on('restore-backup-isready', restoreBackupIsReady);
  clientPort.on('keybackup-popup-isready', keyBackupPopupIsReady);
  clientPort.on('generator-generate', generatorGenerate);
  clientPort.on('generator-generate-confirm', generatorConfirm);
  clientPort.on('generator-generate-reject', generatorReject);
  clientPort.on('has-private-key', hasPrivateKey);
  clientPort.on('editor-encrypt', editorEncrypt);
  clientPort.on('editor-create-draft', editorCreateDraft);
  clientPort.on('query-valid-key', validKeyForAddress);
  clientPort.on('export-own-pub-key', exportOwnPublicKey);
  clientPort.on('additional-headers-for-outgoing', additionalHeadersForOutgoing);
  clientPort.on('import-pub-key', importPublicKey);
  clientPort.on('process-autocrypt-header', processAutocryptHeader);
  clientPort.on('set-logo', setLogo);
  clientPort.on('add-sync-handler', addSyncHandler);
  clientPort.on('sync-handler-done', syncHandlerDone);
  clientPort.on('encrypted-form-container', encryptedFormContainer);
}

function getVersion() {
  const [version] = main_prefs.version.match(/^\d{1,2}\.\d{1,2}\.\d{1,2}/);
  return version;
}

function getKeyring({keyringId}) {
  return controllerPort.send('get-keyring', {keyringId});
}

function createKeyring({keyringId}) {
  return controllerPort.send('create-keyring', {keyringId});
}

function displayContainer({selector, armored, keyringId, options = {}}) {
  let container;
  switch (getMessageType(armored)) {
    case PGP_MESSAGE:
      container = new DecryptContainer(selector, keyringId, options);
      break;
    case PGP_SIGNATURE:
      throw new MvError('PGP signatures not supported.', 'WRONG_ARMORED_TYPE');
    case PGP_PUBLIC_KEY:
      throw new MvError('PGP keys not supported.', 'WRONG_ARMORED_TYPE');
    default:
      throw new MvError('No valid armored block found.', 'WRONG_ARMORED_TYPE');
  }
  return container.create(armored);
}

function editorContainer({selector, keyringId, options = {}}) {
  if (options.quotedMailIndent === undefined && !options.armoredDraft) {
    options.quotedMailIndent = true;
  }
  if (options.quota) {
    // kilobyte -> byte
    options.quota = parseInt(options.quota) * 1024;
  }
  const container = new EditorContainer(selector, keyringId, options);
  containers.set(container.id, container);
  return container.create();
}

async function settingsContainer({selector, keyringId, options = {}}) {
  options.hasPrivateKey = await controllerPort.send('has-private-key', {keyringId});
  const container = new AppContainer(selector, keyringId, options);
  containers.set(container.id, container);
  return container.create();
}

function openSettings({keyringId, options}) {
  return controllerPort.send('open-settings', {keyringId, options});
}

function keyGenContainer({selector, keyringId, options = {}}) {
  options.keySize = options.keySize || 2048;
  const container = new KeyGenContainer(selector, keyringId, options);
  containers.set(container.id, container);
  return container.create();
}

function keyBackupContainer({selector, keyringId, options = {}}) {
  const container = new KeyBackupContainer(selector, keyringId, options);
  containers.set(container.id, container);
  return container.create();
}

function restoreBackupContainer({selector, keyringId, options = {}}) {
  const container = new RestoreBackupContainer(selector, keyringId, options);
  containers.set(container.id, container);
  return container.create();
}

function restoreBackupIsReady({restoreId}) {
  return containers.get(restoreId).restoreBackupReady();
}

function keyBackupPopupIsReady({popupId}) {
  return containers.get(popupId).keyBackupDone();
}

function generatorGenerate({generatorId, confirmRequired}) {
  return containers.get(generatorId).generate(confirmRequired);
}

function generatorConfirm({generatorId}) {
  containers.get(generatorId).confirm();
}

function generatorReject({generatorId}) {
  containers.get(generatorId).reject();
}

function hasPrivateKey({keyringId, fingerprint, email}) {
  return controllerPort.send('has-private-key', {keyringId, fingerprint, email});
}

function editorEncrypt({editorId, recipients}) {
  return containers.get(editorId).encrypt(recipients);
}

function editorCreateDraft({editorId}) {
  return containers.get(editorId).createDraft();
}

function validKeyForAddress({keyringId, recipients}) {
  return controllerPort.send('query-valid-key', {keyringId, recipients});
}

function exportOwnPublicKey({keyringId, emailAddr}) {
  return controllerPort.send('export-own-pub-key', {keyringId, emailAddr});
}

function additionalHeadersForOutgoing({keyringId, headers}) {
  return controllerPort.send('additional-headers-for-outgoing', {keyringId, headers});
}

function importPublicKey({keyringId, armored}) {
  switch (getMessageType(armored)) {
    case PGP_PUBLIC_KEY:
      // ok
      break;
    case PGP_PRIVATE_KEY:
      throw new MvError('No import of private PGP keys allowed.', 'WRONG_ARMORED_TYPE');
    default:
      throw new MvError('No valid armored block found.', 'WRONG_ARMORED_TYPE');
  }
  return controllerPort.send('import-pub-key', {keyringId, armored});
}

function processAutocryptHeader({keyringId, headers}) {
  return controllerPort.send('process-autocrypt-header', {keyringId, headers});
}

function setLogo({keyringId, dataURL, revision}) {
  if (!/^data:image\/png;base64,/.test(dataURL)) {
    throw new MvError('Data URL must start with "data:image/png;base64,".', 'LOGO_INVALID');
  }
  if (dataURL.length > 15 * 1024) {
    throw new MvError('Data URL string size exceeds 15KB limit.', 'LOGO_INVALID');
  }
  return controllerPort.send('set-logo', {keyringId, dataURL, revision});
}

function addSyncHandler({keyringId}) {
  syncHandler = syncHandler || new SyncHandler(keyringId);
  containers.set(syncHandler.id, syncHandler);
  return syncHandler.id;
}

function syncHandlerDone(data) {
  const container = containers.get(data.syncHandlerId);
  container.syncDone(data);
}

function encryptedFormContainer({selector, formHtml, signature}) {
  const container = new EncryptedFormContainer(selector, formHtml, signature);
  containers.set(container.id, container);
  return container.create();
}

;// ./src/modules/closure-library/closure/goog/emailaddress.js
// Copyright 2010 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Provides functions to parse and manipulate email addresses.
 * Modified from the original source code to include the goog.string dependencies
 *
 */

const goog = {};

goog.string = {};

/**
 * Determines whether a string contains a substring.
 * @param {string} str The string to search.
 * @param {string} subString The substring to search for.
 * @return {boolean} Whether `str` contains `subString`.
 */
goog.string.contains = function(str, subString) {
  return str.indexOf(subString) != -1;
};

/**
 * Converts multiple whitespace chars (spaces, non-breaking-spaces, new lines
 * and tabs) to a single space, and strips leading and trailing whitespace.
 * @param {string} str Input string.
 * @return {string} A copy of `str` with collapsed whitespace.
 */
goog.string.collapseWhitespace = function(str) {
  // Since IE doesn't include non-breaking-space (0xa0) in their \s character
  // class (as required by section 7.2 of the ECMAScript spec), we explicitly
  // include it in the regexp to enforce consistent cross-browser behavior.
  return str.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
};

/**
 * Strip quote characters around a string.  The second argument is a string of
 * characters to treat as quotes.  This can be a single character or a string of
 * multiple character and in that case each of those are treated as possible
 * quote characters. For example:
 *
 * <pre>
 * goog.string.stripQuotes('"abc"', '"`') --> 'abc'
 * goog.string.stripQuotes('`abc`', '"`') --> 'abc'
 * </pre>
 *
 * @param {string} str The string to strip.
 * @param {string} quoteChars The quote characters to strip.
 * @return {string} A copy of `str` without the quotes.
 */
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for (var i = 0; i < length; i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if (str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1);
    }
  }
  return str;
};

/**
 * Checks if a string is empty or contains only whitespaces.
 * @param {string} str The string to check.
 * @return {boolean} Whether `str` is empty or whitespace only.
 */
goog.string.isEmptyOrWhitespace = function(str) {
  // testing length == 0 first is actually slower in all browsers (about the
  // same in Opera).
  // Since IE doesn't include non-breaking-space (0xa0) in their \s character
  // class (as required by section 7.2 of the ECMAScript spec), we explicitly
  // include it in the regexp to enforce consistent cross-browser behavior.
  return /^[\s\xa0]*$/.test(str);
};

goog.format = {};

/**
 * Formats an email address string for display, and allows for extraction of
 * the individual components of the address.
 * @param {string=} opt_address The email address.
 * @param {string=} opt_name The name associated with the email address.
 * @constructor
 */
goog.format.EmailAddress = function(opt_address, opt_name) {
  /**
   * The name or personal string associated with the address.
   * @type {string}
   * @private
   */
  this.name_ = opt_name || '';

  /**
   * The email address.
   * @type {string}
   * @protected
   */
  this.address = opt_address || '';
};


/**
 * Match string for opening tokens.
 * @type {string}
 * @private
 */
goog.format.EmailAddress.OPENERS_ = '"<([';


/**
 * Match string for closing tokens.
 * @type {string}
 * @private
 */
goog.format.EmailAddress.CLOSERS_ = '">)]';


/**
 * Match string for characters that require display names to be quoted and are
 * not address separators.
 * @type {string}
 * @const
 * @package
 */
goog.format.EmailAddress.SPECIAL_CHARS = '()<>@:\\\".[]';


/**
 * Match string for address separators.
 * @type {string}
 * @const
 * @private
 */
goog.format.EmailAddress.ADDRESS_SEPARATORS_ = ',;';


/**
 * Match string for characters that, when in a display name, require it to be
 * quoted.
 * @type {string}
 * @const
 * @private
 */
goog.format.EmailAddress.CHARS_REQUIRE_QUOTES_ =
    goog.format.EmailAddress.SPECIAL_CHARS +
    goog.format.EmailAddress.ADDRESS_SEPARATORS_;


/**
 * A RegExp to match all double quotes.  Used in cleanAddress().
 * @type {RegExp}
 * @private
 */
goog.format.EmailAddress.ALL_DOUBLE_QUOTES_ = /\"/g;


/**
 * A RegExp to match escaped double quotes.  Used in parse().
 * @type {RegExp}
 * @private
 */
goog.format.EmailAddress.ESCAPED_DOUBLE_QUOTES_ = /\\\"/g;


/**
 * A RegExp to match all backslashes.  Used in cleanAddress().
 * @type {RegExp}
 * @private
 */
goog.format.EmailAddress.ALL_BACKSLASHES_ = /\\/g;


/**
 * A RegExp to match escaped backslashes.  Used in parse().
 * @type {RegExp}
 * @private
 */
goog.format.EmailAddress.ESCAPED_BACKSLASHES_ = /\\\\/g;


/**
 * A string representing the RegExp for the local part of an email address.
 * @private {string}
 */
goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ =
    '[+a-zA-Z0-9_.!#$%&\'*\\/=?^`{|}~-]+';


/**
 * A string representing the RegExp for the domain part of an email address.
 * @private {string}
 */
goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ =
    '([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}';


/**
 * A RegExp to match the local part of an email address.
 * @private {!RegExp}
 */
goog.format.EmailAddress.LOCAL_PART_ =
    new RegExp('^' + goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ + '$');


/**
 * A RegExp to match the domain part of an email address.
 * @private {!RegExp}
 */
goog.format.EmailAddress.DOMAIN_PART_ =
    new RegExp('^' + goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ + '$');


/**
 * A RegExp to match an email address.
 * @private {!RegExp}
 */
goog.format.EmailAddress.EMAIL_ADDRESS_ = new RegExp(
    '^' + goog.format.EmailAddress.LOCAL_PART_REGEXP_STR_ + '@' +
    goog.format.EmailAddress.DOMAIN_PART_REGEXP_STR_ + '$');


/**
 * Get the name associated with the email address.
 * @return {string} The name or personal portion of the address.
 * @final
 */
goog.format.EmailAddress.prototype.getName = function() {
  return this.name_;
};


/**
 * Get the email address.
 * @return {string} The email address.
 * @final
 */
goog.format.EmailAddress.prototype.getAddress = function() {
  return this.address;
};


/**
 * Set the name associated with the email address.
 * @param {string} name The name to associate.
 * @final
 */
goog.format.EmailAddress.prototype.setName = function(name) {
  this.name_ = name;
};


/**
 * Set the email address.
 * @param {string} address The email address.
 * @final
 */
goog.format.EmailAddress.prototype.setAddress = function(address) {
  this.address = address;
};


/**
 * Return the address in a standard format:
 *  - remove extra spaces.
 *  - Surround name with quotes if it contains special characters.
 * @return {string} The cleaned address.
 * @override
 */
goog.format.EmailAddress.prototype.toString = function() {
  return this.toStringInternal(goog.format.EmailAddress.CHARS_REQUIRE_QUOTES_);
};


/**
 * Check if a display name requires quoting.
 * @param {string} name The display name
 * @param {string} specialChars String that contains the characters that require
 *  the display name to be quoted. This may change based in whereas we are
 *  in EAI context or not.
 * @return {boolean}
 * @private
 */
goog.format.EmailAddress.isQuoteNeeded_ = function(name, specialChars) {
  for (var i = 0; i < specialChars.length; i++) {
    var specialChar = specialChars[i];
    if (goog.string.contains(name, specialChar)) {
      return true;
    }
  }
  return false;
};


/**
 * Return the address in a standard format:
 *  - remove extra spaces.
 *  - Surround name with quotes if it contains special characters.
 * @param {string} specialChars String that contains the characters that require
 *  the display name to be quoted.
 * @return {string} The cleaned address.
 * @protected
 */
goog.format.EmailAddress.prototype.toStringInternal = function(specialChars) {
  var name = this.getName();

  // We intentionally remove double quotes in the name because escaping
  // them to \" looks ugly.
  name = name.replace(goog.format.EmailAddress.ALL_DOUBLE_QUOTES_, '');

  // If the name has special characters, we need to quote it and escape \'s.
  if (goog.format.EmailAddress.isQuoteNeeded_(name, specialChars)) {
    name = '"' +
        name.replace(goog.format.EmailAddress.ALL_BACKSLASHES_, '\\\\') + '"';
  }

  if (name == '') {
    return this.address;
  }
  if (this.address == '') {
    return name;
  }
  return name + ' <' + this.address + '>';
};


/**
 * Determines if the current object is a valid email address.
 * @return {boolean} Whether the email address is valid.
 */
goog.format.EmailAddress.prototype.isValid = function() {
  return goog.format.EmailAddress.isValidAddrSpec(this.address);
};


/**
 * Checks if the provided string is a valid email address. Supports both
 * simple email addresses (address specs) and addresses that contain display
 * names.
 * @param {string} str The email address to check.
 * @return {boolean} Whether the provided string is a valid address.
 */
goog.format.EmailAddress.isValidAddress = function(str) {
  return goog.format.EmailAddress.parse(str).isValid();
};


/**
 * Checks if the provided string is a valid address spec (local@domain.com).
 * @param {string} str The email address to check.
 * @return {boolean} Whether the provided string is a valid address spec.
 */
goog.format.EmailAddress.isValidAddrSpec = function(str) {
  // This is a fairly naive implementation, but it covers 99% of use cases.
  // For more details, see http://en.wikipedia.org/wiki/Email_address#Syntax
  return goog.format.EmailAddress.EMAIL_ADDRESS_.test(str);
};


/**
 * Checks if the provided string is a valid local part (part before the '@') of
 * an email address.
 * @param {string} str The local part to check.
 * @return {boolean} Whether the provided string is a valid local part.
 */
goog.format.EmailAddress.isValidLocalPartSpec = function(str) {
  return goog.format.EmailAddress.LOCAL_PART_.test(str);
};


/**
 * Checks if the provided string is a valid domain part (part after the '@') of
 * an email address.
 * @param {string} str The domain part to check.
 * @return {boolean} Whether the provided string is a valid domain part.
 */
goog.format.EmailAddress.isValidDomainPartSpec = function(str) {
  return goog.format.EmailAddress.DOMAIN_PART_.test(str);
};


/**
 * Parses an email address of the form "name" &lt;address&gt; ("name" is
 * optional) into an email address.
 * @param {string} addr The address string.
 * @param {function(new: goog.format.EmailAddress, string=,string=)} ctor
 *     EmailAddress constructor to instantiate the output address.
 * @return {!goog.format.EmailAddress} The parsed address.
 * @protected
 */
goog.format.EmailAddress.parseInternal = function(addr, ctor) {
  // TODO(ecattell): Strip bidi markers.
  var name = '';
  var address = '';
  for (var i = 0; i < addr.length;) {
    var token = goog.format.EmailAddress.getToken_(addr, i);
    if (token.charAt(0) == '<' && token.indexOf('>') != -1) {
      var end = token.indexOf('>');
      address = token.substring(1, end);
    } else if (address == '') {
      name += token;
    }
    i += token.length;
  }

  // Check if it's a simple email address of the form "jlim@google.com".
  if (address == '' && name.indexOf('@') != -1) {
    address = name;
    name = '';
  }

  name = goog.string.collapseWhitespace(name);
  name = goog.string.stripQuotes(name, '\'');
  name = goog.string.stripQuotes(name, '"');
  // Replace escaped quotes and slashes.
  name = name.replace(goog.format.EmailAddress.ESCAPED_DOUBLE_QUOTES_, '"');
  name = name.replace(goog.format.EmailAddress.ESCAPED_BACKSLASHES_, '\\');
  address = goog.string.collapseWhitespace(address);
  return new ctor(address, name);
};


/**
 * Parses an email address of the form "name" &lt;address&gt; into
 * an email address.
 * @param {string} addr The address string.
 * @return {!goog.format.EmailAddress} The parsed address.
 */
goog.format.EmailAddress.parse = function(addr) {
  return goog.format.EmailAddress.parseInternal(addr, goog.format.EmailAddress);
};


/**
 * Parse a string containing email addresses of the form
 * "name" &lt;address&gt; into an array of email addresses.
 * @param {string} str The address list.
 * @param {function(string)} parser The parser to employ.
 * @param {function(string):boolean} separatorChecker Accepts a character and
 *    returns whether it should be considered an address separator.
 * @return {!Array<!goog.format.EmailAddress>} The parsed emails.
 * @protected
 */
goog.format.EmailAddress.parseListInternal = function(
    str, parser, separatorChecker) {
  var result = [];
  var email = '';
  var token;

  // Remove non-UNIX-style newlines that would otherwise cause getToken_ to
  // choke. Remove multiple consecutive whitespace characters for the same
  // reason.
  str = goog.string.collapseWhitespace(str);

  for (var i = 0; i < str.length;) {
    token = goog.format.EmailAddress.getToken_(str, i);
    if (separatorChecker(token) || (token == ' ' && parser(email).isValid())) {
      if (!goog.string.isEmptyOrWhitespace(email)) {
        result.push(parser(email));
      }
      email = '';
      i++;
      continue;
    }
    email += token;
    i += token.length;
  }

  // Add the final token.
  if (!goog.string.isEmptyOrWhitespace(email)) {
    result.push(parser(email));
  }
  return result;
};


/**
 * Parses a string containing email addresses of the form
 * "name" &lt;address&gt; into an array of email addresses.
 * @param {string} str The address list.
 * @return {!Array<!goog.format.EmailAddress>} The parsed emails.
 */
goog.format.EmailAddress.parseList = function(str) {
  return goog.format.EmailAddress.parseListInternal(
      str, goog.format.EmailAddress.parse,
      goog.format.EmailAddress.isAddressSeparator);
};


/**
 * Get the next token from a position in an address string.
 * @param {string} str the string.
 * @param {number} pos the position.
 * @return {string} the token.
 * @private
 */
goog.format.EmailAddress.getToken_ = function(str, pos) {
  var ch = str.charAt(pos);
  var p = goog.format.EmailAddress.OPENERS_.indexOf(ch);
  if (p == -1) {
    return ch;
  }
  if (goog.format.EmailAddress.isEscapedDlQuote_(str, pos)) {
    // If an opener is an escaped quote we do not treat it as a real opener
    // and keep accumulating the token.
    return ch;
  }
  var closerChar = goog.format.EmailAddress.CLOSERS_.charAt(p);
  var endPos = str.indexOf(closerChar, pos + 1);

  // If the closer is a quote we go forward skipping escaped quotes until we
  // hit the real closing one.
  while (endPos >= 0 &&
         goog.format.EmailAddress.isEscapedDlQuote_(str, endPos)) {
    endPos = str.indexOf(closerChar, endPos + 1);
  }
  var token = (endPos >= 0) ? str.substring(pos, endPos + 1) : ch;
  return token;
};


/**
 * Checks if the character in the current position is an escaped double quote
 * ( \" ).
 * @param {string} str the string.
 * @param {number} pos the position.
 * @return {boolean} true if the char is escaped double quote.
 * @private
 */
goog.format.EmailAddress.isEscapedDlQuote_ = function(str, pos) {
  if (str.charAt(pos) != '"') {
    return false;
  }
  var slashCount = 0;
  for (var idx = pos - 1; idx >= 0 && str.charAt(idx) == '\\'; idx--) {
    slashCount++;
  }
  return ((slashCount % 2) != 0);
};


/**
 * @param {string} ch The character to test.
 * @return {boolean} Whether the provided character is an address separator.
 */
goog.format.EmailAddress.isAddressSeparator = function(ch) {
  return goog.string.contains(goog.format.EmailAddress.ADDRESS_SEPARATORS_, ch);
};

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

// EXTERNAL MODULE: ./src/content-scripts/gmailIntegration.css
var gmailIntegration = __webpack_require__(58);
// EXTERNAL MODULE: ./src/content-scripts/extractFrame.css
var extractFrame = __webpack_require__(136);
;// ./src/content-scripts/extractFrame.js
/**
 * Copyright (C) 2013-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */








class ExtractFrame {
  constructor() {
    this.id = getUUID();
    // range element with armored message
    this.pgpRange = null;
    // HTMLElement that contains complete ASCII Armored Message
    this.pgpElement = null;
    this.domIntersectionObserver = null;
    this.eFrame = null;
    this.shadowRootElem = null;
    this.port = null;
    this.currentProvider = currentProvider;
    this.clickHandler = this.clickHandler.bind(this);
    this.setFrameDim = this.setFrameDim.bind(this);
  }

  attachTo(pgpRange) {
    this.init(pgpRange);
    this.establishConnection();
    this.renderFrame();
    this.registerEventListener();
  }

  init(pgpRange) {
    this.pgpRange = pgpRange;
    // check if wrapper element already exists
    if (this.pgpRange.commonAncestorContainer.classList.contains('m-extract-wrapper')) {
      this.pgpElement = this.pgpRange.commonAncestorContainer;
    } else {
      // create container element
      this.pgpElement = document.createElement('div');
      this.pgpElement.classList.add('m-extract-wrapper');
      this.pgpElement.style.display = 'inline-block';
      this.pgpElement.style.position = 'relative';
      this.pgpElement.append(this.pgpRange.extractContents());
      this.pgpRange.insertNode(this.pgpElement);
      this.pgpRange.selectNodeContents(this.pgpElement);
    }
    // set status to attached
    this.pgpElement.dataset[FRAME_STATUS] = FRAME_ATTACHED;
  }

  establishConnection() {
    this.port = EventHandler.connect(this.ctrlName, this);
  }

  renderFrame() {
    this.eFrame = document.createElement('div');
    this.eFrame.id = `eFrame-${this.id}`;
    const closeButton = '<a class="m-frame-close">×</a>';
    this.eFrame.append(...parseHTML(closeButton));
    this.eFrame.classList.add('m-extract-frame', 'm-cursor');
    this.pgpElement.append(this.eFrame);
    if (this.pgpRange.getBoundingClientRect().height > LARGE_FRAME) {
      this.eFrame.classList.add('m-large');
    }
    this.eFrame.addEventListener('click', this.clickHandler);
    this.eFrame.querySelector('.m-frame-close').addEventListener('click', this.closeFrame.bind(this, false, false));
    this.shadowRootElem = document.createElement('div');
    this.pgpElement.append(this.shadowRootElem);
    const eFrameShadow = this.shadowRootElem.attachShadow({mode: 'open'});
    const encryptContainerStyle = document.createElement('style');
    encryptContainerStyle.textContent = extractFrame/* default */.A;
    eFrameShadow.append(encryptContainerStyle);
    eFrameShadow.append(this.eFrame);
    window.addEventListener('resize', this.setFrameDim);
    this.domIntersectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0  && entry.boundingClientRect.height > 72) {
          this.onShow();
        }
      }
    }, {root: null});
    this.domIntersectionObserver.observe(this.pgpElement);
  }

  registerEventListener() {
    document.addEventListener('mailvelope-observe', this.setFrameDim);
    this.port.on('destroy', () => this.closeFrame(true, true));
    this.port.onUninstall.addListener(() => this.closeFrame(true, false));
  }

  clickHandler(callback, ev) {
    this.eFrame.removeEventListener('click', this.clickHandler);
    this.toggleIcon(callback);
    this.eFrame.classList.remove('m-cursor');
    if (ev) {
      ev.stopPropagation();
    }
  }

  onShow() {
    this.setFrameDim();
    this.eFrame.classList.remove('m-show');
    this.eFrame.classList.add('m-show');
  }

  closeFrame(reset, disconnect, ev) {
    this.eFrame.classList.remove('m-show');
    this.domIntersectionObserver.disconnect();
    window.removeEventListener('resize', this.setFrameDim);
    document.removeEventListener('mailvelope-observe', this.setFrameDim);
    window.setTimeout(() => {
      this.shadowRootElem.remove();
    }, 300);
    if (reset === true) {
      this.pgpElement.parentNode?.prepend(this.pgpRange.extractContents());
      this.pgpElement.remove();
    } else {
      this.pgpElement.dataset[FRAME_STATUS] = FRAME_DETACHED;
    }
    if (disconnect === true) {
      this.port.disconnect();
    }
    if (ev instanceof Event) {
      ev.stopPropagation();
    }
  }

  toggleIcon(callback) {
    if (callback) {
      this.eFrame.addEventListener('transitionend', callback, {once: true});
    }
    this.eFrame.classList.toggle('m-open');
  }

  setFrameDim() {
    const {width, height} = this.pgpRange.getBoundingClientRect();
    if (!width || !height) {
      return;
    }
    this.eFrame.style.width = `${width}px`;
    this.eFrame.style.height = `${height}px`;
  }

  getArmoredMessage() {
    let msg;
    if (this.pgpElement.parentElement.tagName.toLowerCase() === 'pre' && !this.pgpElement.querySelectorAll('br').length) {
      msg = this.pgpRange.toString();
    } else {
      const pgpSelection = this.pgpElement.ownerDocument.getSelection();
      // required in order to make Selection.addRange work
      pgpSelection.removeAllRanges();
      pgpSelection.addRange(this.pgpRange);
      msg = pgpSelection.toString();
      pgpSelection.removeAllRanges();
    }
    return msg;
  }

  getPGPMessage() {
    let msg = this.getArmoredMessage();
    // additional filtering to get well defined PGP message format
    msg = normalizeArmored(msg, this.typeRegex);
    return msg;
  }

  getEmailSender() {
    return this.currentProvider.getSender(this.pgpElement);
  }
}

;// ./src/content-scripts/attachmentFrame.js
/**
 * Copyright (C) 2012-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







register([
  'decrypt_att_frame_help_text'
]);

mapToLocal();

class AttachmentFrame extends ExtractFrame {
  constructor() {
    super();
    this.dDialog = null;
    this.dPopup = false;
    this.ctrlName = `aFrameGmail-${this.id}`;
  }

  init(containerElem) {
    this.pgpRange = containerElem;
    // check if wrapper element already exists
    const wrapper = containerElem.querySelector('.m-extract-wrapper');
    if (wrapper) {
      this.pgpElement = wrapper;
    } else {
      // create container element
      this.pgpElement = document.createElement('div');
      this.pgpElement.classList.add('m-extract-wrapper');
    }
    this.pgpElement.style.display = 'inline-block';
    // let the element to take as much as it wants if there is a message text, like in `decryptFrame`
    // but set min height when empty; we then do similar for the height in `setFrameDim()`
    this.pgpElement.style['min-height'] = '400px';
    // set status to attached
    this.pgpElement.dataset[FRAME_STATUS] = FRAME_ATTACHED;
    this.pgpRange.append(this.pgpElement);
  }

  renderFrame() {
    super.renderFrame();
    const para = document.createElement('p');
    para.textContent = map.decrypt_att_frame_help_text;
    this.eFrame.append(para);
    this.eFrame.classList.add('m-decrypt');
    this.onShow();
  }

  registerEventListener() {
    super.registerEventListener();
    this.port.on('dialog-cancel', this.removeDialog);
    this.port.on('get-data', this.onData);
  }

  onData() {
    const {msgId, clipped, armored, plainText, att} = this.currentProvider.integration.getMsgByControllerId(this.id);
    this.port.emit('set-data', {userInfo: this.currentProvider.integration.getUserInfo(), msgId, encAttFileNames: att, armored, plainText, clipped, gmailCtrlId: this.currentProvider.integration.id});
  }

  clickHandler(ev) {
    super.clickHandler(undefined, ev);
    if (main_prefs.security.display_decrypted == DISPLAY_POPUP) {
      this.popupDialog();
    }
  }

  onShow() {
    super.onShow();
    if (main_prefs.security.display_decrypted == DISPLAY_INLINE && !this.dDialog) {
      this.inlineDialog();
    }
  }

  inlineDialog() {
    this.dDialog = document.createElement('iframe');
    this.dDialog.id = `dDialog-${this.id}`;
    this.dDialog.src = chrome.runtime.getURL(`components/decrypt-message/decryptMessage.html?id=${this.id}`);
    this.dDialog.frameBorder = 0;
    this.dDialog.scrolling = 'no';
    this.dDialog.classList.add('m-frame-dialog');
    this.eFrame.append(this.dDialog);
    this.setFrameDim();
    this.dDialog.classList.add('m-show');
  }

  popupDialog() {
    this.port.emit('dframe-display-popup');
    this.dPopup = true;
  }

  removeDialog() {
    if (!this.dPopup) {
      return;
    }
    this.dPopup = false;
    this.eFrame.classList.add('m-cursor');
    this.toggleIcon();
    this.eFrame.addEventListener('click', this.clickHandler);
  }

  closeFrame(reset, disconnect, ev) {
    super.closeFrame(false, disconnect, ev);
    if (reset) {
      this.pgpElement.remove();
    } else {
      this.currentProvider.integration.onCloseFrame(this.id);
      this.pgpElement.style.display = 'none';
    }
  }

  setFrameDim() {
    let {width, height} = this.pgpElement.getBoundingClientRect();
    if (!height) {
      return;
    }
    if (this.dDialog === null) {
      if (!width) { // if no message contents
        width = 500;
      }
      this.eFrame.style.width = `${width}px`;
      this.eFrame.style.height = `${height}px`;
    } else {
      let {width} = this.pgpElement.parentElement.getBoundingClientRect();
      if (!width) {
        return;
      }
      // less 1px border and 2 pixel box-shadow
      width -= 3;
      this.eFrame.style.width = `${width}px`;
      this.eFrame.style.height = `${height}px`;
      // set absolute dims for performance reasons
      this.dDialog.style.width = `${width}px`;
      this.dDialog.style.height = `${height}px`;
    }
  }
}

;// ./src/content-scripts/gmailIntegration.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */








register([
  'encrypt_frame_btn_label',
  'provider_gmail_secure_reply_btn',
  'provider_gmail_secure_replyAll_btn',
  'provider_gmail_secure_forward_btn'
]);

const MSG_BODY_SELECTOR = '.a3s.aXjCH, .a3s.aiL';

class GmailIntegration {
  constructor() {
    this.id = getUUID();
    this.port = null;
    this.editorBtnRoot = null;
    this.editorBtn = null;
    this.selectedMsgs = null;
    this.userInfo = null;
    this.updateElements = this.updateElements.bind(this);
  }

  init() {
    this.establishConnection();
    this.registerEventListener();
    this.attachEditorBtn();
  }

  establishConnection() {
    this.port = EventHandler.connect(`gmailInt-${this.id}`, this);
    this.port.onUninstall.addListener(this.deactivate.bind(this));
  }

  registerEventListener() {
    document.addEventListener('mailvelope-observe', this.updateElements);
    this.port.on('update-message-data', this.onUpdateMessageData);
  }

  getUserInfo() {
    if (this.userInfo) {
      return this.userInfo;
    }
    const titleElem = document.querySelector('title');
    const match = titleElem.innerText.match(/([a-zA-Z0-9._-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+)/gi);
    if (!match) {
      throw new Error('Gmail User Id not found.');
    }
    this.userInfo = {};
    this.userInfo.email = match[0];
    this.userInfo.legacyGsuite = Array.from(document.querySelectorAll('.aiG .aiD span')).some(element => /^1(?:5|7)[\sG]/.test(element.textContent));
    return this.userInfo;
  }

  getMsgId(msgElem) {
    const rawID = msgElem.dataset.messageId;
    return rawID[0] === '#' ? rawID.slice(1) : rawID;
  }

  onUpdateMessageData({msgId, data}) {
    const msg = this.selectedMsgs.get(msgId);
    this.selectedMsgs.set(msgId, {...msg, ...data});
    this.scanMessages();
  }

  getMsgByControllerId(controllerId) {
    if (!this.selectedMsgs) {
      return;
    }
    for (const [, value] of this.selectedMsgs) {
      if (value.controllerId === controllerId) {
        return value;
      }
    }
  }

  attachEditorBtn() {
    const nav = document.querySelector('.aIH') ?? document.querySelector('.aeN');
    if (!nav) {
      return;
    }
    if (nav.querySelector('.aic > .z0')) {
      // standard Gmail compose button
      const editorBtnRoot = nav.querySelector('.aic');
      if (isAttached(editorBtnRoot)) {
        return;
      }
      this.removeEditorButton();
      this.editorBtnRoot = editorBtnRoot;
      const editorBtnContainer = this.editorBtnRoot.querySelector('.z0');
      this.editorBtn = this.createEditorButton();
      editorBtnContainer.append(this.editorBtn);
      this.editorBtnRoot.style.overflow = 'hidden';
      this.editorBtnRoot.dataset[FRAME_STATUS] = FRAME_ATTACHED;
      return;
    }
    const compGmailBtn = nav.querySelector('.Yh.akV');
    if (compGmailBtn) {
      // Meet section active in main menu
      this.editorBtnRoot = compGmailBtn.parentElement;
      if (isAttached(this.editorBtnRoot)) {
        return;
      }
      this.editorBtn = this.createEditorButtonMeet(compGmailBtn);
      this.editorBtnRoot.insertBefore(this.editorBtn, compGmailBtn);
      this.editorBtnRoot.dataset[FRAME_STATUS] = FRAME_ATTACHED;
      return;
    }
  }

  createEditorButton() {
    const editorBtnElem = document.createElement('div');
    editorBtnElem.id = `gmailInt-${this.id}`;
    editorBtnElem.classList.add('mv-editor-btn-container');
    const btnElement = `<a id="editorBtn" class="mv-editor-btn" title="${map.encrypt_frame_btn_label}"><div class="mv-editor-btn-content"><svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FF004F"/><path d="M15.995 28.667c-3.39 0-6.57-1.311-8.955-3.691-2.387-2.383-3.704-5.567-3.707-8.966a12.628 12.628 0 0 1 .592-3.836l.007-.028c.087-.306.194-.6.318-.875.022-.055.047-.116.073-.176.11-.251.545-1.115 1.588-1.77.943-.593 1.77-.644 1.866-.648.228-.027.464-.04.699-.04 1.07 0 2.015.423 2.662 1.194.492.587.76 1.307.78 2.097a4.321 4.321 0 0 1 1.959-.481c1.07 0 2.016.424 2.662 1.194.039.046.076.094.113.142.859-.852 1.993-1.336 3.14-1.336 1.07 0 2.015.424 2.662 1.194.656.782.913 1.81.722 2.893l-.672 3.807c-.09.513.017.982.301 1.321.274.327.696.507 1.187.507 1.482 0 2.003-1.08 2.345-2.246.293-1.033.428-2.107.401-3.191a10.675 10.675 0 0 0-3.219-7.387 10.683 10.683 0 0 0-7.445-3.086H16c-2.14 0-4.209.63-5.982 1.825a.97.97 0 0 1-.544.167.958.958 0 0 1-.729-.335L8.74 6.91a.96.96 0 0 1 .196-1.418 12.585 12.585 0 0 1 7.317-2.156 12.604 12.604 0 0 1 8.65 3.67 12.601 12.601 0 0 1 3.758 8.612 12.664 12.664 0 0 1-.41 3.606h.001l-.043.158-.019.063a12.57 12.57 0 0 1-.4 1.187c-.079.187-.518 1.143-1.599 1.822-.935.588-1.673.618-1.76.62a4.89 4.89 0 0 1-.439.02c-1.07 0-2.016-.424-2.662-1.194-.656-.783-.913-1.81-.722-2.893l.672-3.808c.09-.512-.017-.982-.301-1.32-.274-.327-.696-.507-1.187-.507-1.166 0-2.325.99-2.531 2.162l-.735 3.998a.528.528 0 0 1-.52.432h-.883a.527.527 0 0 1-.52-.623l.762-4.144c.09-.51-.017-.98-.3-1.319-.275-.326-.697-.506-1.188-.506-1.165 0-2.324.99-2.531 2.162l-.734 3.998a.528.528 0 0 1-.52.432H9.21a.526.526 0 0 1-.52-.623l.764-4.159.512-2.799c.09-.509-.018-.976-.302-1.315-.274-.327-.696-.507-1.187-.507-1.21 0-1.989.465-2.454 1.463a10.662 10.662 0 0 0-.755 4.408c.108 2.737 1.266 5.313 3.26 7.252 1.995 1.939 4.603 3.024 7.343 3.057H16c2.266 0 4.435-.7 6.272-2.026a.942.942 0 0 1 .555-.18.962.962 0 0 1 .565 1.743 12.571 12.571 0 0 1-7.397 2.389" fill="#FFF2F6"/></g></svg></div></a>`;
    editorBtnElem.append(...parseHTML(btnElement));
    editorBtnElem.querySelector('#editorBtn').addEventListener('click', this.onEditorButton.bind(this));
    const editorBtn = document.createElement('div');
    editorBtn.style.display = 'inline-flex';
    editorBtn.style.flexShrink = 0;
    editorBtn.style.alignItems = 'center';
    editorBtn.style.justifyContent = 'center';
    editorBtn.style.width = '48px';
    editorBtn.style.height = '48px';
    editorBtn.style.marginLeft = '12px';
    const editorBtnShadow = editorBtn.attachShadow({mode: 'open'});
    const editorBtnStyle = document.createElement('style');
    editorBtnStyle.textContent = gmailIntegration/* default */.A;
    editorBtnShadow.append(editorBtnStyle);
    editorBtnShadow.append(editorBtnElem);
    return editorBtn;
  }

  createEditorButtonMeet(compGmailBtn) {
    const gmailStyle = window.getComputedStyle(compGmailBtn);
    const editorBtn = document.createElement('div');
    editorBtn.style.marginRight = '10px';
    editorBtn.tabIndex = 0;
    editorBtn.type = 'button';
    editorBtn.dataset.tooltip = 'Mailvelope Editor';
    editorBtn.style.backgroundColor = gmailStyle.backgroundColor;
    editorBtn.style.borderRadius = '50%';
    editorBtn.style.boxShadow = gmailStyle.boxShadow;
    editorBtn.style.height = '40px';
    editorBtn.style.minWidth = '40px';
    editorBtn.addEventListener('click', this.onEditorButton.bind(this));
    const editorBtnShadow = editorBtn.attachShadow({mode: 'open'});
    const logo = document.createElement('div');
    logo.style.height = '40px';
    logo.style.width = '40px';
    logo.style.backgroundSize = '20px';
    logo.style.backgroundPosition = 'center';
    logo.style.backgroundRepeat = 'no-repeat';
    logo.style.backgroundImage = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjIgKDgxNjcyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT4xNngxNjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSIxNngxNiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGRkZGRiIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICA8Y2lyY2xlIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGMDA0RiIgY3g9IjgiIGN5PSI4IiByPSI4Ij48L2NpcmNsZT4KICAgICAgICA8cGF0aCBkPSJNNy45OTM3NjgyOSwxNC42NTg3ODA1IEM2LjIxMDQ3NTYxLDE0LjY1ODc4MDUgNC41Mzc1ODk0MywxMy45NjkyMjc2IDMuMjgzMTk5MTksMTIuNzE3MTk1MSBDMi4wMjczMDQ4OCwxMS40NjM1NzcyIDEuMzM0Nzg0NTUsOS43ODg5MDI0NCAxLjMzMzMxODgyLDguMDAxNTA0MDcgQzEuMzMyNzUyMDMsNy4zMTU5NzU2MSAxLjQzNjg5ODM3LDYuNjM4NjU4NTQgMS42NDI4NzM5OCw1Ljk4ODI5MjY4IEwxLjY0NTkyMjc2LDUuOTc3MzE3MDcgQzEuNjkyNzkyNjgsNS44MTIyMzU3NyAxLjc1MDE1MDQxLDUuNjUzNjU4NTQgMS44MTY3MzU3Nyw1LjUwNTE2MjYgQzEuODI4ODkwMjQsNS40NzUyODQ1NSAxLjg0MTI4ODYyLDUuNDQ1NTI4NDYgMS44NTM4MDg5NCw1LjQxNTgxMzAxIEMxLjkxNzE0MjI4LDUuMjcwNjA5NzYgMi4xNjYwODUzNyw0Ljc3NjEzODIxIDIuNzUzODkwMjQsNC40MDY3NDc5NyBDMy4yNTcwMjAzMyw0LjA5MDUyODQ2IDMuNzA1NTU2OTEsNC4wNDc1MjAzMyAzLjgwODQ4Mzc0LDQuMDQxNzA3MzIgQzMuOTMxNDkxODcsNC4wMjc2ODI5MyA0LjA1NzUwODEzLDQuMDIwNTI4NDYgNC4xODMxNTg1NCw0LjAyMDUyODQ2IEM0Ljc5ODg0OTU5LDQuMDIwNTI4NDYgNS4zNDQyNTYxLDQuMjY2NDIyNzYgNS43MTg5MzA4OSw0LjcxMjg4NjE4IEM1LjkyODkzMDg5LDQuOTYzMTMwMDggNi4wNjk3NDM5LDUuMjU5MDY1MDQgNi4xMzM0NDMwOSw1LjU4MDI4NDU1IEM2LjM4OTcwMzI1LDUuNDkxMTc4ODYgNi42NTczNDU1Myw1LjQ0NDcxNTQ1IDYuOTIwMTUwNDEsNS40NDQ3MTU0NSBDNy40Nzg5NzE1NCw1LjQ0NDcxNTQ1IDcuOTc5OTA2NSw1LjY0NzI3NjQyIDguMzQ3ODMzMzMsNi4wMTg1MzY1OSBDOC44MDIxODI5Myw1LjY0NzExMzgyIDkuMzUyMzA0ODgsNS40NDQ3MTU0NSA5LjkxNzQyNjgzLDUuNDQ0NzE1NDUgQzEwLjUzMzE1ODUsNS40NDQ3MTU0NSAxMS4wNzg2MDU3LDUuNjkwNjA5NzYgMTEuNDUzMjgwNSw2LjEzNzA3MzE3IEMxMS44MzMxMTc5LDYuNTg5NzU2MSAxMS45ODE5Nzk3LDcuMTgxMDk3NTYgMTEuODcyNDI2OCw3LjgwMjExMzgyIEwxMS41MzIyMjM2LDkuNzMxNTg1MzcgQzExLjQ5OTEzNDEsOS45MTkyMjc2NCAxMS41MzQzMzc0LDEwLjA4NjIxOTUgMTEuNjMxMjQ4LDEwLjIwMTc0OCBDMTEuNzIzMDM2NiwxMC4zMTExNzg5IDExLjg3MDM1MzcsMTAuMzcxNDIyOCAxMi4wNDYwODU0LDEwLjM3MTQyMjggQzEyLjM4NTkyMjgsMTAuMzcxNDIyOCAxMi43Mzk1NDA3LDEwLjI5NzExMzggMTMuMDAwMjMxNyw5LjQwODgyMTE0IEMxMy4xNDEzNjk5LDguOTEwODEzMDEgMTMuMjA2NjEzOCw4LjM5MTEzODIxIDEzLjE5MzcyNzYsNy44NjYwNTY5MSBDMTMuMTYwNTU2OSw2LjUxNDY3NDggMTIuNjA3MTQyMyw1LjI0NDk1OTM1IDExLjYzNTQ3NTYsNC4yOTA3MzE3MSBDMTAuNjYzODQ5NiwzLjMzNjYyNjAyIDkuMzg0MTM0MTUsMi44MDYwOTc1NiA4LjAzMjA2MDk4LDIuNzk2ODY5OTIgTDcuOTk1Mzk0MzEsMi43OTY3NDc5NyBDNi45NjAxMDk3NiwyLjc5Njc0Nzk3IDUuOTU4OTMwODksMy4xMDIyNzY0MiA1LjEwMDc2MDE2LDMuNjgwMjQzOSBDNC45NzgyODA0OSwzLjc2MjY4MjkzIDQuODM1ODQxNDYsMy44MDYyMTk1MSA0LjY4ODg5MDI0LDMuODA2MjE5NTEgQzQuNDc1MjMxNzEsMy44MDYyMTk1MSA0LjI3MzE1ODU0LDMuNzEzMzczOTggNC4xMzQ0MTg3LDMuNTUxNDYzNDEgQzMuOTk4NDgzNzQsMy4zOTI4MDQ4OCAzLjkzNjU3MzE3LDMuMTgzMzMzMzMgMy45NjQ1LDIuOTc2NzQ3OTcgQzMuOTkyNDI2ODMsMi43NzAzMjUyIDQuMTA3Mzg2MTgsMi41ODUyMDMyNSA0LjI3OTg2NTg1LDIuNDY4ODYxNzkgQzUuMzgwOTYzNDEsMS43MjYwMTYyNiA2LjY2NTk2MzQxLDEuMzMzMzMzMzMgNy45OTYwNDQ3MiwxLjMzMzMzMzMzIEM4LjA0MDE5MTA2LDEuMzMzMzMzMzMgOC4wODQ1NDA2NSwxLjMzMzczOTg0IDguMTI4OTMwODksMS4zMzQ2NzQ4IEM5LjgzOTUsMS4zNjgxNzA3MyAxMS40NTU1NTY5LDIuMDUzNjE3ODkgMTIuNjc5MjU2MSwzLjI2NDc5Njc1IEMxMy45MDI5MTQ2LDQuNDc2MDE2MjYgMTQuNjA0OTA2NSw2LjA4NDk1OTM1IDE0LjY1NTc2MDIsNy43OTUyMDMyNSBDMTQuNjcyMzg2Miw4LjM1NTEyMTk1IDE0LjYxOTA5MzUsOC45MTI2ODI5MyAxNC40OTcyNjQyLDkuNDU1NTY5MTEgTDE0LjUwMzg0OTYsOS40NTczNTc3MiBMMTQuNDUxMDQ0Nyw5LjY1NTQ0NzE1IEwxNC40MTc5MTQ2LDkuNzc1Mjg0NTUgQzE0LjQxNTI3MjQsOS43ODQ2MzQxNSAxNC40MDY5Nzk3LDkuODEyMTU0NDcgMTQuNDA2OTc5Nyw5LjgxMjE1NDQ3IEMxNC4zNDg4OTAyLDEwLjAxNzc2NDIgMTQuMjc3OTU1MywxMC4yMjc3MjM2IDE0LjE5NzE0MjMsMTAuNDMyNjQyMyBDMTQuMTUxNTczMiwxMC41NDIwNzMyIDEzLjkwMDc2MDIsMTEuMDg5MzkwMiAxMy4yOTAwNjkxLDExLjQ3MzIxMTQgQzEyLjc4ODY0NjMsMTEuNzg4MjkyNyAxMi4zNzc1ODk0LDExLjgyMTA1NjkgMTIuMjgyODMzMywxMS44MjQzMDg5IEMxMi4yMDMwMzY2LDExLjgzMTMwMDggMTIuMTIzNDQzMSwxMS44MzQ4Mzc0IDEyLjA0NjA4NTQsMTEuODM0ODM3NCBDMTEuNDMwMzk0MywxMS44MzQ4Mzc0IDEwLjg4NDk0NzIsMTEuNTg4OTQzMSAxMC41MTAyMzE3LDExLjE0MjQ3OTcgQzEwLjEzMDM5NDMsMTAuNjg5NzU2MSA5Ljk4MTQ5MTg3LDEwLjA5ODQxNDYgMTAuMDkxMDg1NCw5LjQ3NzQ3OTY3IEwxMC40MzEyODg2LDcuNTQ4MDA4MTMgQzEwLjQ2NDMzNzQsNy4zNjAyODQ1NSAxMC40MjkxNzQ4LDcuMTkzMjkyNjggMTAuMzMyMjIzNiw3LjA3Nzc2NDIzIEMxMC4yNDA0NzU2LDYuOTY4MzczOTggMTAuMDkzMTU4NSw2LjkwODEzMDA4IDkuOTE3NDI2ODMsNi45MDgxMzAwOCBDOS40NDYxNjY2Nyw2LjkwODEzMDA4IDguOTU5MTM0MTUsNy4zMjU4OTQzMSA4Ljg3NTEwOTc2LDcuODAyMTU0NDcgTDguNTAyNTg5NDMsOS44Mjk4Mzc0IEM4LjQ1Nzk1NTI4LDEwLjA3MjY0MjMgOC4yNDY0MTA1NywxMC4yNDg4NjE4IDcuOTk5NTgxMywxMC4yNDg4NjE4IEw3LjU1MTY1NDQ3LDEwLjI0ODg2MTggQzcuMzk5NDE4NywxMC4yNDg4NjE4IDcuMjU2MTY2NjcsMTAuMTgxNzQ4IDcuMTU4Njg2OTksMTAuMDY0NzU2MSBDNy4wNjEyMDczMiw5Ljk0NzY4MjkzIDcuMDIxMTI2MDIsOS43OTQ3MTU0NSA3LjA0ODY0NjM0LDkuNjQ0OTE4NyBMNy40MzQ0MTg3LDcuNTQ1MzI1MiBDNy40NjcwNjA5OCw3LjM1OTgzNzQgNy40MzE3NzY0Miw3LjE5MzIxMTM4IDcuMzM0ODY1ODUsNy4wNzc2ODI5MyBDNy4yNDMxMTc4OSw2Ljk2ODMzMzMzIDcuMDk1ODAwODEsNi45MDgxMzAwOCA2LjkyMDE1MDQxLDYuOTA4MTMwMDggQzYuNDQ4ODkwMjQsNi45MDgxMzAwOCA1Ljk2MTgxNzA3LDcuMzI1ODk0MzEgNS44Nzc3OTI2OCw3LjgwMjE1NDQ3IEw1LjUwNTY3ODg2LDkuODI5NzU2MSBDNS40NjEwODUzNywxMC4wNzI2NDIzIDUuMjQ5NSwxMC4yNDg4NjE4IDUuMDAyNjMwMDgsMTAuMjQ4ODYxOCBMNC41NTQ3MDMyNSwxMC4yNDg4NjE4IEM0LjQwMjQyNjgzLDEwLjI0ODg2MTggNC4yNTkyMTU0NSwxMC4xODE3NDggNC4xNjE3NzY0MiwxMC4wNjQ3MTU0IEM0LjA2NDMzNzQsOS45NDc4ODYxOCA0LjAyNDIxNTQ1LDkuNzk0OTE4NyA0LjA1MTY1NDQ3LDkuNjQ1MDgxMyBMNC40Mzg0ODM3NCw3LjUzNzY0MjI4IEw0LjY5Nzc1MjAzLDYuMTE5MzQ5NTkgQzQuNzMwMjcyMzYsNS45MzUgNC42OTQ4NjU4NSw1Ljc2OTEwNTY5IDQuNTk3OTE0NjMsNS42NTM1NzcyNCBDNC41MDYxMjYwMiw1LjU0NDE4Njk5IDQuMzU4ODA4OTQsNS40ODM5NDMwOSA0LjE4MzE1ODU0LDUuNDgzOTQzMDkgQzMuNjcxOTc5NjcsNS40ODM5NDMwOSAzLjM1NzI2NDIzLDUuNjY3Mjc2NDIgMy4xNjM1MjQzOSw2LjA3ODE3MDczIEMyLjg5Mzg5MDI0LDYuNzU0ODc4MDUgMi43NzE4OTgzNyw3LjQ3MDQ4NzggMi44MDA4ODIxMSw4LjIwNTEyMTk1IEMyLjg1MzA3NzI0LDkuNTI5ODM3NCAzLjQxMzcyNzY0LDEwLjc3NjM0MTUgNC4zNzk0NTkzNSwxMS43MTUwODEzIEM1LjM0NTEwOTc2LDEyLjY1MzY5OTIgNi42MDcyMjM1OCwxMy4xNzkyNjgzIDcuOTMzMzIxMTQsMTMuMTk0OTE4NyBDNy45NTQyOTY3NSwxMy4xOTUyMDMzIDcuOTc0OTQ3MTUsMTMuMTk1MzI1MiA3Ljk5NTY3ODg2LDEzLjE5NTMyNTIgQzkuMDkyOTE0NjMsMTMuMTk1MzI1MiAxMC4xNDI1NDg4LDEyLjg1NjEzODIgMTEuMDMxNTMyNSwxMi4yMTQ0NzE1IEMxMS4xNTU0NzU2LDEyLjEyNSAxMS4zMDIwNjEsMTIuMDc3NjgyOSAxMS40NTUzNTM3LDEyLjA3NzY4MjkgQzExLjY1NDAxMjIsMTIuMDc3NjgyOSAxMS44NDY4MTcxLDEyLjE2MDA0MDcgMTEuOTg0Mzc4LDEyLjMwMzYxNzkgQzEyLjEzMDkyMjgsMTIuNDU2NTA0MSAxMi4yMDQwMTIyLDEyLjY2NTI4NDYgMTIuMTg0Nzg0NiwxMi44NzYzMDA4IEMxMi4xNjU1OTc2LDEzLjA4NzA3MzIgMTIuMDU2MjA3MywxMy4yNzg5NDMxIDExLjg4NDU4MTMsMTMuNDAyNzIzNiBDMTAuNzc3NzUyLDE0LjIwMTE3ODkgOS40NzE4MTcwNywxNC42MzUyMDMzIDguMTA4MDM2NTksMTQuNjU3ODQ1NSBDOC4wNjk3MDMyNSwxNC42NTg0NTUzIDguMDMxODU3NzIsMTQuNjU4NzgwNSA3Ljk5Mzc2ODI5LDE0LjY1ODc4MDUiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+)';
    editorBtnShadow.append(logo);
    return editorBtn;
  }

  async scanMessages() {
    const msgs = document.querySelectorAll('[data-message-id]');
    const currentMsgs = new Map();
    for (const msgElem of msgs) {
      const msgData = {};
      const msgId = this.getMsgId(msgElem);
      const mvFrame = msgElem.querySelector(`[data-mvelo-frame="${FRAME_ATTACHED}"]`);
      if (mvFrame) {
        const {id, type} = this.getControllerDetails(mvFrame);
        msgData.controllerId = id;
        msgData.controllerType = type;
      }
      const selected = this.selectedMsgs && this.selectedMsgs.get(msgId);
      if (selected) {
        selected.controllerId = msgData.controllerId || selected.controllerId;
        currentMsgs.set(msgId, selected);
        if (selected.controllerType === 'dFrame' || selected.clipped || selected.secureAction) {
          this.addBottomBtns(msgId, msgElem);
        }
        continue;
      }
      if (this.hasClippedArmored(msgElem)) {
        msgData.clipped = true;
      }
      msgData.att = this.getEncryptedAttachments(msgElem);
      if (!msgData.controllerId && (msgData.clipped || msgData.att.length)) {
        const aFrame = new AttachmentFrame();
        msgData.controllerId = aFrame.id;
        msgData.controllerType = aFrame.mainType;
        const containerElem = msgElem.querySelector('.ii.gt');
        aFrame.attachTo(containerElem);
        if (msgData.att.length) {
          msgData.plainText = this.getPlainText(msgElem);
        }
        if (msgData.clipped || msgData.plainText) {
          const bodyElem = containerElem.querySelector(MSG_BODY_SELECTOR);
          bodyElem.style.display = 'none';
          msgData.hiddenElem = bodyElem;
        }
      }
      if (msgData.controllerId) {
        msgData.msgId = msgId;
        // add top and menu buttons
        this.attachMsgBtns(msgId, msgElem, msgData);
        // add bottom buttons in case of decryp frame
        if (msgData.controllerType === 'dFrame' || msgData.clipped) {
          this.addBottomBtns(msgId, msgElem);
        }
        currentMsgs.set(msgId, msgData);
      }
    }
    this.selectedMsgs = currentMsgs;
  }

  getControllerDetails(frameElem) {
    const eframe = frameElem.lastChild.shadowRoot.querySelector('.m-extract-frame');
    return {id: parseViewName(eframe.id).id, type: eframe.dataset.mvControllerType};
  }

  hasClippedArmored(msgElem) {
    const clipped = msgElem.querySelector('.iX a');
    if (clipped && clipped.href.includes('view=lg')) {
      const msgText = msgElem.querySelector(MSG_BODY_SELECTOR).innerText;
      return /BEGIN\sPGP\sMESSAGE/.test(msgText);
    }
    return false;
  }

  getPlainText(msgElem) {
    const {innerText} = msgElem.querySelectorAll('.ii.gt')[0];
    return /\S/.test(innerText) ? innerText : '';
  }

  getEncryptedAttachments(msgElem) {
    const attachmentElems = msgElem.querySelectorAll('.aV3');
    const regex = /.*\.(gpg|pgp|asc)/;
    const attachments = [];
    for (const attachmentElem of attachmentElems) {
      const fileName = attachmentElem.innerText;
      if (fileName && regex.test(fileName)) {
        attachments.push(fileName);
      }
    }
    return attachments;
  }

  attachMsgBtns(msgId, msgElem, msgData) {
    // add top buttons
    const actionBtnsTopRoot = msgElem.querySelector('td.acX.bAm');
    const secureReplyBtn = document.createElement('div');
    secureReplyBtn.classList.add('mv-reply-btn-top');
    secureReplyBtn.setAttribute('title', map.provider_gmail_secure_reply_btn);
    secureReplyBtn.setAttribute('tabindex', 0);
    secureReplyBtn.setAttribute('role', 'button');
    secureReplyBtn.setAttribute('aria-label', map.provider_gmail_secure_reply_btn);
    secureReplyBtn.addEventListener('click', ev => this.onSecureButton(ev, 'reply', msgId));
    const secureReplyBtnShadowRootElem = document.createElement('div');
    secureReplyBtnShadowRootElem.dataset.mvBtnTop = 'reply';
    secureReplyBtnShadowRootElem.style.display = 'inline-flex';
    actionBtnsTopRoot.prepend(secureReplyBtnShadowRootElem);
    const secureReplyBtnShadow = secureReplyBtnShadowRootElem.attachShadow({mode: 'open'});
    const secureReplyBtnStyle = document.createElement('style');
    secureReplyBtnStyle.textContent = gmailIntegration/* default */.A;
    secureReplyBtnShadow.append(secureReplyBtnStyle);
    secureReplyBtnShadow.append(secureReplyBtn);
    // add menu items - TODO: improve click handler as it fails attaching the secure buttons to the menu in some rare cases
    const menuBtn = actionBtnsTopRoot.querySelector('.T-I-Js-Gs.aap.T-I-awG');
    if (menuBtn) {
      menuBtn.dataset.mvMenuBtns = FRAME_ATTACHED;
      msgData.menuMouseDownHandler = () => {
        this.menuPopover = document.querySelector('.b7.J-M[role="menu"]');
        setTimeout(() => {
          this.addMenuBtn('reply', this.menuPopover, null, ev => this.onSecureButton(ev, 'reply', msgId));
          const replyMenuItem = this.menuPopover.querySelector('[role="menuitem"][id="r2"]');
          if (replyMenuItem.style.display !== 'none') {
            this.addMenuBtn('replyAll', this.menuPopover, replyMenuItem, ev => this.onSecureButton(ev, 'reply', msgId, true));
          }
          this.addMenuBtn('forward', this.menuPopover, this.menuPopover.querySelector('[role="menuitem"][id="r3"]'), ev => this.onSecureButton(ev, 'forward', msgId));
        }, !this.menuPopover.hasChildNodes() ? 50 : 0);
      };
      menuBtn.addEventListener('mousedown', msgData.menuMouseDownHandler, {capture: true});
      msgData.menuBlurHandler = () => {
        this.cleanupMenuBtns();
      };
      menuBtn.addEventListener('blur', msgData.menuBlurHandler, {capture: true});
    }
  }

  addBottomBtns(msgId, msgElem) {
    const bottomBtnsContainer = msgElem.nextSibling;
    if (bottomBtnsContainer) {
      if (bottomBtnsContainer.querySelector('[data-mv-btns-bottom]')) {
        return;
      }
      const actionBtnsBottom = bottomBtnsContainer.querySelectorAll('span.ams[role="link"]');
      if (actionBtnsBottom.length) {
        let parent;
        let hasReplyAllBtn = false;
        for (const btn of actionBtnsBottom) {
          if (!parent) {
            parent = btn.parentElement;
          }
          if (btn.classList.contains('bkI')) {
            hasReplyAllBtn = true;
          }
          btn.style.display = 'none';
        }
        const actionBtnsBottomShadowRootElem = document.createElement('div');
        actionBtnsBottomShadowRootElem.dataset.mvBtnsBottom = FRAME_ATTACHED;
        parent.prepend(actionBtnsBottomShadowRootElem);
        const actionBtnsBottomElem = document.createElement('div');
        actionBtnsBottomElem.classList.add('mv-action-btns-bottom');
        this.addBottomBtn('reply', actionBtnsBottomElem, ev => this.onSecureButton(ev, 'reply', msgId));
        if (hasReplyAllBtn) {
          this.addBottomBtn('replyAll', actionBtnsBottomElem, ev => this.onSecureButton(ev, 'reply', msgId, true));
        }
        this.addBottomBtn('forward', actionBtnsBottomElem, ev => this.onSecureButton(ev, 'forward', msgId));
        const actionBtnsBottomShadow = actionBtnsBottomShadowRootElem.attachShadow({mode: 'open'});
        const actionBtnsBottomStyle = document.createElement('style');
        actionBtnsBottomStyle.textContent = gmailIntegration/* default */.A;
        actionBtnsBottomShadow.append(actionBtnsBottomStyle);
        actionBtnsBottomShadow.append(actionBtnsBottomElem);
      }
    }
  }

  addBottomBtn(name, container, clickHandler) {
    const secureActionBtnBottom = document.createElement('span');
    secureActionBtnBottom.classList.add('mv-action-btn-bottom', `mv-action-btn-bottom-${name}`);
    secureActionBtnBottom.textContent = map[`provider_gmail_secure_${name}_btn`];
    secureActionBtnBottom.addEventListener('click', clickHandler);
    container.append(secureActionBtnBottom);
  }

  addMenuBtn(name, container, beforeElem, clickHandler) {
    let menuItemShadowRootElem = container.querySelector(`[data-mv-menu-item="${name}"]`);
    let secureMenuItemShadow;
    if (!menuItemShadowRootElem) {
      menuItemShadowRootElem = document.createElement('div');
      menuItemShadowRootElem.dataset.mvMenuItem = name;
      menuItemShadowRootElem.setAttribute('role', 'menuitem');
      container.insertBefore(menuItemShadowRootElem, beforeElem || container.firstChild);
      const secureMenuItem = document.createElement('div');
      secureMenuItem.classList.add('mv-menu-item', `mv-menu-item-${name}`);
      secureMenuItem.textContent = map[`provider_gmail_secure_${name}_btn`];
      secureMenuItemShadow = menuItemShadowRootElem.attachShadow({mode: 'open'});
      const secureMenuItemStyle = document.createElement('style');
      secureMenuItemStyle.textContent = gmailIntegration/* default */.A;
      secureMenuItemShadow.append(secureMenuItemStyle);
      secureMenuItemShadow.append(secureMenuItem);
    } else {
      secureMenuItemShadow = menuItemShadowRootElem.shadowRoot;
      const cloned = secureMenuItemShadow.lastChild.cloneNode(true);
      secureMenuItemShadow.replaceChild(cloned, secureMenuItemShadow.lastChild);
    }
    secureMenuItemShadow.lastChild.addEventListener('click', clickHandler, {once: true});
  }

  cleanupMenuBtns() {
    if (this.menuPopover) {
      this.menuPopover.querySelectorAll('[data-mv-menu-item]').forEach(node => node.parentNode && node.parentNode.removeChild(node));
    }
  }

  async updateElements() {
    this.attachEditorBtn();
    await this.scanMessages();
  }

  onCloseFrame(controllerId) {
    const message = this.getMsgByControllerId(controllerId);
    if (message && message.hiddenElem) {
      message.hiddenElem.style.display = 'block';
    }
  }

  deactivate() {
    document.removeEventListener('mailvelope-observe', this.updateElements);
    this.removeElements();
    this.selectedMsgs = null;
  }

  removeElements() {
    this.removeEditorButton();
    if (this.selectedMsgs) {
      for (const {msgId, menuClickHandler, menuBlurHandler, clipped, hiddenElem} of this.selectedMsgs.values()) {
        const msgElem = document.querySelector(`[data-message-id="#${msgId}"]`);
        if (!msgElem) {
          continue;
        }
        msgElem.querySelectorAll('[data-mv-btn-top]').forEach(node => node.parentNode && node.parentNode.removeChild(node));
        const menuBtnElem = msgElem.querySelector('[data-mv-menu-btns]');
        if (menuBtnElem) {
          menuBtnElem.removeEventListener('click', menuClickHandler, true);
          menuBtnElem.removeEventListener('blur', menuBlurHandler, true);
          menuBtnElem.removeAttribute('data-mv-menu-btns');
        }
        if (clipped) {
          const bodyElem = msgElem.querySelector(MSG_BODY_SELECTOR);
          bodyElem.style.display = 'block';
        }
        if (hiddenElem) {
          hiddenElem.style.display = 'block';
        }
      }
    }
    const btnsBottomElem = document.querySelector('[data-mv-btns-bottom]');
    if (btnsBottomElem) {
      const parent = btnsBottomElem.parentNode;
      if (parent) {
        parent.removeChild(btnsBottomElem);
        parent.querySelectorAll('span.ams[role="link"]').forEach(node => node.style.display = 'inline-flex');
      }
    }
    this.cleanupMenuBtns();
  }

  removeEditorButton() {
    if (this.editorBtn) {
      this.editorBtn.parentNode && this.editorBtn.parentNode.removeChild(this.editorBtn);
      this.editorBtnRoot.removeAttribute('data-mvelo-frame');
      this.editorBtnRoot.style.overflow = 'inherit';
    }
  }

  onEditorButton(ev) {
    this.editorBtn.blur();
    this.port.emit('open-editor', {userInfo: this.getUserInfo()});
    ev.stopPropagation();
  }

  onSecureButton(ev, type, msgId, all = false) {
    this.port.emit('secure-button', {type, msgId, all, userInfo: this.getUserInfo()});
    ev.stopPropagation();
  }
}

;// ./src/content-scripts/providerSpecific.js
/**
 * Copyright (C) 2016-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * @fileOverview Implements provider specific content scripts to query
 * recipients and set sender email addresses in the webmail ui.
 */





let providerMap = null;
let prefs = null;

/**
 * Initializes the map of provider specific modules.
 */
function providerSpecific_init(preferences) {
  prefs = preferences;
  providerMap = new Map();
  providerMap.set('mail.google.com', new Gmail());
  providerMap.set('mail.yahoo.com', new Yahoo());
  providerMap.set('outlook.live.com', new Outlook());
  providerMap.set('default', new Default());
}

/**
 * Lookup function that return the vendor specific module to a hostname.
 * If a hostname if not supported specifically, the default module will
 * be returned.
 * @param  {String} hostname - The hostname of the webmail interface
 * @return {Object}   An instanciated module
 */
function providerSpecific_get(hostname) {
  if (providerMap.has(hostname)) {
    return providerMap.get(hostname);
  } else {
    return providerMap.get('default');
  }
}

//
// Provider specific modules
//

//
// Default module ... generic handling for unsupported providers
//

class Default {
  /**
   * Parse recipients from the DOM has not been reliable for generic webmail
   * @return {Promise.<Array>}   The recipient objects in the form { email: 'jon@example.com' }
   */
  async getRecipients() {
    return [];
  }

  /**
   * Since there is not way to enter recipients in a generic fashion
   * this function does nothing.
   */
  setRecipients() { /* do nothing */ }

  /**
   * Extract sender
   * @return {Promise.<Array>}   sender object in the form { email: 'jon@example.com' }
   */
  async getSender() {
    return [];
  }
}

//
// Gmail module
//

class Gmail {
  constructor() {
    if (prefs.provider.gmail_integration) {
      this.integration = new GmailIntegration();
      this.integration.init();
    }
  }

  /**
   * Parse recipients from the Gmail Webmail interface
   * @return {Promise.<Array>}   The recipient objects in the form { email: 'jon@example.com' }
   */
  async getRecipients(editElement) {
    return getAttr(editElement.closest('.I5').querySelectorAll('.agb .afV[data-hovercard-id]'), 'data-hovercard-id');
  }

  /**
   * Set the recipients in the Gmail Webmail editor.
   */
  setRecipients({recipients = [], editElement}) {
    const containerElement = editElement.closest('.I5');
    // find the relevant elements in the Gmail interface
    const displayArea = containerElement.querySelector('.aoD.hl'); // email display only area
    const tagRemove = containerElement.querySelectorAll('.afV[data-hovercard-id] .afX'); // email tags remove button
    const input = containerElement.querySelectorAll('.agP.aFw'); // the actual recipient email address text input (a textarea)
    const subject = containerElement.querySelector('.aoT'); // subject field
    const editor = containerElement.querySelector('.Am.Al'); // editor
    input.forEach(element => element.value = '');
    setFocus(displayArea)
    .then(() => {
      tagRemove.forEach(tag => tag.click());
      // enter address text into input
      const text = joinEmail(recipients);
      if (input.length) {
        input.item(0).value = text;
      }
    })
    .then(() => {
      setFocus(isVisible(subject) ? subject : editor);
    });
  }

  /**
   * Extract sender
   * @param {HTMLElement} emailElement - DOM element of displayed email content
   * @return {Promise.<Array>}   sender object in the form { email: 'jon@example.com' }
   */
  async getSender(emailElement) {
    const emailArea = emailElement.closest('.gs');
    if (!emailArea) {
      return [];
    }
    return getAttr(emailArea.querySelectorAll('.cf.ix span[email]'), 'email');
  }
}

//
// Yahoo module
//

class Yahoo {
  /**
   * Parse recipients from the Yahoo Webmail interface
   * @return {Promise.<Array>}   The recipient objects in the form { email: 'jon@example.com' }
   */
  async getRecipients() {
    const recipientElements = document.querySelectorAll('.compose-header [data-test-id="container-to"] [data-test-id="pill"]');
    return getAttr(recipientElements, 'title');
  }

  /**
   * Set the recipients in the Yahoo Webmail editor.
   */
  setRecipients({recipients = []}) {
    const input = document.querySelector('.compose-header [data-test-id="container-to"] ul.pill-list > li.pill-container input.input-to');
    const inputValue = joinEmail(recipients);
    setReactValue(input, inputValue);
    // trigger change event by switching focus
    setFocus(input)
    .then(() => {
      const subject = document.querySelector('[data-test-id="compose-subject"]');
      // set focus to subject field, or to compose area in the reply case
      setFocus(isVisible(subject) ? subject : document.querySelector('[id="editor-container"] > [data-test-id="rte"]'));
    });

    // remove existing recipients afterwards
    setTimeout(() => {
      document.querySelectorAll('.compose-header [data-test-id="container-to"] ul.pill-list > li:not(.pill-container)').forEach(element => {
        const dataElement = element.querySelector('[data-test-id="pill"]');
        const emailAddress = goog.format.EmailAddress.parse(dataElement.getAttribute('title'));
        if (emailAddress.isValid() && !recipients.find(({email}) => email === emailAddress.getAddress())) {
          element.click();
          element.querySelector('.pill-close button').click();
        }
      });
    }, 250);
  }

  /**
   * Extract sender
   * @param {HTMLElement} emailElement - DOM element of displayed email content
   * @return {Promise.<Array>}   sender object in the form { email: 'jon@example.com' }
   */
  async getSender(emailElement) {
    const emailArea = emailElement.closest('.message-view');
    if (!emailArea) {
      return [];
    }
    const senderElements = emailArea.querySelectorAll('header [data-test-id="message-from"] [data-test-id="email-pill"]:first-of-type > span > span');
    return getText(senderElements);
  }
}

//
// Outlook module
//

class Outlook {
  getRecipients(editElement) {
    return new Promise(resolve => {
      // get compose area
      const composeArea = editElement.closest('[role="main"]');
      // find personas in compose are
      const personas = composeArea.querySelectorAll('[data-selection-index] .lpc-hoverTarget');
      setTimeout(() => {
        resolve(sequential(this.extractPersona.bind(this), Array.from(personas)));
      }, 500);
    });
  }

  waitForPersonaCard(action) {
    return new Promise((resolve, reject) => {
      // create observer to wait for persona popup
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (!mutation.addedNodes.length) {
            return;
          }
          const addedNode = mutation.addedNodes.item(0);
          observer.disconnect();
          // wait in interval for popup content to render
          const searchInterval = setInterval(() => {
            const personaCard = addedNode.querySelector('[data-log-name="Email"] button');
            if (personaCard && personaCard.textContent.match(HAS_EMAIL)) {
              clearInterval(searchInterval);
              // still more time required to complete render
              setTimeout(() => resolve({personaCard, addedNode}), 200);
            }
          }, 100);
          setTimeout(() => clearInterval(searchInterval), 1500);
        });
      });
      observer.observe(document.body, {childList: true});
      setTimeout(() => reject(observer.disconnect()), 1000);
      action && action();
    });
  }

  extractPersona(pane) {
    if (!pane) {
      return [];
    }
    // click persona pane to open popup
    return this.waitForPersonaCard(() => pane.click())
    .then(({personaCard, addedNode}) => {
      // hide persona popup
      addedNode.style.display = 'none';
      return getText(personaCard.querySelectorAll('span'));
    })
    .catch(() => []);
  }

  setRecipients({recipients = [], editElement}) {
    // get compose area
    const composeArea = editElement.closest('[role="main"]');
    // remove existing recipients
    setTimeout(() => {
      composeArea.querySelectorAll('[data-selection-index] button[class*=removeWellItemButton]').forEach(element => element.click());
    }, 250);
    // enter address text into input
    const input = composeArea.querySelector('.ms-BasePicker-input');
    sequential(this.setRecipient.bind(this), recipients.map(({email}) => ({email, input}))).then(() => input.blur());
  }

  setRecipient({email, input}) {
    return new Promise(resolve => {
      setReactValue(input, email);
      const keyEnter = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        keyCode: 13
      });
      setTimeout(() => {
        resolve([input.dispatchEvent(keyEnter)]);
      }, 500);
    });
  }

  async getSender(emailElement) {
    return new Promise(resolve => {
      const emailArea = emailElement.closest('.item-part, .item-reading-pane');
      if (!emailArea) {
        resolve([]);
      }
      setTimeout(() => {
        const senderElement = emailArea.querySelector('.item-header-actions > div .lpc-hoverTarget div span');
        if (!senderElement) {
          resolve([]);
        }
        resolve(getText([senderElement]));
      }, 500);
    });
  }
}

/**
 * DOM API util funtions
 */

const HAS_EMAIL = /[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}/;

/**
 * Filter the text content of a list of elements for email addresses.
 * @param  {NodeList<HTMLElement>} elements - A list of elements to iteralte over
 * @return {Array}   The recipient objects in fhe form { email: 'jon@example.com' }
 */
function getText(elements) {
  return parseEmail(elements, element => element.textContent);
}

/**
 * Filter a certain attribute of a list of elements for email addresses.
 * @param  {NodeList<HTMLElement>} elements - A list of elements to iteralte over
 * @param  {String} attrName - The optional element's attribute name to query by
 * @return {Array}   The recipient objects in fhe form { email: 'jon@example.com' }
 */
function getAttr(elements, attrName) {
  return parseEmail(elements, element => element.getAttribute(attrName));
}

/**
 * Set focus to element on next tick
 * @param  {HTMLElement} element - element to set focus
 */
function setFocus(element) {
  return new Promise(resolve => {
    setTimeout(() => {
      element && element.focus();
      resolve();
    }, 0);
  });
}

function setReactValue(input, value) {
  input.focus();
  input.value = value;
  const event = new Event('input', {bubbles: true});
  const tracker = input._valueTracker;
  if (tracker) {
    tracker.setValue('');
  }
  input.dispatchEvent(event);
}

/**
 * Extract emails from list of elements
 * @param  {NodeList<HTMLElement>} elements - A list of HTML elements to iteralte over
 * @param  {Function} extract - extract function
 * @return {Array}   The recipient objects in fhe form { email: 'jon@example.com' }
 */
function parseEmail(elements, extract) {
  const emails = [];
  for (const element of elements) {
    const value = extract(element);
    const emailAddress = goog.format.EmailAddress.parse(value);
    if (emailAddress.isValid()) {
      emails.push(emailAddress.getAddress());
    }
  }
  return toRecipients(emails);
}

/**
 * Maps an array of email addresses to an array of recipient objects.
 * @param  {Array} addresses - An array of email addresses
 * @return {Array}   The recipient objects in fhe form { email: 'jon@example.com' }
 */
function toRecipients(addresses) {
  return addresses.map(address => ({
    email: address
  }));
}

/**
 * Maps an array of recipients to a string of email addresses
 * @param  {Array} recipients - The recipient objects in the form { email: 'jon@example.com' }
 * @return {String}   comma separated list of email addresses
 */
function joinEmail(recipients) {
  return recipients.map(r => r.email).join(', ');
}

;// ./src/content-scripts/decryptFrame.js
/**
 * Copyright (C) 2012-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */








register([
  'decrypt_frame_help_text'
]);

mapToLocal();

class DecryptFrame extends ExtractFrame {
  constructor() {
    super();
    this.dDialog = null;
    // decrypt popup active
    this.dPopup = false;
    this.ctrlName = `dFrame${this.currentProvider.integration ? 'Gmail' : ''}-${this.id}`;
  }

  renderFrame() {
    super.renderFrame();
    const para = document.createElement('p');
    para.textContent = map.decrypt_frame_help_text;
    this.eFrame.dataset.mvControllerType = 'dFrame';
    this.eFrame.append(para);
    this.eFrame.classList.add('m-decrypt');
  }

  registerEventListener() {
    super.registerEventListener();
    this.port.on('dialog-cancel', this.removeDialog);
    this.port.on('get-armored', this.onArmored);
  }

  async onArmored() {
    let sender = await this.getEmailSender();
    sender = sender.map(person => person.email);
    sender = deDup(sender);
    const armored = this.getPGPMessage();
    if (this.currentProvider.integration) {
      const integrationMsgData = this.currentProvider.integration.getMsgByControllerId(this.id);
      if (integrationMsgData) {
        const {msgId, att: encAttFileNames} = integrationMsgData;
        this.port.emit('set-data', {userInfo: this.currentProvider.integration.getUserInfo(), msgId, encAttFileNames, armored, sender, gmailCtrlId: this.currentProvider.integration.id});
        return;
      }
    }
    this.port.emit('set-armored', {
      data: armored,
      options: {senderAddress: sender}
    });
  }

  clickHandler(ev) {
    super.clickHandler(undefined, ev);
    if (main_prefs.security.display_decrypted == DISPLAY_POPUP) {
      this.popupDialog();
    }
  }

  onShow() {
    super.onShow();
    if (main_prefs.security.display_decrypted == DISPLAY_INLINE && !this.dDialog) {
      this.inlineDialog();
    }
  }

  inlineDialog() {
    this.dDialog = document.createElement('iframe');
    this.dDialog.id = `dDialog-${this.id}`;
    this.dDialog.src = chrome.runtime.getURL(`components/decrypt-message/decryptMessage.html?id=${this.id}`);
    this.dDialog.frameBorder = 0;
    this.dDialog.scrolling = 'no';
    this.dDialog.classList.add('m-frame-dialog');
    this.eFrame.append(this.dDialog);
    this.setFrameDim();
    this.dDialog.classList.add('m-show');
  }

  popupDialog() {
    this.port.emit('dframe-display-popup');
    this.dPopup = true;
  }

  removeDialog() {
    // check if dialog is active
    if (!this.dPopup) {
      return;
    }
    this.dPopup = false;
    this.eFrame.classList.add('m-cursor');
    this.toggleIcon();
    this.eFrame.addEventListener('click', this.clickHandler);
  }

  setFrameDim() {
    if (this.dDialog === null) {
      super.setFrameDim();
    } else {
      const {height} = this.pgpRange.getBoundingClientRect();
      let {width} = this.pgpElement.parentElement.getBoundingClientRect();
      if (!width || !height) {
        return;
      }
      // less 1px border and 2 pixel box-shadow
      width -= 3;
      this.eFrame.style.width = `${width}px`;
      // set absolute dims for performance reasons
      this.dDialog.style.width = `${width}px`;
      this.dDialog.style.height = `${height}px`;
    }
  }
}

;// ./src/content-scripts/verifyFrame.js
/**
 * Copyright (C) 2015-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







register([
  'verify_frame_help_text'
]);

mapToLocal();

const PGP_SIG_HEADER = /-----BEGIN\sPGP\sSIGNATURE/;

class VerifyFrame extends ExtractFrame {
  constructor() {
    super();
    this.pgpSigRange = null;
    this.vDialog = null;
    // verify popup active
    this.vPopup = false;
    this.ctrlName = `vFrame-${this.id}`;
  }

  init(pgpRange) {
    super.init(pgpRange);
    this.calcSignatureHeight();
  }

  calcSignatureHeight() {
    const treeWalker = document.createTreeWalker(this.pgpElement, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (PGP_SIG_HEADER.test(node.textContent)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }, false);
    const pgpSigBegin = treeWalker.nextNode();
    this.pgpSigRange = pgpSigBegin.ownerDocument.createRange();
    this.pgpSigRange.setStart(pgpSigBegin, pgpSigBegin.data.search(PGP_SIG_HEADER));
    this.pgpSigRange.setEnd(this.pgpRange.endContainer, this.pgpRange.endOffset);
  }

  renderFrame() {
    super.renderFrame();
    const para = document.createElement('p');
    para.textContent = map.verify_frame_help_text;
    this.eFrame.append(para);
    this.eFrame.classList.add('m-verify');
    this.eFrame.classList.remove('m-large');
  }

  registerEventListener() {
    super.registerEventListener();
    this.port.on('remove-dialog', this.removeDialog);
    this.port.on('armored-message', this.onArmoredMessage);
  }

  clickHandler(ev) {
    super.clickHandler(undefined, ev);
    if (main_prefs.security.display_decrypted == DISPLAY_POPUP) {
      this.popupDialog();
    }
  }

  async onArmoredMessage() {
    let sender = await this.getEmailSender();
    sender = sender.map(person => person.email);
    sender = deDup(sender);
    this.port.emit('vframe-armored-message', {data: this.getArmoredMessage(), sender});
  }

  onShow() {
    super.onShow();
    if (main_prefs.security.display_decrypted == DISPLAY_INLINE && !this.vDialog) {
      this.inlineDialog();
    }
  }

  inlineDialog() {
    this.vDialog = document.createElement('iframe');
    this.vDialog.id = `vDialog-${this.id}`;
    this.vDialog.src = chrome.runtime.getURL(`components/decrypt-message/decryptMessage.html?id=${this.id}`);
    this.vDialog.frameBorder = 0;
    this.vDialog.scrolling = 'no';
    this.vDialog.classList.add('m-frame-dialog');
    this.eFrame.append(this.vDialog);
    this.setFrameDim();
    this.vDialog.classList.add('m-show');
  }

  popupDialog() {
    this.port.emit('vframe-display-popup');
    this.vPopup = true;
  }

  removeDialog() {
    // check if dialog is active
    if (!this.vPopup) {
      return;
    }
    this.vPopup = false;
    this.eFrame.classList.add('m-cursor');
    this.eFrame.classList.remove('m-open');
    this.eFrame.addEventListener('click', this.clickHandler);
  }

  setFrameDim() {
    let width;
    let height;
    this.eFrame.style.bottom = 0;
    if (this.vDialog) {
      ({height} = this.pgpRange.getBoundingClientRect());
      ({width} = this.pgpElement.parentElement.getBoundingClientRect());
      if (!width || !height) {
        return;
      }
      // less 1px border and 2 pixel box-shadow
      width -= 3;
      this.vDialog.style.width = `${width}px`;
      this.vDialog.style.height = `${height}px`;
    } else {
      ({height} = this.pgpSigRange.getBoundingClientRect());
      ({width} = this.pgpRange.getBoundingClientRect());
    }
    if (!width || !height) {
      return;
    }
    this.eFrame.style.width = `${width}px`;
    this.eFrame.style.height = `${height}px`;
  }
}

;// ./src/content-scripts/importFrame.js
/**
 * Copyright (C) 2013-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register([
  'import_frame_help_text'
]);

mapToLocal();

class ImportFrame extends ExtractFrame {
  constructor() {
    super();
    this.ctrlName = `imFrame-${this.id}`;
  }

  renderFrame() {
    super.renderFrame();
    const para = document.createElement('p');
    para.textContent = map.import_frame_help_text;
    this.eFrame.append(para);
    this.eFrame.classList.add('m-import');
  }

  clickHandler(ev) {
    super.clickHandler(undefined, ev);
    this.port.emit('imframe-armored-key', {data: this.getPGPMessage()});
  }
}

// EXTERNAL MODULE: ./src/content-scripts/encryptFrame.css
var encryptFrame = __webpack_require__(904);
;// ./src/content-scripts/encryptFrame.js
/**
 * Copyright (C) 2012-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */









register([
  'encrypt_frame_btn_label'
]);

mapToLocal();

class EncryptFrame {
  constructor() {
    this.id = getUUID();
    this.editElement = null;
    this.eFrame = null;
    this.port = null;
    this.emailTextElement = null;
    // type of external editor
    this.editorType = PLAIN_TEXT; //prefs.general.editor_type;
    this.keyCounter = 0;
    this.currentProvider = currentProvider;
    this.handleKeypress = this.handleKeypress.bind(this);
    this.setFrameDim = this.setFrameDim.bind(this);
  }

  attachTo(element) {
    this.init(element);
    this.establishConnection();
    this.registerEventListener();
    this.renderFrame();
  }

  init(element) {
    this.editElement = element;
    // set status to attached
    this.editElement.dataset[FRAME_STATUS] = FRAME_ATTACHED;
    this.emailTextElement = this.editElement.tagName.toLowerCase() === 'iframe' ? this.editElement.contentDocument.body : this.editElement;
  }

  establishConnection() {
    this.port = EventHandler.connect(`eFrame-${this.id}`, this);
    // attach extension unload handler
    this.port.onUninstall.addListener(this.closeFrame.bind(this, false));
  }

  registerEventListener() {
    // attach event handlers
    document.addEventListener('mailvelope-observe', this.setFrameDim);
    this.port.on('set-editor-output', this.setEditorOutput);
    this.port.on('destroy', this.closeFrame.bind(this, true));
    this.port.on('mail-editor-close', this.onMailEditorClose);
  }

  handleKeypress() {
    if (++this.keyCounter >= 13) {
      this.emailTextElement.removeEventListener('keypress', this.handleKeypress);
      this.eFrame.classList.remove('m-show');
      window.setTimeout(() => this.closeFrame(), 300);
    }
  }

  renderFrame() {
    // create frame
    this.eFrame = document.createElement('div');
    this.eFrame.id = `eFrame-${this.id}`;
    this.eFrame.classList.add('m-encrypt-frame');
    const encryptContainer = `<div class="m-encrypt-container"><a id="editorBtn" class="m-encrypt-button"><svg width="30px" heigh="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#FF004F"/><path d="M15.995 28.667c-3.39 0-6.57-1.311-8.955-3.691-2.387-2.383-3.704-5.567-3.707-8.966a12.628 12.628 0 0 1 .592-3.836l.007-.028c.087-.306.194-.6.318-.875.022-.055.047-.116.073-.176.11-.251.545-1.115 1.588-1.77.943-.593 1.77-.644 1.866-.648.228-.027.464-.04.699-.04 1.07 0 2.015.423 2.662 1.194.492.587.76 1.307.78 2.097a4.321 4.321 0 0 1 1.959-.481c1.07 0 2.016.424 2.662 1.194.039.046.076.094.113.142.859-.852 1.993-1.336 3.14-1.336 1.07 0 2.015.424 2.662 1.194.656.782.913 1.81.722 2.893l-.672 3.807c-.09.513.017.982.301 1.321.274.327.696.507 1.187.507 1.482 0 2.003-1.08 2.345-2.246.293-1.033.428-2.107.401-3.191a10.675 10.675 0 0 0-3.219-7.387 10.683 10.683 0 0 0-7.445-3.086H16c-2.14 0-4.209.63-5.982 1.825a.97.97 0 0 1-.544.167.958.958 0 0 1-.729-.335L8.74 6.91a.96.96 0 0 1 .196-1.418 12.585 12.585 0 0 1 7.317-2.156 12.604 12.604 0 0 1 8.65 3.67 12.601 12.601 0 0 1 3.758 8.612 12.664 12.664 0 0 1-.41 3.606h.001l-.043.158-.019.063a12.57 12.57 0 0 1-.4 1.187c-.079.187-.518 1.143-1.599 1.822-.935.588-1.673.618-1.76.62a4.89 4.89 0 0 1-.439.02c-1.07 0-2.016-.424-2.662-1.194-.656-.783-.913-1.81-.722-2.893l.672-3.808c.09-.512-.017-.982-.301-1.32-.274-.327-.696-.507-1.187-.507-1.166 0-2.325.99-2.531 2.162l-.735 3.998a.528.528 0 0 1-.52.432h-.883a.527.527 0 0 1-.52-.623l.762-4.144c.09-.51-.017-.98-.3-1.319-.275-.326-.697-.506-1.188-.506-1.165 0-2.324.99-2.531 2.162l-.734 3.998a.528.528 0 0 1-.52.432H9.21a.526.526 0 0 1-.52-.623l.764-4.159.512-2.799c.09-.509-.018-.976-.302-1.315-.274-.327-.696-.507-1.187-.507-1.21 0-1.989.465-2.454 1.463a10.662 10.662 0 0 0-.755 4.408c.108 2.737 1.266 5.313 3.26 7.252 1.995 1.939 4.603 3.024 7.343 3.057H16c2.266 0 4.435-.7 6.272-2.026a.942.942 0 0 1 .555-.18.962.962 0 0 1 .565 1.743 12.571 12.571 0 0 1-7.397 2.389" fill="#FFF2F6"/></g></svg><span>${map.encrypt_frame_btn_label}</span></a><button type="button" class="m-encrypt-close"><span class="icon-close"></span></button></div>`;
    this.eFrame.append(...parseHTML(encryptContainer));
    this.eFrame.querySelector('.m-encrypt-close').addEventListener('click', this.closeFrame.bind(this, false));
    this.eFrame.querySelector('#editorBtn').addEventListener('click', this.onEditorButton.bind(this));
    const shadowRootElem = document.createElement('div');
    this.editElement.parentNode.insertBefore(shadowRootElem, this.editElement.nextSibling);
    const eFrameShadow = shadowRootElem.attachShadow({mode: 'open'});
    const encryptContainerStyle = document.createElement('style');
    encryptContainerStyle.textContent = encryptFrame/* default */.A;
    eFrameShadow.append(encryptContainerStyle);
    eFrameShadow.append(this.eFrame);
    window.addEventListener('resize', this.setFrameDim);
    // to react on position changes of edit element, e.g. click on CC or BCC in GMail
    this.normalizeButtons();
    this.eFrame.classList.add('m-show');
    this.emailTextElement.addEventListener('keypress', this.handleKeypress);
  }

  normalizeButtons() {
    this.eFrame.querySelector('.m-encrypt-container').classList.remove('active');
    this.setFrameDim();
  }

  onEditorButton(ev) {
    this.emailTextElement.removeEventListener('keypress', this.handleKeypress);
    this.eFrame.querySelector('.m-encrypt-container').classList.add('active');
    this.showMailEditor();
    ev.stopPropagation();
  }

  onMailEditorClose() {
    this.eFrame.querySelector('.m-encrypt-container').classList.remove('active');
  }

  closeFrame(finalClose, ev) {
    this.eFrame.classList.remove('m-show');
    window.setTimeout(() => {
      window.removeEventListener('resize', this.setFrameDim);
      this.eFrame.remove();
      if (finalClose === true) {
        this.port.disconnect();
        this.editElement.dataset[FRAME_STATUS] = '';
      } else {
        this.editElement.dataset[FRAME_STATUS] = FRAME_DETACHED;
      }
    }, 300);
    if (ev instanceof Event) {
      ev.stopPropagation();
    }
  }

  setFrameDim() {
    this.eFrame.style.top = `${this.editElement.offsetTop + 5}px`;
    this.eFrame.style.right = '20px';
  }

  async showMailEditor() {
    const options = {};
    const emailContent = this.getEmailText(this.editorType == PLAIN_TEXT ? 'text' : 'html');
    if (/BEGIN\sPGP\sMESSAGE/.test(emailContent)) {
      try {
        options.quotedMail = normalizeArmored(emailContent, /-----BEGIN PGP MESSAGE-----[\s\S]+?-----END PGP MESSAGE-----/);
      } catch (e) {
        options.text = emailContent;
      }
    } else {
      options.text = emailContent;
    }
    options.recipients = await this.currentProvider.getRecipients(this.editElement);
    this.port.emit('eframe-display-editor', options);
  }

  getEmailText(type) {
    let text;
    let html;
    if (this.emailTextElement.tagName.toLowerCase() === 'textarea') {
      text = this.emailTextElement.value;
    } else { // html element
      if (type === 'text') {
        this.emailTextElement.focus();
        const sel = this.emailTextElement.ownerDocument.defaultView.getSelection();
        sel.selectAllChildren(this.emailTextElement);
        text = sel.toString();
        sel.removeAllRanges();
      } else {
        html = this.emailTextElement.innerHTML;
        html = html.replace(/\n/g, ''); // remove new lines
        text = html;
      }
    }
    return text;
  }

  /**
   * Is called after encryption and injects ciphertext and recipient
   * email addresses into the webmail interface.
   * @param {String} options.text         The encrypted message body
   * @param {Array}  options.to   The recipients to be added
   * @param {Array}  options.cc   The copy recipients to be added (not yet supported)
   */
  setEditorOutput(options) {
    // set message body
    this.normalizeButtons();
    this.setMessage(options.text);
    // set recipient email addresses
    this.currentProvider.setRecipients({recipients: options.to, editElement: this.editElement});
  }

  /**
   * Replace content of editor element (_emailTextElement)
   */
  setMessage(msg) {
    if (this.emailTextElement.tagName.toLowerCase() === 'textarea') {
      this.emailTextElement.value = msg;
    } else {
      // element is contenteditable or RTE
      // clear element first
      while (this.emailTextElement.firstChild) {
        this.emailTextElement.removeChild(this.emailTextElement.firstChild);
      }
      msg = `<pre>${encodeHTML(msg)}</pre>`;
      this.emailTextElement.append(...parseHTML(msg));
    }
    // trigger input event
    const inputEvent = document.createEvent('HTMLEvents');
    inputEvent.initEvent('input', true, true);
    this.emailTextElement.dispatchEvent(inputEvent);
  }
}

;// ./src/content-scripts/main.js
/**
 * Copyright (C) 2012-2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */












const PGP_HEADER = /-----BEGIN\sPGP\s(SIGNED|MESSAGE|PUBLIC)/;
const PGP_FOOTER = /END\sPGP\s(MESSAGE|SIGNATURE|PUBLIC KEY BLOCK)-----/;
const MIN_EDIT_HEIGHT = 84;
const OBSERVER_TIMEOUT = 300; // ms

let domObserver = null;
let clickHandler = null;
let port = null;
let watchList = null;
let clientApiActive = false;

let host = null;
let currentProvider = null;
let main_prefs = null;

document.body.dataset.mailvelopeVersion = '6.0.1';

function connect() {
  if (document.mveloControl) {
    return;
  }
  port = EventHandler.connect(`mainCS-${getUUID()}`);
  registerEventListener();
  port.emit('ready');
  document.mveloControl = true;
}

if (document.readyState !== 'loading') {
  connect();
} else {
  document.addEventListener('DOMContentLoaded', connect);
}

function main_init(preferences, watchlist) {
  main_prefs = preferences;
  watchList = watchlist;
  detectHost();
  if (clientApiActive) {
    // api case
    init();
  } else {
    // non-api case ... use provider specific content scripts
    providerSpecific_init(main_prefs);
    currentProvider = providerSpecific_get(host);
    // turn on DOM scan
    on();
  }
}

function registerEventListener() {
  port.on('destroy', onDestroy);
  port.on('init', ({prefs, watchList}) => main_init(prefs, watchList));
  port.on('set-prefs', msg => main_prefs = msg.prefs);
  port.onUninstall.addListener(off);
}

function onDestroy() {
  off();
  if (currentProvider?.integration) {
    currentProvider.integration.deactivate();
  }
  // re-init provider specific content scripts
  main_init(main_prefs, watchList);
}

function detectHost() {
  for (const site of watchList) {
    if (!site.active || !site.frames) {
      continue;
    }
    for (const frame of site.frames) {
      if (!frame.scan) {
        continue;
      }
      const hostRegex = matchPattern2RegEx(frame.frame);
      let hostID = window.location.hostname;
      const port = window.location.port;
      if (port && frame.frame.includes(':')) {
        hostID = `${hostID}:${port}`;
      }
      const validHost = hostRegex.test(hostID);
      if (validHost) {
        // host = match pattern without *. prefix
        host = frame.frame.replace(/^\*\./, '');
        if (frame.api) {
          clientApiActive = true;
          return;
        }
      }
    }
  }
}

function on() {
  if (clientApiActive) {
    return; // do not use DOM scan in case of clientAPI support
  }
  const mutateEvent = new CustomEvent('mailvelope-observe');
  // let hasMutated = false;
  let timeout = null;
  const next = () => {
    scanDOM();
    document.dispatchEvent(mutateEvent);
  };
  domObserver = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(next, OBSERVER_TIMEOUT);
  });
  clickHandler = () => {
    clearTimeout(timeout);
    timeout = setTimeout(next, OBSERVER_TIMEOUT);
  };
  document.addEventListener('click', clickHandler, {capture: true});
  domObserver.observe(document.body, {subtree: true, childList: true});
  // start DOM scan
  scanDOM();
  if (currentProvider?.integration) {
    currentProvider.integration.updateElements();
  }
}

function off() {
  if (domObserver) {
    domObserver.disconnect();
  }
  if (clickHandler) {
    document.removeEventListener('click', clickHandler, true);
  }
}

function scanDOM() {
  // find armored PGP text
  try {
    const pgpRanges = findPGPRanges();
    if (pgpRanges.length) {
      attachExtractFrame(pgpRanges);
    }
  } catch (e) {
    console.log('Detecting PGP messages failed: ', e);
  }
  if (currentProvider?.integration) {
    return;
  }
  try {
    const editables = findEditable();
    if (editables.length !== 0) {
      attachEncryptFrame(editables);
    }
  } catch (e) {
    console.log('Detecting editor elements failed: ', e);
  }
}

/**
 * Check the nodes text content for PGP_HEADER and PGP_FOOTER
 * @return NodeFilter.FILTER_ACCEPT|NodeFilter.FILTER_REJECT
 */
function acceptNode(node) {
  if (PGP_HEADER.test(node.textContent) || PGP_FOOTER.test(node.textContent)) {
    return NodeFilter.FILTER_ACCEPT;
  }
  return NodeFilter.FILTER_REJECT;
}

/**
 * Find text nodes in DOM that contain PGP messages
 * @return {Array.<Range>} - Array of Range objects containing the found PGP messages
 */
function findPGPRanges() {
  const walkers = [];
  walkers.push(document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {acceptNode}, false));
  // check iframes for PGP content
  let iframes = Array.from(document.getElementsByTagName('iframe')).filter(frame => frame.contentDocument && frame.contentDocument.body && frame.contentDocument.body.innerHTML);
  // only dynamically created iframes
  iframes = iframes.filter(frame => !frame.getAttribute('src') || /^(about|javascript).*/.test(frame.src));
  for (const frame of iframes) {
    walkers.push(document.createTreeWalker(frame.contentDocument.body, NodeFilter.SHOW_TEXT, {acceptNode}, false));
  }
  const rangeList = [];
  for (const treeWalker of walkers) {
    let currPGPBegin = null;
    while (treeWalker.nextNode()) {
      const node = treeWalker.currentNode;
      // check if element is editable
      const isEditable = firstParent(node, '[contenteditable], textarea');
      if (isEditable ||
        treeWalker.currentNode.parentNode.tagName.toLowerCase() === 'script' ||
        treeWalker.currentNode.ownerDocument.designMode === 'on') {
        continue;
      }
      const isPGPBegin = PGP_HEADER.exec(treeWalker.currentNode.textContent);
      if (isPGPBegin) {
        currPGPBegin = treeWalker.currentNode;
        const isPGPEnd = PGP_FOOTER.exec(treeWalker.currentNode.textContent);
        if (!isPGPEnd || isPGPBegin.index > isPGPEnd.index) {
          continue;
        }
      }
      if (currPGPBegin && getMessageType(currPGPBegin.textContent) === getMessageType(treeWalker.currentNode.textContent)) {
        const pgpEnd = treeWalker.currentNode;
        const range = pgpEnd.ownerDocument.createRange();
        range.setStartBefore(currPGPBegin);
        range.setEndAfter(pgpEnd);
        const commonParentContainer = range.commonAncestorContainer;
        let depth = 0;
        let currParent = pgpEnd.parentElement;
        while (currParent.parentElement && depth < 3) {
          if (currParent === commonParentContainer) {
            rangeList.push(range);
            break;
          }
          currParent = currParent.parentElement;
          depth ++;
        }
      }
    }
  }
  return rangeList;
}

function findEditable() {
  // find textareas and elements with contenteditable attribute, filter out <body>
  let editable = Array.from(document.querySelectorAll('[contenteditable="true"], textarea')).filter(isVisible).filter(element => element.tagName.toLowerCase() !== 'body');
  const iframes = Array.from(document.getElementsByTagName('iframe')).filter(isVisible);
  const dynFrames = [];
  const origFrames = [];
  for (const frame of iframes) {
    // find dynamically created iframes where src is not set
    if (!frame.src || /^javascript.*/.test(frame.src) || /^about.*/.test(frame.src)) {
      dynFrames.push(frame);
    } else {
      origFrames.push(frame);
    }
  }
  // find editable elements inside dynamic iframe (content script is not injected here)
  for (const dynFrame of dynFrames) {
    const content = dynFrame.contentDocument;
    // document of iframe in design mode or contenteditable set on the body
    if (content.designMode === 'on' || content.querySelector('body[contenteditable="true"]')) {
      // add iframe to editable elements
      editable.push(dynFrame);
    } else {
      // editable elements inside iframe
      const editblElem = Array.from(content.querySelectorAll('[contenteditable="true"], textarea')).filter(isVisible);
      editable.push(...editblElem);
    }
  }
  // find iframes from same origin with a contenteditable body (content script is injected, but encrypt frame needs to be attached to outer iframe)
  const anchor = document.createElement('a');
  for (const origFrame of origFrames) {
    anchor.href = origFrame.href;
    if (anchor.hostname !== document.location.hostname) {
      continue;
    }
    try {
      const content = origFrame.contentDocument;
      if (content.designMode === 'on' || content.querySelector('body[contenteditable="true"]')) {
        editable.push(origFrame);
      }
    } catch (e) {}
  }
  // filter out elements below a certain height limit
  editable = editable.filter(element => element.getBoundingClientRect().height > MIN_EDIT_HEIGHT);
  return editable;
}

function getMessageType(armored) {
  if (/(BEGIN|END)\sPGP\sMESSAGE/.test(armored)) {
    return PGP_MESSAGE;
  } else if (/BEGIN\sPGP\sSIGNED\sMESSAGE/.test(armored)) {
    return PGP_SIGNATURE;
  } else if (/END\sPGP\sSIGNATURE/.test(armored)) {
    return PGP_SIGNATURE;
  } else if (/(BEGIN|END)\sPGP\sPUBLIC\sKEY\sBLOCK/.test(armored)) {
    return PGP_PUBLIC_KEY;
  } else if (/(BEGIN|END)\sPGP\sPRIVATE\sKEY\sBLOCK/.test(armored)) {
    return PGP_PRIVATE_KEY;
  }
}

function attachExtractFrame(ranges) {
  // check status of PGP ranges
  const newRanges = ranges.filter(range =>
    !isAttached(range.commonAncestorContainer)
  );
  // create new decrypt frames for new discovered PGP tags
  for (const range of newRanges) {
    try {
      switch (getMessageType(range.endContainer.textContent)) {
        case PGP_MESSAGE: {
          const dFrame = new DecryptFrame();
          dFrame.attachTo(range);
          break;
        }
        case PGP_SIGNATURE: {
          const vFrame = new VerifyFrame();
          vFrame.attachTo(range);
          break;
        }
        case PGP_PUBLIC_KEY: {
          const imFrame = new ImportFrame();
          imFrame.attachTo(range);
          break;
        }
      }
    } catch (e) {
      console.log('attachExtractFrame failed:', e);
    }
  }
}

/**
 * attach encrypt frame to element
 * @param  {Array} elements
 */
function attachEncryptFrame(elements) {
  // filter out attached and detached frames
  elements = elements.filter(element => !isAttached(element));
  // create new encrypt frames for new discovered editable fields
  elements.forEach(element => {
    const eFrame = new EncryptFrame();
    eFrame.attachTo(element);
  });
}

function isAttached(element) {
  if (!element) {
    return false;
  }
  const status = element.dataset[FRAME_STATUS];
  switch (status) {
    case FRAME_ATTACHED:
    case FRAME_DETACHED:
      return true;
    default:
      return false;
  }
}

//# sourceURL=cs-mailvelope.js

/******/ })()
;