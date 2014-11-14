foodiesApp.factory('Auth', ['$http', '$q', function ($http, $q) {
    var authServies = {}

    authServies.login = function (email, password) {

        $http.post('api/login', { id: undefined, email: email, name: undefined, password: password }).
            success(function (data, status, headers, config) {
            }).
            error(function (data, status, headers, config) {
            });
    authServies.login = function (email, password) {

        $http.post('api/login', { id: undefined, email: email, name: undefined, password: password }).
            success(function (data, status, headers, config) {
                
                authServies.authId = data;

            }).
            error(function (data, status, headers, config) {
            });
    }

    authServies.logout = function () {

        
    }

    return authServies;
}]);