app.directive('showNotes', ['NotesFactory', function() {

    var controller = ['$scope', 'NotesFactory', function($scope, notesFactory){
    
        $scope.addNote = function ( ) {
            console.log($scope.notes);
            //Aqui eu posso fazer uma chamada pra um service pra
            //criar a nota no mongo, devolvendo o _id
            var idx = $scope.notes.length;
            var note = {
                title: "Nova " + new Date(),
                content: "Aham"
                //created_at: new Date()
            }
            $scope.notes.push(note);
            notesFactory.set(note, function (data) {
                console.log(data);
            });
        }

        $scope.editNote = function (note) {
            $scope.selected = note;
            console.log('Selected: ' + $scope.selected.title);
            console.log('Nota selecionada: ' + note.title);
        };
    }];
    
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            notes: '=',
            selected: '=',
            title: '='
        },
        controller: controller,
        templateUrl: 'views/notes.html'
    };    
}])

app.directive('showNote', ['NotesFactory', function() {

    var controller = ['$scope',  function($scope){
                
        $scope.removeNote = function (note){
            console.log($scope.notes);
            var index = $scope.notes.indexOf(note);
            $scope.notes.splice( index, 1 );
            $scope.selected = null;
        };
    }];
                      
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            notes: '=',
            selected: '='
        },
        controller: controller,
        templateUrl: 'views/note.html'
    };
}]);