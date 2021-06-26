module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 1,
        fk_player_id: 1,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 2,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 3,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 4,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 5,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 6,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 7,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 8,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 9,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 10,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 11,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 12,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 13,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 14,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 15,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 16,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 17,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 18,
        kit_number: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 19,
        kit_number: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 20,
        kit_number: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 21,
        kit_number: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 22,
        kit_number: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 1,
        fk_player_id: 23,
        kit_number: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
