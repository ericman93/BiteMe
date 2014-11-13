foodiesApp.directive('chat', function () {
    return {
        restrict: 'AEC',
        replace: true,
        controller: function (Auth, $scope) {
            var chatHub = $.connection.userRequestChatHub;

            chatHub.client.onMessageReceived = function (message) {
                $scope.messageList.push(message);
            };

            $.connection.hub.start().done(function () {
                console.log('chat started!');
            });

            $scope.name = "eric"

            $scope.messageList = []

            $scope.sendMessage = function (toUserId, message) {
                chatHub.server.sendMessage(1, 2, 'sdfg');
            }
        },
        scope: {

        },
        templateUrl: 'partials/chat.html'
    };
});