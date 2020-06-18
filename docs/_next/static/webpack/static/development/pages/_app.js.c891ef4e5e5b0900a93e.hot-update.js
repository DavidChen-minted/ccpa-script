webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/choiceControl/choiceControlSlice.ts":
/*!**********************************************************!*\
  !*** ./src/features/choiceControl/choiceControlSlice.ts ***!
  \**********************************************************/
/*! exports provided: default, choiceControlReceived, importRawChoiceControl, updateSelectedChoiceId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"choiceControlReceived\", function() { return choiceControlReceived; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importRawChoiceControl\", function() { return importRawChoiceControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateSelectedChoiceId\", function() { return updateSelectedChoiceId; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _choiceControlEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choiceControlEntity */ \"./src/features/choiceControl/choiceControlEntity.ts\");\n/* harmony import */ var _importToChoiceControlState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importToChoiceControlState */ \"./src/features/choiceControl/importToChoiceControlState.ts\");\n/* eslint-disable no-param-reassign */\n\n\n\nvar choiceControlSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'choiceControl',\n  initialState: _choiceControlEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getInitialState(),\n  reducers: {\n    choiceControlReceived: function choiceControlReceived(state, action) {\n      if (!action.payload) {\n        return state;\n      }\n\n      return action.payload;\n    },\n    importRawChoiceControl: function importRawChoiceControl(state, action) {\n      var choiceControl = Object(_importToChoiceControlState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(action.payload);\n      return choiceControl || state;\n    },\n    updateSelectedChoiceId: function updateSelectedChoiceId(state, action) {\n      _choiceControlEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateOne(state, {\n        id: action.payload.stepId,\n        changes: {\n          selectedChoiceId: action.payload.choiceId\n        }\n      });\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (choiceControlSlice.reducer);\nvar _choiceControlSlice$a = choiceControlSlice.actions,\n    choiceControlReceived = _choiceControlSlice$a.choiceControlReceived,\n    importRawChoiceControl = _choiceControlSlice$a.importRawChoiceControl,\n    updateSelectedChoiceId = _choiceControlSlice$a.updateSelectedChoiceId;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY2hvaWNlQ29udHJvbC9jaG9pY2VDb250cm9sU2xpY2UudHM/ZDYyMyJdLCJuYW1lcyI6WyJjaG9pY2VDb250cm9sU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjaG9pY2VDb250cm9sQWRhcHRlciIsImdldEluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwiY2hvaWNlQ29udHJvbFJlY2VpdmVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaW1wb3J0UmF3Q2hvaWNlQ29udHJvbCIsImNob2ljZUNvbnRyb2wiLCJpbXBvcnRUb0Nob2ljZUNvbnRyb2xTdGF0ZSIsInVwZGF0ZVNlbGVjdGVkQ2hvaWNlSWQiLCJ1cGRhdGVPbmUiLCJpZCIsInN0ZXBJZCIsImNoYW5nZXMiLCJzZWxlY3RlZENob2ljZUlkIiwiY2hvaWNlSWQiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUlBLElBQU1BLGtCQUFrQixHQUFHQyxvRUFBVyxDQUFDO0FBQ3JDQyxNQUFJLEVBQUUsZUFEK0I7QUFFckNDLGNBQVksRUFBRUMsNERBQW9CLENBQUNDLGVBQXJCLEVBRnVCO0FBR3JDQyxVQUFRLEVBQUU7QUFDUkMseUJBQXFCLEVBQUUsK0JBQ3JCQyxLQURxQixFQUVyQkMsTUFGcUIsRUFHbEI7QUFDSCxVQUFJLENBQUNBLE1BQU0sQ0FBQ0MsT0FBWixFQUFxQjtBQUNuQixlQUFPRixLQUFQO0FBQ0Q7O0FBQ0QsYUFBT0MsTUFBTSxDQUFDQyxPQUFkO0FBQ0QsS0FUTztBQVVSQywwQkFBc0IsRUFBRSxnQ0FDdEJILEtBRHNCLEVBRXRCQyxNQUZzQixFQUduQjtBQUNILFVBQU1HLGFBQWEsR0FBR0MsMkVBQTBCLENBQUNKLE1BQU0sQ0FBQ0MsT0FBUixDQUFoRDtBQUNBLGFBQU9FLGFBQWEsSUFBSUosS0FBeEI7QUFDRCxLQWhCTztBQWlCUk0sMEJBQXNCLEVBQUUsZ0NBQ3RCTixLQURzQixFQUV0QkMsTUFGc0IsRUFNbkI7QUFDSEwsa0VBQW9CLENBQUNXLFNBQXJCLENBQStCUCxLQUEvQixFQUFzQztBQUNwQ1EsVUFBRSxFQUFFUCxNQUFNLENBQUNDLE9BQVAsQ0FBZU8sTUFEaUI7QUFFcENDLGVBQU8sRUFBRTtBQUFFQywwQkFBZ0IsRUFBRVYsTUFBTSxDQUFDQyxPQUFQLENBQWVVO0FBQW5DO0FBRjJCLE9BQXRDO0FBSUQ7QUE1Qk87QUFIMkIsQ0FBRCxDQUF0QztBQW1DZXBCLGlGQUFrQixDQUFDcUIsT0FBbEM7NEJBVUlyQixrQkFBa0IsQ0FBQ3NCLE87SUFIckJmLHFCLHlCQUFBQSxxQjtJQUNBSSxzQix5QkFBQUEsc0I7SUFDQUcsc0IseUJBQUFBLHNCIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL2Nob2ljZUNvbnRyb2wvY2hvaWNlQ29udHJvbFNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgY2hvaWNlQ29udHJvbEFkYXB0ZXIsIHtcbiAgQ2hvaWNlQ29udHJvbCxcbiAgQ2hvaWNlQ29udHJvbEVudGl0eVN0YXRlLFxufSBmcm9tICcuL2Nob2ljZUNvbnRyb2xFbnRpdHknO1xuaW1wb3J0IGltcG9ydFRvQ2hvaWNlQ29udHJvbFN0YXRlIGZyb20gJy4vaW1wb3J0VG9DaG9pY2VDb250cm9sU3RhdGUnO1xuXG5leHBvcnQgdHlwZSBDaG9pY2VDb250cm9sU3RhdGUgPSBDaG9pY2VDb250cm9sRW50aXR5U3RhdGU7XG5cbmNvbnN0IGNob2ljZUNvbnRyb2xTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2Nob2ljZUNvbnRyb2wnLFxuICBpbml0aWFsU3RhdGU6IGNob2ljZUNvbnRyb2xBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxuICByZWR1Y2Vyczoge1xuICAgIGNob2ljZUNvbnRyb2xSZWNlaXZlZDogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248Q2hvaWNlQ29udHJvbFN0YXRlIHwgdW5kZWZpbmVkPlxuICAgICkgPT4ge1xuICAgICAgaWYgKCFhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBpbXBvcnRSYXdDaG9pY2VDb250cm9sOiAoXG4gICAgICBzdGF0ZSxcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxDaG9pY2VDb250cm9sW10gfCB1bmRlZmluZWQ+XG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBjaG9pY2VDb250cm9sID0gaW1wb3J0VG9DaG9pY2VDb250cm9sU3RhdGUoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIGNob2ljZUNvbnRyb2wgfHwgc3RhdGU7XG4gICAgfSxcbiAgICB1cGRhdGVTZWxlY3RlZENob2ljZUlkOiAoXG4gICAgICBzdGF0ZSxcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XG4gICAgICAgIHN0ZXBJZDogc3RyaW5nO1xuICAgICAgICBjaG9pY2VJZDogQ2hvaWNlQ29udHJvbFsnc2VsZWN0ZWRDaG9pY2VJZCddO1xuICAgICAgfT5cbiAgICApID0+IHtcbiAgICAgIGNob2ljZUNvbnRyb2xBZGFwdGVyLnVwZGF0ZU9uZShzdGF0ZSwge1xuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuc3RlcElkLFxuICAgICAgICBjaGFuZ2VzOiB7IHNlbGVjdGVkQ2hvaWNlSWQ6IGFjdGlvbi5wYXlsb2FkLmNob2ljZUlkIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNob2ljZUNvbnRyb2xTbGljZS5yZWR1Y2VyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENob2ljZUNvbnRyb2xTdGF0ZSB7XG4gIGNob2ljZUNvbnRyb2w6IENob2ljZUNvbnRyb2xTdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHtcbiAgY2hvaWNlQ29udHJvbFJlY2VpdmVkLFxuICBpbXBvcnRSYXdDaG9pY2VDb250cm9sLFxuICB1cGRhdGVTZWxlY3RlZENob2ljZUlkLFxufSA9IGNob2ljZUNvbnRyb2xTbGljZS5hY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/choiceControl/choiceControlSlice.ts\n");

/***/ })

})