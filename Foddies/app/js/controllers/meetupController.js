foodiesApp.controller('MeetupController', ['Meetups', '$scope', '$modal',
  function (Meetups, $scope, $modal) {
      var israel = {
          Latitude: 31.850033,
          Longitude: 34.6500523
      }
      var currnetMarker = undefined;

      $scope.filter = {
          vegi: false,
          kosher: false
      };

      $scope.requetsts = Meetups.getMeetups().then(function (data) {
          console.log(data)
          $scope.requetsts = data;
      }, function (error) {
          $scope.requetsts = []
          alert(error)
      });

      $scope.selectedRequest = undefined;

      $scope.selectMeetup = function (meetup) {
          $scope.selectedRequest = meetup;

          if (currnetMarker != undefined) {
              currnetMarker.setMap(undefined);
          }

          currnetMarker = new google.maps.Marker({
              position: new google.maps.LatLng(meetup.MeetUpLocation.Latitude, meetup.MeetUpLocation.Longitude),
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

      $scope.getLocation = function () {
          if ($scope.selectedRequest == undefined) {
              return israel;
          }
          else {
              return $scope.selectedRequest.MeetUpLocation;
          }
      }

      $scope.filterVegi = function (request) {
          return $scope.filter.vegi == false ||
                 ($scope.filter.vegi == true && request.IsVegeterian == true);
      };

      $scope.filterKosher = function (request) {
          return $scope.filter.kosher == false ||
                 ($scope.filter.kosher == true && request.IsKosher == true);
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