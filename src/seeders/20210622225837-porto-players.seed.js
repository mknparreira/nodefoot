module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Marchesin',
        country: 'Argentina',
        birth_date: '1988-03-16',
        overall: '82',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Diogo Costa',
        country: 'Portugal',
        birth_date: '1999-09-19',
        overall: '74',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pepe',
        country: 'Portugal',
        birth_date: '1983-02-26',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcano',
        country: 'Spain',
        birth_date: '1987-06-23',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carraça',
        country: 'Portugal',
        birth_date: '1993-03-01',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wilson Marrafa',
        country: 'Portugal',
        birth_date: '1994-07-23',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Otavio',
        country: 'Brazil',
        birth_date: '1995-02-09',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Oliveira',
        country: 'Portugal',
        birth_date: '1992-06-02',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Uribe',
        country: 'Colombia',
        birth_date: '1991-03-21',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nakajima',
        country: 'Japan',
        birth_date: '1994-08-23',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marega',
        country: 'Mali',
        birth_date: '1991-04-14',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Luis Díaz',
        country: 'Colombia',
        birth_date: '1997-01-13',
        overall: '77',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Soares',
        country: 'Brazil',
        birth_date: '1991-01-17',
        overall: '77',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Toni Martinez',
        country: 'Spain',
        birth_date: '1997-06-30',
        overall: '75',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jesus Corona',
        country: 'Mexico',
        birth_date: '1993-01-06',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Evanílson',
        country: 'Brazil',
        birth_date: '1999-10-06',
        overall: '84',
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
