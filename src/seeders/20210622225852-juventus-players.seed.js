module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Szczesny',
        country: 'Poland',
        birth_date: '1990-04-18',
        overall: '87',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Buffon',
        country: 'Italy',
        birth_date: '1978-01-28',
        overall: '87',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Chiellini',
        country: 'Italy',
        birth_date: '1984-08-14',
        overall: '87',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'De Ligt',
        country: 'Netherlands',
        birth_date: '1999-08-12',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alex Sandro',
        country: 'Brazil',
        birth_date: '1991-01-26',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Danilo',
        country: 'Brazil',
        birth_date: '1991-07-15',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Quadrado',
        country: 'Colombia',
        birth_date: '1988-05-26',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Arthur',
        country: 'Brazil',
        birth_date: '1996-08-12',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Aaron Ramsey',
        country: 'Wales',
        birth_date: '1990-12-26',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mckennie',
        country: 'United States',
        birth_date: '1998-08-28',
        overall: '75',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rabiot',
        country: 'France',
        birth_date: '1995-04-03',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bentancur',
        country: 'Uruguay',
        birth_date: '1997-06-25',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bernardeschi',
        country: 'Italy',
        birth_date: '1994-02-16',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Khedira',
        country: 'Germany',
        birth_date: '1987-04-04',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cristiano Ronaldo',
        country: 'Portugal',
        birth_date: '1985-02-05',
        overall: '91',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Álvaro Morata',
        country: 'Spain',
        birth_date: '1992-10-23',
        overall: '80',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Paolo Dybala',
        country: 'Argentina',
        birth_date: '1993-11-15',
        overall: '85',
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
