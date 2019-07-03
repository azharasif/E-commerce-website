
   var ProductModel = require('../Models/product')


exports.scrape = (req , res)=>{

if(req.query.search){
        ProductModel.find({ Name : req.query.search}, function(err , found) {
     
    
    }).then((products) =>{
console.log(products)
        res.send(products)
    })
}
}