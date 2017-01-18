const Route = require('./Route');
const HTTPClient = require('./HTTPClient');

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

// Add Parameter method to URLessRouter

// Switch all methods to arrow function syntax

module.exports = URLessRouter;
