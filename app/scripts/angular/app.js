'use strict';
var app = angular.module('app', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'app.filters',
    'app.services',
    'app.directives',
    'app.controllers',
    'app.values',
    'app.constants',
    'app.factories',
    'app.animations'
]);

app.config(
[
'$routeProvider',
function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
    })
    $routeProvider.when('/demo/samples', {
        templateUrl: 'views/samples.html',
        controller: 'sampleCtrl'
    })
    $routeProvider.when('/demo/data', {
        templateUrl: 'views/data.html',
        controller: 'dataCtrl'
    })
    $routeProvider.when('/demo/react', {
        templateUrl: 'views/react.html',
        controller: 'reactCtrl'
    })
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}
]
);