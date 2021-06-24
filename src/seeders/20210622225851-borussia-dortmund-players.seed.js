module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Burki',
        country: 'Switzerland',
        birth_date: '1990-11-14',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hitz',
        country: 'Switzerland',
        birth_date: '1987-09-18',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zagadou',
        country: 'France',
        birth_date: '1999-06-03',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hummels',
        country: 'Germany',
        birth_date: '1988-12-16',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Akanji',
        country: 'Switzerland',
        birth_date: '1995-07-19',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Piszczek',
        country: 'Poland',
        birth_date: '1985-06.03',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Raphael Guerreiro',
        country: 'Portugal',
        birth_date: '1993-12-22',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Schulz',
        country: 'Germany',
        birth_date: '1993-04-01',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Delaney',
        country: 'Denmark',
        birth_date: '1991-09-03',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thorgan Hazard',
        country: 'Belgium',
        birth_date: '1993-03-29',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Emre Can',
        country: 'Germany',
        birth_date: '1994-01-12',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Reyna',
        country: 'United States',
        birth_date: '2002-11-13',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Axel Witzel',
        country: 'Belgium',
        birth_date: '1989-01-12',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Meunier',
        country: 'Belgium',
        birth_date: '1991-09-12',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Reinier',
        country: 'Brazil',
        birth_date: '2002-01-19',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jadon Sancho',
        country: 'England',
        birth_date: '2000-03-25',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Erling Haaland',
        country: 'Norway',
        birth_date: '2000-07-21',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Reus',
        country: 'Germany',
        birth_date: '1989-05-31',
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
