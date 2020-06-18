webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/databaseScript/databaseScriptSlice.ts":
/*!************************************************************!*\
  !*** ./src/features/databaseScript/databaseScriptSlice.ts ***!
  \************************************************************/
/*! exports provided: default, importParsedDatabaseScripts, updateScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importParsedDatabaseScripts\", function() { return importParsedDatabaseScripts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScript\", function() { return updateScript; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./databaseScriptEntity */ \"./src/features/databaseScript/databaseScriptEntity.ts\");\n/* eslint-disable no-param-reassign */\n\n\nvar databaseScriptSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'databaseScript',\n  initialState: {\n    scripts: {}\n  },\n  reducers: {\n    databaseScriptReceived: function databaseScriptReceived(state, action) {},\n    importParsedDatabaseScripts: function importParsedDatabaseScripts(state, action) {\n      if (!action.payload.scripts) {\n        return state;\n      }\n\n      var scripts = action.payload.scripts;\n      state.scripts = action.payload.types.reduce(function (obj, scriptType) {\n        obj[scriptType] = _databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setAll(_databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getInitialState(), scripts[scriptType]);\n        return obj;\n      }, {});\n      return state;\n    },\n    updateScript: function updateScript(state, action) {\n      var _action$payload = action.payload,\n          stepId = _action$payload.stepId,\n          scriptType = _action$payload.scriptType,\n          script = _action$payload.script;\n\n      if (stepId && scriptType) {\n        _databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateOne(state.scripts[scriptType], {\n          id: stepId,\n          changes: {\n            script: script\n          }\n        });\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (databaseScriptSlice.reducer);\nvar _databaseScriptSlice$ = databaseScriptSlice.actions,\n    importParsedDatabaseScripts = _databaseScriptSlice$.importParsedDatabaseScripts,\n    updateScript = _databaseScriptSlice$.updateScript;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGF0YWJhc2VTY3JpcHQvZGF0YWJhc2VTY3JpcHRTbGljZS50cz8xNjQ3Il0sIm5hbWVzIjpbImRhdGFiYXNlU2NyaXB0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJzY3JpcHRzIiwicmVkdWNlcnMiLCJkYXRhYmFzZVNjcmlwdFJlY2VpdmVkIiwic3RhdGUiLCJhY3Rpb24iLCJpbXBvcnRQYXJzZWREYXRhYmFzZVNjcmlwdHMiLCJwYXlsb2FkIiwidHlwZXMiLCJyZWR1Y2UiLCJvYmoiLCJzY3JpcHRUeXBlIiwiZGF0YWJhc2VTY3JpcHRBZGFwdGVyIiwic2V0QWxsIiwiZ2V0SW5pdGlhbFN0YXRlIiwidXBkYXRlU2NyaXB0Iiwic3RlcElkIiwic2NyaXB0IiwidXBkYXRlT25lIiwiaWQiLCJjaGFuZ2VzIiwicmVkdWNlciIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFhQSxJQUFNQSxtQkFBbUIsR0FBR0Msb0VBQVcsQ0FBQztBQUN0Q0MsTUFBSSxFQUFFLGdCQURnQztBQUV0Q0MsY0FBWSxFQUFFO0FBQ1pDLFdBQU8sRUFBRTtBQURHLEdBRndCO0FBS3RDQyxVQUFRLEVBQUU7QUFDUkMsMEJBQXNCLEVBQUUsZ0NBQ3RCQyxLQURzQixFQUV0QkMsTUFGc0IsRUFHbkIsQ0FBRSxDQUpDO0FBS1JDLCtCQUEyQixFQUFFLHFDQUMzQkYsS0FEMkIsRUFFM0JDLE1BRjJCLEVBR3hCO0FBQ0gsVUFBSSxDQUFDQSxNQUFNLENBQUNFLE9BQVAsQ0FBZU4sT0FBcEIsRUFBNkI7QUFDM0IsZUFBT0csS0FBUDtBQUNEOztBQUhFLFVBSUtILE9BSkwsR0FJaUJJLE1BQU0sQ0FBQ0UsT0FKeEIsQ0FJS04sT0FKTDtBQUtIRyxXQUFLLENBQUNILE9BQU4sR0FBZ0JJLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxLQUFmLENBQXFCQyxNQUFyQixDQUNkLFVBQUNDLEdBQUQsRUFBTUMsVUFBTixFQUFxQjtBQUNuQkQsV0FBRyxDQUFDQyxVQUFELENBQUgsR0FBa0JDLDZEQUFxQixDQUFDQyxNQUF0QixDQUNoQkQsNkRBQXFCLENBQUNFLGVBQXRCLEVBRGdCLEVBRWhCYixPQUFPLENBQUNVLFVBQUQsQ0FGUyxDQUFsQjtBQUlBLGVBQU9ELEdBQVA7QUFDRCxPQVBhLEVBUWQsRUFSYyxDQUFoQjtBQVVBLGFBQU9OLEtBQVA7QUFDRCxLQXhCTztBQXlCUlcsZ0JBQVksRUFBRSxzQkFDWlgsS0FEWSxFQUVaQyxNQUZZLEVBT1Q7QUFBQSw0QkFDb0NBLE1BQU0sQ0FBQ0UsT0FEM0M7QUFBQSxVQUNLUyxNQURMLG1CQUNLQSxNQURMO0FBQUEsVUFDYUwsVUFEYixtQkFDYUEsVUFEYjtBQUFBLFVBQ3lCTSxNQUR6QixtQkFDeUJBLE1BRHpCOztBQUVILFVBQUlELE1BQU0sSUFBSUwsVUFBZCxFQUEwQjtBQUN4QkMscUVBQXFCLENBQUNNLFNBQXRCLENBQWdDZCxLQUFLLENBQUNILE9BQU4sQ0FBY1UsVUFBZCxDQUFoQyxFQUEyRDtBQUN6RFEsWUFBRSxFQUFFSCxNQURxRDtBQUV6REksaUJBQU8sRUFBRTtBQUFFSCxrQkFBTSxFQUFOQTtBQUFGO0FBRmdELFNBQTNEO0FBSUQ7QUFDRjtBQXhDTztBQUw0QixDQUFELENBQXZDO0FBaURlcEIsa0ZBQW1CLENBQUN3QixPQUFuQzs0QkFTSXhCLG1CQUFtQixDQUFDeUIsTztJQUZ0QmhCLDJCLHlCQUFBQSwyQjtJQUNBUyxZLHlCQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL2RhdGFiYXNlU2NyaXB0L2RhdGFiYXNlU2NyaXB0U2xpY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBkYXRhYmFzZVNjcmlwdEFkYXB0ZXIsIHtcbiAgRGF0YWJhc2VTY3JpcHQsXG4gIGRhdGFiYXNlU2NyaXB0RW50aXR5U3RhdGUsXG59IGZyb20gJy4vZGF0YWJhc2VTY3JpcHRFbnRpdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlU2NyaXB0c1N0YXRlIHtcbiAgW2tleTogc3RyaW5nXTogZGF0YWJhc2VTY3JpcHRFbnRpdHlTdGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYmFzZVNjcmlwdFN0YXRlIHtcbiAgc2NyaXB0czogRGF0YWJhc2VTY3JpcHRzU3RhdGU7XG59XG5cbmNvbnN0IGRhdGFiYXNlU2NyaXB0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdkYXRhYmFzZVNjcmlwdCcsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHNjcmlwdHM6IHt9LFxuICB9IGFzIERhdGFiYXNlU2NyaXB0U3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgZGF0YWJhc2VTY3JpcHRSZWNlaXZlZDogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248SW1wb3J0UGFyc2VkRGF0YWJhc2VTY3JpcHRzUGF5bG9hZD5cbiAgICApID0+IHt9LFxuICAgIGltcG9ydFBhcnNlZERhdGFiYXNlU2NyaXB0czogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248SW1wb3J0UGFyc2VkRGF0YWJhc2VTY3JpcHRzUGF5bG9hZD5cbiAgICApID0+IHtcbiAgICAgIGlmICghYWN0aW9uLnBheWxvYWQuc2NyaXB0cykge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHNjcmlwdHMgfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgc3RhdGUuc2NyaXB0cyA9IGFjdGlvbi5wYXlsb2FkLnR5cGVzLnJlZHVjZTxEYXRhYmFzZVNjcmlwdHNTdGF0ZT4oXG4gICAgICAgIChvYmosIHNjcmlwdFR5cGUpID0+IHtcbiAgICAgICAgICBvYmpbc2NyaXB0VHlwZV0gPSBkYXRhYmFzZVNjcmlwdEFkYXB0ZXIuc2V0QWxsKFxuICAgICAgICAgICAgZGF0YWJhc2VTY3JpcHRBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICAgICAgc2NyaXB0c1tzY3JpcHRUeXBlXVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgICB1cGRhdGVTY3JpcHQ6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcbiAgICAgICAgc3RlcElkOiBzdHJpbmc7XG4gICAgICAgIHNjcmlwdFR5cGU6IHN0cmluZztcbiAgICAgICAgc2NyaXB0OiBzdHJpbmc7XG4gICAgICB9PlxuICAgICkgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwSWQsIHNjcmlwdFR5cGUsIHNjcmlwdCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoc3RlcElkICYmIHNjcmlwdFR5cGUpIHtcbiAgICAgICAgZGF0YWJhc2VTY3JpcHRBZGFwdGVyLnVwZGF0ZU9uZShzdGF0ZS5zY3JpcHRzW3NjcmlwdFR5cGVdLCB7XG4gICAgICAgICAgaWQ6IHN0ZXBJZCxcbiAgICAgICAgICBjaGFuZ2VzOiB7IHNjcmlwdCB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFiYXNlU2NyaXB0U2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxEYXRhYmFzZVNjcmlwdFN0YXRlIHtcbiAgZGF0YWJhc2VTY3JpcHQ6IERhdGFiYXNlU2NyaXB0U3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIGltcG9ydFBhcnNlZERhdGFiYXNlU2NyaXB0cyxcbiAgdXBkYXRlU2NyaXB0LFxufSA9IGRhdGFiYXNlU2NyaXB0U2xpY2UuYWN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/databaseScript/databaseScriptSlice.ts\n");

/***/ })

})