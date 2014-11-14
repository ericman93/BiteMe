foodiesApp.factory('GeoLocation', ['$http', '$q', function ($http, $q) {
    var geocoder = new google.maps.Geocoder();
    var geoService = {}

    geoService.getLocation = function (address) {
        var deferred = $q.defer();

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                deferred.resolve({
                    Latitude: results[0].geometry.location.k,
                    Longitude: results[0].geometry.location.B
                });
            } else {
                deferred.reject('Geocode was not successful for the following reason: ' + status);
            }
        });

        return deferred.promise;
    }

    return geoService;
}]);