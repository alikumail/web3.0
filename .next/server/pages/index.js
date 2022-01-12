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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lottery.js":
/*!********************!*\
  !*** ./lottery.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.js */ \"./web3.js\");\n\nconst address = '0xeeb3d54BAff30C9D51FE8437664C77c06d01ae9b';\nconst abi = [\n    {\n        \"constant\": true,\n        \"inputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"participants\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": true,\n        \"inputs\": [],\n        \"name\": \"manager\",\n        \"outputs\": [\n            {\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"payable\": false,\n        \"stateMutability\": \"view\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [],\n        \"name\": \"pickWinner\",\n        \"outputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    },\n    {\n        \"constant\": false,\n        \"inputs\": [],\n        \"name\": \"enterLottery\",\n        \"outputs\": [],\n        \"payable\": true,\n        \"stateMutability\": \"payable\",\n        \"type\": \"function\"\n    },\n    {\n        \"inputs\": [],\n        \"payable\": false,\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"constructor\"\n    }\n];\n/*\r\nconst abi =[\r\n    {\r\n      inputs: [],\r\n      name: 'f',\r\n      outputs: [],\r\n      stateMutability: 'nonpayable',\r\n      type: 'function'\r\n    }\r\n  ];*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _web3_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(abi, address));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sb3R0ZXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCO0FBQzVCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQTRDO0FBQzVELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLENBQUM7SUFBQSxDQUFDO1FBQUEsQ0FBVSxXQUFDLElBQUk7UUFBQyxDQUFRLFNBQUMsQ0FBQztZQUFBLENBQUM7Z0JBQUEsQ0FBTSxPQUFDLENBQUU7Z0JBQUMsQ0FBTSxPQUFDLENBQVM7WUFBQSxDQUFDO1FBQUEsQ0FBQztRQUFDLENBQU0sT0FBQyxDQUFjO1FBQUMsQ0FBUyxVQUFDLENBQUM7WUFBQSxDQUFDO2dCQUFBLENBQU0sT0FBQyxDQUFFO2dCQUFDLENBQU0sT0FBQyxDQUFTO1lBQUEsQ0FBQztRQUFBLENBQUM7UUFBQyxDQUFTLFVBQUMsS0FBSztRQUFDLENBQWlCLGtCQUFDLENBQU07UUFBQyxDQUFNLE9BQUMsQ0FBVTtJQUFBLENBQUM7SUFBQyxDQUFDO1FBQUEsQ0FBVSxXQUFDLElBQUk7UUFBQyxDQUFRLFNBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBTSxPQUFDLENBQVM7UUFBQyxDQUFTLFVBQUMsQ0FBQztZQUFBLENBQUM7Z0JBQUEsQ0FBTSxPQUFDLENBQUU7Z0JBQUMsQ0FBTSxPQUFDLENBQVM7WUFBQSxDQUFDO1FBQUEsQ0FBQztRQUFDLENBQVMsVUFBQyxLQUFLO1FBQUMsQ0FBaUIsa0JBQUMsQ0FBTTtRQUFDLENBQU0sT0FBQyxDQUFVO0lBQUEsQ0FBQztJQUFDLENBQUM7UUFBQSxDQUFVLFdBQUMsS0FBSztRQUFDLENBQVEsU0FBQyxDQUFDLENBQUM7UUFBQyxDQUFNLE9BQUMsQ0FBWTtRQUFDLENBQVMsVUFBQyxDQUFDLENBQUM7UUFBQyxDQUFTLFVBQUMsS0FBSztRQUFDLENBQWlCLGtCQUFDLENBQVk7UUFBQyxDQUFNLE9BQUMsQ0FBVTtJQUFBLENBQUM7SUFBQyxDQUFDO1FBQUEsQ0FBVSxXQUFDLEtBQUs7UUFBQyxDQUFRLFNBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBTSxPQUFDLENBQWM7UUFBQyxDQUFTLFVBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBUyxVQUFDLElBQUk7UUFBQyxDQUFpQixrQkFBQyxDQUFTO1FBQUMsQ0FBTSxPQUFDLENBQVU7SUFBQSxDQUFDO0lBQUMsQ0FBQztRQUFBLENBQVEsU0FBQyxDQUFDLENBQUM7UUFBQyxDQUFTLFVBQUMsS0FBSztRQUFDLENBQWlCLGtCQUFDLENBQVk7UUFBQyxDQUFNLE9BQUMsQ0FBYTtJQUFBLENBQUM7QUFBQSxDQUFDO0FBQ3RxQixFQVNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcF9sb3R0ZXJ5Ly4vbG90dGVyeS5qcz8xMzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMy5qcyc7XHJcbmNvbnN0IGFkZHJlc3MgPSAnMHhlZWIzZDU0QkFmZjMwQzlENTFGRTg0Mzc2NjRDNzdjMDZkMDFhZTliJztcclxuY29uc3QgYWJpID0gW3tcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwibmFtZVwiOlwicGFydGljaXBhbnRzXCIsXCJvdXRwdXRzXCI6W3tcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYWRkcmVzc1wifV0sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6dHJ1ZSxcImlucHV0c1wiOltdLFwibmFtZVwiOlwibWFuYWdlclwiLFwib3V0cHV0c1wiOlt7XCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1dLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJjb25zdGFudFwiOmZhbHNlLFwiaW5wdXRzXCI6W10sXCJuYW1lXCI6XCJwaWNrV2lubmVyXCIsXCJvdXRwdXRzXCI6W10sXCJwYXlhYmxlXCI6ZmFsc2UsXCJzdGF0ZU11dGFiaWxpdHlcIjpcIm5vbnBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImNvbnN0YW50XCI6ZmFsc2UsXCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcImVudGVyTG90dGVyeVwiLFwib3V0cHV0c1wiOltdLFwicGF5YWJsZVwiOnRydWUsXCJzdGF0ZU11dGFiaWxpdHlcIjpcInBheWFibGVcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImlucHV0c1wiOltdLFwicGF5YWJsZVwiOmZhbHNlLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJjb25zdHJ1Y3RvclwifV07XHJcbi8qXHJcbmNvbnN0IGFiaSA9W1xyXG4gICAge1xyXG4gICAgICBpbnB1dHM6IFtdLFxyXG4gICAgICBuYW1lOiAnZicsXHJcbiAgICAgIG91dHB1dHM6IFtdLFxyXG4gICAgICBzdGF0ZU11dGFiaWxpdHk6ICdub25wYXlhYmxlJyxcclxuICAgICAgdHlwZTogJ2Z1bmN0aW9uJ1xyXG4gICAgfVxyXG4gIF07Ki9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KGFiaSxhZGRyZXNzKTsiXSwibmFtZXMiOlsid2ViMyIsImFkZHJlc3MiLCJhYmkiLCJldGgiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lottery.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lottery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lottery */ \"./lottery.js\");\n\n\n\n//import web3 from '../web3';\nclass Lottery extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            manager: '',\n            participants_amount: '0.5',\n            message: ''\n        };\n    }\n    async componentDidMount() {\n        try {\n            const manager = await _lottery__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.manager().call();\n            console.log(manager);\n        } catch (e) {\n            console.log(e);\n        }\n    //this.setState({manager : manager});\n    }\n    render() {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: \"Total Lottery Pool  is 1000\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"1.5\",\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            type: \"submit\",\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: \"Participate\"\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        \"The Manager of the lottery decentralized pool app is \",\n                        this.state.manager,\n                        \" \"\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: \"Pick Winners\"\n                })\n            ]\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lottery);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ047QUFDaEMsRUFBNkI7TUFDdkJHLE9BQU8sU0FBU0YsNENBQVM7Z0JBQ2ZHLEtBQUssQ0FBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQ0EsS0FBSztRQUNYLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7WUFDVkMsT0FBTyxFQUFHLENBQUU7WUFDWkMsbUJBQW1CLEVBQUUsQ0FBSztZQUMxQkMsT0FBTyxFQUFHLENBQUU7UUFDaEIsQ0FBQztJQUNGLENBQUM7VUFDS0MsaUJBQWlCLEdBQUcsQ0FBQztRQUN2QixHQUFHLEVBQUM7WUFDSixLQUFLLENBQUNILE9BQU8sR0FBRyxLQUFLLENBQUNKLGdFQUF1QixHQUFHUyxJQUFJO1lBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTztRQUNuQixDQUFDLENBQUMsS0FBSyxFQUFDUSxDQUFDLEVBQUMsQ0FBQztZQUNQRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQztRQUNqQixDQUFDO0lBQ0YsRUFBcUM7SUFDeEMsQ0FBQztJQUNMQyxNQUFNLEdBQUUsQ0FBQztRQUNMLE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O3FGQUNDQyxDQUFFOzs7Ozs7OzhCQUFDLENBQTJCOztzRkFDOUJDLENBQUk7Ozs7Ozs7OzZGQUNBQyxDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQUs7Ozs7Ozs7OzZGQUNuQ0MsQ0FBTTs0QkFBQ0YsSUFBSSxFQUFDLENBQVE7Ozs7Ozs7c0NBQUMsQ0FBVzs7OztxRkFFcENHLENBQUU7Ozs7Ozs7O3NGQUNGQyxDQUFDOzs7Ozs7Ozt3QkFBQyxDQUFxRDt3QkFBQyxJQUFJLENBQUNuQixLQUFLLENBQUNDLE9BQU87d0JBQUMsQ0FBQzs7O3FGQUM1RWdCLENBQU07Ozs7Ozs7OEJBQUMsQ0FBWTs7OztJQUk5QixDQUFDOztBQUdELGlFQUFlbkIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcF9sb3R0ZXJ5Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgLHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxvdHRlcnkgZnJvbSAnLi4vbG90dGVyeSc7XHJcbi8vaW1wb3J0IHdlYjMgZnJvbSAnLi4vd2ViMyc7XHJcbmNsYXNzIExvdHRlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgbWFuYWdlciA6ICcnLFxyXG4gICAgICAgICBwYXJ0aWNpcGFudHNfYW1vdW50OiAnMC41JyxcclxuICAgICAgICAgbWVzc2FnZSA6ICcnIFxyXG4gICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gYXdhaXQgbG90dGVyeS5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFuYWdlcik7XHJcbiAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLy90aGlzLnNldFN0YXRlKHttYW5hZ2VyIDogbWFuYWdlcn0pO1xyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+VG90YWwgTG90dGVyeSBQb29sICBpcyAxMDAwPC9oMT5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMS41XCIgLz4gXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UGFydGljaXBhdGU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgPHA+VGhlIE1hbmFnZXIgb2YgdGhlIGxvdHRlcnkgZGVjZW50cmFsaXplZCBwb29sIGFwcCBpcyB7dGhpcy5zdGF0ZS5tYW5hZ2VyfSA8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uPlBpY2sgV2lubmVyczwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG90dGVyeTsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJsb3R0ZXJ5IiwiTG90dGVyeSIsInByb3BzIiwic3RhdGUiLCJtYW5hZ2VyIiwicGFydGljaXBhbnRzX2Ftb3VudCIsIm1lc3NhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsIm1ldGhvZHMiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsImUiLCJyZW5kZXIiLCJkaXYiLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImhyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3;\nif (false) {} else {\n    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/471e487734fb41b08fc3af164e2f6f9f');\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n}\nweb3.eth.handleRevert = true;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QjtBQUV2QixHQUFHLENBQUNDLElBQUk7QUFFUixFQUFFLEVBQUMsS0FBbUUsRUFBQyxFQUd0RSxNQUFJLENBQUM7SUFDSixLQUFLLENBQUNHLFFBQVEsR0FBRyxHQUFHLENBQUNKLG9FQUEyQixDQUM5QyxDQUErRDtJQUVqRUMsSUFBSSxHQUFHLEdBQUcsQ0FBQ0QsNkNBQUksQ0FBQ0ksUUFBUTtBQUMxQixDQUFDO0FBQ0RILElBQUksQ0FBQ00sR0FBRyxDQUFDQyxZQUFZLEdBQUcsSUFBSTtBQUM1QixpRUFBZVAsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcF9sb3R0ZXJ5Ly4vd2ViMy5qcz9mNmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKXtcclxuICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmdcclxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxufWVsc2V7XHJcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxyXG4gICAgJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvNDcxZTQ4NzczNGZiNDFiMDhmYzNhZjE2NGUyZjZmOWYnXHJcbiAgKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG59XHJcbndlYjMuZXRoLmhhbmRsZVJldmVydCA9IHRydWU7XHJcbmV4cG9ydCBkZWZhdWx0IHdlYjM7Il0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJldGgiLCJoYW5kbGVSZXZlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();