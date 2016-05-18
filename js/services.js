angular.module('starter.utils.service', [])

.factory('utils', function () {
	return {
		findById: function findById(collection, id) {
			for (var i = 0; i < collection.length; i++) {
				if (collection[i].id == id) return collection[i];
			}
			return null;
		}
	};
});