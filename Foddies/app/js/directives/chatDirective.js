foodiesApp.directive('chat', function () {
    return {
        restrict: 'A',
        scope: true,
        controller: function (SignalR, Auth, $scope) {

            console.log("this is sparta from chat to user id:");
            console.log($scope.chatToUserId);

            SignalR.init($scope, Auth);

            console.log('hello from parent');
            console.log($scope.isChatEnabled);
            console.log($scope.meetup);

        },
        templateUrl: 'partials/chat.html'
    };
});