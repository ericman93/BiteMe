foodiesApp.controller('MeetupController', ['Meetups', '$scope',
  function (Meetups, $scope) {
      var israel = {
          Latitude: 31.850033,
          Longitude: 34.6500523
      }
      $scope.filter = {
          vegi: false,
          kosher: false
      };
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
          return $scope.filter.vegi == false ||
                 ($scope.filter.vegi == true && request.IsVegi == true);
      };

      $scope.filterKosher = function (request) {
          return $scope.filter.kosher == false ||
                 ($scope.filter.kosher == true && request.IsKosher == true);
      };
  }
]);