var Usermodel = require('../Models/user');
var ProductModel = require('../Models/product')
var CartModel = require('../Models/cart')

function escapeRegex(text) {
   return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

var Category = require('../Models/Categorey');

exports.get = (req, res) => {

    res.render('addCategorey');

}



 exports.addCategory = function (req, res) {

   console.log(req.body.CAT)


    var category = new Category({

        Cat_name: req.body.CAT

    })
    category.save().then(() => {

        res.send("category added");

    })

}