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
    },
    findOne: (req,res) =>{
        Products.findOne({_id:req.body.id}).exec((err,foundOne) =>{
            if(err){
                res.json(err);
            }else{
                res.json(foundOne);
            }
        })
    },
    updateOne: (req,res) =>{
        Products.findOne({_id:req.body.id}, function(err,foundOne){
            if(err){
                res.json(err);
            }else{
                console.log(foundOne);
                console.log(req.body.product);
                foundOne.name = req.body.product.name;
                foundOne.quantity = req.body.product.quantity;
                foundOne.price = req.body.product.price;
                foundOne.description = req.body.product.description;
                foundOne.save((err) => {
                    if(err){
                        res.json(err);
                    }else{
                        res.json(foundOne);
                    }
                })
            }
        }
        )
    },
    deleteProduct: (req,res) =>{
        Products.remove({_id:req.body.id}, function(err) {
            if(err){
                res.json(err);
            }
            else{
                console.log("delete");
            }
        });
    },
    searchProduct: (req,res) =>{
        Products.find({name: new RegExp(req.body.name,"i")}, function(err, founded){
            if(err) res.json(err);
            res.json(founded);
        })
    }

}