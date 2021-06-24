module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Courtois',
        country: 'Belgium',
        birth_date: '1992-05-11',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lunin',
        country: 'Ukraine',
        birth_date: '1999-02-11',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carvajal',
        country: 'Spain',
        birth_date: '1992-01-11',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Éder Militão',
        country: 'Brazil',
        birth_date: '',
        overall: '1998-01-18',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Ramos',
        country: 'Spain',
        birth_date: '1986-03-30',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Raphael Varane',
        country: 'France',
        birth_date: '1993-04-25',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nacho Fernandez',
        country: 'Spain',
        birth_date: '1990-01-18',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcelo',
        country: 'Brazil',
        birth_date: '1988-05-12',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mendy',
        country: 'France',
        birth_date: '1995-06-08',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tony Kroos',
        country: 'Germany',
        birth_date: '1990-01-04',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Modric',
        country: 'Croatia',
        birth_date: '1985-09-09',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Asensio',
        country: 'Spain',
        birth_date: '1996-01-21',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Casemiro',
        country: 'Brazil',
        birth_date: '1992-02-23',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Valverde',
        country: 'Uruguay',
        birth_date: '1998-07-22',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Isco',
        country: 'Spain',
        birth_date: '1992-04-21',
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
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hazard',
        country: 'Belgium',
        birth_date: '1991-01-07',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Vinicius Junior',
        country: 'Brazil',
        birth_date: '2000-07-12',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Benzema',
        country: 'France',
        birth_date: '1987-12-19',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rodrygo',
        country: 'Brazil',
        birth_date: '2001-01-09',
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
