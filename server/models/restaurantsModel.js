const {Sequelize} = require('sequelize')
const dbConnection = require('../database/divooradbConnection');
const restaurantsModel = dbConnection.define('restaurants',
{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true,
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  image:{
    type:Sequelize.JSON,
    allowNull:false,
  },
  coordinates:{
    type:Sequelize.JSON,
    allowNull:false,
  },
  menus:{
    type:Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue:[],
  },
  deliveryFee:{
    type:Sequelize.INTEGER,
    defaultValue:0,
  },
  times:{
    type:Sequelize.JSON,
    allowNull:false,
  }
},{
         timestamps:false
    });
module.exports = restaurantsModel;
