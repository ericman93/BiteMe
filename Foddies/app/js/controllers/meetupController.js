foodiesApp.controller('MeetupController', ['StaticValues', 'Meetups', '$scope', '$modal',
  function (StaticValues, Meetups, $scope, $modal) {
      $scope.israel = {
          Latitude: 32.59075,
          Longitude: 34.971392
      }
      var currnetMarker = undefined;
      var currnetViewType = 0;

      $scope.filter = {
          vegi: false,
          kosher: false,
          foodType: undefined,
          location: undefined
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

      var geocoder = new google.maps.Geocoder();;
      function codeAddress() {
          var address = " חדרה רחוב העבודה 13";
          geocoder.geocode({ 'address': address }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                  console.log(results[0].geometry.location)
              } else {
                  alert('Geocode was not successful for the following reason: ' + status);
              }
          });
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
              if (currnetViewType == 2) {
                  showModal(meetup, 'meetupRequests', 'MeetupRequestsController')
              } else {
                  showModal(meetup, 'meetupInfo', 'MeetupInfoController');
              }
          });
      }

      $scope.createRequest = function () {
          showModal(undefined, 'newRequest', 'NewRequestController')
      }

      $scope.changeView = function (viewType) {
          currnetViewType = viewType;
          switch (viewType) {
              case (0):
                  $scope.requetsts = Meetups.getMeetups().then(function (data) {
                      $scope.requetsts = data;
                  }, function (error) {
                      $scope.requetsts = []
                      alert(error)
                  });
                  break;
              case (1):
                  $scope.requetsts = Meetups.getMyReuqestedMeetups().then(function (data) {
                      $scope.requetsts = data;
                  }, function (error) {
                      $scope.requetsts = []
                      alert(error)
                  });
                  break;
              case (2):
                  $scope.requetsts = Meetups.getMeetupsHostByMe().then(function (data) {
                      $scope.requetsts = data;
                  }, function (error) {
                      $scope.requetsts = []
                      alert(error)
                  });
                  break;
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

      $scope.filterFoodType = function (request) {
          return $scope.filter.foodType == undefined ||
                 ($scope.filter.foodType == request.FoodType);
      };

      $scope.filterLocation = function (request) {
          return $scope.filter.location == undefined ||
                 (request.Address.indexOf($scope.filter.location) != -1);
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