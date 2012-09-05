
require(['views/map/main', 'routers/map'], function(View, Router) {
  new Router();
  Backbone.history.start();
  return new View();
});
