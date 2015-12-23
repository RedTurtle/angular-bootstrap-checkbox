"use strict";

angular.module("angular-bootstrap-ok-checkbox-test", ["ui.okcheckbox"]).controller("index", function($scope) {
	$scope.okcheckboxModel = [
		false, false, false,false, false, false, false, false, true, false, true
	];

	$scope.changes = 0;
	$scope.onChange = function() {
		$scope.changes++;
	};

	$scope.isDisabled = false;
});
