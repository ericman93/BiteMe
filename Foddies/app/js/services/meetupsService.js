foodiesApp.factory('Meetups', ['$http', '$q', function ($http, $q) {
    var meetupService = {}

    meetupService.getMeetups = function () {
        var deferred = $q.defer();

        var requests = [
            {
                Name: "Test",
                Location: {
                    Latitude: 31.850033,
                    Longitude: 34.6500523
                }
            }
        ]
        deferred.resolve(requests)

        return deferred.promise;
    }

    return meetupService;
}]);