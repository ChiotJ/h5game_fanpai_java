'use strict';
angular.module("app")
    .directive('imgButton', ['$log', function ($log) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                new Image().src = attrs.src.replace("1", "2");

                element.on('touchstart', function (e) {
                    element.attr('src', attrs.src.replace("1", "2"));
                });

                element.on('touchend', function (e) {
                    element.attr('src', attrs.src.replace("2", "1"));
                })
            }
        };
    }])
    .directive('bgmAudio', ['$log', function ($log) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                new Image().src = attrs.src.replace("Open", "Close");

                var audio = document.getElementById('bgm');
                element.on('click', function (e) {
                    if (audio.paused) {
                        audio.play();
                        element.attr('src', 'imgs/musicOpen.png');
                    } else {
                        audio.pause();
                        element.attr('src', 'imgs/musicClose.png');
                    }

                });

            }
        };
    }])
    .directive('startGame', ['$log', '$timeout', 'gameService', function ($log, $timeout, gameService) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                new Image().src = 'imgs/game/restart1.png';
                new Image().src = 'imgs/game/restart2.png';
                new Image().src = attrs.src.replace("1", "2");

                element.on('touchstart', function (e) {
                    element.attr('src', element.attr('src').replace("1", "2"));
                });

                element.on('touchend', function (e) {
                    element.attr('src', element.attr('src').replace("2", "1"));
                });

                element.on('click', function (e) {
                    var status = element.attr('data-status');
                    if (status == "start") {
                        element.attr('src', 'imgs/game/restart1.png');
                        gameService.remember();
                        element.attr('data-status', 'game');
                    }
                    if (status == "game") {
                        element.attr('src', 'imgs/game/start1.png');
                        gameService.reInit();
                        $timeout(function () {
                            scope.reInit();
                        }, 500);

                        element.attr('data-status', 'start');
                    }

                });
            }
        };
    }])
    .directive('gameCard', ['$log', '$timeout', 'gameService', function ($log, $timeout, gameService) {
        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                element.on('click', function (e) {
                    if ($(".card-flipped").size() > 1 || !gameService.isStart()||element.hasClass('card-removed')) {
                        return;
                    }
                    element.addClass("card-flipped");
                    if ($(".card-flipped").size() == 2) {
                        $timeout(function () {
                            gameService.checkPattern();
                        }, 400);
                    }
                });
            }
        };
    }]);