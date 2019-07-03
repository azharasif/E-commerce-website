var ProductModel = require('../Models/product')


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
exports.get=(req,res)=>
{
    res.render('display');
}





exports.display = function (req, res) {
     
    if(req.query.search){
        ProductModel.find({ Name : req.query.search}, function(err , found) {
     
    
    }).then((products) =>{
console.log(products)
        res.render('Search', {
            products : products
        })
    })
}
    
    else {
    
    
         ProductModel.find().populate('Category').then((products) => {
          
             res.render('display', {
                 products: products
             })
         })
        }
     }
    



//      exports.display = (req , res)=>{

// if(req.query.search){

// ProductModel.find({Name:req.query.search}  , function(err , found){


// })
// else{

//     ProductModel.find().populate('Category').then((products)=>{

// res.render('display' , {

//     products:products
// })

//     })

// }


//      }