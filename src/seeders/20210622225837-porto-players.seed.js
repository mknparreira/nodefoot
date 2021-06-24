module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Marchesin',
        country: 'Argentina',
        birth_date: '',
        overall: '82',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Diogo Costa',
        country: 'Portugal',
        birth_date: '',
        overall: '74',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pepe',
        country: 'Portugal',
        birth_date: '',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcano',
        country: 'Spain',
        birth_date: '',
        overall: '81',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carraça',
        country: 'Portugal',
        birth_date: '',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wilson Marrafa',
        country: 'Portugal',
        birth_date: '',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Corona',
        country: 'Mexico',
        birth_date: '',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Otavio',
        country: 'Brazil',
        birth_date: '',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Oliveira',
        country: 'Portgual',
        birth_date: '',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Uribe',
        country: 'Colombia',
        birth_date: '',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nakajima',
        country: 'Japan',
        birth_date: '',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marega',
        country: 'Mali',
        birth_date: '',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zé Luis',
        country: 'Portugal',
        birth_date: '',
        overall: '77',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Soares',
        country: 'Brazil',
        birth_date: '',
        overall: '77',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Toni Martinez',
        country: 'Spain',
        birth_date: '',
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
