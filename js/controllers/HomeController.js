angular.module('hotelsDemo')

  .controller('HomeController', function($scope, $rootScope, $translate, HotelsFactory) {

    let currentLang = $translate.proposedLanguage() || $translate.use();

    HotelsFactory.getHotels(currentLang);

    // we suscribe to this event in order to check if angular change the language
    // in that case we will update the data displayed in this view
    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      
      let currentLang = data.language;

      HotelsFactory.getHotels(currentLang);
    
    });

  });