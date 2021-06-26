module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Handanovic',
        country: 'Slovenia',
        birth_date: '1984-07-16',
        overall: '88',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Padelli',
        country: 'Italy',
        birth_date: '1985-10-25',
        overall: '73',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'De Vrij',
        country: 'Netherlands',
        birth_date: '1992-02-05',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kolarov',
        country: 'Serbia',
        birth_date: '1985-11-10',
        overall: '82',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Matteo Darmian',
        country: 'Italy',
        birth_date: '1989-12-02',
        overall: '76',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Vecino',
        country: 'Uruguay',
        birth_date: '1991-08-24',
        overall: '80',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Perisic',
        country: 'Croatia',
        birth_date: '1989-12-02',
        overall: '82',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Arturo Vidal',
        country: 'Chile',
        birth_date: '1987-03-22',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Brozovic',
        country: 'Croatia',
        birth_date: '1992-11-16',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Eriksen',
        country: 'Denmark',
        birth_date: '1992-02-14',
        overall: '85',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alexis Sanchez',
        country: 'Chile',
        birth_date: '1988-12-19',
        overall: '80',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lukaku',
        country: 'Belgium',
        birth_date: '1993-05-13',
        overall: '87',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lautaro Martinez',
        country: 'Argentina',
        birth_date: '1997-08-22',
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
