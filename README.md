# URLessRouter

## Overview
URLessRouter is a way to manage pages, and content without updating the URL.  It is designed to work like popular framework routers, but it does not modify or use the browser's url, window.location, anchor tags, etc.  An example use case would be to control the content and flow of a wizard.

## Install
...Coming Soon...

## Quick Guide
To get started with URLessRouter you need to have an empty html element with a unique id.
```js
<div id="routerView"></div> //Note: it must be empty because it's contents will be replaced
```
Next you need to instantiate URLessRouter and bind it to the element you created
```js
const router = new URLessRouter('routerView'); //Note: there can be multiple routers per page, but they cannot be nested.
```
Now that the `router` has been initialize it's time to add routes.
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
var returnedActionsData = router.go('employee'); //Note: executed actions are returned from go();
```

For a complete example see the Examples section, or for more information see the Specs section.

##Specs
...Coming Soon...

### `URLessRouter(string)`

When invoked with the `new` keyword a new URLessRouter is created and bound the the provided HTML element. 
  
#### Parameter

string: ID of the HTML element that the router will bind to.
  
***

###  URLessRouter Prototypes

#### `addRoute(object)`

Adds a route to the router.  One or more routes can be added to the router.

##### Parameter

*object*: contains all parameters used when defining a route.

```javascript
{
  path: "This field isn't actually used for anything.  It can be set for reabability when defining and structuring routes."
  name: "Name of the route that is being defined.  This must be unique and is used when navigating to a route. See goTo()"
  template: "String of html code that will serve as the template for the route. If templateURL is defined then it will be used instead of tempalte."
  templateUrl: "Location of the html file to be loaded as the template for the route."
  actions: "Object containing functions to be executed for the route."
}
```
  

#### `goTo(string, object)`

This is used to navigate to a route by passing the name of the route, and parameters for the route

##### Parameters

*string*: name of the route to navigate to.  The name must match the name set in the oject passed to `addRoute`

*object*: contains the parameters that should be passed to the `actions` of the route.

## Examples
...Coming Soon...
