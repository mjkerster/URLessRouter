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
