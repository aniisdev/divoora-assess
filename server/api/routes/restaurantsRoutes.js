const restaurantsController = require('../../controllers/restaurantsController');
const itemsModel = require('../../models/itemsModel');
module.exports = function(app,router){
    router.get('/api/menus/list',restaurantsController.loadMenusList);
    //resutaurants
    router.get('/api/restaurants/list',restaurantsController.loadRestaurantsList);
    router.get('/api/restaurants/single/:id',restaurantsController.loadSingleRestaurant);
    router.post('/api/items/create',async(req,res)=>{

        await itemsModel.create(req.body).then((response)=>{
            res.sendStatus(200);
        });
    });
    app.use(router);
}