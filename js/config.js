angular.module('hotelsDemo')

  .config(function ($translateProvider) {
    $translateProvider
    
      // angular-translate will concatenate our code as {{prefix}}{{langKey}}{{suffix}}
      // ex: /resources/translations/es.json
      .useStaticFilesLoader({
        prefix: '/resources/translations/',
        suffix: '.json'
      })

      .preferredLanguage('es')
      
      .useMissingTranslationHandlerLog();

  })

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })

      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'
      });

  });