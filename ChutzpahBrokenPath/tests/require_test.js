/// <reference path="../libs/qunit-1.10.0.js/>
/// <reference path="../libs/require.js/>


require.config({
	baseUrl: '../../'
});


require([
  '../libs/qunit-1.10.0',
], function (qunit) {


	// Define a group for our tests  
	module("require test", {
		setup: function () {
			
		},
		teardown: function () {
			window.errors = null;
		}
	});
	// Test the order of items added  
	test("test ordering", function () {
		expect(1);

		require(['../libs/qunit-1.10.0'], function (qunit) { });

		ok(true);
	});


});