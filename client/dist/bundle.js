/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _locations_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.jsx */ \"./client/src/locations.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _React = React,\n    useState = _React.useState;\n //// using hooks ////\n\nvar App = function App(props) {\n  var _useState = useState(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      zip = _useState2[0],\n      setZip = _useState2[1];\n\n  var _useState3 = useState(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      locations = _useState4[0],\n      setLocations = _useState4[1];\n\n  var getBreweries = function getBreweries(e) {\n    e.preventDefault();\n    axios.get(\"http://localhost:8000/breweries/\".concat(zip)).then(function (response) {\n      setZip('');\n      setLocations(response.data);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  var changeZip = function changeZip(newZip) {\n    return setZip(newZip);\n  };\n\n  var searchDiv = /*#__PURE__*/React.createElement(\"div\", {\n    id: \"main\"\n  }, /*#__PURE__*/React.createElement(\"h1\", null, \"Micro-Brewery Finder\"), /*#__PURE__*/React.createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      getBreweries(e);\n    }\n  }, /*#__PURE__*/React.createElement(\"label\", null, \"Enter your zip code to find nearby breweries\"), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"text\",\n    value: zip,\n    onChange: function onChange(e) {\n      return setZip(e.target.value);\n    }\n  })));\n  return /*#__PURE__*/React.createElement(\"div\", null, locations ? /*#__PURE__*/React.createElement(_locations_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    locations: locations,\n    value: zip,\n    handleChange: changeZip,\n    searchBreweries: getBreweries\n  }) : searchDiv);\n}; // without hooks\n\n/*\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      zip: '',\n      locations: null\n    }\n  }\n\n  handleZipChange(e) {\n    this.setState({zip: e.target.value})\n  } \n\n  getBreweries(e) {\n    e.preventDefault();\n    const baseUrl = 'http://localhost:3000';\n    axios.get(`/breweries/${this.state.zip}`)\n    .then((response) => {\n      this.setState({\n        zip: '',\n        locations: response.data\n      })\n    })\n    .catch((error) => {\n      console.log(error)\n    })\n    \n  }\n\n  render() {\n\n    var searchDiv = (\n      <div id='main'>\n        <h1>Micro-Brewery Finder</h1>\n        <form onSubmit={(e) => {this.getBreweries(e)}}> \n          <label>Enter your zip code to find nearby breweries</label>\n          <input type='text' value={this.state.zip} onChange={(e) => this.handleZipChange(e)}></input>\n        </form>\n      </div>\n    )\n\n    return (\n      <div>\n        {this.state.locations ? \n          <Locations \n            locations={this.state.locations} \n            value={this.state.zip} \n            handleChange={this.handleZipChange.bind(this)} \n            searchBreweries={this.getBreweries.bind(this)}/>\n          : searchDiv}\n      </div>\n    )\n  }\n}\n*/\n\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB1c2VTdGF0ZSB9ID0gUmVhY3Q7XG5pbXBvcnQgTG9jYXRpb25zIGZyb20gJy4vbG9jYXRpb25zLmpzeCc7XG5cbi8vLy8gdXNpbmcgaG9va3MgLy8vL1xudmFyIEFwcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbemlwLCBzZXRaaXBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0QnJld2VyaWVzID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYnJld2VyaWVzLyR7emlwfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0WmlwKCcnKTtcbiAgICAgICAgc2V0TG9jYXRpb25zKHJlc3BvbnNlLmRhdGEpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgY29uc3QgY2hhbmdlWmlwID0gKG5ld1ppcCkgPT4gc2V0WmlwKG5ld1ppcCk7XG5cbiAgdmFyIHNlYXJjaERpdiA9IChcbiAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgIDxoMT5NaWNyby1CcmV3ZXJ5IEZpbmRlcjwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHsgZ2V0QnJld2VyaWVzKGUpIH19PiBcbiAgICAgICAgPGxhYmVsPkVudGVyIHlvdXIgemlwIGNvZGUgdG8gZmluZCBuZWFyYnkgYnJld2VyaWVzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt6aXB9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0WmlwKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtsb2NhdGlvbnMgPyBcbiAgICAgICAgPExvY2F0aW9ucyBcbiAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc30gXG4gICAgICAgICAgdmFsdWU9e3ppcH0gXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXtjaGFuZ2VaaXB9IFxuICAgICAgICAgIHNlYXJjaEJyZXdlcmllcz17Z2V0QnJld2VyaWVzfS8+XG4gICAgICAgIDogc2VhcmNoRGl2fVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuLy8gd2l0aG91dCBob29rc1xuLypcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB6aXA6ICcnLFxuICAgICAgbG9jYXRpb25zOiBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlWmlwQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt6aXA6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfSBcblxuICBnZXRCcmV3ZXJpZXMoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gICAgYXhpb3MuZ2V0KGAvYnJld2VyaWVzLyR7dGhpcy5zdGF0ZS56aXB9YClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6aXA6ICcnLFxuICAgICAgICBsb2NhdGlvbnM6IHJlc3BvbnNlLmRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHNlYXJjaERpdiA9IChcbiAgICAgIDxkaXYgaWQ9J21haW4nPlxuICAgICAgICA8aDE+TWljcm8tQnJld2VyeSBGaW5kZXI8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHt0aGlzLmdldEJyZXdlcmllcyhlKX19PiBcbiAgICAgICAgICA8bGFiZWw+RW50ZXIgeW91ciB6aXAgY29kZSB0byBmaW5kIG5lYXJieSBicmV3ZXJpZXM8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS56aXB9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVaaXBDaGFuZ2UoZSl9PjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2NhdGlvbnMgPyBcbiAgICAgICAgICA8TG9jYXRpb25zIFxuICAgICAgICAgICAgbG9jYXRpb25zPXt0aGlzLnN0YXRlLmxvY2F0aW9uc30gXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS56aXB9IFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZVppcENoYW5nZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgIHNlYXJjaEJyZXdlcmllcz17dGhpcy5nZXRCcmV3ZXJpZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDogc2VhcmNoRGl2fVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4qL1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ }),

