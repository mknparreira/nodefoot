module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Zack Steffen',
        country: 'United States',
        birth_date: '1995-04-02',
        overall: '76',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ederson',
        country: 'Brazil',
        birth_date: '1993-08-17',
        overall: '88',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kyle Walker',
        country: 'England',
        birth_date: '1990-05-28',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rúben Dias',
        country: 'Portugal',
        birth_date: '1997-05-14',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'John Stones',
        country: 'England',
        birth_date: '1994-05-28',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nathan Aké',
        country: 'Netherlands',
        birth_date: '1995-02-18',
        overall: '79',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Laporte',
        country: 'France',
        birth_date: '1994-05-27',
        overall: '87',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Eric Garcia',
        country: 'Spain',
        birth_date: '2001-01-09',
        overall: '72',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zinchenko',
        country: 'Ukraine',
        birth_date: '1996-12-15',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Benjamin Mendy',
        country: 'France',
        birth_date: '1994-07-17',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'João Cancelo',
        country: 'Portugal',
        birth_date: '1994-05-27',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ilkay Gündogan',
        country: 'Germany',
        birth_date: '1990-10-24',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rodri',
        country: 'Spain',
        birth_date: '1996-06-22',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kevin De Bruyne',
        country: 'Belgium',
        birth_date: '1991-06-28',
        overall: '91',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bernardo Silva',
        country: 'Portugal',
        birth_date: '1994-08-10',
        overall: '87',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Fernandinho',
        country: 'Brazil',
        birth_date: '1985-05-04',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Phil Foden',
        country: 'England',
        birth_date: '2000-05-28',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sterling',
        country: 'England',
        birth_date: '1994-12-08',
        overall: '87',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel Jesus',
        country: 'Brazil',
        birth_date: '1997-04-03',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Aguero',
        country: 'Argentina',
        birth_date: '1988-06-02',
        overall: '88',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ferran Torres',
        country: 'Spain',
        birth_date: '2000-02-29',
        overall: '81',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Riyad Mahrez',
        country: 'Algeria',
        birth_date: '1991-02-21',
        overall: '86',
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
