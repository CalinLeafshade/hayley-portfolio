//index.js
var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var items = [
    {
        img: "1.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "2.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "3.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "4.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "5.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "6.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "7.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "8.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "9.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "10.gif",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "11.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "12.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "13.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "14.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "15.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        img: "16.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    }
]



app.get('/', function(req, res) {
    
    
    
    res.render('main', {items: items});
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Hayley\'s portfolio listening at http://%s:%s', host, port);
});
