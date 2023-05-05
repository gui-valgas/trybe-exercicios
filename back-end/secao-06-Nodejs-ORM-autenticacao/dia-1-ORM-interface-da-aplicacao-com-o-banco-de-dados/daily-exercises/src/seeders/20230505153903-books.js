'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Christine',
        author: 'Stephen King',
        pageQuantity: 616,
        createdAt: new Date('2023-05-05T15:40:33.836Z'),
        updatedAt: new Date('2023-05-05T15:40:33.836Z'),
      },
      {
        title: 'A Torre da Andorinha',
        author: 'Andrzej Sapkowski',
        pageQuantity: 452,
        updatedAt: new Date('2023-05-05T15:41:33.836Z'),
        createdAt: new Date('2023-05-05T15:41:33.836Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.bulkDelete('Books', null, {});
  },
};
