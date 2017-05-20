'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("UserChips",[{
      UserId:1,
      value:10000,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      UserId:2,
      value:10000,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      UserId:3,
      value:10000,
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
