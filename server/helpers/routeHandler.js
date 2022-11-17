const {Router} = require('express');
const router = Router();
module.exports = function(app){
    require('../api/routes/restaurantsRoutes')(app,router);
}