const {Sequelize} = require('sequelize')
const dbConnection = require('../database/divooradbConnection');
const itemsModel = dbConnection.define('items',
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
  menus_id:{
    type:Sequelize.INTEGER,
    allowNull:false,
  },
  restaurants_id:{
    type:Sequelize.INTEGER,
    allowNull:false,
  },
  price:{
    type:Sequelize.FLOAT,
    allowNull:false,
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  image:{
    type:Sequelize.TEXT,
    allowNull:true,
  }
},{
         timestamps:false
    });
module.exports = itemsModel;
