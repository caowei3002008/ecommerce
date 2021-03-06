var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    reviews: Array,
    quantity: Number,
    storeLocated: String,
    viewTimes: Number,
    url: String
},{timestamps: true})

mongoose.model('Products', ProductSchema);