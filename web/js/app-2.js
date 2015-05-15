"use strict";

var myFirstApp = angular.module("myFirstApp", []);

myFirstApp.controller("mainController", ["$scope", "$log", function($scope, $log) {
    $scope.name = "First Name";
    $scope.demoFunc = function() {
        console.log("On Scope Function");
    };

    //console.log($scope);
    console.log($log);
    $log.info($scope);
    $log.error("Error in Code");
    $log.warn("Warning in Code");
}]);
