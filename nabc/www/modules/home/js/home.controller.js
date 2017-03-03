(function () {
    'use strict';
    /*var controller = {};
    controller.HomeController = [
        '$scope', 'cordova',
        function ($scope, cordova) {
            cordova.ready.then(function () {
                alert('Cordova is ready');
            });

            $scope.awesomeThings = [
              'HTML5 Boilerplate',
              'AngularJS',
              'Karma'
            ];
        }
    ];
    angular.module('app.home').controller(controller);*/
    angular.module('app.home', [])
        .controller('HomeController', ['$scope','cordova', function ($scope, cordova) {
            $scope.awesomeThings = [
                      'HTML5 Boilerplate',
                      'AngularJS',
                      'Karma'
            ];
}])
})();