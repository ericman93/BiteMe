foodiesApp.controller('MeetupController', ['Meetups','$scope',
  function (Meetups, $scope) {
      $scope.selectedLocation = {
          lat: 31.850033,
          lon: 34.6500523
      };

      $scope.changeLocation = function(){
          $scope.selectedLocation = {
              lat: 30.850033,
              lon: -60.6500523
          };
      }
  }
]);