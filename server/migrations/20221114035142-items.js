'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('items');

  }
};
