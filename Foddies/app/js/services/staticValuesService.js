foodiesApp.factory('StaticValues', ['$http', '$q', function ($http, $q) {
    var valuesApiUrl = "/api/StaticValues"
    var serivce = {
        foodTypes : []
    }

    serivce.init = function () {
        getValues('FoodType').then(function (data) {
            serivce.foodTypes = data;
        }, function () {
            serivce.foodTypes = data;
        })
    }

    function getValues(listName){
        var deferred = $q.defer();

        $http.get(valuesApiUrl + '?listName='+listName)
        .success(function (values) {
            deferred.resolve(values)
        })
        .error(function (data, status, headers, config) {
            deferred.reject([])
        });

        return deferred.promise;
    }

    return serivce;
}]);