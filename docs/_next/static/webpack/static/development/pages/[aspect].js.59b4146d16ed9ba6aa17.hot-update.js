webpackHotUpdate("static/development/pages/[aspect].js",{

/***/ "./src/features/scriptResult/ResultSelect.tsx":
/*!****************************************************!*\
  !*** ./src/features/scriptResult/ResultSelect.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ \"./src/features/scriptResult/selector.ts\");\n/* harmony import */ var _scriptResultEntity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scriptResultEntity */ \"./src/features/scriptResult/scriptResultEntity.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.chen/src/ccpa-script/src/features/scriptResult/ResultSelect.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar _scriptResultAdapter$ = _scriptResultEntity__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getSelectors(_selector__WEBPACK_IMPORTED_MODULE_3__[\"selectScriptResult\"]),\n    selectScriptResultIds = _scriptResultAdapter$.selectIds;\n\nvar ResultSelect = function ResultSelect() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('notes'),\n      selection = _useState[0],\n      setSelection = _useState[1];\n\n  var scriptResultIds = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(selectScriptResultIds);\n  var options = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return ['notes'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scriptResultIds));\n  }, []);\n\n  var handleChange = function handleChange(e) {\n    setSelection(e.target.value);\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"select\", {\n    value: selection,\n    onChange: handleChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, options.map(function (option) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"option\", {\n      value: option,\n      key: option,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, option);\n  }))));\n};\n\n_s(ResultSelect, \"x3bGreKqf5uIBJFdr7oajEJ98k4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"]];\n});\n\n_c = ResultSelect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultSelect);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResultSelect\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2NyaXB0UmVzdWx0L1Jlc3VsdFNlbGVjdC50c3g/ZTY1MCJdLCJuYW1lcyI6WyJzY3JpcHRSZXN1bHRBZGFwdGVyIiwiZ2V0U2VsZWN0b3JzIiwic2VsZWN0U2NyaXB0UmVzdWx0Iiwic2VsZWN0U2NyaXB0UmVzdWx0SWRzIiwic2VsZWN0SWRzIiwiUmVzdWx0U2VsZWN0IiwidXNlU3RhdGUiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJzY3JpcHRSZXN1bHRJZHMiLCJ1c2VTZWxlY3RvciIsIm9wdGlvbnMiLCJ1c2VNZW1vIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OzRCQUU2Q0EsMkRBQW1CLENBQUNDLFlBQXBCLENBQzNDQyw0REFEMkMsQztJQUExQkMscUIseUJBQVhDLFM7O0FBSVIsSUFBTUMsWUFBZ0IsR0FBRyxTQUFuQkEsWUFBbUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLE9BQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBRTdCLE1BQU1DLGVBQWUsR0FBR0MsK0RBQVcsQ0FBQ1AscUJBQUQsQ0FBbkM7QUFDQSxNQUFNUSxPQUFPLEdBQUdDLHFEQUFPLENBQUM7QUFBQSxZQUFPLE9BQVAsc0dBQW1CSCxlQUFuQjtBQUFBLEdBQUQsRUFBc0MsRUFBdEMsQ0FBdkI7O0FBQ0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUF1QztBQUMxRE4sZ0JBQVksQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsU0FBSyxFQUFFVCxTQUFmO0FBQTBCLFlBQVEsRUFBRU0sWUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRixPQUFPLENBQUNNLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsV0FDWDtBQUFRLFdBQUssRUFBRUEsTUFBZjtBQUF1QixTQUFHLEVBQUVBLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0EsTUFESCxDQURXO0FBQUEsR0FBWixDQURILENBREYsQ0FERixDQURGO0FBYUQsQ0FwQkQ7O0dBQU1iLFk7VUFFb0JLLHVEOzs7S0FGcEJMLFk7QUFzQlNBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL3NjcmlwdFJlc3VsdC9SZXN1bHRTZWxlY3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlTWVtbywgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbGVjdFNjcmlwdFJlc3VsdCB9IGZyb20gJy4vc2VsZWN0b3InO1xuaW1wb3J0IHNjcmlwdFJlc3VsdEFkYXB0ZXIgZnJvbSAnLi9zY3JpcHRSZXN1bHRFbnRpdHknO1xuXG5jb25zdCB7IHNlbGVjdElkczogc2VsZWN0U2NyaXB0UmVzdWx0SWRzIH0gPSBzY3JpcHRSZXN1bHRBZGFwdGVyLmdldFNlbGVjdG9ycyhcbiAgc2VsZWN0U2NyaXB0UmVzdWx0XG4pO1xuXG5jb25zdCBSZXN1bHRTZWxlY3Q6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoJ25vdGVzJyk7XG4gIGNvbnN0IHNjcmlwdFJlc3VsdElkcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFNjcmlwdFJlc3VsdElkcykgYXMgc3RyaW5nW107XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IFsnbm90ZXMnLCAuLi5zY3JpcHRSZXN1bHRJZHNdLCBbXSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWxlY3Rpb24oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3Rpb259IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtvcHRpb259IGtleT17b3B0aW9ufT5cbiAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0U2VsZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/scriptResult/ResultSelect.tsx\n");

/***/ })

})