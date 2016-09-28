app.service('NotesService', notesService);

notesService.$inject = ['$q', '$compile', '$http'];

function notesService($q, $compile, $http) {
        
    this.getData = function () {

        var promise = $http.get('http://127.0.0.1:5000/notes');

        promise = promise.then(function (response) {
            console.log(response.data);
            return response.data;
        });

        return promise;
    };
    
    this.setData = function (note) {
        
        var promise = $http.post('http://127.0.0.1:5000/notes/', note, {});
        
        promise = promise.then(function (response) {
            console.log(response.data);
            return response.data;
        });

        return promise;
    }
}

