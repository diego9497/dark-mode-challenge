webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Summary/index.js":
/*!*****************************************!*\
  !*** ./src/components/Summary/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BorderCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BorderCard */ "./src/components/BorderCard/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Summary/styles.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\diego\\Documents\\Proyectos\\React\\dark-mode\\src\\components\\Summary\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Summary = function Summary(props) {
  var data = [{
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
    src: "/images/icon-instagram.svg"
  }, {
    id: 4,
    border: "#C4032A",
    src: "/images/icon-youtube.svg",
    increase: false,
    followersChange: 10
  }];
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, data.map(function (el) {
    return __jsx(_BorderCard__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
      key: el.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ })

})
//# sourceMappingURL=index.js.8fa880efb09c0b4568cb.hot-update.js.map