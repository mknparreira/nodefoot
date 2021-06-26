module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 7,
        fk_player_id: 108,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 109,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 110,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 111,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 112,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 113,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 114,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 115,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 116,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 117,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 118,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 119,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 120,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 7,
        fk_player_id: 121,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
