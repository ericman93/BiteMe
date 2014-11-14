foodiesApp.controller('NewRequestController', ['StaticValues', 'Meetups', '$scope', '$modalInstance', 'state',
  function (StaticValues, Meetups, $scope, $modalInstance, state) {

      $scope.foodTypes = StaticValues.foodTypes
      $scope.resturants = StaticValues.resturants
      $scope.brances = StaticValues.brances

      $scope.meetup = {
          HostType: 0
      }

      $scope.create = function () {
          console.log($scope.meetup)

          Meetups.createRequest($scope.meetup).then(function (message) {
              $scope.result = true;
              $scope.message = message
          }, function (error) {
              $scope.result = false;
              $scope.message = error
          })
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