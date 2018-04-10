var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports = {
    createAccount: (req, res) => {
        var newAccount = new Users(req.body);
        newAccount.save((err) =>{
            if(err) res.json(err);
            res.json(newAccount);
        })
    },
    loginAccount: (req,res) => {
        Users.findOne({username: req.body.username}, function(err,foundOne){
            if(err) res.json(err);
            foundOne.comparePassword(req.body.password, function (err, isMatch) {
                    if(err) throw err;

                    res.json(isMatch);
                    // console.log(req.body.password, isMatch);
                })
        })
    },
    findUser: (req,res) =>{
        Users.findOne({username: req.body.username}, function(err, foundIt){
            if(err) res.json(err);
            res.json(foundIt);
            console.log(foundIt);
        })
    },
    profileUpdate: (req,res) =>{
        Users.findOne({username:req.body.username.username}, function (err, foundIt) {
            if(err) res.json(err);
            foundIt.email = req.body.username.email;
            foundIt.save((err) => {
                if(err) res.json(err);
                res.json(foundIt);
            })
        })
    },
    findUserById: (req,res) =>{
        Users.findOne({_id: req.body.id}, function(err, foundIt){
            if(err) res.json(err);
            res.json(foundIt);
            console.log(foundIt);
        })
    }

}