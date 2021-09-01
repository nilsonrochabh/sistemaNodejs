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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signup\", function() { return signup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/firebase/client */ \"./config/firebase/client.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/nil/projetos/clocker/components/Auth/index.js\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"]([{}, () => {}]);\nconst logout = () => _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().signOut();\nconst login = async ({\n  email,\n  password\n}) => {\n  _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().setPersistence(_config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"persistenceMode\"]);\n\n  try {\n    await _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().signInWithEmailAndPassword(email, password);\n    return _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().currentUser;\n  } catch (error) {\n    console.log('LOGIN ERROR:', error);\n  }\n};\nconst signup = async ({\n  email,\n  password,\n  username\n}) => {\n  try {\n    //await firebaseClient.auth().createUserWithEmailAndPassword(email, password)\n    const user = await login(email, password);\n    const token = await user.getIdToken();\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: 'post',\n      url: '/api/profile',\n      data: {\n        username\n      },\n      headers: {\n        'Autorization': `Bearer ${token}`\n      }\n    });\n    console.log(data);\n  } catch (error) {\n    console.log('SIGNUP ERROR:', error);\n  }\n};\nconst useAuth = () => {\n  const {\n    0: auth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(AuthContext);\n  return [auth, {\n    login,\n    logout,\n    signup\n  }];\n};\nconst AuthProvider = ({\n  children\n}) => {\n  const {\n    0: auth,\n    1: setAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    loading: true,\n    user: false\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const unsubscribe = _config_firebase_client__WEBPACK_IMPORTED_MODULE_2__[\"firebaseClient\"].auth().onAuthStateChanged(user => {\n      setAuth({\n        loading: false,\n        user\n      });\n    });\n    return () => unsubscribe();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: [auth, setAuth],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 6\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGgvaW5kZXguanM/NjA0NCJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dCIsIlJlYWN0IiwibG9nb3V0IiwiZmlyZWJhc2VDbGllbnQiLCJhdXRoIiwic2lnbk91dCIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInNldFBlcnNpc3RlbmNlIiwicGVyc2lzdGVuY2VNb2RlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjdXJyZW50VXNlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNpZ251cCIsInVzZXJuYW1lIiwidXNlciIsInRva2VuIiwiZ2V0SWRUb2tlbiIsImRhdGEiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImhlYWRlcnMiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwic2V0QXV0aCIsInVzZVN0YXRlIiwibG9hZGluZyIsInVzZUVmZmVjdCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFdBQVcsZ0JBQUdDLG1EQUFBLENBQW9CLENBQUMsRUFBRCxFQUFLLE1BQUssQ0FBRyxDQUFiLENBQXBCLENBQXBCO0FBQ08sTUFBTUMsTUFBTSxHQUFHLE1BQU1DLHNFQUFjLENBQUNDLElBQWYsR0FBc0JDLE9BQXRCLEVBQXJCO0FBRUEsTUFBTUMsS0FBSyxHQUFHLE9BQU87QUFBQ0MsT0FBRDtBQUFRQztBQUFSLENBQVAsS0FBNEI7QUFDN0NMLHdFQUFjLENBQUNDLElBQWYsR0FBc0JLLGNBQXRCLENBQXFDQyx1RUFBckM7O0FBQ0EsTUFBSTtBQUNELFVBQU1QLHNFQUFjLENBQUNDLElBQWYsR0FBc0JPLDBCQUF0QixDQUFrREosS0FBbEQsRUFBMERDLFFBQTFELENBQU47QUFDQSxXQUFPTCxzRUFBYyxDQUFDQyxJQUFmLEdBQXNCUSxXQUE3QjtBQUVELEdBSkYsQ0FJRyxPQUFPQyxLQUFQLEVBQWM7QUFDYkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsS0FBNUI7QUFDSDtBQUNKLENBVE07QUFXQSxNQUFNRyxNQUFNLEdBQUcsT0FBTztBQUFDVCxPQUFEO0FBQVFDLFVBQVI7QUFBa0JTO0FBQWxCLENBQVAsS0FBc0M7QUFDeEQsTUFBSTtBQUNBO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1aLEtBQUssQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLENBQXhCO0FBQ0EsVUFBTVcsS0FBSyxHQUFHLE1BQU1ELElBQUksQ0FBQ0UsVUFBTCxFQUFwQjtBQUVBLFVBQU07QUFBQ0M7QUFBRCxRQUFVLE1BQU1DLDRDQUFLLENBQUM7QUFDbEJDLFlBQU0sRUFBRSxNQURVO0FBRWxCQyxTQUFHLEVBQUUsY0FGYTtBQUdsQkgsVUFBSSxFQUFDO0FBQUNKO0FBQUQsT0FIYTtBQUlsQlEsYUFBTyxFQUFDO0FBQ04sd0JBQWdCLFVBQVNOLEtBQU07QUFEekI7QUFKVSxLQUFELENBQTNCO0FBU1FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxJQUFaO0FBQ1gsR0FmRCxDQWVFLE9BQU9SLEtBQVAsRUFBYztBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixLQUE3QjtBQUNIO0FBQ0osQ0FuQk07QUFxQkEsTUFBTWEsT0FBTyxHQUFHLE1BQUs7QUFDeEIsUUFBTTtBQUFBLE9BQUN0QjtBQUFELE1BQVN1Qix3REFBVSxDQUFDM0IsV0FBRCxDQUF6QjtBQUVBLFNBQU8sQ0FBQ0ksSUFBRCxFQUFPO0FBQUNFLFNBQUQ7QUFBUUosVUFBUjtBQUFnQmM7QUFBaEIsR0FBUCxDQUFQO0FBQ0gsQ0FKTTtBQUtBLE1BQU1ZLFlBQVksR0FBRSxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFjO0FBQ3JDLFFBQU07QUFBQSxPQUFDekIsSUFBRDtBQUFBLE9BQU8wQjtBQUFQLE1BQWtCQyxzREFBUSxDQUFDO0FBQzdCQyxXQUFPLEVBQUMsSUFEcUI7QUFFN0JkLFFBQUksRUFBQztBQUZ3QixHQUFELENBQWhDO0FBS0FlLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1DLFdBQVcsR0FBRy9CLHNFQUFjLENBQUNDLElBQWYsR0FBc0IrQixrQkFBdEIsQ0FBeUNqQixJQUFJLElBQUk7QUFDbkVZLGFBQU8sQ0FBQztBQUNORSxlQUFPLEVBQUUsS0FESDtBQUVOZDtBQUZNLE9BQUQsQ0FBUDtBQUlELEtBTG1CLENBQXBCO0FBTUEsV0FBTyxNQUFLZ0IsV0FBVyxFQUF2QjtBQUNELEdBUk0sRUFRSixFQVJJLENBQVQ7QUFVQSxzQkFDQyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUUsQ0FBQzlCLElBQUQsRUFBTTBCLE9BQU4sQ0FBN0I7QUFBQSxjQUNJRDtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUtILENBckJNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdXRoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmlyZWJhc2VDbGllbnQsIHBlcnNpc3RlbmNlTW9kZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9maXJlYmFzZS9jbGllbnQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoW3t9LCAoKSA9PnsgfV0pXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gZmlyZWJhc2VDbGllbnQuYXV0aCgpLnNpZ25PdXQoKVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoe2VtYWlsLCBwYXNzd29yZH0pID0+e1xuICAgIGZpcmViYXNlQ2xpZW50LmF1dGgoKS5zZXRQZXJzaXN0ZW5jZShwZXJzaXN0ZW5jZU1vZGUpXG4gICAgdHJ5IHtcbiAgICAgICBhd2FpdCBmaXJlYmFzZUNsaWVudC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoIGVtYWlsLCAgcGFzc3dvcmQpXG4gICAgICAgcmV0dXJuIGZpcmViYXNlQ2xpZW50LmF1dGgoKS5jdXJyZW50VXNlclxuICAgICAgICBcbiAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xPR0lOIEVSUk9SOicsIGVycm9yKVxuICAgIH1cbn1cbiBcbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAoe2VtYWlsLCBwYXNzd29yZCwgdXNlcm5hbWV9KSA9PntcbiAgICB0cnkge1xuICAgICAgICAvL2F3YWl0IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbigpXG5cbiAgICAgICAgY29uc3Qge2RhdGF9ID0gIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9wcm9maWxlJyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6e3VzZXJuYW1lfSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xuICAgICAgICAgICAgICAgICAgICAnQXV0b3JpemF0aW9uJzpgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NJR05VUCBFUlJPUjonLCBlcnJvcikgICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PntcbiAgICBjb25zdCBbYXV0aF0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KSBcblxuICAgIHJldHVybiBbYXV0aCwge2xvZ2luLCBsb2dvdXQsIHNpZ251cH1dXG59XG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0oe2NoaWxkcmVufSk9PntcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6dHJ1ZSxcbiAgICAgICAgdXNlcjpmYWxzZVxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XG4gICAgICAgICAgc2V0QXV0aCh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKCkgPT51bnN1YnNjcmliZSgpXG4gICAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbYXV0aCxzZXRBdXRoXX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/index.js\n");

/***/ }),

