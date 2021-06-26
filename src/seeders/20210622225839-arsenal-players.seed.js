module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Bernd Leno',
        country: 'Germany',
        birth_date: '1992-03-04',
        overall: '84',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mathew Ryan',
        country: 'Australia',
        birth_date: '1992-04-08',
        overall: '80',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hector Bellerin',
        country: 'Spain',
        birth_date: '1995-03-19',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tierney',
        country: 'Scotland',
        birth_date: '1997-06-05',
        overall: '78',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel Magalhães',
        country: 'Brazil',
        birth_date: '1997-12-19',
        overall: '78',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cedric',
        country: 'Portugal',
        birth_date: '1991-08-31',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'David Luiz',
        country: 'Brazil',
        birth_date: '1987-04-22',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pablo Mari',
        country: 'Spain',
        birth_date: '1993-08-31',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Saka',
        country: 'England',
        birth_date: '2001-09-05',
        overall: '75',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dani Ceballos',
        country: 'Spain',
        birth_date: '1996-08-07',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Odegaard',
        country: 'Norway',
        birth_date: '1998-12-17',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thomas Partey',
        country: 'Ghana',
        birth_date: '1993-06-13',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Xhaka',
        country: 'Switzerland',
        birth_date: '1992-09-27',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alexandre Lacazette',
        country: 'France',
        birth_date: '1991-05-28',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Willian',
        country: 'Brazil',
        birth_date: '1988-08-09',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Aubameyang',
        country: 'Gabon',
        birth_date: '1989-06-18',
        overall: '87',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nicolas Pepe',
        country: 'Ivory Coast',
        birth_date: '1995-05-29',
        overall: '82',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel Martinelli',
        country: 'Brazil',
        birth_date: '2001-06-18',
        overall: '74',
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
