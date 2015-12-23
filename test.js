"use strict";

describe("Checkbutton Tests", function() {
	it("Minimal Example", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox0").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel0").text()).toBe("false");


		// Click okcheckbox to be checked
		element("#okcheckbox0").click();
		expect(element("#okcheckbox0 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel0").text()).toBe("true");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox0").click();
		expect(element("#okcheckbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel0").text()).toBe("false");


		// Click external trigger for true
		element("#okcheckboxButton0true").click();
		expect(element("#okcheckbox0 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel0").text()).toBe("true");

		// Click external trigger for false
		element("#okcheckboxButton0false").click();
		expect(element("#okcheckbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel0").text()).toBe("false");
	});

	it("Example with Custom Name", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox1").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the name is set correctly
		expect(element("#okcheckbox1").attr("name")).toBe("custom-name");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel1").text()).toBe("false");


		// Click okcheckbox to be checked
		element("#okcheckbox1").click();
		expect(element("#okcheckbox1 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel1").text()).toBe("true");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox1").click();
		expect(element("#okcheckbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel1").text()).toBe("false");


		// Click external trigger for true
		element("#okcheckboxButton1true").click();
		expect(element("#okcheckbox1 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel1").text()).toBe("true");

		// Click external trigger for false
		element("#okcheckboxButton1false").click();
		expect(element("#okcheckbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel1").text()).toBe("false");
	});

	it("Example with Custom True Value", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox2").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel2").text()).toBe("false");


		// Click okcheckbox to be checked
		element("#okcheckbox2").click();
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel2").text()).toBe("The Truth");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox2").click();
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel2").text()).toBe("false");


		// Click external trigger for true
		element("#okcheckboxButton2true").click();
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel2").text()).toBe("The Truth");

		// Click external trigger for false
		element("#okcheckboxButton2false").click();
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel2").text()).toBe("false");

		// Click external trigger for truth
		element("#okcheckboxButton2truth").click();
		expect(element("#okcheckbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel2").text()).toBe("The Truth");
	});

	it("Example with Custom False Value", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox3").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel3").text()).toBe("The Untruth");


		// Click okcheckbox to be checked
		element("#okcheckbox3").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel3").text()).toBe("true");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox3").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel3").text()).toBe("The Untruth");


		// Click external trigger for true
		element("#okcheckboxButton3true").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel3").text()).toBe("true");

		// Click external trigger for false
		element("#okcheckboxButton3false").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel3").text()).toBe("The Untruth");


		// Click okcheckbox to be checked
		element("#okcheckbox3").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel3").text()).toBe("true");

		// Click external trigger for untruth
		element("#okcheckboxButton3untruth").click();
		expect(element("#okcheckbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel3").text()).toBe("The Untruth");
	});

	it("Example with Custom True and False Value", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox4").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel4").text()).toBe("The Untruth");


		// Click okcheckbox to be checked
		element("#okcheckbox4").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel4").text()).toBe("The Truth");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox4").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel4").text()).toBe("The Untruth");


		// Click external trigger for true
		element("#okcheckboxButton4true").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel4").text()).toBe("The Truth");

		// Click external trigger for false
		element("#okcheckboxButton4false").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel4").text()).toBe("The Untruth");

		// Click external trigger for truth
		element("#okcheckboxButton4truth").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel4").text()).toBe("The Truth");

		// Click external trigger for untruth
		element("#okcheckboxButton4untruth").click();
		expect(element("#okcheckbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel4").text()).toBe("The Untruth");
	});

	it("Minimal Example", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox5").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked
		expect(element("#okcheckbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("0");


		// Click okcheckbox to be checked
		element("#okcheckbox5").click();
		expect(element("#okcheckbox5 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel5").text()).toBe("true");
		expect(element("#changes").text()).toBe("1");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox5").click();
		expect(element("#okcheckbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("2");


		// Click external trigger for true
		element("#okcheckboxButton5true").click();
		expect(element("#okcheckbox5 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel5").text()).toBe("true");
		expect(element("#changes").text()).toBe("2");

		// Click external trigger for false
		element("#okcheckboxButton5false").click();
		expect(element("#okcheckbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("2");
	});

	it("Example Disabled", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox6").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");


		// Check if the okcheckbox is unchecked and enabled
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel6").text()).toBe("false");
		expect(element("#okcheckbox6").attr("disabled")).toBe(undefined);


		// Click okcheckbox to be checked
		element("#okcheckbox6").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel6").text()).toBe("true");

		// Click the okcheckbox to be unchecked
		element("#okcheckbox6").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel6").text()).toBe("false");


		// Click external trigger for true
		element("#okcheckboxButton6true").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel6").text()).toBe("true");

		// Click external trigger for false
		element("#okcheckboxButton6false").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel6").text()).toBe("false");


		// Disable okcheckbox
		element("#okcheckboxButton6disable").click();
		expect(element("#okcheckbox6").attr("disabled")).toBe("disabled");

		// Click disabled okcheckbox
		element("#okcheckbox6").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel6").text()).toBe("false");

		// Click external trigger for true
		element("#okcheckboxButton6true").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#okcheckboxModel6").text()).toBe("true");

		// Click external trigger for false
		element("#okcheckboxButton6false").click();
		expect(element("#okcheckbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#okcheckboxModel6").text()).toBe("false");


		// Enable okcheckbox again
		element("#okcheckboxButton6enable").click();
		expect(element("#okcheckbox6").attr("disabled")).toBe(undefined);
	});

	it("Example Different Sizes", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox7a").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox7b").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-sm ng-dirty");
		expect(element("#okcheckbox7c").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid ng-dirty");
		expect(element("#okcheckbox7d").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-lg ng-dirty");
		expect(element("#okcheckbox8a").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox8b").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-sm ng-dirty");
		expect(element("#okcheckbox8c").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid ng-dirty");
		expect(element("#okcheckbox8d").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-lg ng-dirty");

		expect(element("#okcheckbox7a").css("width")).toBe("22px");
		expect(element("#okcheckbox7b").css("width")).toBe("30px");
		expect(element("#okcheckbox7c").css("width")).toBe("34px");
		expect(element("#okcheckbox7d").css("width")).toBe("45px");
		expect(element("#okcheckbox8a").css("width")).toBe("22px");
		expect(element("#okcheckbox8b").css("width")).toBe("30px");
		expect(element("#okcheckbox8c").css("width")).toBe("34px");
		expect(element("#okcheckbox8d").css("width")).toBe("45px");

		expect(element("#okcheckbox7a").css("height")).toBe("22px");
		expect(element("#okcheckbox7b").css("height")).toBe("30px");
		expect(element("#okcheckbox7c").css("height")).toBe("34px");
		expect(element("#okcheckbox7d").css("height")).toBe("45px");
		expect(element("#okcheckbox8a").css("height")).toBe("22px");
		expect(element("#okcheckbox8b").css("height")).toBe("30px");
		expect(element("#okcheckbox8c").css("height")).toBe("34px");
		expect(element("#okcheckbox8d").css("height")).toBe("45px");
	});

	it("Example Different Styles", function() {
		browser().navigateTo("index.html");

		// Check if the okcheckbox has been replaced with template
		expect(element("#okcheckbox9a").attr("class")).toBe("btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox9b").attr("class")).toBe("btn-primary btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox9c").attr("class")).toBe("btn-success btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox9d").attr("class")).toBe("btn-info btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox9e").attr("class")).toBe("btn-warning btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");
		expect(element("#okcheckbox9f").attr("class")).toBe("btn-danger btn btn-default ng-isolate-scope ng-valid btn-xs ng-dirty");

		expect(element("#okcheckbox9a").css("background-color")).toBe("rgb(255, 255, 255)");
		expect(element("#okcheckbox9b").css("background-color")).toBe("rgb(66, 139, 202)");
		expect(element("#okcheckbox9c").css("background-color")).toBe("rgb(92, 184, 92)");
		expect(element("#okcheckbox9d").css("background-color")).toBe("rgb(91, 192, 222)");
		expect(element("#okcheckbox9e").css("background-color")).toBe("rgb(240, 173, 78)");
		expect(element("#okcheckbox9f").css("background-color")).toBe("rgb(217, 83, 79)");
	});
});
