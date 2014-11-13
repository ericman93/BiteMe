foodiesApp.factory('Auth', ['$http', '$q', function ($http, $q) {
    var authServies = {}

    authServies.login = function () {
        authServies.userId = 6;
    }

    authServies.logout = function () {

    }

    authServies.userId = 6;

    return authServies;
}]);