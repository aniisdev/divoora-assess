'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants',{
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
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('restaurants');
  }
};
