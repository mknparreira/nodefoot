module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clubs', [
      {
        name: 'Benfica',
        history: '',
        country: 'Portugal',
        stadium_name: 'Estádio da Luz',
        fk_coach_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'FC Porto',
        history: '',
        country: 'Portugal',
        stadium_name: 'Estádio do Dragão',
        fk_coach_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Sporting CP',
        history: '',
        country: 'Portugal',
        stadium_name: 'Estádio do Alvalade',
        fk_coach_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Arsenal',
        history: '',
        country: 'England',
        stadium_name: 'Emirates Stadium',
        fk_coach_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Chelsea',
        history: '',
        country: 'England',
        stadium_name: 'Stamford Bridge',
        fk_coach_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Liverpool',
        history: '',
        country: 'England',
        stadium_name: 'Anfield',
        fk_coach_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Leicester',
        history: '',
        country: 'England',
        stadium_name: 'King Power Stadium',
        fk_coach_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Manchester City',
        history: '',
        country: 'England',
        stadium_name: 'Etihad Stadium',
        fk_coach_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Manchester United',
        history: '',
        country: 'England',
        stadium_name: 'Old Trafford',
        fk_coach_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Tottenham',
        history: '',
        country: 'England',
        stadium_name: 'New Tottenham Hotspur',
        fk_coach_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Real Madrid',
        history: '',
        country: 'Spain',
        stadium_name: 'Santiago Bernabeu',
        fk_coach_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Barcelona',
        history: '',
        country: 'Spain',
        stadium_name: 'Camp Nou',
        fk_coach_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Atletico Madrid',
        history: '',
        country: 'Spain',
        stadium_name: 'Wanda Metropolitano',
        fk_coach_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Valencia',
        history: '',
        country: 'Spain',
        stadium_name: 'Estádio de Mestalla',
        fk_coach_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Bayern Munich',
        history: '',
        country: 'Germany',
        stadium_name: 'Allianz Arena',
        fk_coach_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Borussia Dortmund',
        history: '',
        country: 'Germany',
        stadium_name: 'Signal Iduna Park',
        fk_coach_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Juventus',
        history: '',
        country: 'Italy',
        stadium_name: 'Juventus Stadium',
        fk_coach_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Milan AC',
        history: '',
        country: 'Italy',
        stadium_name: 'Estádio Giuseppe Meazza',
        fk_coach_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'Inter Milan',
        history: '',
        country: 'Italy',
        stadium_name: 'San Ciro',
        fk_coach_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'PSG',
        history: '',
        country: 'France',
        stadium_name: 'Parc des Princes',
        fk_coach_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clubs', null, {});
  },
};
