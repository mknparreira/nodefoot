module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Hugo Lloris',
        country: 'France',
        birth_date: '1986-12-26',
        overall: '87',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Joe Hart',
        country: 'England',
        birth_date: '1987-04-19',
        overall: '76',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Doherty',
        country: 'Ireland',
        birth_date: '1992-01-16',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Reguilón',
        country: 'Spain',
        birth_date: '1996-12-16',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alderweireld',
        country: 'Belgium',
        birth_date: '1989-03-02',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Davinson Sanchez',
        country: 'Colombia',
        birth_date: '1996-06-12',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hojbjerg',
        country: 'Denmark',
        birth_date: '1995-08-05',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Erik Lamela',
        country: 'Argentina',
        birth_date: '1992-03-04',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Eric Dier',
        country: 'England',
        birth_date: '1994-01-15',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Moussa Sissoko',
        country: 'France',
        birth_date: '1989-08-16',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lo Celso',
        country: 'Argentina',
        birth_date: '1996-04-09',
        overall: '82',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dele Alli',
        country: 'England',
        birth_date: '1996-04-11',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ndombele',
        country: 'France',
        birth_date: '1996-12-28',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Heung-Min Son',
        country: 'South Korea',
        birth_date: '1992-07-08',
        overall: '87',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gareth Bale',
        country: 'Wales',
        birth_date: '1989-07-17',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Harry Kane',
        country: 'England',
        birth_date: '1993-07-28',
        overall: '88',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lucas Moura',
        country: 'Brazil',
        birth_date: '1992-08-13',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carlos Vinicius',
        country: 'Brazil',
        birth_date: '1992-08-13',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bergwijn',
        country: 'Netherlands',
        birth_date: '1997-10-08',
        overall: '83',
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
