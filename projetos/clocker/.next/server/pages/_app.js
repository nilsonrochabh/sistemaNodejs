module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Auth/index.js":
/*!**********************************!*\
  !*** ./components/Auth/index.js ***!
  \**********************************/
/*! exports provided: logout, login, signup, useAuth, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/firebase/client */ \"./config/firebase/client.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/nil/projetos/clocker/components/Auth/index.js\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"]([{}, () => {}]);\nconst logout = () => _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().signOut();\nconst login = async ({\n  email,\n  password\n}) => {\n  _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().setPersistence(_config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"persistenceMode\"]);\n\n  try {\n    await _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().signInWithEmailAndPassword(email, password);\n  } catch (error) {\n    console.log('LOGIN ERROR:', error);\n  }\n};\nconst signup = async ({\n  email,\n  password,\n  username\n}) => {\n  try {\n    await _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().createUserWithEmailAndPassword(email, password);\n    await login(email, password); // setupProfile(token, username)\n\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: 'post',\n      url: '/api/profile',\n      data: {\n        username\n      },\n      headers: {\n        'Autorization': `Bearer `\n      }\n    });\n    console.log(data);\n  } catch (error) {\n    console.log('SIGNUP ERROR:', error);\n  }\n};\nconst useAuth = () => {\n  const {\n    0: auth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthContext);\n  return [auth, {\n    login,\n    logout,\n    signup\n  }];\n};\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: auth,\n    1: setAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loading: true,\n    user: false\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const unsubscribe = _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().onAuthStateChanged(user => {\n      setAuth({\n        loading: false,\n        user\n      });\n    });\n    return () => unsubscribe();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: [auth, setAuth],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 6\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGgvaW5kZXguanM/NjA0NCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIlJlYWN0IiwibG9nb3V0IiwiZmlyZWJhc2VDbGllbnQiLCJhdXRoIiwic2lnbk91dCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInNldFBlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VNb2RlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzaWdudXAiLCJ1c2VybmFtZSIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0QXV0aCIsInVzZVN0YXRlIiwibG9hZGluZyIsInVzZXIiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxXQUFXLGdCQUFHQyxtREFBQSxDQUFvQixDQUFDLEVBQUQsRUFBSyxNQUFLLENBQUcsQ0FBYixDQUFwQixDQUFwQjtBQUNPLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxzRUFBYyxDQUFDQyxJQUFmLEdBQXNCQyxPQUF0QixFQUFyQjtBQUNBLE1BQU1DLEtBQUssR0FBRyxPQUFPO0FBQUNDLE9BQUQ7QUFBUUM7QUFBUixDQUFQLEtBQTRCO0FBQzdDTCx3RUFBYyxDQUFDQyxJQUFmLEdBQXNCSyxjQUF0QixDQUFxQ0MsdUVBQXJDOztBQUNBLE1BQUk7QUFDRCxVQUFNUCxzRUFBYyxDQUFDQyxJQUFmLEdBQXNCTywwQkFBdEIsQ0FBa0RKLEtBQWxELEVBQTBEQyxRQUExRCxDQUFOO0FBQ0QsR0FGRixDQUVHLE9BQU9JLEtBQVAsRUFBYztBQUNiQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixLQUE1QjtBQUNIO0FBQ0osQ0FQTTtBQVNBLE1BQU1HLE1BQU0sR0FBRyxPQUFPO0FBQUNSLE9BQUQ7QUFBUUMsVUFBUjtBQUFrQlE7QUFBbEIsQ0FBUCxLQUFzQztBQUN4RCxNQUFJO0FBQ0EsVUFBTWIsc0VBQWMsQ0FBQ0MsSUFBZixHQUFzQmEsOEJBQXRCLENBQXFEVixLQUFyRCxFQUE0REMsUUFBNUQsQ0FBTjtBQUNBLFVBQU1GLEtBQUssQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLENBQVgsQ0FGQSxDQUlEOztBQUVDLFVBQU07QUFBQ1U7QUFBRCxRQUFVLE1BQU1DLDRDQUFLLENBQUM7QUFDbEJDLFlBQU0sRUFBRSxNQURVO0FBRWxCQyxTQUFHLEVBQUUsY0FGYTtBQUdsQkgsVUFBSSxFQUFDO0FBQ0hGO0FBREcsT0FIYTtBQU1sQk0sYUFBTyxFQUFDO0FBQ04sd0JBQWdCO0FBRFY7QUFOVSxLQUFELENBQTNCO0FBWVFULFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ1gsR0FuQkQsQ0FtQkUsT0FBT04sS0FBUCxFQUFjO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLEtBQTdCO0FBQ0g7QUFDSixDQXZCTTtBQXlCQSxNQUFNVyxPQUFPLEdBQUcsTUFBSztBQUN4QixRQUFNO0FBQUEsT0FBQ25CO0FBQUQsTUFBU29CLHdEQUFVLENBQUN4QixXQUFELENBQXpCO0FBRUEsU0FBTyxDQUFDSSxJQUFELEVBQU87QUFBQ0UsU0FBRDtBQUFRSixVQUFSO0FBQWdCYTtBQUFoQixHQUFQLENBQVA7QUFDSCxDQUpNO0FBS0EsTUFBTVUsWUFBWSxHQUFFLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWM7QUFDckMsUUFBTTtBQUFBLE9BQUN0QixJQUFEO0FBQUEsT0FBT3VCO0FBQVAsTUFBa0JDLHNEQUFRLENBQUM7QUFDN0JDLFdBQU8sRUFBQyxJQURxQjtBQUU3QkMsUUFBSSxFQUFDO0FBRndCLEdBQUQsQ0FBaEM7QUFLQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1osVUFBTUMsV0FBVyxHQUFHN0Isc0VBQWMsQ0FBQ0MsSUFBZixHQUFzQjZCLGtCQUF0QixDQUF5Q0gsSUFBSSxJQUFJO0FBQ25FSCxhQUFPLENBQUM7QUFDTkUsZUFBTyxFQUFFLEtBREg7QUFFTkM7QUFGTSxPQUFELENBQVA7QUFJRCxLQUxtQixDQUFwQjtBQU1BLFdBQU8sTUFBS0UsV0FBVyxFQUF2QjtBQUNELEdBUk0sRUFRSixFQVJJLENBQVQ7QUFVQSxzQkFDQyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQzVCLElBQUQsRUFBTXVCLE9BQU4sQ0FBN0I7QUFBQSxjQUNJRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtILENBckJNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQsIHBlcnNpc3RlbmNlTW9kZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9maXJlYmFzZS9jbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PnsgfV0pXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNpZ25PdXQoKVxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHtlbWFpbCwgcGFzc3dvcmR9KSA9PntcbiAgICBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2V0UGVyc2lzdGVuY2UocGVyc2lzdGVuY2VNb2RlKVxuICAgIHRyeSB7XG4gICAgICAgYXdhaXQgZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKCBlbWFpbCwgIHBhc3N3b3JkKVxuICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnTE9HSU4gRVJST1I6JywgZXJyb3IpXG4gICAgfVxufVxuIFxuZXhwb3J0IGNvbnN0IHNpZ251cCA9IGFzeW5jICh7ZW1haWwsIHBhc3N3b3JkLCB1c2VybmFtZX0pID0+e1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICBhd2FpdCBsb2dpbihlbWFpbCwgcGFzc3dvcmQpXG5cbiAgICAgICAvLyBzZXR1cFByb2ZpbGUodG9rZW4sIHVzZXJuYW1lKVxuICAgICAgICBcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAnQXV0b3JpemF0aW9uJzpgQmVhcmVyIGBcbiAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnU0lHTlVQIEVSUk9SOicsIGVycm9yKSAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+e1xuICAgIGNvbnN0IFthdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpIFxuXG4gICAgcmV0dXJuIFthdXRoLCB7bG9naW4sIGxvZ291dCwgc2lnbnVwfV1cbn1cbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSh7Y2hpbGRyZW59KT0+e1xuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbG9hZGluZzp0cnVlLFxuICAgICAgICB1c2VyOmZhbHNlXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gZmlyZWJhc2VDbGllbnQuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCh1c2VyID0+IHtcbiAgICAgICAgICBzZXRBdXRoKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdXNlclxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiAoKSA9PnVuc3Vic2NyaWJlKClcbiAgICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1thdXRoLHNldEF1dGhdfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Auth/index.js\n");

/***/ }),

