module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Cillessen',
        country: 'Netherlands',
        birth_date: '1989-04-22',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Domenech',
        country: 'Spain',
        birth_date: '1990-11-05',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ferro',
        country: 'Portugal',
        birth_date: '1997-03-26',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mangala',
        country: 'France',
        birth_date: '1991-02-13',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'G.paulista',
        country: 'Brazil',
        birth_date: '1990-11-06',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Piccini',
        country: 'Italy',
        birth_date: '1992-09-26',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'G. Molina',
        country: 'Spain',
        birth_date: '2000-05-03',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'C. Soler',
        country: 'Spain',
        birth_date: '1997-01-02',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'C. Oliva',
        country: 'Uruguay',
        birth_date: '1996-06-01',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wass',
        country: 'Denmark',
        birth_date: '1989-05-31',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Radic',
        country: 'Serbia',
        birth_date: '1998-03-17',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kang In',
        country: 'South Korea',
        birth_date: '2001-02-19',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Musah',
        country: 'United States',
        birth_date: '2002-11-29',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gameiro',
        country: 'France',
        birth_date: '1987-05-09',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gonçalo Guedes',
        country: 'Portugal',
        birth_date: '1996-11-29',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cutrone',
        country: 'Italy',
        birth_date: '1998-01-03',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cheryshev',
        country: 'Russian',
        birth_date: '1990-12-26',
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
