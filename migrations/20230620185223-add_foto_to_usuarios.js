'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('usuarios', 'foto', {
      type: Sequelize.STRING, // Ajusta el tipo de dato según tus necesidades
      allowNull: true, // Define si el campo puede ser nulo o no
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('usuarios', 'foto');
  },
};
