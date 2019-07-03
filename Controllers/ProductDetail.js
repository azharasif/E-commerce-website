var ProductModel = require('../Models/product')



exports.get = (req, res)=>{

ProductModel.findById(req.params.id).then((detail)=>{

console.log(detail);
    res.render('productdetail' , {

        detail:detail
    
    })


})


}