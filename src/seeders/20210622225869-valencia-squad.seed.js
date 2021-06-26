module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 14,
        fk_player_id: 238,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 239,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 240,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 241,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 242,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 243,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 244,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 245,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 246,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 247,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 248,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 249,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 250,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 251,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 252,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 253,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 14,
        fk_player_id: 254,
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
