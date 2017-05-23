var URLessRouter = require('../dist/URLessRouter');

describe('URLessRouter Tests', function() {
  var router;

  beforeEach(function(){
    router = new URLessRouter('someId');
  });

  it('should not be null when invoked', function() {
    expect(router).not.toBeNull();
  });

  it('should not have any routes when invoked', function(){
    expect(router.routes).toEqual({});
  });

  it('should add a route', function(){
    router.addRoute({
      path:'/main',
      name:'main',
      template:'<div>main</div>'
    });

    expect(router.routes['main'].path).toEqual('/main');
    expect(router.routes['main'].name).toEqual('main');
    expect(router.routes['main'].template).toEqual('<div>main</div>');
  });

  it('should make a request for a template and return html', function(){
    router.addRoute({
      path:'main',
      name:'main',
      templatePath: '/path/main.html',
      actions: {
        res: function(){
          return 'test data';
        }
      }
    });

    var returnedData = router.goTo('main');

    console.log(returnedData)
    expect(returnedData.res).toEqual('test data');
  });

});
