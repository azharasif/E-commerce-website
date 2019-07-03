var WishListmodel = require('../Models/wishlist')

exports.get = (req, res) => {
    WishListmodel.findOne({
        User: req.user._id
    }).populate('Products').then((wishes) => {

        console.log(wishes);



        res.render('wishlist'  ,{wishes:wishes})
       
        })
    }


    exports.wishlistRemove =  function(req , res){


        WishListmodel.findOne({User:req.user._id}  , function(err , remove) {

      remove.Products.pull(req.body.wishid);
      remove.save()

        })
        res.redirect('/wishlist')
    }



exports.post = (req, res) => {


     
        WishListmodel.findOne({
                User: req.user._id
            }).then((wishes) => {
             
                if (!wishes) {

                    var wish = new WishListmodel({
                        User: req.user._id
                    });
                    wish.Products.push(req.body.wishid)
                    wish.save();
                   

                }

                else {
                          
                    wishes.Products.push(req.body.wishid);
                wishes.Products.pull(req.body.product_id);
                    wishes.save();

                    
                   
                }


            }).then(()=>{
                res.redirect('/wishlist')
            })

        }
    