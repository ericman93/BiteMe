foodiesApp.controller('MeetupInfoController', ['Meetups', '$scope', '$modalInstance', 'meetup',
  function (Meetups, $scope, $modalInstance, meetup) {
      $scope.meetup = meetup;

      $scope.askToJoin = function (meetup) {
          Meetups.askToJoin(meetup.Id).then(function () {
              console.log('joined :)')
          }, function (error) {
              alert(error)
          })
      }

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }
  }
]);