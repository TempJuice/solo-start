var app = angular.module('TipForecast App', []);

//Angular config
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'LoginController as uc',
    });
});//end of app.config
