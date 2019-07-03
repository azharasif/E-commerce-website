const mongoose = require('mongoose')


var Schema = mongoose.Schema;

var cartSchema = new Schema({

    User: {

        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    total: {

        type: Number,
        default: 0

    },
    Pic:
    {
        type:String
    },
    Products: [{
        Pic:
        {
            type:String
        },
        Item:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
        },
        quantity:{type:Number , default:1},
        Price:{type:Number },
    }]

})

var CartModel = mongoose.model('Cart', cartSchema)
module.exports = CartModel;