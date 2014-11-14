foodiesApp.factory('StaticValues', ['$http', '$q', function ($http, $q) {
    var valuesApiUrl = "/api/StaticValues"
    var serivce = {
        foodTypes: [],
        resturants: [],
        brances: []
    }

    serivce.init = function () {
        getValues('FoodType').then(function (data) {
            serivce.foodTypes = data;
        }, function () {
            serivce.foodTypes = data;
        })

        getValues('RESTURANTS').then(function (data) {
            serivce.resturants = data;
        }, function () {
            serivce.resturants = data;
        })

        getValues('BRANCH').then(function (data) {
            serivce.brances = data;
        }, function () {
            serivce.brances = data;
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