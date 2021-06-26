module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Cillessen',
        country: 'Netherlands',
        birth_date: '1989-04-22',
        overall: '81',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jaume Domenech',
        country: 'Spain',
        birth_date: '1990-11-05',
        overall: '77',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Francisco Ferro',
        country: 'Portugal',
        birth_date: '1997-03-26',
        overall: '77',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mangala',
        country: 'France',
        birth_date: '1991-02-13',
        overall: '74',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel Paulista',
        country: 'Brazil',
        birth_date: '1990-11-06',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cristiano Piccini',
        country: 'Italy',
        birth_date: '1992-09-26',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel Molina',
        country: 'Spain',
        birth_date: '2000-05-03',
        overall: '78',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carlos Soler',
        country: 'Spain',
        birth_date: '1997-01-02',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Oliva',
        country: 'Uruguay',
        birth_date: '1996-06-01',
        overall: '69',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wass',
        country: 'Denmark',
        birth_date: '1989-05-31',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Radic',
        country: 'Serbia',
        birth_date: '1998-03-17',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kang Lee',
        country: 'South Korea',
        birth_date: '2001-02-19',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Yunus Musah',
        country: 'United States',
        birth_date: '2002-11-29',
        overall: '62',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gameiro',
        country: 'France',
        birth_date: '1987-05-09',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gonçalo Guedes',
        country: 'Portugal',
        birth_date: '1996-11-29',
        overall: '81',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Patrick Cutrone',
        country: 'Italy',
        birth_date: '1998-01-03',
        overall: '75',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cheryshev',
        country: 'Russian',
        birth_date: '1990-12-26',
        overall: '77',
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
