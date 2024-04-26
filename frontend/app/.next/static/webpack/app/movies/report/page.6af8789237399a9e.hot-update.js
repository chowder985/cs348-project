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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ newReport; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_api */ \"(app-pages-browser)/./src/app/_api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction newReport() {\n    _s();\n    const [generatedReport, setGeneratedReport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [directors, setDirectors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [director, setDirector] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [releaseSDate, setReleaseSDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [releaseEDate, setReleaseEDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [genres, setGenres] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [minRating, setMinRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [maxRating, setMaxRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getDirectors().then((res)=>{\n            setDirectors(res.directors);\n        });\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.getGenres().then((res)=>{\n            setGenres(res.genres);\n            setGenre(new Array(res.genres.length).fill(false));\n        });\n    }, []);\n    function handleMultipleGenre(index) {\n        let newGenre = genre;\n        newGenre[index] = !newGenre[index];\n        setGenre(newGenre);\n    }\n    function createReport() {\n        const report = {\n            director: director,\n            genre: genres.filter((_, index)=>genre[index]),\n            releaseSDate: releaseSDate.toLocaleDateString(),\n            releaseEDate: releaseEDate.toLocaleDateString(),\n            minRating: minRating,\n            maxRating: maxRating\n        };\n        _api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].movie.createReport(report).then((res)=>{\n            setGeneratedReport(res);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Report\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"director\",\n                                className: \"me-2\",\n                                children: \"Director\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"director\",\n                                id: \"director\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setDirector(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"all\",\n                                        children: \"All\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this),\n                                    directors.map((director, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: director,\n                                            children: director\n                                        }, index, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 61\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"releaseSDate\",\n                                className: \"me-2\",\n                                children: \"Release Date\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_sdate\",\n                                id: \"releaseSDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseSDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"date\",\n                                name: \"release_edate\",\n                                id: \"releaseEDate\",\n                                className: \"text-black\",\n                                onChange: (e)=>{\n                                    setReleaseEDate(new Date(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"genre\",\n                                className: \"me-2\",\n                                children: \"Genres\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, this),\n                            genres.map((name, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            name: \"genre\",\n                                            id: name,\n                                            value: name,\n                                            className: \"text-black\",\n                                            onChange: (e)=>{\n                                                handleMultipleGenre(index);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: name,\n                                            className: \"ms-2\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 50\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rating\",\n                                className: \"me-2\",\n                                children: \"Rating\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"rating\",\n                                id: \"rating\",\n                                className: \"text-black\",\n                                value: minRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMinRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ~ \"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                className: \"text-black\",\n                                value: maxRating,\n                                min: \"1\",\n                                max: \"10\",\n                                onChange: (e)=>{\n                                    setMaxRating(Number.parseInt(e.target.value));\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>createReport(),\n                        children: \"Generate Report\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhoonlee/Projects/CS348/Project/frontend/app/src/app/movies/report/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(newReport, \"XMtc/4ggBDkTEL0nuB55OqVKhco=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW92aWVzL3JlcG9ydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ3JCO0FBR2YsU0FBU0k7O0lBQ3BCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN6RCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUN2RCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUMsSUFBSVk7SUFDckQsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUMsSUFBSVk7SUFDckQsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJaUI7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUduQiwrQ0FBUUEsQ0FBQyxJQUFJaUI7SUFDdkMsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTkMsNENBQUlBLENBQUNzQixLQUFLLENBQUNDLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxDQUFBQTtZQUMzQnBCLGFBQWFvQixJQUFJckIsU0FBUztRQUM5QjtRQUNBSiw0Q0FBSUEsQ0FBQ3NCLEtBQUssQ0FBQ0ksU0FBUyxHQUFHRixJQUFJLENBQUNDLENBQUFBO1lBQ3hCWCxVQUFVVyxJQUFJWixNQUFNO1lBQ3BCSSxTQUFTLElBQUlGLE1BQU1VLElBQUlaLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFQyxJQUFJLENBQUM7UUFDL0M7SUFDSixHQUFHLEVBQUU7SUFFTCxTQUFTQyxvQkFBb0JDLEtBQWE7UUFDdEMsSUFBSUMsV0FB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SUMsS0FBSTtnQ0FBS1YsVUFBVUMsQ0FBQUE7b0NBQU16QixhQUFhbUMsT0FBT0MsUUFBUSxDQUFDWCxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0NBQUU7Ozs7Ozs7Ozs7OztrQ0FFaEosOERBQUNVO3dCQUFPQyxTQUFTLElBQU0zQjtrQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluRDtHQTNFb0IvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vdmllcy9yZXBvcnQvcGFnZS50c3g/MGE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX2FwaSBmcm9tICcuLi8uLi9fYXBpJztcbmltcG9ydCB7IE1vdmllRFRPLCBSZXBvcnRSZXF1ZXN0RFRPIH0gZnJvbSBcIi4uLy4uL19kdG8vbW92aWUuZHRvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1JlcG9ydCgpIHtcbiAgICBjb25zdCBbZ2VuZXJhdGVkUmVwb3J0LCBzZXRHZW5lcmF0ZWRSZXBvcnRdID0gdXNlU3RhdGUoW10gYXMgTW92aWVEVE9bXSlcbiAgICBjb25zdCBbZGlyZWN0b3JzLCBzZXREaXJlY3RvcnNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICAgIGNvbnN0IFtkaXJlY3Rvciwgc2V0RGlyZWN0b3JdID0gdXNlU3RhdGUoJ0FsbCcpXG4gICAgY29uc3QgW3JlbGVhc2VTRGF0ZSwgc2V0UmVsZWFzZVNEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW3JlbGVhc2VFRGF0ZSwgc2V0UmVsZWFzZUVEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpXG4gICAgY29uc3QgW2dlbnJlcywgc2V0R2VucmVzXSA9IHVzZVN0YXRlKG5ldyBBcnJheSgpKVxuICAgIGNvbnN0IFtnZW5yZSwgc2V0R2VucmVdID0gdXNlU3RhdGUobmV3IEFycmF5KCkpXG4gICAgY29uc3QgW21pblJhdGluZywgc2V0TWluUmF0aW5nXSA9IHVzZVN0YXRlKDEpXG4gICAgY29uc3QgW21heFJhdGluZywgc2V0TWF4UmF0aW5nXSA9IHVzZVN0YXRlKDEwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgX2FwaS5tb3ZpZS5nZXREaXJlY3RvcnMoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBzZXREaXJlY3RvcnMocmVzLmRpcmVjdG9ycylcbiAgICAgICAgfSlcbiAgICAgICAgX2FwaS5tb3ZpZS5nZXRHZW5yZXMoKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBzZXRHZW5yZXMocmVzLmdlbnJlcylcbiAgICAgICAgICAgIHNldEdlbnJlKG5ldyBBcnJheShyZXMuZ2VucmVzLmxlbmd0aCkuZmlsbChmYWxzZSkpXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNdWx0aXBsZUdlbnJlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5ld0dlbnJlID0gZ2VucmVcbiAgICAgICAgbmV3R2VucmVbaW5kZXhdID0gIW5ld0dlbnJlW2luZGV4XVxuICAgICAgICBzZXRHZW5yZShuZXdHZW5yZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXBvcnQoKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydDogUmVwb3J0UmVxdWVzdERUTyA9IHtcbiAgICAgICAgICAgIGRpcmVjdG9yOiBkaXJlY3RvcixcbiAgICAgICAgICAgIGdlbnJlOiBnZW5yZXMuZmlsdGVyKChfLCBpbmRleCkgPT4gZ2VucmVbaW5kZXhdKSxcbiAgICAgICAgICAgIHJlbGVhc2VTRGF0ZTogcmVsZWFzZVNEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgcmVsZWFzZUVEYXRlOiByZWxlYXNlRURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCksXG4gICAgICAgICAgICBtaW5SYXRpbmc6IG1pblJhdGluZyxcbiAgICAgICAgICAgIG1heFJhdGluZzogbWF4UmF0aW5nLFxuICAgICAgICB9XG4gICAgICAgIF9hcGkubW92aWUuY3JlYXRlUmVwb3J0KHJlcG9ydCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2V0R2VuZXJhdGVkUmVwb3J0KHJlcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBSZXBvcnQ8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdG9yXCIgY2xhc3NOYW1lPVwibWUtMlwiPkRpcmVjdG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZGlyZWN0b3JcIiBpZD1cImRpcmVjdG9yXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIG9uQ2hhbmdlPXtlID0+IHtzZXREaXJlY3RvcihlLnRhcmdldC52YWx1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXJlY3RvcnMubWFwKChkaXJlY3RvciwgaW5kZXgpID0+IDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2RpcmVjdG9yfT57ZGlyZWN0b3J9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWxlYXNlU0RhdGVcIiBjbGFzc05hbWU9XCJtZS0yXCI+UmVsZWFzZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cInJlbGVhc2Vfc2RhdGVcIiBpZD1cInJlbGVhc2VTRGF0ZVwiIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7c2V0UmVsZWFzZVNEYXRlKG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gfiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJyZWxlYXNlX2VkYXRlXCIgaWQ9XCJyZWxlYXNlRURhdGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCIgb25DaGFuZ2U9e2UgPT4ge3NldFJlbGVhc2VFRGF0ZShuZXcgRGF0ZShlLnRhcmdldC52YWx1ZSkpfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbnJlXCIgY2xhc3NOYW1lPVwibWUtMlwiPkdlbnJlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtnZW5yZXMubWFwKChuYW1lLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ2VucmVcIiBpZD17bmFtZX0gdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIiBvbkNoYW5nZT17ZSA9PiB7aGFuZGxlTXVsdGlwbGVHZW5yZShpbmRleCl9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e25hbWV9IGNsYXNzTmFtZT1cIm1zLTJcIj57bmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwibWUtMlwiPlJhdGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInJhdGluZ1wiIGlkPVwicmF0aW5nXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHZhbHVlPXttaW5SYXRpbmd9IG1pbj1cIjFcIiBtYXg9XCIxMFwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNaW5SYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gfiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiIHZhbHVlPXttYXhSYXRpbmd9IG1pbj1cIjFcIiBtYXg9XCIxMFwiIG9uQ2hhbmdlPXtlID0+IHtzZXRNYXhSYXRpbmcoTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSl9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlUmVwb3J0KCl9PkdlbmVyYXRlIFJlcG9ydDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiX2FwaSIsIm5ld1JlcG9ydCIsImdlbmVyYXRlZFJlcG9ydCIsInNldEdlbmVyYXRlZFJlcG9ydCIsImRpcmVjdG9ycyIsInNldERpcmVjdG9ycyIsImRpcmVjdG9yIiwic2V0RGlyZWN0b3IiLCJyZWxlYXNlU0RhdGUiLCJzZXRSZWxlYXNlU0RhdGUiLCJEYXRlIiwicmVsZWFzZUVEYXRlIiwic2V0UmVsZWFzZUVEYXRlIiwiZ2VucmVzIiwic2V0R2VucmVzIiwiQXJyYXkiLCJnZW5yZSIsInNldEdlbnJlIiwibWluUmF0aW5nIiwic2V0TWluUmF0aW5nIiwibWF4UmF0aW5nIiwic2V0TWF4UmF0aW5nIiwibW92aWUiLCJnZXREaXJlY3RvcnMiLCJ0aGVuIiwicmVzIiwiZ2V0R2VucmVzIiwibGVuZ3RoIiwiZmlsbCIsImhhbmRsZU11bHRpcGxlR2VucmUiLCJpbmRleCIsIm5ld0dlbnJlIiwiY3JlYXRlUmVwb3J0IiwicmVwb3J0IiwiZmlsdGVyIiwiXyIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb24iLCJtYXAiLCJpbnB1dCIsInR5cGUiLCJzcGFuIiwibWluIiwibWF4IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/movies/report/page.tsx\n"));

/***/ })

});