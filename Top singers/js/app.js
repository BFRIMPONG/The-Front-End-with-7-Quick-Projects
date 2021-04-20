let app = angular.module("singersApp", []);
app.controller("SingerController",function($scope){
    $scope.singers = [
        {"pic":"images/1.png", "name":"beyonce","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/2.png", "name":"lady gaga","gender":"female", "quality":"images/dislike.jpg"},
        {"pic":"images/3.png", "name":"taylor swift","gender":"female", "quality":"images/dislike.jpg"},
        {"pic":"images/4.png", "name":"bruno mars","gender":"male", "quality":"images/like.jpg"},
        {"pic":"images/5.png", "name":"ariana grande","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/6.png", "name":"katy perry","gender":"female", "quality":"images/like.jpg"},
        {"pic":"images/7.png", "name":"justin bieber","gender":"male", "quality":"images/dislike.jpg"},
        {"pic":"images/8.png", "name":"selena gomez","gender":"female", "quality":"images/like.jpg"},
    ];
   
});