foodiesApp.controller('MeetupRequestsController', ['SignalR', 'Auth', '$scope', '$modalInstance', 'state',
  function (SignalR, Auth, $scope, $modalInstance, state) {

      console.log(Auth.userId);
      $scope.meetup = state;
      console.log("lian meet up:");
      console.log(state);
      $scope.requests = state.UserRequests

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }


      $scope.startChat = function (toUserId) {

          console.log("startChat");
          console.log(toUserId);

          $scope.isChatEnabled = !$scope.isChatEnabled;

          $scope.chatToUserId = toUserId;

          SignalR.chatToUserId = toUserId;

          SignalR.registerToChatEnabledChanged(function (isChatEnabled) {
              console.log("parent chat enabled changed");
              $scope.isChatEnabled = isChatEnabled;
          });
      };

      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;
      }

      $scope.isChatEnabled = false;

      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;
      }
  }
]);