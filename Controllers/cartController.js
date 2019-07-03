 var Usermodel = require('../Models/user');
var ProductModel = require('../Models/product')
var CartModel = require('../Models/cart')




exports.remove = function (req, res)  {


CartModel.findOne({User:req.user._id} , function(err , found){
found.Products.pull(req.body.wishid);
found.total = (found.total -  parseFloat(req.body.pricer)).toFixed(2);
found.save();

})

    res.redirect('/mycart')

}

exports.post = function (req, res) {    

    CartModel.findOne({
        User: req.user._id
    }).then((Cart) => {
  

    
        if (!Cart) {

            var cart = new CartModel({
                User: req.user._id,
                total:Number(req.body.priceValue),
               Products:[{price:req.body.priceValue,
                Pic:req.body.PIC,
                quantity:Number(req.body.quantity),
                Item:req.body.product_id,
                
                Price:Number(req.body.priceValue)
               }]
               
            });

            cart.save();
          
        } else {
            var temp={Price:Number(req.body.priceValue),
                quantity:Number(req.body.quantity),
                Pic:req.body.PIC,
                Item:req.body.product_id,                
            }
            Cart.total += Number(req.body.priceValue);
   
            Cart.Products.push(temp);
            Cart.save();
           

        }

        res.redirect('/mycart');


    })








}

//  exports.post = function(req, res){
//     Usermodel.findById(req.user._id).then((user)=>{




//     }).then((products)=>{

//         res.render('mycart'  ,{
//            Products:products 
//         });
//     })            

//     }