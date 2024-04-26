"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/report/new/page",{

/***/ "(app-pages-browser)/./src/app/movies/report/new/page.tsx":
/*!********************************************!*\
  !*** ./src/app/movies/report/new/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newReport; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_api */ \"(app-pages-browser)/./src/app/_api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction newReport() {\n    _s();\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [director, setDirector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [releaseSDate, setReleaseSDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [releaseEDate, setReleaseEDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(releaseSDate);\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getDirectors().then((res)=>{\n            setDirectors(res.directors);\n        });\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getGenres().then((res)=>{\n            setGenre(res.genres);\n        });\n    }, []);\n    function createReport() {\n        console.log(\"Creating report\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Report\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"director\",\n                                className: \"me-2\",\n                                children: \"Director\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"director\",\n                                id: \"director\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setDirector(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"all\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 25\n                                    }, this),\n                                    directors.map((director)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: director,\n                                            children: director\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 52\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"releaseSDate\",\n                                className: \"me-2\",\n                                children: \"Release Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_sdate\",\n                                id: \"releaseSDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseSDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_edate\",\n                                id: \"releaseEDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseEDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"genre\",\n                                className: \"me-2\",\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"genre\",\n                                id: \"genre\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setGenres(e.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rating\",\n                                className: \"me-2\",\n                                children: \"Rating\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"rating\",\n                                id: \"rating\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>createReport(),\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/new/page.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(newReport, \"Qec+MB6FFQ+fTRrcKa1qfFNDIrQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9uZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNsQjtBQUVsQixTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFXLEVBQUU7SUFDdkQsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JELE1BQU0sQ0FBQ0csUUFBUUMsVUFBVSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ05nQixRQUFRQyxHQUFHLENBQUNWO1FBQ1pOLDRDQUFJQSxDQUFDaUIsS0FBSyxDQUFDQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUE7WUFDM0JqQixhQUFhaUIsSUFBSWxCLFNBQVM7UUFDOUI7UUFDQUYsNENBQUlBLENBQUNpQixLQUFLLENBQUNJLFNBQVMsR0FBR0YsSUFBSSxDQUFDQyxDQUFBQTtZQUN4Qk4sU0FBU00sSUFBSVQsTUFBTTtRQUN2QjtJQUNKLEdBQUcsRUFBRTtJQUVMLFNBQVNXO1FBQ0xQLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDTzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOztrQ0FDRyw4REFBQ0E7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV0YsV0FBVTswQ0FBTzs7Ozs7OzBDQUMzQyw4REFBQ0c7Z0NBQU9DLE1BQUs7Z0NBQVdDLElBQUc7Z0NBQVdMLFdBQVU7Z0NBQWFNLFVBQVVDLENBQUFBO29DQUFNM0IsWUFBWTJCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBQzs7a0RBQ3BHLDhEQUFDQzt3Q0FBT0QsT0FBTTtrREFBTTs7Ozs7O29DQUNuQmhDLFVBQVVrQyxHQUFHLENBQUNoQyxDQUFBQSx5QkFBWSw4REFBQytCOzRDQUFPRCxPQUFPOUI7c0RBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzdELDhEQUFDbUI7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBZUYsV0FBVTswQ0FBTzs7Ozs7OzBDQUMvQyw4REFBQ1k7Z0NBQU1DLE1BQUs7Z0NBQU9ULE1BQUs7Z0NBQWdCQyxJQUFHO2dDQUFlTCxXQUFVO2dDQUFhTSxVQUFVQyxDQUFBQTtvQ0FBTXpCLGdCQUFnQixJQUFJQyxLQUFLd0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFFOzs7Ozs7MENBQzFJLDhEQUFDSzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDRjtnQ0FBTUMsTUFBSztnQ0FBT1QsTUFBSztnQ0FBZ0JDLElBQUc7Z0NBQWVMLFdBQVU7Z0NBQWFNLFVBQVVDLENBQUFBO29DQUFNdEIsZ0JBQWdCLElBQUlGLEtBQUt3QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7Ozs7Ozs7OztrQ0FFOUksOERBQUNYO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVFGLFdBQVU7MENBQU87Ozs7OzswQ0FDeEMsOERBQUNZO2dDQUFNQyxNQUFLO2dDQUFPVCxNQUFLO2dDQUFRQyxJQUFHO2dDQUFRTCxXQUFVO2dDQUFhTSxVQUFVQyxDQUFBQTtvQ0FBTXBCLFVBQVVvQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUM7Ozs7Ozs7Ozs7OztrQ0FFL0csOERBQUNYO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVNGLFdBQVU7MENBQU87Ozs7OzswQ0FDekMsOERBQUNZO2dDQUFNQyxNQUFLO2dDQUFTVCxNQUFLO2dDQUFTQyxJQUFHO2dDQUFTTCxXQUFVO2dDQUFhTSxVQUFVQyxDQUFBQTtvQ0FBTVEsVUFBVUMsT0FBT0MsUUFBUSxDQUFDVixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7Ozs7Ozs7OztrQ0FFcEksOERBQUNTO3dCQUFPQyxTQUFTLElBQU10QjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQW5Eb0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vdmllcy9yZXBvcnQvbmV3L3BhZ2UudHN4P2ZhMDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9hcGkgZnJvbSAnLi4vLi4vLi4vX2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1JlcG9ydCgpIHtcbiAgICBjb25zdCBbZGlyZWN0b3JzLCBzZXREaXJlY3RvcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICAgIGNvbnN0IFtkaXJlY3Rvciwgc2V0RGlyZWN0b3JdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3JlbGVhc2VTRGF0ZSwgc2V0UmVsZWFzZVNEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW3JlbGVhc2VFRGF0ZSwgc2V0UmVsZWFzZUVEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZWxlYXNlU0RhdGUpXG4gICAgICAgIF9hcGkubW92aWUuZ2V0RGlyZWN0b3JzKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2V0RGlyZWN0b3JzKHJlcy5kaXJlY3RvcnMpXG4gICAgICAgIH0pXG4gICAgICAgIF9hcGkubW92aWUuZ2V0R2VucmVzKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2V0R2VucmUocmVzLmdlbnJlcylcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlcG9ydCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyByZXBvcnRcIilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBSZXBvcnQ8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdG9yXCIgY2xhc3NOYW1lPVwibWUtMlwiPkRpcmVjdG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZGlyZWN0b3JcIiBpZD1cImRpcmVjdG9yXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXREaXJlY3RvcihlLnRhcmdldC52YWx1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXJlY3RvcnMubWFwKGRpcmVjdG9yID0+IDxvcHRpb24gdmFsdWU9e2RpcmVjdG9yfT57ZGlyZWN0b3J9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWxlYXNlU0RhdGVcIiBjbGFzc05hbWU9XCJtZS0yXCI+UmVsZWFzZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInJlbGVhc2Vfc2RhdGVcIiBpZD1cInJlbGVhc2VTRGF0ZVwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7c2V0UmVsZWFzZVNEYXRlKG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gfiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJyZWxlYXNlX2VkYXRlXCIgaWQ9XCJyZWxlYXNlRURhdGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldFJlbGVhc2VFRGF0ZShuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkpfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCIgY2xhc3NOYW1lPVwibWUtMlwiPkdlbnJlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJnZW5yZVwiIGlkPVwiZ2VucmVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldEdlbnJlcyhlLnRhcmdldC52YWx1ZSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwibWUtMlwiPlJhdGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXRSYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlUmVwb3J0KCl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIl9hcGkiLCJuZXdSZXBvcnQiLCJkaXJlY3RvcnMiLCJzZXREaXJlY3RvcnMiLCJkaXJlY3RvciIsInNldERpcmVjdG9yIiwicmVsZWFzZVNEYXRlIiwic2V0UmVsZWFzZVNEYXRlIiwiRGF0ZSIsInJlbGVhc2VFRGF0ZSIsInNldFJlbGVhc2VFRGF0ZSIsImdlbnJlcyIsInNldEdlbnJlcyIsImdlbnJlIiwic2V0R2VucmUiLCJjb25zb2xlIiwibG9nIiwibW92aWUiLCJnZXREaXJlY3RvcnMiLCJ0aGVuIiwicmVzIiwiZ2V0R2VucmVzIiwiY3JlYXRlUmVwb3J0IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsIm1hcCIsImlucHV0IiwidHlwZSIsInNwYW4iLCJzZXRSYXRpbmciLCJOdW1iZXIiLCJwYXJzZUludCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movies/report/new/page.tsx\n"));

/***/ })

});