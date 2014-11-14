foodiesApp.controller('ChatController', ['Auth', '$scope',
  function (Auth, $scope) {

      $scope.messages = "";

      var chatHub = $.connection.userRequestChatHub;

      chatHub.client.onReceivedMessage = function (message) {
          $scope.messages += message;
          $scope.messages += '\n';
      };

      $.connection.hub.start().done(function () {
          chatHub.server.connect($scope.fromUserId);

          console.log('Client connected to chat server!');
      });

      $scope.sendNewMessage = function (message) {
          chatHub.server.sendMessage($scope.toUserId, $scope.newMessage);
      }
  }
]);