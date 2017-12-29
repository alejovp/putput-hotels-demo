angular.module('hotelsDemo')

  .factory('HotelsFactory', function($http, $rootScope) {
      
      function getHotels(lang) {

        const url = '../resources/data/hotels-' + lang + '.json';
        
        return $http.get(url)
          .then(({ data }) => $rootScope.hotels = data);
      
      }

      function getHotelDetail(lang, id) {
        
        const url = '../resources/data/hotels-' + lang + '.json';
        
        return $http.get(url)
          .then(({ data }) => data.filter(hotel => hotel.id == id))
          .then(hotel => hotel[0]);
      }

      return { getHotels, getHotelDetail };
  
  });