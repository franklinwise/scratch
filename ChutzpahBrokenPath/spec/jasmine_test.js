/// <reference path="jasmine.js/>
/// <reference path="Math.js/>

describe("jasmine Math.add", function () {
	it("can add two numbers", function () {
		var result = new Math().add(2, 3);
		expect(result).toBe(5);
	});
});

