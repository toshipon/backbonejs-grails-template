require [
	'views/map/main',
	'routers/map'
], ( View, Router) ->
	new Router()
	Backbone.history.start()
	new View()