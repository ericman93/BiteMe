foodiesApp.factory('Meetups', ['Auth', '$http', '$q', function (Auth, $http, $q) {
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

    meetupService.askToJoin = function (meetupId) {
        var deferred = $q.defer();

        var data = {
            RequestingUserId: Auth.userId,
        };

        $http.put(meetupApiUrl + meetupId, data)
        .success(function (meetups) {
            deferred.resolve("ווהוו ביקשת להצטרף")
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

    meetupService.createRequest = function (meetup) {
        var deferred = $q.defer();

        $http.post(meetupApiUrl, meetup)
        .success(function (meetups) {
            deferred.resolve("תודה שהצעת לעזור לאנשים !")
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