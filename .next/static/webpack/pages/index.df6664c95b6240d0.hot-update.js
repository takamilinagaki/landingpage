"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/pricingCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/pricingCard/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PricingCards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pricingCard/PricingCard.module.css */ \"./src/components/pricingCard/PricingCard.module.css\");\n/* harmony import */ var _pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_priceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/priceCard */ \"./src/data/priceCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _splinetool_react_spline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @splinetool/react-spline */ \"./node_modules/@splinetool/react-spline/dist/react-spline.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PricingCards() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        ..._data_priceCard__WEBPACK_IMPORTED_MODULE_1__.priceCard.priceCards\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCards),\n        children: data && data.map((e, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardBody),\n                style: {\n                    backgroundColor: e.priceCardColour\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardTitle),\n                        children: e.priceCardTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardPrice),\n                        children: e.priceCardPrice\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splinetool_react_spline__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        scene: \"https://prod.spline.design/wecpoim-JxzK9UZu/scene.splinecode\"\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardList),\n                        children: e.priceCardDetail1\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardList),\n                        children: e.priceCardDetail2\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().priceCardList),\n                        children: e.priceCardDetail3\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_pricingCard_PricingCard_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: \"Learn more\"\n                    }, void 0, false, {\n                        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 25\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/takamiinagaki/Desktop/landingpage/src/components/pricingCard/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(PricingCards, \"dcXzNc5b759aGhqpa6hfpfGveTo=\");\n_c = PricingCards;\nvar _c;\n$RefreshReg$(_c, \"PricingCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcmljaW5nQ2FyZC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDWjtBQUNkO0FBQ2M7QUFFL0IsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztXQUFJRCxzREFBU0EsQ0FBQ00sVUFBVTtLQUFDO0lBQzFELHFCQUNJLDhEQUFDQztRQUFLQyxXQUFXVCx1RkFBaUI7a0JBQzdCSyxRQUNHQSxLQUFLSyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0M7WUFDVCxxQkFDSSw4REFBQ0M7Z0JBQUlKLFdBQVdULDBGQUFvQjtnQkFDL0JlLE9BQU87b0JBQ0pDLGlCQUFpQkwsRUFBRU0sZUFBZTtnQkFDckM7O2tDQUNELDhEQUFDQzt3QkFBR1QsV0FBV1QsMkZBQXFCO2tDQUFHVyxFQUFFUSxjQUFjOzs7Ozs7a0NBQ3ZELDhEQUFDQzt3QkFBR1gsV0FBV1QsMkZBQXFCO2tDQUFHVyxFQUFFVSxjQUFjOzs7Ozs7a0NBQ3ZELDhEQUFDbEIsZ0VBQU1BO3dCQUFDbUIsT0FBTTs7Ozs7O2tDQUNkLDhEQUFDQzt3QkFBR2QsV0FBV1QsMEZBQW9CO2tDQUFHVyxFQUFFYyxnQkFBZ0I7Ozs7OztrQ0FDeEQsOERBQUNGO3dCQUFHZCxXQUFXVCwwRkFBb0I7a0NBQUdXLEVBQUVlLGdCQUFnQjs7Ozs7O2tDQUN4RCw4REFBQ0g7d0JBQUdkLFdBQVdULDBGQUFvQjtrQ0FBR1csRUFBRWdCLGdCQUFnQjs7Ozs7O2tDQUV4RCw4REFBQ0M7d0JBQU9uQixXQUFXVCxtRkFBYTtrQ0FBRTs7Ozs7Ozs7Ozs7O1FBRzlDOzs7Ozs7QUFHaEI7R0F6QndCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcmljaW5nQ2FyZC9pbmRleC50c3g/MWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9wcmljaW5nQ2FyZC9QcmljaW5nQ2FyZC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7cHJpY2VDYXJkfSBmcm9tIFwiLi4vLi4vZGF0YS9wcmljZUNhcmRcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFNwbGluZSBmcm9tIFwiQHNwbGluZXRvb2wvcmVhY3Qtc3BsaW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNpbmdDYXJkcygpe1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoWy4uLnByaWNlQ2FyZC5wcmljZUNhcmRzXSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZUNhcmRzfT5cbiAgICAgICAgICAgIHtkYXRhICYmIFxuICAgICAgICAgICAgICAgIGRhdGEubWFwKChlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByaWNlQ2FyZEJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5wcmljZUNhcmRDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5wcmljZUNhcmRUaXRsZX0+e2UucHJpY2VDYXJkVGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VDYXJkUHJpY2V9PntlLnByaWNlQ2FyZFByaWNlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwbGluZSBzY2VuZT1cImh0dHBzOi8vcHJvZC5zcGxpbmUuZGVzaWduL3dlY3BvaW0tSnh6SzlVWnUvc2NlbmUuc3BsaW5lY29kZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnByaWNlQ2FyZExpc3R9PntlLnByaWNlQ2FyZERldGFpbDF9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2VDYXJkTGlzdH0+e2UucHJpY2VDYXJkRGV0YWlsMn08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5wcmljZUNhcmRMaXN0fT57ZS5wcmljZUNhcmREZXRhaWwzfTwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+TGVhcm4gbW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwicHJpY2VDYXJkIiwidXNlU3RhdGUiLCJTcGxpbmUiLCJQcmljaW5nQ2FyZHMiLCJkYXRhIiwic2V0RGF0YSIsInByaWNlQ2FyZHMiLCJtYWluIiwiY2xhc3NOYW1lIiwibWFwIiwiZSIsImluZGV4IiwiZGl2IiwicHJpY2VDYXJkQm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicHJpY2VDYXJkQ29sb3VyIiwiaDEiLCJwcmljZUNhcmRUaXRsZSIsImgyIiwicHJpY2VDYXJkUHJpY2UiLCJzY2VuZSIsImxpIiwicHJpY2VDYXJkTGlzdCIsInByaWNlQ2FyZERldGFpbDEiLCJwcmljZUNhcmREZXRhaWwyIiwicHJpY2VDYXJkRGV0YWlsMyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pricingCard/index.tsx\n"));

/***/ })

});