var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var app = express();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }})); // Use the session middleware
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./config/passport')(passport); // pass passport for configuration
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// express server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port);   
}); 