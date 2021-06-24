module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Tatarusanu',
        country: 'Romania',
        birth_date: '1986-02-09',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Donnarumma',
        country: 'Italy',
        birth_date: '1990-07-07',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Theo Hernandez',
        country: 'France',
        birth_date: '1997-10-06',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tomori',
        country: 'England',
        birth_date: '1997-12-19',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kjaer',
        country: 'Denmark',
        birth_date: '1989-03-26',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Romagnoli',
        country: 'Italy',
        birth_date: '1995-01-12',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Calabria',
        country: 'Italy',
        birth_date: '1996-12-06',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: '',
        country: '',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: '',
        country: '',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bennacer',
        country: 'Algeria',
        birth_date: '1997-12-01',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Castilejjo',
        country: 'Spain',
        birth_date: '1995-01-18',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Calhanoglu',
        country: 'Turkey',
        birth_date: '1994-02-08',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kessie',
        country: 'Ivory Coast',
        birth_date: '1996-12-19',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mario Mandzukic',
        country: 'Croatia',
        birth_date: '1986-05-21',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zlatan Ibrahimovic',
        country: 'Sweeden',
        birth_date: '1981-10-03',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rebic',
        country: 'Croatia',
        birth_date: '1993-09-21',
        overall: '',
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
