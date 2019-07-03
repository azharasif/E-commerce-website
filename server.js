const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const Mongostore = require('connect-mongo')(session);
var flash = require('express-flash')

var cors = require('cors')

 


const stripe = require("stripe")('sk_test_7tZHyX642LmkZN8myf1Fs6yh')

require('./config/passport_config');

const app = express();
const port = process.env.port || 5000;
app.use(cors())

//server listing on port 3000
app.listen(port, () => {

    console.log(`server listing on port ${port}`);

});

//connection with mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping', {
    useNewUrlParser: true
}).then(() => {
    console.log('Database Connnected');
}).catch((err) => {
    console.log(err);
})

//setting template engine
app.set('view engine', 'ejs');
app.use('/product', express.static('./public/dynamic/post/'))
app.use('/css',express.static('./public/static/css/'));
app.use('/js',express.static('./public/static/js/'));
app.use('/bootstrap', express.static('./public/static/bootstrap/'));
app.use('/images',express.static('./public/static/images/'));
app.use('/fonts',express.static('./public/static/fonts/'));
app.use('/post',express.static('./public/dynamic/post/'));
app.use('/plugins',express.static('./public/static/plugins/'))
app.use('/plugins',express.static('./public/static/vendor/'))
app.use('/homejs' , express.static('./public/static/home/js/'))
app.use('/homestyles' , express.static('./public/static/home/styles/'));
app.use('/homeplugins' , express.static('./public/static/home/plugins/'))

//middleware

app.use(body_parser.urlencoded({
    extended: false
}));

//session middleware
app.use(session({
    secret: 'secrestkey',
    coocookie: { maxAge: 90000 },
    resave: true,
    saveUninitialized: false,
    store: new Mongostore({
        mongooseConnection: mongoose.connection
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
    res.locals.person = req.user;
    next();

})


//fetch routes
app.use(require('./Routes/Routes'));