'use strict';

(function() {

  angular.module('app', [
    'ngAnimate',
    'ui.router',
    'common.http',
    'app.dashboard'
  ])
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    /** UI-Router Config */
    $urlRouterProvider.otherwise('/dashboard');
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard/view.html',
        controller: 'dashboardController',
        controllerAs: 'dashboard',
      })

      /** HTTP Interceptor */
      $httpProvider.interceptors.push(interceptor);
      interceptor.$inject = ['$q', '$location'];
      function interceptor($q, $location) {
        return {
          'request': function(config) {
            return config;

          },
          'response': function(response) {
            $q.when(response, function(result){

            });
            return response;
          }
        };
      };
  };

})();
