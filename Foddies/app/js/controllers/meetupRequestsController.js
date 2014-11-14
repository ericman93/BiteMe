foodiesApp.controller('MeetupRequestsController', ['Auth', '$scope', '$modalInstance', 'state',
  function (Auth, $scope, $modalInstance, state) {
      console.log(Auth.userId);
      $scope.meetup = state;
      console.log(state)
      $scope.requests = state.UserRequests

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }


      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;
      }

      $scope.isChatEnabled = false;

      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;
      }
  }
]);