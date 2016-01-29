var express = require("express");
var TVShowCtrl = require('../controllers/tvshows');

module.exports = function(app) {

	// API routes
	var tvshows = express.Router();

	tvshows.route('/tvshows')
	  .get(TVShowCtrl.findAllTVShows)
	  .post(TVShowCtrl.addTVShow);

	tvshows.route('/tvshows/:id')
	  .get(TVShowCtrl.findById)
	  .put(TVShowCtrl.updateTVShow)
	  .delete(TVShowCtrl.deleteTVShow);
	  
	app.use(tvshows);
	

};



