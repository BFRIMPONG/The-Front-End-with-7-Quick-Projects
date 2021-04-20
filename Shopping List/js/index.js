var app = angular.module("ShoppingListApp", []);

app.controller("ListController", function($scope){
    $scope.list = ["milk", "cheese", "eggs"];
    $scope.deleted = [];

    $scope.addItem = function(z) {
        $scope.list.push(z);
        $scope.newItem = "";
    }

    $scope.remove = function(z) {
        var removeItem = $scope.list.indexOf(z);
        $scope.deleted.push(z);
        $scope.list.splice(removeItem, 1);
    }

    $scope.addBack = function(z) {
        var addBackItem = $scope.deleted.indexOf(z);
        $scope.list.push(z);
        $scope.deleted.splice(addBackItem, 1);
    }
});


