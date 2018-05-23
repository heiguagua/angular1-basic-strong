(function() {
  /** Module */
  var dashboard = angular.module('app.dashboard', [])
  dashboard.$inject = ['$location'];
  /** Controller */
  dashboard.controller('dashboardController', [
    '$scope', 'dashboardService',
    function($scope, dashboardService) {
      var vm = this;
      dashboardService.getDashboardData().then(function(result){
        vm.data = result.data;
      })
    }
  ]);

  /** Service */
  dashboard.factory('dashboardService', ['$http', 'URL',
    function($http, URL) {
      return {
        getDashboardData: getDashboardData
      }

      function getDashboardData() {
        return $http.get(
          URL + '/dashboard/data'
        )
      }
    }]);

})();
