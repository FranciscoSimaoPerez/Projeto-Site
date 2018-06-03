var mysql = require('mysql');
var connection=mysql.createConnection({
    host        :'localhost',
    user        :'root',
    password    :'',
    database    :'akaiito'
});

module.exports = function (app, passport) {
    

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('/index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // 1 - show the login form GET
    // render the page and pass in any flash data if it exists 
    app.get('/login', function (req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') })
    });

    // 2 - process the login form POST

    // app.post('/login', passport.authenticate('local-login', {
    //     successRedirect: '/profile', //se autenticar passa
    //     failureRedirect: '/login', //manda de volta pro login se falhar
    //     failureFlash: true //ativa as mensagens flash 
    // }));
    app.post('/login', function (req, res,next) {
        passport.authenticate('local-login',function(err,user,info){return (res.send(user));})
        (req, res, next);
        
    });

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });


    app.get('/signup', function (req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') })
    });

    // app.post('/signup', passport.authenticate('local-signup', {
    //     // successRedirect: '/profile', //se autenticar passa
    //     // failureRedirect: '/signup', //manda de volta pro login se falhar
    //     // failureFlash: true //ativa as mensagens flash 
        
    // }));
    app.post('/signup', function (req, res,next) {
        passport.authenticate('local-signup',function(err,user,info){
        return res.send(user);})
        (req, res, next);
    });

    
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages 

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // 3 - show the signup form
    // render the page and pass in any flash data if it exists GET

    // 4- process the signup form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // 5 - show the profile page GET
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    // get the user out of session and pass to template

    // =====================================
    // LOGOUT ==============================
    // =====================================
    // 6 - logout user GET
    // redirect to root

    app.get('/logout',function(req,res){
        req.logOut();
        res.redirect('/');
    })

        // GET request to list all the users from database
        app.get('/listUsers', function(req, res){
            connection.query('SELECT * FROM user', function(err, rows, fields){
                if (err) throw err;
                    res.send(rows);
            });
        });
    
        app.get('/profile/:id', function(req, res){
            var iduser=req.params.id;
            connection.query("SELECT * FROM user WHERE iduser = '"+iduser+"'", function(err, rows){
                if (err) throw err;
                    res.send(rows);
            });
        });
    
        app.get('/anime', function(req, res){
            connection.query('SELECT * FROM anime', function(err, rows, fields){
                if (err) throw err;
                    res.send(rows);
            });
        });
    
        app.get('/anime/:id', function(req, res){
            var idanime=req.params.id;
            connection.query("SELECT * FROM anime WHERE idanime = '"+idanime+"';", function(err, rows){
                if (err) throw err;
                    res.send(rows);
            });
        });
    
        app.get('/listMangas', function(req, res){
            connection.query('SELECT * FROM manga;', function(err, rows, fields){
                if (err) throw err;
                    res.send(rows);
            });
        });
    
        app.get('/mangas/:id', function(req, res){
            var idmanga=req.params.id;
            connection.query("SELECT * FROM manga WHERE idmanga = '"+idmanga+"';", function(err, rows){
                if (err) throw err;
                    res.send(rows);
            });
        });

        app.post('/addProduto', function(req, res){
            var dados = req.body;           
            var value=[[dados.nome, dados.preco, dados.autor, add.editora]];
            connection.query('INSERT INTO akaiito.anime (nome, preco, autor, editora) VALUES ?',[value], function(err, rows, fields){
                if(err) throw err;
                rows.idanime=add.insertId;
                res.send(rows);
            });
          });

          app.post('/updateuser', function (req, res) {
            var update = req.body;
                var sqlquery = "UPDATE user SET  username=?,email=?,palavrapasse=?,nome=?,datadenascimento=?,morada=?,localidade=?,codigopostal=?,pais=?,contacto=? where iduser=?"
                var values = [update.username, update.email, update.palavrapasse, update.nome, update.datadenascimento, update.morada, update.localidade, update.codigopostal, update.pais, update.contacto, update.iduser];
            connection.query(sqlquery, values, function (err, results, fields) {
                if (!results.affectedRows) {
                    res.send("Utilizador não existe!");
                } else {
                    res.send("SUCCESS");
                }
            });
        });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

