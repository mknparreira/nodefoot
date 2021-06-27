const { Model } = require('sequelize');

const db = require('../config/Database.config');

const { Sequelize } = db;

module.exports = () => {
  class Match extends Model {
    static associate(models) {
      Match.belongsTo(models.Club);
      Match.belongsTo(models.Club);
    }
  }

  Match.init({
    shift: Sequelize.INTEGER,
    round: Sequelize.INTEGER,
    score_home: Sequelize.INTEGER,
    score_away: Sequelize.INTEGER,
    resume: Sequelize.JSON,
    final_result: {
      type: Sequelize.ENUM,
      values: ['HOME_WON', 'AWAY_WON', 'DRAWN'],
    },
  }, {
    sequelize: db.sequelize,
    modelName: 'Match',
  });

  return Match;
};
