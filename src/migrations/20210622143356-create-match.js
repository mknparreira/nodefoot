module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matches', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      shift: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      round: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      fk_club_id_home: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'clubs',
          },
          key: 'id',
        },
      },

      fk_club_id_away: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'clubs',
          },
          key: 'id',
        },
      },

      score_home: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      score_away: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      resume: {
        allowNull: true,
        type: Sequelize.JSON,
      },

      final_result: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['HOME_WON', 'AWAY_WON', 'DRAWN'],
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
    await queryInterface.dropTable('Matches');
  },
};
