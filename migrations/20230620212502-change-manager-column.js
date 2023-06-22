'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('equipos', 'manager', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios', // Nombre de la tabla de referencia (usuarios)
        key: 'id' // Nombre de la columna de referencia (id en usuarios)
      },
      onUpdate: 'CASCADE', // Opcional: acciones a realizar en cascada al actualizar el valor
      onDelete: 'CASCADE' // Opcional: acciones a realizar en cascada al eliminar el valor
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('equipos', 'manager', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  }
};
