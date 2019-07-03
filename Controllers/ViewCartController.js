const CartModel = require('../Models/cart')

// exports.get = (req,res)=>{


    
    
//            CartModel.find({User:req.body.postid}).populate('Products').then((Products)=>{
//                console.log(Products);
               

//      res.render('mycart',{P:Products});

//            })
// }
exports.get = (req,res)=>{
//     CartModel.findOne({User:req.user._id}).populate('Item').then((cart)=>{

//         console.log(cart);
//         res.render('mycart'  ,{C:cart})
//     })
// CartModel.findOne({
//     User: req.user._id
// }).then((cart) => {
//     cart.populate('Products');
//     console.log(cart);
 
//     res.render('mycart', {
//         C: cart
//     });
// })

CartModel.findOne({
    User: req.user._id
}).populate('Products').then((cart) => {
    console.log(cart);
 
    res.render('mycart', {
        C: cart
    });
})

}
// })






// }