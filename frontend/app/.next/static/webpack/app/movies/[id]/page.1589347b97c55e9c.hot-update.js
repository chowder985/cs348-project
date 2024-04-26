"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/[id]/page",{

/***/ "(app-pages-browser)/./src/app/_api/movie.api.ts":
/*!***********************************!*\
  !*** ./src/app/_api/movie.api.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst endpoint = \"http://localhost:8081\";\nasync function createMovie(newMovie) {\n    try {\n        console.log(newMovie);\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(endpoint, \"/movies\"), newMovie)).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function getMovies() {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(endpoint, \"/movies\"))).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function getMovie(id) {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(endpoint, \"/movies/\").concat(id))).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function updateMovie(id, updatedMovie) {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"\".concat(endpoint, \"/movies/\").concat(id), updatedMovie)).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function deleteMovie(id) {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"\".concat(endpoint, \"/movies/\").concat(id))).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function getDirectors() {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(endpoint, \"/directors\"))).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function getGenres() {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(endpoint, \"/genres\"))).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\nasync function createReport(report) {\n    try {\n        return (await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(endpoint, \"/report\"), {\n            data: report\n        })).data;\n    } catch (error) {\n        console.error(error);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    createMovie,\n    getMovies,\n    getMovie,\n    updateMovie,\n    deleteMovie,\n    getDirectors,\n    getGenres,\n    createReport\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2FwaS9tb3ZpZS5hcGkudHMiLCJtYXBwaW5ncyI6Ijs7QUFBMEI7QUFHMUIsTUFBTUMsV0FBWTtBQUVsQixlQUFlQyxZQUFZQyxRQUFrQjtJQUN6QyxJQUFJO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPLENBQUMsTUFBTUgsNkNBQUtBLENBQUNNLElBQUksQ0FBQyxHQUFZLE9BQVRMLFVBQVMsWUFBVUUsU0FBUSxFQUFHSSxJQUFJO0lBQ2xFLEVBQUUsT0FBT0MsT0FBTztRQUNaSixRQUFRSSxLQUFLLENBQUNBO0lBQ2xCO0FBQ0o7QUFFQSxlQUFlQztJQUNYLElBQUk7UUFDQSxPQUFPLENBQUMsTUFBTVQsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxHQUFZLE9BQVRULFVBQVMsV0FBUSxFQUFHTSxJQUFJO0lBQ3ZELEVBQUUsT0FBT0MsT0FBTztRQUNaSixRQUFRSSxLQUFLLENBQUNBO0lBQ2xCO0FBQ0o7QUFFQSxlQUFlRyxTQUFTQyxFQUFVO0lBQzlCLElBQUk7UUFDQSxPQUFPLENBQUMsTUFBTVosNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxHQUFzQkUsT0FBbkJYLFVBQVMsWUFBYSxPQUFIVyxJQUFJLEVBQUdMLElBQUk7SUFDN0QsRUFBRSxPQUFPQyxPQUFPO1FBQ1pKLFFBQVFJLEtBQUssQ0FBQ0E7SUFDbEI7QUFDSjtBQUVBLGVBQWVLLFlBQVlELEVBQVUsRUFBRUUsWUFBc0I7SUFDekQsSUFBSTtRQUNBLE9BQU8sQ0FBQyxNQUFNZCw2Q0FBS0EsQ0FBQ2UsS0FBSyxDQUFDLEdBQXNCSCxPQUFuQlgsVUFBUyxZQUFhLE9BQUhXLEtBQU1FLGFBQVksRUFBR1AsSUFBSTtJQUM3RSxFQUFFLE9BQU9DLE9BQU87UUFDWkosUUFBUUksS0FBSyxDQUFDQTtJQUNsQjtBQUNKO0FBRUEsZUFBZVEsWUFBWUosRUFBVTtJQUNqQyxJQUFJO1FBQ0EsT0FBTyxDQUFDLE1BQU1aLDZDQUFLQSxDQUFDaUIsTUFBTSxDQUFDLEdBQXNCTCxPQUFuQlgsVUFBUyxZQUFhLE9BQUhXLElBQUksRUFBR0wsSUFBSTtJQUNoRSxFQUFFLE9BQU9DLE9BQU87UUFDWkosUUFBUUksS0FBSyxDQUFDQTtJQUNsQjtBQUNKO0FBRUEsZUFBZVU7SUFDWCxJQUFJO1FBQ0EsT0FBTyxDQUFDLE1BQU1sQiw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLEdBQVksT0FBVFQsVUFBUyxjQUFXLEVBQUdNLElBQUk7SUFDMUQsRUFBRSxPQUFPQyxPQUFPO1FBQ1pKLFFBQVFJLEtBQUssQ0FBQ0E7SUFDbEI7QUFDSjtBQUVBLGVBQWVXO0lBQ1gsSUFBSTtRQUNBLE9BQU8sQ0FBQyxNQUFNbkIsNkNBQUtBLENBQUNVLEdBQUcsQ0FBQyxHQUFZLE9BQVRULFVBQVMsV0FBUSxFQUFHTSxJQUFJO0lBQ3ZELEVBQUUsT0FBT0MsT0FBTztRQUNaSixRQUFRSSxLQUFLLENBQUNBO0lBQ2xCO0FBQ0o7QUFFQSxlQUFlWSxhQUFhQyxNQUF3QjtJQUNoRCxJQUFJO1FBQ0EsT0FBTyxDQUFDLE1BQU1yQiw2Q0FBS0EsQ0FBQ1UsR0FBRyxDQUFDLEdBQVksT0FBVFQsVUFBUyxZQUFVO1lBQzFDTSxNQUFNYztRQUNWLEVBQUMsRUFBR2QsSUFBSTtJQUNaLEVBQUUsT0FBT0MsT0FBTztRQUNaSixRQUFRSSxLQUFLLENBQUNBO0lBQ2xCO0FBQ0o7QUFFQSwrREFBZTtJQUNYTjtJQUNBTztJQUNBRTtJQUNBRTtJQUNBRztJQUNBRTtJQUNBQztJQUNBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fYXBpL21vdmllLmFwaS50cz82NWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE1vdmllRFRPLCBSZXBvcnRSZXF1ZXN0RFRPIH0gZnJvbSBcIi4uL19kdG8vbW92aWUuZHRvXCI7XG5cbmNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MWBcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTW92aWUobmV3TW92aWU6IE1vdmllRFRPKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3TW92aWUpXG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MucG9zdChgJHtlbmRwb2ludH0vbW92aWVzYCwgbmV3TW92aWUpKS5kYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vdmllcygpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChgJHtlbmRwb2ludH0vbW92aWVzYCkpLmRhdGFcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWUoaWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9tb3ZpZXMvJHtpZH1gKSkuZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNb3ZpZShpZDogc3RyaW5nLCB1cGRhdGVkTW92aWU6IE1vdmllRFRPKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5wYXRjaChgJHtlbmRwb2ludH0vbW92aWVzLyR7aWR9YCwgdXBkYXRlZE1vdmllKSkuZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVNb3ZpZShpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBheGlvcy5kZWxldGUoYCR7ZW5kcG9pbnR9L21vdmllcy8ke2lkfWApKS5kYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERpcmVjdG9ycygpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChgJHtlbmRwb2ludH0vZGlyZWN0b3JzYCkpLmRhdGFcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VucmVzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgYXhpb3MuZ2V0KGAke2VuZHBvaW50fS9nZW5yZXNgKSkuZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVSZXBvcnQocmVwb3J0OiBSZXBvcnRSZXF1ZXN0RFRPKXtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGF4aW9zLmdldChgJHtlbmRwb2ludH0vcmVwb3J0YCwge1xuICAgICAgICAgICAgZGF0YTogcmVwb3J0XG4gICAgICAgIH0pKS5kYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVNb3ZpZSxcbiAgICBnZXRNb3ZpZXMsXG4gICAgZ2V0TW92aWUsXG4gICAgdXBkYXRlTW92aWUsXG4gICAgZGVsZXRlTW92aWUsXG4gICAgZ2V0RGlyZWN0b3JzLFxuICAgIGdldEdlbnJlcyxcbiAgICBjcmVhdGVSZXBvcnRcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJlbmRwb2ludCIsImNyZWF0ZU1vdmllIiwibmV3TW92aWUiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImRhdGEiLCJlcnJvciIsImdldE1vdmllcyIsImdldCIsImdldE1vdmllIiwiaWQiLCJ1cGRhdGVNb3ZpZSIsInVwZGF0ZWRNb3ZpZSIsInBhdGNoIiwiZGVsZXRlTW92aWUiLCJkZWxldGUiLCJnZXREaXJlY3RvcnMiLCJnZXRHZW5yZXMiLCJjcmVhdGVSZXBvcnQiLCJyZXBvcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_api/movie.api.ts\n"));

/***/ })

});