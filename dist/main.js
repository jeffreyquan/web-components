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

/***/ "./src/app-card/app-card.js":
/*!**********************************!*\
  !*** ./src/app-card/app-card.js ***!
  \**********************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar appCardtTemplate = document.createElement(\"template\");\nappCardtTemplate.innerHTML = \"\\n<style>\\n .card {\\n   padding: 16px;\\n  background-color: grey;\\n  border-radius: 4px;\\n  width: 200px;\\n  height: 200px;\\n }\\n</style>\\n<div class=\\\"card\\\">\\n  <slot></slot>\\n</div>\\n\";\n\nvar AppCard = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(AppCard, _HTMLElement);\n\n  var _super = _createSuper(AppCard);\n\n  function AppCard() {\n    var _this;\n\n    _classCallCheck(this, AppCard);\n\n    _this = _super.call(this);\n\n    var shadow = _this.attachShadow({\n      mode: \"open\"\n    });\n\n    shadow.appendChild(appCardtTemplate.content.cloneNode(true));\n    return _this;\n  }\n\n  return AppCard;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define(\"app-card\", AppCard);\n\n//# sourceURL=webpack://web-components/./src/app-card/app-card.js?");

/***/ }),

/***/ "./src/app-card/index.js":
/*!*******************************!*\
  !*** ./src/app-card/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-card */ \"./src/app-card/app-card.js\");\n/* harmony import */ var _app_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_card__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://web-components/./src/app-card/index.js?");

/***/ }),

