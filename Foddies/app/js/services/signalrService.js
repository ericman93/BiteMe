foodiesApp.factory('SignalR', ['$http', '$q', function ($http, $q) {
    var signalrService = {}

    signalrService.init = function ($scope, Auth) {
        
        $scope.messages = "";

        var chatHub = $.connection.userRequestChatHub;

        /* Client Received Message */
        chatHub.client.onReceivedMessage = function (message) {

            $scope.messages += message;
            $scope.messages += '\n';

            console.log('Client received new message.');
            console.log(message);
            console.log('Total messages are:');
            console.log($scope.messages);

        };

        /* Finished Connection To Server */
        $.connection.hub.start().done(function () {

            chatHub.server.connect(Auth.userId);

            console.log('Finished connecting to server.');

        });

        /* Client sends message back to server */
        $scope.sendNewMessage = function () {

            console.log('Entered send message to server.');
            console.log('messages are:');
            console.log($scope.messages);
            console.log('message is:');
            console.log($scope.newMessage);

            chatHub.server.sendMessage(signalrService.chatToUserId, $scope.newMessage);

            console.log('Message was sent to server.');
            console.log($scope.newMessage);

        };

        $scope.changeChatEnabled = function () {
            signalrService.chatEnabledChangedCallback(!$scope.isChatEnabled);       
        };
    };


    signalrService.registerToChatEnabledChanged = function (callback) {
        signalrService.chatEnabledChangedCallback = callback;
    };

    return signalrService;
}]);