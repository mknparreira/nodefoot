module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 10,
        fk_player_id: 164,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 165,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 166,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 167,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 168,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 169,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 170,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 171,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 172,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 173,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 174,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 175,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 176,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 177,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 178,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 179,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 180,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 181,
        kit_number: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 10,
        fk_player_id: 182,
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
