const account = require('./account/lib.js');
const product = require('./product/libProduct.js');
const time = require('./time/libTime.js');


module.exports = function (app) {
    app.post('/login',account.login);
    app.post('/signup',account.signup);
    app.post('/numberUser',account.numberUser);
    app.post('/lastUser',account.lastUser);
    app.post('/addProduct',product.addProduct);
    app.post('/numberProduct',product.numberProduct);
    app.post('/listCategory',product.listCategory);
    app.post('/removeProduct',product.removeProduct);
    app.post('/numberPerCategory',product.numberPerCategory);
    app.post('/addTime',time.addTime);
    app.post('/getTime',time.getTime);
    app.post('/updateTime',time.updateTime);
    
    
}