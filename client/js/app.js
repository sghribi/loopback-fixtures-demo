angular.module('app', ['ui.router', 'lbServices'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
  $urlRouterProvider.otherwise('/');
});