/***/ "./config/firebase/client.js":
/*!***********************************!*\
  !*** ./config/firebase/client.js ***!
  \***********************************/
/*! exports provided: persistenceMode, getToken, firebaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"persistenceMode\", function() { return persistenceMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getToken\", function() { return getToken; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"firebaseClient\", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCngZQ9iGlQzriX6iwbMfoK4RUjk3rgQ34\",\n  authDomain: \"clocker-work-ves.firebaseapp.com\",\n  projectId: \"clocker-work-ves\",\n  storageBucket: \"clocker-work-ves.appspot.com\",\n  messagingSenderId: \"230200141503\",\n  appId: \"1:230200141503:web:d8cd490f9b71c323bdc80a\",\n  measurementId: \"G-6D4JW8F3HR\"\n};\nconst app = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app() : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);\nconst persistenceMode = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL;\nconst getToken = () => firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.getIdToken();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UvY2xpZW50LmpzP2I3ZmMiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiZmlyZWJhc2VDbGllbnQiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInBlcnNpc3RlbmNlTW9kZSIsImF1dGgiLCJBdXRoIiwiUGVyc2lzdGVuY2UiLCJMT0NBTCIsImdldFRva2VuIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFQyx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFRCxrQ0FGTztBQUduQkUsV0FBUyxFQUFFRixrQkFIUTtBQUluQkcsZUFBYSxFQUFFSCw4QkFKSTtBQUtuQkksbUJBQWlCLEVBQUVKLGNBTEE7QUFNbkJLLE9BQUssRUFBRUwsMkNBTlk7QUFPbkJNLGVBQWEsRUFBRU4sY0FBc0NPO0FBUGxDLENBQXZCO0FBVUEsTUFBTUMsR0FBRyxHQUFHQyxtREFBYyxDQUFDQyxJQUFmLENBQW9CQyxNQUFwQixHQUNORixtREFBYyxDQUFDRCxHQUFmLEVBRE0sR0FFTkMsbURBQWMsQ0FBQ0csYUFBZixDQUE2QmQsY0FBN0IsQ0FGTjtBQUlPLE1BQU1lLGVBQWUsR0FBR0osbURBQWMsQ0FBQ0ssSUFBZixDQUFvQkMsSUFBcEIsQ0FBeUJDLFdBQXpCLENBQXFDQyxLQUE3RDtBQUdBLE1BQU1DLFFBQVEsR0FBRSxNQUFNVCxtREFBYyxDQUFDSyxJQUFmLEdBQXNCSyxXQUF0QixDQUFrQ0MsVUFBbEMsRUFBdEIiLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UvY2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlQ2xpZW50IGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0lELFxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lELFxufVxuXG5jb25zdCBhcHAgPSBmaXJlYmFzZUNsaWVudC5hcHBzLmxlbmd0aFxuICAgID8gZmlyZWJhc2VDbGllbnQuYXBwKClcbiAgICA6IGZpcmViYXNlQ2xpZW50LmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW5jZU1vZGUgPSBmaXJlYmFzZUNsaWVudC5hdXRoLkF1dGguUGVyc2lzdGVuY2UuTE9DQUxcblxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSgpID0+IGZpcmViYXNlQ2xpZW50LmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKClcblxuZXhwb3J0IHsgZmlyZWJhc2VDbGllbnQgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/firebase/client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Auth */ \"./components/Auth/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"date-fns/locale\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/nil/projetos/clocker/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"ChakraProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Auth__WEBPACK_IMPORTED_MODULE_2__[\"AuthProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSxxRUFBQywrREFBRDtBQUFBLDJCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhcIlxuaW1wb3J0IHsgcHRCUn0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJ1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGVcIj9iOTFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale\n");

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