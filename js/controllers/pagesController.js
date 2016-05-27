angular.module('pages.controllers', ['starter.factories'])

.controller('PagesController', function ($scope, Pages, $location, $anchorScroll) {
	Pages.all().then(function (data) {
		$scope.pages = data;
	});

	$scope.scrollTo = function(id) {
		console.log('this');
		$location.hash(id);
		$anchorScroll();
	};
})