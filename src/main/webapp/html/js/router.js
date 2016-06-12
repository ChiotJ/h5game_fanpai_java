'use strict'
var app = angular.module('app');


app.run(['$rootScope', '$state', '$stateParams', '$log', function ($rootScope, $state, $stateParams, $log) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    NProgress.configure();

    $rootScope.$on('$stateChangeStart', function () {
        NProgress.start();
    });

}]);
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls/home.html',
            controller: 'homeCtrl',
            controllerAs: 'home'
        })
        .state('game', {
            url: '/game',
            templateUrl: 'tpls/game.html',
            controller: 'gameCtrl',
            controllerAs: 'game'
        })

}]);
