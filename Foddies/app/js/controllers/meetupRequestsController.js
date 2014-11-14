foodiesApp.controller('MeetupRequestsController', ['Meetups', 'SignalR', 'Auth', '$scope', '$modalInstance', 'state',
  function (Meetups, SignalR, Auth, $scope, $modalInstance, state) {

      console.log(Auth.userId);
      $scope.meetup = state;
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
      };

      $scope.isChatEnabled = false;

      $scope.setAccepted = function (userRequest, accepted) {
          userRequest.Accepted = accepted;

          console.log(userRequest)
          console.log(accepted)
          console.log(state)
          console.log('----')

          Meetups.setAccepted(state.Id, userRequest.RequestingUser.Id, accepted).then(function () {
              // success
          }, function () {
              console.log('error :O')
          });
      }
  }
]);