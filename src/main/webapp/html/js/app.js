'use strict'
var app = angular.module('app', [
    'ngAnimate',
    'ui.router'
]);

app.config(['$logProvider', function ($logProvider) {
    $logProvider.debugEnabled(true);
}]);


app.run(['$window', '$rootScope', 'pageInfo', 'gameService', function ($window, $rootScope, pageInfo, gameService) {
    function autoCss() {
        pageInfo.init();
        $rootScope.$broadcast('autoCss');
        $rootScope.$apply();
    }

    $window.onresize = autoCss;
    $window.onload = autoCss;

    $('body').bind('touchstart', function (e) {
        document.getElementById('bgm').play();
        $('body').unbind('touchstart')
    });


}]);