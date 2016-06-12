'use strict';
angular.module("app")
    .factory('pageInfo', [function () {
        return {
            width: $(window).width(),
            height: $(window).height(),
            rate: 1,
            init: function init() {
                var pageWidth = $(window).width(), pageHeight = $(window).height(), pageRate = 1;
                if (pageWidth < 640) {
                    pageWidth = 640;
                    pageHeight = 1008;
                    pageRate = 1;
                } else {
                    pageRate = pageWidth / 640;
                    if (pageWidth > pageHeight) {
                        pageHeight = pageRate * 1008;
                    } else {
                        if (pageHeight < pageRate * 1008) {
                            pageHeight = pageRate * 1008;
                        }
                    }
                }
                this.width = pageWidth;
                this.height = pageHeight;
                this.rate = pageRate;
            }
        }
    }])
    .factory('gameService', ['$timeout', '$interval', '$rootScope', '$http', '$log', function ($timeout, $interval, $rootScope, $http, $log) {
        var gameTime = 0, rememberTime = 10000, startTime = 0, isOver = false, isStart = false;

        function getStartTime() {
            $http.get('/game/getTime').success(function (data) {
                startTime = data.result;
            })
        }

        function shuffle() {
            return 0.5 - Math.random();
        }

        function isMatchPattern() {
            var cards = $(".card-flipped");
            var pattern = $(cards[0]).attr("data-pattern");
            var anotherpattern = $(cards[1]).attr("data-pattern");
            return (pattern == anotherpattern);
        }

        function gameOver() {
            isOver = true;
            isStart = false;
            $rootScope.$broadcast('isShowBlackMate', true);
            $rootScope.$broadcast('updateGameTime', (gameTime / 1000).toFixed(1));
            if (gameTime < 5000) {
                $("#finish_cheat").css('opacity', 1).css('z-index', 15);
            } else {
                $("#finish").css('opacity', 1).css('z-index', 15);
            }
        }

        function getIsOver() {
            return isOver;
        }

        function getIsStart() {
            return isStart;
        }

        return {
            isStart: getIsStart,
            isOver: getIsOver,
            rememberInterval: null,
            gameTimeInterval: null,
            country: [
                'England', 'Italy', 'Hungary', 'Spain', 'Ukraine', 'Welsh',
                'Turkey', 'Slovakia', 'Switzerland', 'Sweden', 'Portugal', 'Romania',
                'Croatia', 'France', 'Russia', 'Germany', 'Poland', 'Iceland',
                'Belgium', 'NorthernIreland', 'Austria', 'Ireland', 'Albania', 'Czech'
            ],
            cards: [],
            init: function init() {
                getStartTime();
                this.country.sort(shuffle);
                var c = this.country.slice(0, 12);
                c = c.concat(c);
                var i = 0;
                while (i < 3) {
                    c = c.sort(shuffle);
                    i++;
                }
                this.cards = c;
            },
            reInit: function () {
                $(".card-flipped").removeClass('card-flipped');
                $(".card-removed").removeClass('card-removed');
                this.init();
                $interval.cancel(this.rememberInterval);
                $interval.cancel(this.gameTimeInterval);
                rememberTime = 10000;
                gameTime = 0;
                isStart = false;
                isOver = false;
                $('#rememberTime').css('opacity', '1').find('.rememberTimeNum').html(rememberTime / 1000);
                $('#gameRecordTime').css('opacity', '0').find('.rememberTimeNum').html(gameTime.toFixed(1));
            },
            remember: function () {
                $('#cards').addClass('card-flipped');
                var self = this;

                this.rememberInterval = $interval(function () {
                    if (rememberTime > 0) {
                        rememberTime -= 1000;
                        $('#rememberTime').find('.rememberTimeNum').html(rememberTime / 1000);
                    } else {
                        $('#cards').removeClass('card-flipped');
                        isStart = true;
                        $('#rememberTime').css('opacity', '0');
                        $('#gameRecordTime').css('opacity', '1');
                        $interval.cancel(self.rememberInterval);

                        self.gameTimeInterval = $interval(function () {
                            gameTime += 100;
                            var str = gameTime / 1000;
                            $('#gameRecordTime').find('.rememberTimeNum').html(str.toFixed(1));
                        }, 100);
                    }
                }, 1000);
            },
            checkPattern: function () {
                if (isMatchPattern()) {
                    $(".card-flipped").addClass("card-removed").removeClass("card-flipped");
                    if ($(".card-removed").length == this.cards.length) {
                        isStart = false;
                        $interval.cancel(this.gameTimeInterval);
                        this.gameTimeInterval = null;
                        gameOver();
                    }
                } else {
                    $(".card-flipped").addClass("card-flipped-error");
                    setTimeout(function () {
                        $(".card-flipped").removeClass("card-flipped").removeClass("card-flipped-error");
                    }, 700);
                }
            },
            submit: function (username, phone) {
                return $http.post('/game/save', null, {
                    params: {
                        name: username,
                        phone: phone,
                        time: gameTime
                    },
                    headers: {
                        "start-time": startTime
                    }
                })
            },
            getRankingList: function () {
                return $http.get('/game/getGameRecord', {
                    params: {
                        size: 30
                    }
                })
            }
        }
    }]);