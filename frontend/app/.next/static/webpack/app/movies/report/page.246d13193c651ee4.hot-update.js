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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newReport; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_api */ \"(app-pages-browser)/./src/app/_api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction newReport() {\n    _s();\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [director, setDirector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [releaseSDate, setReleaseSDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [releaseEDate, setReleaseEDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [minRating, setMinRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [maxRating, setMaxRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getDirectors().then((res)=>{\n            setDirectors(res.directors);\n        });\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getGenres().then((res)=>{\n            setGenres(res.genres);\n            setGenre(new Array(res.genres.length).fill(false));\n        });\n    }, []);\n    function handleMultipleGenre(index) {\n        let newGenre = genre;\n        newGenre[index] = !newGenre[index];\n        console.log(genre);\n    }\n    function createReport() {\n        console.log(\"Creating report\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Report\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"director\",\n                                className: \"me-2\",\n                                children: \"Director\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"director\",\n                                id: \"director\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setDirector(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"all\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, this),\n                                    directors.map((director, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: director,\n                                            children: director\n                                        }, index, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 61\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"releaseSDate\",\n                                className: \"me-2\",\n                                children: \"Release Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_sdate\",\n                                id: \"releaseSDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseSDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_edate\",\n                                id: \"releaseEDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseEDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"genre\",\n                                className: \"me-2\",\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            genres.map((param, index)=>{\n                                let { name } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            name: \"genre\",\n                                            id: name,\n                                            value: name,\n                                            className: \"text-black\",\n                                            onChange: (e)=>{\n                                                handleMultipleGenre(index);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: name,\n                                            className: \"ms-2\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 54\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rating\",\n                                className: \"me-2\",\n                                children: \"Rating\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"rating\",\n                                id: \"rating\",\n                                className: \"text-black\",\n                                value: minRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMinRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"text-black\",\n                                value: maxRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMaxRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>createReport(),\n                        children: \"Generate Report\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(newReport, \"7TPa2uu/gImXb64LckcOm7wloyU=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ3JCO0FBRWYsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3ZELE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJVTtJQUNyRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJVTtJQUNyRCxNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsSUFBSWU7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQyxJQUFJZTtJQUN2QyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29CLFdBQVdDLGFBQWEsR0FBR3JCLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNOQyw0Q0FBSUEsQ0FBQ29CLEtBQUssQ0FBQ0MsWUFBWSxHQUFHQyxJQUFJLENBQUNDLENBQUFBO1lBQzNCcEIsYUFBYW9CLElBQUlyQixTQUFTO1FBQzlCO1FBQ0FGLDRDQUFJQSxDQUFDb0IsS0FBSyxDQUFDSSxTQUFTLEdBQUdGLElBQUksQ0FBQ0MsQ0FBQUE7WUFDeEJYLFVBQVVXLElBQUlaLE1BQU07WUFDcEJJLFNBQVMsSUFBSUYsTUFBTVUsSUFBSVosTUFBTSxDQUFDYyxNQUFNLEVBQUVDLElBQUksQ0FBQztRQUMvQztJQUNKLEdBQUcsRUFBRTtJQUVMLFNBQVNDLG9CQUFvQkMsS0FBYTtRQUN0QyxJQUFJQyxXQUFXZjtRQUNmZSxRQUFRLENBQUNELE1BQU0sR0FBRyxDQUFDQyxRQUFRLENBQUNELE1BQU07UUFDbENFLFFBQVFDLEdBQUcsQ0FBQ2pCO0lBQ2hCO0lBRUEsU0FBU2tCO1FBQ0xGLFFBQVFDLEdBQUcsQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRTs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOztrQ0FDRyw4REFBQ0E7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV0YsV0FBVTswQ0FBTzs7Ozs7OzBDQUMzQyw4REFBQ0c7Z0NBQU9DLE1BQUs7Z0NBQVdDLElBQUc7Z0NBQVdMLFdBQVU7Z0NBQWFNLFVBQVVDLENBQUFBO29DQUFNckMsWUFBWXFDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBQzs7a0RBQ3BHLDhEQUFDQzt3Q0FBT0QsT0FBTTtrREFBTTs7Ozs7O29DQUNuQjFDLFVBQVU0QyxHQUFHLENBQUMsQ0FBQzFDLFVBQVV3QixzQkFBVSw4REFBQ2lCOzRDQUFtQkQsT0FBT3hDO3NEQUFXQTsyQ0FBekJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pELDhEQUFDSzt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFlRixXQUFVOzBDQUFPOzs7Ozs7MENBQy9DLDhEQUFDWTtnQ0FBTUMsTUFBSztnQ0FBT1QsTUFBSztnQ0FBZ0JDLElBQUc7Z0NBQWVMLFdBQVU7Z0NBQWFNLFVBQVVDLENBQUFBO29DQUFNbkMsZ0JBQWdCLElBQUlDLEtBQUtrQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7OzswQ0FDMUksOERBQUNLOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNGO2dDQUFNQyxNQUFLO2dDQUFPVCxNQUFLO2dDQUFnQkMsSUFBRztnQ0FBZUwsV0FBVTtnQ0FBYU0sVUFBVUMsQ0FBQUE7b0NBQU1oQyxnQkFBZ0IsSUFBSUYsS0FBS2tDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUU5SSw4REFBQ1g7d0JBQUlFLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBUUYsV0FBVTswQ0FBTzs7Ozs7OzRCQUN2Q3hCLE9BQU9tQyxHQUFHLENBQUMsUUFBV2xCO29DQUFWLEVBQUVXLElBQUksRUFBRTtxREFBWSw4REFBQ047O3NEQUM5Qiw4REFBQ2M7NENBQU1DLE1BQUs7NENBQVdULE1BQUs7NENBQVFDLElBQUlEOzRDQUFNSyxPQUFPTDs0Q0FBTUosV0FBVTs0Q0FBYU0sVUFBVUMsQ0FBQUE7Z0RBQU1mLG9CQUFvQkM7NENBQU07Ozs7OztzREFDNUgsOERBQUNROzRDQUFNQyxTQUFTRTs0Q0FBTUosV0FBVTtzREFBUUk7Ozs7Ozs7bUNBRkRYOzs7Ozs7Ozs7Ozs7a0NBSy9DLDhEQUFDSzt3QkFBSUUsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFTRixXQUFVOzBDQUFPOzs7Ozs7MENBQ3pDLDhEQUFDWTtnQ0FBTUMsTUFBSztnQ0FBU1QsTUFBSztnQ0FBU0MsSUFBRztnQ0FBU0wsV0FBVTtnQ0FBYVMsT0FBTzVCO2dDQUFXa0MsS0FBSTtnQ0FBSUMsS0FBSTtnQ0FBS1YsVUFBVUMsQ0FBQUE7b0NBQU16QixhQUFhbUMsT0FBT0MsUUFBUSxDQUFDWCxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7OzswQ0FDdEssOERBQUNLOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNGO2dDQUFNQyxNQUFLO2dDQUFTYixXQUFVO2dDQUFhUyxPQUFPMUI7Z0NBQVdnQyxLQUFJO2dDQUFJQyxLQUFJO2dDQUFLVixVQUFVQyxDQUFBQTtvQ0FBTXZCLGFBQWFpQyxPQUFPQyxRQUFRLENBQUNYLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVoSiw4REFBQ1U7d0JBQU9DLFNBQVMsSUFBTXZCO2tDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5EO0dBaEVvQi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeD8wYTlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfYXBpIGZyb20gJy4uLy4uL19hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdSZXBvcnQoKSB7XG4gICAgY29uc3QgW2RpcmVjdG9ycywgc2V0RGlyZWN0b3JzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcbiAgICBjb25zdCBbZGlyZWN0b3IsIHNldERpcmVjdG9yXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtyZWxlYXNlU0RhdGUsIHNldFJlbGVhc2VTRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxuICAgIGNvbnN0IFtyZWxlYXNlRURhdGUsIHNldFJlbGVhc2VFRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxuICAgIGNvbnN0IFtnZW5yZXMsIHNldEdlbnJlc10gPSB1c2VTdGF0ZShuZXcgQXJyYXkoKSlcbiAgICBjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgpKVxuICAgIGNvbnN0IFttaW5SYXRpbmcsIHNldE1pblJhdGluZ10gPSB1c2VTdGF0ZSgxKVxuICAgIGNvbnN0IFttYXhSYXRpbmcsIHNldE1heFJhdGluZ10gPSB1c2VTdGF0ZSgxMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIF9hcGkubW92aWUuZ2V0RGlyZWN0b3JzKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2V0RGlyZWN0b3JzKHJlcy5kaXJlY3RvcnMpXG4gICAgICAgIH0pXG4gICAgICAgIF9hcGkubW92aWUuZ2V0R2VucmVzKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2V0R2VucmVzKHJlcy5nZW5yZXMpXG4gICAgICAgICAgICBzZXRHZW5yZShuZXcgQXJyYXkocmVzLmdlbnJlcy5sZW5ndGgpLmZpbGwoZmFsc2UpKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTXVsdGlwbGVHZW5yZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBuZXdHZW5yZSA9IGdlbnJlXG4gICAgICAgIG5ld0dlbnJlW2luZGV4XSA9ICFuZXdHZW5yZVtpbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coZ2VucmUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVwb3J0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIHJlcG9ydFwiKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q3JlYXRlIFJlcG9ydDwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWN0b3JcIiBjbGFzc05hbWU9XCJtZS0yXCI+RGlyZWN0b3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJkaXJlY3RvclwiIGlkPVwiZGlyZWN0b3JcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldERpcmVjdG9yKGUudGFyZ2V0LnZhbHVlKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RpcmVjdG9ycy5tYXAoKGRpcmVjdG9yLCBpbmRleCkgPT4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17ZGlyZWN0b3J9PntkaXJlY3Rvcn08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJlbGVhc2VTRGF0ZVwiIGNsYXNzTmFtZT1cIm1lLTJcIj5SZWxlYXNlIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwicmVsZWFzZV9zZGF0ZVwiIGlkPVwicmVsZWFzZVNEYXRlXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXRSZWxlYXNlU0RhdGUobmV3IERhdGUoZS50YXJnZXQudmFsdWUpKX19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInJlbGVhc2VfZWRhdGVcIiBpZD1cInJlbGVhc2VFRGF0ZVwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7c2V0UmVsZWFzZUVEYXRlKG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VucmVcIiBjbGFzc05hbWU9XCJtZS0yXCI+R2VucmVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2dlbnJlcy5tYXAoKHsgbmFtZSB9LCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ2VucmVcIiBpZD17bmFtZX0gdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7aGFuZGxlTXVsdGlwbGVHZW5yZShpbmRleCl9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1zLTJcIj57bmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwibWUtMlwiPlJhdGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHZhbHVlPXttaW5SYXRpbmd9IG1pbj1cIjFcIiBtYXg9XCIxMFwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNaW5SYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gfiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHZhbHVlPXttYXhSYXRpbmd9IG1pbj1cIjFcIiBtYXg9XCIxMFwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNYXhSYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlUmVwb3J0KCl9PkdlbmVyYXRlIFJlcG9ydDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiX2FwaSIsIm5ld1JlcG9ydCIsImRpcmVjdG9ycyIsInNldERpcmVjdG9ycyIsImRpcmVjdG9yIiwic2V0RGlyZWN0b3IiLCJyZWxlYXNlU0RhdGUiLCJzZXRSZWxlYXNlU0RhdGUiLCJEYXRlIiwicmVsZWFzZUVEYXRlIiwic2V0UmVsZWFzZUVEYXRlIiwiZ2VucmVzIiwic2V0R2VucmVzIiwiQXJyYXkiLCJnZW5yZSIsInNldEdlbnJlIiwibWluUmF0aW5nIiwic2V0TWluUmF0aW5nIiwibWF4UmF0aW5nIiwic2V0TWF4UmF0aW5nIiwibW92aWUiLCJnZXREaXJlY3RvcnMiLCJ0aGVuIiwicmVzIiwiZ2V0R2VucmVzIiwibGVuZ3RoIiwiZmlsbCIsImhhbmRsZU11bHRpcGxlR2VucmUiLCJpbmRleCIsIm5ld0dlbnJlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVJlcG9ydCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJzcGFuIiwibWluIiwibWF4IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movies/report/page.tsx\n"));

/***/ })

});