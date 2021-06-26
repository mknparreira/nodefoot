module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 2,
        fk_player_id: 24,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 25,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 26,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 27,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 28,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 29,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 30,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 31,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 32,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 33,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 34,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 35,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 36,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 37,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 38,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 2,
        fk_player_id: 39,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
