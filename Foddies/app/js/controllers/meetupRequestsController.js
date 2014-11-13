foodiesApp.controller('MeetupRequestsController', ['Meetups', '$scope', '$modal',
  function (Meetups, $scope, $modal) {

      $scope.requests = Meetups.getMeetups().then(function (data) {
          console.log(data)
          $scope.requetsts = data;
      }, function (error) {
          $scope.requetsts = []
          alert(error)
      });

      $scope.close = function () {
          $modalInstance.dismiss('cancel');

      $scope.setAccepted = function (request, accepted) {
          request.Accepted = accepted;
      }
  }

]);