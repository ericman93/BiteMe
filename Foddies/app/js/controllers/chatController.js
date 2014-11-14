foodiesApp.controller('ChatController', ['Auth', '$scope',
  function (Auth, $scope) {

      $scope.messages = "asdfasfd";

      var chatHub = $.connection.userRequestChatHub;

      chatHub.client.onReceivedMessage = function (message) {
          console.log(message);
          $scope.messages += message;
          $scope.messages += '\n';
      };

      $.connection.hub.start().done(function () {
          chatHub.server.connect($scope.fromUserId);

          console.log('Client connected to chat server!');
      });

      $scope.sendNewMessage = function () {
          console.log($scope.newMessage);
          chatHub.server.sendMessage($scope.toUserId, $scope.newMessage);
      }
  }
]);