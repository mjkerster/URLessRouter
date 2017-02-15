# URLessRouter

## Overview
URLessRouter is a way to manage pages, and content without updating the URL.  It is designed to work like popular framework routers, but it does not modify or use the browser's url, window.location, anchor tags, etc.  An example use case would be to control the content and flow of a wizard.

## Install

`npm install urlessrouter` or download `URLessRouter.js` from the `dist` directory.  This library can be included using module loaders or including the script in HTML.

## Quick Guide
To get started with URLessRouter you need to have an empty html element with a unique id.
```js
<div id="routerView"></div> //Note: it must be empty because it's contents will be replaced
```
Next you need to instantiate URLessRouter and bind it to the element you created
```js
const router = new URLessRouter('routerView'); //Note: there can be multiple routers per page, but they cannot be nested.
```
Now that the `router` has been initialize, it's time to add routes.
```js
router.addRoute({
  path: '/employee/{:id}',
  name: 'employee',
  templatePath: '/employeeInfo.html',
  actions: {
    employeeInfo: function(params) {
      return 'Fetch results for api/employee/' + params.id;
    },
    additionalInfo: function() {
      return returnPromise();
    },
  },
});
```
To "navigate" to a specific route you just need to provide the router with the name of the route you want
```js
var returnedActionsData = router.goTo('employee'); //Note: executed actions are returned from go();
```

For a complete example see the Examples section, or for more information see the Specs section.

##Specs

### `URLessRouter(htmlElementId)`

When invoked with the `new` keyword a new URLessRouter is created and bound the the provided HTML element.
  
#### Argument

*htmlElementId*: ID of the HTML element that the router will bind to.
  
***

###  URLessRouter Prototypes

#### `addRoute(routeObject)`

Adds a route to the router.  One or more routes can be added to the router.

##### Argument

*routeObject*: contains all parameters used when defining a route. See below for details.

| Attribute   | Description |
|-------------|-------------|
| path        | This field has no real purpose.  It can be set for reabability when defining and structuring routes. This attribute is NOT required.|
| name        | Name of the route that is being defined.  This must be unique and is used when navigating to a route. See `goTo()`|
| template    | String of html code that will serve as the template for the route. If templateURL is defined then it will be used instead of template.|
| templateUrl | Location of the html file to be loaded as the template for the route.|
| actions     | Object containing functions to be executed for the route.|

#### `goTo(routeName, params)`

This is used to navigate to a route by passing the name of the route, and parameters for the route.

##### Arguments

*routeName*: name of the route to navigate to.  The name must match the name that was set in the object passed to `addRoute`

*params*: contains the parameters that should be passed to the `actions` of the route. This is suppose to mimic URL parameters.

##### Returns

*object*: An object containing the results of executed `actions`.

## Examples
...Coming Soon...
