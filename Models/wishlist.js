const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var wishList = new Schema({

Products:[{

    type:Schema.Types.ObjectId,
    ref:'Product'

}],

User: {

    type: Schema.Types.ObjectId,
    ref: 'User'
},


})

var WishListmodel = mongoose.model('Wishlist' , wishList  );
module.exports = WishListmodel;