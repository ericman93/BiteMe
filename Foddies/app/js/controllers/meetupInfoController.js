foodiesApp.controller('MeetupInfoController', ['$scope', '$modalInstance', 'meetup',
  function ($scope, $modalInstance, meetup) {
      $scope.meetup = meetup;
  }
]);