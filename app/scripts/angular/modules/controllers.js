'use strict';
var controllers = angular.module(
'app.controllers',
[
'app.constants',
'app.directives',
'app.filters',
'app.services',
'app.values'
]
);
//
var i = 0;
controllers.controller(
'appCtrl',
[
'$scope',
'$route',
'navService',
'storageService',
function ($scope, $route, navService, storageService ) {
    $scope.title = navService.title;
    $scope.route = navService.route;
    storageService.session.$reset();
    storageService.local.$reset();
}
]
);
//
//
controllers.controller(
'sampleCtrl',
[
'$scope',
'navService',
function ($scope, navService) {
    $scope.name = "SVG";
    navService.title("Using the " + $scope.name + " Controller.");
}
]
);
//
//
controllers.controller(
'dataCtrl',
[
'$scope',
'navService',
'd3Service',
function ($scope, navService, d3Service) {
    $scope.name = "Data";
    navService.title("Using the " + $scope.name + " Controller.");
    $scope.randomData = [];
    for(var i = 0; i < 5; i++) $scope.randomData.push({label:i,value:Math.floor(Math.random() * 11)});
}
]
);
//
//
controllers.controller(
'reactCtrl',
[
'$scope',
'navService',
function ($scope, navService, d3Service) {
    $scope.name = "React";
    navService.title("Using the " + $scope.name + " Controller.");
}
]
);
