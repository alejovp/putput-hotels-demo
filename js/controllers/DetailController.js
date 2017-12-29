angular.module('hotelsDemo')

  .controller('DetailController', function($scope, $rootScope, $translate, HotelsFactory, $routeParams) {

    let currentLang = $translate.proposedLanguage() || $translate.use();

    HotelsFactory.getHotelDetail(currentLang, $routeParams.id)
      .then(function (response) {
        
        $scope.hotel = response

      })

    // we suscribe to this event in order to check if angular change the language
    // in that case we will update the data displayed in this view
    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      currentLang = data.language

      HotelsFactory.getHotelDetail(currentLang, $routeParams.id)
      .then(function (response) {
        
        $scope.hotel = response

      })

    });
    

  });