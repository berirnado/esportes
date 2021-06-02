'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
       type: Sequelize.STRING,
       allowNull: false,
     },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
       type: Sequelize.DATE,
       allowNull: false,
     },
      updatedAt: {
       type: Sequelize.DATE,
       allowNull: false,
     }
   });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('usuarios');   
  }
};
