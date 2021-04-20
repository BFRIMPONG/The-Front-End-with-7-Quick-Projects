let app = angular.module("LeaderFilterApp", []);
app.controller("LeaderController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"name":"alexanda","pic":"assets/1.png"},
        {"name":"dido", "pic":"assets/7.png"},
        {"name":"gandhi", "pic":"assets/4.png"},
        {"name":"gilgamesh", "pic":"assets/3.png"},
        {"name":"gorgo", "pic":"assets/5.png"},
        {"name":"hardrada", "pic":"assets/6.png"},
        {"name":"hojo", "pic":"assets/11.png"},
        {"name":"krestina", "pic":"assets/8.png"},
        {"name":"cleopatra", "pic":"assets/2.png"},
        {"name":"amanitore", "pic":"assets/10.png"},
        {"name":"ca Trieu", "pic":"assets/9.png"},
        {"name":"casil", "pic":"assets/12.png"},
        {"name":"cyrus", "pic":"assets/15.png"},
        {"name":"elearnor", "pic":"assets/16.png"},
        {"name":"genghis Khan", "pic":"assets/18.png"},
        {"name":"gitarja", "pic":"assets/19.png"},
        {"name":"jadwiga", "pic":"assets/22.png"},
        {"name":"joao", "pic":"assets/24.png"},
        {"name":"mathias", "pic":"assets/29.png"},
        {"name":"Mmenelik", "pic":"assets/30.png"},
        {"name":"Mmontezuma", "pic":"assets/31.png"},
        {"name":"mvemba", "pic":"assets/32.png"},
        {"name":"pachacuti", "pic":"assets/33.png"},
        {"name":"pedro", "pic":"assets/34.png"},

    ];    
   
}); 