foodiesApp.controller('NewRequestController', ['StaticValues', 'GeoLocation', 'Meetups', '$scope', '$modalInstance', 'state',
  function (StaticValues, GeoLocation, Meetups, $scope, $modalInstance, state) {

      $scope.foodTypes = StaticValues.foodTypes
      $scope.resturants = StaticValues.resturants
      $scope.brances = StaticValues.brances

      $scope.meetup = {
          HostType: 0
      }

      $scope.create = function () {
          GeoLocation.getLocation($scope.meetup.Address).then(function (location) {
              $scope.meetup.MeetUpLocation = location;
          }, function (error) {
              // error
          }).finally(function () {
              console.log($scope.meetup)
              Meetups.createRequest($scope.meetup).then(function (message) {
                  $scope.result = true;
                  $scope.message = message
              }, function (error) {
                  $scope.result = false;
                  $scope.message = error
              })
          });
      }

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }

      $scope.setFoodLocation = function (location) {
          //$scope.selectedFoodLocation = location;
          $scope.meetup.HostType = location;
      }

  }
]);