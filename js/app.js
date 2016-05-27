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
			url: '/{pageName}',
			templateUrl: 'templates/pages.details.html',
			controller: function ($scope, $stateParams, Pages) {
				Pages.get($stateParams.pageName).then(function (data) {
					$scope.getTimes = new Array(data.counter);
					$scope.images = {
						old: `assets/images/pages/${data.name}/${data.name}`,
						new: `assets/images/pages/${data.name}/${data.name}`
					};
				});
			}
		})
})