# URLessRouter

## Overview
URLessRouter is a way to manage pages, and content without updating the URL.  It is designed to work like popular framework routers, but it does not modify or use the browser's url, window.location, anchor tags, etc.  An example use case would be to control the content and flow of a wizard.

## Install
...Coming Soon...

## How to use
To get started with URLessRouter you need to have an empty html element with a unique id.
`<div id="routerView"></div>` *Note: it must be empty because it's contents will be replaced

Next you need to instantiate URLessRouter and bind it to the element you created
`const router = new URLessRouter('routerView');`*Note: there can be multiple routers per page, but they cannot be nested.

Now that the `router` has been initialize it's time to add routes. 
```javascript
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

## Examples
...Coming Soon...
