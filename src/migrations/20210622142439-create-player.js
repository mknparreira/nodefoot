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
        allowNull: true,
        type: Sequelize.DATEONLY,
      },

      overall: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      position: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['GOALKEEPER', 'DEFENDER', 'MIDFIELDER', 'FORWARD'],
      },

      traits: {
        allowNull: true,
        type: Sequelize.JSON,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Players');
  },
};
