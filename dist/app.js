const router = new URLessRouter('demoArea');
console.log('Initialize App', router);

const routeObject = {
  path: '/root',
  name: 'main',
  template: '<div>Hello World</div>',
};

router.addRoute(routeObject);
router.addRoute({
  path: '/next',
  name: 'next',
  templatePath: '/testHtml.html',
  actions: {
    executeThis: function testFunc(params) {
      return 'I am fetching results for location/name/' + params.counter;
    },
    andThis: function incrementStuff() {
      return serviceCall();
    },
  },
});

router.goTo('main');

var counter = 1;
function next() {
  const dataObject = router.goTo('next', {counter: counter});
  counter++;
  console.log(dataObject);
}

function serviceCall() {
  return Promise.resolve('Return a promise');
}
