const UserModel=require('../Models/user');
exports.display = (req, res) => {

    res.render('profile',{User:req.user});
}
exports.edit = (req, res) => {

    console.log(req.body)
    res.render('Edit',{User:req.user});
}
exports.update = (req, res) => {

    console.log(req.user._id);
    UserModel.findByIdAndUpdate(req.user._id,{Email:req.body.EMAIL,Name:req.body.NAME, Contact_Number:req.body.Contactno,
        location:req.body.location }).then((user)=>
    {
        console.log(user);
    })
    res.send('updated');
   
}