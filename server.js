//index.js
var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('main');
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Hayley\'s portfolio listening at http://%s:%s', host, port);
});
