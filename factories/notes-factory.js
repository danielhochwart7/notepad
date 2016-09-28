app.factory('NotesFactory', notesFactory);

notesFactory.$inject = ['$http', 'NotesService'];

function notesFactory($http, notesService) {
    
    var service = {
        get: getNotes,
        set: setNote
    };

    return service;

    function getNotes(callback) {

        notesService.getData().then(function (data) {
            var notes = [];

            for (var i = 0; i < data.length; i++) {
                notes.push(data[i]);
            }
            if (callback instanceof Function) {
                callback(notes);
            }
        });
    }
    
    function setNote(note, callback) {

        notesService.setData(note).then(function (data) {
            if (callback instanceof Function) {
                callback(note);
            }
        });
    }
};