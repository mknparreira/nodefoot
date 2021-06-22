module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coaches', {

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
    await queryInterface.dropTable('Coaches');
  },
};
