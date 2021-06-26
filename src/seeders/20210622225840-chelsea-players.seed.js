module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Kepa Arrizabalaga',
        country: 'Spain',
        birth_date: '1994-10-03',
        overall: '80',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mendy',
        country: 'Senegal',
        birth_date: '1992-03-01',
        overall: '83',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcos Alonso',
        country: 'Spain',
        birth_date: '1990-12-21',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Antonio Rudiger',
        country: 'Germany',
        birth_date: '1993-03-03',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thiago Silva',
        country: 'Brazil',
        birth_date: '1984-09-22',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zouma',
        country: 'France',
        birth_date: '1994-10-27',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Azpilicueta',
        country: 'Spain',
        birth_date: '1989-08-28',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Emerson Palmieri',
        country: 'Italy',
        birth_date: '1994-08-03',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jorginho',
        country: 'Italy',
        birth_date: '1991-12-20',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kanté',
        country: 'France',
        birth_date: '1991-03-28',
        overall: '90',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pulisic',
        country: 'United States',
        birth_date: '1998-09-18',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kovacic',
        country: 'Croatia',
        birth_date: '1994-05-06',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mason Mount',
        country: 'England',
        birth_date: '1999-01-10',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ziyech',
        country: 'Morocco',
        birth_date: '1993-03-19',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Havertz',
        country: 'Germany',
        birth_date: '1999-06-11',
        overall: '86',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Timo Werner',
        country: 'Germany',
        birth_date: '1996-03-06',
        overall: '85',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Giroud',
        country: 'France',
        birth_date: '1986-09-30',
        overall: '81',
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
