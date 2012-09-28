/// <reference path="../libs/qunit-1.10.0.js/>

module("Qunit sanity check", {
	setup: function () {
		
	},
	teardown: function () {
		window.errors = null;
	}
});
// Test the order of items added  
test("It Runs", function () {
	expect(1);
	ok(true);
});