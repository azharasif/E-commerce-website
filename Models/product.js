const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var productSchema = new Schema({

    Name:{
        type:String
    },
    Price: {

        type: Number

    },
    Description:{

        type:String

    },
 
    File: {
        path: {
            type: String
        },
        Filename: {

            type: String
        },
        Filetype: {

            type: String
        }

    },
    Cart: {

        type: Schema.Types.ObjectId,
        ref: 'Cart'

    },

    Category:{

    type:Schema.Types.ObjectId,
    ref:'P_Categorey'
    }
       

    


})

var productmodel = mongoose.model('Product', productSchema)
module.exports = productmodel;