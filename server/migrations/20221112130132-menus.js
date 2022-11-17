'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('menus',{
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
   });
     
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('menus');
  }
};
