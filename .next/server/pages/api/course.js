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
exports.id = "pages/api/course";
exports.ids = ["pages/api/course"];
exports.modules = {

/***/ "(api)/./data/course.js":
/*!************************!*\
  !*** ./data/course.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"course\": () => (/* binding */ course)\n/* harmony export */ });\nconst course = \"http://94.237.3.78:4000/api/get_course\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvdXJzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxNQUFNLEdBQUcsQ0FBd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbmluZy1wcm9qZWN0Ly4vZGF0YS9jb3Vyc2UuanM/NWNlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY291cnNlID0gXCJodHRwOi8vOTQuMjM3LjMuNzg6NDAwMC9hcGkvZ2V0X2NvdXJzZVwiOyAiXSwibmFtZXMiOlsiY291cnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/course.js\n");

/***/ }),

/***/ "(api)/./pages/api/course.js":
/*!*****************************!*\
  !*** ./pages/api/course.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/course */ \"(api)/./data/course.js\");\n\nfunction handler(req, res) {\n    res.status(200).json({\n        course: `http://94.237.3.78:4000/api/get_course`\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY291cnNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdDO0FBRXpCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1FBQUNMLE1BQU0sR0FBRyxzQ0FBc0M7SUFBQyxDQUFDO0FBQzFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFpbmluZy1wcm9qZWN0Ly4vcGFnZXMvYXBpL2NvdXJzZS5qcz9kYTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y291cnNlfSBmcm9tIFwiLi4vLi4vZGF0YS9jb3Vyc2VcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3Vyc2U6IGBodHRwOi8vOTQuMjM3LjMuNzg6NDAwMC9hcGkvZ2V0X2NvdXJzZWB9KVxuICB9Il0sIm5hbWVzIjpbImNvdXJzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/course.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/course.js"));
module.exports = __webpack_exports__;

})();