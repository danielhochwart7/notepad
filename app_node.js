var app = require('./app_config.js');

var noteController = require('./controllers/noteController.js');

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('/notes', function(req, res) {
    noteController.list(function(resp) {
        res.json(resp);
    })
});

app.post('/notes', function(req, res) {
    
    var title = req.param('title');
    var content = req.param('content');

    noteController.save(title, content, function(resp) {
        res.json(resp);
    })
});

app.get('/notes/:id', function(req, res) {
    var id = req.param('id');
    noteController.note(id, function(resp) {
        res.json(resp);
    })
});


app.put('/notes', function(req, res) {
    var id = req.param('id');
    var title = req.param('title');
    var content = req.param('content');

    noteController.update(id, title, content, function(resp) {
        res.json(resp);
    })
});

app.delete('/notes/:id', function(req, res) {
    var id = req.param('id');

    noteController.delete(id, function(resp) {
        res.json(resp);
    })
});
