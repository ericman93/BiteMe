foodiesApp.controller('MeetupInfoController', ['Meetups', '$scope', '$modalInstance', 'state',
  function (Meetups, $scope, $modalInstance, state) {
      $scope.meetup = state;

      $scope.askToJoin = function () {
          $scope.message = undefined;

          Meetups.askToJoin($scope.meetup.Id).then(function () {
              $scope.result = true;
              $scope.message = "ווהוו בקשתך מחכה לתגובה מהמארח"
          }, function (error) {
              $scope.result = false;
              $scope.message = error;
          })
      }

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }
  }
]);