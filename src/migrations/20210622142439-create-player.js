module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      birth_date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },

      overall: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      traits: {
        allowNull: true,
        type: Sequelize.JSON,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Players');
  },
};
