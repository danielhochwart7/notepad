var db = require('../db_config.js');

exports.list = function(callback) {
    db.Note.find({}, function(error, notes) {
        if(error) {
            callback(
                {error: 'Error while retrieving notes from database'}
            )
        } else {
            callback(notes);
        }
    });
};

exports.note = function(id, callback) {
    db.Note.findById(id, function(error, note) {
        if(error) {
            callback({error: 'Error while retrieving note id: ' + id});
        } else {
            callback(note);
        }
    });
};

exports.save = function(title, content, callback) {
    new db.Note({
        'title': title,
        'content': content,
        created_at: new Date()
    }).save(function(error, note) {
        if(error) {
            callback({error: 'Error on adding note to database'});
        } else {
            callback(note);
        }
    }); 
};

exports.update = function(id, title, content, callback) {
    db.Note.findById(id, function(error, note) {
        if (title) {
            note.title = title;
        }

        if (content) {
            note.content = content;
        }
        
        note.save(function(error, note) {
            if (error) {
                callback({error: 'Não foi possível atualizar o note.'});
            } else {
                callback(note);
            }
        });
    });
};

exports.delete = function(id, callback) {
    db.Note.findById(id, function(error, note) {
        if(error) {
            callback({error: 'Não foi possível deletar o note...'})
        } else {
            note.remove(function (error) {
                if(!error) {
                    callback({response: 'Note excluido com sucesso'});
                }
            });
        }
    });
};


