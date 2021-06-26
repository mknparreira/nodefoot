module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 11,
        fk_player_id: 183,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 184,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 185,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 186,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 187,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 188,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 189,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 190,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 191,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 192,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 193,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 194,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 195,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 196,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 197,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 198,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 199,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 200,
        kit_number: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 11,
        fk_player_id: 201,
        kit_number: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
