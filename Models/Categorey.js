const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CatSchema = new Schema({
    Cat_name: {
        type: String,
        trim: true
    }


   
    
});

var categorymodel = mongoose.model('P_Categorey' ,  CatSchema );
module.exports = categorymodel ;