let app = angular.module("RankingLeadersApp", []);
app.controller("RankController",function($scope){

    $scope.showGold = false;
    $scope.showSilver = false;
    $scope.showBronze = false;

    $scope.toggleGold = function(){
        $scope.showGold = !$scope.showGold;
    }
    $scope.toggleSilver = function(){
        $scope.showSilver = !$scope.showSilver;
    }
    $scope.toggleBronze = function(){
        $scope.showBronze = !$scope.showBronze;
    }
    

    $scope.Leaders = [
        {"pic":"images/image1.png", "rank":1},
        {"pic":"images/image2.png", "rank":1},
        {"pic":"images/image3.png", "rank":1},
        {"pic":"images/image4.png", "rank":2},
        {"pic":"images/image5.png", "rank":2},
        {"pic":"images/image6.png", "rank":2},
        {"pic":"images/image7.png", "rank":3},
        {"pic":"images/image8.png", "rank":3},
        {"pic":"images/image9.png", "rank":3},

    ]
   
});