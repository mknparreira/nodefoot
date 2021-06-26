module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 12,
        fk_player_id: 202,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 203,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 204,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 205,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 206,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 207,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 208,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 209,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 210,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 211,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 212,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 213,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 214,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 215,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 216,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 217,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 12,
        fk_player_id: 218,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
