'use strict';

angular.module('app', ['ui.router', 'pages.controllers'])

.run(function ($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
})

.config(function ($stateProvider, $urlRouterProvider) {
	// $locationProvider.html5Mode(true);

	$urlRouterProvider
	.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		template: '@todo'
	})

	.state('pages', {
		abstract: true,
		url: '/pages',
		templateUrl: 'templates/pages.html',
		controller: 'PagesController'
	})

		.state('pages.list', {
			url: '',
			templateUrl: 'templates/pages.list.html'
		})

		.state('pages.detail', {
			url: '/{pageId:[0-9]{1,4}}',
			templateUrl: 'templates/pages.details.html',
			controller: function ($scope, $stateParams, pages) {
				pages.get($stateParams.pageId).then(function (data) {
					$scope.images = {
						old: `assets/images/pages/${data.name}/${data.name}_old.png`,
						new: `assets/images/pages/${data.name}/${data.name}_new.png`
					};
				});
			}
		})
})