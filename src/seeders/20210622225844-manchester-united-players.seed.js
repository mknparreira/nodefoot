module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'David De Gea',
        country: 'Spain',
        birth_date: '1990-11-07',
        overall: '86',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dean Henderson',
        country: 'England',
        birth_date: '1997-03-12',
        overall: '80',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lindelof',
        country: 'Sweden',
        birth_date: '1994-07-17',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Eric Bailly',
        country: 'Ivory Coast',
        birth_date: '1994-04-17',
        overall: '79',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Phil Jones',
        country: 'England',
        birth_date: '1992-02-21',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Harry Maguire',
        country: 'England',
        birth_date: '1993-03-05',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Luke Shaw',
        country: 'England',
        birth_date: '1995-07-12',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alex Telles',
        country: 'Brazil',
        birth_date: '1992-12-15',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wan-Bissaka',
        country: 'England',
        birth_date: '1997-11-26',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Paul Pogba',
        country: 'France',
        birth_date: '1993-03-15',
        overall: '86',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Juan mata',
        country: 'Spain',
        birth_date: '1988-04-28',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Fred',
        country: 'Brazil',
        birth_date: '1993-03-05',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bruno Fernandes',
        country: 'Portugal',
        birth_date: '1994-09-08',
        overall: '87',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Matic',
        country: 'Serbia',
        birth_date: '1988-08-01',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Van de Beek',
        country: 'Netherlands',
        birth_date: '1997-04-08',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Scott McTominay',
        country: 'Scotland',
        birth_date: '1996-12-08',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cavani',
        country: 'Uruguay',
        birth_date: '1987-12-04',
        overall: '85',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Anthony Martial',
        country: 'France',
        birth_date: '1987-12-14',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcus Rashford',
        country: 'England',
        birth_date: '1997-10-31',
        overall: '85',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Greenwood',
        country: 'England',
        birth_date: '2001-10-01',
        overall: '77',
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
