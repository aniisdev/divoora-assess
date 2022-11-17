'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   //snaks
     await queryInterface.bulkInsert('items', [
 
      {
        name: 'Crêpe',
        price: 15,
        description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cr%C3%AApe_opened_up.jpg/180px-Cr%C3%AApe_opened_up.jpg",
        menus_id:1,
        restaurants_id:1,
     },
     {
      name: '50/50 burger',
      price: 15,
      description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
      image:"https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png",
      menus_id:2,
      restaurants_id:1,
   },
   {
      name: '50/50 burger',
      price: 15,
      description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
      image:"https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png",
      menus_id:2,
      restaurants_id:1,
   },
   {
      name: '50/50 burger',
      price: 15,
      description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
      image:"https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png",
      menus_id:2,
      restaurants_id:1,
   },
   {
      name: '50/50 burger',
      price: 15,
      description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
      image:"https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png",
      menus_id:2,
      restaurants_id:1,
   },
        {
      name: '50/50 burger',
      price: 15,
      description:"A type of very thin pancake, usually made from wheat flour (crêpes de Froment) or buckwheat flour (galettes). The word is of French origin, deriving from the Latin crispa, meaning 'curled'.",
      image:"https://w7.pngwing.com/pngs/201/77/png-transparent-hamburger-veggie-burger-take-out-fast-food-kebab-delicious-beef-burger-burger-with-lettuce-tomato-and-cheese-food-beef-recipe.png",
      menus_id:2,
      restaurants_id:1,
   },
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('items', null, {});
     
  }
};
