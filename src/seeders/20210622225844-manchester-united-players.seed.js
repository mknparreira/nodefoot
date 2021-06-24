module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'David De Gea',
        country: 'Spain',
        birth_date: '',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Dean Henderson',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lindelof',
        country: 'Sweden',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Eric Bailly',
        country: 'Ivory Coast',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Phill Jones',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Harry Maguire',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Shaw',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Alex Telles',
        country: 'Brazil',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Wan-Bissaka',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Paul Pogba',
        country: 'France',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Juan mata',
        country: 'Spain',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Fred',
        country: 'Brazil',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bruno Fernandes',
        country: 'Portugal',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Matic',
        country: 'Serbia',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Van de Beek',
        country: 'Netherlands',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mc Tominay',
        country: 'Scotland',
        birth_date: '',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cavani',
        country: 'Uruguay',
        birth_date: '',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Anthony Martial',
        country: 'France',
        birth_date: '',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Marcus Rashford',
        country: 'England',
        birth_date: '',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Greenwood',
        country: 'England',
        birth_date: '',
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
