//index.js
var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var items = [
    {
        id: 1,
        img: "1.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 2,
        img: "2.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 3,
        img: "3.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 4,
        img: "4.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 5,
        img: "5.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 6,
        img: "6.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 7,
        img: "7.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 8,
        img: "8.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 9,
        img: "9.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 10,
        img: "10.gif",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 11,
        img: "11.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 12,
        img: "12.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 13,
        img: "13.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 14,
        img: "14.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 15,
        img: "15.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 16,
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
