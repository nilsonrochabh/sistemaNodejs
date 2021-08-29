webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Auth/index.js":
/*!**********************************!*\
  !*** ./components/Auth/index.js ***!
  \**********************************/
/*! exports provided: logout, login, signup, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_nil_projetos_clocker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/firebase/client */ \"./config/firebase/client.js\");\n\n\n\n\nvar _jsxFileName = \"/home/nil/projetos/clocker/components/Auth/index.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\n\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"]([{}, function () {}]);\nvar logout = function logout() {\n  return _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"firebaseClient\"].auth().signOut();\n};\nvar login = /*#__PURE__*/function () {\n  var _ref2 = Object(_home_nil_projetos_clocker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {\n    var email, password;\n    return _home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            email = _ref.email, password = _ref.password;\n            _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"firebaseClient\"].auth().setPersistence(_config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"persistenceMode\"]);\n            _context.prev = 2;\n            _context.next = 5;\n            return _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"firebaseClient\"].auth().signInWithEmailAndPassword(email, password);\n\n          case 5:\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](2);\n            console.log('LOGIN ERROR:', _context.t0);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 7]]);\n  }));\n\n  return function login(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar signup = /*#__PURE__*/function () {\n  var _ref4 = Object(_home_nil_projetos_clocker_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {\n    var email, password, username;\n    return _home_nil_projetos_clocker_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            email = _ref3.email, password = _ref3.password, username = _ref3.username;\n            _context2.prev = 1;\n            _context2.next = 4;\n            return _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"firebaseClient\"].auth().createUserWithEmailAndPassword(email, password);\n\n          case 4:\n            _context2.next = 6;\n            return login(email, password);\n\n          case 6:\n            _context2.next = 11;\n            break;\n\n          case 8:\n            _context2.prev = 8;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.log('SIGNUP ERROR:', _context2.t0);\n\n          case 11:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 8]]);\n  }));\n\n  return function signup(_x2) {\n    return _ref4.apply(this, arguments);\n  };\n}();\nvar useAuth = function useAuth() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(AuthContext),\n      auth = _useContext[0];\n\n  return [auth, {\n    login: login,\n    logout: logout,\n    signup: signup\n  }];\n};\n\n_s(useAuth, \"oIlZES7aa0QuDm0FbDyM3uzVSjQ=\");\n\nvar AuthProvider = function AuthProvider(_ref5) {\n  _s2();\n\n  var children = _ref5.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    loading: true,\n    user: false\n  }),\n      auth = _useState[0],\n      setAuth = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var unsubscribe = _config_firebase_client__WEBPACK_IMPORTED_MODULE_4__[\"firebaseClient\"].auth().onAuthStateChanged(function (user) {\n      setAuth({\n        loading: false,\n        user: user\n      });\n    });\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: [auth, setAuth],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 6\n  }, _this);\n};\n\n_s2(AuthProvider, \"CGgIyOT7wv/FliUb5/ifdycs9vw=\");\n\n_c = AuthProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzPzYwNDQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJSZWFjdCIsImxvZ291dCIsImZpcmViYXNlQ2xpZW50IiwiYXV0aCIsInNpZ25PdXQiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlTW9kZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInNpZ251cCIsInVzZXJuYW1lIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidXNlQXV0aCIsInVzZUNvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibG9hZGluZyIsInVzZXIiLCJzZXRBdXRoIiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxnQkFBR0MsbURBQUEsQ0FBb0IsQ0FBQyxFQUFELEVBQUssWUFBSyxDQUFHLENBQWIsQ0FBcEIsQ0FBcEI7QUFDTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQU1DLHNFQUFjLENBQUNDLElBQWYsR0FBc0JDLE9BQXRCLEVBQU47QUFBQSxDQUFmO0FBQ0EsSUFBTUMsS0FBSztBQUFBLDZRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFRQyxpQkFBUixRQUFRQSxLQUFSLEVBQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUNqQkwsa0ZBQWMsQ0FBQ0MsSUFBZixHQUFzQkssY0FBdEIsQ0FBcUNDLHVFQUFyQztBQURpQjtBQUFBO0FBQUEsbUJBR1JQLHNFQUFjLENBQUNDLElBQWYsR0FBc0JPLDBCQUF0QixDQUFrREosS0FBbEQsRUFBMERDLFFBQTFELENBSFE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtiSSxtQkFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjs7QUFMYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMUCxLQUFLO0FBQUE7QUFBQTtBQUFBLEdBQVg7QUFXQSxJQUFNUSxNQUFNO0FBQUEsNlFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFQLGlCQUFSLFNBQVFBLEtBQVIsRUFBZUMsUUFBZixTQUFlQSxRQUFmLEVBQXlCTyxRQUF6QixTQUF5QkEsUUFBekI7QUFBQTtBQUFBO0FBQUEsbUJBRVJaLHNFQUFjLENBQUNDLElBQWYsR0FBc0JZLDhCQUF0QixDQUFxRFQsS0FBckQsRUFBNERDLFFBQTVELENBRlE7O0FBQUE7QUFBQTtBQUFBLG1CQUdSRixLQUFLLENBQUNDLEtBQUQsRUFBUUMsUUFBUixDQUhHOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFtQmRJLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaOztBQW5CYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFOQyxNQUFNO0FBQUE7QUFBQTtBQUFBLEdBQVo7QUF1QkEsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBSztBQUFBOztBQUFBLG9CQUNUQyx3REFBVSxDQUFDbEIsV0FBRCxDQUREO0FBQUEsTUFDakJJLElBRGlCOztBQUd4QixTQUFPLENBQUNBLElBQUQsRUFBTztBQUFDRSxTQUFLLEVBQUxBLEtBQUQ7QUFBUUosVUFBTSxFQUFOQSxNQUFSO0FBQWdCWSxVQUFNLEVBQU5BO0FBQWhCLEdBQVAsQ0FBUDtBQUNILENBSk07O0dBQU1HLE87O0FBS04sSUFBTUUsWUFBWSxHQUFFLFNBQWRBLFlBQWMsUUFBYztBQUFBOztBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTs7QUFBQSxrQkFDYkMsc0RBQVEsQ0FBQztBQUM3QkMsV0FBTyxFQUFDLElBRHFCO0FBRTdCQyxRQUFJLEVBQUM7QUFGd0IsR0FBRCxDQURLO0FBQUEsTUFDOUJuQixJQUQ4QjtBQUFBLE1BQ3hCb0IsT0FEd0I7O0FBTXJDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxXQUFXLEdBQUd2QixzRUFBYyxDQUFDQyxJQUFmLEdBQXNCdUIsa0JBQXRCLENBQXlDLFVBQUFKLElBQUksRUFBSTtBQUNuRUMsYUFBTyxDQUFDO0FBQ05GLGVBQU8sRUFBRSxLQURIO0FBRU5DLFlBQUksRUFBSkE7QUFGTSxPQUFELENBQVA7QUFJRCxLQUxtQixDQUFwQjtBQU1BLFdBQU87QUFBQSxhQUFLRyxXQUFXLEVBQWhCO0FBQUEsS0FBUDtBQUNELEdBUk0sRUFRSixFQVJJLENBQVQ7QUFVQSxzQkFDQyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQ3RCLElBQUQsRUFBTW9CLE9BQU4sQ0FBN0I7QUFBQSxjQUNJSjtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQUtILENBckJNOztJQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQsIHBlcnNpc3RlbmNlTW9kZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9maXJlYmFzZS9jbGllbnQnXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PnsgfV0pXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNpZ25PdXQoKVxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHtlbWFpbCwgcGFzc3dvcmR9KSA9PntcbiAgICBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2VNb2RlKVxuICAgIHRyeSB7XG4gICAgICAgYXdhaXQgZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKCBlbWFpbCwgIHBhc3N3b3JkKVxuICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9HSU4gRVJST1I6JywgZXJyb3IpXG4gICAgfVxufVxuXG5cbiBcbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAoe2VtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWV9KSA9PntcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmaXJlYmFzZUNsaWVudC5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgICAgYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAvL3NldHVwUHJvZmlsZSh0b2tlbiwgdXNlcm5hbWUpXG4gICAgICAgIFxuICAgICAgICAvL2NvbnN0IHtkYXRhfSA9ICBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgICAvLyAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIC8vICAgICAgIHVybDogJy9hcGkvcHJvZmlsZScsXG4gICAgICAgICAgICAvLyAgICAgICBkYXRhOntcbiAgICAgICAgICAgIC8vICAgICAgICAgdXNlcm5hbWU6dmFsdWVzLnVzZXJuYW1lXG4gICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAgaGVhZGVyOntcbiAgICAgICAgICAgIC8vICAgICAgICAgJ0F1dGVudGljYXRpb24nOmBCZWFyZXIgJHt1c2VyLmdldFRva2VuKCl9YFxuICAgICAgICAgICAgLy8gICAgICAgICAsXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTSUdOVVAgRVJST1I6JywgZXJyb3IpICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT57XG4gICAgY29uc3QgW2F1dGhdID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCkgXG5cbiAgICByZXR1cm4gW2F1dGgsIHtsb2dpbiwgbG9nb3V0LCBzaWdudXB9XVxufVxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9KHtjaGlsZHJlbn0pPT57XG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoe1xuICAgICAgICBsb2FkaW5nOnRydWUsXG4gICAgICAgIHVzZXI6ZmFsc2VcbiAgICB9KVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZUNsaWVudC5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xuICAgICAgICAgIHNldEF1dGgoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB1c2VyXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuICgpID0+dW5zdWJzY3JpYmUoKVxuICAgICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2F1dGgsc2V0QXV0aF19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Auth/index.js\n");

/***/ })

})