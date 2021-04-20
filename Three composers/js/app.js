let app = angular.module("ComposersList", []);
app.controller("ComposerController",function($scope){
    $scope.pieces = [
        {"pic":"images/avatar4.png", "composer":"Bach","title":"Goldberg"},
        {"pic":"images/avatar4.png", "composer":"Bach","title":"Harpsichord"},
        {"pic":"images/avatar4.png", "composer":"Bach","title":"Brandenburg"},
        {"pic":"images/avatar4.png", "composer":"Bach","title":"Air on G"},
        {"pic":"images/avatar4.png", "composer":"Bach","title":"Cantata"},
        {"pic":"images/avatar3.png", "composer":"Beethoven","title":"Symphony"},
        {"pic":"images/avatar3.png", "composer":"Beethoven","title":"Fur"},
        {"pic":"images/avatar3.png", "composer":"Beethoven","title":"Moonlight"},
        {"pic":"images/avatar3.png", "composer":"Beethoven","title":"Violin"},
        {"pic":"images/avatar3.png", "composer":"Beethoven","title":"Egmont"},
        {"pic":"images/avatar7.png", "composer":"Mozart","title":"Eine"},
        {"pic":"images/avatar7.png", "composer":"Mozart","title":"Piano"},
        {"pic":"images/avatar7.png", "composer":"Mozart","title":"Don Giovanni"},
        {"pic":"images/avatar7.png", "composer":"Mozart","title":"Jupiter"},
        {"pic":"images/avatar7.png", "composer":"Mozart","title":"Clarinet"}
    ]
   
});