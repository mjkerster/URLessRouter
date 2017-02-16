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
	  this.routes = {};

	  if (elementId) {
	    this.rootElement = document.getElementById(elementId);
	  }
	}

	URLessRouter.prototype.addRoute = function addRouteProto(routeObject) {
	  this.routes[routeObject.name] = new Route(routeObject, new HTTPClient());
	};

	URLessRouter.prototype.goTo = function goToProto(name, params) {
	  this.routes[name].go().then((template) => {
	    this.rootElement.innerHTML = template;
	  });

	  if (!params) {
	    params = {};
	  }

	  return this.routes[name].getActions(params);
	};

	// Flag action to only be executed once

	// Built in next function that goes to the next route ?? Might be dumb since it only works with zero param routes

	// Built in auto increment parameter function ??

	// Update to use ASYNC methods

	module.exports = URLessRouter;


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Route(routeObject, httpClient) {
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
	    else if (key === 'actions') {
	      this.actions = routeObject[key];
	    }
	  }
	}

	Route.prototype.go = function goProto() {

	  return new Promise((resolve, reject) => {
	    if (this.templatePath) {
	      this.httpC.get(this.templatePath, (template) => {
	        resolve(template);
	      });
	    }
	    else {
	      resolve(this.template);
	    }
	  });
	};

	Route.prototype.getActions = function getActionsProto(params) {
	  const executedActionsObject = {};

	  for (const action in this.actions) {
	    if (this.actions.hasOwnProperty(action)) {
	      executedActionsObject[action] = this.actions[action](params);
	    }
	  }

	  return executedActionsObject;
	};

	Route.prototype.hasActions = function hasActionsProto() {
	  return (this.actions);
	};

	module.exports = Route;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function HTTPClient() {}

	HTTPClient.prototype.get = function httpGet(aUrl, callback) {
	  const anHttpRequest = new XMLHttpRequest();

	  anHttpRequest.onreadystatechange = function stateChange() {
	    if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
	      callback(anHttpRequest.responseText);
	    }
	  };

	  anHttpRequest.open('GET', aUrl, true);
	  anHttpRequest.send(null);
	};

	module.exports = HTTPClient;


/***/ }
/******/ ])
});
;