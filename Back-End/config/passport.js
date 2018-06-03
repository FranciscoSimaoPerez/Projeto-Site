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
        done(null, user.iduser);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        connection.query("SELECT * FROM `user` where iduser = " + id, function (err, rows) {
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
        usernameField: 'username',
        passwordField: 'palavrapasse',
        emailField: 'email',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, palavrapasse, done) {
            var dados = req.body;
            dados.tipouser = 'User';
            dados.mensagem="";
            connection.query("SELECT * from akaiito.user where username = '" + username + "'", function (err, results, fields) {
                if (results.length > 0) {
                    dados.mensagem="Este username já foi utilizado";
                    return done(null,dados);
                } else {
                    connection.query("SELECT * from akaiito.user where email = '" + dados.email + "'", function (err, results, fields) {
                        if (results.length > 0) {
                            dados.mensagem="Este email já foi utilizado";
                            return done(null,dados);
                        } else if (dados.palavrapasse != dados.confirmapalavrapasse){
                                dados.mensagem="A palavra-passe não é igual nos dois campos";
                                return done(null,dados);
                            } else {
                            connection.query("INSERT INTO user(username, nome, morada, contacto, email, tipouser, palavrapasse, datadenascimento, codigopostal, localidade, pais) VALUES('" + dados.username + "','" + dados.nome +"','" + dados.morada +"','" + dados.contacto + "','" + dados.email +"','" + dados.tipouser +"','" + dados.palavrapasse +"','" + dados.datadenascimento +"','" + dados.codigopostal +"','" + dados.localidade +"','" + dados.pais +"')", function (err, result) {
                                if (err) {
                                    return done(err);
                                }
                                var user = new Object();
                                user.iduser = result.insertId;
                                return done(null, "Utilizador criado!");
                            });
                        }
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
        usernameField: 'username',
        passwordField: 'palavrapasse',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, palavrapasse, done) { // callback with email and password from our form   

            connection.query("SELECT * from akaiito.user where username = '" + username + "'", function (err, rows) {
                if (err) {
                    return done(err);
                }
                if (!rows.length) { // se nao achar nada na bd
                    return done(null, false);
                }

                if (!(rows[0].palavrapasse == palavrapasse)) { //se a pass nao for igual
                    return done(null, false);
                }

                return done(null, rows[0]);
            });

        }));
};