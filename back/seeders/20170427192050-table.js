'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Tables",[{
      name:"Newb-1",
      bigBlind:10,
      smallBlind:5,
      status:1,
      minBuyin:2000,
      maxBuyin:20000,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Intermediate-1",
      bigBlind:100,
      smallBlind:50,
      status:1,
      minBuyin:20000,
      maxBuyin:200000,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Amateur-1",
      bigBlind:20,
      smallBlind:10,
      status:1,
      minBuyin:4000,
      maxBuyin:40000,
      createdAt:new Date(),
      updatedAt:new Date()
    }])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
