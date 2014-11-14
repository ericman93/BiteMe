foodiesApp.controller('MeetupRequestsController', ['Meetups', '$scope', '$modalInstance', 'state',
  function (Meetups, $scope, $modalInstance, state) {

      $scope.meetup = state;
      console.log(state)
      $scope.requests = state.UserRequests

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }


      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;
      }
  }
  ]);