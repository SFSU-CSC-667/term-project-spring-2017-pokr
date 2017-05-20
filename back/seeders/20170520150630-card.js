'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cards",[{
      name:"AC",
      value:"Ace",
      suit:"Clubs",
      spriteX:"A",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"AD",
      value:"Ace",
      suit:"Diamonds",
      spriteX:"A",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"AH",
      value:"Ace",
      suit:"Hearts",
      spriteX:"A",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"AS",
      value:"Ace",
      suit:"Spades",
      spriteX:"A",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"2C",
      value:"Two",
      suit:"Clubs",
      spriteX:"2",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"2D",
      value:"Two",
      suit:"Diamonds",
      spriteX:"2",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"2H",
      value:"Two",
      suit:"Hearts",
      spriteX:"2",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"2S",
      value:"Two",
      suit:"Spades",
      spriteX:"2",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"3C",
      value:"Three",
      suit:"Clubs",
      spriteX:"3",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"3D",
      value:"Three",
      suit:"Diamonds",
      spriteX:"3",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"3H",
      value:"Three",
      suit:"Hearts",
      spriteX:"3",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"3S",
      value:"Three",
      suit:"Spades",
      spriteX:"3",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"4C",
      value:"Four",
      suit:"Clubs",
      spriteX:"4",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"4D",
      value:"Four",
      suit:"Diamonds",
      spriteX:"4",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"4H",
      value:"Four",
      suit:"Hearts",
      spriteX:"4",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"4S",
      value:"Four",
      suit:"Spades",
      spriteX:"4",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"5C",
      value:"Five",
      suit:"Clubs",
      spriteX:"5",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"5D",
      value:"Five",
      suit:"Diamonds",
      spriteX:"5",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"5H",
      value:"Five",
      suit:"Hearts",
      spriteX:"5",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"5S",
      value:"Five",
      suit:"Spades",
      spriteX:"5",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"6C",
      value:"Six",
      suit:"Clubs",
      spriteX:"6",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"6D",
      value:"Six",
      suit:"Diamonds",
      spriteX:"6",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"6H",
      value:"Six",
      suit:"Hearts",
      spriteX:"6",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"6S",
      value:"Six",
      suit:"Spades",
      spriteX:"6",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"7C",
      value:"Seven",
      suit:"Clubs",
      spriteX:"7",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"7D",
      value:"Seven",
      suit:"Diamonds",
      spriteX:"7",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"7H",
      value:"Seven",
      suit:"Hearts",
      spriteX:"7",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"7S",
      value:"Seven",
      suit:"Spades",
      spriteX:"7",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"8C",
      value:"Eight",
      suit:"Clubs",
      spriteX:"8",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"8D",
      value:"Eight",
      suit:"Diamonds",
      spriteX:"8",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"8H",
      value:"Eight",
      suit:"Hearts",
      spriteX:"8",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"8S",
      value:"Eight",
      suit:"Spades",
      spriteX:"8",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"9C",
      value:"Nine",
      suit:"Clubs",
      spriteX:"9",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"9D",
      value:"Nine",
      suit:"Diamonds",
      spriteX:"9",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"9H",
      value:"Nine",
      suit:"Hearts",
      spriteX:"9",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"9S",
      value:"Nine",
      suit:"Spades",
      spriteX:"9",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"TC",
      value:"Ten",
      suit:"Clubs",
      spriteX:"T",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"TD",
      value:"Ten",
      suit:"Diamonds",
      spriteX:"T",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"TH",
      value:"Ten",
      suit:"Hearts",
      spriteX:"T",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"TS",
      value:"Ten",
      suit:"Spades",
      spriteX:"T",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"JC",
      value:"Jack",
      suit:"Clubs",
      spriteX:"J",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"JD",
      value:"Jack",
      suit:"Diamonds",
      spriteX:"J",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"JH",
      value:"Jack",
      suit:"Hearts",
      spriteX:"J",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"JS",
      value:"Jack",
      suit:"Spades",
      spriteX:"J",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"QC",
      value:"Queen",
      suit:"Clubs",
      spriteX:"Q",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"QD",
      value:"Queen",
      suit:"Diamonds",
      spriteX:"Q",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"QH",
      value:"Queen",
      suit:"Hearts",
      spriteX:"Q",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"QS",
      value:"Queen",
      suit:"Spades",
      spriteX:"Q",
      spriteY:"S",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"KC",
      value:"King",
      suit:"Clubs",
      spriteX:"K",
      spriteY:"C",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"KD",
      value:"King",
      suit:"Diamonds",
      spriteX:"K",
      spriteY:"D",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"KH",
      value:"King",
      suit:"Hearts",
      spriteX:"K",
      spriteY:"H",
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"KS",
      value:"King",
      suit:"Spades",
      spriteX:"K",
      spriteY:"S",
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
