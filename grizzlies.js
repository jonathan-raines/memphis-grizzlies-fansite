/***************************************************************************************************
 * Name: Jonathan Raines
 * Date: November 14, 2019
 * CS 290 Project: Create a team page for the Memphis Grizzlies, which will show stats, 
 * schedule, and links to external sports sources
 **************************************************************************************************/
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var port = process.env.PORT || 8083;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));      // https://www.youtube.com/watch?v=o4njTeKjGWQ

app.get('/', function(req,res) {
    res.render('home');
});

app.get('/schedule', function(req,res) {
    res.render('schedule');
});

app.get('/rookies', function(req,res) {
    res.render('rookies');
});

app.get('/facts', function(req,res) {
    res.render('facts');
});

app.get('/subscribe', function(req,res) {
    res.render('subscribe');
});

app.use(function(req,res) {
    res.status(404);
    res.render('404');
});

app.use(function(req,res) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(port, function() {
    console.log('Express started on http://localhost:' + port + '; press CTRL-C to terminate.');
});
