foodiesApp.controller('NewRequestController', ['Meetups', '$scope', '$modalInstance', 'state',
  function (Meetups, $scope, $modalInstance, state) {
      $scope.meetup = state;

      $scope.create = function () {
          $scope.result = true;
          $scope.message = "בוא למקדנולדס אם אתה גבר"
      }

      $scope.close = function () {
          $modalInstance.dismiss('cancel');
      }
  }
]);