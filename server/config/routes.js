var Product = require('../controllers/products.js');

module.exports = (app) => {
    app.post('/product/add', Product.create);
    app.get('/product/getlist', Product.index);
    app.post('/product/getoneproduct', Product.findOne);
    app.post('/product/updateproduct', Product.updateOne);
    app.post('/product/deleteproduct', Product.deleteProduct);
}


