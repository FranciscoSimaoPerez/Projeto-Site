// config/passport.js
var mysql = require('mysql');

var connection=mysql.createConnection({
    host        :'localhost',
    user        :'root',
    password    :'',
    database    :'akaiito'
});
// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// MySQL connection

console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    //connection.query("SELECT * FROM `users`",function(err,results,fields){

        //!results.affectedRows !results.length

    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.ID_Cliente);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM `cliente` where ID_Cliente = " + id, function (err, rows) {
            done(err, rows[0]);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'Username',
        passwordField: 'Palavra_Passe',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, Username, Palavra_Passe, done) {
            var dados = req.body;
            dados.Tipo_de_Cliente = 0;
            connection.query("SELECT * from akaiito.cliente where Username = '" + Username + "'", function (err, results, fields) {
                if (results.length > 0) {
                    return done(null, false, req.flash('signupMessage', "Username já registado!"));
                } else {
                    
                    connection.query("INSERT INTO cliente(Username, Nome, Morada, Contacto, Email, Tipo_de_Cliente, Palavra_Passe, Data_de_Nascimento, Codigo_Postal, Localidade, Pais) VALUES('" + dados.Username + "','" + dados.Nome +"','" + dados.Morada +"','" + dados.Contacto + "','" + dados.Email +"','" + dados.Tipo_de_Cliente +"','" + dados.Palavra_Passe +"','" + dados.Data_de_Nascimento +"','" + dados.Codigo_Postal +"','" + dados.Localidade +"','" + dados.Pais +"')", function (err, result) {
                        if (err) {
                            return done(err);
                        }
                        var user = new Object();
                        user.ID_Cliente = result.insertId;
                        return done(null, user);
                    });
                }
            });
    }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'Username',
        passwordField: 'Palavra_Passe',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, Username, Palavra_Passe, done) { // callback with email and password from our form   

            connection.query("SELECT * from akaiito.cliente where Username = '" + Username + "'", function (err, rows) {
                if (err) {
                    return done(err);
                }
                if (!rows.length) { // se nao achar nada na bd
                    return done(null, false, req.flash('loginMessage', "No user Found."));
                }

                if (!(rows[0].Palavra_Passe == Palavra_Passe)) { //se a pass nao for igual
                    return done(null, false, req.flash('loginMessage', "Wrong Password!Try Again"));
                }

                return done(null, rows[0]);
            });

        }));
};