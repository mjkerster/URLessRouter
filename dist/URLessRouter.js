(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["URLessRouter"] = factory();
	else
		root["URLessRouter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Route = __webpack_require__(1);
	const HTTPClient = __webpack_require__(2);

	function URLessRouter(elementId) {
	  let rootElement, routes;
	  routes = {};

	  if (elementId) {
	    rootElement = document.getElementById(elementId);
	  }

	  function addRoute(routeObject) {
	    routes[routeObject.name] = new Route(routeObject, new HTTPClient());
	  }

	  function goTo(name, paramObject) {
	    rootElement.innerHTML = routes[name].go(name);
	  }

	  return {
	    addRoute: addRoute,
	    goTo: goTo,
	  };
	}

	module.exports = URLessRouter;


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Route(routeObject, httpClient) {
	  let path, name, template, templatePath, httpC;

	  this.httpC = httpClient;

	  for (const key in routeObject) {
	    if (key === 'path') {
	      this.path = routeObject[key];
	    }
	    else if (key === 'name') {
	      this.name = routeObject[key];
	    }
	    else if (key === 'template') {
	      this.template = routeObject[key];
	    }
	    else if (key === 'templatePath') {
	      this.templatePath = routeObject[key];
	    }
	  }
	}

	Route.prototype.go = function goProto(name) {
	  // TODO: This isn't finished
	  if (this.templatePath) {
	    return this.httpC.get(this.templatePath).then(function success(response) {
	      return response;
	    });
	  } else {
	    return this.template;
	  }
	};

	module.exports = Route;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function HTTPClient() {}

	HTTPClient.prototype.get = function httpGet(aUrl) {
	  return new Promise(function resolver(resolve, reject){
	    const anHttpRequest = new XMLHttpRequest();

	    anHttpRequest.onreadystatechange = function stateChange() {
	      if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
	        resolve(anHttpRequest.responseText);
	      }

	      anHttpRequest.open('GET', aUrl, true);
	      anHttpRequest.send(null);
	    };
	  });
	};

	module.exports = HTTPClient;


/***/ }
/******/ ])
});
;