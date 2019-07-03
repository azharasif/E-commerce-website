const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var flash = require('express-flash')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Name: {
        type: String,
        trim: true
    },
    Email: {
        unique: true,
        type: String,
        required: true
    },
    Password: {
        type: String
    },
    Contact_Number: {
        type:String
    },
    location:{
        type: String
    }

   
    
});

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('Password')) next();

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.Password, salt, (error, hash) => {

            user.Password = hash;
            next();

        })

    });

});

UserSchema.methods.comparePassword = function(temp_pass,callback){
    var user = this;
    
    bcrypt.compare(temp_pass,user.Password,(err,Ismatch) => {

        
        if (err) {
          
             console.log(err);  return callback(err);
        }

         console.log(Ismatch);
        callback(null,Ismatch);

    });
}
var UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;