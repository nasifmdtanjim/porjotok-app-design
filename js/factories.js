angular.module('starter.factories', ['starter.utils.service'])

.factory('Pages', ['$http', 'utils', function ($http, utils) {
	var pages = $http.get('assets/pages.json').then(function (response) {
		return response.data;
	});

	return {
		all: function () {
			return pages;
		},

		get: function (name) {
			return pages.then(function(data) {
				return utils.findByName(data, name);
			})
		}
	};
}]);