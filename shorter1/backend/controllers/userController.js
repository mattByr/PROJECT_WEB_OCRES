const account = require('./account/lib.js');
const product = require('./product/libProduct.js');


module.exports = function (app) {
    app.post('/login',account.login);
    app.post('/signup',account.signup);
    app.post('/addProduct',product.addProduct);
}