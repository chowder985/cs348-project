"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/report/page",{

/***/ "(app-pages-browser)/./src/app/movies/report/page.tsx":
/*!****************************************!*\
  !*** ./src/app/movies/report/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newReport; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_api */ \"(app-pages-browser)/./src/app/_api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction newReport() {\n    _s();\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [director, setDirector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [releaseSDate, setReleaseSDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [releaseEDate, setReleaseEDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [minRating, setMinRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxRating, setMaxRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(releaseSDate);\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getDirectors().then((res)=>{\n            setDirectors(res.directors);\n        });\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getGenres().then((res)=>{\n            setGenres(res.genres);\n        });\n    }, []);\n    function handleMultipleGenre(index) {}\n    function createReport() {\n        console.log(\"Creating report\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Report\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"director\",\n                                className: \"me-2\",\n                                children: \"Director\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"director\",\n                                id: \"director\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setDirector(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"all\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this),\n                                    directors.map((director)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: director,\n                                            children: director\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 52\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"releaseSDate\",\n                                className: \"me-2\",\n                                children: \"Release Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_sdate\",\n                                id: \"releaseSDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseSDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_edate\",\n                                id: \"releaseEDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseEDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"genre\",\n                                className: \"me-2\",\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            genres.map((param, index)=>{\n                                let { name } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            name: \"genre\",\n                                            id: name,\n                                            value: name,\n                                            className: \"text-black\",\n                                            onChange: (e)=>{\n                                                handleMultipleGenre(index);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: name,\n                                            className: \"me-2\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 54\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rating\",\n                                className: \"me-2\",\n                                children: \"Rating\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"rating\",\n                                id: \"rating\",\n                                className: \"text-black\",\n                                value: \"1\",\n                                min: \"1\",\n                                onChange: (e)=>{\n                                    setMinRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"text-black\",\n                                value: \"10\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMaxRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>createReport(),\n                        children: \"Save\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(newReport, \"wT5axzBZyQy6E+ChK1biASws7KA=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ3JCO0FBRWYsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJVTtJQUNyRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJVTtJQUNyRCxNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQTtJQUNsQyxNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNtQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTm9CLFFBQVFDLEdBQUcsQ0FBQ2Q7UUFDWk4sNENBQUlBLENBQUNxQixLQUFLLENBQUNDLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxDQUFBQTtZQUMzQnJCLGFBQWFxQixJQUFJdEIsU0FBUztRQUM5QjtRQUNBRiw0Q0FBSUEsQ0FBQ3FCLEtBQUssQ0FBQ0ksU0FBUyxHQUFHRixJQUFJLENBQUNDLENBQUFBO1lBQ3hCWixVQUFVWSxJQUFJYixNQUFNO1FBQ3hCO0lBQ0osR0FBRyxFQUFFO0lBRUwsU0FBU2Usb0JBQW9CQyxLQUFhLEdBRTFDO0lBRUEsU0FBU0M7UUFDTFQsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNTOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7O2tDQUNHLDhEQUFDQTt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFXRixXQUFVOzBDQUFPOzs7Ozs7MENBQzNDLDhEQUFDRztnQ0FBT0MsTUFBSztnQ0FBV0MsSUFBRztnQ0FBV0wsV0FBVTtnQ0FBYU0sVUFBVUMsQ0FBQUE7b0NBQU1qQyxZQUFZaUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFDOztrREFDcEcsOERBQUNDO3dDQUFPRCxPQUFNO2tEQUFNOzs7Ozs7b0NBQ25CdEMsVUFBVXdDLEdBQUcsQ0FBQ3RDLENBQUFBLHlCQUFZLDhEQUFDcUM7NENBQU9ELE9BQU9wQztzREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHN0QsOERBQUN5Qjt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFlRixXQUFVOzBDQUFPOzs7Ozs7MENBQy9DLDhEQUFDWTtnQ0FBTUMsTUFBSztnQ0FBT1QsTUFBSztnQ0FBZ0JDLElBQUc7Z0NBQWVMLFdBQVU7Z0NBQWFNLFVBQVVDLENBQUFBO29DQUFNL0IsZ0JBQWdCLElBQUlDLEtBQUs4QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7OzswQ0FDMUksOERBQUNLOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNGO2dDQUFNQyxNQUFLO2dDQUFPVCxNQUFLO2dDQUFnQkMsSUFBRztnQ0FBZUwsV0FBVTtnQ0FBYU0sVUFBVUMsQ0FBQUE7b0NBQU01QixnQkFBZ0IsSUFBSUYsS0FBSzhCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUU5SSw4REFBQ1g7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBUUYsV0FBVTswQ0FBTzs7Ozs7OzRCQUN2Q3BCLE9BQU8rQixHQUFHLENBQUMsUUFBV2Y7b0NBQVYsRUFBRVEsSUFBSSxFQUFFO3FEQUFZLDhEQUFDTjs7c0RBQzlCLDhEQUFDYzs0Q0FBTUMsTUFBSzs0Q0FBV1QsTUFBSzs0Q0FBUUMsSUFBSUQ7NENBQU1LLE9BQU9MOzRDQUFNSixXQUFVOzRDQUFhTSxVQUFVQyxDQUFBQTtnREFBTVosb0JBQW9CQzs0Q0FBTTs7Ozs7O3NEQUM1SCw4REFBQ0s7NENBQU1DLFNBQVNFOzRDQUFNSixXQUFVO3NEQUFRSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNOO3dCQUFJRSxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQU1DLFNBQVE7Z0NBQVNGLFdBQVU7MENBQU87Ozs7OzswQ0FDekMsOERBQUNZO2dDQUFNQyxNQUFLO2dDQUFTVCxNQUFLO2dDQUFTQyxJQUFHO2dDQUFTTCxXQUFVO2dDQUFhUyxPQUFNO2dDQUFJTSxLQUFJO2dDQUFJVCxVQUFVQyxDQUFBQTtvQ0FBTXRCLGFBQWErQixPQUFPQyxRQUFRLENBQUNWLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTs7Ozs7OzBDQUNySiw4REFBQ0s7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0Y7Z0NBQU1DLE1BQUs7Z0NBQVNiLFdBQVU7Z0NBQWFTLE9BQU07Z0NBQUtTLEtBQUk7Z0NBQUtaLFVBQVVDLENBQUFBO29DQUFNcEIsYUFBYTZCLE9BQU9DLFFBQVEsQ0FBQ1YsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO2dDQUFFOzs7Ozs7Ozs7Ozs7a0NBRWpJLDhEQUFDVTt3QkFBT0MsU0FBUyxJQUFNdkI7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkQ7R0E5RG9CM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tb3ZpZXMvcmVwb3J0L3BhZ2UudHN4PzBhOWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9hcGkgZnJvbSAnLi4vLi4vX2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1JlcG9ydCgpIHtcbiAgICBjb25zdCBbZGlyZWN0b3JzLCBzZXREaXJlY3RvcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICAgIGNvbnN0IFtkaXJlY3Rvciwgc2V0RGlyZWN0b3JdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3JlbGVhc2VTRGF0ZSwgc2V0UmVsZWFzZVNEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW3JlbGVhc2VFRGF0ZSwgc2V0UmVsZWFzZUVEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFttaW5SYXRpbmcsIHNldE1pblJhdGluZ10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFttYXhSYXRpbmcsIHNldE1heFJhdGluZ10gPSB1c2VTdGF0ZSgwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVsZWFzZVNEYXRlKVxuICAgICAgICBfYXBpLm1vdmllLmdldERpcmVjdG9ycygpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHNldERpcmVjdG9ycyhyZXMuZGlyZWN0b3JzKVxuICAgICAgICB9KVxuICAgICAgICBfYXBpLm1vdmllLmdldEdlbnJlcygpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHNldEdlbnJlcyhyZXMuZ2VucmVzKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTXVsdGlwbGVHZW5yZShpbmRleDogbnVtYmVyKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXBvcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgcmVwb3J0XCIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DcmVhdGUgUmVwb3J0PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3RvclwiIGNsYXNzTmFtZT1cIm1lLTJcIj5EaXJlY3RvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpcmVjdG9yXCIgaWQ9XCJkaXJlY3RvclwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7c2V0RGlyZWN0b3IoZS50YXJnZXQudmFsdWUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlyZWN0b3JzLm1hcChkaXJlY3RvciA9PiA8b3B0aW9uIHZhbHVlPXtkaXJlY3Rvcn0+e2RpcmVjdG9yfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVsZWFzZVNEYXRlXCIgY2xhc3NOYW1lPVwibWUtMlwiPlJlbGVhc2UgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJyZWxlYXNlX3NkYXRlXCIgaWQ9XCJyZWxlYXNlU0RhdGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldFJlbGVhc2VTRGF0ZShuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IH4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwicmVsZWFzZV9lZGF0ZVwiIGlkPVwicmVsZWFzZUVEYXRlXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXRSZWxlYXNlRURhdGUobmV3IERhdGUoZS50YXJnZXQudmFsdWUpKX19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiIGNsYXNzTmFtZT1cIm1lLTJcIj5HZW5yZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmVzLm1hcCgoeyBuYW1lIH0sIGluZGV4KSA9PiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJnZW5yZVwiIGlkPXtuYW1lfSB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtoYW5kbGVNdWx0aXBsZUdlbnJlKGluZGV4KX19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwibWUtMlwiPntuYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYXRpbmdcIiBjbGFzc05hbWU9XCJtZS0yXCI+UmF0aW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicmF0aW5nXCIgaWQ9XCJyYXRpbmdcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdmFsdWU9XCIxXCIgbWluPVwiMVwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNaW5SYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gfiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHZhbHVlPVwiMTBcIiBtYXg9XCIxMFwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNYXhSYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlUmVwb3J0KCl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIl9hcGkiLCJuZXdSZXBvcnQiLCJkaXJlY3RvcnMiLCJzZXREaXJlY3RvcnMiLCJkaXJlY3RvciIsInNldERpcmVjdG9yIiwicmVsZWFzZVNEYXRlIiwic2V0UmVsZWFzZVNEYXRlIiwiRGF0ZSIsInJlbGVhc2VFRGF0ZSIsInNldFJlbGVhc2VFRGF0ZSIsImdlbnJlcyIsInNldEdlbnJlcyIsImdlbnJlIiwic2V0R2VucmUiLCJtaW5SYXRpbmciLCJzZXRNaW5SYXRpbmciLCJtYXhSYXRpbmciLCJzZXRNYXhSYXRpbmciLCJjb25zb2xlIiwibG9nIiwibW92aWUiLCJnZXREaXJlY3RvcnMiLCJ0aGVuIiwicmVzIiwiZ2V0R2VucmVzIiwiaGFuZGxlTXVsdGlwbGVHZW5yZSIsImluZGV4IiwiY3JlYXRlUmVwb3J0IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsIm1hcCIsImlucHV0IiwidHlwZSIsInNwYW4iLCJtaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsIm1heCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movies/report/page.tsx\n"));

/***/ })

});