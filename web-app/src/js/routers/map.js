
define(['jquery', 'backbone'], function($, Backbone) {
  var Router;
  return Router = Backbone.Router.extend({
    routes: {
      'drive': 'initDrive',
      'map': 'initMap'
    },
    initDrive: function(param) {
      return consoloe.info('initDrive');
    },
    initMap: function(param) {
      return console.inifo('initMap');
    }
  });
});
