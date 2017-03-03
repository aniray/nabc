(function () {
    'use strict';
    angular.module('app.footer')
        .directive('mainFooter', [function () {
            return {
                templateUrl: 'modules/footer/view/footer.html',
                controller: 'FooterController',
                scope: {},
                replace: true,
                restrict: 'E'
            };
        }])
})();