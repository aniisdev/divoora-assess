const menusModel = require('../models/menusModel');
const restaurantsModel = require('../models/restaurantsModel');
const itemsModel = require('../models/itemsModel');
module.exports = {
    async loadMenusList(req,res){
        await menusModel.findAll().then((response)=>{
            res.send(response);
        }).catch((error)=>{
            res.status(400).send({
                message:error.message
            });
        })
    },
    async loadRestaurantsList(req,res){
        await restaurantsModel.findAll().then(async(response)=>{
            const restaurants = [];
            for(let i = 0;i<response.length;i++){
                restaurants.push(response[i].toJSON());
                await menusModel.findAll({where:{id:response[i].menus}}).then((menus)=>{
                    restaurants[i] = {...restaurants[i],menus};
                });
            }
            res.send(restaurants);
        }).catch((error)=>{
            res.status(400).send({
                message:error.message
            })
        })
    },
    async loadSingleRestaurant(req,res){
        const {id} = req.params;
        restaurantsModel.hasMany(itemsModel,{foreignKey:'restaurants_id'});
        itemsModel.belongsTo(restaurantsModel,{foreignKey:'id'});
        await restaurantsModel.findByPk(id,{include:[itemsModel]}).then(async(response)=>{
            if(response){
                const restaurantSchema = response.toJSON();
                restaurantSchema.menus = [];
                await menusModel.findAll({where:{id:response.menus}}).then((menus)=>{
                    if(menus.length > 0){
                        for(let i = 0 ; i< menus.length ;i++){
                            restaurantSchema.menus.push(menus[i]); 
                        }
                    }
                });
                res.send(restaurantSchema);
            }else{
                res.sendStatus(404);
            }
        }).catch((error)=>{
            res.status(400).send({message:error.message});
        })
    },
}