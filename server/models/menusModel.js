const {Sequelize} = require('sequelize')
const dbConnection = require('../database/divooradbConnection');
const menusModel = dbConnection.define('menus',
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
      type:Sequelize.TEXT,
      allowNull:false,
    },
    visible:{
      type:Sequelize.BOOLEAN,
      defaultValue:true,
    },
    createdAt:{
      type:Sequelize.DATE,
      defaultValue:Sequelize.NOW,
    },
    updatedAt:{
      type:Sequelize.DATE,
      defaultValue:Sequelize.NOW
    },
   },{
         timestamps:false
    });
module.exports = menusModel;
