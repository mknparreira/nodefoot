module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clubs', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },

      history: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      stadium_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      fk_coach_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'coaches',
          },
          key: 'id',
        },
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_att: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clubs');
  },
};
