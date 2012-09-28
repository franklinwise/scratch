// Filename: app.js
define([
  'order!jquery',
  'order!underscore',
  'order!backbone'
], function ($, _, Backbone) {
	var initialize = function () {
		window.jQuery = $;
	}

	return {
		initialize: initialize
	}

});
