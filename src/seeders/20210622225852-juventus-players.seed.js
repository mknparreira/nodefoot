module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Szczesny',
        country: 'Poland',
        birth_date: '1990-04-18',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Buffon',
        country: 'Italy',
        birth_date: '1978-01-28',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Chellini',
        country: 'Italy',
        birth_date: '1984-08-14',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'De Ligt',
        country: 'Netherlands',
        birth_date: '1999-08-12',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alex Sandro',
        country: 'Brazil',
        birth_date: '1991-01-26',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Danilo',
        country: 'Brazil',
        birth_date: '1991-07-15',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Quadrado',
        country: 'Colombia',
        birth_date: '1988-05-26',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Arthur',
        country: 'Brazil',
        birth_date: '1996-08-12',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Aaron Ramsey',
        country: 'Wales',
        birth_date: '1990-12-26',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mckennie',
        country: 'United States',
        birth_date: '1998-08-28',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rabiot',
        country: 'France',
        birth_date: '1995-04-03',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bentacur',
        country: 'Uruguay',
        birth_date: '1997-06-25',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bernardeschi',
        country: 'Italy',
        birth_date: '1994-02-16',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Khedira',
        country: 'Germany',
        birth_date: '1987-04-04',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cristiano Ronaldo',
        country: 'Portugal',
        birth_date: '1985-02-05',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Morata',
        country: 'Spain',
        birth_date: '1992-10-23',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Paolo Dybala',
        country: 'Argentina',
        birth_date: '1993-11-15',
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
