foodiesApp.factory('Meetups', ['$http', '$q', function ($http, $q) {
    var meetupApiUrl = "/api/MeetUp/"
    var meetupService = {}

    meetupService.getMeetups = function () {
        var deferred = $q.defer();

        $http.get(meetupApiUrl)
        .success(function (meetups) {
            deferred.resolve(meetups)
        })
        .error(function (data, status, headers, config) {
            var errorMessage = data.Message;
            if (status >= 500 || !errorMessage) {
                errorMessage = "שגיאה :(";
            }

            deferred.reject(errorMessage)
        });

        return deferred.promise;
    }

    return meetupService;
}]);