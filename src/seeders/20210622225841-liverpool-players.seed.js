module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Alisson',
        country: 'Brazil',
        birth_date: '1992-02-10',
        overall: '90',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Adrián',
        country: 'Spain',
        birth_date: '1987-01-03',
        overall: '76',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Virgil Van Dijk',
        country: 'Netherlands',
        birth_date: '1991-07-08',
        overall: '90',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Joe Gomez',
        country: 'England',
        birth_date: '1997-05-23',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tsimikas',
        country: 'Greece',
        birth_date: '1996-05-12',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kabak',
        country: 'Turkey',
        birth_date: '1996-05-12',
        overall: '77',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Andrew Robertson',
        country: 'Scotland',
        birth_date: '1994-03-11',
        overall: '87',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Matip',
        country: 'Cameroon',
        birth_date: '1991-08-08',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Trent Alexander-Arnold',
        country: 'England',
        birth_date: '1988-10-07',
        overall: '87',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Fabinho',
        country: 'Brazil',
        birth_date: '1993-10-23',
        overall: '87',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wijnaldum',
        country: 'Netherlands',
        birth_date: '1990-11-11',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thiago Alcantra',
        country: 'Spain',
        birth_date: '1991-04-11',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Naby Keita',
        country: 'Guinea',
        birth_date: '1995-02-10',
        overall: '81',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jordan Henderson',
        country: 'England',
        birth_date: '1990-06-17',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Shaqiri',
        country: 'Switzerland',
        birth_date: '1991-10-10',
        overall: '81',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sadio Mané',
        country: 'Senegal',
        birth_date: '1992-04-10',
        overall: '90',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Roberto Firmino',
        country: 'Brazil',
        birth_date: '1991-10-02',
        overall: '87',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Diogo Jota',
        country: 'Portugal',
        birth_date: '1996-12-04',
        overall: '83',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mohamed Salah',
        country: 'Senegal',
        birth_date: '1992-06-15',
        overall: '90',
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
