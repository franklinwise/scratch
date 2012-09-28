require([
	'backbone',
	'data',
	'domain/optionSetItemSettings',
	'models/optionSet',
	'models/optionSetItem',
	'models/itemOptionSet',
	'models/itemSetOptionSet',
	'models/menuSectionItemOptionSetItem'
], function (Backbone, data, OptionSetItemSettings, OptionSet, OptionSetItem, ItemOptionSet, ItemSetOptionSet, MenuSectionItemOptionSetItem) {

	module("domain/optionSetSettings", {
		setup: function () {


		},
		teardown: function () {
			window.errors = null;
		}
	});


	test("private option item set", function () {
		expect(4);

		var optionSet = new OptionSet({ isShared: false });
		var optionSetItem = new OptionSetItem();
		var itemOptionSet = new ItemOptionSet();
		var target = new OptionSetItemSettings({ optionSet: optionSet, optionSetItem: optionSetItem, itemOptionSet: itemOptionSet });

		strictEqual(target.getConstraints(), optionSetItem);
		ok(target.getConstraints() instanceof OptionSetItem);

		target.itemSetOptionSet = new ItemSetOptionSet();
		data.itemSetOptionSetItems = new Backbone.Collection();

		strictEqual(target.getConstraints(), optionSetItem);
		ok(target.getConstraints() instanceof OptionSetItem);
	});


	test("MenuSectionItemOptionSetItem", function () {
		expect(3);

		var optionSet = new OptionSet({ isShared: true });
		var item
		var optionSetItem = new OptionSetItem();
		var itemSetOptionSet = new ItemSetOptionSet();
		var menuId = 1;
		var itemSetItemId = 1;
		data.menuSectionItemOptionSetItems = new Backbone.Collection();
		var target = new OptionSetItemSettings({ 
			optionSet: optionSet,
			optionSetItem: optionSetItem,
			itemSetOptionSet: itemSetOptionSet,
			menuId: menuId, 
			itemSetItemId: itemSetItemId });

		ok((target.getConstraints() === optionSet) == false);
		ok((target.getConstraints() instanceof OptionSetItem));

		var forUpdate = true;
		ok((target.getConstraints(forUpdate) instanceof MenuSectionItemOptionSetItem));
	});


});