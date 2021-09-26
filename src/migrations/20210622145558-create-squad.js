module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Squads',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        fk_club_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'clubs',
            },
            key: 'id',
          },
        },

        fk_player_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'players',
            },
            key: 'id',
          },
        },

        kit_number: {
          allowNull: false,
          // unique: true,
          type: Sequelize.INTEGER(11).UNSIGNED,
        },

        state: {
          allowNull: true,
          type: Sequelize.ENUM,
          values: ['INJURIED', 'SUSPENDED'],
        },

        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },

        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['fk_player_id', 'fk_club_id'],
          },
        ],
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Squads');
  },
};
