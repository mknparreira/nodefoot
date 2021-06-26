module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('squads', [
      {
        fk_club_id: 9,
        fk_player_id: 144,
        kit_number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 145,
        kit_number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 146,
        kit_number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 147,
        kit_number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 148,
        kit_number: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 149,
        kit_number: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 150,
        kit_number: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 151,
        kit_number: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 152,
        kit_number: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 153,
        kit_number: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 154,
        kit_number: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 155,
        kit_number: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 156,
        kit_number: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 157,
        kit_number: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 158,
        kit_number: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 159,
        kit_number: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 160,
        kit_number: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 161,
        kit_number: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 162,
        kit_number: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        fk_club_id: 9,
        fk_player_id: 163,
        kit_number: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('squads', null, {});
  },
};