/***/ "./client/src/location.jsx":
/*!*********************************!*\
  !*** ./client/src/location.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Location = function Location(props) {\n  var brewery = props.details;\n  var directions = 'http://www.google.com/maps/search/?api=1&query=' + brewery.name.split(' ').join('+') + '%2C+' + brewery.city.split(' ').join('+') + '%2C+' + brewery.state;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"location-info\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, brewery.name), /*#__PURE__*/React.createElement(\"p\", null, brewery.street, \" | \", brewery.city, \", \", brewery.state, \" \", brewery.postal_code.substring(0, 5)), /*#__PURE__*/React.createElement(\"p\", null, brewery.phone.substring(0, 3), \".\", brewery.phone.substring(3, 6), \".\", brewery.phone.substring(6)), /*#__PURE__*/React.createElement(\"span\", {\n    id: \"links\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: brewery.website_url,\n    target: \"_blank\"\n  }, \"Visit the website\")), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: directions,\n    target: \"_blank\"\n  }, \"Get Directions\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2xvY2F0aW9uLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvbG9jYXRpb24uanN4P2Y4YzgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9jYXRpb24gPSAocHJvcHMpID0+IHtcblxuICB2YXIgYnJld2VyeSA9IHByb3BzLmRldGFpbHM7XG5cbiAgdmFyIGRpcmVjdGlvbnMgPSAnaHR0cDovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0nICsgXG4gICAgYnJld2VyeS5uYW1lLnNwbGl0KCcgJykuam9pbignKycpICsgJyUyQysnICsgYnJld2VyeS5jaXR5LnNwbGl0KCcgJykuam9pbignKycpICsgJyUyQysnICsgYnJld2VyeS5zdGF0ZSBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J2xvY2F0aW9uLWluZm8nPlxuICAgICAgPGgyPnticmV3ZXJ5Lm5hbWV9PC9oMj5cbiAgICAgIDxwPnticmV3ZXJ5LnN0cmVldH0gfCB7YnJld2VyeS5jaXR5fSwge2JyZXdlcnkuc3RhdGV9IHticmV3ZXJ5LnBvc3RhbF9jb2RlLnN1YnN0cmluZygwLDUpfTwvcD5cbiAgICAgIDxwPnticmV3ZXJ5LnBob25lLnN1YnN0cmluZygwLDMpfS57YnJld2VyeS5waG9uZS5zdWJzdHJpbmcoMyw2KX0ue2JyZXdlcnkucGhvbmUuc3Vic3RyaW5nKDYpfTwvcD5cbiAgICAgIDxzcGFuIGlkPVwibGlua3NcIj5cbiAgICAgICAgPHA+PGEgaHJlZj17YnJld2VyeS53ZWJzaXRlX3VybH0gdGFyZ2V0PSdfYmxhbmsnPlZpc2l0IHRoZSB3ZWJzaXRlPC9hPjwvcD5cbiAgICAgICAgPHA+PGEgaHJlZj17ZGlyZWN0aW9uc30gdGFyZ2V0PSdfYmxhbmsnPkdldCBEaXJlY3Rpb25zPC9hPjwvcD5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/location.jsx\n");

/***/ }),

/***/ "./client/src/locations.jsx":
/*!**********************************!*\
  !*** ./client/src/locations.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _location_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.jsx */ \"./client/src/location.jsx\");\n\n\nvar Locations = function Locations(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n    id: \"locations-header\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    id: \"locations-header-title\"\n  }, \"Breweries Nearby\"), /*#__PURE__*/React.createElement(\"form\", {\n    id: \"new-search-form\",\n    onSubmit: function onSubmit(e) {\n      props.searchBreweries(e);\n    }\n  }, /*#__PURE__*/React.createElement(\"label\", null, \"New Search\"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"new-search\",\n    type: \"text\",\n    value: props.value,\n    onChange: function onChange(e) {\n      return props.handleChange(e.target.value);\n    }\n  }))), props.locations.map(function (brewery, index) {\n    return /*#__PURE__*/React.createElement(_location_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      details: brewery,\n      key: index\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Locations);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2xvY2F0aW9ucy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2xvY2F0aW9ucy5qc3g/YmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYXRpb24gZnJvbSAnLi9sb2NhdGlvbi5qc3gnO1xuXG52YXIgTG9jYXRpb25zID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J2xvY2F0aW9ucy1oZWFkZXInPlxuICAgICAgICA8aDEgaWQ9J2xvY2F0aW9ucy1oZWFkZXItdGl0bGUnPkJyZXdlcmllcyBOZWFyYnk8L2gxPlxuXG4gICAgICAgIDxmb3JtIGlkPSduZXctc2VhcmNoLWZvcm0nIG9uU3VibWl0PXsoZSkgPT4ge3Byb3BzLnNlYXJjaEJyZXdlcmllcyhlKX19PiBcbiAgICAgICAgICA8bGFiZWw+TmV3IFNlYXJjaDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPSduZXctc2VhcmNoJyB0eXBlPSd0ZXh0JyB2YWx1ZT17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuaGFuZGxlQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAge3Byb3BzLmxvY2F0aW9ucy5tYXAoKGJyZXdlcnksIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8TG9jYXRpb24gZGV0YWlscz17YnJld2VyeX0ga2V5PXtpbmRleH0gLz5cbiAgICAgIH0pfVxuXG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/locations.jsx\n");

/***/ })

/******/ });