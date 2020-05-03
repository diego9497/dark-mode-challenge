module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _src_components_Summary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Summary */ "./src/components/Summary/index.js");
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = props => {
  return __jsx(_src_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_src_components_Summary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/ContextTheme.js":
/*!*****************************!*\
  !*** ./src/ContextTheme.js ***!
  \*****************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\ContextTheme.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const Provider = ({
  children
}) => {
  const {
    0: isDarkMode,
    1: setIsDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)"));

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode();
    }
  }, []);
  const value = {
    isDarkMode,
    setIsDarkMode: () => {
      setIsDarkMode(!isDarkMode);
    }
  };
  return __jsx(Context.Provider, {
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  Provider,
  Consumer: Context.Consumer
});

/***/ }),

/***/ "./src/components/BorderCard/index.js":
/*!********************************************!*\
  !*** ./src/components/BorderCard/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/BorderCard/styles.js");
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\components\\BorderCard\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BorderCard = ({
  src = "/images/icon-facebook.svg",
  username = "diego9497",
  followers = 3222,
  followersChange = 30,
  increase = true,
  border = "red",
  borderHover
}) => {
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    border: border,
    borderHover: borderHover ? borderHover : border,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["UsernameContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: src,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Username"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, username)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["FollowersContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Followers"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, followers), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Followers")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Today"], {
    increase: increase,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, followersChange, " Today"));
};

/* harmony default export */ __webpack_exports__["default"] = (BorderCard);

/***/ }),

/***/ "./src/components/BorderCard/styles.js":
/*!*********************************************!*\
  !*** ./src/components/BorderCard/styles.js ***!
  \*********************************************/
/*! exports provided: Card, UsernameContainer, Username, FollowersContainer, Followers, Today */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameContainer", function() { return UsernameContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Username", function() { return Username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowersContainer", function() { return FollowersContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Followers", function() { return Followers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Today", function() { return Today; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 4px;
    background: ${prop => prop.border};
  }

  &:hover {
    background: ${props => props.theme.colors.cardBackgroundHover};

    ::before {
      background: ${prop => prop.borderHover};
    }
  }
`;
const UsernameContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  display: flex;
  align-items: center;
`;
const Username = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  color: ${props => props.theme.colors.text};
  font-weight: 700;
  font-size: 12px;
  margin-left: 13px;
`;
const FollowersContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  span {
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
    font-size: 11.5px;
    letter-spacing: 4px;
  }
`;
const Followers = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  font-size: 2.7em;
  font-weight: 700;
  color: ${props => props.theme.colors.title};
`;
const Today = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  position: relative;
  font-size: 13px;
  padding: 0 15px;
  font-weight: 700;
  color: ${props => props.increase ? props.theme.colors.limeGreen : props.theme.colors.brightRed};

  ::before {
    content: "";
    background: ${props => props.increase ? "url(/images/icon-up.svg)" : "url(/images/icon-down.svg)"};
    display: block;
    background-repeat: no-repeat;
    height: 5px;
    width: 11px;
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
  }
`;

/***/ }),

