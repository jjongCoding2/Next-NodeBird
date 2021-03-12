webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateDummyPost\", function() { return generateDummyPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_REQUEST\", function() { return LOAD_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_SUCCESS\", function() { return LOAD_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POSTS_FAILURE\", function() { return LOAD_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ \"./node_modules/shortid/index.js\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ \"./node_modules/faker/index.js\");\n/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  hasMorePosts: true,\n  loadPostsLoading: false,\n  loadPostsDone: false,\n  loadPostsError: null,\n  addPostLoading: false,\n  addPostDone: false,\n  addPostError: null,\n  addCommentLoading: false,\n  addCommentDone: false,\n  addCommentError: null\n};\nvar generateDummyPost = function generateDummyPost(number) {\n  return Array(number).fill().map(function () {\n    return {\n      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n      User: {\n        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n      },\n      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),\n      Images: [{\n        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()\n      }],\n      Comments: [{\n        User: {\n          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()\n        },\n        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()\n      }]\n    };\n  });\n};\nvar LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';\nvar LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';\nvar LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST';\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar addPost = function addPost(data) {\n  return {\n    type: ADD_POST_REQUEST,\n    data: data\n  };\n};\nvar addComment = function addComment(data) {\n  return {\n    type: ADD_COMMENT_REQUEST,\n    data: data\n  };\n};\n\nvar dummyComment = function dummyComment(data) {\n  return {\n    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),\n    content: data,\n    User: {\n      id: 1,\n      nickname: '바보~'\n    }\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  return Object(immer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, function (draft) {\n    switch (action.type) {\n      case LOAD_POSTS_REQUEST:\n        draft.loadPostsLoading = true;\n        draft.loadPostsDone = false;\n        draft.loadPostsError = null;\n        break;\n\n      case LOAD_POSTS_SUCCESS:\n        draft.loadPostsLoading = false;\n        draft.loadPostsDone = true;\n        draft.mainPosts = action.data.concat(draft.mainPosts);\n        draft.hasMorePosts = draft.mainPosts.length < 50;\n        break;\n\n      case LOAD_POSTS_FAILURE:\n        draft.loadPostsLoading = false;\n        draft.loadPostsError = action.error;\n        break;\n\n      case ADD_POST_REQUEST:\n        draft.addPostLoading = true;\n        draft.addPostDone = false;\n        draft.addPostError = null;\n        break;\n\n      case ADD_POST_SUCCESS:\n        draft.addPostLoading = false;\n        draft.addPostDone = true;\n        draft.mainPosts.unshift(action.data);\n        break;\n\n      case ADD_POST_FAILURE:\n        draft.addPostLoading = false;\n        draft.addPostError = action.error;\n        break;\n\n      case REMOVE_POST_REQUEST:\n        draft.removePostLoading = true;\n        draft.removePostDone = false;\n        draft.removePostError = null;\n        break;\n\n      case REMOVE_POST_SUCCESS:\n        draft.mainPosts = draft.mainPosts.filter(function (v) {\n          return v.id !== action.data;\n        });\n        draft.removePostLoading = false;\n        draft.removePostDone = true;\n        break;\n\n      case REMOVE_POST_FAILURE:\n        draft.removePostLoading = false;\n        draft.removePostError = action.error;\n        break;\n\n      case ADD_COMMENT_REQUEST:\n        draft.addCommentLoading = true;\n        draft.addCommentDone = false;\n        draft.addCommentError = null;\n        break;\n\n      case ADD_COMMENT_SUCCESS:\n        var post = draft.mainPosts.find(function (v) {\n          return v.id === action.data.postId;\n        });\n        post.Comments.unshift(action.data);\n        draft.addCommentLoading = false;\n        draft.addCommentDone = true;\n        break;\n      // \tconst postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);\n      // \tconst post = { ...state.mainPosts[postIndex] };\n      // \tpost.Comments = [dummyComment(action.data.content), ...post.Comments];\n      // \tconst mainPosts = [...state.mainPosts];\n      // \tmainPosts[postIndex] = post;\n      // \treturn {\n      // \t\t...state,\n      // \t\tmainPosts,\n      // \t\taddCommentLoading: false,\n      // \t\taddCommentDone: true,\n      // \t};\n      // }\n\n      case ADD_COMMENT_FAILURE:\n        draft.addCommentLoading = false, draft.addCommentError = action.error;\n        break;\n\n      default:\n        break;\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIs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QTs7QUFDRCxXQUFLZ0MsbUJBQUw7QUFDQyxZQUFNcUIsSUFBSSxHQUFHVixLQUFLLENBQUN0RCxTQUFOLENBQWdCaUUsSUFBaEIsQ0FBcUIsVUFBQ0YsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUM5QyxFQUFGLEtBQVNtQyxNQUFNLENBQUNOLElBQVAsQ0FBWW9CLE1BQTVCO0FBQUEsU0FBckIsQ0FBYjtBQUNBRixZQUFJLENBQUNqQyxRQUFMLENBQWMyQixPQUFkLENBQXNCTixNQUFNLENBQUNOLElBQTdCO0FBQ0FRLGFBQUssQ0FBQzdDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E2QyxhQUFLLENBQUM1QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBS2tDLG1CQUFMO0FBQ0NVLGFBQUssQ0FBQzdDLGlCQUFOLEdBQTBCLEtBQTFCLEVBQ0E2QyxLQUFLLENBQUMzQyxlQUFOLEdBQXdCeUMsTUFBTSxDQUFDSyxLQUQvQjtBQUVBOztBQUNEO0FBQ0M7QUF4RUY7O0FBeUVDO0FBQ0QsR0EzRWEsQ0FBZDtBQTRFQSxDQTdFRDs7QUErRWVQLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0bWFpblBvc3RzOiBbXSxcblx0aW1hZ2VQYXRoczogW10sXG5cdGhhc01vcmVQb3N0czogdHJ1ZSxcblx0bG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXG5cdGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxuXHRsb2FkUG9zdHNFcnJvcjogbnVsbCxcblxuXHRhZGRQb3N0TG9hZGluZzogZmFsc2UsXG5cdGFkZFBvc3REb25lOiBmYWxzZSxcblx0YWRkUG9zdEVycm9yOiBudWxsLFxuXG5cdGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcblx0YWRkQ29tbWVudERvbmU6IGZhbHNlLFxuXHRhZGRDb21tZW50RXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcblx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcblx0VXNlcjoge1xuXHRcdGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG5cdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcblx0fSxcblx0Y29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXG5cdEltYWdlczogW3tcblx0XHRzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXG5cdH1dLFxuXHRDb21tZW50czogW3tcblx0XHRVc2VyOiB7XG5cdFx0XHRpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuXHRcdFx0bmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcblx0XHR9LFxuXHRcdGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXG5cdH1dLFxufSkpO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XG5cdHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXG5cdGRhdGEsXG59KTtcblxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcblx0dHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcblx0ZGF0YSxcbn0pO1xuXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcblx0aWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcblx0Y29udGVudDogZGF0YSxcblx0VXNlcjoge1xuXHRcdGlkOiAxLFxuXHRcdG5pY2tuYW1lOiAn67CU67O0ficsXG5cdH0sXG59KTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcblx0XHRcdFx0ZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcblx0XHRcdFx0ZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcblx0XHRcdFx0ZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxuXHRcdFx0XHRkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0ZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBBRERfUE9TVF9GQUlMVVJFOlxuXHRcdFx0XHRkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxuXHRcdFx0XHRkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxuXHRcdFx0XHRkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XG5cdFx0XHRcdGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcblx0XHRcdFx0cG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0ZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIFx0Y29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcblx0XHRcdC8vIFx0Y29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcblx0XHRcdC8vIFx0cG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xuXHRcdFx0Ly8gXHRjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcblx0XHRcdC8vIFx0bWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xuXHRcdFx0Ly8gXHRyZXR1cm4ge1xuXHRcdFx0Ly8gXHRcdC4uLnN0YXRlLFxuXHRcdFx0Ly8gXHRcdG1haW5Qb3N0cyxcblx0XHRcdC8vIFx0XHRhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXG5cdFx0XHQvLyBcdFx0YWRkQ29tbWVudERvbmU6IHRydWUsXG5cdFx0XHQvLyBcdH07XG5cdFx0XHQvLyB9XG5cdFx0XHRjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2UsXG5cdFx0XHRcdGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})