/***/ "./src/app-drawer/app-drawer.js":
/*!**************************************!*\
  !*** ./src/app-drawer/app-drawer.js ***!
  \**************************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// https://github.com/wes566/side-drawer\nvar appDrawerTemplate = document.createElement(\"template\");\nappDrawerTemplate.innerHTML = \"<style>\\n:host {\\n  visibility: hidden;\\n  transition: visibility 0.3s;\\n}\\n\\n:host button {\\n  visibility: visible;\\n}\\n\\n:host([open]) {\\n  visibility: visible;\\n}\\n\\n::slotted(div) {\\n  box-sizing: border-box;\\n}\\n\\n#drawer {\\n  position: fixed;\\n  z-index: 100;\\n  width: 50vw;\\n  max-width: 75vw;\\n  background-color: #ffffff;\\n  overflow: auto;\\n  overscroll-behavior: contain;\\n  backdrop-filter: blur(10px);\\n\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  height: 100%;\\n  box-sizing: border-box;\\n  transform: translateX(-100%);\\n  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);\\n  border-top-right-radius: inherit;\\n  border-bottom-right-radius: inherit;\\n}\\n\\n:host([open]) #drawer {\\n  transform: none;\\n  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.5);\\n}\\n\\n#freespace {\\n  position: fixed;\\n  z-index: 98;\\n  background-color: #000000;\\n  backdrop-filter: none;\\n\\n  top: 0;\\n  bottom: 0;\\n  right: -30px; /* hide scrollbar until overscroll bug is fixed */\\n  height: 100vh;\\n  transition: opacity 0.25s ease-in-out 0.25s;\\n  width: calc(\\n    100vw + 30px\\n  ); /* put back to just 100vw once overscroll bug fixed */\\n  opacity: 0;\\n  visibility: hidden;\\n\\n  overflow: auto;\\n  overscroll-behavior: contain;\\n}\\n\\n:host([open]) #freespace {\\n  opacity: 0.7;\\n  visibility: visible;\\n}\\n\\n#ifs {\\n  height: calc(100vh + 1px);\\n}\\n</style>\\n<div>\\n  <button class=\\\"toggle-drawer\\\"></button>\\n  <div id=\\\"drawer\\\"><slot></slot></div>\\n  <div id=\\\"freespace\\\">\\n    <div id=\\\"ifs\\\"></div>\\n  </div>\\n</div>\\n\";\n\nvar AppDrawer = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(AppDrawer, _HTMLElement);\n\n  var _super = _createSuper(AppDrawer);\n\n  function AppDrawer() {\n    var _this;\n\n    _classCallCheck(this, AppDrawer);\n\n    _this = _super.call(this);\n    _this.open = false;\n\n    var shadowRoot = _this.attachShadow({\n      mode: \"open\"\n    });\n\n    shadowRoot.appendChild(appDrawerTemplate.content.cloneNode(true));\n    _this.freeSpaceDiv = shadowRoot.getElementById(\"freespace\");\n    _this.shadowRoot.querySelector(\"button\").innerText = _this.getAttribute(\"name\");\n    return _this;\n  }\n\n  _createClass(AppDrawer, [{\n    key: \"openDrawer\",\n    value: function openDrawer() {\n      this.open = true;\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this2 = this;\n\n      var openButton = this.shadowRoot.querySelector(\".toggle-drawer\");\n      openButton.addEventListener(\"click\", function () {\n        _this2.openDrawer();\n      });\n\n      if (this.freeSpaceDiv) {\n        this.freeSpaceDiv.addEventListener(\"click\", function () {\n          return _this2.handleFreeSpaceDivClick();\n        });\n      }\n\n      this.upgradeProperty(\"open\");\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      document.removeEventListener(\"keyup\", this.handleKeyUp);\n    }\n  }, {\n    key: \"handleKeyUp\",\n    value: function handleKeyUp(event) {\n      if (event.altKey) {\n        return;\n      }\n\n      switch (event.keyCode) {\n        case 27:\n          event.preventDefault();\n          this.open = false;\n          break;\n      }\n    }\n  }, {\n    key: \"upgradeProperty\",\n    value: function upgradeProperty(prop) {\n      if (this.hasOwnProperty(prop)) {\n        var value = this[prop];\n        delete this[prop];\n        this[prop] = value;\n      }\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(attrName, oldVal, newVal) {\n      var _this3 = this;\n\n      if (attrName === \"open\") {\n        if (!this.open) {\n          this.setAttribute(\"tabindex\", \"-1\");\n          this.setAttribute(\"aria-disabled\", \"true\");\n          document.removeEventListener(\"keyup\", function (e) {\n            return _this3.handleKeyUp(e);\n          });\n          this.dispatchEvent(new CustomEvent(\"close\", {\n            bubbles: true\n          }));\n        } else {\n          this.setAttribute(\"tabindex\", \"0\");\n          this.setAttribute(\"aria-disabled\", \"false\");\n          this.focus({\n            preventScroll: true\n          });\n          document.addEventListener(\"keyup\", function (e) {\n            return _this3.handleKeyUp(e);\n          });\n          this.dispatchEvent(new CustomEvent(\"open\", {\n            bubbles: true\n          }));\n        }\n      }\n    }\n  }, {\n    key: \"handleFreeSpaceDivClick\",\n    value: function handleFreeSpaceDivClick(event) {\n      this.open = false;\n    }\n  }, {\n    key: \"open\",\n    get: function get() {\n      return this.hasAttribute(\"open\");\n    },\n    set: function set(isOpen) {\n      if (isOpen) {\n        if (!this.hasAttribute(\"open\")) {\n          this.setAttribute(\"open\", \"\");\n        }\n      } else {\n        if (this.hasAttribute(\"open\")) {\n          this.removeAttribute(\"open\");\n        }\n      }\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return [\"open\"];\n    }\n  }]);\n\n  return AppDrawer;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define(\"app-drawer\", AppDrawer);\n\n//# sourceURL=webpack://web-components/./src/app-drawer/app-drawer.js?");

/***/ }),

/***/ "./src/app-drawer/index.js":
/*!*********************************!*\
  !*** ./src/app-drawer/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-drawer */ \"./src/app-drawer/app-drawer.js\");\n/* harmony import */ var _app_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_drawer__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://web-components/./src/app-drawer/index.js?");

/***/ }),