/***/ "./src/components/Summary/index.js":
/*!*****************************************!*\
  !*** ./src/components/Summary/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BorderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BorderCard */ "./src/components/BorderCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Summary/styles.js");
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\components\\Summary\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Summary = props => {
  const data = [{
    id: 1,
    border: "#1CA0F2",
    src: "/images/icon-facebook.svg"
  }, {
    id: 2,
    border: "#00BFFF",
    src: "/images/icon-twitter.svg"
  }, {
    id: 3,
    border: "linear-gradient(to right, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
    borderHover: "linear-gradient(to right, hsl(329, 70%, 58%)  0%,  hsl(37, 97%, 70%) 100%)",
    src: "/images/icon-instagram.svg"
  }, {
    id: 4,
    border: "#C4032A",
    borderHover: "#C4032A",
    src: "/images/icon-youtube.svg",
    increase: false,
    followersChange: 10
  }];
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, data.map(el => __jsx(_BorderCard__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, el, {
    key: el.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./src/components/Summary/styles.js":
/*!******************************************!*\
  !*** ./src/components/Summary/styles.js ***!
  \******************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/header/styles.js");
/* harmony import */ var _ContextTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ContextTheme */ "./src/ContextTheme.js");
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\components\\header\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HeaderComponent = props => {
  const {
    isDarkMode,
    setIsDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ContextTheme__WEBPACK_IMPORTED_MODULE_2__["Context"]);
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["TitleWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Social Media Dashboard"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Total Followers: 23,004")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["SwitchContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Dark mode"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    htmlFor: "dark-mode",
    checked: isDarkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "checkbox",
    id: "dark-mode",
    onChange: () => {
      setIsDarkMode();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./src/components/header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/header/styles.js ***!
  \*****************************************/
/*! exports provided: Header, HeaderContent, TitleWrapper, Title, Text, SwitchContainer, Switch, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchContainer", function() { return SwitchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header`
  background: ${props => props.theme.colors.topBackground};
`;
const HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 20px;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 100px;
  margin-bottom: -100px;

  @media (max-width: 375px) {
    display: block;
  }
`;
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  @media (max-width: 375px) {
    border-bottom: 1px solid ${props => props.theme.colors.text};
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  color: ${props => props.theme.colors.title};
  font-size: 24px;
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  color: ${props => props.theme.colors.text};
  font-size: 12px;
  font-weight: 700;
`;
const SwitchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 375px) {
    justify-content: space-between;
  }
`;
const Switch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label`
  margin-left: 10px;
  width: 55px;
  height: 26px;
  background: ${props => props.theme.colors.toggle};
  border-radius: 16px;

  ::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-top: 3px;
    margin-left: 3px;
    background: ${props => props.theme.colors.background};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${props => props.checked ? "translateX(29px)" : "translateX(0px)"};
  }
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  display: none;
`;

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalStyles */ "./src/styles/GlobalStyles.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "./src/components/header/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _themes_dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../themes/dark */ "./src/themes/dark.js");
/* harmony import */ var _themes_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../themes/light */ "./src/themes/light.js");
/* harmony import */ var _ContextTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ContextTheme */ "./src/ContextTheme.js");
var _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\components\\layout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Layout = ({
  children
}) => {
  const {
    isDarkMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ContextTheme__WEBPACK_IMPORTED_MODULE_7__["Context"]);
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: isDarkMode ? _themes_dark__WEBPACK_IMPORTED_MODULE_5__["default"] : _themes_light__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["GlobalStyles"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/*! exports provided: GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  html {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: ${props => props.theme.colors.background};
    transition: all 0.14s ease-in;
  }

`;

/***/ }),

/***/ "./src/themes/dark.js":
/*!****************************!*\
  !*** ./src/themes/dark.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    background: "hsl(230, 17%, 14%)",
    topBackground: " hsl(232, 19%, 15%)",
    cardBackground: "hsl(228, 28%, 20%)",
    cardBackgroundHover: "#333A56",
    title: "hsl(0, 0%, 100%)",
    text: "hsl(228, 34%, 66%)",
    toggle: "linear-gradient(to right, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%)",
    limeGreen: "hsl(163, 72%, 41%)",
    brightRed: "hsl(356, 69%, 56%)",
    facebook: "hsl(195, 100%, 50%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(to right, hsl(37, 97%, 70%) 0%,  hsl(329, 70%, 58%) 100%)",
    youTube: "hsl(348, 97%, 39%)"
  }
});

/***/ }),

/***/ "./src/themes/light.js":
/*!*****************************!*\
  !*** ./src/themes/light.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    background: "hsl(0, 0%, 100%)",
    topBackground: "hsl(225, 100%, 98%)",
    cardBackground: "hsl(227, 47%, 96%)",
    cardBackgroundHover: "#E1E3F0",
    title: "hsl(230, 17%, 14%)",
    text: "hsl(228, 12%, 44%)",
    toggle: "hsl(230, 22%, 74%)",
    limeGreen: "hsl(163, 72%, 41%)",
    brightRed: "hsl(356, 69%, 56%)",
    facebook: "hsl(195, 100%, 50%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: "linear-gradient(to right, hsl(37, 97%, 70%) 0%, hsl(329, 70%, 58%) 100%)",
    youTube: "hsl(348, 97%, 39%)"
  }
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\diego\Documents\Proyectos\React\dark-mode\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map