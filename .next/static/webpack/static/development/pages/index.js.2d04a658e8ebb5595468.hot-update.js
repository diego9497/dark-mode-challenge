webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  font-size: 13px;\n  padding: 0 15px;\n  font-weight: 700;\n  color: ", ";\n\n  ::before {\n    content: \"\";\n    background: ", ";\n    display: block;\n    background-repeat: no-repeat;\n    height: 5px;\n    width: 11px;\n    position: absolute;\n    top: 6px;\n    left: 0;\n    right: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2.7em;\n  font-weight: 700;\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n\n  span {\n    text-transform: uppercase;\n    color: ", ";\n    font-size: 11.5px;\n    letter-spacing: 4px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-weight: 700;\n  font-size: 12px;\n  margin-left: 13px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  border-radius: 8px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  ::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 4px;\n    background: ", ";\n  }\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.theme.colors.cardBackground;
}, function (prop) {
  return prop.border;
}, function (props) {
  return props.theme.colors.cardBackgroundHover;
});
var UsernameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject2());
var Username = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject3(), function (props) {
  return props.theme.colors.text;
});
var FollowersContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), function (props) {
  return props.theme.colors.text;
});
var Followers = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5(), function (props) {
  return props.theme.colors.title;
});
var Today = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject6(), function (props) {
  return props.increase ? props.theme.colors.limeGreen : props.theme.colors.brightRed;
}, function (props) {
  return props.increase ? "url(/images/icon-up.svg)" : "url(/images/icon-down.svg)";
});

/***/ })

})
//# sourceMappingURL=index.js.2d04a658e8ebb5595468.hot-update.js.map