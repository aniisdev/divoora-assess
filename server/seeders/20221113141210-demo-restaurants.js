'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('restaurants', [
      {
        name: 'Burgerfer',
        image:JSON.stringify({"image":"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"}),
        coordinates:JSON.stringify({}),
        menus:[1,2,3,4,5,6,7,8,9],
        times:JSON.stringify({start:"10:00",end:"21:00"})
      },  
      {
        name: 'Grill Line',
        image:JSON.stringify({"image":"https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80"}),
        coordinates:JSON.stringify({}),
        menus:[1,2,3,4,5,6,7,8,9],
        times:JSON.stringify({start:"10:00",end:"21:00"})
      },
      {
        name: 'Kitchenify',
        image:JSON.stringify({"image":"https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}),
        coordinates:JSON.stringify({}),
        menus:[1,2,3,4,5,6,7,8,9],
        times:JSON.stringify({start:"10:00",end:"21:00"})
      },
      {
        name: 'Sauce Mark',
        image:JSON.stringify({"image":"https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}),
        coordinates:JSON.stringify({}),
        menus:[1,2,3,4,5],
        times:JSON.stringify({start:"10:00",end:"21:00"})
      },
      {
        name: 'Fish Spark',
        image:JSON.stringify({"image":"https://images.unsplash.com/photo-1597692493640-b70139c9e4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}),
        coordinates:JSON.stringify({}),
        menus:[1,2,3,4,5],
        times:JSON.stringify({start:"10:00",end:"21:00"})
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('restaurants', null, {});
     
  }
};
