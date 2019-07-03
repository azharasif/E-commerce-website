const UserModel = require('../Models/user');
exports.get = (req, res) => {
    res.render('Register');
}
exports.post = (req, res) => {
    console.log(req.body)
    var user = new UserModel({

        Name: req.body.NAME,
        Email: req.body.EMAIL,
        Password: req.body.PASS,
        Contact_Number:req.body.Contactno,
        location:req.body.location
    });

    user.save().then(()=> res.redirect('/')).catch(console.error)



}