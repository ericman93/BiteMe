foodiesApp.controller('MeetupController', ['Meetups','$scope',
  function (Meetups, $scope) {
      var israel = {Location: 
          {
              Latitude: 31.850033,
              Longitude: 34.6500523
          }
      }

      $scope.selectedRequest = undefined;

      $scope.requetsts = Meetups.getMeetups().then(function (data) {
          $scope.requetsts = data;
      }, function (data) {

      });;

      $scope.selectMeetup = function (meetup) {
          $scope.selectedRequest = meetup;
      }

      $scope.getLocation = function () {
          if ($scope.selectedRequest == undefined) {
              return israel;
          }
          else {
              return $scope.selectedRequest.Location;
          }
      }

      $scope.filterVegi = function (request) {

      }
  }
]);