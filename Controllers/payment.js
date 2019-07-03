
const stripe = require("stripe") ('sk_test_7tZHyX642LmkZN8myf1Fs6yh')
exports.post = (req , res , next) => {

var stripeToken = req.body.stripeToken;
var  currentCharges  =  req.body.stripeMoney;


stripe.customers.create({

    email:req.body.stripeEmail,
    source:req.body.stripeToken

}).then((customer)=>{

    stripe.charges.create({
        amount:currentCharges,
        currency:'usd',
        customer:customer.id
    }).then(()=>{

res.send('payment done')

    }).catch((err)=>{
console.log(err)

    })
})


}