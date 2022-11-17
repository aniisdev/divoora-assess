const restaurantServices = require('../services/restaurantServices');
module.exports.loadMenusList = (req,res)=>{
    restaurantServices.loadMenusList(req,res);
}
module.exports.loadRestaurantsList = (req,res)=>{
    restaurantServices.loadRestaurantsList(req,res);
}
module.exports.loadSingleRestaurant = (req,res)=>{
    restaurantServices.loadSingleRestaurant(req,res);
}