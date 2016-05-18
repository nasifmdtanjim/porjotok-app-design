angular.module('pages.controllers', ['starter.factories'])

.controller('PagesController', function ($scope, pages) {
	pages.all().then(function (data) {
		$scope.pages = data;
	});
})