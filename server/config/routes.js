var Product = require('../controllers/products.js');

module.exports = (app) => {
    app.post('/product/add', Product.create);
    app.get('/product/getlist', Product.index);
}