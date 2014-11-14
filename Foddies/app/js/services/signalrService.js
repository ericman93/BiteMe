foodiesApp.factory('SignalR', ['$http', '$q', function ($http, $q) {
    var signalrService = {}

    signalrService.init = function ($scope, Auth) {

        $scope.messages = "asd";

        var chatHub = $.connection.userRequestChatHub;

        console.log(chatHub);

        chatHub.client.onReceivedMessage = function (message) {
            console.log("onReceivedMessage");

            $scope.messages += message;
            $scope.messages += '\n';
        };

        $.connection.hub.start().done(function () {
            console.log("auth user id: " + Auth.userId);
            chatHub.server.connect(Auth.userId);

            console.log('Client connected to chat server!');
        });

        $scope.sendNewMessage = function (message) {
            console.log("sendNewMessage");
            console.log("this is sparta from chat to user id:");
            console.log(signalrService.chatToUserId);

            chatHub.server.sendMessage(signalrService.chatToUserId, $scope.newMessage);
        };
    }

    return signalrService;
}]);