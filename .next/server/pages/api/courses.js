"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/courses";
exports.ids = ["pages/api/courses"];
exports.modules = {

/***/ "(api)/./pages/api/courses.js":
/*!******************************!*\
  !*** ./pages/api/courses.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"(api)/./pages/config.js\");\n\nfunction handler(req, res) {\n    res.status(200).json({\n        courses: _config__WEBPACK_IMPORTED_MODULE_0__.courses\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY291cnNlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztBQUVwQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN2Q0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztRQUFDTCxPQUFPO0lBQUMsQ0FBQztBQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhaW5pbmctcHJvamVjdC8uL3BhZ2VzL2FwaS9jb3Vyc2VzLmpzP2M0Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY291cnNlcyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY291cnNlcyB9KVxuICB9Il0sIm5hbWVzIjpbImNvdXJzZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/courses.js\n");

/***/ }),

/***/ "(api)/./pages/config.js":
/*!*************************!*\
  !*** ./pages/config.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"courses\": () => (/* binding */ courses)\n/* harmony export */ });\nconst courses = 'http://94.237.3.78:4000/api/createUser';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsT0FBTyxHQUFHLENBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhaW5pbmctcHJvamVjdC8uL3BhZ2VzL2NvbmZpZy5qcz9mNWU0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb3Vyc2VzID0gJ2h0dHA6Ly85NC4yMzcuMy43ODo0MDAwL2FwaS9jcmVhdGVVc2VyJyJdLCJuYW1lcyI6WyJjb3Vyc2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/config.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/courses.js"));
module.exports = __webpack_exports__;

})();