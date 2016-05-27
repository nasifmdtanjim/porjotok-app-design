angular.module('pages.controllers', ['starter.factories'])

.controller('PagesController', function ($scope, Pages) {
	Pages.all().then(function (data) {
		$scope.pages = data;
	});
})