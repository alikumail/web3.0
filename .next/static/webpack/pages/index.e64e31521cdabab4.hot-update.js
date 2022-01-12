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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_Blockchain_lotterydapp_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_Blockchain_lotterydapp_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Blockchain_lotterydapp_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lottery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lottery */ \"./lottery.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Lottery = //import web3 from '../web3';\n/*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(Lottery, Component);\n    var _super = _createSuper(Lottery);\n    function Lottery(props) {\n        _classCallCheck(this, Lottery);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            manager: '',\n            participants_amount: '0.5',\n            message: ''\n        };\n        return _this;\n    }\n    _createClass(Lottery, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                return _asyncToGenerator(D_Blockchain_lotterydapp_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var manager;\n                    return D_Blockchain_lotterydapp_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.prev = 0;\n                                _ctx.next = 3;\n                                return _lottery__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.manager().call();\n                            case 3:\n                                manager = _ctx.sent;\n                                console.log(manager);\n                                _ctx.next = 10;\n                                break;\n                            case 7:\n                                _ctx.prev = 7;\n                                _ctx.t0 = _ctx[\"catch\"](0);\n                                console.log(_ctx.t0);\n                            case 10:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee, null, [\n                        [\n                            0,\n                            7\n                        ]\n                    ]);\n                //this.setState({manager : manager});\n                }))();\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Total Lottery Pool  is 1000\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"1.5\",\n                                    __source: {\n                                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                    type: \"submit\",\n                                    __source: {\n                                        fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: \"Participate\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"hr\", {\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                \"The Manager of the lottery decentralized pool app is \",\n                                this.state.manager,\n                                \" \"\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                            __source: {\n                                fileName: \"D:\\\\Blockchain\\\\lotterydapp\\\\pages\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Pick Winners\"\n                        })\n                    ]\n                }));\n            }\n        }\n    ]);\n    return Lottery;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lottery);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCRyxPQUFPLEdBRGIsRUFBNkI7Y0FDN0IsUUFBUTs7Y0FBRkEsT0FBTzs4QkFBUEEsT0FBTzthQUFQQSxPQUFPLENBQ0dDLEtBQUs7OEJBRGZELE9BQU87O2tDQUVGQyxLQUFLO2NBQ05DLEtBQUssR0FBRyxDQUFDO1lBQ1ZDLE9BQU8sRUFBRyxDQUFFO1lBQ1pDLG1CQUFtQixFQUFFLENBQUs7WUFDMUJDLE9BQU8sRUFBRyxDQUFFO1FBQ2hCLENBQUM7OztpQkFQQUwsT0FBTzs7WUFTSE0sR0FBaUIsRUFBakJBLENBQWlCO21CQUF2QixRQUFRLENBQUZBLGlCQUFpQjswSkFBdkIsUUFBUSxXQUFrQixDQUFDO3dCQUVqQkgsT0FBTzs7Ozs7O3VDQUFTSixnRUFBdUIsR0FBR1MsSUFBSTs7Z0NBQTlDTCxPQUFPO2dDQUNiTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTzs7Ozs7O2dDQUVmTSxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O2dCQUVoQixFQUFxQztnQkFDeEMsQ0FBQzs7OztZQUNMQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxHQUFFLENBQUM7Z0JBQ0wsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7NkZBQ0NDLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBMkI7OzhGQUM5QkMsQ0FBSTs7Ozs7Ozs7cUdBQ0FDLENBQUs7b0NBQUNDLElBQUksRUFBQyxDQUFNO29DQUFDQyxXQUFXLEVBQUMsQ0FBSzs7Ozs7Ozs7cUdBQ25DQyxDQUFNO29DQUFDRixJQUFJLEVBQUMsQ0FBUTs7Ozs7Ozs4Q0FBQyxDQUFXOzs7OzZGQUVwQ0csQ0FBRTs7Ozs7Ozs7OEZBQ0ZDLENBQUM7Ozs7Ozs7O2dDQUFDLENBQXFEO2dDQUFDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ0MsT0FBTztnQ0FBQyxDQUFDOzs7NkZBQzVFZSxDQUFNOzs7Ozs7O3NDQUFDLENBQVk7Ozs7WUFJOUIsQ0FBQzs7O1dBaENLbEIsT0FBTztFQUFTRiw0Q0FBUztBQW1DL0IsK0RBQWVFLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG90dGVyeSBmcm9tICcuLi9sb3R0ZXJ5JztcclxuLy9pbXBvcnQgd2ViMyBmcm9tICcuLi93ZWIzJztcclxuY2xhc3MgTG90dGVyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgIHN1cGVyKHByb3BzKTtcclxuICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICBtYW5hZ2VyIDogJycsXHJcbiAgICAgICAgIHBhcnRpY2lwYW50c19hbW91bnQ6ICcwLjUnLFxyXG4gICAgICAgICBtZXNzYWdlIDogJycgXHJcbiAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IG1hbmFnZXIgPSBhd2FpdCBsb3R0ZXJ5Lm1ldGhvZHMubWFuYWdlcigpLmNhbGwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhtYW5hZ2VyKTtcclxuICAgICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAvL3RoaXMuc2V0U3RhdGUoe21hbmFnZXIgOiBtYW5hZ2VyfSk7XHJcbiAgICB9XHJcbnJlbmRlcigpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5Ub3RhbCBMb3R0ZXJ5IFBvb2wgIGlzIDEwMDA8L2gxPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIxLjVcIiAvPiBcclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5QYXJ0aWNpcGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICA8cD5UaGUgTWFuYWdlciBvZiB0aGUgbG90dGVyeSBkZWNlbnRyYWxpemVkIHBvb2wgYXBwIGlzIHt0aGlzLnN0YXRlLm1hbmFnZXJ9IDwvcD5cclxuICAgICAgICAgIDxidXR0b24+UGljayBXaW5uZXJzPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIClcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0ZXJ5OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImxvdHRlcnkiLCJMb3R0ZXJ5IiwicHJvcHMiLCJzdGF0ZSIsIm1hbmFnZXIiLCJwYXJ0aWNpcGFudHNfYW1vdW50IiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwibWV0aG9kcyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiZGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJociIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});