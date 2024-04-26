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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newReport; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_api */ \"(app-pages-browser)/./src/app/_api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction newReport() {\n    _s();\n    const [generatedReport, setGeneratedReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [director, setDirector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [releaseSDate, setReleaseSDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [releaseEDate, setReleaseEDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [minRating, setMinRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [maxRating, setMaxRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getDirectors().then((res)=>{\n            setDirectors(res.directors);\n        });\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getGenres().then((res)=>{\n            setGenres(res.genres);\n            setGenre(new Array(res.genres.length).fill(false));\n        });\n    }, []);\n    function handleMultipleGenre(index) {\n        let newGenre = genre;\n        newGenre[index] = !newGenre[index];\n    }\n    function createReport() {\n        const report = {\n            director: director,\n            genre: genres.filter((_, index)=>genre[index]),\n            releaseSDate: releaseSDate.toDateString(),\n            releaseEDate: releaseEDate.toDateString(),\n            minRating: minRating,\n            maxRating: maxRating\n        };\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.createReport(report);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Report\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"director\",\n                                className: \"me-2\",\n                                children: \"Director\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"director\",\n                                id: \"director\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setDirector(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"all\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this),\n                                    directors.map((director, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: director,\n                                            children: director\n                                        }, index, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 61\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"releaseSDate\",\n                                className: \"me-2\",\n                                children: \"Release Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_sdate\",\n                                id: \"releaseSDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseSDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_edate\",\n                                id: \"releaseEDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseEDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"genre\",\n                                className: \"me-2\",\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this),\n                            genres.map((param, index)=>{\n                                let { name } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            name: \"genre\",\n                                            id: name,\n                                            value: name,\n                                            className: \"text-black\",\n                                            onChange: (e)=>{\n                                                handleMultipleGenre(index);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: name,\n                                            className: \"ms-2\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 54\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rating\",\n                                className: \"me-2\",\n                                children: \"Rating\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"rating\",\n                                id: \"rating\",\n                                className: \"text-black\",\n                                value: minRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMinRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"text-black\",\n                                value: maxRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMaxRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>createReport(),\n                        children: \"Generate Report\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(newReport, \"XMtc/4ggBDkTEL0nuB55OqVKhco=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ3JCO0FBR2YsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQWEsRUFBRTtJQUNyRSxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUN2RCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUMsSUFBSVk7SUFDckQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsSUFBSVk7SUFDckQsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJaUI7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBQyxJQUFJaUI7SUFDdkMsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTkMsNENBQUlBLENBQUNzQixLQUFLLENBQUNDLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxDQUFBQTtZQUMzQnBCLGFBQWFvQixJQUFJckIsU0FBUztRQUM5QjtRQUNBSiw0Q0FBSUEsQ0FBQ3NCLEtBQUssQ0FBQ0ksU0FBUyxHQUFHRixJQUFJLENBQUNDLENBQUFBO1lBQ3hCWCxVQUFVVyxJQUFJWixNQUFNO1lBQ3BCSSxTQUFTLElBQUlGLE1BQU1VLElBQUlaLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFQyxJQUFJLENBQUM7UUFDL0M7SUFDSixHQUFHLEVBQUU7SUFFTCxTQUFTQyxvQkFBb0JDLEtBQWE7UUFDdEMsSUFBSUMsV0FB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QUFPQyxRQUFRLENBQUNYLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVoSiw4REFBQ1U7d0JBQU9DLFNBQVMsSUFBTTNCO2tDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5EO0dBeEVvQi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeD8wYTlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfYXBpIGZyb20gJy4uLy4uL19hcGknO1xuaW1wb3J0IHsgTW92aWVEVE8sIFJlcG9ydFJlcXVlc3REVE8gfSBmcm9tIFwiLi4vLi4vX2R0by9tb3ZpZS5kdG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UmVwb3J0KCkge1xuICAgIGNvbnN0IFtnZW5lcmF0ZWRSZXBvcnQsIHNldEdlbmVyYXRlZFJlcG9ydF0gPSB1c2VTdGF0ZTxNb3ZpZURUT1tdPihbXSBhcyBNb3ZpZURUT1tdKVxuICAgIGNvbnN0IFtkaXJlY3RvcnMsIHNldERpcmVjdG9yc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gICAgY29uc3QgW2RpcmVjdG9yLCBzZXREaXJlY3Rvcl0gPSB1c2VTdGF0ZSgnQWxsJylcbiAgICBjb25zdCBbcmVsZWFzZVNEYXRlLCBzZXRSZWxlYXNlU0RhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSlcbiAgICBjb25zdCBbcmVsZWFzZUVEYXRlLCBzZXRSZWxlYXNlRURhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSlcbiAgICBjb25zdCBbZ2VucmVzLCBzZXRHZW5yZXNdID0gdXNlU3RhdGUobmV3IEFycmF5KCkpXG4gICAgY29uc3QgW2dlbnJlLCBzZXRHZW5yZV0gPSB1c2VTdGF0ZShuZXcgQXJyYXkoKSlcbiAgICBjb25zdCBbbWluUmF0aW5nLCBzZXRNaW5SYXRpbmddID0gdXNlU3RhdGUoMSlcbiAgICBjb25zdCBbbWF4UmF0aW5nLCBzZXRNYXhSYXRpbmddID0gdXNlU3RhdGUoMTApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBfYXBpLm1vdmllLmdldERpcmVjdG9ycygpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHNldERpcmVjdG9ycyhyZXMuZGlyZWN0b3JzKVxuICAgICAgICB9KVxuICAgICAgICBfYXBpLm1vdmllLmdldEdlbnJlcygpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHNldEdlbnJlcyhyZXMuZ2VucmVzKVxuICAgICAgICAgICAgc2V0R2VucmUobmV3IEFycmF5KHJlcy5nZW5yZXMubGVuZ3RoKS5maWxsKGZhbHNlKSlcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGhhbmRsZU11bHRpcGxlR2VucmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgbmV3R2VucmUgPSBnZW5yZVxuICAgICAgICBuZXdHZW5yZVtpbmRleF0gPSAhbmV3R2VucmVbaW5kZXhdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVwb3J0KCkge1xuICAgICAgICBjb25zdCByZXBvcnQ6IFJlcG9ydFJlcXVlc3REVE8gPSB7XG4gICAgICAgICAgICBkaXJlY3RvcjogZGlyZWN0b3IsXG4gICAgICAgICAgICBnZW5yZTogZ2VucmVzLmZpbHRlcigoXywgaW5kZXgpID0+IGdlbnJlW2luZGV4XSksXG4gICAgICAgICAgICByZWxlYXNlU0RhdGU6IHJlbGVhc2VTRGF0ZS50b0RhdGVTdHJpbmcoKSxcbiAgICAgICAgICAgIHJlbGVhc2VFRGF0ZTogcmVsZWFzZUVEYXRlLnRvRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgbWluUmF0aW5nOiBtaW5SYXRpbmcsXG4gICAgICAgICAgICBtYXhSYXRpbmc6IG1heFJhdGluZyxcbiAgICAgICAgfVxuICAgICAgICBfYXBpLm1vdmllLmNyZWF0ZVJlcG9ydChyZXBvcnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5DcmVhdGUgUmVwb3J0PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkaXJlY3RvclwiIGNsYXNzTmFtZT1cIm1lLTJcIj5EaXJlY3RvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImRpcmVjdG9yXCIgaWQ9XCJkaXJlY3RvclwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7c2V0RGlyZWN0b3IoZS50YXJnZXQudmFsdWUpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGlyZWN0b3JzLm1hcCgoZGlyZWN0b3IsIGluZGV4KSA9PiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtkaXJlY3Rvcn0+e2RpcmVjdG9yfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVsZWFzZVNEYXRlXCIgY2xhc3NOYW1lPVwibWUtMlwiPlJlbGVhc2UgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJyZWxlYXNlX3NkYXRlXCIgaWQ9XCJyZWxlYXNlU0RhdGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldFJlbGVhc2VTRGF0ZShuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkpfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IH4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwicmVsZWFzZV9lZGF0ZVwiIGlkPVwicmVsZWFzZUVEYXRlXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXRSZWxlYXNlRURhdGUobmV3IERhdGUoZS50YXJnZXQudmFsdWUpKX19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5yZVwiIGNsYXNzTmFtZT1cIm1lLTJcIj5HZW5yZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmVzLm1hcCgoeyBuYW1lIH0sIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJnZW5yZVwiIGlkPXtuYW1lfSB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtoYW5kbGVNdWx0aXBsZUdlbnJlKGluZGV4KX19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17bmFtZX0gY2xhc3NOYW1lPVwibXMtMlwiPntuYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYXRpbmdcIiBjbGFzc05hbWU9XCJtZS0yXCI+UmF0aW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicmF0aW5nXCIgaWQ9XCJyYXRpbmdcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdmFsdWU9e21pblJhdGluZ30gbWluPVwiMVwiIG1heD1cIjEwXCIgb25DaGFuZ2U9e2UgPT4ge3NldE1pblJhdGluZyhOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiB+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgdmFsdWU9e21heFJhdGluZ30gbWluPVwiMVwiIG1heD1cIjEwXCIgb25DaGFuZ2U9e2UgPT4ge3NldE1heFJhdGluZyhOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjcmVhdGVSZXBvcnQoKX0+R2VuZXJhdGUgUmVwb3J0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJfYXBpIiwibmV3UmVwb3J0IiwiZ2VuZXJhdGVkUmVwb3J0Iiwic2V0R2VuZXJhdGVkUmVwb3J0IiwiZGlyZWN0b3JzIiwic2V0RGlyZWN0b3JzIiwiZGlyZWN0b3IiLCJzZXREaXJlY3RvciIsInJlbGVhc2VTRGF0ZSIsInNldFJlbGVhc2VTRGF0ZSIsIkRhdGUiLCJyZWxlYXNlRURhdGUiLCJzZXRSZWxlYXNlRURhdGUiLCJnZW5yZXMiLCJzZXRHZW5yZXMiLCJBcnJheSIsImdlbnJlIiwic2V0R2VucmUiLCJtaW5SYXRpbmciLCJzZXRNaW5SYXRpbmciLCJtYXhSYXRpbmciLCJzZXRNYXhSYXRpbmciLCJtb3ZpZSIsImdldERpcmVjdG9ycyIsInRoZW4iLCJyZXMiLCJnZXRHZW5yZXMiLCJsZW5ndGgiLCJmaWxsIiwiaGFuZGxlTXVsdGlwbGVHZW5yZSIsImluZGV4IiwibmV3R2VucmUiLCJjcmVhdGVSZXBvcnQiLCJyZXBvcnQiLCJmaWx0ZXIiLCJfIiwidG9EYXRlU3RyaW5nIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wdGlvbiIsIm1hcCIsImlucHV0IiwidHlwZSIsInNwYW4iLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJwYXJzZUludCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movies/report/page.tsx\n"));

/***/ })

});