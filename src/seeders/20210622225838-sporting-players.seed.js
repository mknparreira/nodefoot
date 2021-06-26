module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Adán',
        country: 'Spain',
        birth_date: '1987-05-13',
        overall: '80',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'André Paulo',
        country: 'Portugal',
        birth_date: '1996-12-18',
        overall: '74',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Acuna',
        country: 'Argentina',
        birth_date: '1991-08-28',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Coates',
        country: 'Uruguay',
        birth_date: '1990-10-07',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Antunes',
        country: 'Portugal',
        birth_date: '1987-04-01',
        overall: '79',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Luis Neto',
        country: 'Portugal',
        birth_date: '1988-03-26',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'João Mário',
        country: 'Portugal',
        birth_date: '1993-01-19',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wendel',
        country: 'Brazil',
        birth_date: '1997-08-28',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'João Palhinha',
        country: 'Portugal',
        birth_date: '1995-07-09',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pedro Gonçalves',
        country: 'Portugal',
        birth_date: '1998-06-28',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Paulinho',
        country: 'Portugal',
        birth_date: '1992-11-09',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Luiz Phellype',
        country: 'Brazil',
        birth_date: '1993-09-27',
        overall: '78',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nuno Santos',
        country: 'Portugal',
        birth_date: '1995-02-13',
        overall: '76',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bruno Tabata',
        country: 'Brazil',
        birth_date: '1997-03-30',
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
