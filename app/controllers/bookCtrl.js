"use strict";

app.controller("bookCtrl", function($scope, bookFactory) {
    bookFactory.getBooks()
        .then(function (itemCollection) {
            $scope.guides = itemCollection;
        });
});