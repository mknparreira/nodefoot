module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Keylor Navas',
        country: 'Costa Rica',
        birth_date: '1986-12-15',
        overall: '87',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Areola',
        country: 'France',
        birth_date: '1993-02-27',
        overall: '82',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kimpembe',
        country: 'France',
        birth_date: '1995-08-13',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kehrer',
        country: 'Germany',
        birth_date: '1996-09-21',
        overall: '77',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marquinhos',
        country: 'Brazil',
        birth_date: '1994-03-14',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Juan Bernat',
        country: 'Spain',
        birth_date: '1993-03-01',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kurzawa',
        country: 'France',
        birth_date: '1992-09-04',
        overall: '77',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Florenzi',
        country: 'Italy',
        birth_date: '1991-03-11',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Verratti',
        country: 'Italy',
        birth_date: '1992-11-05',
        overall: '86',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rafinha',
        country: 'Brazil',
        birth_date: '1993-02-12',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Danilo Pereira',
        country: 'Portugal',
        birth_date: '1991-09-09',
        overall: '82',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ander Herreira',
        country: 'Spain',
        birth_date: '1989-08-14',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Draxler',
        country: 'Germany',
        birth_date: '1993-09-20',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gueye',
        country: 'Nigeria',
        birth_date: '1989-06-26',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mbappé',
        country: 'France',
        birth_date: '1998-12-20',
        overall: '91',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Neymar Jr.',
        country: 'Brazil',
        birth_date: '1992-02-05',
        overall: '91',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Icardi',
        country: 'Argentina',
        birth_date: '1993-02-19',
        overall: '85',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Moise Kean',
        country: 'Italy',
        birth_date: '2000-02-28',
        overall: '80',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Di Maria',
        country: 'Argentina',
        birth_date: '2021-05-28',
        overall: '87',
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
