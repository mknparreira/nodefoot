module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Kasper Schmeichel',
        country: 'Denmark',
        birth_date: '1986-11-05',
        overall: '84',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Joel Ward',
        country: 'Wales',
        birth_date: '1989-10-29',
        overall: '76',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Fofana',
        country: 'France',
        birth_date: '2000-12-17',
        overall: '70',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Soyuncu',
        country: 'Turkey',
        birth_date: '1996-05-23',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wes Morgan',
        country: 'Jamaica',
        birth_date: '1984-01-21',
        overall: '73',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ricardo Pereira',
        country: 'Portugal',
        birth_date: '1993-10-06',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tielemans',
        country: 'Belgium',
        birth_date: '1997-05-07',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'James Maddison',
        country: 'England',
        birth_date: '1996-11-23',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Harvey Barnes',
        country: 'England',
        birth_date: '1997-12-09',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Choudhury',
        country: 'England',
        birth_date: '1997-10-01',
        overall: '74',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ndidi',
        country: 'Nigeria',
        birth_date: '1996-12-16',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jamie Vardy',
        country: 'England',
        birth_date: '1987-01-12',
        overall: '86',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ayoze Perez',
        country: 'Spain',
        birth_date: '1993-07-29',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Iheanacho',
        country: 'Nigeria',
        birth_date: '1993-07-29',
        overall: '75',
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
