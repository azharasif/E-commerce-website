const express = require('express');
const Router = express.Router();
const stripe = require("stripe") ('sk_test_7tZHyX642LmkZN8myf1Fs6yh')

const Login = require('../Controllers/LoginController');
const Register = require('../Controllers/RegisterController');
const Home = require('../Controllers/HomeController');
const profile=require('../Controllers/ProfileController');
const passport=require('passport');
const auth=require('../Middleware/passport_auth');
const upload  = require('../Middleware/uploadfile')
module.exports = Router;

//Home route
var tagline = "Any code of your";
Router.get('/'  , require('../Controllers/HomeController').get);

//Login Route
Router.get('/login',auth.restric,Login.get);
Router.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash: true

}));
//Register route


Router.get('/getpost' ,auth.islogin,require('../Controllers/getPost').displayCategory)
Router.post('/getpost', auth.islogin,upload.single('FILE'), require('../Controllers/getPost').post)


Router.get('/addcat' , auth.islogin   , require('../Controllers/addCategorey').get)
Router.post('/addcat'  , auth.islogin , require('../Controllers/addCategorey').addCategory)


Router.get('/register',auth.restric,Register.get);
Router.post('/register',Register.post);

Router.get('/profile',auth.islogin,profile.display);
Router.get('/logout',require('../Controllers/LogoutController'));
Router.get('/edit',auth.islogin,profile.edit);
Router.post('/edit',auth.islogin,profile.update);


Router.get('/mycart' , auth.islogin ,  require('../Controllers/ViewCartController').get)
Router.post('/mycart' , auth.islogin , require('../Controllers/cartController').post)

Router.get('/wishlist'  , auth.islogin  , require('../Controllers/WishlistController').get );
Router.post('/wishlist' , auth.islogin , require('../Controllers/WishlistController').post );
//remove the product from the cart  
Router.post('/remove'  , auth.islogin , require('../Controllers/cartController').remove );
 
//get dtails of prooduct

Router.get('/detail/:id' , auth.islogin , require('../Controllers/ProductDetail').get);

//remove product from wislist
Router.post('/wishlistRemove' , auth.islogin, require('../Controllers/WishlistController').wishlistRemove);

//payment 
 Router.post('/payment' , auth.islogin, require('../Controllers/payment').post)


 Router.get('/scrapeapi'  , require('../Controllers/scrapeapiController').scrape)
