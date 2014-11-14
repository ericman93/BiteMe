foodiesApp.factory('SignalR', ['$http', '$q', function ($http, $q) {
    var signalrService = {}

    signalrService.init = function ($scope, Auth) {
        
        $scope.messages = "";

        var chatHub = $.connection.userRequestChatHub;

        console.log(chatHub);

        chatHub.client.onReceivedMessage = function (message) {
            console.log("onReceivedMessage");
            console.log($scope.messages);
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

        $scope.changeChatEnabled = function () {
            console.log("change chat enabled callback");
            signalrService.chatEnabledChangedCallback(!$scope.isChatEnabled);
        };
    };


    signalrService.registerToChatEnabledChanged = function (callback) {
        console.log("register to callback");
        signalrService.chatEnabledChangedCallback = callback;
    };

    return signalrService;
}]);