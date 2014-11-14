foodiesApp.directive('chat', function () {
    return {
        restrict: 'A',
        scope: {
            to: '=',
        },
        controller: function (SignalR, Auth, $scope) {

            console.log("this is sparta from chat to user id:");
            console.log($scope.chatToUserId);

            SignalR.init($scope, Auth);

        },
        templateUrl: 'partials/chat.html'
    };
});