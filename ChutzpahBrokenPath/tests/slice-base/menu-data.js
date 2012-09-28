require([
	'backbone',
	'data',
	'domain/optionsetSettings',
	'models/optionSet',
	'models/itemOptionSet',
	'models/itemSetOptionSet',
	'models/menuSectionItemOptionSet'
], function (Backbone, data, OptionSetSettings, OptionSet, ItemOptionSet, ItemSetOptionSet, MenuSectionItemOptionSet) {


	module("slice-base/menu-data", {
		setup: function () {


		},
		teardown: function () {
			window.errors = null;
		}
	});


	test("load option sets", function () {
		expect(1);

		//todo
	});



});