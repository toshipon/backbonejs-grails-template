define [
	'jquery'
	'backbone'
], ( $, Backbone) ->
	Router = Backbone.Router.extend
		routes:
			'drive': 'initDrive'
			'map': 'initMap'
		
		initDrive: (param)->
			consoloe.info 'initDrive'
		
		initMap: (param)->
			console.inifo 'initMap'
