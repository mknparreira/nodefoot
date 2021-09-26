module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tables', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      position: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      points: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      fk_club_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: {
            tableName: 'clubs',
          },
          key: 'id',
        },
      },

      wow: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      drawn: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      lost: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      gf: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      ga: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },

      gd: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
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
    await queryInterface.dropTable('tables');
  },
};
