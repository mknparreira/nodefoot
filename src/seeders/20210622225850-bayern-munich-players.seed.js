module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Manuel Neuer',
        country: 'Germany',
        birth_date: '1986-03-26',
        overall: '90',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alexander Nubel',
        country: 'Germany',
        birth_date: '1996-09-29',
        overall: '75',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sule',
        country: 'Germany',
        birth_date: '1995-09-03',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pavard',
        country: 'France',
        birth_date: '1996-03-28',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jerome Boateng',
        country: 'Germany',
        birth_date: '1988-09-02',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'David Alaba',
        country: 'Austria',
        birth_date: '1992-06-23',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lucas Hernandez',
        country: 'France',
        birth_date: '1996-02-14',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alphonso Davies',
        country: 'Canada',
        birth_date: '2000-11-01',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Joshua Kimmich',
        country: 'Germany',
        birth_date: '1995-02-08',
        overall: '88',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Javi Martinez',
        country: 'Spain',
        birth_date: '1988-09-01',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Goretzka',
        country: 'Germany',
        birth_date: '1995-02-06',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tolisso',
        country: 'France',
        birth_date: '1994-08-03',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tiago Dantas',
        country: 'Portugal',
        birth_date: '2000-12-23',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gnabry',
        country: 'Germany',
        birth_date: '1995-07-14',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lewandowski',
        country: 'Poland',
        birth_date: '1988-08-20',
        overall: '90',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Leroy Sané',
        country: 'Germany',
        birth_date: '1996-01-11',
        overall: '85',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Douglas Costa',
        country: 'Brazil',
        birth_date: '1990-09-13',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Choupo-Moting',
        country: 'Cameroon',
        birth_date: '1989-03-22',
        overall: '78',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thomas Müller',
        country: 'Germany',
        birth_date: '1989-09-12',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Coman',
        country: 'France',
        birth_date: '1996-06-12',
        overall: '82',
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
