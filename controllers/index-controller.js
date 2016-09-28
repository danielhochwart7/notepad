app.controller('IndexController', ['$scope', 'NotesFactory', function($scope, notesFactory) {
    
    $scope.title = "Notes";
    
    $scope.notes = [];
    
    $scope.selected = null;
    
    notesFactory.get(function (data) {
        $scope.notes = data;
    });

}]);