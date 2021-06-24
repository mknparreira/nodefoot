module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Oblak',
        country: 'Slovenia',
        birth_date: '1993-01-07',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Grbić',
        country: 'Croatia',
        birth_date: '1996-01-18',
        overall: '',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'J. M. Giménez',
        country: 'Uruguay',
        birth_date: '1995-01-20',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Renan Lodi',
        country: 'Brazil',
        birth_date: '1998-04-08',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Savic',
        country: 'Croatia',
        birth_date: '1991-01-08',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Felipe',
        country: 'Brazil',
        birth_date: '1989-05-16',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hermoso',
        country: 'Spain',
        birth_date: '1995-06-18',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Trippier',
        country: 'England',
        birth_date: '1990-09-19',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Vrsaljko',
        country: 'Croatia',
        birth_date: '1992-01-10',
        overall: '',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Kondogbia',
        country: 'Central African',
        birth_date: '1993-02-15',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Torreira',
        country: 'Uruguay',
        birth_date: '1996-02-11',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Koke',
        country: 'Spain',
        birth_date: '1992-01-08',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Saul',
        country: 'Spain',
        birth_date: '1994-11-21',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lemar',
        country: 'France',
        birth_date: '1995-11-12',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'H. Herrera',
        country: 'Mexico',
        birth_date: '1990-04-19',
        overall: '',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'João Félix',
        country: 'Portugal',
        birth_date: '1999-11-10',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Luis Suarez',
        country: '',
        birth_date: '1987-01-24',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Carrasco',
        country: 'Belgium',
        birth_date: '1993-09-04',
        overall: '',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Osmán Dembélé',
        country: 'France',
        birth_date: '1997-07-12',
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
