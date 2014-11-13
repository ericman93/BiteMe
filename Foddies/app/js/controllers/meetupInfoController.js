foodiesApp.controller('MeetupInfoController', ['Meetups', '$scope', '$modalInstance', 'meetup',
  function (Meetups, $scope, $modalInstance, meetup) {
      $scope.meetup = meetup;

      $scope.askToJoin = function () {
          $scope.message = undefined;

          Meetups.askToJoin($scope.meetup.Id).then(function () {
              console.log('joined :)')
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