module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Ter Stegen',
        country: 'Germany',
        birth_date: '1992-04-30',
        overall: '90',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Neto',
        country: 'Brazil',
        birth_date: '1989-07-19',
        overall: '82',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dest',
        country: 'United States',
        birth_date: '2000-11-03',
        overall: '78',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Piqué',
        country: 'Spain',
        birth_date: '1987-02-02',
        overall: '85',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lenglet',
        country: 'France',
        birth_date: '1995-06-17',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jordi Alba',
        country: 'Spain',
        birth_date: '1989-03-21',
        overall: '86',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sergi Roberto',
        country: 'Spain',
        birth_date: '1992-02-07',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Umtiti',
        country: 'France',
        birth_date: '1993-11-14',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sergio Busquets',
        country: 'Spain',
        birth_date: '1988-07-16',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pjanic',
        country: 'Bosnia',
        birth_date: '1990-04-02',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Coutinho',
        country: 'Brazil',
        birth_date: '1992-06-12',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'De Jong',
        country: 'Netherlands',
        birth_date: '1997-05-12',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Andrés Iniesta',
        country: 'Spain',
        birth_date: '1984-05-11',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Griezmann',
        country: 'France',
        birth_date: '1991-03-21',
        overall: '88',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lionel Messi',
        country: 'Argentina',
        birth_date: '1987-06-24',
        overall: '90',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dembelé',
        country: 'France',
        birth_date: '1997-05-15',
        overall: '84',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ansu Fati',
        country: 'Spain',
        birth_date: '2002-10-30',
        overall: '76',
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
