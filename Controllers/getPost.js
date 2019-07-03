 var Usermodel = require('../Models/user');
 var ProductModel = require('../Models/product')
 var CartModel = require('../Models/cart')

 function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

 var Category = require('../Models/Categorey');

 exports.get = (req, res) => {

     res.render('AddPost');

 }

 exports.post = (req, res) => {

    
     Usermodel.findById(req.user._id).then((user) => {

         var product = new ProductModel({
            Name: req.body.NAME,
             Description: req.body.desc,
             Price: req.body.PRICE,
             File: {
                 path: 'product',
                 Filename: req.file.filename,
                 Filetype: req.file.mimetype
             },
             Category: req.body.CAT

         })
         console.log(product);


         //product.save();
         Promise.all([product.save()])

     }).then(() => {

         res.redirect('/')

     })


 }




 exports.displayCategory = function (req, res) {

     Category.find().then((Categorys) => {

         res.render('Addpost', {
             Categorys: Categorys
         })
     })
 }

 exports.addCategory = function (req, res) {

     console.log(req.body.CAT);
     var category = new Category({

         Cat_name: req.body.name

     })
     category.save().then(() => {

         res.send("category added");

     })

 }