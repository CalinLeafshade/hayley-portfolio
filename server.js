//index.js
var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var items = [
    {
        id: 1,
        skills: ["Design", "Photography"],
        img: "1.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 2,
        skills: ["Design", "Illustration"],
        img: "2.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 3,
        skills: ["Character Design", "Illustration"],
        img: "3.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 4,
        skills: ["Design", "Illustration"],
        img: "4.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 5,
        skills: ["Design"],
        img: "5.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 6,
        skills: ["Design"],
        img: "6.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 7,
        skills: ["Design"],
        img: "7.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 8,
        skills: ["Design"],
        img: "8.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 9,
        skills: ["Illustration"],
        img: "9.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 10,
        skills: ["Character Design", "Animation"],
        img: "10.gif",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 11,
        skills: ["Design"],
        img: "11.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 12,
        skills: ["Design"],
        img: "12.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 13,
        skills: ["Design"],
        img: "13.jpg",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 14,
        skills: ["Design"],
        img: "14.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 15,
        skills: ["Illustration"],
        img: "15.png",
        title: "Lorem Ipsum",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 16,
        skills: ["Design"],
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
