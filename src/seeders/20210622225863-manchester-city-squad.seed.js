module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 8,
        fk_player_id: 122,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 123,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 124,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 125,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 126,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 127,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 128,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 129,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 130,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 131,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 132,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 133,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 134,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 135,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 136,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 137,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 138,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 139,
        kit_number: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 140,
        kit_number: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 141,
        kit_number: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 142,
        kit_number: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 8,
        fk_player_id: 143,
        kit_number: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
