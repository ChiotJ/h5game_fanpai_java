'use strict';
angular.module("app")
    .controller('ApplicationController', ['$scope', '$log', 'pageInfo', function ($scope, $log, pageInfo) {

        function autoCss() {
            $scope.page = {
                width: pageInfo.width + "px",
                height: pageInfo.height + "px"
            };

            $scope.background_img = {
                width: pageInfo.width + "px"
            };

            $scope.musicIO = {
                width: 49 * pageInfo.rate + "px",
                height: 50 * pageInfo.rate + "px",
                top: 50 * pageInfo.rate + "px",
                right: 20 * pageInfo.rate + "px"
            };
            $scope.blackMate = {
                width: pageInfo.width + "px",
                height: pageInfo.height + "px",
            };
        }

        autoCss();
        $scope.$on('autoCss', function () {
            autoCss();
        });

        $scope.isShowBlackMate = false;

        $scope.$on('isShowBlackMate', function (e, flag) {
            $log.debug(flag)
            $scope.isShowBlackMate = flag;
        })
    }])
    .controller('homeCtrl', ['$scope', '$timeout', '$state', '$log', 'pageInfo', 'gameService', function ($scope, $timeout, $state, $log, pageInfo, gameService) {
        $scope.pageClass = 'pageHome';

        function autoCss() {
            $scope.main = {
                height: pageInfo.height
            };

            $scope.startGame = {
                width: 271 * pageInfo.rate + "px",
                height: 91 * pageInfo.rate + "px",
                margin: 697 * pageInfo.rate + "px auto 0"
            };

            $scope.rules = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                marginTop: 12 * pageInfo.rate + "px",
                marginLeft: 36 * pageInfo.rate + "px"
            };

            $scope.prize = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                marginTop: 12 * pageInfo.rate + "px",
                marginLeft: 15 * pageInfo.rate + "px"
            };

            $scope.ranking = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                marginTop: 12 * pageInfo.rate + "px",
                marginLeft: 15 * pageInfo.rate + "px"
            };

            $scope.notice = {
                width: 360 * pageInfo.rate + "px",
                height: 80 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px",
                fontSize: 24 * pageInfo.rate + "px",
                margin: 105 * pageInfo.rate + "px auto 0"
            };


            $scope.detail = {
                width: pageInfo.width + "px",
                height: 720 * pageInfo.rate + "px",
                top: 190 * pageInfo.rate + "px"
            };

            $scope.prizeDetail = {
                width: pageInfo.width + "px",
                height: 713 * pageInfo.rate + "px"
            };

            $scope.prizeClose = {
                width: 51 * pageInfo.rate + "px",
                height: 51 * pageInfo.rate + "px",
                top: 30 * pageInfo.rate + "px",
                right: 18 * pageInfo.rate + "px"

            };

            $scope.rulesDetail = {
                width: 618 * pageInfo.rate + "px",
                height: 696 * pageInfo.rate + "px",
                left: 11 * pageInfo.rate + "px"
            };

            $scope.rulesClose = {
                width: 54 * pageInfo.rate + "px",
                height: 60 * pageInfo.rate + "px",
                right: 13 * pageInfo.rate + "px",
                top: 21 * pageInfo.rate + "px"
            };

            $scope.rankingDetail = {
                width: 618 * pageInfo.rate + "px",
                height: 696 * pageInfo.rate + "px",
                left: 11 * pageInfo.rate + "px"
            };

            $scope.rankingClose = {
                width: 51 * pageInfo.rate + "px",
                height: 51 * pageInfo.rate + "px",
                right: 17 * pageInfo.rate + "px",
                top: 31 * pageInfo.rate + "px"
            };

            $scope.rulesContent = {
                width: 580 * pageInfo.rate + "px",
                height: 560 * pageInfo.rate + "px",
                left: 40 * pageInfo.rate + "px",
                top: 110 * pageInfo.rate + "px"
            };

            $scope.rulesContentImg = {
                width: 455 * pageInfo.rate + "px"
            };


            $scope.rankingContent = {
                width: 480 * pageInfo.rate + "px",
                height: 560 * pageInfo.rate + "px",
                left: 90 * pageInfo.rate + "px",
                top: 110 * pageInfo.rate + "px",
                fontSize: 24 * pageInfo.rate + "px"
            };


            $scope.rankingContent_index = {
                width: 50 * pageInfo.rate + "px",
                height: 40 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px"
            };


            $scope.rankingContent_name = {
                width: 90 * pageInfo.rate + "px",
                height: 40 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px",
                marginLeft: 15 * pageInfo.rate + "px",
                textAlign: 'left'
            };

            $scope.rankingContent_time = {
                width: 135 * pageInfo.rate + "px",
                height: 40 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px"
            };

            $scope.rankingContent_phone = {
                width: 190 * pageInfo.rate + "px",
                height: 40 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px"
            };


            if (rules_iscroll) {
                rules_iscroll.refresh();
            } else {
                rules_iscroll = new IScroll('#rulesContent', {
                    snap: true,
                    scrollbars: true
                });
            }

            if (ranking_iscroll) {
                ranking_iscroll.refresh();
            } else {
                ranking_iscroll = new IScroll('#rankingContent', {
                    snap: true,
                    scrollbars: true
                });
            }


            $timeout(function () {
                $('.detail').show();
            })
        }

        var rules_iscroll, ranking_iscroll;


        autoCss();
        $scope.$on('autoCss', function () {
            autoCss();
        });


        $scope.prizeOpenClick = function () {
            $('#prizeDetail').css('opacity', '1').css('z-index', '2')
        };

        $scope.prizeCloseClick = function () {
            var $prizeDetail = $('#prizeDetail');
            $prizeDetail.css('opacity', '0');
            $timeout(function () {
                $prizeDetail.css('z-index', '')
            }, 500);
        };

        $scope.rulesOpenClick = function () {
            rules_iscroll.refresh();
            $('#rulesDetail').css('opacity', '1').css('z-index', '2')
        };

        $scope.rulesCloseClick = function () {
            var $rulesDetail = $('#rulesDetail');
            $rulesDetail.css('opacity', '0');
            $timeout(function () {
                $rulesDetail.css('z-index', '')
            }, 500);
        };

        $scope.rankingOpenClick = function () {
            ranking_iscroll.refresh();
            $('#rankingDetail').css('opacity', '1').css('z-index', '2')
        };

        $scope.rankingCloseClick = function () {
            var $rankingDetail = $('#rankingDetail');
            $rankingDetail.css('opacity', '0');
            $timeout(function () {
                $rankingDetail.css('z-index', '')
            }, 500);
        };

        $scope.startGameClick = function () {
            $state.go('game');
        };


        gameService.getRankingList().success(function (data) {
            if (data.success)
                $scope.rankingList = data.result;
        });


        NProgress.done();
    }])
    .controller('gameCtrl', ['$scope', '$state', '$timeout', '$log', 'pageInfo', 'gameService', function ($scope, $state, $timeout, $log, pageInfo, gameService) {
        $scope.pageClass = 'pageGame';
        function autoCss() {
            $scope.game_bg = {
                width: 600 * pageInfo.rate + "px",
                height: 600 * pageInfo.rate + "px",
                top: 230 * pageInfo.rate + "px",
                left: 20 * pageInfo.rate + "px"
            };

            $scope.gameDiv = {
                width: 580 * pageInfo.rate + "px",
                height: 560 * pageInfo.rate + "px",
                top: 242 * pageInfo.rate + "px",
                left: 30 * pageInfo.rate + "px"
            };

            $scope.feiren = {
                width: 155 * pageInfo.rate + "px",
                height: 132 * pageInfo.rate + "px",
                top: 822 * pageInfo.rate + "px",
                left: 120 * pageInfo.rate + "px"
            };

            $scope.home = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                top: 913 * pageInfo.rate + "px",
                left: 130 * pageInfo.rate + "px"
            };

            $scope.start = {
                width: 179 * pageInfo.rate + "px",
                height: 74 * pageInfo.rate + "px",
                top: 913 * pageInfo.rate + "px",
                left: 338 * pageInfo.rate + "px"
            };

            $scope.card = {
                width: 126 * pageInfo.rate + "px",
                height: 66 * pageInfo.rate + "px",
                marginTop: 20 * pageInfo.rate + "px",
                marginLeft: 12 * pageInfo.rate + "px"
            };

            $scope.face = {
                width: 126 * pageInfo.rate + "px",
                height: 66 * pageInfo.rate + "px"
            };

            $scope.rememberTime = {
                width: 580 * pageInfo.rate + "px",
                height: 28 * pageInfo.rate + "px",
                top: 802 * pageInfo.rate + "px",
                left: 30 * pageInfo.rate + "px"
            };

            $scope.rememberTimeNum = {
                width: 70 * pageInfo.rate + "px",
                height: 20 * pageInfo.rate + "px",
                lineHeight: 20 * pageInfo.rate + "px",
                borderRadius: 10 * pageInfo.rate + "px",
                border: 1 * pageInfo.rate + "px solid #E98E10",
                fontSize: 14 * pageInfo.rate + "px",
                top: 2 * pageInfo.rate + "px",
                left: 10 * pageInfo.rate + "px"
            };


            $scope.gameRecordTime = {
                width: 580 * pageInfo.rate + "px",
                height: 28 * pageInfo.rate + "px",
                top: 802 * pageInfo.rate + "px",
                left: 30 * pageInfo.rate + "px"
            };


            $scope.gameRecordTimeStr = {
                width: 90 * pageInfo.rate + "px",
                height: 20 * pageInfo.rate + "px",
                lineHeight: 20 * pageInfo.rate + "px",
                borderRadius: 10 * pageInfo.rate + "px",
                border: 1 * pageInfo.rate + "px solid #E98E10",
                fontSize: 12 * pageInfo.rate + "px",
                top: 2 * pageInfo.rate + "px",
                left: 10 * pageInfo.rate + "px"
            };


            $scope.gameRecordTimeNum = {
                width: 120 * pageInfo.rate + "px",
                height: 20 * pageInfo.rate + "px",
                lineHeight: 20 * pageInfo.rate + "px",
                borderRadius: 10 * pageInfo.rate + "px",
                border: 1 * pageInfo.rate + "px solid #E98E10",
                fontSize: 14 * pageInfo.rate + "px",
                top: 2 * pageInfo.rate + "px",
                left: 110 * pageInfo.rate + "px",
                letterSpacing: 3 * pageInfo.rate + "px"
            };

            $scope.gameRecordTimeStrMiao = {
                width: 40 * pageInfo.rate + "px",
                height: 20 * pageInfo.rate + "px",
                lineHeight: 20 * pageInfo.rate + "px",
                borderRadius: 10 * pageInfo.rate + "px",
                border: 1 * pageInfo.rate + "px solid #E98E10",
                fontSize: 12 * pageInfo.rate + "px",
                top: 2 * pageInfo.rate + "px",
                left: 225 * pageInfo.rate + "px",
            };


            $scope.finish = {
                width: 477 * pageInfo.rate + "px",
                height: 768 * pageInfo.rate + "px",
                top: 25 * pageInfo.rate + "px",
                left: 82 * pageInfo.rate + "px"
            };


            $scope.finish_close = {
                width: 67 * pageInfo.rate + "px",
                height: 67 * pageInfo.rate + "px",
                top: 140 * pageInfo.rate + "px",
                right: -20 * pageInfo.rate + "px"
            };

            $scope.finish_main = {
                width: 448 * pageInfo.rate + "px",
                height: 576 * pageInfo.rate + "px",
                top: 176 * pageInfo.rate + "px",
                left: 14 * pageInfo.rate + "px"
            };

            $scope.finish_title = {
                width: 448 * pageInfo.rate + "px",
                height: 80 * pageInfo.rate + "px",
                lineHeight: 80 * pageInfo.rate + "px",
                fontSize: 60 * pageInfo.rate + "px",
                marginTop: 50 * pageInfo.rate + "px"
            };

            $scope.finish_time = {
                width: 448 * pageInfo.rate + "px",
                height: 45 * pageInfo.rate + "px",
                lineHeight: 45 * pageInfo.rate + "px",
                fontSize: 34 * pageInfo.rate + "px",
                marginTop: 40 * pageInfo.rate + "px",
                letterSpacing: 10 * pageInfo.rate + "px"
            };

            $scope.finish_input_div = {
                width: 400 * pageInfo.rate + "px",
                height: 60 * pageInfo.rate + "px",
                marginTop: 40 * pageInfo.rate + "px",
                marginLeft: 16 * pageInfo.rate + "px",
                border: 4 * pageInfo.rate + "px solid transparent"
            };

            $scope.finish_input = {
                width: 360 * pageInfo.rate + "px",
                height: 40 * pageInfo.rate + "px",
                lineHeight: 40 * pageInfo.rate + "px",
                fontSize: 20 * pageInfo.rate + "px",
                marginTop: 10 * pageInfo.rate + "px",
                marginLeft: 20 * pageInfo.rate + "px"
            };

            $scope.finish_submit = {
                width: 271 * pageInfo.rate + "px",
                height: 87 * pageInfo.rate + "px",
                margin: 60 * pageInfo.rate + "px auto 0"
            };


            $scope.finish_cheat_title = {
                width: 448 * pageInfo.rate + "px",
                height: 45 * pageInfo.rate + "px",
                lineHeight: 45 * pageInfo.rate + "px",
                fontSize: 40 * pageInfo.rate + "px",
                marginTop: 30 * pageInfo.rate + "px"
            };

            $scope.finish_cheat_time = {
                width: 448 * pageInfo.rate + "px",
                height: 45 * pageInfo.rate + "px",
                lineHeight: 45 * pageInfo.rate + "px",
                fontSize: 40 * pageInfo.rate + "px",
                marginTop: 120 * pageInfo.rate + "px",
                marginBottom: 60 * pageInfo.rate + "px",
                letterSpacing: 10 * pageInfo.rate + "px"
            };

            $timeout(function () {
                $('.finish').show();
                $('#rememberTime ').show();
                $('#gameRecordTime').show();
            })

        }


        autoCss();
        $scope.$on('autoCss', function () {
            autoCss();
        });

        $scope.backHomeClick = function () {
            $state.go('home');
        };

        gameService.reInit();

        $scope.cards = gameService.cards;

        $scope.reInit = function () {
            $scope.cards = gameService.cards;
            $scope.$apply();
        };


        $scope.gameTime = 0;
        $scope.username = '';
        $scope.phone = '';


        $scope.$on('updateGameTime', function (e, time) {
            $scope.gameTime = time;
        });


        $scope.finishCloseClick = function () {
            if (!gameService.isOver()) {
                return;
            }
            $scope.$emit('isShowBlackMate', false);
            $(".finish").css('opacity', 0).css('z-index', '');
            $('#startAndRestart').click();
        };

        $scope.finishSubmitClick = function () {
            if (!gameService.isOver()) {
                return;
            }
            $log.debug($scope.username, $scope.phone)
            if ($scope.username.trim().length == 0) {
                $($('.finish_input')[0]).css('border-color', '#FF6666');
                return;
            }

            if ($scope.phone.length != 11) {
                $($('.finish_input')[1]).css('border-color', '#FF6666');
                return;
            }

            $scope.$emit('isShowBlackMate', false);
            $(".finish").css('opacity', 0).css('z-index', '');
            gameService.submit($scope.username, $scope.phone);
            $('#startAndRestart').click();
        };
        NProgress.done();
    }

    ]);