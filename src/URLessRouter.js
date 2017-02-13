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

// Flag action to only be executed once

// Built in next function that goes to the next route ?? Might be dumb since it only works with zero param routes

// Built in auto increment parameter function ??

// Update to use ASYNC methods

module.exports = URLessRouter;
