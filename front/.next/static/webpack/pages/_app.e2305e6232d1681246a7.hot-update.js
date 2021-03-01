webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n}; //action creator\n\nvar loginAction = function loginAction(data) {\n  return {\n    type: 'LOG_IN',\n    data: data\n  };\n};\nvar logoutAction = function logoutAction() {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]:\n      console.log('HYDRATE', action);\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          user: action.data\n        })\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: false,\n          user: null\n        })\n      });\n\n    default:\n      return null;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDcEJDLE1BQUksRUFBRTtBQUNMQyxjQUFVLEVBQUUsS0FEUDtBQUVMRCxRQUFJLEVBQUUsSUFGRDtBQUdMRSxjQUFVLEVBQUUsRUFIUDtBQUlMQyxhQUFTLEVBQUU7QUFKTixHQURjO0FBT3BCQyxNQUFJLEVBQUU7QUFDTEMsYUFBUyxFQUFFO0FBRE47QUFQYyxDQUFyQixDLENBV0E7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3BDLFNBQU87QUFDTkMsUUFBSSxFQUFFLFFBREE7QUFFTkQsUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQSxDQUxNO0FBT0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNqQyxTQUFPO0FBQ05ELFFBQUksRUFBRTtBQURBLEdBQVA7QUFHQSxDQUpNOztBQU1QLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QlosWUFBeUI7QUFBQSxNQUFYYSxNQUFXOztBQUNyRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDQyxTQUFLSywwREFBTDtBQUNDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxNQUF2QjtBQUNBLDZDQUFZRCxLQUFaLEdBQXNCQyxNQUFNLENBQUNJLE9BQTdCOztBQUNELFNBQUssUUFBTDtBQUNDLDZDQUNJTCxLQURKO0FBRUNYLFlBQUksa0NBQ0FXLEtBQUssQ0FBQ1gsSUFETjtBQUVIQyxvQkFBVSxFQUFFLElBRlQ7QUFHSEQsY0FBSSxFQUFFWSxNQUFNLENBQUNMO0FBSFY7QUFGTDs7QUFRRCxTQUFLLFNBQUw7QUFDQyw2Q0FDSUksS0FESjtBQUVDWCxZQUFJLGtDQUNBVyxLQUFLLENBQUNYLElBRE47QUFFSEMsb0JBQVUsRUFBRSxLQUZUO0FBR0hELGNBQUksRUFBRTtBQUhIO0FBRkw7O0FBUUE7QUFDQyxhQUFPLElBQVA7QUF2Qkg7QUF5QkEsQ0ExQkQ7O0FBNEJlVSwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0dXNlcjoge1xuXHRcdGlzTG9nZ2VkSW46IGZhbHNlLFxuXHRcdHVzZXI6IG51bGwsXG5cdFx0c2lnblVwRGF0YToge30sXG5cdFx0bG9naW5EYXRhOiB7fSxcblx0fSxcblx0cG9zdDoge1xuXHRcdG1haW5Qb3N0czogW10sXG5cdH0sXG59O1xuLy9hY3Rpb24gY3JlYXRvclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnTE9HX0lOJyxcblx0XHRkYXRhLFxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnTE9HX09VVCcsXG5cdH07XG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIEhZRFJBVEU6XG5cdFx0XHRjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxuXHRcdGNhc2UgJ0xPR19JTic6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnVzZXIsXG5cdFx0XHRcdFx0aXNMb2dnZWRJbjogdHJ1ZSxcblx0XHRcdFx0XHR1c2VyOiBhY3Rpb24uZGF0YSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0Y2FzZSAnTE9HX09VVCc6XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSxcblx0XHRcdFx0dXNlcjoge1xuXHRcdFx0XHRcdC4uLnN0YXRlLnVzZXIsXG5cdFx0XHRcdFx0aXNMb2dnZWRJbjogZmFsc2UsXG5cdFx0XHRcdFx0dXNlcjogbnVsbCxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})