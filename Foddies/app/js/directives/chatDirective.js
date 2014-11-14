foodiesApp.directive('chat', function () {
    return {
        restrict: 'A',
        scope: true,
        controller: function (SignalR, Auth, $scope) {

            console.log('Entering ChatDirective controller.');

            SignalR.init($scope, Auth);

            console.log('Exiting ChatDirective controller.');

        },
        templateUrl: 'partials/chat.html'
    };
});