/***/ "./config/firebase/client.js":
/*!***********************************!*\
  !*** ./config/firebase/client.js ***!
  \***********************************/
/*! exports provided: persistenceMode, firebaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"persistenceMode\", function() { return persistenceMode; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"firebaseClient\", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCngZQ9iGlQzriX6iwbMfoK4RUjk3rgQ34\",\n  authDomain: \"clocker-work-ves.firebaseapp.com\",\n  projectId: \"clocker-work-ves\",\n  storageBucket: \"clocker-work-ves.appspot.com\",\n  messagingSenderId: \"230200141503\",\n  appId: \"1:230200141503:web:d8cd490f9b71c323bdc80a\",\n  measurementId: \"G-6D4JW8F3HR\"\n};\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app() : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\nconst persistenceMode = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UvY2xpZW50LmpzP2I3ZmMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiZmlyZWJhc2VDbGllbnQiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInBlcnNpc3RlbmNlTW9kZSIsImF1dGgiLCJBdXRoIiwiUGVyc2lzdGVuY2UiLCJMT0NBTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUVDLHlDQURXO0FBRW5CQyxZQUFVLEVBQUVELGtDQUZPO0FBR25CRSxXQUFTLEVBQUVGLGtCQUhRO0FBSW5CRyxlQUFhLEVBQUVILDhCQUpJO0FBS25CSSxtQkFBaUIsRUFBRUosY0FMQTtBQU1uQkssT0FBSyxFQUFFTCwyQ0FOWTtBQU9uQk0sZUFBYSxFQUFFTixjQUFzQ087QUFQbEMsQ0FBdkI7QUFVQSxNQUFNQyxHQUFHLEdBQUdDLG1EQUFjLENBQUNDLElBQWYsQ0FBb0JDLE1BQXBCLEdBQ05GLG1EQUFjLENBQUNELEdBQWYsRUFETSxHQUVOQyxtREFBYyxDQUFDRyxhQUFmLENBQTZCZCxjQUE3QixDQUZOO0FBSU8sTUFBTWUsZUFBZSxHQUFHSixtREFBYyxDQUFDSyxJQUFmLENBQW9CQyxJQUFwQixDQUF5QkMsV0FBekIsQ0FBcUNDLEtBQTdEIiwiZmlsZSI6Ii4vY29uZmlnL2ZpcmViYXNlL2NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZUNsaWVudCBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcbiAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCxcbn1cblxuY29uc3QgYXBwID0gZmlyZWJhc2VDbGllbnQuYXBwcy5sZW5ndGhcbiAgICA/IGZpcmViYXNlQ2xpZW50LmFwcCgpXG4gICAgOiBmaXJlYmFzZUNsaWVudC5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVuY2VNb2RlID0gZmlyZWJhc2VDbGllbnQuYXV0aC5BdXRoLlBlcnNpc3RlbmNlLkxPQ0FMXG5cbmV4cG9ydCB7IGZpcmViYXNlQ2xpZW50IH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase/client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Auth */ \"./components/Auth/index.js\");\n\nvar _jsxFileName = \"/home/nil/projetos/clocker/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Auth__WEBPACK_IMPORTED_MODULE_2__[\"AuthProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLCtEQUFEO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQXV0aFwiXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });