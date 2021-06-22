module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('coaches', [
      {
        name: 'Jorge Jesus',
        country: 'Portugal',
        birth_date: '1954-07-24',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sérgio Conceição',
        country: 'Portugal',
        birth_date: '1974-05-15',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rúbem Amorim',
        country: 'Portugal',
        birth_date: '1986-01-27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mikel Arteta',
        country: 'Spain',
        birth_date: '1982-03-26',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Thomas Tuchel',
        country: 'Germany',
        birth_date: '1973-08-29',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Brendan Rodgers',
        country: 'Northen Ireland',
        birth_date: '1973-01-26',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jurgen Klopp',
        country: 'Germany',
        birth_date: '1967-06-16',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Josep Guardiola',
        country: 'Spain',
        birth_date: '1971-01-18',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gunnar Solskjaer',
        country: 'Norway',
        birth_date: '1973-02-26',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Nuno Espirito Santo',
        country: 'Portugal',
        birth_date: '1974-01-25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Zinedine Zidane',
        country: 'France',
        birth_date: '1972-06-23',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Ronald Koeman',
        country: 'Netherlands',
        birth_date: '1963-03-21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Diego Simeone',
        country: 'Argentina',
        birth_date: '1970-04-28',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'José Bordalás',
        country: 'Spain',
        birth_date: '1964-03-05',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Hans-Dieter Flick',
        country: 'Germany',
        birth_date: '1965-02-24',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lucien Favre',
        country: 'Switzerland',
        birth_date: '1957-11-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Massimiliano Allegri',
        country: 'Italy',
        birth_date: '1987-08-11',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Stefano Pioli',
        country: 'Italy',
        birth_date: '1965-10-20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Antonio Conte',
        country: 'Italy',
        birth_date: '1969-07-31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Mauricio Pochettino',
        country: 'Argentina',
        birth_date: '1972-03-02',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('coaches', null, {});
  },
};
