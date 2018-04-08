var mongoose = require('mongoose');
var Products = mongoose.model('Products');

module.exports = {
    index: (req,res) =>{
        Products.find().exec((err, foundAll) =>{
            if(err){
                res.json(err);
            }else{
                res.json(foundAll);
            }
        })
    },
    create: (req,res) => {
        var newProduct = new Products(req.body);
        newProduct.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json(newProduct);
            }
        })
    }
}