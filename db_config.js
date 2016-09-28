var db_string = 'mongodb://127.0.0.1/bnotes';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
   var noteSchema = mongoose.Schema({

       title: String,
       content: String,
       created_at: Date
   });
   exports.Note = mongoose.model('Note', noteSchema);
});
