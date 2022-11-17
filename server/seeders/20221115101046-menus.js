'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('menus', [
      {
   
      name: 'Snacks',
      image: "https://cdn-icons-png.flaticon.com/512/2515/2515322.png",
      visible:true,
      },
      {

        name: 'Burger',
        image: "https://cdn-icons-png.flaticon.com/512/878/878052.png",
        visible:true,
      },
      {
 
          name: 'Fishes',
          image: "https://cdn-icons-png.flaticon.com/512/6469/6469203.png",
          visible:true,
          },
      {
     
            name: 'Pizza',
            image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
            visible:true,
      },
      {
 
          name: 'Steak',
          image: "https://cdn-icons-png.flaticon.com/512/5344/5344260.png",
          visible:true,
      },   
      {
        name: 'Soup',
        image: "https://cdn-icons-png.flaticon.com/512/889/889705.png",
        visible:true,
      },  
      {
        name: 'Chicken',
        image: "https://cdn-icons-png.flaticon.com/512/1046/1046802.png",
        visible:true,
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('menus', null, {});
     
  }
};
