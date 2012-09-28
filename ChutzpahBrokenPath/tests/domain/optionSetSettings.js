require([
	'backbone',
	'data',
	'domain/optionsetSettings',
	'models/optionSet',
	'models/itemOptionSet',
	'models/itemSetOptionSet',
	'models/menuSectionItemOptionSet'
], function (Backbone, data, OptionSetSettings, OptionSet, ItemOptionSet, ItemSetOptionSet, MenuSectionItemOptionSet) {


	module("domain/optionSetSettings", {
		setup: function () {


		},
		teardown: function () {
			window.errors = null;
		}
	});


	test("private option set", function () {
		expect(2);

		var optionSet = new OptionSet({ isShared: false });
		var target = new OptionSetSettings({ optionSet: optionSet });

		strictEqual(target.getConstraints(), optionSet);

		target.itemSetOptionSet = new ItemSetOptionSet();

		strictEqual(target.getConstraints(), optionSet);
	});

	test("item option set", function () {
		expect(1);

		var optionSet = new OptionSet({ isShared: true });
		var itemOptionSet = new ItemOptionSet();
		var target = new OptionSetSettings({ optionSet: optionSet, itemOptionSet: itemOptionSet });

		strictEqual(target.getConstraints(), itemOptionSet);
	});

	test("item option set with unused data", function () {
		expect(1);

		var optionSet = new OptionSet({ isShared: true });
		var itemOptionSet = new ItemOptionSet();
		var itemSetOptionSet = new ItemSetOptionSet();
		var menuId = 1;
		var itemSetItemId = 1;
		data.menuSectionItemOptionSets = new Backbone.Collection();
		var target = new OptionSetSettings({ optionSet: optionSet, itemOptionSet: itemOptionSet, menuId: menuId, itemSetItemId: itemSetItemId });

		strictEqual(target.getConstraints(), itemOptionSet);
	});

	test("itemSet option set", function () {
		expect(1);

		var optionSet = new OptionSet({ isShared: true });
		var itemSetOptionSet = new ItemSetOptionSet();
		var target = new OptionSetSettings({ optionSet: optionSet, itemSetOptionSet: itemSetOptionSet });

		strictEqual(target.getConstraints(), itemSetOptionSet);
	});

	test("MenuSectionItemOptionSet", function () {
		expect(2);

		var optionSet = new OptionSet({ isShared: true });
		var itemSetOptionSet = new ItemSetOptionSet();
		var menuId = 1;
		var itemSetItemId = 1;
		data.menuSectionItemOptionSets = new Backbone.Collection();
		var target = new OptionSetSettings({ optionSet: optionSet, itemSetOptionSet: itemSetOptionSet, menuId: menuId, itemSetItemId: itemSetItemId });

		ok((target.getConstraints() === optionSet) == false);
		ok((target.getConstraints() instanceof MenuSectionItemOptionSet));
	});


});