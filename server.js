//index.js
var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));


var items = [
    {
        id: 1,
        skills: ["Design", "Photography"],
        img: "1.png",
        title: "Open Event Flyer [Front]",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 2,
        skills: ["Design", "Illustration"],
        img: "2.png",
        title: "Business Card",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 19,
        skills: ["Web Design"],
        img: "19.png",
        title: "Catalyst Studios",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 3,
        skills: ["Character Design", "Illustration"],
        img: "3.png",
        title: "Catapult Games Logo",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 4,
        skills: ["Design", "Illustration"],
        img: "4.jpg",
        title: "Digital Workshop Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 5,
        skills: ["Design"],
        img: "5.png",
        title: "Open Event Flyer",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 6,
        skills: ["Design"],
        img: "6.png",
        title: "Open Event Flyer [Back]",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 7,
        skills: ["Design"],
        img: "7.jpg",
        title: "Portfolio Advice Cover",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 8,
        skills: ["Design"],
        img: "8.jpg",
        title: "Event Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 9,
        skills: ["Illustration"],
        img: "9.png",
        title: "Illustration Commission",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 17,
        skills: ["Web Design"],
        img: "17.png",
        title: "Catalyst Studios",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 10,
        skills: ["Character Design", "Animation"],
        img: "10.gif",
        title: "Kass Seti Design",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 20,
        skills: ["Web Design"],
        img: "20.png",
        title: "Catalyst Studios",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 11,
        skills: ["Design"],
        img: "11.png",
        title: "Open Event Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 13,
        skills: ["Design"],
        img: "13.png",
        title: "Event Invite",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 14,
        skills: ["Design"],
        img: "14.png",
        title: "Open Event Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 15,
        skills: ["Illustration"],
        img: "15.png",
        title: "Tree & Fairy",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 16,
        skills: ["Design"],
        img: "16.png",
        title: "U Shop Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 21,
        skills: ["Design", "Illustration"],
        img: "21.png",
        title: "Latency Poster",
        blurb: "Lorem Ipsum etc etc"
    },
    {
        id: 18,
        skills: ["Illustration"],
        img: "18.png",
        title: "Environment Art",
        blurb: "Lorem Ipsum etc etc"
    }
];

app.get('/', function(req, res) {
    res.render('main', {items: items});
});

var server = app.listen(1337, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Hayley\'s portfolio listening at http://%s:%s', host, port);
});
