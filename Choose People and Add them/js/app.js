let app = angular.module("TossThemApp", []);
app.controller("MovePeopleController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"pic":"images/image1.png", "name":"Alexander"},
        {"pic":"images/image2.png", "name":"Amanitore"},
        {"pic":"images/image3.png", "name":"Barbarossa"},
        {"pic":"images/image4.png", "name":"Gandhi"},
        {"pic":"images/image5.png", "name":"Cleoptra"},
        {"pic":"images/image6.png", "name":"Cyrus"},
        {"pic":"images/image7.png", "name":"Dido"},
        {"pic":"images/image8.png", "name":"Chandragupta"},
    ];  
   
}); 