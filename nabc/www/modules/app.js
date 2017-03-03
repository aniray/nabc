(function () {
    'use strict';
    angular.module(
        'app', [
            'ngRoute',
            'ngAnimate',
            'ngResource',
            'app.home',
            'app.footer'
        ]
        ).config([
            '$routeProvider', '$httpProvider', '$qProvider',
            function ($routeProvider, $httpProvider, $qProvider) {
                if (!$httpProvider.defaults.headers.get) {
                    $httpProvider.defaults.headers.get = {};
                }
                $qProvider.errorOnUnhandledRejections(false);
                $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
                $routeProvider
                    .when('/', {
                        templateUrl: 'modules/home/view/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    })
                    .otherwise({
                        redirectTo: '/'
                    })
            }
        ])

})();