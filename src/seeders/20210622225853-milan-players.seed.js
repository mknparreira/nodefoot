module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Tatarusanu',
        country: 'Romania',
        birth_date: '1986-02-09',
        overall: '78',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Donnarumma',
        country: 'Italy',
        birth_date: '1990-07-07',
        overall: '85',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Theo Hernandez',
        country: 'France',
        birth_date: '1997-10-06',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tomori',
        country: 'England',
        birth_date: '1997-12-19',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kjaer',
        country: 'Denmark',
        birth_date: '1989-03-26',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Romagnoli',
        country: 'Italy',
        birth_date: '1995-01-12',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Calabria',
        country: 'Italy',
        birth_date: '1996-12-06',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Musacchio',
        country: 'Argentina',
        birth_date: '1990-08-26',
        overall: '78',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sandro Tonali',
        country: 'Italy',
        birth_date: '2000-05-08',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bennacer',
        country: 'Algeria',
        birth_date: '1997-12-01',
        overall: '75',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Castillejo',
        country: 'Spain',
        birth_date: '1995-01-18',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Calhanoglu',
        country: 'Turkey',
        birth_date: '1994-02-08',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kessie',
        country: 'Ivory Coast',
        birth_date: '1996-12-19',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mario Mandzukic',
        country: 'Croatia',
        birth_date: '1986-05-21',
        overall: '80',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zlatan Ibrahimovic',
        country: 'Sweden',
        birth_date: '1981-10-03',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rebic',
        country: 'Croatia',
        birth_date: '1993-09-21',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  },
};
