// import modules
const express = require('express');
const bodyParser = require('body-parser');

const database = require('./config/database.js');

//create express instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//express server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// GET request to list all the users from database
app.get('/listUsers', function(req, res){
    database.query('SELECT * FROM cliente;', function(err, rows, fields){
        if (err) throw err;
            res.send(rows);
    });
});