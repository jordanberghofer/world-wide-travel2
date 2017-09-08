"use strict";

var app = angular.module("wwt", ['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
        .when('/', {
            templateUrl: 'partials/display.html',
            controller: 'bookCtrl'
        })
        .otherwise('/');
});