angular.module('app')
    .filter('name', function () {
        return function (name) {
            var str = name.substring(0, 1), i = 0;
            while (i < name.length - 1) {
                i++;
                str += "*"
            }
            return str;
        }
    })
    .filter('time', function () {
        return function (time) {
            return (time / 1000).toFixed(1);
        }
    })
    .filter('phone', function () {
        return function (phone) {
            return phone.substring(0, 3) + "****" + phone.substring(7, 11);
        }
    });