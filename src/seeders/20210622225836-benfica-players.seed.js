module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('players', [
      {
        name: 'Helton Leite',
        country: 'Brazil',
        birth_date: '1990-11-02',
        overall: '75',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Odysseas',
        country: 'Greece',
        birth_date: '1994-04-26',
        overall: '81',
        position: 'GOALKEEPER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gilberto',
        country: 'Brazil',
        birth_date: '1993-03-07',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Grimaldo',
        country: 'Spain',
        birth_date: '1995-09-20',
        overall: '84',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Vertonghen',
        country: 'Belgium',
        birth_date: '1987-04-24',
        overall: '83',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'André Almeida',
        country: 'Portugal',
        birth_date: '1990-09-10',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Lucas Veríssimo',
        country: 'Brazil',
        birth_date: '1995-07-02',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Otamendi',
        country: 'Argentina',
        birth_date: '1988-02-12',
        overall: '80',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Jardel',
        country: 'Brazil',
        birth_date: '1986-03-29',
        overall: '75',
        position: 'DEFENDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pizzi',
        country: 'Portugal',
        birth_date: '1989-10-06',
        overall: '84',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gabriel',
        country: 'Brazil',
        birth_date: '1993-09-18',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Rafa',
        country: 'Portugal',
        birth_date: '1993-05-17',
        overall: '83',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Weigl',
        country: 'Germany',
        birth_date: '1995-09-08',
        overall: '79',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Cervi',
        country: 'Argentina',
        birth_date: '1994-05-26',
        overall: '78',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Taarabat',
        country: 'Morocco',
        birth_date: '1989-05-24',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Samaris',
        country: 'Greece',
        birth_date: '1989-06-13',
        overall: '77',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Pedrinho',
        country: 'Brazil',
        birth_date: '1998-04-13',
        overall: '75',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Diogo Gonçalvez',
        country: 'Portugal',
        birth_date: '1997-02-06',
        overall: '76',
        position: 'MIDFIELDER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Everton',
        country: 'Brazil',
        birth_date: '1996-03-22',
        overall: '81',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Darwin',
        country: 'Uruguay',
        birth_date: '1999-06-24',
        overall: '79',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Waldschmidt',
        country: 'Germany',
        birth_date: '1996-05-19',
        overall: '76',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Gonçalo Ramos',
        country: 'Portugal',
        birth_date: '2001-06-20',
        overall: '76',
        position: 'FORWARD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Seferovic',
        country: 'Switzerland',
        birth_date: '1992-02-22',
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
