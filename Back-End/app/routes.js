const database = require('../config/database.js');
module.exports = function(app, passport) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('../Front-End/pages/index.vue'); // load the index.vue file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // 1 - show the login form GET
    // render the page and pass in any flash data if it exists 
    app.get('/login', function(req, res){
        res.render('login.ejs', { message: req.flash('loginMessage')})
    });
    // 2 - process the login form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages 
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', 
        failureRedirect : '/login',
        failureFlash : true
    }));
    app.get('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.send("User não encontrado"); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.send(user);
          });
        })(req, res, next);
      });
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // 3 - show the signup form
    // render the page and pass in any flash data if it exists GET
    app.get('/signup', function(req,res){
        res.render('signup.ejs', { message: req.flash('signMessage')})
    });
    // 4- process the signup form POST
    // redirect to the secure profile section
    // redirect back to the signup page if there is an error
    // allow flash messages
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect : '/signup',
        failureFlash : true
    }));
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // 5 - show the profile page GET
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    // get the user out of session and pass to template
    app.get('/profile', isLoggedIn, function(req, res){
        res.render('profile.ejs', { 
            user : req.user
        });
    });
    // =====================================
    // LOGOUT ==============================
    // =====================================
    // 6 - logout user GET
    // redirect to root
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });


    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
    // GET request to list all the users from database
    app.get('/listUsers', function(req, res){
        database.query('SELECT * FROM cliente;', function(err, rows, fields){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.get('/user/:id', function(req, res){
        var userId=req.params.id;
        database.query("SELECT * FROM cliente WHERE ID_Cliente = '"+userId+"';", function(err, rows){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.get('/listAnimes', function(req, res){
        database.query('SELECT * FROM anime;', function(err, rows, fields){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.get('/anime/:id', function(req, res){
        var animeId=req.params.id;
        database.query("SELECT * FROM anime WHERE ID_Anime = '"+animeId+"';", function(err, rows){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.get('/listMangas', function(req, res){
        database.query('SELECT * FROM manga;', function(err, rows, fields){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.get('/mangas/:id', function(req, res){
        var mangaId=req.params.id;
        database.query("SELECT * FROM anime WHERE ID_Anime = '"+mangaId+"';", function(err, rows){
            if (err) throw err;
                res.send(rows);
        });
    });

    app.post('/addUser', function(request, response){
        var add = request.body;
        var values = [[add.Username,add.Nome,add.Tipo_de_Cliente="nonpremium",add.Morada,add.Palavra_Passe,add.Contacto, add.Email, add.Data_de_Nascimento, add.Codigo_Postal, add.Localidade, add.Pais]];
        connection.query('INSERT INTO cliente (Username, Nome, Tipo_de_Cliente, Morada, Palavra_Passe, Contacto, Email, Data_de_Nascimento, Codigo_Postal, Localidade, Pais) VALUES ?',[values], function(err, rows, fields){
            if(err) throw err;
        response.send("Utilizador adicionado com sucesso!");
        });
    });
};