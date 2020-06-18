webpackHotUpdate("static/development/pages/[aspect].js",{

/***/ "./src/features/dataImport/useImportData.ts":
/*!**************************************************!*\
  !*** ./src/features/dataImport/useImportData.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var features_scriptType_scriptTypeSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/scriptType/scriptTypeSlice */ \"./src/features/scriptType/scriptTypeSlice.ts\");\n/* harmony import */ var features_scriptDatabase_scriptDatabaseSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/scriptDatabase/scriptDatabaseSlice */ \"./src/features/scriptDatabase/scriptDatabaseSlice.ts\");\n/* harmony import */ var features_variable_variableSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/variable/variableSlice */ \"./src/features/variable/variableSlice.ts\");\n/* harmony import */ var features_scriptSnippet_scriptSnippetSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/scriptSnippet/scriptSnippetSlice */ \"./src/features/scriptSnippet/scriptSnippetSlice.ts\");\n/* harmony import */ var features_step_stepSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! features/step/stepSlice */ \"./src/features/step/stepSlice.ts\");\n/* harmony import */ var features_choiceControl_choiceControlSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! features/choiceControl/choiceControlSlice */ \"./src/features/choiceControl/choiceControlSlice.ts\");\n/* harmony import */ var features_databaseScript_databaseScriptSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! features/databaseScript/databaseScriptSlice */ \"./src/features/databaseScript/databaseScriptSlice.ts\");\n/* harmony import */ var features_scriptResult_layoutScriptResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! features/scriptResult/layoutScriptResult */ \"./src/features/scriptResult/layoutScriptResult.ts\");\n/* harmony import */ var features_scriptResult_scriptResultSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! features/scriptResult/scriptResultSlice */ \"./src/features/scriptResult/scriptResultSlice.ts\");\n/* harmony import */ var features_dependency_dependencyCheckSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! features/dependency/dependencyCheckSlice */ \"./src/features/dependency/dependencyCheckSlice.ts\");\n/* harmony import */ var features_step_getStepId__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! features/step/getStepId */ \"./src/features/step/getStepId.ts\");\n/* harmony import */ var _parseStepsToImport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parseStepsToImport */ \"./src/features/dataImport/parseStepsToImport.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useImportData = function useImportData(dataToImport) {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var scriptTypes = dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.types;\n    var scriptDatabase = dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.db;\n\n    if (!((scriptTypes === null || scriptTypes === void 0 ? void 0 : scriptTypes.length) && (scriptDatabase === null || scriptDatabase === void 0 ? void 0 : scriptDatabase.length))) {\n      return;\n    }\n\n    dispatch(Object(features_scriptType_scriptTypeSlice__WEBPACK_IMPORTED_MODULE_2__[\"scriptTypeReceived\"])(scriptTypes));\n    dispatch(Object(features_scriptDatabase_scriptDatabaseSlice__WEBPACK_IMPORTED_MODULE_3__[\"scriptDatabaseReceived\"])(scriptDatabase));\n    var scriptResult = Object(features_scriptResult_layoutScriptResult__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n      scriptTypes: scriptTypes,\n      scriptDatabase: scriptDatabase\n    });\n    dispatch(Object(features_scriptResult_scriptResultSlice__WEBPACK_IMPORTED_MODULE_10__[\"scriptResultReceived\"])(scriptResult));\n    dispatch(Object(features_variable_variableSlice__WEBPACK_IMPORTED_MODULE_4__[\"importVariables\"])(dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.vars));\n    dispatch(Object(features_scriptSnippet_scriptSnippetSlice__WEBPACK_IMPORTED_MODULE_5__[\"importScriptSnippets\"])(dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.snippets));\n\n    var _ref = Object(_parseStepsToImport__WEBPACK_IMPORTED_MODULE_13__[\"default\"])({\n      steps: dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.steps,\n      types: scriptTypes,\n      snippets: dataToImport === null || dataToImport === void 0 ? void 0 : dataToImport.snippets\n    }) || {},\n        parsedSteps = _ref.parsedSteps,\n        choiceControl = _ref.choiceControl,\n        parsedDatabaseScripts = _ref.parsedDatabaseScripts,\n        parsedDependencyChecks = _ref.parsedDependencyChecks;\n\n    dispatch(Object(features_step_stepSlice__WEBPACK_IMPORTED_MODULE_6__[\"stepReceived\"])({\n      steps: parsedSteps || {},\n      currentStepId: Object(features_step_getStepId__WEBPACK_IMPORTED_MODULE_12__[\"getNextVisibleStepId\"])(parsedSteps[scriptTypes[0]])\n    }));\n    dispatch(Object(features_choiceControl_choiceControlSlice__WEBPACK_IMPORTED_MODULE_7__[\"importChoiceControl\"])(choiceControl));\n    dispatch(Object(features_databaseScript_databaseScriptSlice__WEBPACK_IMPORTED_MODULE_8__[\"databaseScriptReceived\"])({\n      scripts: parsedDatabaseScripts || {}\n    }));\n    dispatch(Object(features_dependency_dependencyCheckSlice__WEBPACK_IMPORTED_MODULE_11__[\"dependencyCheckReceived\"])({\n      dependencyChecks: parsedDependencyChecks || {}\n    }));\n    dispatch(Object(features_dependency_dependencyCheckSlice__WEBPACK_IMPORTED_MODULE_11__[\"resolveAllDependency\"])(scriptTypes));\n  }, [dataToImport]);\n};\n\n_s(useImportData, \"rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useImportData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGF0YUltcG9ydC91c2VJbXBvcnREYXRhLnRzP2FiM2EiXSwibmFtZXMiOlsidXNlSW1wb3J0RGF0YSIsImRhdGFUb0ltcG9ydCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJzY3JpcHRUeXBlcyIsInR5cGVzIiwic2NyaXB0RGF0YWJhc2UiLCJkYiIsImxlbmd0aCIsInNjcmlwdFR5cGVSZWNlaXZlZCIsInNjcmlwdERhdGFiYXNlUmVjZWl2ZWQiLCJzY3JpcHRSZXN1bHQiLCJsYXlvdXRTY3JpcHRSZXN1bHQiLCJzY3JpcHRSZXN1bHRSZWNlaXZlZCIsImltcG9ydFZhcmlhYmxlcyIsInZhcnMiLCJpbXBvcnRTY3JpcHRTbmlwcGV0cyIsInNuaXBwZXRzIiwicGFyc2VTdGVwc1RvSW1wb3J0Iiwic3RlcHMiLCJwYXJzZWRTdGVwcyIsImNob2ljZUNvbnRyb2wiLCJwYXJzZWREYXRhYmFzZVNjcmlwdHMiLCJwYXJzZWREZXBlbmRlbmN5Q2hlY2tzIiwic3RlcFJlY2VpdmVkIiwiY3VycmVudFN0ZXBJZCIsImdldE5leHRWaXNpYmxlU3RlcElkIiwiaW1wb3J0Q2hvaWNlQ29udHJvbCIsImRhdGFiYXNlU2NyaXB0UmVjZWl2ZWQiLCJzY3JpcHRzIiwiZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQiLCJkZXBlbmRlbmN5Q2hlY2tzIiwicmVzb2x2ZUFsbERlcGVuZGVuY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7O0FBVUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxZQUFELEVBQWlDO0FBQUE7O0FBQ3JELE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHSixZQUFILGFBQUdBLFlBQUgsdUJBQUdBLFlBQVksQ0FBRUssS0FBbEM7QUFDQSxRQUFNQyxjQUFjLEdBQUdOLFlBQUgsYUFBR0EsWUFBSCx1QkFBR0EsWUFBWSxDQUFFTyxFQUFyQzs7QUFDQSxRQUFJLEVBQUUsQ0FBQUgsV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFXLENBQUVJLE1BQWIsTUFBdUJGLGNBQXZCLGFBQXVCQSxjQUF2Qix1QkFBdUJBLGNBQWMsQ0FBRUUsTUFBdkMsQ0FBRixDQUFKLEVBQXNEO0FBQ3BEO0FBQ0Q7O0FBRURQLFlBQVEsQ0FBQ1EsOEZBQWtCLENBQUNMLFdBQUQsQ0FBbkIsQ0FBUjtBQUNBSCxZQUFRLENBQUNTLDBHQUFzQixDQUFDSixjQUFELENBQXZCLENBQVI7QUFDQSxRQUFNSyxZQUFZLEdBQUdDLHdGQUFrQixDQUFDO0FBQUVSLGlCQUFXLEVBQVhBLFdBQUY7QUFBZUUsb0JBQWMsRUFBZEE7QUFBZixLQUFELENBQXZDO0FBQ0FMLFlBQVEsQ0FBQ1kscUdBQW9CLENBQUNGLFlBQUQsQ0FBckIsQ0FBUjtBQUNBVixZQUFRLENBQUNhLHVGQUFlLENBQUNkLFlBQUQsYUFBQ0EsWUFBRCx1QkFBQ0EsWUFBWSxDQUFFZSxJQUFmLENBQWhCLENBQVI7QUFDQWQsWUFBUSxDQUFDZSxzR0FBb0IsQ0FBQ2hCLFlBQUQsYUFBQ0EsWUFBRCx1QkFBQ0EsWUFBWSxDQUFFaUIsUUFBZixDQUFyQixDQUFSOztBQVpjLGVBbUJaQyxvRUFBa0IsQ0FBQztBQUNqQkMsV0FBSyxFQUFFbkIsWUFBRixhQUFFQSxZQUFGLHVCQUFFQSxZQUFZLENBQUVtQixLQURKO0FBRWpCZCxXQUFLLEVBQUVELFdBRlU7QUFHakJhLGNBQVEsRUFBRWpCLFlBQUYsYUFBRUEsWUFBRix1QkFBRUEsWUFBWSxDQUFFaUI7QUFIUCxLQUFELENBQWxCLElBSU0sRUF2Qk07QUFBQSxRQWNaRyxXQWRZLFFBY1pBLFdBZFk7QUFBQSxRQWVaQyxhQWZZLFFBZVpBLGFBZlk7QUFBQSxRQWdCWkMscUJBaEJZLFFBZ0JaQSxxQkFoQlk7QUFBQSxRQWlCWkMsc0JBakJZLFFBaUJaQSxzQkFqQlk7O0FBd0JkdEIsWUFBUSxDQUNOdUIsNEVBQVksQ0FBQztBQUNYTCxXQUFLLEVBQUVDLFdBQVcsSUFBSSxFQURYO0FBRVhLLG1CQUFhLEVBQUVDLHFGQUFvQixDQUFDTixXQUFXLENBQUNoQixXQUFXLENBQUMsQ0FBRCxDQUFaLENBQVo7QUFGeEIsS0FBRCxDQUROLENBQVI7QUFNQUgsWUFBUSxDQUFDMEIscUdBQW1CLENBQUNOLGFBQUQsQ0FBcEIsQ0FBUjtBQUNBcEIsWUFBUSxDQUNOMkIsMEdBQXNCLENBQUM7QUFDckJDLGFBQU8sRUFBRVAscUJBQXFCLElBQUk7QUFEYixLQUFELENBRGhCLENBQVI7QUFLQXJCLFlBQVEsQ0FDTjZCLHlHQUF1QixDQUFDO0FBQ3RCQyxzQkFBZ0IsRUFBRVIsc0JBQXNCLElBQUk7QUFEdEIsS0FBRCxDQURqQixDQUFSO0FBS0F0QixZQUFRLENBQUMrQixzR0FBb0IsQ0FBQzVCLFdBQUQsQ0FBckIsQ0FBUjtBQUNELEdBMUNRLEVBMENOLENBQUNKLFlBQUQsQ0ExQ00sQ0FBVDtBQTJDRCxDQTlDRDs7R0FBTUQsYTtVQUNhRyx1RDs7O0FBK0NKSCw0RUFBZiIsImZpbGUiOiIuL3NyYy9mZWF0dXJlcy9kYXRhSW1wb3J0L3VzZUltcG9ydERhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIHNjcmlwdFR5cGVSZWNlaXZlZCxcbiAgU2NyaXB0VHlwZVN0YXRlLFxufSBmcm9tICdmZWF0dXJlcy9zY3JpcHRUeXBlL3NjcmlwdFR5cGVTbGljZSc7XG5pbXBvcnQge1xuICBzY3JpcHREYXRhYmFzZVJlY2VpdmVkLFxuICBTY3JpcHREYXRhYmFzZVN0YXRlLFxufSBmcm9tICdmZWF0dXJlcy9zY3JpcHREYXRhYmFzZS9zY3JpcHREYXRhYmFzZVNsaWNlJztcbmltcG9ydCB7XG4gIGltcG9ydFZhcmlhYmxlcyxcbiAgVmFyaWFibGVzVG9JbXBvcnQsXG59IGZyb20gJ2ZlYXR1cmVzL3ZhcmlhYmxlL3ZhcmlhYmxlU2xpY2UnO1xuaW1wb3J0IHtcbiAgaW1wb3J0U2NyaXB0U25pcHBldHMsXG4gIFNjcmlwdFNuaXBwZXRzVG9JbXBvcnQsXG59IGZyb20gJ2ZlYXR1cmVzL3NjcmlwdFNuaXBwZXQvc2NyaXB0U25pcHBldFNsaWNlJztcbmltcG9ydCB7IHN0ZXBSZWNlaXZlZCB9IGZyb20gJ2ZlYXR1cmVzL3N0ZXAvc3RlcFNsaWNlJztcbmltcG9ydCB7IGltcG9ydENob2ljZUNvbnRyb2wgfSBmcm9tICdmZWF0dXJlcy9jaG9pY2VDb250cm9sL2Nob2ljZUNvbnRyb2xTbGljZSc7XG5pbXBvcnQgeyBkYXRhYmFzZVNjcmlwdFJlY2VpdmVkIH0gZnJvbSAnZmVhdHVyZXMvZGF0YWJhc2VTY3JpcHQvZGF0YWJhc2VTY3JpcHRTbGljZSc7XG5pbXBvcnQgbGF5b3V0U2NyaXB0UmVzdWx0IGZyb20gJ2ZlYXR1cmVzL3NjcmlwdFJlc3VsdC9sYXlvdXRTY3JpcHRSZXN1bHQnO1xuaW1wb3J0IHsgc2NyaXB0UmVzdWx0UmVjZWl2ZWQgfSBmcm9tICdmZWF0dXJlcy9zY3JpcHRSZXN1bHQvc2NyaXB0UmVzdWx0U2xpY2UnO1xuaW1wb3J0IHtcbiAgZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQsXG4gIHJlc29sdmVBbGxEZXBlbmRlbmN5LFxufSBmcm9tICdmZWF0dXJlcy9kZXBlbmRlbmN5L2RlcGVuZGVuY3lDaGVja1NsaWNlJztcbmltcG9ydCB7IGdldE5leHRWaXNpYmxlU3RlcElkIH0gZnJvbSAnZmVhdHVyZXMvc3RlcC9nZXRTdGVwSWQnO1xuaW1wb3J0IHBhcnNlU3RlcHNUb0ltcG9ydCwgeyBTdGVwc1RvSW1wb3J0IH0gZnJvbSAnLi9wYXJzZVN0ZXBzVG9JbXBvcnQnO1xuXG5pbnRlcmZhY2UgRGF0YVRvSW1wb3J0IHtcbiAgdmFycz86IFZhcmlhYmxlc1RvSW1wb3J0O1xuICBzbmlwcGV0cz86IFNjcmlwdFNuaXBwZXRzVG9JbXBvcnQ7XG4gIHR5cGVzPzogU2NyaXB0VHlwZVN0YXRlO1xuICBkYj86IFNjcmlwdERhdGFiYXNlU3RhdGU7XG4gIHN0ZXBzPzogU3RlcHNUb0ltcG9ydFtdO1xufVxuXG5jb25zdCB1c2VJbXBvcnREYXRhID0gKGRhdGFUb0ltcG9ydD86IERhdGFUb0ltcG9ydCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHRUeXBlcyA9IGRhdGFUb0ltcG9ydD8udHlwZXM7XG4gICAgY29uc3Qgc2NyaXB0RGF0YWJhc2UgPSBkYXRhVG9JbXBvcnQ/LmRiO1xuICAgIGlmICghKHNjcmlwdFR5cGVzPy5sZW5ndGggJiYgc2NyaXB0RGF0YWJhc2U/Lmxlbmd0aCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaChzY3JpcHRUeXBlUmVjZWl2ZWQoc2NyaXB0VHlwZXMpKTtcbiAgICBkaXNwYXRjaChzY3JpcHREYXRhYmFzZVJlY2VpdmVkKHNjcmlwdERhdGFiYXNlKSk7XG4gICAgY29uc3Qgc2NyaXB0UmVzdWx0ID0gbGF5b3V0U2NyaXB0UmVzdWx0KHsgc2NyaXB0VHlwZXMsIHNjcmlwdERhdGFiYXNlIH0pO1xuICAgIGRpc3BhdGNoKHNjcmlwdFJlc3VsdFJlY2VpdmVkKHNjcmlwdFJlc3VsdCkpO1xuICAgIGRpc3BhdGNoKGltcG9ydFZhcmlhYmxlcyhkYXRhVG9JbXBvcnQ/LnZhcnMpKTtcbiAgICBkaXNwYXRjaChpbXBvcnRTY3JpcHRTbmlwcGV0cyhkYXRhVG9JbXBvcnQ/LnNuaXBwZXRzKSk7XG4gICAgY29uc3Qge1xuICAgICAgcGFyc2VkU3RlcHMsXG4gICAgICBjaG9pY2VDb250cm9sLFxuICAgICAgcGFyc2VkRGF0YWJhc2VTY3JpcHRzLFxuICAgICAgcGFyc2VkRGVwZW5kZW5jeUNoZWNrcyxcbiAgICB9ID1cbiAgICAgIHBhcnNlU3RlcHNUb0ltcG9ydCh7XG4gICAgICAgIHN0ZXBzOiBkYXRhVG9JbXBvcnQ/LnN0ZXBzLFxuICAgICAgICB0eXBlczogc2NyaXB0VHlwZXMsXG4gICAgICAgIHNuaXBwZXRzOiBkYXRhVG9JbXBvcnQ/LnNuaXBwZXRzLFxuICAgICAgfSkgfHwge307XG4gICAgZGlzcGF0Y2goXG4gICAgICBzdGVwUmVjZWl2ZWQoe1xuICAgICAgICBzdGVwczogcGFyc2VkU3RlcHMgfHwge30sXG4gICAgICAgIGN1cnJlbnRTdGVwSWQ6IGdldE5leHRWaXNpYmxlU3RlcElkKHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVzWzBdXSksXG4gICAgICB9KVxuICAgICk7XG4gICAgZGlzcGF0Y2goaW1wb3J0Q2hvaWNlQ29udHJvbChjaG9pY2VDb250cm9sKSk7XG4gICAgZGlzcGF0Y2goXG4gICAgICBkYXRhYmFzZVNjcmlwdFJlY2VpdmVkKHtcbiAgICAgICAgc2NyaXB0czogcGFyc2VkRGF0YWJhc2VTY3JpcHRzIHx8IHt9LFxuICAgICAgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKFxuICAgICAgZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQoe1xuICAgICAgICBkZXBlbmRlbmN5Q2hlY2tzOiBwYXJzZWREZXBlbmRlbmN5Q2hlY2tzIHx8IHt9LFxuICAgICAgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKHJlc29sdmVBbGxEZXBlbmRlbmN5KHNjcmlwdFR5cGVzKSk7XG4gIH0sIFtkYXRhVG9JbXBvcnRdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUltcG9ydERhdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/dataImport/useImportData.ts\n");

/***/ })

})