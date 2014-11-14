foodiesApp.controller('MeetupController', ['StaticValues', 'Meetups', '$scope', '$modal',
  function (StaticValues, Meetups, $scope, $modal) {
      $scope.israel = {
          Latitude: 32.59075,
          Longitude: 34.971392
      }
      var currnetMarker = undefined;

      $scope.filter = {
          vegi: false,
          kosher: false,
          foodType: undefined
      };
      $scope.foodTypes = StaticValues.foodTypes
      $scope.foodTypes.unshift(undefined)

      $scope.selectedRequest = undefined;
      $scope.requetsts = Meetups.getMeetups().then(function (data) {
          console.log(data)
          $scope.requetsts = data;
      }, function (error) {
          $scope.requetsts = []
          alert(error)
      });

      $scope.showRequest = function () {
          showModal($scope.requetsts[0], 'meetupRequests', 'MeetupRequestsController')
      }

      $scope.selectMeetup = function (meetup) {
          //$scope.selectedRequest = meetup;
          var point = new google.maps.LatLng(meetup.MeetUpLocation.Latitude, meetup.MeetUpLocation.Longitude);
          $scope.map.panTo(point);

          if (currnetMarker != undefined) {
              currnetMarker.setMap(undefined);
          }

          currnetMarker = new google.maps.Marker({
              position: point,
              map: $scope.map,
              draggable: false,
              animation: google.maps.Animation.DROP,
          });

          google.maps.event.addListener(currnetMarker, 'click', function () {
              showModal(meetup, 'meetupInfo', 'MeetupInfoController');
          });
      }

      $scope.createRequest = function () {
          showModal(undefined, 'newRequest', 'NewRequestController')
      }

      $scope.filterVegi = function (request) {
          return $scope.filter.vegi == false ||
                 ($scope.filter.vegi == true && request.IsVegeterian == true);
      };

      $scope.filterKosher = function (request) {
          return $scope.filter.kosher == false ||
                 ($scope.filter.kosher == true && request.IsKosher == true);
      };

      $scope.filterFoodType = function (request) {
          return $scope.filter.foodType == undefined ||
                 ($scope.filter.foodType == request.FoodType);
      };

      function showModal(state, modalHtml, controllerName) {
          var modalInstance = $modal.open({
              templateUrl: 'partials/' + modalHtml + '.html',
              controller: controllerName,
              size: 'lg',
              resolve: {
                  state: function () {
                      return state;
                  }
              }
          });

          modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
          }, function () {
          });
      }
  }
]);