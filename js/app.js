angular.module('hotelsDemo', ['ngRoute', 'pascalprecht.translate'])

  .controller('LanguageSwitchController', function($scope, $rootScope, $translate) {
      
    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    }

    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      let language = data.language;
      $rootScope.lang = language;
    })

  });