/***/ "./src/app-user-card/app-user-card.js":
/*!********************************************!*\
  !*** ./src/app-user-card/app-user-card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.html */ \"./src/app-user-card/template.html\");\n/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/app-user-card/style.css\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// https://www.youtube.com/watch?v=PCWaFLy3VUo&ab_channel=TraversyMedia\n\n\nvar appUserCardTemplate = document.createElement(\"template\");\nappUserCardTemplate.innerHTML = \"\\n<style>\\n\".concat(_style_css__WEBPACK_IMPORTED_MODULE_1__.default, \"\\n</style>\\n\").concat((_template_html__WEBPACK_IMPORTED_MODULE_0___default()), \"\\n\");\n\nvar AppUserCard = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(AppUserCard, _HTMLElement);\n\n  var _super = _createSuper(AppUserCard);\n\n  function AppUserCard() {\n    var _this;\n\n    _classCallCheck(this, AppUserCard);\n\n    _this = _super.call(this);\n    _this.showInfo = true;\n\n    _this.attachShadow({\n      mode: \"open\"\n    });\n\n    _this.shadowRoot.appendChild(appUserCardTemplate.content.cloneNode(true));\n\n    _this.shadowRoot.querySelector(\"h3\").innerText = _this.getAttribute(\"name\");\n    _this.shadowRoot.querySelector(\"img\").src = _this.getAttribute(\"avatar\");\n    return _this;\n  }\n\n  _createClass(AppUserCard, [{\n    key: \"toggleInfo\",\n    value: function toggleInfo() {\n      this.showInfo = !this.showInfo;\n      var info = this.shadowRoot.querySelector(\".info\");\n      var toggleBtn = this.shadowRoot.querySelector(\"#toggle-info\");\n\n      if (this.showInfo) {\n        info.style.display = \"block\";\n        toggleBtn.innerText = \"Hide Info\";\n      } else {\n        info.style.display = \"none\";\n        toggleBtn.innerText = \"Show Info\";\n      }\n    }\n  }, {\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var _this2 = this;\n\n      this.shadowRoot.querySelector(\"#toggle-info\").addEventListener(\"click\", function () {\n        _this2.toggleInfo();\n      });\n    }\n  }, {\n    key: \"disconnectedCallback\",\n    value: function disconnectedCallback() {\n      this.shadowRoot.querySelector(\"#toggle-info\").removeEventListener();\n    }\n  }]);\n\n  return AppUserCard;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nwindow.customElements.define(\"app-user-card\", AppUserCard);\n\n//# sourceURL=webpack://web-components/./src/app-user-card/app-user-card.js?");

/***/ }),

/***/ "./src/app-user-card/index.js":
/*!************************************!*\
  !*** ./src/app-user-card/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_user_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-user-card */ \"./src/app-user-card/app-user-card.js\");\n\n\n//# sourceURL=webpack://web-components/./src/app-user-card/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-card */ \"./src/app-card/index.js\");\n/* harmony import */ var _app_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-drawer */ \"./src/app-drawer/index.js\");\n/* harmony import */ var _app_user_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-user-card */ \"./src/app-user-card/index.js\");\n\n\n\n\n//# sourceURL=webpack://web-components/./src/index.js?");

/***/ }),

/***/ "./src/app-user-card/style.css":
/*!*************************************!*\
  !*** ./src/app-user-card/style.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".user-card {\\n  font-family: \\\"Arial\\\", sans-serif;\\n  background: #f4f4f4;\\n  width: 500px;\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-gap: 10px;\\n  margin-bottom: 15px;\\n  border-bottom: darkorchid 5px solid;\\n}\\n\\n.user-card img {\\n  width: 100%;\\n}\\n\\n.user-card button {\\n  cursor: pointer;\\n  background: darkorchid;\\n  color: #fff;\\n  border: 0;\\n  border-radius: 5px;\\n  padding: 5px 10px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-components/./src/app-user-card/style.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://web-components/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/app-user-card/template.html":
/*!*****************************************!*\
  !*** ./src/app-user-card/template.html ***!
  \*****************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"user-card\\\">\\n  <img />\\n  <div>\\n    <h3></h3>\\n    <div class=\\\"info\\\">\\n      <p><slot name=\\\"email\\\" /></p>\\n      <p><slot name=\\\"phone\\\" /></p>\\n    </div>\\n    <button id=\\\"toggle-info\\\">Hide Info</button>\\n  </div>\\n</div>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://web-components/./src/app-user-card/template.html?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;